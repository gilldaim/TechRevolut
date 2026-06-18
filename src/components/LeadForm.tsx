import React, { useState } from 'react';
import { Phone, Mail, User, ShieldCheck, ArrowRight, CheckCircle2, PhoneCall } from 'lucide-react';
import { PROVIDERS, ISSUES } from '../data';
import { Provider, IssueCategory } from '../types';

interface LeadFormProps {
  onLeadCaptured: (lead: { fullName: string; phone: string; provider: string; issue: string; source: 'form' }) => void;
}

export default function LeadForm({ onLeadCaptured }: LeadFormProps) {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    provider: '' as Provider | '',
    issue: '' as IssueCategory | '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [ticketId, setTicketId] = useState('');

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full Name is required';
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone Number is required';
    } else if (!/^\+?[0-9\s-]{7,15}$/.test(formData.phone.trim())) {
      newErrors.phone = 'Specify a valid phone number';
    }
    if (!formData.provider) newErrors.provider = 'Select your provider';
    if (!formData.issue) newErrors.issue = 'Select your issue';
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    onLeadCaptured({
      fullName: formData.fullName,
      phone: formData.phone,
      provider: formData.provider,
      issue: formData.issue,
      source: 'form',
    });

    setTicketId(`CB-${Math.floor(100000 + Math.random() * 900000)}`);
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setFormData({
      fullName: '',
      phone: '',
      email: '',
      provider: '',
      issue: '',
    });
    setIsSubmitted(false);
  };

  return (
    <div className="bg-white/70 backdrop-blur-md rounded-2xl border border-white/40 p-5 shadow-[0_8px_32px_rgba(15,23,42,0.06)] space-y-4">
      <div className="border-b border-slate-100/80 pb-3">
        <h3 className="font-display font-black text-sm text-slate-800 uppercase tracking-widest">
          Request Free Callback
        </h3>
        <p className="text-xs text-slate-500 font-bold mt-1 leading-relaxed">
          Get called back on your standard telephone within minutes by a friendly US carrier optimization specialist.
        </p>
      </div>

      {/* 🟢 WHATSAPP QUICK DOUBT HOTLINE */}
      <div className="bg-emerald-50/90 border border-emerald-250/60 rounded-xl p-3.5 text-xs text-emerald-950 space-y-2 leading-relaxed">
        <div className="flex items-center space-x-1.5 font-black text-emerald-900">
          <span className="text-base animate-pulse">💬</span>
          <span>WhatsApp Doubt Support</span>
        </div>
        <p className="font-bold text-emerald-800 leading-normal pl-0.5 text-[10.5px]">
          Have any questions or doubts? Direct message or call our support team on WhatsApp at{' '}
          <a
            href="https://wa.me/18022556509"
            target="_blank"
            referrerPolicy="no-referrer"
            className="underline text-rose-600 font-black whitespace-nowrap bg-white px-1.5 py-0.5 rounded border border-rose-100 hover:bg-rose-50 hover:text-rose-700 transition"
          >
            +1 (802) 255-6509
          </a>
        </p>
      </div>

      {/* Reassuring Senior Assistant Note */}
      <div className="bg-slate-50/80 border border-slate-200/50 rounded-xl p-3 text-[11px] text-slate-600 space-y-1.5 leading-relaxed">
        <p className="font-bold text-slate-805">👴 Senior-Friendly Support:</p>
        <ul className="list-disc pl-3 text-[10.5px] space-y-1">
          <li><strong>Flexible & Secure:</strong> Payments processed safely via cheque or encrypted online credit card links. No phone card entry.</li>
          <li><strong>Strict No-Refunds:</strong> Once drafted, all specialized consultative results are final.</li>
          <li><strong>Plain Voice Call:</strong> No smartphone app downloads required. We ring you.</li>
        </ul>
      </div>

      {!isSubmitted ? (
        <form onSubmit={handleSubmit} className="space-y-4">
          
          {/* Name */}
          <div className="space-y-1">
            <label htmlFor="fullName" className="block text-xs font-black text-slate-700 uppercase tracking-wide">
              Full Name <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <User className="absolute left-2.5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-gray-400" />
              <input
                type="text"
                id="fullName"
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                placeholder="Jane Doe"
                className={`w-full bg-slate-50/60 border ${
                  errors.fullName ? 'border-red-500 ring-1 ring-red-500' : 'border-slate-200'
                } rounded-lg pl-8 pr-3 py-2 text-xs font-semibold text-gray-800 placeholder-gray-400 focus:outline-hidden focus:border-red-brand focus:ring-1 focus:ring-red-brand`}
              />
            </div>
            {errors.fullName && <p className="text-[10px] font-bold text-red-600">{errors.fullName}</p>}
          </div>

          {/* Phone */}
          <div className="space-y-1">
            <label htmlFor="phone" className="block text-xs font-black text-slate-700 uppercase tracking-wide">
              Phone Number <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <Phone className="absolute left-2.5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-gray-400" />
              <input
                type="tel"
                id="phone"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="(555) 000-0000"
                className={`w-full bg-slate-50/60 border ${
                  errors.phone ? 'border-red-500 ring-1 ring-red-500' : 'border-slate-200'
                } rounded-lg pl-8 pr-3 py-2 text-xs font-semibold text-gray-800 placeholder-gray-400 focus:outline-hidden focus:border-red-brand focus:ring-1 focus:ring-red-brand`}
              />
            </div>
            {errors.phone && <p className="text-[10px] font-bold text-red-600">{errors.phone}</p>}
          </div>

          {/* Provider Selection */}
          <div className="grid grid-cols-2 gap-2">
            <div className="space-y-1">
              <label htmlFor="provider" className="block text-xs font-black text-slate-700 uppercase tracking-wide">
                Carrier <span className="text-red-500">*</span>
              </label>
              <select
                id="provider"
                value={formData.provider}
                onChange={(e) => setFormData({ ...formData, provider: e.target.value as Provider })}
                className={`w-full bg-slate-50/60 border ${
                  errors.provider ? 'border-red-500' : 'border-slate-200'
                } rounded-lg px-2 py-2 text-xs font-semibold text-gray-800 focus:outline-hidden focus:border-red-brand`}
              >
                <option value="">-- Choose --</option>
                {PROVIDERS.map((prov) => (
                  <option key={prov} value={prov}>
                    {prov}
                  </option>
                ))}
              </select>
              {errors.provider && <p className="text-[10px] font-bold text-red-600">{errors.provider}</p>}
            </div>

            <div className="space-y-1">
              <label htmlFor="issue" className="block text-xs font-black text-slate-700 uppercase tracking-wide">
                Issue <span className="text-red-500">*</span>
              </label>
              <select
                id="issue"
                value={formData.issue}
                onChange={(e) => setFormData({ ...formData, issue: e.target.value as IssueCategory })}
                className={`w-full bg-slate-50/60 border ${
                  errors.issue ? 'border-red-500' : 'border-slate-200'
                } rounded-lg px-2 py-2 text-xs font-semibold text-gray-800 focus:outline-hidden focus:border-red-brand`}
              >
                <option value="">-- Choose --</option>
                {ISSUES.map((issue) => (
                  <option key={issue} value={issue}>
                    {issue}
                  </option>
                ))}
              </select>
              {errors.issue && <p className="text-[10px] font-bold text-red-600">{errors.issue}</p>}
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-red-brand text-white hover:bg-red-700 font-bold py-2.5 px-4 rounded-xl flex items-center justify-center space-x-2 shadow-md shadow-red-600/10 transition cursor-pointer"
          >
            <span>Request Free Callback</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </button>

          <p className="text-[9.5px] text-gray-400 text-center leading-normal font-bold">
            Most customers we assist are surprised by how much they overpay.
          </p>
        </form>
      ) : (
        <div className="py-2 text-center space-y-4">
          <div className="flex justify-center">
            <div className="h-10 w-10 bg-emerald-50 border-2 border-emerald-500 rounded-full flex items-center justify-center text-emerald-600 shadow-sm animate-bounce">
              <CheckCircle2 className="h-5 w-5" />
            </div>
          </div>

          <div className="space-y-1">
            <h4 className="font-display font-black text-sm text-slate-850">Callback Registered!</h4>
            <p className="text-slate-500 text-[11px] font-bold">
              Line audit ticket has been initiated for {formData.fullName}.
            </p>
          </div>

          <div className="bg-slate-50 text-[10.5px] rounded-lg p-3 border border-slate-100 text-left space-y-1 font-semibold text-slate-600">
            <div className="flex justify-between">
              <span>Reference</span>
              <span className="font-mono text-slate-900 font-bold">{ticketId}</span>
            </div>
            <div className="flex justify-between">
              <span>Carrier</span>
              <span className="text-slate-900 font-bold">{formData.provider}</span>
            </div>
            <div className="flex justify-between">
              <span>Issue</span>
              <span className="text-slate-900 font-bold">{formData.issue}</span>
            </div>
          </div>

          <button
            onClick={handleReset}
            className="text-[10px] font-bold text-red-brand hover:text-red-700 bg-red-50 hover:bg-red-100/80 border border-red-100 px-3 py-1.5 rounded transition cursor-pointer"
          >
            File another request
          </button>
        </div>
      )}
    </div>
  );
}
