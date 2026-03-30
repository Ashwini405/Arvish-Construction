import { useEffect, useRef, useState, useCallback } from "react";

/* ─── SVG Construction Illustrations ─────────────────────────────── */

const SkyscraperSVG = () => (
  <svg viewBox="0 0 340 500" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="sky1" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#0a1628"/>
        <stop offset="100%" stopColor="#0d2240"/>
      </linearGradient>
      <linearGradient id="bldg1" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#1a2d4a"/>
        <stop offset="100%" stopColor="#243554"/>
      </linearGradient>
    </defs>
    <rect width="340" height="500" fill="url(#sky1)"/>
    {[[30,40],[80,25],[140,55],[200,30],[270,45],[310,20],[60,90],[250,80],[180,15]].map(([x,y],i)=>(
      <circle key={i} cx={x} cy={y} r="1.2" fill="#fff" opacity="0.5">
        <animate attributeName="opacity" values="0.5;1;0.5" dur={`${1.5+i*0.3}s`} repeatCount="indefinite"/>
      </circle>
    ))}
    <g>
      <animateTransform attributeName="transform" type="rotate" from="-4 200 60" to="4 200 60" dur="4s" repeatCount="indefinite" additive="sum" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1" keyTimes="0;0.5;1"/>
      <line x1="200" y1="40" x2="200" y2="180" stroke="#D4A13A" strokeWidth="4" strokeLinecap="round"/>
      <line x1="100" y1="60" x2="290" y2="60" stroke="#D4A13A" strokeWidth="3.5" strokeLinecap="round"/>
      <rect x="96" y="54" width="26" height="14" rx="3" fill="#c49032"/>
      <line x1="270" y1="60" x2="270" y2="95" stroke="#fff" strokeWidth="1" strokeOpacity="0.5"/>
      <rect x="260" y="95" width="20" height="14" rx="3" fill="#D4A13A" opacity="0.85">
        <animate attributeName="y" values="95;88;95" dur="4s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1" keyTimes="0;0.5;1"/>
      </rect>
    </g>
    {[460,430,400,370,340,310,280,250,220,195,170,148,128,110].map((y,i)=>(
      <g key={i}>
        <rect x="80" y={y} width="180" height="25" rx="2" fill="url(#bldg1)" stroke="#D4A13A" strokeWidth="0.5" strokeOpacity="0.4"/>
        {[98,120,142,164,186,208,230].map((wx,wi)=>(
          <rect key={wi} x={wx} y={y+5} width="10" height="13" rx="1"
            fill={i < 6 ? "#D4A13A" : "#1e3a5f"}
            opacity={i < 6 ? "0.7" : "0.5"}>
            {i < 4 && <animate attributeName="opacity" values="0.7;0.3;0.7" dur={`${1.2+wi*0.4}s`} repeatCount="indefinite"/>}
          </rect>
        ))}
      </g>
    ))}
    <g stroke="#D4A13A" strokeWidth="1" strokeOpacity="0.3" fill="none">
      {[108,128,148].map(y=>(<line key={y} x1="260" y1={y} x2="290" y2={y}/>))}
      <line x1="260" y1="108" x2="260" y2="165"/>
      <line x1="275" y1="108" x2="275" y2="165"/>
      <line x1="290" y1="108" x2="290" y2="165"/>
    </g>
    <rect x="0" y="472" width="340" height="28" fill="#0a1220"/>
    <rect x="196" y="175" width="8" height="305" fill="#D4A13A" opacity="0.3"/>
  </svg>
);

