import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import arvishLogo from "../assets/Arvish-Logo-transparent.svg";

const navLinks = [
  { label: "Home", to: "/home" },
  { label: "About", to: "/about" },
  {
    label: "Services",
    to: "/services",
    dropdown: [
      { label: "Residential", to: "/services/residential" },
      { label: "Commercial & Retail", to: "/services/commercial-retail" },
      { label: "Educational & Healthcare", to: "/services/educational-healthcare" },
      { label: "Industrial", to: "/services/industrial" },
    ],
  },
  { label: "Projects", to: "/projects" },
  { label: "Sustainability", to: "/our-story/sustainability" },
  { label: "Careers", to: "/careers" },
  { label: "Contact", to: "/contact" },
];

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setServicesOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (!menuOpen) setServicesOpen(false);
  }, [menuOpen]);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@800&family=DM+Sans:wght@400;600;700&display=swap');

        .nb-root {
          height: 72px;
          position: sticky;
          top: 0;
          z-index: 999;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 2rem;
          background: rgba(255,255,255,0.97);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          transition: box-shadow .3s;
          font-family: 'DM Sans', sans-serif;
          overflow: visible;
        }
        .nb-root.scrolled {
          box-shadow: 0 4px 28px rgba(5,22,20,0.10);
        }

        /* ── Brand ── */
        .nb-brand {
          display: flex;
          align-items: center;
          text-decoration: none;
          flex-shrink: 0;
        }
        .nb-logo {
          width: 112px;
          height: 64px;
          object-fit: contain;
          flex-shrink: 0;
          display: block;
        }
        .nb-brand-copy {
          display: flex;
          flex-direction: column;
          line-height: 1;
          margin-left: 10px;
        }
        .nb-brand-name {
          font-family: 'DM Sans', sans-serif;
          font-size: 20px;
          font-weight: 800;
          letter-spacing: .06em;
          text-transform: uppercase;
          color: #051614;
          line-height: 1.1;
        }
        .nb-brand-sub {
          margin-top: 4px;
          font-size: 8.5px;
          font-weight: 700;
          letter-spacing: .22em;
          text-transform: uppercase;
          color: #A87418;
        }

        /* ── Desktop links ── */
        .nb-links {
          display: flex;
          align-items: center;
          gap: clamp(0.1rem, 0.8vw, 0.4rem);
        }
        .nb-link {
          font-size: clamp(11px, 1.1vw, 13px);
          font-weight: 600;
          color: #4E6278;
          text-decoration: none;
          letter-spacing: .04em;
          padding: 0.6rem clamp(0.6rem, 1.2vw, 0.9rem);
          border-radius: 6px;
          transition: .18s;
          position: relative;
          white-space: nowrap;
          background: none;
          border: none;
          cursor: pointer;
          font-family: 'DM Sans', sans-serif;
        }
        .nb-link:hover { color: #051614; background: rgba(212,161,58,0.08); }
        .nb-link.active { color: #051614; }
        .nb-link.active::after {
          content: '';
          position: absolute;
          bottom: 2px; left: 14px; right: 14px;
          height: 2px;
          background: #D4A13A;
          border-radius: 1px;
        }

        /* ── Services dropdown ── */
        .nb-dropdown-wrap {
          position: relative;
        }
        .services-dropdown {
          position: absolute;
          top: calc(100% + 6px);
          left: 0;
          min-width: 220px;
          background: rgba(255,255,255,0.99);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(5,22,20,0.10);
          border-radius: 12px;
          box-shadow: 0 20px 60px rgba(5,22,20,0.14);
          opacity: 0;
          visibility: hidden;
          transform: translateY(-6px);
          transition: all 0.22s cubic-bezier(0.16,1,0.3,1);
          z-index: 1000;
          padding: 8px 0;
        }
        .nb-dropdown-wrap:hover .services-dropdown {
          opacity: 1;
          visibility: visible;
          transform: translateY(0);
        }
        .services-dropdown a {
          display: block;
          padding: 11px 20px;
          color: #4E6278;
          font-size: 13px;
          font-weight: 500;
          text-decoration: none;
          transition: all 0.18s;
          border-radius: 8px;
          margin: 0 8px;
          font-family: 'DM Sans', sans-serif;
        }
        .services-dropdown a:hover {
          background: rgba(212,161,58,0.10);
          color: #051614;
          padding-left: 26px;
        }

        /* ── CTA ── */
        .nb-cta {
          font-family: 'DM Sans', sans-serif;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: .1em;
          text-transform: uppercase;
          color: #fff;
          background: #051614;
          border: none;
          border-radius: 6px;
          padding: 10px 22px;
          cursor: pointer;
          transition: .22s;
          white-space: nowrap;
        }
        .nb-cta:hover {
          background: #0a2e2a;
          transform: translateY(-1px);
          box-shadow: 0 6px 20px rgba(5,22,20,0.22);
        }

        /* ── Hamburger ── */
        .nb-burger {
          display: none;
          flex-direction: column;
          gap: 5px;
          background: none;
          border: none;
          cursor: pointer;
          padding: 4px;
        }
        .nb-burger span {
          display: block;
          width: 22px;
          height: 2px;
          background: #051614;
          border-radius: 2px;
          transition: .3s;
        }
        .nb-burger.open span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
        .nb-burger.open span:nth-child(2) { opacity: 0; }
        .nb-burger.open span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

        /* ── Mobile drawer ── */
        .nb-drawer {
          display: none;
          position: fixed;
          top: 72px; left: 0; right: 0;
          max-height: calc(100vh - 72px);
          overflow-y: auto;
          background: rgba(255,255,255,0.98);
          backdrop-filter: blur(12px);
          border-bottom: 1px solid rgba(5,22,20,0.08);
          flex-direction: column;
          padding: 1rem 1.5rem 1.5rem;
          gap: 0.5rem;
          z-index: 998;
          box-shadow: 0 8px 32px rgba(5,22,20,0.10);
        }
        .nb-drawer.open { display: flex; }
        .nb-drawer .nb-link {
          font-size: 14px;
          padding: 12px 16px;
          border-radius: 10px;
          min-height: 44px;
          display: flex;
          align-items: center;
        }
        .nb-drawer .nb-cta {
          margin-top: 8px;
          text-align: center;
          padding: 13px;
          min-height: 44px;
          font-size: 14px;
        }

        .nb-mobile-group { display: flex; flex-direction: column; gap: 0.25rem; }
        .nb-mobile-sublinks {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
          padding-left: 0.75rem;
          max-height: 0;
          overflow: hidden;
          opacity: 0;
          transition: max-height .28s ease, opacity .2s ease;
        }
        .nb-mobile-sublinks.open { max-height: 420px; opacity: 1; }
        .nb-mobile-sublink {
          font-size: 0.9rem;
          color: #4E6278;
          background: rgba(212,161,58,0.08);
          padding: 0.85rem 1rem;
          border-radius: 10px;
          text-decoration: none;
        }
        .nb-mobile-sublink:hover {
          color: #051614;
          background: rgba(212,161,58,0.16);
        }

        /* ── Responsive ── */
        @media (max-width: 860px) {
          .nb-root { padding: 0 1rem; height: 68px; }
          .nb-logo { width: 104px; height: 60px; }
          .nb-brand-name { font-size: 16px; }
          .nb-brand-sub { font-size: 7px; letter-spacing: .16em; }
          .nb-links, .nb-desktop-cta { display: none; }
          .nb-burger { display: flex; }
          .nb-drawer { top: 68px; max-height: calc(100vh - 68px); }
        }

        @media (max-width: 480px) {
          .nb-logo { width: 96px; height: 56px; }
          .nb-brand-copy { margin-left: 8px; }
          .nb-brand-name { font-size: 14px; }
          .nb-brand-sub { font-size: 6.2px; letter-spacing: .12em; }
        }
      `}</style>

      <nav className={`nb-root${scrolled ? " scrolled" : ""}`}>

        {/* ── Brand ── */}
        <Link to="/home" className="nb-brand">
          <img src={arvishLogo} alt="Arvish Constructions Logo" className="nb-logo" />
          <span className="nb-brand-copy">
            <span className="nb-brand-name">Arvish</span>
            <span className="nb-brand-sub">Constructions</span>
          </span>
        </Link>

        {/* ── Desktop links ── */}
        <div className="nb-links">
          {navLinks.map((l) => {
            if (l.dropdown) {
              return (
                <div key={l.to} className="nb-dropdown-wrap">
                  <button
                    type="button"
                    className={`nb-link${location.pathname.startsWith(l.to) ? " active" : ""}`}
                  >
                    {l.label} ▾
                  </button>
                  <div className="services-dropdown">
                    {l.dropdown.map((sub) => (
                      <Link key={sub.to} to={sub.to}>
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                </div>
              );
            }
            return (
              <Link
                key={l.to}
                to={l.to}
                className={`nb-link${location.pathname === l.to ? " active" : ""}`}
              >
                {l.label}
              </Link>
            );
          })}
        </div>

        {/* ── Desktop CTA (uncomment if needed) ── */}
        {/* <button className="nb-cta nb-desktop-cta" onClick={() => navigate("/contact")}>
          Start a Project
        </button> */}

        {/* ── Mobile hamburger ── */}
        <button
          className={`nb-burger${menuOpen ? " open" : ""}`}
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </nav>

      {/* ── Mobile drawer ── */}
      <div className={`nb-drawer${menuOpen ? " open" : ""}`}>
        {navLinks.map((l) => (
          <div key={l.to} className="nb-mobile-group">
            {l.dropdown ? (
              <>
                <button
                  type="button"
                  className={`nb-link${location.pathname.startsWith(l.to) ? " active" : ""}`}
                  onClick={() => setServicesOpen((o) => !o)}
                  aria-expanded={servicesOpen}
                >
                  {l.label} ▾
                </button>
                <div className={`nb-mobile-sublinks${servicesOpen ? " open" : ""}`}>
                  {l.dropdown.map((sub) => (
                    <Link
                      key={sub.to}
                      to={sub.to}
                      onClick={() => { setMenuOpen(false); setServicesOpen(false); }}
                      className={`nb-link nb-mobile-sublink${location.pathname === sub.to ? " active" : ""}`}
                    >
                      {sub.label}
                    </Link>
                  ))}
                </div>
              </>
            ) : (
              <Link
                to={l.to}
                onClick={() => setMenuOpen(false)}
                className={`nb-link${location.pathname === l.to ? " active" : ""}`}
              >
                {l.label}
              </Link>
            )}
          </div>
        ))}
        <button
          className="nb-cta"
          onClick={() => { setMenuOpen(false); navigate("/contact"); }}
        >
          Start a Project
        </button>
      </div>
    </>
  );
}
