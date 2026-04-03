

import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AboutGlassSection() {
  const navigate = useNavigate();
  const ref = useRef();
  const [active, setActive] = useState(false);
  const [metricValues, setMetricValues] = useState({ projects: 0, satisfaction: 0, years: 0 });
  const [viewportWidth, setViewportWidth] = useState(() =>
    typeof window !== "undefined" ? window.innerWidth : 1280
  );

  const metricDefs = [
    { key: "projects", label: "Projects\nCompleted", target: 50, suffix: "+" },
    { key: "satisfaction", label: "Client\nSatisfaction", target: 98, suffix: "%" },
    { key: "years", label: "Years of\nExcellence", target: 5, suffix: "+" },
  ];

  useEffect(() => {
    const el = ref.current;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setActive(true);
    }, { threshold: 0.1 });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!active) return;
    let raf;
    let start = null;
    const duration = 1800;
    const step = (ts) => {
      if (!start) start = ts;
      const p = Math.min((ts - start) / duration, 1);
      const ease = 1 - Math.pow(1 - p, 3);
      setMetricValues({
        projects: Math.round(50 * ease),
        satisfaction: Math.round(98 * ease),
        years: Math.round(5 * ease),
      });
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [active]);

  useEffect(() => {
    const onResize = () => setViewportWidth(window.innerWidth);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const isMobile = viewportWidth <= 768;
  const isTablet = viewportWidth <= 1024;

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800;900&family=Outfit:wght@300;400;500;600;700&display=swap');

        .about-wrap * { box-sizing: border-box; }
        .about-wrap { font-family: 'Outfit', sans-serif; }

        /* ── BLINKING WINDOWS ── */
        .win-blink { animation: winBlink 3s ease-in-out infinite; }
        .win-blink-2 { animation: winBlink 4.2s ease-in-out 0.8s infinite; }
        .win-blink-3 { animation: winBlink 2.8s ease-in-out 1.5s infinite; }
        @keyframes winBlink {
          0%,100% { fill: rgba(59,130,246,0.18); }
          40%     { fill: rgba(59,130,246,0.72); filter: brightness(1.4); }
          60%     { fill: rgba(147,197,253,0.55); }
        }

        /* ── CRANE SWING ── */
        .crane-hook { animation: craneSwing 3s ease-in-out infinite; transform-origin: 314px 77px; }
        @keyframes craneSwing {
          0%,100% { transform: translateX(0); }
          50% { transform: translateX(-8px); }
        }

        /* ── ANTENNA PULSE ── */
        .antenna-dot { animation: antPulse 2s ease-in-out infinite; }
        .antenna-dot-2 { animation: antPulse 2.4s ease-in-out 0.6s infinite; }
        @keyframes antPulse {
          0%,100% { opacity: 0.5; r: 3; }
          50% { opacity: 1; r: 5; filter: url(#glow2); }
        }

        /* ── MOON ROTATE ── */
        .moon-ring { animation: moonSpin 18s linear infinite; transform-origin: 358px 36px; }
        @keyframes moonSpin { to { transform: rotate(360deg); } }

        /* ── STAR TWINKLE ── */
        .star-twinkle { animation: twinkle 2.5s ease-in-out infinite; }
        .star-twinkle:nth-child(2) { animation-delay: 0.4s; }
        .star-twinkle:nth-child(3) { animation-delay: 0.9s; }
        .star-twinkle:nth-child(4) { animation-delay: 1.3s; }
        .star-twinkle:nth-child(5) { animation-delay: 1.8s; }
        .star-twinkle:nth-child(6) { animation-delay: 0.7s; }
        @keyframes twinkle {
          0%,100% { opacity: 0.2; transform: scale(0.8); }
          50% { opacity: 1; transform: scale(1.5); }
        }

        /* ── GROUND PULSE ── */
        .ground-shadow { animation: groundPulse 3s ease-in-out infinite; }
        @keyframes groundPulse {
          0%,100% { opacity: 0.4; }
          50% { opacity: 0.8; }
        }

        /* ── LEFT COL SLIDE ── */
        .left-col {
          opacity: 0;
          transform: translateX(-50px);
          transition: opacity 1s ease, transform 1s ease;
        }
        .section-active .left-col { opacity: 1; transform: translateX(0); }

        /* ── RIGHT COL SLIDE ── */
        .right-col {
          opacity: 0;
          transform: translateX(50px);
          transition: opacity 1s ease 0.2s, transform 1s ease 0.2s;
        }
        .section-active .right-col { opacity: 1; transform: translateX(0); }

        /* ── DIAMOND CARDS ── */
        .diamond-wrap {
          position: relative;
          width: 120px;
          height: 120px;
          flex-shrink: 0;
        }
        .diamond-card {
          position: absolute;
          inset: 0;
          background: #ffffff;
          border: 1.5px solid rgba(59,130,246,0.15);
          border-radius: 18px;
          transform: rotate(45deg);
          box-shadow: 0 8px 32px rgba(59,130,246,0.10), 0 2px 8px rgba(0,0,0,0.06);
          transition: box-shadow 0.3s, transform 0.3s;
        }
        .diamond-wrap:hover .diamond-card {
          box-shadow: 0 16px 48px rgba(59,130,246,0.2), 0 4px 16px rgba(0,0,0,0.08);
          transform: rotate(45deg) scale(1.04);
        }
        .diamond-content {
          position: absolute;
          inset: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          transform: rotate(-45deg);
          text-align: center;
          padding: 4px;
        }
        .diamond-value {
          font-family: 'Playfair Display', serif;
          font-size: 28px;
          font-weight: 800;
          color: #1d4ed8;
          line-height: 1;
          margin-bottom: 4px;
        }
        .diamond-label {
          font-size: 10px;
          font-weight: 600;
          color: #64748b;
          line-height: 1.3;
          text-transform: uppercase;
          letter-spacing: 0.03em;
          white-space: pre-line;
        }

        /* ── BAR STATS ── */
        .bar-track {
          height: 6px;
          background: rgba(226,232,240,0.8);
          border-radius: 999px;
          overflow: hidden;
          border: 1px solid rgba(203,213,225,0.6);
        }
        .bar-fill {
          height: 100%;
          border-radius: 999px;
          background: linear-gradient(90deg, #2563eb, #38bdf8);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 1.6s cubic-bezier(0.22,1,0.36,1);
        }
        .section-active .bar-fill { transform: scaleX(1); }

        /* ── CARD ── */
        .profile-card {
          background: #ffffff;
          border: 1px solid rgba(203,213,225,0.8);
          border-radius: 20px;
          padding: 20px;
          box-shadow: 0 4px 24px rgba(0,0,0,0.08), 0 1px 4px rgba(0,0,0,0.04);
          position: relative;
          overflow: hidden;
        }
        .profile-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 3px;
          background: linear-gradient(90deg, #2563eb, #38bdf8, #7c3aed);
          animation: cardLine 4s ease-in-out infinite;
        }
        @keyframes cardLine {
          0%,100% { opacity: 0.6; }
          50% { opacity: 1; }
        }

        .card-divider {
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(203,213,225,0.8), transparent);
          margin: 14px 0;
        }

        .follow-btn {
          border: 1.5px solid rgba(37,99,235,0.3);
          border-radius: 20px;
          padding: 5px 16px;
          font-size: 11px;
          font-weight: 600;
          color: #2563eb;
          background: rgba(219,234,254,0.4);
          cursor: pointer;
          font-family: 'Outfit', sans-serif;
          transition: all 0.2s;
          white-space: nowrap;
        }
        .follow-btn:hover {
          background: rgba(219,234,254,0.8);
          border-color: rgba(37,99,235,0.5);
        }

        .cta-btn {
          border: 1.5px solid rgba(30,41,59,0.2);
          border-radius: 12px;
          padding: 10px 20px;
          font-size: 13px;
          font-weight: 600;
          color: #0f172a;
          background: #ffffff;
          cursor: pointer;
          font-family: 'Outfit', sans-serif;
          transition: all 0.25s ease;
          box-shadow: 0 2px 8px rgba(0,0,0,0.06);
        }
        .cta-btn:hover {
          background: #0f172a;
          color: #ffffff;
          border-color: #0f172a;
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(0,0,0,0.14);
        }
        .cta-btn-primary {
          background: #1d4ed8;
          color: #ffffff;
          border-color: #1d4ed8;
        }
        .cta-btn-primary:hover {
          background: #1e40af;
          border-color: #1e40af;
          color: #ffffff;
        }

        /* ── ACCENT TAGS ── */
        .accent-tag {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          padding: 4px 10px;
          border-radius: 20px;
          font-size: 11px;
          font-weight: 500;
          border: 1px solid;
        }

        /* ── FLOATING PARTICLES ── */
        .particle {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
          animation: particleFloat linear infinite;
        }
        @keyframes particleFloat {
          0% { transform: translateY(0) scale(1); opacity: 0.6; }
          50% { opacity: 1; }
          100% { transform: translateY(-80px) scale(0.5); opacity: 0; }
        }

        /* ── KICKER LINE ── */
        .kicker-line {
          display: inline-block;
          width: 32px;
          height: 2px;
          background: #2563eb;
          border-radius: 2px;
          margin-right: 10px;
          vertical-align: middle;
          animation: kickerGrow 1s ease-out 0.3s both;
        }
        @keyframes kickerGrow {
          from { width: 0; opacity: 0; }
          to { width: 32px; opacity: 1; }
        }

        /* ── HEADING UNDERLINE ── */
        .heading-underline {
          position: relative;
          display: inline;
        }
        .heading-underline::after {
          content: '';
          position: absolute;
          bottom: 2px;
          left: 0;
          width: 0;
          height: 3px;
          background: linear-gradient(90deg, #2563eb, #38bdf8);
          border-radius: 2px;
          transition: width 1.2s ease 0.8s;
        }
        .section-active .heading-underline::after { width: 100%; }

        /* ── STAT BADGE ── */
        .stat-badge {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 8px 14px;
          background: #f8fafc;
          border: 1px solid rgba(203,213,225,0.7);
          border-radius: 12px;
        }
        .stat-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #22c55e;
          animation: dotPulse 2s ease-in-out infinite;
          flex-shrink: 0;
        }
        @keyframes dotPulse {
          0%,100% { box-shadow: 0 0 0 0 rgba(34,197,94,0.4); }
          50% { box-shadow: 0 0 0 6px rgba(34,197,94,0); }
        }

        /* ── SECTION DECORATION ── */
        .deco-circle {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
          animation: decoFloat 6s ease-in-out infinite;
        }
        @keyframes decoFloat {
          0%,100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-12px) scale(1.03); }
        }

        @media (max-width: 768px) {
          .diamond-wrap { width: 100px; height: 100px; }
          .diamond-value { font-size: 22px; }
          .diamond-label { font-size: 9px; }
        }
      `}</style>

      <section
        ref={ref}
        className={`about-wrap${active ? " section-active" : ""}`}
        style={{
          position: "relative",
          background: "#ffffff",
          padding: isMobile ? "60px 16px" : isTablet ? "72px 32px" : "80px 6%",
          overflow: "hidden",
        }}
      >
        {/* ── BACKGROUND DECORATION ── */}
        <div className="deco-circle" style={{ width: 400, height: 400, top: -120, right: -80, background: "radial-gradient(circle, rgba(219,234,254,0.5) 0%, transparent 70%)" }} />
        <div className="deco-circle" style={{ width: 300, height: 300, bottom: -60, left: -40, background: "radial-gradient(circle, rgba(240,253,244,0.6) 0%, transparent 70%)", animationDelay: "2s" }} />
        <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle, rgba(148,163,184,0.06) 1px, transparent 1px)", backgroundSize: "28px 28px", pointerEvents: "none" }} />

        {/* Floating particles */}
        {[
          { w: 6, l: "12%", t: "70%", delay: "0s", dur: "6s", color: "rgba(59,130,246,0.25)" },
          { w: 4, l: "28%", t: "80%", delay: "1.5s", dur: "5s", color: "rgba(56,189,248,0.3)" },
          { w: 5, l: "72%", t: "75%", delay: "0.8s", dur: "7s", color: "rgba(37,99,235,0.2)" },
          { w: 3, l: "85%", t: "65%", delay: "2s", dur: "5.5s", color: "rgba(124,58,237,0.2)" },
        ].map((p, i) => (
          <div key={i} className="particle" style={{ width: p.w, height: p.w, left: p.l, top: p.t, background: p.color, animationDuration: p.dur, animationDelay: p.delay }} />
        ))}

        <div style={{
          display: "grid",
          gridTemplateColumns: isTablet ? "1fr" : "1fr 1fr",
          gap: isMobile ? 40 : isTablet ? 48 : 64,
          maxWidth: 1200,
          margin: "0 auto",
          alignItems: "center",
          position: "relative",
          zIndex: 2,
        }}>

          {/* ══════════════════════════════
              LEFT COLUMN — Illustration + Metrics
          ══════════════════════════════ */}
          <div className="left-col" style={{ display: "flex", flexDirection: "column", gap: 32, order: isTablet ? 2 : 1 }}>

            {/* ── CITY SVG ── */}
            <div style={{ position: "relative" }}>
              {/* Glow halo behind SVG */}
              <div style={{ position: "absolute", inset: "10%", background: "radial-gradient(ellipse, rgba(219,234,254,0.7) 0%, transparent 70%)", borderRadius: "50%", pointerEvents: "none" }} />
              <svg viewBox="0 0 420 260" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "auto", position: "relative", zIndex: 1 }}>
                <defs>
                  <linearGradient id="b1" x1="0.5" y1="0" x2="0.5" y2="1">
                    <stop offset="0%" stopColor="#93c5fd" />
                    <stop offset="100%" stopColor="#3b82f6" />
                  </linearGradient>
                  <linearGradient id="b2" x1="0.5" y1="0" x2="0.5" y2="1">
                    <stop offset="0%" stopColor="#bfdbfe" />
                    <stop offset="100%" stopColor="#60a5fa" />
                  </linearGradient>
                  <linearGradient id="b3" x1="0.5" y1="0" x2="0.5" y2="1">
                    <stop offset="0%" stopColor="#dbeafe" />
                    <stop offset="100%" stopColor="#93c5fd" />
                  </linearGradient>
                  <linearGradient id="gnd" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#bfdbfe" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="white" stopOpacity="0" />
                  </linearGradient>
                  <filter id="glow2">
                    <feGaussianBlur stdDeviation="2" result="blur" />
                    <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
                  </filter>
                  <filter id="softShadow">
                    <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="rgba(59,130,246,0.15)" />
                  </filter>
                </defs>

                {/* Ground */}
                <rect x="0" y="228" width="420" height="32" fill="url(#gnd)" />
                <line x1="0" y1="228" x2="420" y2="228" stroke="rgba(147,197,253,0.5)" strokeWidth="1.5" />
                <ellipse cx="210" cy="228" rx="180" ry="6" fill="rgba(147,197,253,0.12)" className="ground-shadow" />

                {/* Far left small building */}
                <rect x="8" y="162" width="44" height="66" fill="url(#b3)" rx="2" filter="url(#softShadow)" />
                {[170, 186, 202].map(y => [13, 27, 41].map(x => (
                  <rect key={`a${x}${y}`} x={x} y={y} width="9" height="11" rx="1.5" fill="rgba(59,130,246,0.22)" className="win-blink-3" />
                )))}

                {/* Left tall building */}
                <rect x="58" y="98" width="84" height="130" fill="url(#b2)" rx="3" filter="url(#softShadow)" />
                {[115, 133, 151, 169, 187, 205].map(y => [66, 84, 102, 122].map(x => {
                  const cls = (x + y) % 5 === 0 ? "win-blink" : (x + y) % 7 === 0 ? "win-blink-2" : "";
                  return <rect key={`b${x}${y}`} x={x} y={y} width="11" height="12" rx="1.5" fill="rgba(255,255,255,0.35)" className={cls} />;
                }))}
                <rect x="54" y="92" width="92" height="10" fill="#93c5fd" rx="2" />
                <line x1="100" y1="92" x2="100" y2="68" stroke="rgba(59,130,246,0.5)" strokeWidth="2" />
                <circle cx="100" cy="67" r="3" fill="#3b82f6" filter="url(#glow2)" className="antenna-dot" />

                {/* Center hero building */}
                <rect x="155" y="44" width="112" height="184" fill="url(#b1)" rx="4" filter="url(#softShadow)" />
                {[62, 82, 102, 122, 142, 162, 182, 202].map(y => [163, 183, 203, 225, 245].map(x => {
                  const cls = (x * y) % 9 === 0 ? "win-blink" : (x * y) % 7 === 0 ? "win-blink-2" : (x * y) % 5 === 0 ? "win-blink-3" : "";
                  return <rect key={`c${x}${y}`} x={x} y={y} width="12" height="14" rx="1.5" fill="rgba(255,255,255,0.3)" className={cls} />;
                }))}
                <rect x="150" y="38" width="122" height="10" fill="#60a5fa" rx="2" />
                <rect x="196" y="26" width="30" height="16" fill="#93c5fd" rx="3" />
                <line x1="211" y1="26" x2="211" y2="6" stroke="rgba(59,130,246,0.6)" strokeWidth="2" />
                <circle cx="211" cy="5" r="3.5" fill="#2563eb" filter="url(#glow2)" className="antenna-dot-2" />

                {/* Right building */}
                <rect x="280" y="118" width="78" height="110" fill="url(#b2)" rx="3" filter="url(#softShadow)" />
                {[132, 150, 168, 186, 204].map(y => [287, 306, 325, 344].map(x => {
                  const cls = (x + y) % 6 === 0 ? "win-blink-2" : "";
                  return <rect key={`d${x}${y}`} x={x} y={y} width="10" height="12" rx="1.5" fill="rgba(255,255,255,0.35)" className={cls} />;
                }))}
                <rect x="276" y="112" width="86" height="10" fill="#93c5fd" rx="2" />

                {/* Far right small */}
                <rect x="368" y="172" width="46" height="56" fill="url(#b3)" rx="2" filter="url(#softShadow)" />
                {[180, 196, 212].map(y => [373, 389].map(x => (
                  <rect key={`e${x}${y}`} x={x} y={y} width="9" height="10" rx="1.5" fill="rgba(59,130,246,0.22)" className="win-blink" />
                )))}

                {/* Crane */}
                <line x1="350" y1="228" x2="350" y2="73" stroke="rgba(96,165,250,0.4)" strokeWidth="2.5" />
                <line x1="306" y1="75" x2="384" y2="75" stroke="rgba(96,165,250,0.4)" strokeWidth="2.5" />
                <line x1="350" y1="75" x2="318" y2="105" stroke="rgba(96,165,250,0.25)" strokeWidth="1.5" />
                <g className="crane-hook">
                  <line x1="314" y1="75" x2="314" y2="120" stroke="rgba(96,165,250,0.45)" strokeWidth="1.5" strokeDasharray="3,2" />
                  <rect x="308" y="120" width="12" height="9" rx="2" fill="rgba(59,130,246,0.5)" />
                </g>

                {/* Moon */}
                <circle cx="358" cy="34" r="18" fill="none" stroke="rgba(147,197,253,0.35)" strokeWidth="1.5" strokeDasharray="4,2" className="moon-ring" />
                <circle cx="358" cy="34" r="12" fill="rgba(219,234,254,0.5)" />
                <circle cx="354" cy="30" r="5" fill="rgba(147,197,253,0.4)" />

                {/* Stars */}
                {[[42, 26], [86, 16], [318, 20], [385, 12], [128, 30], [28, 44]].map(([x, y], i) => (
                  <circle key={i} cx={x} cy={y} r="2" fill="#3b82f6" className="star-twinkle" />
                ))}

                {/* Road lines */}
                {[70, 130, 190, 250, 310].map(x => (
                  <rect key={x} x={x} y="236" width="32" height="3" rx="1.5" fill="rgba(147,197,253,0.3)" />
                ))}
              </svg>
            </div>

            {/* ── METRICS ROW ── */}
            <div style={{ display: "flex", gap: isMobile ? 16 : 24, justifyContent: "center", flexWrap: "wrap" }}>
              {metricDefs.map((m) => (
                <div key={m.key} className="diamond-wrap">
                  <div className="diamond-card" />
                  <div className="diamond-content">
                    <div className="diamond-value">{metricValues[m.key]}{m.suffix}</div>
                    <div className="diamond-label">{m.label}</div>
                  </div>
                </div>
              ))}
            </div>



          </div>

          {/* ══════════════════════════════
              RIGHT COLUMN — Headline + Card + Tags
          ══════════════════════════════ */}
          <div className="right-col" style={{ order: isTablet ? 1 : 2, display: "flex", flexDirection: "column", gap: 28 }}>

            {/* ── KICKER ── */}
            <div style={{ display: "flex", alignItems: "center" }}>
              <span className="kicker-line" />
              <span style={{ fontSize: 12, fontWeight: 700, color: "#2563eb", letterSpacing: "0.1em", textTransform: "uppercase" }}>Building Excellence</span>
            </div>

            {/* ── HEADLINE ── */}
            <div>
              <h2 style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: isMobile ? "clamp(2rem, 7vw, 2.8rem)" : "clamp(2.4rem, 3.5vw, 3.8rem)",
                fontWeight: 800,
                color: "#0f172a",
                lineHeight: 1.08,
                margin: 0,
              }}>
                Crafting Strong<br />
                Foundations for the{" "}
                <span className="heading-underline" style={{ color: "#2563eb" }}>Future.</span>
              </h2>
              <p style={{ fontSize: 15, color: "#475569", lineHeight: 1.7, marginTop: 16, marginBottom: 0, maxWidth: "38ch" }}>
                With years of experience in the construction industry, we deliver residential, commercial & retail, educational & healthcare, and industrial projects with a strong commitment to quality, reliability, and timely completion.
              </p>
            </div>

            {/* ── PROFILE CARD — fully integrated ── */}
            <div className="profile-card">
              {/* Header row */}
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div style={{
                  width: 48, height: 48, borderRadius: "50%", overflow: "hidden", flexShrink: 0,
                  border: "2px solid rgba(219,234,254,0.9)",
                  boxShadow: "0 0 0 3px rgba(59,130,246,0.08)",
                }}>
                  <img src="https://www.arvishconsulting.com/assets/arvish-logo-zo8liOBq.png" alt="Arvish logo" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 700, fontSize: 14, color: "#0f172a", fontFamily: "'Playfair Display', serif" }}>Arvish Constructions</div>
                  <div className="stat-badge" style={{ marginTop: 4, display: "inline-flex" }}>
                    <div className="stat-dot" />
                    <span style={{ fontSize: 11, color: "#475569", fontWeight: 500 }}>Active</span>
                  </div>
                </div>
                <a
                  className="follow-btn"
                  href="https://www.facebook.com/ArvishConstructions"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Follow
                </a>
              </div>

              <div className="card-divider" />

              {/* Tagline */}
              <p style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 15, color: "#0f172a", margin: 0, lineHeight: 1.5 }}>
                Built on Experience.<br />Driven by Quality.
              </p>
              <p style={{ fontSize: 12, color: "#64748b", marginTop: 8, marginBottom: 4 }}>
                Delivering reliable construction solutions with precision, trust, and a commitment to excellence—ensuring every project is built to last.
              </p>

              {/* Accent tags */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: 10 }}>
                {[
                  { label: "Residential", color: "#1d4ed8", bg: "rgba(219,234,254,0.6)", border: "rgba(147,197,253,0.5)", path: "/services/residential" },
                  { label: "Commercial & Retail", color: "#0369a1", bg: "rgba(224,242,254,0.6)", border: "rgba(125,211,252,0.5)", path: "/services/commercial-retail" },
                  { label: "Educational & Healthcare", color: "#047857", bg: "rgba(209,250,229,0.6)", border: "rgba(110,231,183,0.5)", path: "/services/educational-healthcare" },
                  { label: "Industrial", color: "#7c3aed", bg: "rgba(237,233,254,0.6)", border: "rgba(196,181,253,0.5)", path: "/services/industrial" },
                ].map(t => (
                  <div key={t.label} className="accent-tag" style={{ color: t.color, background: t.bg, borderColor: t.border, fontSize: 11, fontWeight: 600, cursor: "pointer", transition: "all 0.2s" }} onClick={() => navigate(t.path)}>
                    {t.label}
                  </div>
                ))}
              </div>

              <div className="card-divider" />

              {/* Stats row */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 0 }}>
                {[
                  { value: "50+", label: "Projects", sub: "Completed" },
                  { value: "98%", label: "Success", sub: "Rate" },
                  { value: "5+", label: "Years", sub: "Excellence" },
                ].map((s, i) => (
                  <div key={i} style={{ textAlign: "center", padding: "4px 8px", borderRight: i < 2 ? "1px solid rgba(203,213,225,0.6)" : "none" }}>
                    <div style={{ fontFamily: "'Playfair Display', serif", fontWeight: 800, fontSize: 20, color: "#1d4ed8" }}>{s.value}</div>
                    <div style={{ fontSize: 10, fontWeight: 600, color: "#64748b", textTransform: "uppercase", letterSpacing: "0.05em" }}>{s.label}</div>
                    <div style={{ fontSize: 10, color: "#94a3b8" }}>{s.sub}</div>
                  </div>
                ))}
              </div>
            </div>


          </div>

        </div>
      </section>
    </>
  );
}