const BlueprintSVG = () => (
  <svg viewBox="0 0 300 220" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
    <rect width="300" height="220" fill="#0d1f3c"/>
    {Array.from({length:14}).map((_,i)=>(
      <line key={`v${i}`} x1={i*22} y1="0" x2={i*22} y2="220" stroke="#1a3a6b" strokeWidth="0.5"/>
    ))}
    {Array.from({length:11}).map((_,i)=>(
      <line key={`h${i}`} x1="0" y1={i*22} x2="300" y2={i*22} stroke="#1a3a6b" strokeWidth="0.5"/>
    ))}
    <rect x="30" y="30" width="240" height="160" rx="2" fill="none" stroke="#4a9fff" strokeWidth="1.5" strokeDasharray="800" strokeDashoffset="800">
      <animate attributeName="stroke-dashoffset" from="800" to="0" dur="2.5s" fill="freeze"/>
    </rect>
    <line x1="150" y1="30" x2="150" y2="130" stroke="#4a9fff" strokeWidth="1" strokeDasharray="200" strokeDashoffset="200">
      <animate attributeName="stroke-dashoffset" from="200" to="0" dur="1s" begin="2s" fill="freeze"/>
    </line>
    <line x1="30" y1="130" x2="240" y2="130" stroke="#4a9fff" strokeWidth="1" strokeDasharray="210" strokeDashoffset="210">
      <animate attributeName="stroke-dashoffset" from="210" to="0" dur="1s" begin="2.5s" fill="freeze"/>
    </line>
    <line x1="90" y1="130" x2="90" y2="190" stroke="#4a9fff" strokeWidth="1" strokeDasharray="60" strokeDashoffset="60">
      <animate attributeName="stroke-dashoffset" from="60" to="0" dur="0.6s" begin="3s" fill="freeze"/>
    </line>
    <path d="M150 30 Q168 30 168 48" fill="none" stroke="#D4A13A" strokeWidth="1" opacity="0" strokeDasharray="26" strokeDashoffset="26">
      <animate attributeName="opacity" from="0" to="1" dur="0.1s" begin="3.2s" fill="freeze"/>
      <animate attributeName="stroke-dashoffset" from="26" to="0" dur="0.5s" begin="3.2s" fill="freeze"/>
    </path>
    <line x1="150" y1="30" x2="150" y2="48" stroke="#D4A13A" strokeWidth="1" opacity="0">
      <animate attributeName="opacity" from="0" to="1" dur="0.1s" begin="3.2s" fill="freeze"/>
    </line>
    <g stroke="#D4A13A" strokeWidth="0.6" opacity="0.7">
      <line x1="30" y1="18" x2="270" y2="18"/>
      <line x1="30" y1="14" x2="30" y2="22"/>
      <line x1="270" y1="14" x2="270" y2="22"/>
      <text x="150" y="13" textAnchor="middle" fill="#D4A13A" fontSize="8" fontFamily="monospace">24.0 m</text>
    </g>
    <g stroke="#D4A13A" strokeWidth="0.6" opacity="0.7">
      <line x1="18" y1="30" x2="18" y2="190"/>
      <line x1="14" y1="30" x2="22" y2="30"/>
      <line x1="14" y1="190" x2="22" y2="190"/>
      <text x="8" y="110" textAnchor="middle" fill="#D4A13A" fontSize="8" fontFamily="monospace" transform="rotate(-90,8,110)">16.0 m</text>
    </g>
    <text x="90" y="88" textAnchor="middle" fill="#4a9fff" fontSize="9" fontFamily="monospace" opacity="0">
      <animate attributeName="opacity" from="0" to="0.8" dur="0.4s" begin="3.5s" fill="freeze"/>
      LIVING
    </text>
    <text x="210" y="88" textAnchor="middle" fill="#4a9fff" fontSize="9" fontFamily="monospace" opacity="0">
      <animate attributeName="opacity" from="0" to="0.8" dur="0.4s" begin="3.7s" fill="freeze"/>
      MASTER
    </text>
    <text x="60" y="165" textAnchor="middle" fill="#4a9fff" fontSize="8" fontFamily="monospace" opacity="0">
      <animate attributeName="opacity" from="0" to="0.8" dur="0.4s" begin="3.9s" fill="freeze"/>
      KITCHEN
    </text>
    <text x="210" y="165" textAnchor="middle" fill="#4a9fff" fontSize="8" fontFamily="monospace" opacity="0">
      <animate attributeName="opacity" from="0" to="0.8" dur="0.4s" begin="4.1s" fill="freeze"/>
      BED 2
    </text>
    <g transform="translate(268,200)" fill="none" stroke="#D4A13A" strokeWidth="1" opacity="0.7">
      <circle r="9" strokeWidth="0.5"/>
      <polygon points="0,-9 2,-4 0,-6 -2,-4" fill="#D4A13A"/>
      <polygon points="0,9 2,4 0,6 -2,4" fill="#D4A13A" opacity="0.4"/>
      <text y="1.5" textAnchor="middle" fill="#D4A13A" fontSize="5" fontFamily="monospace" stroke="none">N</text>
    </g>
  </svg>
);

