import { useState, useEffect } from 'react';
import { MessageSquareText, HelpCircle, Activity, ChevronRight, PhoneCall } from 'lucide-react';

interface FloatingBeaconProps {
}

export default function FloatingBeacon({}: FloatingBeaconProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show beacon after scrolling 150px
      if (window.scrollY > 150) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 left-6 z-40 hidden sm:block animate-fade-in group">
      
      {/* Dynamic 3D Floating Beacon Sphere Wrapper */}
      <div className="relative flex items-center justify-center p-1.5 rounded-full bg-linear-to-tr from-slate-900/60 to-slate-800/80 backdrop-blur-md border border-white/20 shadow-[0_12px_45px_rgba(0,0,0,0.18)] hover:-translate-y-1.5 hover:scale-[1.03] transition-all duration-300">
        
        {/* Animated outer glowing 3D rings mimicking tower signals */}
        <div className="absolute -inset-1 rounded-full bg-red-brand/15 animate-ping opacity-60" />
        <div className="absolute -inset-3 rounded-full bg-red-brand/5 animate-pulse opacity-40 delay-300" />
        
        {/* Orbital 3D glowing sphere */}
        <div className="relative w-12 h-12 rounded-full overflow-hidden flex items-center justify-center bg-linear-to-b from-slate-950 to-slate-850 shadow-[inset_0_4px_12px_rgba(255,255,255,0.15)] ring-1 ring-white/10 group-hover:rotate-12 transition-transform duration-500">
          
          {/* Continuous spinning radar gradient bar */}
          <div className="absolute inset-0 bg-conic-to-r from-red-650/40 via-transparent to-red-650/40 animate-spin" style={{ animationDuration: '6s' }} />
          
          {/* Active indicator dot and core signal bars */}
          <div className="relative flex flex-col items-center justify-center space-y-0.5">
            <span className="text-[14px]">📡</span>
            <span className="flex h-1.5 w-1.5 rounded-full bg-emerald-400 border border-emerald-950 shadow-sm animate-pulse" />
          </div>
        </div>

        {/* Floating Side panel containing helpful shortcuts, ideal for seniors */}
        <div className="absolute left-16 bottom-0 w-64 bg-white/95 backdrop-blur-md rounded-2xl border border-slate-205/80 shadow-2xl p-4 transition-all duration-300 scale-0 origin-bottom-left group-hover:scale-100 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto">
          
          <div className="space-y-3.5">
            
            {/* Header info */}
            <div className="flex items-center space-x-2 pb-2.5 border-b border-slate-100">
              <div className="bg-red-50 text-red-brand p-1 rounded-lg">
                <Activity className="h-4 w-4 animate-pulse" />
              </div>
              <div>
                <h4 className="text-xs font-black text-slate-900 leading-tight">Carrier Line Signal</h4>
                <p className="text-[9.5px] text-slate-500 font-bold tracking-tight">Tech Revolut Active Scan</p>
              </div>
            </div>

            {/* Direct WhatsApp Action Link */}
            <div>
              <p className="text-[10px] text-slate-400 font-bold uppercase mb-1.5 tracking-wider">Fast WhatsApp Support</p>
              <a
                href="https://wa.me/18022556509"
                target="_blank"
                referrerPolicy="no-referrer"
                className="flex items-center justify-between p-2.5 rounded-xl bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 text-emerald-900 transition cursor-pointer"
              >
                <div className="flex items-center space-x-2">
                  <span className="text-base">💬</span>
                  <div className="text-left">
                    <p className="text-[11px] font-extrabold leading-none">Text 802-255-6509</p>
                    <p className="text-[9px] text-emerald-700 font-bold leading-normal">Answers in minutes</p>
                  </div>
                </div>
                <PhoneCall className="h-3.5 w-3.5 text-emerald-600 animate-bounce" />
              </a>
            </div>

            {/* Helpful senior sub-note */}
            <p className="text-[9.5px] text-slate-400 font-medium leading-relaxed leading-tight italic">
              * Payments processed securely via cheque or encrypted online credit card link. Absolutely no refund policy. Not affiliated with carrier brands.
            </p>

          </div>

        </div>

      </div>
    </div>
  );
}
