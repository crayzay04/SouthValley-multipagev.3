export default function HeroSection({ title, subtitle, children, size = 'md' }) {
  const heightClass = {
    sm: 'min-h-[280px]',
    md: 'min-h-[420px]',
    lg: 'min-h-[600px]',
  }[size] ?? 'min-h-[420px]';

  return (
    <section
      className={`relative ${heightClass} flex items-center justify-center bg-gradient-to-br from-black via-[#0a1628] to-[#001a4d] overflow-hidden`}
    >
      {/* Floating wave lines */}
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`absolute w-full pointer-events-none ${i % 2 === 0 ? 'wave-float' : 'wave-float-slow'}`}
          style={{
            bottom: `${i * 16}%`,
            opacity: 0.04 + i * 0.015,
            animationDelay: `${i * 1.3}s`,
          }}
          viewBox="0 0 1440 60"
          preserveAspectRatio="none"
        >
          <path
            d={`M0 30 Q360 ${i % 2 === 0 ? 5 : 55} 720 30 Q1080 ${i % 2 === 0 ? 55 : 5} 1440 30`}
            stroke="#0057B8"
            strokeWidth="1.5"
            fill="none"
          />
        </svg>
      ))}

      {/* Vignette edge glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(0,0,0,0.6)_100%)] pointer-events-none" />

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1
          className="font-heading text-5xl sm:text-6xl lg:text-7xl text-white tracking-widest mb-4 leading-none hero-child"
          style={{ animationFillMode: 'both' }}
        >
          {title}
        </h1>
        {subtitle && (
          <p
            className="text-gray-300 text-lg sm:text-xl font-light max-w-2xl mx-auto mb-6 hero-child"
            style={{ animationFillMode: 'both' }}
          >
            {subtitle}
          </p>
        )}
        {children && (
          <div className="hero-child" style={{ animationFillMode: 'both' }}>
            {children}
          </div>
        )}
      </div>
    </section>
  );
}
