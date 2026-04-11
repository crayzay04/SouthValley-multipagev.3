import { Link } from 'react-router-dom';

const categoryColors = {
  'Tournament Results': { bg: 'bg-green-600', hover: 'group-hover:bg-green-500', text: 'text-green-400', border: 'group-hover:border-green-500/40' },
  'Club News':          { bg: 'bg-[#0057B8]', hover: 'group-hover:bg-[#0068d9]', text: 'text-[#0057B8]', border: 'group-hover:border-[#0057B8]/40' },
  'Announcements':      { bg: 'bg-yellow-600', hover: 'group-hover:bg-yellow-500', text: 'text-yellow-400', border: 'group-hover:border-yellow-500/40' },
};

const categoryInitials = {
  'Tournament Results': 'TR',
  'Club News':          'CN',
  'Announcements':      'AN',
};

export default function BlogCard({ post, index = 0 }) {
  const { slug, category, title, excerpt, date } = post;
  const colors = categoryColors[category] ?? { bg: 'bg-gray-700', hover: '', text: 'text-gray-400', border: '' };
  const initials = categoryInitials[category] ?? '??';

  return (
    <Link
      to={`/news/${slug}`}
      className="group block"
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <article className="
        bg-[#111827] border border-gray-800/60 border-t-[3px] border-t-[#0057B8]
        rounded-sm overflow-hidden h-full flex flex-col
        transition-all duration-300 ease-out
        hover:-translate-y-2
        hover:shadow-[0_20px_48px_rgba(0,87,184,0.18),0_8px_24px_rgba(0,0,0,0.55)]
        hover:border-[#0057B8]/30
      ">
        {/* Thumbnail */}
        <div className={`${colors.bg} h-44 flex items-center justify-center overflow-hidden relative`}>
          {/* Animated diagonal lines */}
          <div className="absolute inset-0 opacity-10">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="absolute h-px w-full bg-white"
                style={{ top: `${15 + i * 15}%`, transform: 'rotate(-8deg) scaleX(1.4)' }}
              />
            ))}
          </div>
          <span className={`font-heading text-6xl text-white/25 tracking-widest transition-transform duration-500 group-hover:scale-110`}>
            {initials}
          </span>
          {/* Hover overlay shimmer */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-out" />
        </div>

        <div className="p-6 flex flex-col flex-1">
          <div className="flex items-center gap-3 mb-3">
            <span className={`${colors.bg} text-white text-xs font-bold uppercase tracking-widest px-2 py-0.5 rounded-sm transition-colors duration-200`}>
              {category}
            </span>
            <span className="text-gray-500 text-xs">{date}</span>
          </div>

          <h3 className={`font-heading text-xl text-white tracking-wide leading-snug mb-3 transition-colors duration-200 group-hover:${colors.text.replace('text-', 'text-')}`}
            style={{ color: undefined }}
          >
            <span className="group-hover:text-[#4da6ff] transition-colors duration-200">{title}</span>
          </h3>

          <p className="text-gray-400 text-sm leading-relaxed flex-1">{excerpt}</p>

          <div className={`mt-4 flex items-center gap-1.5 ${colors.text} text-sm font-semibold`}>
            <span className="group-hover:underline">Read More</span>
            <svg
              className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
              fill="none" stroke="currentColor" viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </article>
    </Link>
  );
}
