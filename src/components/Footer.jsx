import { Link } from 'react-router-dom';

const quickLinks = [
  { to: '/', label: 'Home' },
  { to: '/tryouts', label: 'Tryouts' },
  { to: '/coaches', label: 'Coaches' },
  { to: '/news', label: 'News' },
  { to: '/contact', label: 'Contact Us' },
];

export default function Footer() {
  return (
    <footer className="bg-black text-white border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/logos/surf-nation.png"
                alt="South Valley Surf Soccer Club"
                className="h-8 w-auto"
                style={{ filter: 'brightness(0) invert(1)' }}
              />
              <div>
                <div className="font-heading text-white text-lg tracking-widest leading-none">South Valley</div>
                <div className="font-heading text-[#0057B8] text-lg tracking-widest leading-none">Surf</div>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Bakersfield's premier youth soccer club. Part of the Surf Soccer Nation — Where the Best of the Best Come Together.
            </p>
            <div className="flex gap-4 mt-4">
              <a href="https://www.instagram.com/southvalleysurf/?hl=en" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-gray-400 hover:text-[#0057B8] transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="https://www.facebook.com/profile.php?id=100009290949188" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-gray-400 hover:text-[#0057B8] transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-lg tracking-widest text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map(({ to, label }) => (
                <li key={to}>
                  <Link to={to} className="text-gray-400 hover:text-[#0057B8] text-sm transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
              <li>
                <a href="https://surf.soccerpost.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#0057B8] text-sm transition-colors">
                  Fan Wear Store
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-heading text-lg tracking-widest text-white mb-4">Stay Updated</h4>
            <p className="text-gray-400 text-sm mb-3">Get the latest news and announcements from South Valley Surf.</p>
            <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-2">
              <input
                type="email"
                placeholder="Your email address"
                className="bg-gray-900 border border-gray-700 text-white text-sm px-3 py-2 rounded-sm focus:outline-none focus:border-[#0057B8] placeholder-gray-500"
              />
              <button
                type="submit"
                className="bg-[#0057B8] hover:bg-[#003f8a] text-white text-sm font-bold uppercase tracking-wider px-4 py-2 rounded-sm transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-lg tracking-widest text-white mb-4">Contact</h4>
            <address className="not-italic text-gray-400 text-sm space-y-2">
              <p>South Valley Surf Soccer Club</p>
              <p>5001 Fruitvale Avenue<br />Bakersfield, CA 93308</p>
              <p>
                <a href="tel:6615991108" className="hover:text-[#0057B8] transition-colors">(661) 599-1108</a>
              </p>
              <p>
                <a href="mailto:info@southvalleysurf.com" className="hover:text-[#0057B8] transition-colors">info@southvalleysurf.com</a>
              </p>
              <p className="text-gray-500">Registrar: Dana Hamilton</p>
            </address>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-gray-500 text-xs">
          <p>© 2026 South Valley Surf Soccer Club | All Rights Reserved</p>
          <p>Part of the <span className="text-[#0057B8]">Surf Soccer Nation</span> — Best of the Best</p>
        </div>
      </div>
    </footer>
  );
}
