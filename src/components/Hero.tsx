import React, { useState } from 'react';
import { ArrowRight, AlertTriangle, TrendingUp, Sparkles, WifiOff, ShieldCheck, Mail, Save } from 'lucide-react';

interface HeroProps {
  onScrollToForm: () => void;
}

export default function Hero({ onScrollToForm }: HeroProps) {
  // 3D card tilt state
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const box = card.getBoundingClientRect();
    const x = e.clientX - box.left - box.width / 2;
    const y = e.clientY - box.top - box.height / 2;
    setTilt({
      x: -(y / (box.height / 2)) * 8,
      y: (x / (box.width / 2)) * 8
    });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  return (
    <div className="relative py-12 md:py-20">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column (Content & Action Calls) */}
        <div className="lg:col-span-7 space-y-6 text-left">
          {/* Micro Alarm Tag */}
          <div className="inline-flex items-center space-x-2 bg-red-50 border border-red-100 px-3.5 py-1.5 rounded-full text-red-brand font-bold text-[11px] tracking-wide uppercase">
            <span className="flex h-1.5 w-1.5 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-red-600"></span>
            </span>
            <span>US Telecom Overpayment Audit</span>
          </div>

          {/* Main Headline */}
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.1] text-slate-900 tracking-tight">
            We Simply Resolve Your <span className="text-red-brand">Network Issues</span> on Your Behalf.
          </h1>

          {/* Sub-copy */}
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-semibold">
            Tired of frustrating signal drops, slow internet speeds, or confusing billing overcharges? TechRevolut acts as your personal independent technical specialist to clean up lines, fix latency issues, and optimize your setup. No online forms or credit cards required—we negotiate with carriers on your behalf.
          </p>

          {/* Core Action Callouts */}
          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <a
              href="https://wa.me/18022556509"
              target="_blank"
              referrerPolicy="no-referrer"
              className="flex-1 py-4 px-6 text-xs sm:text-sm font-black text-white bg-emerald-600 hover:bg-emerald-700 transition flex items-center justify-center space-x-2 shadow-lg shadow-emerald-600/10 rounded-2xl cursor-pointer"
            >
              <span className="text-base">💬</span>
              <span>Consult via WhatsApp</span>
            </a>
            <button
              onClick={onScrollToForm}
              className="flex-1 py-4 px-6 text-xs sm:text-sm font-black text-red-brand border border-red-200 hover:border-red-brand bg-white hover:bg-rose-50 transition rounded-2xl cursor-pointer"
            >
              Request Call Back
            </button>
          </div>
        </div>

        {/* Right Column (Visual 3D Statement Card) */}
        <div className="lg:col-span-5 relative group">
          {/* Chips overlapping the tilt card */}
          <div className="absolute -top-3 right-4 bg-white px-3.5 py-2 rounded-full shadow-lg border border-slate-100 text-[10px] font-extrabold text-slate-700 flex items-center space-x-1 z-10">
            <span className="text-emerald-500">✓</span>
            <span>AT&T Verified</span>
          </div>
          <div className="absolute top-28 -left-5 bg-white px-3.5 py-2 rounded-full shadow-lg border border-slate-100 text-[10px] font-extrabold text-slate-700 flex items-center space-x-1 z-10">
            <span className="text-emerald-500">✓</span>
            <span>Spectrum Checked</span>
          </div>

          {/* Card Component */}
          <div
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
              transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
              transition: 'transform 0.15s ease-out',
            }}
            className="w-full bg-white rounded-3xl shadow-2xl border border-slate-100 p-8 relative preserve-3d overflow-hidden cursor-pointer"
          >
            {/* Green save banner */}
            <div className="absolute top-0 left-0 right-0 bg-emerald-500 text-white text-center py-2.5 text-[10px] font-black tracking-widest uppercase flex items-center justify-center space-x-1.5 shadow-sm">
              <Save className="h-4 w-4 animate-pulse" />
              <span>SAVE UP TO $80/MO</span>
            </div>

            <div className="mt-6 flex justify-between items-center border-b border-gray-100 pb-4">
              <div>
                <h3 className="font-display font-extrabold text-xs text-gray-800 tracking-tight">Monthly Statement</h3>
                <p className="text-[9px] text-gray-400 font-bold uppercase tracking-wider">Account ID: #288-019</p>
              </div>
              <div className="text-right">
                <span className="inline-block bg-slate-105 text-slate-600 text-[9px] font-bold px-2 py-1 rounded">
                  Pending Audit
                </span>
              </div>
            </div>

            <div className="my-6 space-y-3.5">
              <div className="flex justify-between items-center text-xs font-semibold text-gray-650">
                <span>Network Services</span>
                <span className="font-mono text-gray-900 font-bold">$142.00</span>
              </div>
              <div className="flex justify-between items-center text-xs font-semibold text-gray-650">
                <span>Equipment Lease</span>
                <span className="font-mono text-gray-900 font-bold">$45.00</span>
              </div>
              <div className="flex justify-between items-center text-xs font-semibold text-gray-650 border-b border-dashed border-gray-150 pb-3">
                <span>Hidden Fees & Surcharges</span>
                <span className="font-mono text-gray-900 font-bold">$60.00</span>
              </div>
              <div className="flex justify-between items-center pt-3">
                <span className="text-sm font-black text-gray-900">ESTIMATED TOTAL</span>
                <div className="text-right">
                  <span className="text-xl font-black text-red-brand font-mono animate-pulse">$247.00</span>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 px-4 py-3 rounded-2xl border border-slate-100 text-[11px] text-gray-550 font-medium leading-relaxed flex items-start gap-3">
              <ShieldCheck className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
              <span>"I didn't know I lay within optimized billing legacy zones." <strong className="text-gray-750 font-semibold">— Sarah M.</strong></span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
