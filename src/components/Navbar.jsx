import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import arvishLogo from "../assets/Arvish-Logo-transparent.png";

const navLinks = [
  { label: "Home",       to: "/home" },
  { label: "About",      to: "/about" },
  { 
    label: "Services",   
    to: "/services",
    dropdown: [
      { label: "Residential", to: "/services/residential" },
      { label: "Commercial & Retail", to: "/services/commercial-retail" },
      { label: "Educational & Healthcare", to: "/services/educational-healthcare" },
      { label: "Industrial", to: "/services/industrial" }
    ]
  },
{ label: "Projects",   to: "/projects" },
  { label: "Sustainability", to: "/our-story/sustainability" },
  { label: "Careers",    to: "/careers" },
  { label: "Contact",    to: "/contact" },
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

  // Close menu on route change
  useEffect(() => { setMenuOpen(false); setServicesOpen(false); }, [location.pathname]);

  useEffect(() => {
    if (!menuOpen) setServicesOpen(false);
  }, [menuOpen]);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@800&family=DM+Sans:wght@400;600;700&display=swap');
        .nb-root {
          height: 72px; position: sticky; top: 0; z-index: 999;
          display: flex; align-items: center; justify-content: space-between;
          padding: 0 1.25rem;
          background: rgba(255,255,255,0.97);
          overflow: visible;

          backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px);
          transition: box-shadow .3s;
          font-family: 'DM Sans', sans-serif;
        }
        .nb-root.scrolled { box-shadow: 0 4px 28px rgba(5,22,20,0.10); }

        .nb-brand { display: flex; align-items: center; text-decoration: none; flex-shrink: 0; gap: 10px; }
        .nb-brand-icon-wrap {
          width: 132px;
          height: 84px;
          overflow: hidden;
          flex-shrink: 0;
          display: flex;
          align-items: flex-start;
          justify-content: flex-start;
        }
        .nb-logo {
          width: 210px;
          height: auto;
          display: block;
          object-fit: contain;
          transform: translate(-10px, -14px);
          transform-origin: left top;
        }
        .nb-brand-copy { display: flex; flex-direction: column; line-height: 1; }
        .nb-brand-name {
          font-family: 'Playfair Display', serif;
          font-size: 18px;
          font-weight: 700;
          letter-spacing: .02em;
          text-transform: uppercase;
          color: #051614;
        }
        .nb-brand-sub {
          margin-top: 4px;
          font-size: 7px;
          font-weight: 700;
          letter-spacing: .2em;
          text-transform: uppercase;
          color: #A87418;
        }

        .nb-links { 
          display: flex; 
          align-items: center; 
          gap: clamp(0.25rem, 1vw, 0.5rem);
          flex-wrap: wrap;
        }
        .nb-link {
          font-size: clamp(11px, 2.5vw, 12px); font-weight: 600; color: #4E6278;
          text-decoration: none; letter-spacing: .04em;
          padding: clamp(0.5rem, 1.5vw, 0.75rem) clamp(0.875rem, 2vw, 1rem); 
          border-radius: 6px; transition: .18s;
          position: relative;
          white-space: nowrap;
        }
        .nb-link:hover { color: #051614; background: rgba(212,161,58,0.08); }
        .nb-link.active { color: #051614; }
        .nb-link.active::after {
          content: ''; position: absolute; bottom: 2px; left: 14px; right: 14px;
          height: 2px; background: #D4A13A; border-radius: 1px;
        }

        .nb-cta {
          font-family: 'DM Sans', sans-serif; font-size: 11px; font-weight: 700;
          letter-spacing: .1em; text-transform: uppercase;
          color: #fff; background: #051614; border: none;
          border-radius: 6px; padding: 10px 22px; cursor: pointer; transition: .22s;
        }
        .nb-cta:hover { background: #0a2e2a; transform: translateY(-1px); box-shadow: 0 6px 20px rgba(5,22,20,0.22); }

        /* Hamburger */
        .nb-burger {
          display: none; flex-direction: column; gap: 5px;
          background: none; border: none; cursor: pointer; padding: 4px;
        }
        .nb-burger span {
          display: block; width: 22px; height: 2px;
          background: #051614; border-radius: 2px; transition: .3s;
        }
        .nb-burger.open span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
        .nb-burger.open span:nth-child(2) { opacity: 0; }
        .nb-burger.open span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

        /* Mobile drawer */
        .nb-drawer {
          display: none; position: fixed; top: 72px; left: 0; right: 0;
          background: rgba(255,255,255,0.98); backdrop-filter: blur(12px);
          border-bottom: 1px solid rgba(5,22,20,0.08);
          flex-direction: column; padding: 1rem 1.5rem 1.5rem; gap: 0.5rem;
          z-index: 998; box-shadow: 0 8px 32px rgba(5,22,20,0.10);
        }
        .nb-drawer.open { display: flex; }
        .nb-drawer .nb-link { font-size: 14px; padding: 12px 16px; border-radius: 8px; }
        .nb-drawer .nb-cta { margin-top: 8px; text-align: center; padding: 13px; }

@media (max-width: 860px) {
          .nb-root { padding: 0 1rem; height: 68px; }
          .nb-brand { gap: 7px; }
          .nb-brand-icon-wrap { width: 102px; height: 66px; }
          .nb-logo { width: 164px; transform: translate(-8px, -12px); }
          .nb-brand-name { font-size: 16px; }
          .nb-brand-sub { font-size: 6.5px; margin-top: 3px; letter-spacing: .14em; }
          .nb-links, .nb-cta { display: none; }
          .nb-burger { display: flex; }
          .nb-burger span { 
            width: min(20px, 5vw); height: 2px;
            min-height: 2px; /* Touch target safe */
          }
          .services-dropdown-mobile, .services-dropdown { 
            display: block !important; 
            position: static !important; 
            opacity: 1 !important; 
            visibility: visible !important; 
            margin-top: 8px !important; 
            background: rgba(255,255,255,0.98);
            border-radius: 12px;
            box-shadow: 0 8px 32px rgba(5,22,20,0.12);
          }
          .nb-drawer {
            display: none;
            position: fixed;
            top: 68px;
            left: 0;
            right: 0;
            max-height: calc(100vh - 68px);
            overflow-y: auto;
          }
          .nb-drawer.open { display: flex; }
          .nb-drawer .nb-link { 
            font-size: clamp(14px, 4vw, 16px); 
            padding: 1rem; 
            border-radius: 12px;
            min-height: 44px;
            display: flex; align-items: center;
          }
          .nb-drawer .nb-cta { 
            margin-top: 1rem; 
            padding: 1.125rem; 
            min-height: 44px;
            font-size: clamp(14px, 4vw, 16px);
          }
          .nb-mobile-group { display: flex; flex-direction: column; gap: 0.25rem; }
          .nb-mobile-sublinks { display: flex; flex-direction: column; gap: 0.25rem; padding-left: 0.75rem; max-height: 0; overflow: hidden; opacity: 0; transition: max-height .28s ease, opacity .2s ease; }
          .nb-mobile-sublinks.open { max-height: 420px; opacity: 1; }
          .nb-mobile-sublink {
            font-size: 0.95rem;
            color: #4E6278;
            background: rgba(212,161,58,0.08);
            padding: 0.85rem 1rem;
            border-radius: 10px;
          }
          .nb-mobile-sublink:hover { color: #051614; background: rgba(212,161,58,0.16); }
        }
        /* Services dropdown styles */
        .services-dropdown {
          position: absolute; top: full; left: 0; min-width: 220px;
          background: rgba(255,255,255,0.98); backdrop-filter: blur(20px);
          border: 1px solid rgba(5,22,20,0.15); border-radius: 12px;
          shadow: 0 20px 60px rgba(5,22,20,0.25); opacity: 0; visibility: hidden;
          transform: translateY(-8px); transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
          z-index: 1000; margin-top: 8px; padding: 8px 0;
        }
        .nb-link.has-dropdown:hover .services-dropdown,
        .nb-link.has-dropdown.services-open .services-dropdown {
          opacity: 1; visibility: visible; transform: translateY(0);
        }
        .services-dropdown a {
          display: block; padding: 12px 20px; color: #4E6278;
          font-size: 13px; font-weight: 500; text-decoration: none;
          transition: all 0.2s; border-radius: 8px; margin: 0 8px;
        }
        .services-dropdown a:hover {
          background: rgba(212,161,58,0.1); color: #051614; padding-left: 24px;
        }
      `}</style>

      <nav className={`nb-root${scrolled ? " scrolled" : ""}`}>
        {/* Brand */}
        <Link to="/home" className="nb-brand">
          <span className="nb-brand-icon-wrap" aria-hidden="true">
            <img src={arvishLogo} alt="" className="nb-logo" />
          </span>
          <span className="nb-brand-copy">
            <span className="nb-brand-name">Arvish</span>
            <span className="nb-brand-sub">Constructions</span>
          </span>
        </Link>

        {/* Desktop links */}
        <div className="nb-links">
          {navLinks.map((l, index) => {
            if (l.dropdown) {
              return (
                <div key={l.to} className="relative nb-link has-dropdown" onMouseEnter={() => {}} onMouseLeave={() => {}}>
                  <button
                    type="button"
                    className={`nb-link${location.pathname === l.to ? " active" : ""}`}
                  >
                    {l.label} ▼
                  </button>
                  <div className="services-dropdown">
                    {l.dropdown.map((sub) => (
                      <Link
                        key={sub.to}
                        to={sub.to}
                        className="block px-4 py-2 text-sm hover:bg-gray-100 text-gray-700"
                      >
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

        {/* Desktop CTA */}
        {/* <button className="nb-cta" onClick={() => { setMenuOpen(false); navigate("/contact"); }}>
          Start a Project
        </button> */}

        {/* Mobile hamburger */}
        <button
          className={`nb-burger${menuOpen ? " open" : ""}`}
          onClick={() => setMenuOpen(o => !o)}
          aria-label="Toggle menu"
        >
          <span/><span/><span/>
        </button>
      </nav>

      {/* Mobile drawer */}
      <div className={`nb-drawer${menuOpen ? " open" : ""}`}>
        {navLinks.map(l => (
          <div key={l.to} className="nb-mobile-group">
            {l.dropdown ? (
              <>
                <button
                  type="button"
                  className={`nb-link${location.pathname === l.to ? " active" : ""}`}
                  onClick={() => setServicesOpen(open => !open)}
                  aria-expanded={servicesOpen}
                >
                  {l.label} ▼
                </button>
                <div className={`nb-mobile-sublinks${servicesOpen ? " open" : ""}`}>
                  {l.dropdown.map(sub => (
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
        <button className="nb-cta" onClick={() => { setMenuOpen(false); navigate("/contact"); }}>
          Start a Project
        </button>
      </div>
    </>
  );
}
