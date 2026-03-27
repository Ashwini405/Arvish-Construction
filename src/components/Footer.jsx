import { Link } from 'react-router-dom';

const navLinks = [
  { label: 'Home', path: '/home' },
  { label: 'About Us', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Our Projects', path: '/projects' },
  { label: 'Group Companies', path: '/group-companies' },
  { label: 'Careers', path: '/careers' },
  { label: 'News', path: '/news' },
  { label: 'Blog', path: '/blog' },
  { label: 'Contact', path: '/contact' },
];

const serviceLinks = [
  { label: 'Residential', path: '/services/residential' },
  { label: 'Commercial & Retail', path: '/services/commercial-retail' },
  { label: 'Educational & Healthcare', path: '/services/educational-healthcare' },
  { label: 'Industrial', path: '/services/industrial' },
];

const socials = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/company/arvishgroup',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/arvishgroup',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
      </svg>
    ),
  },
  {
    label: 'Twitter / X',
    href: 'https://twitter.com/arvishgroup',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: 'YouTube',
    href: 'https://www.youtube.com/@arvishgroup',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
        <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="relative w-full text-white overflow-hidden font-sans bg-[#051614]">

      {/* ── BACKGROUND ── */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[#051614]" />
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: "url('https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&cs=tinysrgb&w=1920')", backgroundSize: 'cover', backgroundPosition: 'center' }}
        />
      </div>

      {/* Gold glow blob */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#D4A13A] opacity-5 rounded-full blur-3xl pointer-events-none z-10" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#D4A13A] opacity-5 rounded-full blur-3xl pointer-events-none z-10" />

      <div className="relative z-20 max-w-7xl mx-auto px-6">

       

        {/* ── MAIN GRID ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 py-8">

          {/* Brand column */}
          <div>
            {/* Logo mark */}
            <div className="flex items-center gap-3 mb-3">
              <div className="w-7 h-7 bg-[#D4A13A] rotate-45 rounded-sm flex items-center justify-center">
                <div className="w-2 h-2 bg-[#051614] rounded-full" />
              </div>
              <span className="text-base font-black tracking-[0.35em] uppercase text-white">Arvish Group</span>
            </div>

            <p className="text-sm text-gray-200 leading-relaxed mb-4 max-w-xs">
              Building landmark developments across the UAE and beyond since 1994.
              Quality, innovation, and sustainability in every project we deliver.
            </p>

            {/* Contact quick-links */}
            <div className="space-y-2 mb-4">
              <a href="tel:+97142207539" className="flex items-center gap-3 text-sm text-gray-200 hover:text-[#D4A13A] transition-colors group">
                <span className="w-8 h-8 rounded-full border border-white/15 flex items-center justify-center group-hover:border-[#D4A13A] transition-colors flex-shrink-0">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 16.92z" />
                  </svg>
                </span>
                +971 42207539
              </a>
              <a href="mailto:corporate@arvishgroup.me" className="flex items-center gap-3 text-sm text-gray-200 hover:text-[#D4A13A] transition-colors group">
                <span className="w-8 h-8 rounded-full border border-white/15 flex items-center justify-center group-hover:border-[#D4A13A] transition-colors flex-shrink-0">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </span>
                corporate@arvishgroup.me
              </a>
              <div className="flex items-center gap-3 text-sm text-gray-200">
                <span className="w-8 h-8 rounded-full border border-white/15 flex items-center justify-center flex-shrink-0">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </span>
                PO Box 91656, Dubai, UAE
              </div>
            </div>

            {/* Socials */}
            <div>
              <p className="text-xs font-bold text-[#D4A13A] uppercase tracking-widest mb-3">Follow Us</p>
              <div className="flex gap-2">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="w-9 h-9 rounded-full border border-white/30 flex items-center justify-center text-gray-200 hover:text-[#D4A13A] hover:border-[#D4A13A] hover:bg-[#D4A13A]/10 transition-all duration-300"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Company links */}
          <div>
            <h4 className="text-xs font-black text-[#D4A13A] uppercase tracking-widest mb-3">Company</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="group flex items-center gap-2 text-sm text-gray-200 hover:text-white transition-colors duration-200"
                  >
                    <span className="w-0 group-hover:w-3 h-px bg-[#D4A13A] transition-all duration-300 flex-shrink-0" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services links */}
          <div>
            <h4 className="text-xs font-black text-[#D4A13A] uppercase tracking-widest mb-3">Services</h4>
            <ul className="space-y-2">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="group flex items-center gap-2 text-sm text-gray-200 hover:text-white transition-colors duration-200"
                  >
                    <span className="w-0 group-hover:w-3 h-px bg-[#D4A13A] transition-all duration-300 flex-shrink-0" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Offices */}
          <div>
            <h4 className="text-xs font-black text-[#D4A13A] uppercase tracking-widest mb-3">Our Offices</h4>
            <div className="space-y-3">
              {[
                { city: 'Dubai', phone: '+971 42207539', fax: '+971 42207529', po: 'PO Box 91656' },
                { city: 'Sharjah', phone: '+971 67451389', fax: '+971 67451388', po: 'PO Box 60839' },
                { city: 'Abu Dhabi', phone: '+971 24456789', fax: '+971 24456788', po: 'PO Box 18490' },
              ].map((office) => (
                <div key={office.city}>
                  <p className="text-sm font-bold text-white mb-1">{office.city}</p>
                  <p className="text-xs text-gray-300 leading-relaxed">
                    {office.po}<br />
                    Tel: {office.phone}<br />
                    Fax: {office.fax}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* ── BOTTOM BAR ── */}
        <div className="border-t border-white/10 py-3 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-300 tracking-wide">
            © {new Date().getFullYear()} Arvish Group. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link to="/privacy-policy" className="text-xs text-gray-300 hover:text-[#D4A13A] cursor-pointer transition-colors tracking-wide">
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" className="text-xs text-gray-300 hover:text-[#D4A13A] cursor-pointer transition-colors tracking-wide">
              Terms of Service
            </Link>
            <Link to="/cookie-policy" className="text-xs text-gray-300 hover:text-[#D4A13A] cursor-pointer transition-colors tracking-wide">
              Cookie Policy
            </Link>
          </div>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="w-9 h-9 rounded-full border border-white/30 flex items-center justify-center text-gray-200 hover:text-[#D4A13A] hover:border-[#D4A13A] transition-all duration-300"
            aria-label="Back to top"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
              <polyline points="18 15 12 9 6 15" />
            </svg>
          </button>
        </div>

      </div>
    </footer>
  );
}
