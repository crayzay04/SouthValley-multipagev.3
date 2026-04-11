import { Link } from 'react-router-dom';
import useInView from '../hooks/useInView';

const TrophyIcon = () => (
  <svg className="w-9 h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 21h8m-4-4v4M5 3H3a2 2 0 00-2 2v3a4 4 0 004 4h.172M19 3h2a2 2 0 012 2v3a4 4 0 01-4 4h-.172M7 3h10v5a5 5 0 01-10 0V3z" />
  </svg>
);
const CalendarIcon = () => (
  <svg className="w-9 h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
  </svg>
);
const StarIcon = () => (
  <svg className="w-9 h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
  </svg>
);
const UserGroupIcon = () => (
  <svg className="w-9 h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
  </svg>
);
const GlobeIcon = () => (
  <svg className="w-9 h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);
const LightningIcon = () => (
  <svg className="w-9 h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>
);

const tiles = [
  { label: 'Tryouts',     description: 'Join South Valley Surf',       to: '/tryouts',                       Icon: CalendarIcon },
  { label: 'Tournaments', description: 'Compete at the highest level', to: '/news?filter=Tournament%20Results', Icon: TrophyIcon   },
  { label: 'Clinics',     description: 'Skill development programs',   to: '/contact',                       Icon: StarIcon     },
  { label: 'Our Coaches', description: 'Meet the coaching staff',      to: '/coaches',                       Icon: UserGroupIcon },
  { label: 'Surf Select', description: 'National ID program',          to: '/contact',                       Icon: LightningIcon },
  { label: 'Surf Nation', description: 'Part of something bigger',     to: '/contact',                       Icon: GlobeIcon    },
];

export default function QuickLinkGrid() {
  const [gridRef, inView] = useInView({ threshold: 0.08 });

  return (
    <div ref={gridRef} className="grid grid-cols-2 sm:grid-cols-3 gap-4">
      {tiles.map(({ label, description, to, Icon }, i) => (
        <Link
          key={label}
          to={to}
          className="group relative bg-[#111827] border border-gray-800/60 border-t-[3px] border-t-[#0057B8] rounded-sm p-6 flex flex-col items-center text-center overflow-hidden
            transition-all duration-300 ease-out
            hover:-translate-y-2
            hover:shadow-[0_20px_40px_rgba(0,87,184,0.22),0_8px_20px_rgba(0,0,0,0.5)]
            hover:border-[#0057B8]/40
          "
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? 'translateY(0)' : 'translateY(20px)',
            transition: `opacity 0.5s ease ${i * 70}ms, transform 0.5s ease ${i * 70}ms, box-shadow 0.3s ease, border-color 0.3s ease`,
          }}
        >
          {/* Radial glow on hover */}
          <div className="
            absolute inset-0 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300
            bg-[radial-gradient(ellipse_at_center,rgba(0,87,184,0.12)_0%,transparent_70%)]
          " />

          {/* Icon */}
          <div className="
            relative z-10 p-3 rounded-full mb-3
            bg-[#0057B8]/10 border border-[#0057B8]/20
            text-[#0057B8] group-hover:text-white
            group-hover:bg-[#0057B8] group-hover:border-[#0057B8]
            transition-all duration-300
            group-hover:shadow-[0_0_16px_rgba(0,87,184,0.5)]
          ">
            <Icon />
          </div>

          <div className="relative z-10 font-heading text-white text-xl tracking-widest leading-tight mb-1 group-hover:text-white transition-colors duration-200">
            {label}
          </div>
          <div className="relative z-10 text-gray-500 text-xs group-hover:text-gray-300 transition-colors duration-200">
            {description}
          </div>

          {/* Bottom arrow */}
          <div className="
            relative z-10 mt-3 text-[#0057B8] text-xs font-semibold uppercase tracking-wider
            opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0
            transition-all duration-200
          ">
            Explore →
          </div>
        </Link>
      ))}
    </div>
  );
}