const FoundationSVG = () => (
  <svg viewBox="0 0 300 220" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="soil1" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#3a2410"/>
        <stop offset="100%" stopColor="#1e1208"/>
      </linearGradient>
      <linearGradient id="conc1" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#5a5a5a"/>
        <stop offset="100%" stopColor="#3a3a3a"/>
      </linearGradient>
    </defs>
    <rect width="300" height="220" fill="#141414"/>
    <rect x="0" y="110" width="300" height="110" fill="url(#soil1)"/>
    {[[40,125],[80,140],[120,130],[160,145],[200,135],[240,128],[60,158],[140,162],[220,155]].map(([x,y],i)=>(
      <ellipse key={i} cx={x} cy={y} rx="5" ry="2" fill="#5a3820" opacity="0.4"/>
    ))}
    <rect x="40" y="100" width="220" height="10" fill="#2a2a2a"/>
    <rect x="50" y="160" width="200" height="0" fill="url(#conc1)" rx="2">
      <animate attributeName="height" from="0" to="50" dur="1.5s" begin="0.5s" fill="freeze"/>
      <animate attributeName="y" from="160" to="110" dur="1.5s" begin="0.5s" fill="freeze"/>
    </rect>
    <g stroke="#D4A13A" strokeWidth="1.5" opacity="0">
      <animate attributeName="opacity" from="0" to="0.6" dur="0.5s" begin="1.8s" fill="freeze"/>
      {[130,145,160].map(y=>(<line key={y} x1="55" y1={y} x2="245" y2={y}/>))}
      {[80,105,130,155,180,205,230].map(x=>(<line key={x} x1={x} y1="110" x2={x} y2="160"/>))}
    </g>
    {[[80,130],[105,130],[130,130],[155,130],[180,130],[205,130],[230,130],
      [80,145],[105,145],[130,145],[155,145],[180,145],[205,145],[230,145]].map(([x,y],i)=>(
      <circle key={i} cx={x} cy={y} r="2" fill="#D4A13A" opacity="0">
        <animate attributeName="opacity" from="0" to="0.9" dur="0.3s" begin={`${2.1+i*0.05}s`} fill="freeze"/>
      </circle>
    ))}
    <g opacity="0">
      <animate attributeName="opacity" from="0" to="1" dur="0.1s" begin="0.3s" fill="freeze"/>
      <rect x="130" y="60" width="40" height="50" fill="#4a4a4a" opacity="0.7"/>
      <rect x="148" y="95" width="4" height="20" fill="#808080" opacity="0.8">
        <animate attributeName="height" values="20;15;20;18;20" dur="0.8s" repeatCount="3"/>
      </rect>
    </g>
    <g stroke="#4a9fff" strokeWidth="0.8" opacity="0.6">
      <line x1="30" y1="100" x2="30" y2="160"/>
      <line x1="26" y1="100" x2="34" y2="100"/>
      <line x1="26" y1="160" x2="34" y2="160"/>
      <text x="22" y="134" textAnchor="middle" fill="#4a9fff" fontSize="7" fontFamily="monospace" transform="rotate(-90,22,134)">1.2 m</text>
    </g>
    <text x="150" y="200" textAnchor="middle" fill="#555" fontSize="8" fontFamily="monospace">REINFORCED FOUNDATION</text>
  </svg>
);

