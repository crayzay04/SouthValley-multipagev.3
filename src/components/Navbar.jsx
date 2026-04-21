import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/tryouts', label: 'Tryouts' },
  { to: '/coaches', label: 'Coaches' },
  { to: '/news', label: 'News' },
  { to: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => { setMenuOpen(false); }, [location]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
        scrolled
          ? 'bg-black/95 backdrop-blur-sm shadow-[0_2px_32px_rgba(0,0,0,0.8)] border-b border-gray-900'
          : 'bg-black border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 flex-shrink-0 group">
            <div className="transition-transform duration-300 group-hover:scale-105">
              <img
                src="/logos/surf-nation.png"
                alt="South Valley Surf Soccer Club"
                className="h-8 w-auto"
                style={{ filter: 'brightness(0) invert(1)' }}
              />
            </div>
            <div className="leading-tight">
              <div className="font-heading text-white text-xl tracking-widest leading-none transition-colors duration-200 group-hover:text-gray-200">South Valley</div>
              <div className="font-heading text-[#0057B8] text-xl tracking-widest leading-none transition-colors duration-200 group-hover:text-[#4da6ff]">Surf</div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                end={to === '/'}
                className={({ isActive }) =>
                  `relative text-sm font-semibold uppercase tracking-wider transition-colors duration-200 py-1
                  after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-[#0057B8] after:transition-all after:duration-250
                  ${isActive
                    ? 'text-[#0057B8] after:w-full'
                    : 'text-white hover:text-[#0057B8] after:w-0 hover:after:w-full'
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
            <a
              href="#"
              onClick={(e) => e.preventDefault()}
              className="
                ml-1 px-4 py-2 bg-[#0057B8] text-white text-sm font-bold uppercase tracking-wider rounded-sm
                transition-all duration-200
                hover:bg-[#003f8a] hover:shadow-[0_0_16px_rgba(0,87,184,0.5)] hover:scale-105
                active:scale-95
              "
            >
              Member Login
            </a>
          </nav>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5 focus:outline-none"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 origin-center ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-6 h-0.5 bg-white transition-all duration-200 ${menuOpen ? 'opacity-0 scale-x-0' : ''}`} />
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 origin-center ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-350 ease-in-out ${
          menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        } bg-black/98 border-t border-gray-800`}
      >
        <nav className="flex flex-col px-6 py-4 gap-1">
          {navLinks.map(({ to, label }, i) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              className={({ isActive }) =>
                `text-sm font-semibold uppercase tracking-wider py-3 border-b border-gray-800/60 transition-colors duration-200
                flex items-center justify-between
                ${isActive ? 'text-[#0057B8]' : 'text-white hover:text-[#0057B8]'}`
              }
              style={{ transitionDelay: menuOpen ? `${i * 40}ms` : '0ms' }}
            >
              {label}
              <svg className="w-3 h-3 opacity-40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </NavLink>
          ))}
          <a
            href="#"
            onClick={(e) => e.preventDefault()}
            className="mt-3 px-4 py-2.5 bg-[#0057B8] text-white text-sm font-bold uppercase tracking-wider rounded-sm text-center hover:bg-[#003f8a] transition-colors"
          >
            Member Login
          </a>
        </nav>
      </div>
    </header>
  );
}
