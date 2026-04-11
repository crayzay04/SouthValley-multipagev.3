export default function CoachCard({ coach, index = 0 }) {
  const { name, title, initials, bio, licensed } = coach;
  const isPlaceholder = name === 'TBD';

  return (
    <div
      className={`
        group bg-[#111827] border border-gray-800/60 border-t-[3px] border-t-[#0057B8]
        rounded-sm p-6 flex flex-col items-center text-center
        transition-all duration-300 ease-out
        hover:-translate-y-2
        hover:shadow-[0_20px_48px_rgba(0,87,184,0.18),0_8px_24px_rgba(0,0,0,0.55)]
        hover:border-[#0057B8]/30
        ${isPlaceholder ? 'opacity-50 hover:opacity-70' : ''}
      `}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      {/* Avatar with ring pulse on hover */}
      <div className="relative mb-4">
        <div className="
          absolute inset-0 rounded-full bg-[#0057B8]/30
          scale-0 group-hover:scale-125 opacity-0 group-hover:opacity-0
          transition-all duration-500
        " style={{ animation: 'none' }} />
        <div className="
          w-20 h-20 rounded-full bg-gradient-to-br from-[#0057B8] to-[#003f8a]
          flex items-center justify-center
          ring-2 ring-transparent group-hover:ring-[#0057B8]/60 ring-offset-2 ring-offset-[#111827]
          transition-all duration-300
          shadow-lg group-hover:shadow-[0_0_20px_rgba(0,87,184,0.4)]
        ">
          <span className="font-heading text-2xl text-white tracking-widest">{initials}</span>
        </div>
      </div>

      <h3 className="font-heading text-xl text-white tracking-wide leading-tight mb-1 group-hover:text-[#4da6ff] transition-colors duration-200">
        {name}
      </h3>
      <p className="text-[#0057B8] text-xs font-semibold uppercase tracking-widest mb-3">{title}</p>

      {licensed && (
        <span className="
          inline-block bg-green-700/20 border border-green-600/40 text-green-400
          text-xs font-bold uppercase tracking-wider px-2 py-0.5 rounded-sm mb-3
          group-hover:bg-green-700/40 group-hover:border-green-500/60 transition-colors duration-200
        ">
          USSF Licensed
        </span>
      )}

      <p className="text-gray-400 text-sm leading-relaxed">{bio}</p>
    </div>
  );
}
