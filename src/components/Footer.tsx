import Logo from './Logo';

interface FooterProps {
  onOpenTerms: () => void;
  onOpenPrivacy: () => void;
}

export default function Footer({ onOpenTerms, onOpenPrivacy }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer" className="bg-[#0F172A] text-slate-400 py-6 px-6 lg:px-8 select-none border-t border-slate-800 text-xs shrink-0">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-slate-800 pb-4 mb-4">
        
        {/* Brand */}
        <div className="flex flex-col space-y-1.5 sm:space-y-0 sm:flex-row sm:items-center sm:space-x-3">
          <Logo className="h-8 w-8" showText={true} lightText={true} />
          <span className="text-slate-700 font-bold hidden sm:inline">|</span>
          <span className="text-slate-400 font-semibold text-[10.5px]">Independent Specialist</span>
          <span className="text-slate-700 font-bold hidden sm:inline">|</span>
          <a href="https://wa.me/18022556509" target="_blank" referrerPolicy="no-referrer" className="text-emerald-400 hover:text-emerald-300 font-black text-[10.5px] whitespace-nowrap flex items-center gap-1">
            <span>📞 WhatsApp Support:</span>
            <span className="underline">802-255-6509</span>
          </a>
        </div>

        {/* Links */}
        <div className="flex flex-wrap gap-4 text-[10.5px] font-bold text-slate-400">
          <a href="#services" className="hover:text-white transition">Latency Optimizations</a>
          <a href="#services" className="hover:text-white transition">Signal Coverage</a>
          <a href="#services" className="hover:text-white transition">Surcharge Reduction</a>
          <button onClick={onOpenTerms} className="hover:text-white transition cursor-pointer text-left">Terms & Conditions</button>
          <button onClick={onOpenPrivacy} className="hover:text-white transition cursor-pointer text-left">Privacy Policy</button>
        </div>
      </div>

      {/* Disclaimers & Copyright */}
      <div className="max-w-7xl mx-auto space-y-3">
        <p className="text-[10px] text-slate-500 leading-relaxed font-medium">
          <strong>Independent Specialist Disclaimer:</strong> Tech Revolut is an independent contracting consultant and is not affiliated, sponsored, associated, or endorsed by AT&T, Charter Communications (Spectrum), Comcast (Xfinity), Dish Network L.L.C. (Dish TV), or DirecTV Group, Inc. All manufacturer trademarks, carrier brands, and service models mentioned in our diagnostic materials remain the sole property of their respective trademark holders.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-[10px] text-slate-500 font-bold pt-1">
          <p>© {currentYear} Tech Revolut Inc. All US Rights Reserved.</p>
          <p className="text-slate-600">Locked Carrier Audits • HIPAA Secure Analysis</p>
        </div>
      </div>
    </footer>
  );
}
