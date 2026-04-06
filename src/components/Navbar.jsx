import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

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

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  // Close menu on route change
  useEffect(() => { setMenuOpen(false); }, [location.pathname]);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@800&family=DM+Sans:wght@400;600;700&display=swap');
        .nb-root {
          height: clamp(64px, 10vw, 72px); position: sticky; top: 0; z-index: 999;
          display: flex; align-items: center; justify-content: space-between;
          padding: 0 1.25rem;
          background: rgba(255,255,255,0.97);

          backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px);
          transition: box-shadow .3s;
          font-family: 'DM Sans', sans-serif;
        }
        .nb-root.scrolled { box-shadow: 0 4px 28px rgba(5,22,20,0.10); }

        .nb-brand { display: flex; align-items: center; gap: 12px; text-decoration: none; }
        .nb-logo {
          width: 42px; height: 42px; flex-shrink: 0;
          background: linear-gradient(150deg,#051614,#0a2e2a);
          clip-path: polygon(14% 6%,86% 6%,95% 42%,50% 100%,5% 42%);
          display: flex; align-items: center; justify-content: center;
        }
        .nb-brand-name {
          font-family: 'Playfair Display', serif; font-size: 22px; font-weight: 800;
          color: #051614; letter-spacing: .03em; text-transform: uppercase; line-height: 1;
        }
        .nb-brand-sub {
          font-size: 9px; font-weight: 700; letter-spacing: .18em;
          text-transform: uppercase; color: #D4A13A; line-height: 1; display: block;
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
          display: none; position: fixed; top: clamp(64px, 10vw, 72px); left: 0; right: 0;
          background: rgba(255,255,255,0.98); backdrop-filter: blur(12px);
          border-bottom: 1px solid rgba(5,22,20,0.08);
          flex-direction: column; padding: 1rem 1.5rem 1.5rem; gap: 0.5rem;
          z-index: 998; box-shadow: 0 8px 32px rgba(5,22,20,0.10);
        }
        .nb-drawer.open { display: flex; }
        .nb-drawer .nb-link { font-size: 14px; padding: 12px 16px; border-radius: 8px; }
        .nb-drawer .nb-cta { margin-top: 8px; text-align: center; padding: 13px; }

@media (max-width: 860px) {
          .nb-root { padding: 0 1rem; }
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
            top: clamp(64px, 10vw, 72px);
            left: 0;
            right: 0;
            max-height: calc(100vh - clamp(64px, 10vw, 72px));
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
          .nb-mobile-sublinks { display: flex; flex-direction: column; gap: 0.25rem; padding-left: 0.75rem; }
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
          <div className="nb-logo">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <polygon points="12,2 22,22 2,22" fill="white" opacity="0.9"/>
              <polygon points="12,9 17,22 7,22" fill="#D4A13A" opacity="0.9"/>
            </svg>
          </div>
          <div>
            <span className="nb-brand-name">Arvish</span>
            <span className="nb-brand-sub">Constructions</span>
          </div>
        </Link>

        {/* Desktop links */}
        <div className="nb-links">
          {navLinks.map((l, index) => {
            if (l.dropdown) {
              return (
                <div key={l.to} className="relative nb-link has-dropdown" onMouseEnter={() => {}} onMouseLeave={() => {}}>
                  <Link
                    to={l.to}
                    className={`nb-link${location.pathname === l.to ? " active" : ""}`}
                  >
                    {l.label}
                  </Link>
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
        <button className="nb-cta" onClick={() => { setMenuOpen(false); navigate("/contact"); }}>
          Start a Project
        </button>

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
            <Link
              to={l.to}
              onClick={() => setMenuOpen(false)}
              className={`nb-link${location.pathname === l.to ? " active" : ""}`}
            >
              {l.label}
            </Link>
            {l.dropdown && (
              <div className="nb-mobile-sublinks">
                {l.dropdown.map(sub => (
                  <Link
                    key={sub.to}
                    to={sub.to}
                    onClick={() => setMenuOpen(false)}
                    className={`nb-link nb-mobile-sublink${location.pathname === sub.to ? " active" : ""}`}
                  >
                    {sub.label}
                  </Link>
                ))}
              </div>
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
