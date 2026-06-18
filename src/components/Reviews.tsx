import { Star, ShieldCheck } from 'lucide-react';
import { REVIEWS } from '../data';

export default function Reviews() {
  return (
    <section id="reviews" className="py-16 bg-slate-100/40 border-t border-slate-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-10">
          <div className="inline-flex items-center space-x-1.5 bg-red-100/60 text-red-brand text-[10.5px] font-black uppercase tracking-widest px-3 py-1 rounded-full border border-red-200">
            <span>Verified Case Reviews</span>
          </div>
          <h2 className="font-display text-2.5xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-none">
            Client Success Stories
          </h2>
          <p className="text-slate-600 text-xs font-bold leading-relaxed max-w-md mx-auto">
            Hear from families and older adults across the US who successfully diagnosed frustrating connection issues and corrected unfair bills.
          </p>
        </div>

        {/* 6-Review Grid: Styled with premium 3D Offset card shadow layers & Compact Glassmorphism */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {REVIEWS.map((review) => (
            <div
              key={review.id}
              className="bg-white/75 backdrop-blur-md rounded-2xl border border-white/60 p-5 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:scale-[1.01] hover:bg-white/90 relative group overflow-hidden shadow-[4px_4px_0px_#1e293b] hover:shadow-[6px_6px_0px_#ea2c36]"
            >
              {/* Subtle backglow gradient */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-linear-to-bl from-red-200/10 to-transparent rounded-full pointer-events-none" />

              <div>
                {/* 5 solid stars & provider flag */}
                <div className="flex items-center justify-between mb-3 border-b border-slate-100/60 pb-3">
                  <div className="flex items-center space-x-0.5 text-amber-500">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="h-3 w-3 fill-amber-500 stroke-amber-500" />
                    ))}
                  </div>
                  <span className="inline-block bg-slate-900/5 text-slate-700 text-[9px] font-black px-2 py-0.5 rounded-md uppercase tracking-wider">
                    {review.provider}
                  </span>
                </div>

                {/* Body paragraph text - styled smaller and clean */}
                <p className="text-slate-750 text-[11px] font-semibold leading-relaxed mb-4 italic text-slate-700">
                  "{review.text}"
                </p>
              </div>

              {/* Review Card Footer details - compact layout */}
              <div className="space-y-3 pt-3 border-t border-slate-105/70 mt-auto">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-black text-xs text-slate-800">
                      {review.fullName}
                    </h4>
                    <p className="text-[10px] text-slate-500 font-bold">
                      {review.city}, {review.state}
                    </p>
                  </div>
                  
                  {/* Small check validation icon badge */}
                  <div className="flex items-center space-x-1 text-[9px] font-black text-emerald-700 bg-emerald-50 border border-emerald-200 px-1.5 py-0.5 rounded-md">
                    <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span>
                    <span>Check Cleared</span>
                  </div>
                </div>

                {/* Audit tag details */}
                <div className="flex items-center justify-between text-[10px] font-bold text-slate-500 bg-slate-50/80 px-2.5 py-1.5 rounded-xl border border-slate-150">
                  <span className="flex items-center space-x-1 text-slate-500 shrink-0">
                    <ShieldCheck className="h-3 w-3 text-emerald-600 shrink-0" />
                    <span>Resolution:</span>
                  </span>
                  <span className="text-slate-800 font-black text-right text-[10.5px] truncate max-w-[150px]">{review.issueResolved}</span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
