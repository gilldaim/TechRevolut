import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StatsStrip from './components/StatsStrip';
import Services from './components/Services';
import HowItWorks from './components/HowItWorks';
import LeadForm from './components/LeadForm';
import Reviews from './components/Reviews';
import CTABanner from './components/CTABanner';
import Footer from './components/Footer';
import FloatingBeacon from './components/FloatingBeacon';
import { Sparkles, CheckCircle2, X } from 'lucide-react';

interface ToastLog {
  id: string;
  title: string;
  name: string;
  phone: string;
  provider: string;
  issue: string;
  source: 'form' | 'chatbot';
}

export default function App() {
  const [activeToast, setActiveToast] = useState<ToastLog | null>(null);
  const [isTermsOpen, setIsTermsOpen] = useState(false);
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);

  // Auto-dismiss toast
  useEffect(() => {
    if (activeToast) {
      const timer = setTimeout(() => {
        setActiveToast(null);
      }, 8000);
      return () => clearTimeout(timer);
    }
  }, [activeToast]);

  const handleLeadCaptured = (lead: {
    fullName: string;
    phone: string;
    provider: string;
    issue: string;
    source: 'form' | 'chatbot';
  }) => {
    // 1. Save to localStorage database for full offline audit trails
    const existingLeads = JSON.parse(localStorage.getItem('clearbill_leads') || '[]');
    const newLead = {
      ...lead,
      id: `CB-${Math.floor(100000 + Math.random() * 900000)}`,
      submittedAt: new Date().toISOString(),
    };
    existingLeads.push(newLead);
    localStorage.setItem('clearbill_leads', JSON.stringify(existingLeads));

    // 2. Fire Toast announcement Alert
    setActiveToast({
      id: newLead.id,
      title: lead.source === 'chatbot' ? 'Alex Chat Advisory Captured' : 'Web Callback Registered',
      name: lead.fullName,
      phone: lead.phone,
      provider: lead.provider,
      issue: lead.issue,
      source: lead.source,
    });
  };

  const handleOpenChat = () => {
    const chatSec = document.getElementById('chatbot-chat');
    if (chatSec) {
      chatSec.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToForm = () => {
    const contactSec = document.getElementById('contact');
    if (contactSec) {
      contactSec.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans antialiased overflow-x-hidden selection:bg-red-200">
      
      {/* 1. Header Navigation block */}
      <Navbar />

      {/* Main Beautiful Linear Landing Page Layout */}
      <main className="max-w-7xl mx-auto px-4 lg:px-8 py-10 space-y-16">
        
        {/* Full-Width Hero Section */}
        <section id="hero" className="w-full">
          <Hero onScrollToForm={handleScrollToForm} />
        </section>

        {/* Full-Width Trust Stats Strip */}
        <section className="w-full">
          <StatsStrip />
        </section>

        {/* Full-Width Core Services / Issues Grids */}
        <section id="services" className="w-full">
          <Services onScrollToForm={handleScrollToForm} />
        </section>

        {/* Full-Width How It Works & FAQ Segment */}
        <section id="how-it-works" className="w-full">
          <HowItWorks onScrollToForm={handleScrollToForm} />
        </section>

        {/* Full-Width Reviews Section */}
        <section id="reviews" className="w-full">
          <Reviews />
        </section>

        {/* Focused conversion zone: Contact, Custom Consulting Banner, and Lead Form */}
        <section id="contact" className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 scroll-mt-20">
          
          {/* Left Column (WhatsApp Fast consulting promo) */}
          <div className="lg:col-span-5 flex flex-col justify-center bg-emerald-600 rounded-3xl p-8 text-white shadow-xl relative overflow-hidden space-y-5">
            <div className="absolute top-0 right-0 p-6 opacity-10 font-bold text-9xl select-none pointer-events-none">💬</div>
            <div className="space-y-2 relative z-10">
              <span className="bg-white/20 text-white text-[10px] sm:text-xs font-extrabold uppercase px-3 py-1.5 rounded-full tracking-wider inline-block">
                TV & CARRIER CONFLICTS
              </span>
              <h3 className="font-display font-black text-2xl sm:text-3xl tracking-tight leading-snug">
                Want to consult about your TV services?
              </h3>
            </div>
            
            <p className="text-xs sm:text-sm text-emerald-100 font-medium leading-relaxed">
              Skip the long holds and annoying menu queues! Get in touch with one of our independent telecom specialists instantly by triggering a dialogue on WhatsApp.
            </p>

            <div className="pt-2">
              <a
                href="https://wa.me/18022556509"
                target="_blank"
                referrerPolicy="no-referrer"
                className="inline-flex w-full sm:w-auto text-center items-center justify-center bg-white text-emerald-950 hover:bg-emerald-50 text-xs sm:text-sm font-black py-4 px-6 rounded-2xl shadow-md transition-colors cursor-pointer space-x-2"
              >
                <span>Message us on WhatsApp</span>
                <span className="text-base">→</span>
              </a>
            </div>
          </div>

          {/* Right Column (Lead Callback Registration form) */}
          <div className="lg:col-span-7">
            <LeadForm onLeadCaptured={handleLeadCaptured} />
          </div>

        </section>

        {/* Bottom Call-To-Action Promo Banner */}
        <section className="w-full pt-4">
          <CTABanner onScrollToForm={handleScrollToForm} />
        </section>

      </main>

      {/* 10. Nav-navy footer links and licensing disclaimers */}
      <Footer onOpenTerms={() => setIsTermsOpen(true)} onOpenPrivacy={() => setIsPrivacyOpen(true)} />

      {/* Dynamic 3D Floating Beacon Sphere for Scroll Actions */}
      <FloatingBeacon />

      {/* TERMS & CONDITIONS MODAL */}
      {isTermsOpen && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 z-50 animate-fade-in">
          <div className="bg-white rounded-2xl max-w-xl w-full max-h-[85vh] overflow-y-auto shadow-2xl border border-slate-150 flex flex-col">
            <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-slate-50 rounded-t-2xl">
              <h3 className="font-display font-black text-slate-800 tracking-tight text-lg">Terms & Conditions</h3>
              <button
                onClick={() => setIsTermsOpen(false)}
                className="text-slate-400 hover:text-slate-600 transition p-1 cursor-pointer"
                aria-label="Close Terms"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="p-6 space-y-4 text-xs text-slate-600 leading-relaxed overflow-y-auto">
              <p className="font-bold text-slate-800 text-sm">Welcome to Tech Revolut.</p>
              <p>Please read these Terms & Conditions thoroughly and verify the following operational clauses prior to engaging with our consultative platforms:</p>
              
              <div className="bg-slate-50 border border-slate-200/60 rounded-xl p-4 space-y-3">
                <p>
                  <strong className="text-slate-800 block mb-1">1. Independent Third-Party Representation</strong>
                  Tech Revolut operates strictly as an independent contracting consulting company. We are NOT associated, sponsored, endorsed, or affiliated directly with AT&T, Spectrum, Xfinity, Comcast, Dish TV, DirecTV, or any other carrier networks. We resolve local signal issues, latency complications, and billing overcharges on behalf of the customer, acting as their independent consulting representative.
                </p>
                <p>
                  <strong className="text-slate-800 block mb-1">2. Payment Method Constraints</strong>
                  For any diagnostic audits, regional line optimization plans, or consultancy service deliverables provided by our specialists, Tech Revolut accepts payments secure and simple via cheque or online credit card transactions processed through weblinks. For our clients' protection, we strictly do not accept credit card details over the phone.
                </p>
                <p>
                  <strong className="text-slate-800 block mb-1">3. Strict No-Refund Policy</strong>
                  There is an absolute <span className="underline font-bold text-slate-900">no-refund policy</span>. Once you are consulted by a Tech Revolut carrier optimization specialist or agent, all consultancy and diagnostic deliverables are marked final, complete, and fully rendered. No reversals or refunds of associated transactions will be authorized or permitted.
                </p>
              </div>

              <p>By entering your contact phone, name, and selecting your carrier parameters through either our web application or automated specialist chatbot, you acknowledge that you accept these clauses completely and voluntarily.</p>
            </div>
            <div className="p-4 bg-slate-50 border-t border-slate-100 flex justify-end rounded-b-2xl">
              <button
                onClick={() => setIsTermsOpen(false)}
                className="bg-slate-800 hover:bg-slate-950 text-white font-bold px-4 py-2 rounded-xl text-xs transition cursor-pointer"
              >
                Accept & Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* PRIVACY POLICY MODAL */}
      {isPrivacyOpen && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 z-50 animate-fade-in">
          <div className="bg-white rounded-2xl max-w-xl w-full max-h-[85vh] overflow-y-auto shadow-2xl border border-slate-150 flex flex-col">
            <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-slate-50 rounded-t-2xl">
              <h3 className="font-display font-black text-slate-800 tracking-tight text-lg">Privacy Policy</h3>
              <button
                onClick={() => setIsPrivacyOpen(false)}
                className="text-slate-400 hover:text-slate-600 transition p-1 cursor-pointer"
                aria-label="Close Privacy"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="p-6 space-y-4 text-xs text-slate-600 leading-relaxed overflow-y-auto">
              <p className="font-bold text-slate-800 text-sm">Our Privacy Practices</p>
              <p>Tech Revolut values the secure capture and handling of carrier network logs and residential optimization file reports. We prioritize HIPAA and privacy protocols when reviewing details.</p>
              
              <div className="bg-slate-50 border border-slate-200/60 rounded-xl p-4 space-y-3">
                <p>
                  <strong className="text-slate-800 block mb-1">Independent Third-Party Consulting Data</strong>
                  Because we act strictly as an independent third-party consulting firm solving carrier networks issues on behalf of customers, we capture name, contact phone numbers, and provider information solely to formulate customized carrier routing reports and bill dispute packets.
                </p>
                <p>
                  <strong className="text-slate-800 block mb-1">Billing Verification Security</strong>
                  As physical cheques and secure credit card links represent our payment pipeline, any payment data transmitted during invoice settlements goes through strict, highly encrypted bank-level verification protocols.
                </p>
                <p>
                  <strong className="text-slate-800 block mb-1">Consultation Non-Refundability</strong>
                  Once consulted, all case details and diagnostic reports are finalized inside our system. No client data is sold or shared with any unaffiliated marketing entity. All information gathered is used strictly to consult and optimize your telecom setup.
                </p>
              </div>

              <p>If you have questions about payment processing security or optimization files, please contact your allocated Tech Revolut consultant during your callback consultation.</p>
            </div>
            <div className="p-4 bg-slate-50 border-t border-slate-100 flex justify-end rounded-b-2xl">
              <button
                onClick={() => setIsPrivacyOpen(false)}
                className="bg-slate-800 hover:bg-slate-950 text-white font-bold px-4 py-2 rounded-xl text-xs transition cursor-pointer"
              >
                Accept & Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* SLIDING DOCKET TOAST NOTIFICATION */}
      {activeToast && (
        <div className="fixed bottom-6 right-6 z-50 max-w-sm w-full bg-slate-900 text-white rounded-2xl shadow-2xl border border-white/10 p-5 animate-float flex flex-col space-y-3">
          <div className="flex items-start justify-between">
            <div className="flex items-center space-x-2.5">
              <div className="bg-red-brand text-white p-1 rounded-lg">
                <CheckCircle2 className="h-5 w-5" />
              </div>
              <div>
                <h4 className="font-display font-extrabold text-sm text-white tracking-tight leading-none">
                  {activeToast.title}
                </h4>
                <p className="text-[10px] text-gray-400 font-mono mt-1 font-semibold">{activeToast.id}</p>
              </div>
            </div>
            <button
              onClick={() => setActiveToast(null)}
              className="text-gray-400 hover:text-white transition p-1"
              aria-label="Close notification"
            >
              <X className="h-4.5 w-4.5" />
            </button>
          </div>

          <div className="bg-white/5 border border-white/5 rounded-xl p-3 text-xs space-y-1.5">
            <div className="flex justify-between">
              <span className="text-gray-450 font-semibold">User:</span>
              <span className="text-white font-extrabold">{activeToast.name}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-450 font-semibold">Phone:</span>
              <span className="text-white font-extrabold font-mono">{activeToast.phone}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-450 font-semibold">Carrier:</span>
              <span className="text-red-400 font-bold">{activeToast.provider}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-450 font-semibold">Issue:</span>
              <span className="text-white font-extrabold">{activeToast.issue}</span>
            </div>
          </div>

          <p className="text-[10px] text-gray-400 italic text-center font-semibold">
            {activeToast.source === 'chatbot' ? 'Alex has saved your details.' : 'Web callback details queued.'} A specialist will contact you.
          </p>
        </div>
      )}

    </div>
  );
}
