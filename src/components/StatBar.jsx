import useInView from '../hooks/useInView';

export default function StatBar({ stats }) {
  const [ref, inView] = useInView({ threshold: 0.5 });

  return (
    <div ref={ref} className="bg-gradient-to-r from-[#003f8a] via-[#0057B8] to-[#003f8a] py-8 overflow-hidden relative">
      {/* Animated shimmer overlay */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"
        style={{
          transform: inView ? 'translateX(100%)' : 'translateX(-100%)',
          transition: 'transform 1.2s ease 0.3s',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-white/20">
          {stats.map(({ value, label }, i) => (
            <div
              key={i}
              className="text-center py-5 sm:py-3 px-6"
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? 'translateY(0)' : 'translateY(16px)',
                transition: `opacity 0.6s ease ${i * 150}ms, transform 0.6s ease ${i * 150}ms`,
              }}
            >
              <div className="font-heading text-5xl text-white tracking-widest mb-1 drop-shadow-sm">
                {value}
              </div>
              <div className="text-blue-100 text-xs font-semibold uppercase tracking-[0.25em]">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
