import HeroSection from '../components/HeroSection';
import CoachCard from '../components/CoachCard';
import AnimatedSection from '../components/AnimatedSection';
import { boysCoaches, girlsCoaches } from '../data/coaches';
import { Link } from 'react-router-dom';

export default function Coaches() {
  return (
    <div>
      <HeroSection
        title="Meet Our Coaching Staff"
        subtitle="USSF-licensed coaches dedicated to developing players and individuals"
        size="md"
      />

      {/* Boys Section */}
      <section className="bg-[#0a0a0a] py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_20%_50%,rgba(0,87,184,0.05)_0%,transparent_70%)] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection variant="fadeUp" className="flex items-center gap-4 mb-10">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-gray-800" />
            <div className="text-center">
              <p className="text-[#0057B8] text-xs font-bold uppercase tracking-[0.3em] mb-1">Staff</p>
              <h2 className="font-heading text-3xl sm:text-4xl text-white tracking-widest">Boys Coaching Staff</h2>
            </div>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-gray-800" />
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {boysCoaches.map((coach, i) => (
              <AnimatedSection key={coach.id} variant="fadeUp" style={{ transitionDelay: `${i * 100}ms` }}>
                <CoachCard coach={coach} index={i} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Girls Section */}
      <section className="bg-black py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_80%_50%,rgba(0,87,184,0.05)_0%,transparent_70%)] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection variant="fadeUp" className="flex items-center gap-4 mb-10">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-gray-800" />
            <div className="text-center">
              <p className="text-[#0057B8] text-xs font-bold uppercase tracking-[0.3em] mb-1">Staff</p>
              <h2 className="font-heading text-3xl sm:text-4xl text-white tracking-widest">Girls Coaching Staff</h2>
            </div>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-gray-800" />
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {girlsCoaches.map((coach, i) => (
              <AnimatedSection key={coach.id} variant="fadeUp" style={{ transitionDelay: `${i * 100}ms` }}>
                <CoachCard coach={coach} index={i} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection variant="fadeUp">
            <p className="text-[#0057B8] text-sm font-semibold uppercase tracking-[0.3em] mb-3">Our Approach</p>
            <h2 className="font-heading text-4xl text-black tracking-widest mb-6">Coaching Philosophy</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-4">
              Every South Valley Surf coach is committed to the same goal: developing complete soccer players who are technically sound, tactically intelligent, and mentally strong. We don't just coach the game — we develop people.
            </p>
            <p className="text-gray-500 leading-relaxed">
              Our staff undergoes ongoing education and holds USSF licenses at various levels. We are proud to be part of the Surf Soccer Nation coaching community, sharing best practices and development philosophies across clubs.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Coaching CTA */}
      <section className="bg-[#111827] py-20">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <AnimatedSection variant="scaleIn">
            <h2 className="font-heading text-4xl text-white tracking-widest mb-4">Interested in Coaching?</h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              South Valley Surf is always looking for passionate, qualified coaches. If you hold a USSF license and share our commitment to player development, we'd love to hear from you.
            </p>
            <Link
              to="/contact"
              className="
                inline-block px-8 py-3.5 bg-[#0057B8] text-white font-bold uppercase tracking-widest rounded-sm text-sm
                transition-all duration-200
                hover:bg-[#003f8a] hover:shadow-[0_0_24px_rgba(0,87,184,0.5)] hover:scale-105 active:scale-95
              "
            >
              Get in Touch
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
