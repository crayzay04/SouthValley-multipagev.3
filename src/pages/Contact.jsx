import { useState } from 'react';
import HeroSection from '../components/HeroSection';
import AnimatedSection from '../components/AnimatedSection';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: 'General Inquiry', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError('');
    try {
      const res = await fetch('https://formspree.io/f/xpwzbqnv', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setSubmitted(true);
      } else {
        setError('Something went wrong. Please try again or call us at (661) 599-1108.');
      }
    } catch {
      setError('Something went wrong. Please try again or call us at (661) 599-1108.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div>
      <HeroSection
        title="Get in Touch"
        subtitle="We'd love to hear from you. Reach out about programs, tryouts, or coaching opportunities."
        size="md"
      />

      {/* Form + Info */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">

            {/* Form */}
            <AnimatedSection variant="slideLeft" className="lg:col-span-3">
              <h2 className="font-heading text-3xl text-black tracking-widest mb-8">Send Us a Message</h2>

              {submitted ? (
                <div className="bg-green-50 border border-green-200 rounded-sm p-8 text-center">
                  <div className="
                    w-14 h-14 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4
                    animate-bounce
                  ">
                    <svg className="w-7 h-7 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="font-heading text-2xl text-black tracking-wide mb-2">Message Received!</h3>
                  <p className="text-gray-600">Thank you for reaching out. We'll get back to you within 1–2 business days.</p>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ name: '', email: '', subject: 'General Inquiry', message: '' }); }}
                    className="mt-6 px-6 py-2 bg-[#0057B8] text-white text-sm font-bold uppercase tracking-widest rounded-sm hover:bg-[#003f8a] hover:scale-105 transition-all active:scale-95"
                  >
                    Send Another
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {[
                      { name: 'name', label: 'Full Name', type: 'text', placeholder: 'Jane Smith' },
                      { name: 'email', label: 'Email Address', type: 'email', placeholder: 'jane@example.com' },
                    ].map(({ name, label, type, placeholder }) => (
                      <div key={name}>
                        <label className="block text-sm font-semibold text-gray-700 mb-1.5">{label} *</label>
                        <input
                          type={type}
                          name={name}
                          value={form[name]}
                          onChange={handleChange}
                          required
                          placeholder={placeholder}
                          className="
                            w-full border border-gray-300 rounded-sm px-4 py-2.5 text-sm
                            focus:outline-none focus:border-[#0057B8] focus:ring-2 focus:ring-[#0057B8]/20
                            transition-all duration-200
                            hover:border-gray-400
                          "
                        />
                      </div>
                    ))}
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">Subject</label>
                    <select
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      className="
                        w-full border border-gray-300 rounded-sm px-4 py-2.5 text-sm bg-white
                        focus:outline-none focus:border-[#0057B8] focus:ring-2 focus:ring-[#0057B8]/20
                        transition-all duration-200 hover:border-gray-400
                      "
                    >
                      <option>General Inquiry</option>
                      <option>Tryouts</option>
                      <option>Coaching</option>
                      <option>Sponsorship</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">Message *</label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      placeholder="How can we help you?"
                      className="
                        w-full border border-gray-300 rounded-sm px-4 py-2.5 text-sm resize-none
                        focus:outline-none focus:border-[#0057B8] focus:ring-2 focus:ring-[#0057B8]/20
                        transition-all duration-200 hover:border-gray-400
                      "
                    />
                  </div>

                  {error && (
                    <p className="text-red-500 text-sm">{error}</p>
                  )}
                  <button
                    type="submit"
                    disabled={submitting}
                    className="
                      w-full sm:w-auto px-8 py-3.5 bg-[#0057B8] text-white font-bold uppercase tracking-widest rounded-sm text-sm
                      transition-all duration-200
                      hover:bg-[#003f8a] hover:shadow-[0_0_20px_rgba(0,87,184,0.4)] hover:scale-105 active:scale-95
                      disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100
                    "
                  >
                    {submitting ? 'Sending…' : 'Send Message'}
                  </button>
                </form>
              )}
            </AnimatedSection>

            {/* Contact Info */}
            <AnimatedSection variant="slideRight" delay="delay-100" className="lg:col-span-2">
              <h2 className="font-heading text-3xl text-black tracking-widest mb-8">Club Information</h2>

              <div className="bg-[#111827] rounded-sm p-6 space-y-5 mb-6">
                {[
                  {
                    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z" />,
                    label: 'Address',
                    content: (
                      <><p className="text-white text-sm font-semibold">South Valley Surf Soccer Club</p>
                      <p className="text-gray-400 text-sm">5001 Fruitvale Avenue<br />Bakersfield, CA 93308</p></>
                    ),
                  },
                  {
                    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />,
                    label: 'Phone',
                    content: <a href="tel:6615991108" className="text-white text-sm hover:text-[#0057B8] transition-colors">(661) 599-1108</a>,
                  },
                  {
                    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />,
                    label: 'Email',
                    content: <a href="mailto:info@southvalleysurf.com" className="text-white text-sm hover:text-[#0057B8] transition-colors">info@southvalleysurf.com</a>,
                  },
                  {
                    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />,
                    label: 'Registrar',
                    content: <p className="text-white text-sm">Dana Hamilton</p>,
                  },
                ].map(({ icon, label, content }) => (
                  <div key={label} className="flex items-start gap-4 group">
                    <div className="
                      w-10 h-10 rounded-full bg-[#0057B8]/15 flex items-center justify-center flex-shrink-0
                      text-[#0057B8] border border-[#0057B8]/20
                      transition-all duration-200
                      group-hover:bg-[#0057B8]/25 group-hover:border-[#0057B8]/40
                    ">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">{icon}</svg>
                    </div>
                    <div>
                      <p className="text-gray-500 text-xs uppercase tracking-widest mb-1">{label}</p>
                      {content}
                    </div>
                  </div>
                ))}
              </div>

              {/* Social */}
              <div className="flex gap-4">
                {[
                  { label: 'Instagram', href: 'https://www.instagram.com/southvalleysurf/?hl=en', d: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z' },
                  { label: 'Facebook', href: 'https://www.facebook.com/profile.php?id=100009290949188', d: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z' },
                ].map(({ label, href, d }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      flex items-center gap-2 text-gray-500 hover:text-[#0057B8] transition-all duration-200
                      text-sm font-semibold hover:scale-105
                    "
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d={d} />
                    </svg>
                    {label}
                  </a>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="bg-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection variant="scaleIn">
            <div className="bg-gray-200 rounded-sm h-64 flex items-center justify-center group hover:bg-gray-300 transition-colors duration-300 cursor-default">
              <div className="text-center text-gray-400 group-hover:text-gray-500 transition-colors duration-300">
                <svg className="w-12 h-12 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
                <p className="font-heading text-xl tracking-widest">Map Coming Soon</p>
                <p className="text-sm mt-1">5001 Fruitvale Avenue, Bakersfield, CA 93308</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
