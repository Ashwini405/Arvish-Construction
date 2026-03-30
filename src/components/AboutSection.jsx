import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AboutGlassSection() {
  const ref = useRef();
  const navigate = useNavigate();
  const [animationTriggered, setAnimationTriggered] = useState(false);
  const [metricValues, setMetricValues] = useState({
    projects: 0,
    satisfaction: 0,
    years: 0,
  });

  const metricDefs = [
    { key: "projects", label: "Projects Completed", target: 1600, suffix: "+" },
    { key: "satisfaction", label: "Client Satisfaction", target: 98, suffix: "%" },
    { key: "years", label: "Years of Excellence", target: 15, suffix: "+" },
  ];

  useEffect(() => {
    const el = ref.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("active");
          setAnimationTriggered(true);
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!animationTriggered) return;

    const duration = 1600;
    let startTimestamp = null;
    let rafId;

    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);

      setMetricValues({
        projects: Math.round(1600 * progress),
        satisfaction: Math.round(98 * progress),
        years: Math.round(15 * progress),
      });

      if (progress < 1) {
        rafId = requestAnimationFrame(step);
      }
    };

    rafId = requestAnimationFrame(step);

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [animationTriggered]);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:wght@300;400;500&display=swap');

        .about-section { font-family: 'DM Sans', sans-serif; }
        .about-section h2 { font-family: 'DM Sans', sans-serif; }

        /* LEFT column slide-in */
        .left-col {
          opacity: 0;
          transform: translateX(-40px);
          transition: opacity 0.9s ease, transform 0.9s ease;
        }
        .active .left-col { opacity: 1; transform: translateX(0); }

        /* RIGHT column slide-in */
        .right-col {
          opacity: 0;
          transform: translateX(50px);
          transition: opacity 1s ease 0.25s, transform 1s ease 0.25s;
        }
        .active .right-col { opacity: 1; transform: translateX(0); }

        /* SVG city glow pulse */
        .building-glow {
          animation: bPulse 4s ease-in-out infinite;
        }
        @keyframes bPulse {
          0%,100% { filter: drop-shadow(0 0 6px rgba(96,165,250,0.25)); }
          50%      { filter: drop-shadow(0 0 16px rgba(96,165,250,0.5)); }
        }

        /* Stat bars */
        .stat-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 10px;
          margin-bottom: 8px;
        }
        .stat-row span:first-child {
          color: rgba(255,255,255,0.65);
          font-size: 13px;
          font-weight: 500;
        }
        .stat-row span:last-child {
          color: #61abff;
          font-weight: 700;
          font-size: 13px;
        }
        .bar-track {
          height: 8px;
          background: rgba(96,145,190,0.22);
          border-radius: 999px;
          overflow: hidden;
          border: 1px solid rgba(121,185,255,0.18);
        }
        .bar-fill {
          height: 100%;
          border-radius: 999px;
          background: linear-gradient(90deg, #3b82f6 0%, #38bdf8 40%, #a8f2ff 100%);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 1.3s cubic-bezier(0.22,1,0.36,1);
          box-shadow: 0 0 12px rgba(56,192,248,0.46);
        }
        .active .bar-fill { transform: scaleX(1); }

        /* Chips styling */
        .chips-container {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-top: 12px;
        }
        .chip {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 6px 12px;
          background: rgba(96,165,250,0.1);
          border: 1px solid rgba(96,165,250,0.2);
          border-radius: 20px;
          font-size: 12px;
          color: rgba(255,255,255,0.85);
          font-weight: 500;
          backdrop-filter: blur(10px);
          transition: all 0.2s ease;
        }
        .chip:hover {
          background: rgba(96,165,250,0.15);
          border-color: rgba(96,165,250,0.3);
          transform: translateY(-1px);
        }
        .chip-check {
          color: #34d399;
          font-size: 14px;
        }

        /* What We Build tags */
        .build-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-top: 16px;
        }
        .build-tag {
          padding: 4px 10px;
          background: rgba(96,165,250,0.08);
          border: 1px solid rgba(96,165,250,0.15);
          border-radius: 12px;
          font-size: 11px;
          color: rgba(255,255,255,0.75);
          font-weight: 500;
          backdrop-filter: blur(8px);
          transition: all 0.2s ease;
        }
        .build-tag:hover {
          background: rgba(96,165,250,0.12);
          border-color: rgba(96,165,250,0.25);
          color: rgba(255,255,255,0.85);
        }

        /* Animated glowing line */
        .animated-line {
          width: 0;
          height: 3px;
          background: linear-gradient(90deg, #60a5fa, #38bdf8, #22d3ee);
          border-radius: 2px;
          margin: 16px 0 8px 0;
          box-shadow: 0 0 20px rgba(96,165,250,0.6);
          position: relative;
          animation: expandLine 2s ease-out 0.5s forwards;
        }
        .animated-line::after {
          content: '';
          position: absolute;
          top: 50%;
          right: -8px;
          width: 14px;
          height: 14px;
          border-radius: 50%;
          background: #22d3ee;
          transform: translateY(-50%) scale(0);
          box-shadow: 0 0 12px rgba(34, 211, 238, 0.85);
          animation: lineNobe 2s ease-out 0.5s forwards;
        }
        @keyframes expandLine {
          0% {
            width: 0;
            box-shadow: 0 0 0 rgba(96,165,250,0);
          }
          100% {
            width: 120px;
            box-shadow: 0 0 20px rgba(96,165,250,0.6);
          }
        }
        @keyframes lineNobe {
          0% {
            transform: translateY(-50%) scale(0);
            opacity: 0;
          }
          90% {
            transform: translateY(-50%) scale(0.95);
            opacity: 1;
          }
          100% {
            transform: translateY(-50%) scale(1);
            opacity: 1;
          }
        }

        .stats-container {
          background: rgba(6, 12, 25, 0.15);
          border-radius: 0;
          border: none;
          box-shadow: none;
          padding: 8px 0 0 0;
        }
        .stats-subtitle {
          color: rgba(160, 190, 255, 0.75);
          font-size: 11px;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          margin-bottom: 12px;
        }
        .diamond-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 12px;
        }
        .diamond-card {
          position: relative;
          width: 100%;
          aspect-ratio: 1 / 1;
          background: linear-gradient(145deg, rgba(74, 115, 171, 0.26), rgba(20, 35, 70, 0.42));
          border: 1px solid rgba(104, 153, 221, 0.2);
          border-radius: 16px;
          transform: rotate(45deg);
          box-shadow: 0 8px 14px rgba(15, 40, 80, 0.28);
          overflow: hidden;
        }
        .diamond-card::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at 50% 20%, rgba(156,213,255,0.18), transparent 45%);
        }
        .diamond-content {
          position: absolute;
          inset: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          transform: rotate(-45deg);
          color: #e4f4ff;
          z-index: 1;
          padding: 8px;
        }
        .diamond-value {
          font-size: 26px;
          font-weight: 800;
          color: #7dd3fc;
          margin-bottom: 6px;
        }
        .diamond-label {
          font-size: 12px;
          font-weight: 600;
          color: rgba(207,226,255,0.92);
          line-height: 1.2;
        }

        /*
        ┌─────────────────────────────────────────────────────┐
        │  HAND + CARD SCENE                                   │
        │                                                      │
        │  Strategy: one container, two layers                 │
        │  • hand-img   → z-index 5   (behind card)           │
        │  • card-wrap  → z-index 20  (in front of hand)      │
        │                                                      │
        │  The hand image is large and centered.              │
        │  The card is absolutely positioned so it sits        │
        │  right where the palm/fingers are in the photo.     │
        └─────────────────────────────────────────────────────┘
        */
        .scene {
          position: relative;
          width: 100%;
          height: 620px;
        }

        /*
          HAND IMAGE
          ─────────
          • Centered horizontally in the scene
          • Bottom-anchored so wrist exits the bottom edge (natural crop)
          • Large enough that the palm fills the scene
          • NO scaleX flip — keep original orientation of hand.png
            (if your hand faces the wrong way, add: transform: scaleX(-1))
        */
        .hand-img {
          position: absolute;
          bottom: -80px;
          right: -120px;
          width: 580px;
          z-index: 5;
          pointer-events: none;
          /* dark shadow so hand blends into dark bg */
          filter: drop-shadow(-8px -8px 30px rgba(0,0,0,0.7))
                  drop-shadow(0 20px 40px rgba(0,0,0,0.9));
        }

        /*
          CARD
          ────
          • Absolutely positioned in the scene
          • Sits at top-center — this puts it right above the palm
          • Rotated slightly to match the "held at an angle" look
          • z-index 20 so it renders ON TOP of the hand
        */
        .card-wrap {
          position: absolute;
          top: 260px;
          right: 98px;           /* positioned in hand's palm area */
          transform: rotate(-6deg);
          z-index: 20;
          animation: none;
          filter: drop-shadow(0 0 18px rgba(96,165,250,0.2)) 
                  drop-shadow(0 8px 20px rgba(0,0,0,0.3));
        }
        @keyframes floatCard {
          0%,100% { top: 170px;  transform: rotate(-8deg); }
          50%      { top: 120px; transform: rotate(-6deg); }
        }

        /* Glass card shell */
        .glass-outer {
  width: 320px;
  border-radius: 22px;
  padding: 1px;
  background: linear-gradient(
    135deg,
    rgba(96,165,250,0.35),
    rgba(148,113,255,0.25)
  );
  box-shadow:
    0 0 15px rgba(96,165,250,0.2),
    0 0 30px rgba(148,113,255,0.12),
    inset 0 0 8px rgba(255,255,255,0.1);
}
        .glass-inner {
  background: rgba(5,10,22,0.7);
  backdrop-filter: blur(30px) saturate(150%);
  -webkit-backdrop-filter: blur(30px) saturate(150%);
  border-radius: 21px;
  padding: 24px 22px 20px;
  position: relative;
  overflow: hidden;
  border: 1px solid rgba(96,165,250,0.15);
}
        /* top-left inner shine */
        .glass-inner::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(148deg, rgba(96,165,250,0.06) 0%, transparent 42%);
          border-radius: 21px;
          pointer-events: none;
        }

        .card-divider {
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(96,165,250,0.1), transparent);
          margin: 12px 0;
        }
        .follow-btn {
          border: 1px solid rgba(255,255,255,0.28);
          border-radius: 20px;
          padding: 4px 14px;
          font-size: 11px;
          color: white;
          background: rgba(255,255,255,0.07);
          cursor: pointer;
          font-family: 'DM Sans', sans-serif;
          white-space: nowrap;
          transition: background 0.2s;
        }
        .follow-btn:hover { background: rgba(255,255,255,0.14); }
        .follows-badge {
          display: inline-block;
          border: 1px solid rgba(255,255,255,0.15);
          border-radius: 20px;
          padding: 2px 9px;
          font-size: 10px;
          color: rgba(255,255,255,0.44);
          margin-top: 3px;
        }

        .cta-btn {
          border: 1px solid rgba(255,255,255,0.25);
          border-radius: 16px;
          padding: 10px 18px;
          font-size: 13px;
          color: #e8f4ff;
          background: rgba(255,255,255,0.08);
          backdrop-filter: blur(8px);
          cursor: pointer;
          font-family: 'DM Sans', sans-serif;
          transition: transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease;
        }
        .cta-btn:hover {
          background: rgba(96,165,250,0.18);
          box-shadow: 0 10px 25px rgba(56,192,248,0.24);
          transform: translateY(-2px);
        }
        .cta-alt {
          color: #b8dbff;
          border-color: rgba(96,165,250,0.3);
        }


        /* Bokeh */
        .bokeh { position: absolute; border-radius: 50%; pointer-events: none; }

        /* Sparkle */
        .sparkle { animation: sp 3s ease-in-out infinite; }
        @keyframes sp {
          0%,100% { opacity:0.4; transform:scale(1); }
          50%      { opacity:1;  transform:scale(1.45); }
        }
      `}</style>

      <section
        ref={ref}
        className="about-section"
        style={{
          position: "relative",
          minHeight: "100vh",
          background: "linear-gradient(155deg,#060b1a 0%,#080f22 60%,#04090f 100%)",
          display: "flex",
          alignItems: "center",
          overflow: "hidden",
          padding: "60px 6%",
        }}
      >
        {/* Bokeh background dots */}
        {[
          {w:120,h:120,l:"2%",  t:"8%",  op:0.18},
          {w:70, h:70, l:"18%", t:"76%", op:0.14},
          {w:55, h:55, l:"46%", t:"5%",  op:0.12},
          {w:95, h:95, l:"78%", t:"70%", op:0.16},
          {w:48, h:48, l:"90%", t:"16%", op:0.11},
          {w:62, h:62, l:"34%", t:"86%", op:0.13},
          {w:40, h:40, l:"60%", t:"50%", op:0.09},
        ].map((d,i)=>(
          <div key={i} className="bokeh" style={{
            width:d.w, height:d.h, left:d.l, top:d.t,
            background:`radial-gradient(circle,rgba(80,130,255,${d.op}) 0%,transparent 70%)`,
            filter:"blur(4px)",
          }}/>
        ))}

        {/* ═══════════════════════════════
            2-COLUMN GRID
        ═══════════════════════════════ */}
        <div style={{
          display:"grid",
          gridTemplateColumns:"1fr 1fr",
          gap:"50px",
          width:"100%",
          maxWidth:1160,
          margin:"0 auto",
          alignItems:"center",
          position:"relative",
          zIndex:2,
        }}>

          {/* ════════ LEFT COLUMN ════════ */}
          <div className="left-col" style={{display:"flex",flexDirection:"column",gap:28}}>

            {/* SVG City Illustration */}
            <div className="building-glow">
              <svg viewBox="0 0 420 260" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width:"100%",height:"auto"}}>
                <defs>
                  <linearGradient id="b1" x1="0.2" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#1e3a6e"/><stop offset="100%" stopColor="#0c1a3a"/>
                  </linearGradient>
                  <linearGradient id="b2" x1="0.1" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#162d52"/><stop offset="100%" stopColor="#080f22"/>
                  </linearGradient>
                  <linearGradient id="win" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.75"/>
                    <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.28"/>
                  </linearGradient>
                  <filter id="glow2">
                    <feGaussianBlur stdDeviation="2.5" result="blur"/>
                    <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
                  </filter>
                  <linearGradient id="gnd" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#1a3a6e" stopOpacity="0.3"/>
                    <stop offset="100%" stopColor="#080d1e" stopOpacity="0"/>
                  </linearGradient>
                </defs>
                <rect x="0" y="228" width="420" height="32" fill="url(#gnd)"/>
                <line x1="0" y1="228" x2="420" y2="228" stroke="rgba(96,165,250,0.18)" strokeWidth="1"/>
                {/* Far left small */}
                <rect x="8" y="158" width="44" height="70" fill="#0b1530" rx="2"/>
                {[168,184,200,216].map(y=>[14,28].map(x=>(<rect key={`a${x}${y}`} x={x} y={y} width="9" height="10" rx="1" fill="rgba(96,165,250,0.18)"/>)))}
                {/* Left tall */}
                <rect x="58" y="100" width="82" height="128" fill="url(#b2)" rx="2"/>
                {[115,133,151,169,187,205].map(y=>[66,84,102,122].map(x=>(<rect key={`b${x}${y}`} x={x} y={y} width="10" height="12" rx="1" fill={((x+y)%3===0)?"url(#win)":"rgba(255,255,255,0.03)"}/>)))}
                <rect x="54" y="94" width="90" height="9" fill="#162d52" rx="1.5"/>
                <line x1="99" y1="94" x2="99" y2="72" stroke="rgba(96,165,250,0.4)" strokeWidth="1.5"/>
                <circle cx="99" cy="71" r="2.5" fill="#60a5fa" filter="url(#glow2)"/>
                {/* Center hero */}
                <rect x="155" y="48" width="110" height="180" fill="url(#b1)" rx="3"/>
                {[65,85,105,125,145,165,185,205].map(y=>[163,183,203,225,245].map(x=>(<rect key={`c${x}${y}`} x={x} y={y} width="11" height="13" rx="1" fill={((x*y)%5<2)?"url(#win)":"rgba(255,255,255,0.03)"}/>)))}
                <rect x="150" y="42" width="120" height="10" fill="#1a3360" rx="2"/>
                <rect x="196" y="30" width="28" height="16" fill="#162d52" rx="2"/>
                <line x1="210" y1="30" x2="210" y2="10" stroke="rgba(96,165,250,0.5)" strokeWidth="1.5"/>
                <circle cx="210" cy="9" r="3" fill="#60a5fa" filter="url(#glow2)"/>
                {/* Right */}
                <rect x="278" y="120" width="75" height="108" fill="url(#b2)" rx="2"/>
                {[135,153,171,189,207].map(y=>[285,303,321,339].map(x=>(<rect key={`d${x}${y}`} x={x} y={y} width="9" height="12" rx="1" fill={((x+y)%4===0)?"url(#win)":"rgba(255,255,255,0.03)"}/>)))}
                <rect x="274" y="114" width="83" height="9" fill="#152848" rx="1.5"/>
                {/* Far right */}
                <rect x="365" y="170" width="48" height="58" fill="#0b1530" rx="2"/>
                {[178,194,210].map(y=>[371,385].map(x=>(<rect key={`e${x}${y}`} x={x} y={y} width="9" height="11" rx="1" fill="rgba(96,165,250,0.2)"/>)))}
                {/* Crane */}
                <line x1="350" y1="228" x2="350" y2="75" stroke="rgba(96,165,250,0.28)" strokeWidth="2"/>
                <line x1="308" y1="77" x2="382" y2="77" stroke="rgba(96,165,250,0.28)" strokeWidth="2"/>
                <line x1="350" y1="77" x2="314" y2="108" stroke="rgba(96,165,250,0.18)" strokeWidth="1"/>
                <line x1="314" y1="77" x2="314" y2="116" stroke="rgba(96,165,250,0.28)" strokeWidth="1" strokeDasharray="3,2"/>
                <rect x="309" y="116" width="10" height="8" rx="1" fill="rgba(96,165,250,0.35)"/>
                {/* Moon */}
                <circle cx="358" cy="36" r="16" fill="none" stroke="rgba(96,165,250,0.12)" strokeWidth="1.5"/>
                <circle cx="358" cy="36" r="10" fill="rgba(96,165,250,0.05)"/>
                {/* Stars */}
                {[[45,28],[88,18],[318,22],[385,14],[130,32],[30,45]].map(([x,y],i)=>(<circle key={i} cx={x} cy={y} r="1.5" fill="rgba(255,255,255,0.45)"/>))}
                <ellipse cx="210" cy="230" rx="95" ry="5" fill="rgba(96,165,250,0.07)"/>
                {[70,120,170,220,270,320].map(x=>(<rect key={x} x={x} y="237" width="28" height="3" rx="1.5" fill="rgba(255,255,255,0.05)"/>))}
              </svg>
            </div>

            {/* Key metrics as 3 diamond cards */}
            <div className="stats-container">
              <div className="stats-subtitle"></div>
              <div className="diamond-grid">
                {metricDefs.map((metric) => (
                  <div key={metric.key} className="diamond-card">
                    <div className="diamond-content">
                      <div className="diamond-value">
                        {metricValues[metric.key]}
                        {metric.suffix}
                      </div>
                      <div className="diamond-label">{metric.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* ════════ RIGHT COLUMN ════════ */}
          <div className="right-col">
            <div className="scene">

              {/* Eyebrow + Headline — above the hand */}
              <div style={{
                position:"absolute",
                top:0,left:0,right:0,
                zIndex:25,
                padding:"0 4px",
              }}>
                <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:10}}>
                  <div style={{width:28,height:2,background:"linear-gradient(90deg,#60a5fa,#38bdf8)",borderRadius:2}}/>
                  <span style={{color:"#60a5fa",fontSize:11,letterSpacing:"0.16em",textTransform:"uppercase",fontWeight:600}}>
                    About Our Company
                  </span>
                </div>
                <h2 style={{color:"white",fontSize:38,fontWeight:900,lineHeight:1.1,margin:0,letterSpacing:"-0.02em"}}>
                  Built on
                  <span style={{background:"linear-gradient(90deg,#60a5fa,#38bdf8,#22d3ee)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}>
                    Experience.
                  </span>
                </h2>
                <div className="animated-line"></div>
                <p style={{color:"rgba(255,255,255,0.5)",fontSize:13,marginTop:10,lineHeight:1.75,maxWidth:360}}>
                  With 15+ years in the industry, we deliver residential, commercial,
                  and industrial projects with unmatched precision and trust.
                </p>
                <div className="cta-container" style={{marginTop:18,display:'flex',gap:12}}>
                  <button className="cta-btn" onClick={() => navigate('/projects')}>View Projects</button>
                  <button className="cta-btn cta-alt" onClick={() => navigate('/contact')}>Get Connect</button>
                </div>
              </div>

              {/* Radial glow — sits behind card, in front of bg */}
              <div style={{
                position:"absolute",
                top:"5%", left:"5%",
                width:320, height:320,
                background:"radial-gradient(circle,rgba(96,165,250,0.13) 0%,transparent 70%)",
                pointerEvents:"none",
                zIndex:3,
              }}/>

              {/*
              ══════════════════════════════════════════
              CARD  (z-index 20 → in front of hand)
              ══════════════════════════════════════════
              */}
              <div className="card-wrap">
                <div className="glass-outer">
                  <div className="glass-inner">

                    {/* Row 1: avatar + name + follow */}
                    <div style={{display:"flex",alignItems:"flex-start",gap:12}}>
                      <div style={{
                        width:52,height:52,borderRadius:"50%",flexShrink:0,
                        overflow:"hidden",
                        display:"flex",alignItems:"center",justifyContent:"center",
                        boxShadow:"0 0 20px rgba(249,115,22,0.55)",
                        border:"2px solid rgba(255,255,255,0.2)",
                      }}>
                        <img
                          src="https://www.arvishconsulting.com/assets/arvish-logo-zo8liOBq.png"
                          alt="Arvish logo"
                          style={{ width: "100%", height: "100%", objectFit: "cover" }}
                        />
                      </div>

                      <div style={{flex:1,minWidth:0}}>
                        <div style={{display:"flex",alignItems:"center",gap:5,flexWrap:"wrap"}}>
                          <span style={{color:"white",fontWeight:700,fontSize:14,fontFamily:"Syne,sans-serif"}}>Arvish Constructions</span>
                          <span style={{fontSize:11,color:"#34d399"}}>✓</span>
                          <span style={{fontSize:10,color:"rgba(255,255,255,0.25)"}}>⬛</span>
                        </div>
                        
                      </div>

                      <button className="follow-btn" onClick={() => window.open('https://www.facebook.com/', '_blank')}>Follow</button>
                    </div>

                    <div className="card-divider"/>

                    {/* Headline */}
                    <p style={{color:"white",fontWeight:700,fontSize:14,lineHeight:1.5,margin:0,fontFamily:"Syne,sans-serif"}}>
                      Built on Experience.<br/>Driven by Quality.
                    </p>

                    <p style={{color:"#60a5fa",fontSize:11,marginTop:8,marginBottom:3}}>
                      https://www.arvishconsulting.com/{" "}
                      <span style={{color:"rgba(255,255,255,0.35)"}}>· | Building @Arvish</span>
                    </p>
                    <p style={{color:"rgba(255,255,255,0.42)",fontSize:11,margin:0}}>
                      (15+ yrs) ← Get Started Free
                    </p>
                    <p style={{color:"rgba(255,255,255,0.26)",fontSize:10,marginTop:3}}>
                      Construction &nbsp;&nbsp; https://www.arvishconsulting.com/
                    </p>

                    <div className="card-divider"/>

                    {/* Stats */}
                    <div style={{display:"flex",alignItems:"center"}}>
                      <div style={{flex:1}}>
                        <p style={{color:"white",fontWeight:700,fontSize:18,margin:0,fontFamily:"Syne,sans-serif"}}>1600+</p>
                        <p style={{color:"rgba(255,255,255,0.32)",fontSize:10,margin:0}}>Projects · p.1600</p>
                      </div>
                      <div style={{width:1,height:36,background:"rgba(255,255,255,0.13)",alignSelf:"center"}}/>
                      <div style={{flex:1,paddingLeft:16}}>
                        <p style={{color:"white",fontWeight:700,fontSize:18,margin:0,fontFamily:"Syne,sans-serif"}}>98%</p>
                        <p style={{color:"rgba(255,255,255,0.32)",fontSize:10,margin:0}}>Success Rate · 2009</p>
                      </div>
                    </div>

                  </div>
                </div>
              </div>

              {/*
              ══════════════════════════════════════════
              HAND IMAGE  (z-index 5 → behind card)

              KEY POSITIONING LOGIC:
              • bottom: -60px  → wrist crops off at bottom (natural)
              • left: 50%  → centered in the scene
              • translateX(-30%) → shifts right so hand aligns right-side
              • width: 520px → big enough that the palm fills the scene

              The card (top:10px, translateX(-68%)) lands right
              where the fingers are — visually "in the hand".

              If hand.png already faces correct direction, no transform needed.
              Toggle scaleX(-1) on/off to match your specific hand.png.
              ══════════════════════════════════════════
              */}
              <img
                src="/hand.png"
                alt=""
                className="hand-img"
              />

              {/* Sparkle accent */}
              <div className="sparkle" style={{
                position:"absolute",
                bottom:24,right:16,
                color:"rgba(255,255,255,0.65)",
                fontSize:22,
                textShadow:"0 0 14px rgba(255,255,255,0.8)",
                zIndex:30,
              }}>✦</div>

            </div>
          </div>

        </div>
      </section>
    </>
  );
}