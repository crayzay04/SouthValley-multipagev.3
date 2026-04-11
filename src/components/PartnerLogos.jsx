/**
 * SVG logo components for each South Valley Surf partner / affiliate.
 * All logos are hand-drawn SVGs — no external images required.
 */

export function LogoSurfNation({ className = '' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 140 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Surf Soccer Nation"
    >
      {/* Wave */}
      <path
        d="M6 38 Q22 22 38 32 Q54 42 70 26 Q86 10 102 22 Q118 34 134 18"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M6 48 Q22 32 38 42 Q54 52 70 36 Q86 20 102 32 Q118 44 134 28"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
        opacity="0.5"
      />
      {/* Text */}
      <text x="70" y="14" fontFamily="Arial Black, sans-serif" fontSize="9.5" fontWeight="900" fill="currentColor" textAnchor="middle" letterSpacing="2">
        SURF SOCCER
      </text>
      <text x="70" y="60" fontFamily="Arial Black, sans-serif" fontSize="7.5" fontWeight="700" fill="currentColor" textAnchor="middle" letterSpacing="3" opacity="0.7">
        NATION
      </text>
    </svg>
  );
}

export function LogoGirlsAcademy({ className = '' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 120 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Girls Academy League"
    >
      {/* Shield */}
      <path
        d="M60 4 L90 14 L90 38 Q90 54 60 60 Q30 54 30 38 L30 14 Z"
        stroke="currentColor"
        strokeWidth="2.5"
        fill="none"
      />
      {/* GA monogram */}
      <text x="60" y="40" fontFamily="Arial Black, sans-serif" fontSize="22" fontWeight="900" fill="currentColor" textAnchor="middle" dominantBaseline="middle">
        GA
      </text>
      {/* Subtitle line */}
      <text x="60" y="57" fontFamily="Arial, sans-serif" fontSize="5.5" fontWeight="600" fill="currentColor" textAnchor="middle" letterSpacing="1.5" opacity="0.65">
        GIRLS ACADEMY
      </text>
    </svg>
  );
}

export function LogoSoCalNPL({ className = '' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 130 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="SoCal NPL"
    >
      {/* Star */}
      <path
        d="M65 5 L67.9 14.1 L77.5 14.1 L69.8 19.8 L72.7 28.9 L65 23.2 L57.3 28.9 L60.2 19.8 L52.5 14.1 L62.1 14.1 Z"
        fill="currentColor"
        opacity="0.9"
      />
      {/* NPL text */}
      <text x="65" y="50" fontFamily="Arial Black, sans-serif" fontSize="20" fontWeight="900" fill="currentColor" textAnchor="middle" letterSpacing="2">
        NPL
      </text>
      {/* Subtitle */}
      <text x="65" y="61" fontFamily="Arial, sans-serif" fontSize="5.5" fontWeight="600" fill="currentColor" textAnchor="middle" letterSpacing="2" opacity="0.65">
        SOCAL
      </text>
    </svg>
  );
}

export function LogoCoastSoccer({ className = '' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 140 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Coast Soccer League"
    >
      {/* Horizon wave */}
      <path
        d="M10 36 Q30 24 50 34 Q70 44 90 30 Q110 16 130 26"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
      />
      {/* Sun circle */}
      <circle cx="70" cy="20" r="8" stroke="currentColor" strokeWidth="2" fill="none" />
      {/* Text */}
      <text x="70" y="55" fontFamily="Arial Black, sans-serif" fontSize="10" fontWeight="900" fill="currentColor" textAnchor="middle" letterSpacing="1.5">
        COAST SC
      </text>
      <text x="70" y="63" fontFamily="Arial, sans-serif" fontSize="5.5" fontWeight="600" fill="currentColor" textAnchor="middle" letterSpacing="2" opacity="0.65">
        LEAGUE
      </text>
    </svg>
  );
}

export function LogoUSClubSoccer({ className = '' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 120 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="US Club Soccer"
    >
      {/* Circle badge */}
      <circle cx="60" cy="30" r="25" stroke="currentColor" strokeWidth="2.5" fill="none" />
      {/* Stars row */}
      {[-10, 0, 10].map((x, i) => (
        <path
          key={i}
          d={`M${60 + x} 12 L${61.2 + x} 15.7 L${65 + x} 15.7 L${62.1 + x} 17.9 L${63.2 + x} 21.5 L${60 + x} 19.3 L${56.8 + x} 21.5 L${57.9 + x} 17.9 L${55 + x} 15.7 L${58.8 + x} 15.7 Z`}
          fill="currentColor"
          opacity="0.9"
          transform={`scale(0.7) translate(${(60 + x) * (1/0.7 - 1)}, ${30 * (1/0.7 - 1)})`}
        />
      ))}
      {/* US text */}
      <text x="60" y="33" fontFamily="Arial Black, sans-serif" fontSize="14" fontWeight="900" fill="currentColor" textAnchor="middle" dominantBaseline="middle">
        US
      </text>
      <text x="60" y="46" fontFamily="Arial, sans-serif" fontSize="5.5" fontWeight="600" fill="currentColor" textAnchor="middle" letterSpacing="1" opacity="0.7">
        CLUB SOCCER
      </text>
    </svg>
  );
}

export function LogoNike({ className = '' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 140 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Nike Soccer"
    >
      {/* Swoosh */}
      <path
        d="M8 44 Q40 10 90 28 Q110 35 120 28 Q128 22 114 38 Q96 56 40 38 Q20 32 8 44 Z"
        fill="currentColor"
        opacity="0.9"
      />
      {/* Nike text */}
      <text x="70" y="60" fontFamily="Arial Black, sans-serif" fontSize="8" fontWeight="900" fill="currentColor" textAnchor="middle" letterSpacing="3" opacity="0.7">
        SOCCER
      </text>
    </svg>
  );
}

/** Maps partner name → component */
export const partnerLogos = [
  { name: 'Surf Soccer Nation', Logo: LogoSurfNation },
  { name: 'Girls Academy League', Logo: LogoGirlsAcademy },
  { name: 'SoCal NPL', Logo: LogoSoCalNPL },
  { name: 'Coast Soccer League', Logo: LogoCoastSoccer },
  { name: 'US Club Soccer', Logo: LogoUSClubSoccer },
  { name: 'Nike Soccer', Logo: LogoNike },
];
