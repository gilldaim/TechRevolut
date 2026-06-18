import { ArrowRight, Sparkles } from 'lucide-react';

interface CTABannerProps {
  onScrollToForm: () => void;
}

export default function CTABanner({ onScrollToForm }: CTABannerProps) {
  return (
    <section className="bg-red-brand relative overflow-hidden py-24 select-none">
      {/* Decorative vector overlay blurs */}
      <div className="absolute top-1/2 -left-1/4 w-[450px] h-[450px] bg-red-500 rounded-full blur-3xl opacity-40 pointer-events-none" />
      <div className="absolute -top-1/4 -right-1/4 w-[500px] h-[500px] bg-red-750 rounded-full blur-3xl opacity-50 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
        
        {/* Headline */}
        <h2 className="font-display text-4xl sm:text-5xl lg:text-3xl font-black text-white tracking-tight leading-none">
          Let Us Resolve Your Carrier Issues. <br />
          Experience Perfect Connection Speeds.
        </h2>

        {/* Small subtitle */}
        <p className="text-red-100 text-base sm:text-lg max-w-xl mx-auto font-medium leading-relaxed">
          Clean up signal latency, correct regional line dropouts, and secure eligible billing promotions safely without service interruption.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 max-w-md mx-auto">
          <a
            href="https://wa.me/18022556509"
            target="_blank"
            referrerPolicy="no-referrer"
            className="w-full sm:w-auto bg-emerald-600 text-white hover:bg-emerald-700 font-extrabold px-8 py-4 rounded-xl flex items-center justify-center space-x-2 shadow-xl shadow-emerald-600/10 transition-all hover:-translate-y-0.5 cursor-pointer"
          >
            <span className="text-sm">💬</span>
            <span>WhatsApp Consultation</span>
          </a>
          
          <button
            onClick={onScrollToForm}
            className="w-full sm:w-auto bg-transparent text-white hover:bg-white/10 border-2 border-white/40 font-extrabold px-8 py-4 rounded-xl flex items-center justify-center space-x-2 transition cursor-pointer"
          >
            <span>Request Call Slot</span>
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>

        {/* Small regulatory fine print */}
        <p className="text-[10px] text-red-100/70 font-semibold tracking-wider uppercase pt-2">
          ⚡ 100% Free Consultation • Resolution Specialist Active • 15 Minute Response Window
        </p>

      </div>
    </section>
  );
}
