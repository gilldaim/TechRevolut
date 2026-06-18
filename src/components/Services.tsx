import { CheckCircle2, ArrowRight } from 'lucide-react';
import { SERVICES } from '../data';

interface ServicesProps {
  onScrollToForm: () => void;
}

export default function Services({ onScrollToForm }: ServicesProps) {
  return (
    <div className="space-y-8 py-10">
      <div className="space-y-3 text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center space-x-1.5 bg-red-50 text-red-brand text-[10px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-full border border-red-100">
          <span>Optimization Focus areas</span>
        </div>
        <h2 className="font-display text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
          Common Carrier Inefficiencies We Resolve
        </h2>
        <p className="text-sm text-slate-500 font-medium leading-relaxed">
          Our independent carrier experts audit regional routing setups, legacy contracts, and network parameters to identify and correct hidden overcharges and signal drops.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {SERVICES.map((service) => (
          <div
            key={service.id}
            className="group bg-white rounded-2xl border border-slate-100 p-6 hover:border-red-200 hover:shadow-xl hover:shadow-slate-100 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <span className="text-3xl p-2 bg-slate-50 rounded-xl group-hover:scale-110 transition-transform duration-200">
                  {service.icon}
                </span>
                <h3 className="text-base font-black text-slate-800 group-hover:text-red-brand transition duration-150">
                  {service.title}
                </h3>
              </div>
              <p className="text-xs text-slate-500 font-medium leading-relaxed mb-4">
                {service.description}
              </p>

              <ul className="space-y-2 border-t border-slate-50 pt-4 mb-6">
                {service.features.map((feat) => (
                  <li key={feat} className="flex items-start space-x-2 text-[11px] font-bold text-slate-650">
                    <CheckCircle2 className="h-3.5 w-3.5 text-red-brand shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <button
              onClick={onScrollToForm}
              className="w-full py-3 px-4 rounded-xl border border-slate-200 text-slate-705 hover:text-white hover:bg-red-brand hover:border-red-brand text-[10px] font-black uppercase tracking-wider flex items-center justify-center space-x-1.5 transition cursor-pointer"
            >
              <span>Audit This Connection</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

