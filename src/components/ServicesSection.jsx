import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const services = [
  {
    id: "pre",
    route: "pre-construction",
    phase: "01",
    title: "The Vision",
    subtitle: "Pre-Construction",
    tagline: "Where blueprints meet destiny",
    items: ["Bespoke Site Analysis", "Architectural Schematics", "Precision Budgeting"],
    icon: "✧",
    bg: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1200&q=90",
    accent: "#94a3b8",
    accentRgb: "148,163,184",
  },
  {
    id: "main",
    route: "construction",
    phase: "02",
    title: "The Craft",
    subtitle: "Construction",
    tagline: "Mastery in every foundation",
    items: ["Structural Integrity", "Artisanal Materials", "Elite Management"],
    icon: "✦",
    bg: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&q=90",
    accent: "#cbd5e1",
    accentRgb: "203,213,225",
  },
  {
    id: "post",
    route: "post-construction",
    phase: "03",
    title: "The Legacy",
    subtitle: "Post-Construction",
    tagline: "The art of the final detail",
    items: ["Quality Apotheosis", "Aesthetic Finishing", "The Grand Handover"],
    icon: "✶",
    bg: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=90",
    accent: "#475569",
    accentRgb: "71,85,105",
  },
  {
    id: "tech",
    route: "smart-integration",
    phase: "04",
    title: "The Precision",
    subtitle: "Smart Integration",
    tagline: "Technology meets excellence",
    items: ["Smart Systems", "Automation Ready", "Future-Proof Design"],
    icon: "◈",
    bg: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=1200&q=90",
    accent: "#64748b",
    accentRgb: "100,116,139",
  },
  {
    id: "care",
    route: "maintenance-support",
    phase: "05",
    title: "The Stewardship",
    subtitle: "Maintenance & Support",
    tagline: "Long-term excellence assured",
    items: ["24/7 Support", "Preventive Care", "Lifetime Warranty"],
    icon: "◉",
    bg: "https://img.freepik.com/free-vector/phone-repair-service-flat-composition-with-engineers-disassembling-smartphone-blue-background-vector-illustration_1284-80867.jpg?semt=ais_incoming&w=740&q=80",
    accent: "#cbd5e1",
    accentRgb: "203,213,225",
  },
];

const AUTO_INTERVAL = 3500;

