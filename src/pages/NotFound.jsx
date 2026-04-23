import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] flex flex-col items-center justify-center px-4 text-center relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_50%,rgba(0,87,184,0.08)_0%,transparent_70%)] pointer-events-none" />

      {/* 404 large number */}
      <div
        className="font-heading text-[160px] sm:text-[220px] leading-none text-[#0057B8] select-none pointer-events-none"
        style={{ opacity: 0.12, letterSpacing: '0.05em' }}
        aria-hidden="true"
      >
        404
      </div>

      <div className="relative -mt-16 sm:-mt-24 z-10 max-w-lg">
        <h1 className="font-heading text-4xl sm:text-5xl text-white tracking-widest mb-4">
          404 — Page Not Found
        </h1>
        <p className="text-gray-400 text-lg mb-8 leading-relaxed">
          Looks like this page took a wrong touch out of bounds. The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/"
          className="
            inline-block px-8 py-3.5 bg-[#0057B8] text-white font-bold uppercase tracking-widest rounded-sm text-sm
            transition-all duration-200
            hover:bg-[#003f8a] hover:shadow-[0_0_24px_rgba(0,87,184,0.55)] hover:scale-105 active:scale-95
          "
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