/* ─── Main Component ──────────────────────────────────────────────── */
export default function HeroProjects() {
  const [phase, setPhase] = useState("hero");
  const [line1, setLine1] = useState(false);
  const [line2, setLine2] = useState(false);
  const [sub, setSub] = useState(false);
  const [visibleCards, setVisibleCards] = useState([]);
  const timerRef = useRef(null);

  const clearAll = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
  };

  const runHero = useCallback(() => {
    setPhase("hero");
    setLine1(false); setLine2(false); setSub(false); setVisibleCards([]);
    setTimeout(() => setLine1(true), 80);
    setTimeout(() => setLine2(true), 480);
    setTimeout(() => setSub(true), 860);
  }, []);

  const runCards = useCallback(() => {
    setPhase("cards");
    setVisibleCards([]);
    setTimeout(() => setVisibleCards([0]), 80);
    setTimeout(() => setVisibleCards([0,1]), 340);
    setTimeout(() => setVisibleCards([0,1,2]), 600);
  }, []);

  useEffect(() => {
    runHero();

    const tick = () => {
      // Hero → Cards after 3s
      timerRef.current = setTimeout(() => {
        runCards();
        // Cards → Hero after 4s
        timerRef.current = setTimeout(() => {
          runHero();
          // Loop
          timerRef.current = setTimeout(tick, 3000);
        }, 4000);
      }, 3000);
    };

    timerRef.current = setTimeout(tick, 3000);
    return clearAll;
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@800;900&family=Barlow:wght@400;500;600&display=swap');
        *,*::before,*::after{box-sizing:border-box;margin:0;padding:0}

        .hs-root{
          position:relative;width:100%;height:100vh;min-height:600px;
          overflow:hidden;font-family:'Barlow',sans-serif;background:#060e1a;
        }
        .hs-bg{
          position:absolute;inset:0;z-index:0;
          background:
            radial-gradient(ellipse 70% 60% at 18% 82%,#0d2240 0%,transparent 70%),
            radial-gradient(ellipse 55% 50% at 82% 18%,#1a0d00 0%,transparent 65%),
            #060e1a;
        }
        .hs-grid{
          position:absolute;inset:0;z-index:0;
          background-image:radial-gradient(circle,rgba(212,161,58,0.07) 1px,transparent 1px);
          background-size:40px 40px;
          animation:gridDrift 22s linear infinite;
        }
        @keyframes gridDrift{from{background-position:0 0}to{background-position:40px 40px}}

        .hs-label{
          position:absolute;top:28px;left:38px;z-index:10;
          display:flex;align-items:center;gap:10px;
          animation:fadeUp .6s ease .3s both;
        }
        .hs-label-line{width:28px;height:2px;background:#D4A13A}
        .hs-label-text{font-size:11px;font-weight:600;letter-spacing:.22em;text-transform:uppercase;color:#D4A13A}

        /* Phases */
        .hs-phase{
          position:absolute;inset:0;z-index:2;
          transition:opacity .65s cubic-bezier(.16,1,.3,1),transform .65s cubic-bezier(.16,1,.3,1);
        }
        .hs-phase.hero-phase{
          display:flex;flex-direction:column;
          align-items:flex-end;justify-content:center;
          padding-right:7vw;
        }
        .hs-phase.cards-phase{
          display:flex;align-items:center;justify-content:center;
          padding:58px 4vw 48px;
          background:rgba(6,14,26,.8);
          backdrop-filter:blur(5px);-webkit-backdrop-filter:blur(5px);
        }
        .hs-phase.hide{opacity:0;pointer-events:none}
        .hero-phase.hide{transform:translateY(-20px)}
        .cards-phase.hide{transform:translateY(20px)}

        /* Hero text */
        .line-clip{overflow:hidden;display:block;line-height:1}
        .hero-line{
          display:block;
          font-family:'Barlow Condensed',sans-serif;font-weight:900;
          font-size:clamp(64px,9.2vw,132px);letter-spacing:-.01em;color:#fff;
          transform:translateY(108%);opacity:0;
          transition:transform .88s cubic-bezier(.16,1,.3,1),opacity .88s cubic-bezier(.16,1,.3,1);
          will-change:transform,opacity;
        }
        .hero-line.in{transform:translateY(0);opacity:1}
        .hero-gold{color:#D4A13A}
        .hero-sub{
          margin-top:16px;font-size:11px;font-weight:500;
          letter-spacing:.22em;text-transform:uppercase;color:rgba(255,255,255,.32);
          opacity:0;transform:translateY(8px);
          transition:opacity .6s ease .1s,transform .6s ease .1s;
        }
        .hero-sub.in{opacity:1;transform:translateY(0)}

        /* Bento */
        .bento-grid{
          display:grid;
          grid-template-columns:1.4fr 1fr;
          grid-template-rows:1fr 1fr;
          gap:13px;
          width:100%;max-width:1050px;
          height:min(76vh,610px);
        }
        .bento-large{grid-row:1/3}

        .bento-card{
          position:relative;border-radius:16px;overflow:hidden;cursor:pointer;
          transform:scale(.78);opacity:0;
          border:1px solid rgba(212,161,58,.1);
          transition:transform .7s cubic-bezier(.16,1,.3,1),opacity .7s cubic-bezier(.16,1,.3,1),box-shadow .3s ease;
        }
        .bento-card.pop{transform:scale(1);opacity:1}
        .bento-card:hover{
          box-shadow:0 0 0 1.5px rgba(212,161,58,.5),0 22px 55px rgba(0,0,0,.7);
          transform:scale(1.022)!important;
        }
        .bento-svg-wrap{width:100%;height:100%;transition:transform .7s cubic-bezier(.16,1,.3,1)}
        .bento-card:hover .bento-svg-wrap{transform:scale(1.04)}
        .bento-grad{
          position:absolute;inset:0;
          background:linear-gradient(to top,rgba(6,14,26,.88) 0%,rgba(6,14,26,0) 52%);
        }
        .bento-label{position:absolute;bottom:18px;left:20px}
        .bento-cat{font-size:10px;font-weight:700;letter-spacing:.2em;text-transform:uppercase;color:#D4A13A;margin-bottom:3px}
        .bento-name{font-family:'Barlow Condensed',sans-serif;font-weight:700;color:#fff;font-size:clamp(18px,2vw,25px);line-height:1.1}
        .bento-card::after{
          content:'';position:absolute;top:0;right:0;
          width:0;height:0;border-style:solid;
          border-width:0 26px 26px 0;border-color:transparent #D4A13A transparent transparent;
          opacity:0;transition:opacity .22s;border-radius:0 16px 0 0;
        }
        .bento-card:hover::after{opacity:1}

        /* Progress dots */
        .hs-dots{
          position:absolute;bottom:24px;left:50%;transform:translateX(-50%);
          z-index:10;display:flex;gap:8px;
        }
        .hs-dot{
          width:7px;height:7px;border-radius:50%;
          background:rgba(255,255,255,.18);
          transition:all .4s ease;
        }
        .hs-dot.on{width:24px;border-radius:4px;background:#D4A13A}

        @keyframes fadeUp{from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:translateY(0)}}

        @media(max-width:680px){
          .bento-grid{grid-template-columns:1fr;grid-template-rows:240px 170px 170px;height:auto}
          .bento-large{grid-row:auto}
          .hs-phase.cards-phase{padding:58px 3vw 60px;overflow-y:auto}
        }
      `}</style>

      <div className="hs-root">
        <div className="hs-bg"/>
        <div className="hs-grid"/>

        <div className="hs-label">
          <div className="hs-label-line"/>
          <span className="hs-label-text">Our Projects</span>
        </div>

        {/* Phase 1 — Hero */}
        <div className={`hs-phase hero-phase${phase!=="hero"?" hide":""}`}>
          <span className="line-clip">
            <span className={`hero-line${line1?" in":""}`}>BUILD THE</span>
          </span>
          <span className="line-clip">
            <span className={`hero-line${line2?" in":""}`}>
              <span className="hero-gold">FUTURE</span>
            </span>
          </span>
          <p className={`hero-sub${sub?" in":""}`}>
            Award-winning construction across the Middle East
          </p>
        </div>

        {/* Phase 2 — Cards */}
        <div className={`hs-phase cards-phase${phase!=="cards"?" hide":""}`}>
          <div className="bento-grid">

            <div className={`bento-card bento-large${visibleCards.includes(0)?" pop":""}`}>
              <div className="bento-svg-wrap">{phase==="cards" && <SkyscraperSVG/>}</div>
              <div className="bento-grad"/>
              <div className="bento-label">
                <div className="bento-cat">Commercial</div>
                <div className="bento-name">Sky Tower Complex</div>
              </div>
            </div>

            <div className={`bento-card${visibleCards.includes(1)?" pop":""}`}>
              <div className="bento-svg-wrap">{phase==="cards" && <BlueprintSVG/>}</div>
              <div className="bento-grad"/>
              <div className="bento-label">
                <div className="bento-cat">Design</div>
                <div className="bento-name">Alinma Bank HQ</div>
              </div>
            </div>

            <div className={`bento-card${visibleCards.includes(2)?" pop":""}`}>
              <div className="bento-svg-wrap">{phase==="cards" && <FoundationSVG/>}</div>
              <div className="bento-grad"/>
              <div className="bento-label">
                <div className="bento-cat">Infrastructure</div>
                <div className="bento-name">Emirates Logistics</div>
              </div>
            </div>

          </div>
        </div>

        {/* Dots */}
        <div className="hs-dots">
          <div className={`hs-dot${phase==="hero"?" on":""}`}/>
          <div className={`hs-dot${phase==="cards"?" on":""}`}/>
        </div>
      </div>
    </>
  );
}