export default function ServicesUltraPremium() {
  const navigate = useNavigate();
  const [active, setActive] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [paused, setPaused] = useState(false);
  const touchStartX = useRef(null);
  const autoRef = useRef(null);
  const resumeRef = useRef(null);

  useEffect(() => {
    setLoaded(true);
  }, []);

  useEffect(() => {
    if (paused) return;
    autoRef.current = setInterval(() => {
      setActive(prev => (prev + 1) % services.length);
    }, AUTO_INTERVAL);
    return () => clearInterval(autoRef.current);
  }, [paused]);

  const handleActivate = (i) => {
    if (i === active || animating) return;
    setAnimating(true);
    setActive(i);
    setPaused(true);
    setTimeout(() => setAnimating(false), 800);
    clearTimeout(resumeRef.current);
    resumeRef.current = setTimeout(() => setPaused(false), 10000);
  };

  const handleTouchStart = (e) => { touchStartX.current = e.touches[0].clientX; };
  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(dx) > 50) {
      if (dx < 0) handleActivate((active + 1) % services.length);
      if (dx > 0) handleActivate((active - 1 + services.length) % services.length);
    }
    touchStartX.current = null;
  };

  const cur = services[active];

  return (
    <section className="ultra-services-container">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,500;0,600;1,400&family=Inter:wght@200;300;400&family=Montserrat:wght@200;300;400&display=swap');

        .ultra-services-container {
          min-height: 100vh;
          padding: 80px 4%;
          background: linear-gradient(155deg, #060b1a 0%, #080f22 60%, #04090f 100%);
          color: #ffffff;
          font-family: 'Cormorant Garamond', serif;
          position: relative;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 60px;
        }

        /* Abstract Background Elements */
        .bg-mesh {
          position: absolute;
          inset: 0;
          background: 
            radial-gradient(circle at 50% -20%, rgba(var(--ar), 0.08) 0%, transparent 50%),
            radial-gradient(circle at 0% 100%, rgba(var(--ar), 0.05) 0%, transparent 40%);
          z-index: 0;
          transition: all 1.2s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .grain-overlay {
          position: absolute;
          inset: 0;
          background-image: url("https://grainy-gradients.vercel.app/noise.svg");
          opacity: 0.03;
          pointer-events: none;
          z-index: 1;
        }

        /* Header Styles */
        .header-group {
          text-align: center;
          position: relative;
          z-index: 2;
        }

        .phase-counter {
          font-family: 'Montserrat', sans-serif;
          font-size: 12px;
          letter-spacing: 0.8em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.75);
          margin-bottom: 20px;
          display: block;
          opacity: 1;
        }

        .main-title {
          font-size: clamp(32px, 6vw, 70px);
          font-weight: 300;
          line-height: 0.9;
          margin: 0 0 8px 0;
          letter-spacing: -0.03em;
          color: #ffffff;
        }

        .title-accent {
          display: inline-block;
          color: #ffffff;
          font-weight: 500;
        }

        .title-subtitle {
          font-family: 'Inter', sans-serif;
          font-size: clamp(14px, 2vw, 18px);
          color: rgba(255,255,255,0.75);
          font-weight: 300;
          letter-spacing: 0.05em;
          margin: 0;
        }

        .main-title em {
          font-family: 'Cormorant Garamond', serif;
          font-style: italic;
          display: none;
          font-weight: 400;
        }

        /* Stage */
        .stage {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 16px;
          width: 100%;
          max-width: 1400px;
          height: 550px;
          z-index: 2;
        }

        .card {
          position: relative;
          border-radius: 4px;
          overflow: hidden;
          transition: all 0.8s cubic-bezier(0.2, 1, 0.3, 1);
          cursor: pointer;
        }

        .card.side {
          width: 85px;
          height: 450px;
          filter: grayscale(1) brightness(0.5);
          opacity: 0.6;
        }

        .card.side:hover {
          opacity: 0.8;
          filter: grayscale(0.5) brightness(0.6);
          height: 470px;
        }

        .card.active {
          width: 700px;
          height: 550px;
          box-shadow: 0 40px 100px -20px rgba(0,0,0,0.8);
        }

        .card-image-wrapper {
          position: absolute;
          inset: 0;
          transform: scale(1.1);
          transition: transform 1.2s cubic-bezier(0.2, 1, 0.3, 1);
        }

        .card.active .card-image-wrapper {
          transform: scale(1);
        }

        .card-image {
          width: 100%;
          height: 100%;
          background-size: cover;
          background-position: center;
        }

        .card-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, 
            rgba(0,0,0,0.95) 0%, 
            rgba(0,0,0,0.75) 30%, 
            rgba(0,0,0,0.3) 70%,
            transparent 100%);
        }

        .card-content {
          position: absolute;
          bottom: 0;
          left: 0;
          padding: 50px;
          width: 100%;
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.6s 0.3s ease;
        }

        .card.active .card-content {
          opacity: 1;
          transform: translateY(0);
        }

        .card-subtitle {
          font-family: 'Montserrat', sans-serif;
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 0.5em;
          color: rgba(255,255,255,0.9);
          margin-bottom: 12px;
          display: block;
          font-weight: 500;
        }

        .card-title {
          font-size: 52px;
          font-weight: 400;
          margin: 0 0 12px 0;
          color: #ffffff;
          letter-spacing: -0.02em;
        }

        .card-tagline {
          font-family: 'Inter', sans-serif;
          font-weight: 300;
          font-size: 17px;
          color: rgba(255,255,255,0.85);
          margin-bottom: 32px;
          line-height: 1.4;
        }

        .feature-list {
          display: flex;
          gap: 30px;
          list-style: none;
          padding: 0;
          margin-bottom: 40px;
        }

        .feature-item {
          font-family: 'Montserrat', sans-serif;
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 0.2em;
          display: flex;
          align-items: center;
          gap: 10px;
          color: rgba(255,255,255,0.9);
          font-weight: 500;
        }

        .feature-item::before {
          content: '';
          width: 5px;
          height: 5px;
          background: rgba(255,255,255,0.9);
          border-radius: 50%;
        }

        /* Nav Footer */
        .footer-nav {
          width: 100%;
          max-width: 600px;
          display: flex;
          flex-direction: column;
          gap: 20px;
          z-index: 2;
        }

        .progress-container {
          width: 100%;
          height: 1px;
          background: rgba(255,255,255,0.12);
          position: relative;
        }

        .progress-bar {
          position: absolute;
          left: 0;
          top: 0;
          height: 100%;
          background: rgba(255,255,255,0.9);
          transition: width 0.1s linear;
        }

        .nav-items {
          display: flex;
          justify-content: space-between;
        }

        .nav-btn {
          background: none;
          border: none;
          color: rgba(255,255,255,0.55);
          font-family: 'Montserrat', sans-serif;
          font-size: 11px;
          letter-spacing: 0.2em;
          cursor: pointer;
          transition: color 0.3s ease;
          padding: 10px;
        }

        .nav-btn.active {
          color: rgba(255,255,255,0.95);
        }

        @media (max-width: 900px) {
          .stage { height: 450px; gap: 10px; }
          .card.active { width: 100%; }
          .card.side { width: 40px; }
          .card-content { padding: 30px; }
          .feature-list { flex-direction: column; gap: 10px; }
        }
      `}</style>

      <div className="bg-mesh" style={{ "--ar": cur.accentRgb }} />
      <div className="grain-overlay" />

      {/* Header */}
      <div className="header-group">
        <span className="phase-counter" style={{ "--a": cur.accent }}>{cur.phase}</span>
        <h2 className="main-title">
          Crafting <span className="title-accent">Tomorrow</span>
        </h2>
        <p className="title-subtitle">From Vision to Legacy — Five Phases of Excellence</p>
      </div>

      {/* Main Stage */}
      <div className="stage" onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
        {services.map((s, i) => (
          <div
            key={s.id}
            className={`card ${active === i ? "active" : "side"}`}
            style={{ "--a": s.accent }}
            onClick={() => active === i && !animating ? navigate(`/services/${s.route}`) : handleActivate(i)}
          >
            <div className="card-image-wrapper">
              <div className="card-image" style={{ backgroundImage: `url(${s.bg})` }} />
            </div>
            <div className="card-overlay" />
            
            <div className="card-content">
              <span className="card-subtitle">{s.subtitle}</span>
              <h3 className="card-title">{s.title}</h3>
              <p className="card-tagline">{s.tagline}</p>
              
              <ul className="feature-list">
                {s.items.map((item, idx) => (
                  <li key={idx} className="feature-item">{item}</li>
                ))}
              </ul>

              <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                <div style={{ width: '40px', height: '1px', background: '#fff' }} />
                <span style={{ fontSize: '12px', letterSpacing: '2px', textTransform: 'uppercase' }}>Discover</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer Navigation */}
      <div className="footer-nav">
        <div className="progress-container">
          <div 
            className="progress-bar" 
            style={{ 
              width: paused ? '100%' : '0%', 
              transition: paused ? 'none' : `width ${AUTO_INTERVAL}ms linear`,
              opacity: paused ? 0.2 : 1
            }}
            key={active}
          />
        </div>
        <div className="nav-items">
          {services.map((s, i) => (
            <button
              key={s.id}
              className={`nav-btn ${active === i ? "active" : ""}`}
              onClick={() => handleActivate(i)}
            >
              {s.id.toUpperCase()}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}