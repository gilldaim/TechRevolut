export default function StatsStrip() {
  const stats = [
    { value: '50K+', label: 'Helped' },
    { value: '$2M+', label: 'Resolved Savings' },
    { value: '6 Major', label: 'Carriers Audited' },
    { value: '98%', label: 'Resolution Rate' }
  ];

  return (
    <div className="grid grid-cols-2 gap-3 pt-6 mt-6 border-t border-slate-100">
      {stats.map((stat) => (
        <div key={stat.value} className="bg-white p-3 rounded-xl border border-slate-100 flex flex-col justify-center">
          <div className="flex items-center space-x-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
            <span className="font-display font-black text-base text-slate-800 tracking-tight">
              {stat.value}
            </span>
          </div>
          <p className="text-slate-500 font-bold text-[9px] uppercase tracking-wider mt-0.5">
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  );
}
