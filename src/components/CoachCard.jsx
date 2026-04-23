export default function CoachCard({ coach, index = 0, compact = false }) {
  const { name, title, credential, initials, bio, licensed, phone, email } = coach;

  return (
    <div
      className="
        group bg-[#111827] border border-gray-800/60 border-t-[3px] border-t-[#0057B8]
        rounded-sm p-6 flex flex-col items-center text-center
        transition-all duration-300 ease-out
        hover:-translate-y-2
        hover:shadow-[0_20px_48px_rgba(0,87,184,0.18),0_8px_24px_rgba(0,0,0,0.55)]
        hover:border-[#0057B8]/30
      "
      style={{ transitionDelay: `${index * 60}ms` }}
    >
      {/* Avatar */}
      <div className="relative mb-4">
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

      {/* Name */}
      <h3 className="font-heading text-xl text-white tracking-wide leading-tight mb-1 group-hover:text-[#4da6ff] transition-colors duration-200">
        {name}
      </h3>

      {/* Title */}
      <p className="text-[#0057B8] text-xs font-semibold uppercase tracking-widest mb-1">{title}</p>

      {/* Credential badge (e.g. National 'C' License) */}
      {credential && (
        <p className="text-gray-500 text-xs italic mb-2">{credential}</p>
      )}

      {/* USSF Licensed badge */}
      {licensed && (
        <span className="
          inline-block bg-green-700/20 border border-green-600/40 text-green-400
          text-xs font-bold uppercase tracking-wider px-2 py-0.5 rounded-sm mb-3
          group-hover:bg-green-700/40 group-hover:border-green-500/60 transition-colors duration-200
        ">
          USSF Licensed
        </span>
      )}

      {/* Bio (leadership only) */}
      {bio && !compact && (
        <p className="text-gray-400 text-sm leading-relaxed mb-4">{bio}</p>
      )}

      {/* Contact info */}
      {(phone || email) && (
        <div className="mt-auto pt-3 w-full border-t border-gray-800/60 flex flex-col gap-1.5 items-center">
          {phone && (
            <a
              href={`tel:${phone.replace(/[^0-9]/g, '')}`}
              className="flex items-center gap-1.5 text-gray-500 hover:text-[#4da6ff] transition-colors duration-200 text-xs"
            >
              <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              {phone}
            </a>
          )}
          {email && (
            <a
              href={`mailto:${email}`}
              className="flex items-center gap-1.5 text-gray-500 hover:text-[#4da6ff] transition-colors duration-200 text-xs break-all"
            >
              <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              {email.toLowerCase()}
            </a>
          )}
        </div>
      )}
    </div>
  );
}
