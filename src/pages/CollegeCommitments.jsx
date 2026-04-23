import { useState } from 'react';
import HeroSection from '../components/HeroSection';
import AnimatedSection from '../components/AnimatedSection';
import { commitments, divisionColors } from '../data/commitments';

const years = [...new Set(commitments.map((c) => c.year))].sort((a, b) => b - a);
const totalColleges = new Set(commitments.map((c) => c.college)).size;
const firstYear = Math.min(...commitments.map((c) => c.year));

function CommitCard({ commit, index }) {
  const div = divisionColors[commit.division] || divisionColors['D1'];
  const initials = commit.name
    .split(' ')
    .map((n) => n[0])
    .join('');

  return (
    <div
      className="group relative bg-[#111827] border border-gray-800/60 border-t-[3px] border-t-[#0057B8] rounded-sm p-6
        transition-all duration-300
        hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(0,87,184,0.18),0_4px_16px_rgba(0,0,0,0.5)]
        hover:border-[#0057B8]/30"
      style={{
        animationDelay: `${index * 60}ms`,
      }}
    >
      {/* Radial glow */}
      <div className="absolute inset-0 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300
        bg-[radial-gradient(ellipse_at_top_left,rgba(0,87,184,0.08)_0%,transparent_60%)]" />

      <div className="relative z-10 flex items-start gap-4">
        {/* Avatar */}
        <div className="
          w-14 h-14 rounded-full bg-[#0057B8]/15 border border-[#0057B8]/25 flex items-center justify-center
          flex-shrink-0 font-heading text-xl text-[#0057B8] tracking-wider
          group-hover:bg-[#0057B8]/25 group-hover:border-[#0057B8]/50 transition-all duration-300
        ">
          {initials}
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2 flex-wrap">
            <h3 className="font-heading text-2xl text-white tracking-widest leading-tight">
              {commit.name}
            </h3>
            <span className={`text-xs font-bold uppercase tracking-widest px-2.5 py-1 rounded-sm border ${div.bg} ${div.border} ${div.text} flex-shrink-0`}>
              {commit.division}
            </span>
          </div>

          <div className="flex items-center gap-2 mt-2">
            <svg className="w-4 h-4 text-[#0057B8] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
            </svg>
            <p className="text-white font-semibold text-sm">{commit.college}</p>
          </div>

          {commit.highSchool && (
            <p className="text-gray-500 text-xs mt-1 uppercase tracking-widest">{commit.highSchool}</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default function CollegeCommitments() {
  const [activeYear, setActiveYear] = useState('all');
  const [activeGender, setActiveGender] = useState('all');

  const filtered = commitments.filter((c) => {
    const yearMatch = activeYear === 'all' || c.year === Number(activeYear);
    const genderMatch = activeGender === 'all' || c.gender === activeGender;
    return yearMatch && genderMatch;
  });

  const grouped = years.reduce((acc, y) => {
    const items = filtered.filter((c) => c.year === y);
    if (items.length) acc[y] = items;
    return acc;
  }, {});

  return (
    <div>
      <HeroSection
        title="College Commitments"
        subtitle="South Valley Surf athletes earning their place at the next level — proud of every player who put in the work."
        size="md"
      />

      {/* Stats banner */}
      <section className="bg-[#0057B8] py-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            {[
              { value: commitments.length + '+', label: 'Players Committed' },
              { value: totalColleges + '+', label: 'Colleges & Universities' },
              { value: years.length,           label: 'Classes Represented' },
              { value: firstYear,              label: 'First Commitment Year' },
            ].map(({ value, label }) => (
              <div key={label}>
                <div className="font-heading text-5xl text-white tracking-widest">{value}</div>
                <div className="text-blue-100 text-xs font-semibold uppercase tracking-widest mt-1">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filter bar */}
      <section className="bg-[#0a0a0a] border-b border-gray-800 py-5 sticky top-16 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center gap-3">
          {/* Year filter */}
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-gray-500 text-xs uppercase tracking-widest font-semibold">Year</span>
            {['all', ...years.map(String)].map((y) => (
              <button
                key={y}
                onClick={() => setActiveYear(y)}
                className={`px-3 py-1.5 text-xs font-bold uppercase tracking-wider rounded-sm transition-all duration-200 ${
                  activeYear === y
                    ? 'bg-[#0057B8] text-white shadow-[0_0_12px_rgba(0,87,184,0.4)]'
                    : 'bg-[#111827] text-gray-400 border border-gray-700 hover:border-[#0057B8]/50 hover:text-white'
                }`}
              >
                {y === 'all' ? 'All Years' : y}
              </button>
            ))}
          </div>

          <div className="h-5 w-px bg-gray-800 hidden sm:block" />

          {/* Gender filter */}
          <div className="flex items-center gap-2">
            <span className="text-gray-500 text-xs uppercase tracking-widest font-semibold">Program</span>
            {[
              { key: 'all', label: 'All' },
              { key: 'girls', label: 'Girls' },
              { key: 'boys', label: 'Boys' },
            ].map(({ key, label }) => (
              <button
                key={key}
                onClick={() => setActiveGender(key)}
                className={`px-3 py-1.5 text-xs font-bold uppercase tracking-wider rounded-sm transition-all duration-200 ${
                  activeGender === key
                    ? 'bg-[#0057B8] text-white shadow-[0_0_12px_rgba(0,87,184,0.4)]'
                    : 'bg-[#111827] text-gray-400 border border-gray-700 hover:border-[#0057B8]/50 hover:text-white'
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          <div className="ml-auto text-gray-500 text-xs font-semibold uppercase tracking-widest">
            {filtered.length} player{filtered.length !== 1 ? 's' : ''}
          </div>
        </div>
      </section>

      {/* Commitment cards by year */}
      <section className="bg-[#0a0a0a] py-16 min-h-[40vh]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {Object.keys(grouped).length === 0 ? (
            <AnimatedSection variant="fadeUp" className="text-center py-20">
              <p className="text-gray-600 font-heading text-2xl tracking-widest">No results</p>
            </AnimatedSection>
          ) : (
            Object.entries(grouped).map(([year, players]) => (
              <AnimatedSection key={year} variant="fadeUp">
                {/* Year heading */}
                <div className="flex items-center gap-4 mb-8">
                  <h2 className="font-heading text-4xl sm:text-5xl text-white tracking-widest">{year}</h2>
                  <div className="flex-1 h-px bg-gradient-to-r from-[#0057B8]/40 to-transparent" />
                  <span className="text-[#0057B8] text-sm font-bold uppercase tracking-widest">
                    {players.length} commit{players.length !== 1 ? 's' : ''}
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {players.map((commit, i) => (
                    <CommitCard key={commit.id} commit={commit} index={i} />
                  ))}
                </div>
              </AnimatedSection>
            ))
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-[#003f8a] via-[#0057B8] to-[#003f8a] py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <AnimatedSection variant="fadeUp">
            <h2 className="font-heading text-4xl text-white tracking-widest mb-4">Your Name Could Be Here</h2>
            <p className="text-blue-100 text-lg mb-8 leading-relaxed">
              South Valley Surf develops players who earn opportunities at the college level. If you're ready to compete, come try out.
            </p>
            <a
              href="/tryouts"
              className="
                inline-block px-8 py-3.5 bg-white text-[#0057B8] font-bold uppercase tracking-widest rounded-sm text-sm
                transition-all duration-200
                hover:bg-blue-50 hover:shadow-[0_8px_24px_rgba(0,0,0,0.3)] hover:scale-105 active:scale-95
              "
            >
              View Tryout Info
            </a>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
