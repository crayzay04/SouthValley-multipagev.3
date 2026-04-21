import HeroSection from '../components/HeroSection';
import FAQAccordion from '../components/FAQAccordion';
import AnimatedSection from '../components/AnimatedSection';
import { tryoutGroups } from '../data/tryouts';
import { faqs } from '../data/faqs';
import { Link } from 'react-router-dom';

export default function Tryouts() {
  return (
    <div>
      <HeroSection
        title="Join South Valley Surf"
        subtitle="Bakersfield, CA — Tryouts for the 2025/26 Season — Dates Coming Soon"
        size="md"
      >
        <a
          href="#"
          onClick={(e) => e.preventDefault()}
          className="
            inline-block px-8 py-3.5 bg-[#0057B8] text-white font-bold uppercase tracking-widest rounded-sm text-sm
            transition-all duration-200
            hover:bg-[#003f8a] hover:shadow-[0_0_24px_rgba(0,87,184,0.55)] hover:scale-105 active:scale-95
          "
        >
          Pre-Register Now
        </a>
      </HeroSection>

      {/* Intro */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection variant="fadeUp">
            <p className="text-[#0057B8] text-sm font-semibold uppercase tracking-[0.3em] mb-3">The Process</p>
            <h2 className="font-heading text-4xl text-black tracking-widest mb-6">What to Expect</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-4">
              Tryouts at South Valley Surf are designed to evaluate every player fairly in a competitive but supportive environment. Our USSF-licensed coaches assess technical ability, tactical understanding, athleticism, and attitude.
            </p>
            <p className="text-gray-500 leading-relaxed">
              We look for players who are coachable, competitive, and committed to growth. We encourage all players — regardless of current club — to come show us what they can do. Decisions are communicated within 48–72 hours of tryouts.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Tryout Cards */}
      <section className="bg-[#0a0a0a] py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_50%,rgba(0,87,184,0.05)_0%,transparent_70%)] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection variant="fadeUp" className="text-center mb-12">
            <p className="text-[#0057B8] text-sm font-semibold uppercase tracking-[0.3em] mb-3">2025/26 Season</p>
            <h2 className="font-heading text-4xl sm:text-5xl text-white tracking-widest">Tryout Schedule</h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {tryoutGroups.map((group, i) => (
              <AnimatedSection key={group.id} variant="fadeUp" style={{ transitionDelay: `${i * 80}ms` }}>
                <div className="
                  bg-[#111827] border border-gray-800/60 border-t-[3px] border-t-[#0057B8] rounded-sm p-6
                  transition-all duration-300
                  hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(0,87,184,0.15),0_4px_16px_rgba(0,0,0,0.5)]
                  hover:border-[#0057B8]/30
                ">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="font-heading text-3xl text-white tracking-widest">{group.ageGroup}</h3>
                    <span className="text-[#0057B8] text-xs font-bold uppercase tracking-widest bg-[#0057B8]/10 border border-[#0057B8]/20 px-3 py-1 rounded-sm">
                      Boys & Girls
                    </span>
                  </div>
                  <p className="text-gray-400 text-sm mb-5">{group.description}</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {['boys', 'girls'].map((g) => (
                      <div key={g} className="bg-black/40 rounded-sm p-4 border border-gray-800 hover:border-[#0057B8]/30 transition-colors duration-200">
                        <div className="text-xs text-[#0057B8] font-bold uppercase tracking-widest mb-2 capitalize">{g}</div>
                        <div className="text-white font-semibold text-sm mb-1">{group[g].date}</div>
                        <div className="text-gray-500 text-xs">{group[g].location}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection variant="fadeUp" delay="delay-200" className="text-center mt-10">
            <p className="text-gray-500 text-sm mb-6">
              Exact dates will be announced — pre-register now to be notified immediately.
            </p>
            <a
              href="#"
              onClick={(e) => e.preventDefault()}
              className="
                inline-block px-8 py-3.5 bg-[#0057B8] text-white font-bold uppercase tracking-widest rounded-sm text-sm
                transition-all duration-200
                hover:bg-[#003f8a] hover:shadow-[0_0_24px_rgba(0,87,184,0.5)] hover:scale-105 active:scale-95
              "
            >
              Pre-Register Now
            </a>
          </AnimatedSection>
        </div>
      </section>

      {/* What We Look For */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection variant="fadeUp" className="text-center mb-12">
            <p className="text-[#0057B8] text-sm font-semibold uppercase tracking-[0.3em] mb-3">Evaluation</p>
            <h2 className="font-heading text-4xl text-black tracking-widest">What We Look For</h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { label: 'Technical Skill', desc: 'Ball control, passing, shooting, and first touch in competitive situations.' },
              { label: 'Tactical IQ', desc: 'Understanding of space, movement, pressing, and positional play.' },
              { label: 'Athleticism', desc: 'Speed, agility, coordination, and physical capacity for elite competition.' },
              { label: 'Character', desc: 'Coachability, competitive drive, attitude, and leadership potential.' },
            ].map(({ label, desc }, i) => (
              <AnimatedSection key={label} variant="fadeUp" style={{ transitionDelay: `${i * 80}ms` }} className="text-center group">
                <div className="
                  w-14 h-14 rounded-full bg-[#0057B8] flex items-center justify-center mx-auto mb-4
                  transition-all duration-300
                  group-hover:shadow-[0_0_20px_rgba(0,87,184,0.5)] group-hover:scale-110
                ">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h4 className="font-heading text-xl text-black tracking-wide mb-2 group-hover:text-[#0057B8] transition-colors duration-200">{label}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#0a0a0a] py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection variant="fadeUp" className="text-center mb-12">
            <p className="text-[#0057B8] text-sm font-semibold uppercase tracking-[0.3em] mb-3">Common Questions</p>
            <h2 className="font-heading text-4xl text-white tracking-widest">FAQ</h2>
          </AnimatedSection>
          <AnimatedSection variant="fadeUp" delay="delay-100">
            <FAQAccordion items={faqs} />
          </AnimatedSection>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-gradient-to-r from-[#003f8a] via-[#0057B8] to-[#003f8a] py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <AnimatedSection variant="fadeUp">
            <h2 className="font-heading text-4xl text-white tracking-widest mb-4">Have Questions?</h2>
            <p className="text-blue-100 text-lg mb-2">Contact our Registrar directly:</p>
            <p className="text-white text-xl font-bold mb-6">
              Dana Hamilton — <a href="tel:6615991108" className="underline hover:text-blue-200 transition-colors">(661) 599-1108</a>
            </p>
            <Link
              to="/contact"
              className="
                inline-block px-8 py-3.5 bg-white text-[#0057B8] font-bold uppercase tracking-widest rounded-sm text-sm
                transition-all duration-200
                hover:bg-blue-50 hover:shadow-[0_8px_24px_rgba(0,0,0,0.3)] hover:scale-105 active:scale-95
              "
            >
              Contact Us
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
