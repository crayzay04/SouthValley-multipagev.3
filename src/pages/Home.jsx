import { Link } from 'react-router-dom';
import StatBar from '../components/StatBar';
import QuickLinkGrid from '../components/QuickLinkGrid';
import BlogCard from '../components/BlogCard';
import AnimatedSection from '../components/AnimatedSection';
import { partnerLogos } from '../components/PartnerLogos';
import { posts } from '../data/posts';

const stats = [
  { value: '20+', label: 'Competitive Teams' },
  { value: '500+', label: 'Players' },
  { value: '#1', label: "Kern County's Top Club" },
];

export default function Home() {
  const latestPosts = posts.slice(0, 3);

  return (
    <div>
      {/* ── Hero ─────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-[#04102b] to-[#001a4d] overflow-hidden">

        {/* Floating waves */}
        {[...Array(7)].map((_, i) => (
          <svg
            key={i}
            className={`absolute w-full pointer-events-none ${i % 2 === 0 ? 'wave-float' : 'wave-float-slow'}`}
            style={{ bottom: `${i * 12}%`, opacity: 0.035 + i * 0.01, animationDelay: `${i * 1.1}s` }}
            viewBox="0 0 1440 80"
            preserveAspectRatio="none"
          >
            <path
              d={`M0 40 Q360 ${i % 2 === 0 ? 10 : 70} 720 40 Q1080 ${i % 2 === 0 ? 70 : 10} 1440 40`}
              stroke="#0057B8" strokeWidth="2" fill="none"
            />
          </svg>
        ))}

        {/* Radial vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_40%,transparent_30%,rgba(0,0,0,0.65)_100%)] pointer-events-none" />

        {/* Corner accent glow */}
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#0057B8]/8 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-[#0057B8]/6 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto pt-24 pb-16">
          {/* Badge */}
          <div className="hero-child flex justify-center mb-8" style={{ animationFillMode: 'both' }}>
            <div className="relative">
              {/* Pulse ring */}
              <div className="absolute inset-0 rounded-full bg-[#0057B8]/20 animate-ping opacity-30" style={{ animationDuration: '2.5s' }} />
              <div className="w-24 h-24 rounded-full bg-[#0057B8]/10 border border-[#0057B8]/30 flex items-center justify-center backdrop-blur-sm">
                <svg width="64" height="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                  <rect width="64" height="64" rx="6" fill="#0057B8" />
                  <path d="M10 44 Q32 20 54 44" stroke="white" strokeWidth="3" fill="none" opacity="0.6"/>
                  <path d="M6 50 Q32 26 58 50" stroke="white" strokeWidth="3" fill="none" opacity="0.4"/>
                  <text x="32" y="32" fontFamily="Arial Black,sans-serif" fontSize="18" fontWeight="900" fill="white" textAnchor="middle" dominantBaseline="middle">SVS</text>
                </svg>
              </div>
            </div>
          </div>

          <p className="hero-child text-[#0057B8] text-sm sm:text-base font-semibold uppercase tracking-[0.3em] mb-4" style={{ animationFillMode: 'both' }}>
            Bakersfield, CA · Surf Soccer Nation
          </p>

          <h1 className="hero-child font-heading text-5xl sm:text-7xl lg:text-8xl text-white tracking-widest leading-none mb-6" style={{ animationFillMode: 'both' }}>
            Where the Best<br />
            <span className="text-[#0057B8]">of the Best</span><br />
            Come Together
          </h1>

          <p className="hero-child text-gray-300 text-lg sm:text-xl font-light mb-10 max-w-2xl mx-auto" style={{ animationFillMode: 'both' }}>
            Bakersfield's Premier Youth Soccer Club — Developing players and individuals since day one.
          </p>

          <div className="hero-child flex flex-col sm:flex-row items-center justify-center gap-4" style={{ animationFillMode: 'both' }}>
            <Link
              to="/tryouts"
              className="
                w-full sm:w-auto px-8 py-3.5 bg-[#0057B8] text-white font-bold uppercase tracking-widest rounded-sm text-sm
                transition-all duration-200
                hover:bg-[#003f8a] hover:shadow-[0_0_24px_rgba(0,87,184,0.55),0_4px_16px_rgba(0,0,0,0.4)] hover:scale-105
                active:scale-95
              "
            >
              View Tryouts
            </Link>
            <Link
              to="/coaches"
              className="
                w-full sm:w-auto px-8 py-3.5 bg-transparent border-2 border-white text-white font-bold uppercase tracking-widest rounded-sm text-sm
                transition-all duration-200
                hover:border-[#0057B8] hover:text-[#0057B8] hover:shadow-[0_0_16px_rgba(0,87,184,0.25)] hover:scale-105
                active:scale-95
              "
            >
              Our Programs
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-30 animate-bounce">
          <div className="w-px h-8 bg-white/50" />
          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </section>

      {/* ── Stats Bar ────────────────────────────────── */}
      <StatBar stats={stats} />

      {/* ── Mission ──────────────────────────────────── */}
      <section className="bg-white py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <AnimatedSection variant="slideLeft">
              <p className="text-[#0057B8] text-sm font-semibold uppercase tracking-[0.3em] mb-3">Our Mission</p>
              <h2 className="font-heading text-4xl sm:text-5xl text-black tracking-widest leading-tight mb-6">
                More Than<br />Just Soccer
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-5">
                Dedicated to providing a fun but challenging environment for youth soccer players to develop as players and as individuals.
              </p>
              <p className="text-gray-500 leading-relaxed mb-8">
                At South Valley Surf, we believe the beautiful game is a vehicle for life lessons — discipline, teamwork, resilience, and growth. Our USSF-licensed coaching staff creates an environment where every player is challenged to reach their full potential, both on and off the field.
              </p>
              <Link
                to="/tryouts"
                className="
                  inline-block px-6 py-3 bg-[#0057B8] text-white font-bold uppercase tracking-widest rounded-sm text-sm
                  transition-all duration-200
                  hover:bg-[#003f8a] hover:shadow-[0_0_20px_rgba(0,87,184,0.4)] hover:scale-105 active:scale-95
                "
              >
                Join the Family
              </Link>
            </AnimatedSection>

            <AnimatedSection variant="slideRight" delay="delay-100">
              <div className="relative">
                <div className="
                  bg-gradient-to-br from-[#0057B8] to-[#001a4d] rounded-sm h-80 lg:h-96
                  flex items-center justify-center overflow-hidden
                  group cursor-default
                  transition-all duration-500
                  hover:shadow-[0_24px_64px_rgba(0,87,184,0.3)]
                ">
                  {/* Animated grid lines */}
                  <div className="absolute inset-0 opacity-10">
                    {[...Array(5)].map((_, i) => (
                      <div key={`h${i}`} className="absolute w-full h-px bg-white" style={{ top: `${20 + i * 15}%` }} />
                    ))}
                    {[...Array(5)].map((_, i) => (
                      <div key={`v${i}`} className="absolute h-full w-px bg-white" style={{ left: `${20 + i * 15}%` }} />
                    ))}
                  </div>
                  {/* Shimmer hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                  <div className="relative text-center text-white/20">
                    <svg className="w-24 h-24 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="10" strokeWidth="1"/>
                    </svg>
                    <p className="font-heading text-2xl tracking-widest">Club Photo</p>
                  </div>
                </div>
                {/* Floating accent circles */}
                <div className="absolute -bottom-5 -right-5 w-36 h-36 bg-[#0057B8]/8 rounded-full blur-xl pointer-events-none" />
                <div className="absolute -top-5 -left-5 w-24 h-24 bg-[#0057B8]/8 rounded-full blur-xl pointer-events-none" />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── Style of Play ────────────────────────────── */}
      <section className="bg-[#0a0a0a] py-24 relative overflow-hidden">
        {/* Background accent */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,rgba(0,87,184,0.06)_0%,transparent_70%)] pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <AnimatedSection variant="fadeUp">
            <p className="text-[#0057B8] text-sm font-semibold uppercase tracking-[0.3em] mb-3">Philosophy</p>
            <h2 className="font-heading text-4xl sm:text-5xl text-white tracking-widest leading-tight mb-8">
              Our Style of Play
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              South Valley Surf teams play an attacking, possession-based style of soccer that prioritizes technical development and creative expression. We believe players develop fastest when they're encouraged to take risks, be brave on the ball, and compete with confidence.
            </p>
            <p className="text-gray-500 leading-relaxed">
              From U8 through U18, our curriculum is designed around age-appropriate development benchmarks, ensuring every player builds the skills and soccer IQ needed to compete at the highest level — whether that's the SoCal NPL, the Girls Academy League, or beyond.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Quick Links Grid ─────────────────────────── */}
      <section className="bg-black py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection variant="fadeUp" className="text-center mb-12">
            <p className="text-[#0057B8] text-sm font-semibold uppercase tracking-[0.3em] mb-3">Explore</p>
            <h2 className="font-heading text-4xl sm:text-5xl text-white tracking-widest">
              Everything South Valley Surf
            </h2>
          </AnimatedSection>
          <QuickLinkGrid />
        </div>
      </section>

      {/* ── Latest News ──────────────────────────────── */}
      <section className="bg-[#0d1117] py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection variant="fadeUp" className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-12 gap-4">
            <div>
              <p className="text-[#0057B8] text-sm font-semibold uppercase tracking-[0.3em] mb-3">Latest</p>
              <h2 className="font-heading text-4xl sm:text-5xl text-white tracking-widest">News & Updates</h2>
            </div>
            <Link to="/news" className="
              text-[#0057B8] font-semibold text-sm uppercase tracking-widest
              flex items-center gap-1 group
            ">
              <span className="group-hover:underline">View All News</span>
              <svg className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {latestPosts.map((post, i) => (
              <AnimatedSection key={post.id} variant="fadeUp" style={{ transitionDelay: `${i * 100}ms` }}>
                <BlogCard post={post} index={i} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── Stay Connected ───────────────────────────── */}
      <section className="bg-gradient-to-r from-[#003f8a] via-[#0057B8] to-[#003f8a] py-20 relative overflow-hidden">
        {/* Subtle wave bg */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <svg className="w-full h-full" viewBox="0 0 1440 200" preserveAspectRatio="none">
            <path d="M0 100 Q360 40 720 100 Q1080 160 1440 100 L1440 200 L0 200 Z" fill="white" />
          </svg>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <AnimatedSection variant="fadeUp">
            <h2 className="font-heading text-4xl sm:text-5xl text-white tracking-widest mb-4">Stay Connected</h2>
            <p className="text-blue-100 mb-8 text-lg">Follow South Valley Surf for the latest news and updates.</p>
            <div className="flex items-center justify-center gap-4 flex-wrap">
              {[
                {
                  label: 'Instagram',
                  icon: <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>,
                },
                {
                  label: 'Facebook',
                  icon: <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>,
                },
              ].map(({ label, icon }) => (
                <a
                  key={label}
                  href="#"
                  onClick={(e) => e.preventDefault()}
                  className="
                    flex items-center gap-2.5 bg-white/10 border border-white/25 text-white
                    px-6 py-3 rounded-sm font-semibold text-sm uppercase tracking-widest
                    transition-all duration-200
                    hover:bg-white hover:text-[#0057B8] hover:border-white hover:shadow-[0_8px_24px_rgba(0,0,0,0.3)] hover:scale-105
                    active:scale-95
                  "
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">{icon}</svg>
                  {label}
                </a>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Partners / Affiliates ─────────────────────── */}
      <section className="bg-black py-16 border-t border-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection variant="fadeUp">
            <p className="text-center text-gray-600 text-xs uppercase tracking-[0.35em] mb-10">
              Partners &amp; Affiliates
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {partnerLogos.map(({ name, Logo }, i) => (
              <AnimatedSection
                key={name}
                variant="scaleIn"
                style={{ transitionDelay: `${i * 60}ms` }}
                className="h-full"
              >
                <div
                  className="
                    partner-card group
                    bg-[#0d0d0d] border border-gray-800 rounded-sm
                    px-3 py-5 flex flex-col items-center justify-center gap-3
                    cursor-default opacity-60
                    hover:opacity-100 hover:border-[#0057B8]/50 hover:bg-[#0d1f3c]/60
                  "
                >
                  <Logo className="w-full h-10 text-gray-400 group-hover:text-[#0057B8] transition-colors duration-300" />
                  <span className="text-gray-600 group-hover:text-gray-300 text-[10px] font-semibold uppercase tracking-widest text-center transition-colors duration-300 leading-tight">
                    {name}
                  </span>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
