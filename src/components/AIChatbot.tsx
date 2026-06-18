import { useState, useEffect, useRef } from 'react';
import { Send, User, Bot, HelpCircle, Phone, ArrowUpRight, CheckCircle } from 'lucide-react';
import { PROVIDERS, ISSUES } from '../data';
import { Provider, IssueCategory, ChatMessage } from '../types';

interface AIChatbotProps {
  onLeadCaptured: (lead: { fullName: string; phone: string; provider: string; issue: string; source: 'chatbot' }) => void;
}

type ChatStep = 'provider' | 'issue' | 'name' | 'phone' | 'completed';

export default function AIChatbot({ onLeadCaptured }: AIChatbotProps) {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [step, setStep] = useState<ChatStep>('provider');
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  
  const [leadData, setLeadData] = useState({
    provider: '' as Provider | '',
    issue: '' as IssueCategory | '',
    fullName: '',
    phone: '',
  });

  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  useEffect(() => {
    setMessages([
      {
        id: 'msg-init',
        sender: 'ai',
        text: "Hey! I'm Alex. Let's look over your telecom setup to fix speeds and cut quiet overcharges.",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      },
      {
        id: 'msg-provider-ask',
        sender: 'ai',
        text: 'Who is your carrier provider of choice?',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        isQuickReply: true,
      },
    ]);
  }, []);

  const addAIMessageWithDelay = (text: string, nextStep: ChatStep, actionAfterDelay?: () => void) => {
    setIsTyping(true);
    const typingDuration = 900;
    
    setTimeout(() => {
      setIsTyping(false);
      setMessages((prev) => [
        ...prev,
        {
          id: `msg-${Date.now()}`,
          sender: 'ai',
          text,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        },
      ]);
      setStep(nextStep);
      if (actionAfterDelay) actionAfterDelay();
    }, typingDuration);
  };

  const handleSendMessage = (text: string) => {
    if (!text.trim()) return;

    const userMsg: ChatMessage = {
      id: `msg-user-${Date.now()}`,
      sender: 'user',
      text,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };
    setMessages((prev) => [...prev, userMsg]);
    setInputValue('');

    if (step === 'provider') {
      const selectedProvider = text as Provider;
      setLeadData((prev) => ({ ...prev, provider: selectedProvider }));
      const responseText = `${selectedProvider} connection systems typically contain sneaky legacy surcharges. What primary network issue do you experience?`;
      addAIMessageWithDelay(responseText, 'issue');
      
    } else if (step === 'issue') {
      const selectedIssue = text as IssueCategory;
      setLeadData((prev) => ({ ...prev, issue: selectedIssue }));
      const responseText = `${selectedIssue} issues are standard under misconfigured pricing tiers. Let's get configured. What is your full name?`;
      addAIMessageWithDelay(responseText, 'name');

    } else if (step === 'name') {
      const name = text.trim();
      setLeadData((prev) => ({ ...prev, fullName: name }));
      const responseText = `Great to meet you, ${name}! Lastly, what is your contact phone number for our free specialist call back?`;
      addAIMessageWithDelay(responseText, 'phone');

    } else if (step === 'phone') {
      const phoneNum = text.trim();
      const finalLeadData = {
        ...leadData,
        fullName: leadData.fullName,
        phone: phoneNum,
        provider: leadData.provider || 'AT&T' as Provider,
        issue: leadData.issue || 'Slow Internet' as IssueCategory,
        source: 'chatbot' as const,
      };

      setLeadData((prev) => ({ ...prev, phone: phoneNum }));
      onLeadCaptured(finalLeadData);

      const responseText = `Thank you, ${leadData.fullName}! We scheduled your ${leadData.provider} report file. I'll pass this directly to our specialist team. We'll call you shortly!`;
      addAIMessageWithDelay(responseText, 'completed');
    }
  };

  const handleQuickReply = (val: string) => {
    handleSendMessage(val);
  };

  return (
    <div className="bg-white/70 backdrop-blur-md rounded-2xl border border-white/40 shadow-[0_8px_32px_rgba(15,23,42,0.06)] overflow-hidden flex flex-col h-[340px]">
      
      {/* Header */}
      <div className="bg-slate-50/60 border-b border-slate-100/60 px-4 py-2.5 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
          <span className="font-extrabold text-xs text-slate-800">Alex — Carrier Specialist Agent</span>
        </div>
        <span className="text-[9px] font-bold uppercase tracking-wider text-red-brand bg-red-50/70 px-2 py-0.5 rounded">
          AUDIT ACTIVE
        </span>
      </div>

      {/* Chat Messages Area */}
      <div className="flex-1 overflow-y-auto px-4 py-3.5 space-y-2.5 bg-slate-50/50">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex items-end space-x-2 ${
              msg.sender === 'user' ? 'justify-end space-x-reverse' : 'justify-start'
            }`}
          >
            {msg.sender === 'ai' && (
              <div className="w-5 h-5 rounded bg-red-50 text-red-brand flex items-center justify-center font-black text-[9px] border border-red-100 shrink-0">
                A
              </div>
            )}
            
            <div className="max-w-[80%] space-y-0.5">
              <div
                className={`px-3 py-1.5 rounded-xl text-xs font-medium leading-normal ${
                  msg.sender === 'user'
                    ? 'bg-red-brand text-white rounded-br-none font-bold shadow-xs'
                    : 'bg-white text-slate-850 border border-slate-100 rounded-bl-none'
                }`}
              >
                {msg.text}
              </div>
            </div>
          </div>
        ))}

        {isTyping && (
          <div className="flex items-end space-x-2 justify-start">
            <div className="w-5 h-5 rounded bg-red-50 text-red-brand flex items-center justify-center font-black text-[9px] border border-red-100 shrink-0">
              A
            </div>
            <div className="bg-white border border-slate-100 px-3 py-1.5 rounded-xl rounded-bl-none">
              <div className="flex items-center space-x-1">
                <span className="block h-1 w-1 rounded-full bg-slate-400 animate-bounce" />
                <span className="block h-1 w-1 rounded-full bg-slate-400 animate-bounce delay-75" />
                <span className="block h-1 w-1 rounded-full bg-slate-400 animate-bounce delay-150" />
              </div>
            </div>
          </div>
        )}
        
        <div ref={chatEndRef} />
      </div>

      {/* Quick replies */}
      {!isTyping && step !== 'completed' && (
        <div className="px-3 py-2 bg-white border-t border-slate-100 flex flex-wrap gap-1.5 justify-center shrink-0">
          {step === 'provider' && PROVIDERS.map((prov) => (
            <button
              key={prov}
              onClick={() => handleQuickReply(prov)}
              className="bg-slate-50 border border-slate-200 text-[10px] font-bold text-slate-700 hover:text-white hover:bg-red-brand hover:border-red-brand px-2 py-1 rounded-md transition"
            >
              {prov}
            </button>
          ))}

          {step === 'issue' && ISSUES.map((issue) => (
            <button
              key={issue}
              onClick={() => handleQuickReply(issue)}
              className="bg-slate-50 border border-slate-200 text-[10px] font-bold text-slate-700 hover:text-white hover:bg-red-brand hover:border-red-brand px-2 py-1 rounded-md transition"
            >
              {issue}
            </button>
          ))}
        </div>
      )}

      {/* Send form */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSendMessage(inputValue);
        }}
        className="border-t border-slate-100 p-2 bg-white flex items-center space-x-2 shrink-0"
      >
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          disabled={isTyping || step === 'completed' || step === 'provider' || step === 'issue'}
          placeholder={
            step === 'completed'
              ? 'Docket initialized'
              : step === 'provider' || step === 'issue'
              ? 'Select quick replies...'
              : step === 'name'
              ? 'Enter name...'
              : 'Enter phone number...'
          }
          className="flex-1 bg-slate-50 border border-slate-200 rounded-lg px-2.5 py-1.5 text-xs font-semibold text-slate-800 placeholder-slate-400 focus:outline-hidden focus:border-red-brand disabled:opacity-50"
        />
        
        <button
          type="submit"
          disabled={isTyping || !inputValue.trim() || step === 'completed' || step === 'provider' || step === 'issue'}
          className="bg-red-brand text-white hover:bg-red-700 p-2 rounded-lg transition disabled:opacity-40"
        >
          <Send className="h-3 w-3" />
        </button>
      </form>

    </div>
  );
}
