// import { useEffect, useRef, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";

// /* ─── SVG Construction Illustrations ─────────────────────────────── */

// const SkyscraperSVG = () => (
//   <svg viewBox="0 0 340 500" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
//     <defs>
//       <linearGradient id="sky1" x1="0" y1="0" x2="0" y2="1">
//         <stop offset="0%" stopColor="#0a1628"/>
//         <stop offset="100%" stopColor="#0d2240"/>
//       </linearGradient>
//       <linearGradient id="bldg1" x1="0" y1="0" x2="0" y2="1">
//         <stop offset="0%" stopColor="#1a2d4a"/>
//         <stop offset="100%" stopColor="#243554"/>
//       </linearGradient>
//     </defs>
//     <rect width="340" height="500" fill="url(#sky1)"/>
//     {[[30,40],[80,25],[140,55],[200,30],[270,45],[310,20],[60,90],[250,80],[180,15]].map(([x,y],i)=>(
//       <circle key={i} cx={x} cy={y} r="1.2" fill="#fff" opacity="0.5">
//         <animate attributeName="opacity" values="0.5;1;0.5" dur={`${1.5+i*0.3}s`} repeatCount="indefinite"/>
//       </circle>
//     ))}
//     <g>
//       <animateTransform attributeName="transform" type="rotate" from="-4 200 60" to="4 200 60" dur="4s" repeatCount="indefinite" additive="sum" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1" keyTimes="0;0.5;1"/>
//       <line x1="200" y1="40" x2="200" y2="180" stroke="#D4A13A" strokeWidth="4" strokeLinecap="round"/>
//       <line x1="100" y1="60" x2="290" y2="60" stroke="#D4A13A" strokeWidth="3.5" strokeLinecap="round"/>
//       <rect x="96" y="54" width="26" height="14" rx="3" fill="#c49032"/>
//       <line x1="270" y1="60" x2="270" y2="95" stroke="#fff" strokeWidth="1" strokeOpacity="0.5"/>
//       <rect x="260" y="95" width="20" height="14" rx="3" fill="#D4A13A" opacity="0.85">
//         <animate attributeName="y" values="95;88;95" dur="4s" repeatCount="indefinite" calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1" keyTimes="0;0.5;1"/>
//       </rect>
//     </g>
//     {[460,430,400,370,340,310,280,250,220,195,170,148,128,110].map((y,i)=>(
//       <g key={i}>
//         <rect x="80" y={y} width="180" height="25" rx="2" fill="url(#bldg1)" stroke="#D4A13A" strokeWidth="0.5" strokeOpacity="0.4"/>
//         {[98,120,142,164,186,208,230].map((wx,wi)=>(
//           <rect key={wi} x={wx} y={y+5} width="10" height="13" rx="1"
//             fill={i < 6 ? "#D4A13A" : "#1e3a5f"}
//             opacity={i < 6 ? "0.7" : "0.5"}>
//             {i < 4 && <animate attributeName="opacity" values="0.7;0.3;0.7" dur={`${1.2+wi*0.4}s`} repeatCount="indefinite"/>}
//           </rect>
//         ))}
//       </g>
//     ))}
//     <g stroke="#D4A13A" strokeWidth="1" strokeOpacity="0.3" fill="none">
//       {[108,128,148].map(y=>(<line key={y} x1="260" y1={y} x2="290" y2={y}/>))}
//       <line x1="260" y1="108" x2="260" y2="165"/>
//       <line x1="275" y1="108" x2="275" y2="165"/>
//       <line x1="290" y1="108" x2="290" y2="165"/>
//     </g>
//     <rect x="0" y="472" width="340" height="28" fill="#0a1220"/>
//     <rect x="196" y="175" width="8" height="305" fill="#D4A13A" opacity="0.3"/>
//   </svg>
// );

// const BlueprintSVG = () => (
//   <svg viewBox="0 0 300 220" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
//     <rect width="300" height="220" fill="#0d1f3c"/>
//     {Array.from({length:14}).map((_,i)=>(
//       <line key={`v${i}`} x1={i*22} y1="0" x2={i*22} y2="220" stroke="#1a3a6b" strokeWidth="0.5"/>
//     ))}
//     {Array.from({length:11}).map((_,i)=>(
//       <line key={`h${i}`} x1="0" y1={i*22} x2="300" y2={i*22} stroke="#1a3a6b" strokeWidth="0.5"/>
//     ))}
//     <rect x="30" y="30" width="240" height="160" rx="2" fill="none" stroke="#4a9fff" strokeWidth="1.5" strokeDasharray="800" strokeDashoffset="800">
//       <animate attributeName="stroke-dashoffset" from="800" to="0" dur="2.5s" fill="freeze"/>
//     </rect>
//     <line x1="150" y1="30" x2="150" y2="130" stroke="#4a9fff" strokeWidth="1" strokeDasharray="200" strokeDashoffset="200">
//       <animate attributeName="stroke-dashoffset" from="200" to="0" dur="1s" begin="2s" fill="freeze"/>
//     </line>
//     <line x1="30" y1="130" x2="240" y2="130" stroke="#4a9fff" strokeWidth="1" strokeDasharray="210" strokeDashoffset="210">
//       <animate attributeName="stroke-dashoffset" from="210" to="0" dur="1s" begin="2.5s" fill="freeze"/>
//     </line>
//     <line x1="90" y1="130" x2="90" y2="190" stroke="#4a9fff" strokeWidth="1" strokeDasharray="60" strokeDashoffset="60">
//       <animate attributeName="stroke-dashoffset" from="60" to="0" dur="0.6s" begin="3s" fill="freeze"/>
//     </line>
//     <path d="M150 30 Q168 30 168 48" fill="none" stroke="#D4A13A" strokeWidth="1" opacity="0" strokeDasharray="26" strokeDashoffset="26">
//       <animate attributeName="opacity" from="0" to="1" dur="0.1s" begin="3.2s" fill="freeze"/>
//       <animate attributeName="stroke-dashoffset" from="26" to="0" dur="0.5s" begin="3.2s" fill="freeze"/>
//     </path>
//     <line x1="150" y1="30" x2="150" y2="48" stroke="#D4A13A" strokeWidth="1" opacity="0">
//       <animate attributeName="opacity" from="0" to="1" dur="0.1s" begin="3.2s" fill="freeze"/>
//     </line>
//     <g stroke="#D4A13A" strokeWidth="0.6" opacity="0.7">
//       <line x1="30" y1="18" x2="270" y2="18"/>
//       <line x1="30" y1="14" x2="30" y2="22"/>
//       <line x1="270" y1="14" x2="270" y2="22"/>
//       <text x="150" y="13" textAnchor="middle" fill="#D4A13A" fontSize="8" fontFamily="monospace">24.0 m</text>
//     </g>
//     <g stroke="#D4A13A" strokeWidth="0.6" opacity="0.7">
//       <line x1="18" y1="30" x2="18" y2="190"/>
//       <line x1="14" y1="30" x2="22" y2="30"/>
//       <line x1="14" y1="190" x2="22" y2="190"/>
//       <text x="8" y="110" textAnchor="middle" fill="#D4A13A" fontSize="8" fontFamily="monospace" transform="rotate(-90,8,110)">16.0 m</text>
//     </g>
//     <text x="90" y="88" textAnchor="middle" fill="#4a9fff" fontSize="9" fontFamily="monospace" opacity="0">
//       <animate attributeName="opacity" from="0" to="0.8" dur="0.4s" begin="3.5s" fill="freeze"/>
//       LIVING
//     </text>
//     <text x="210" y="88" textAnchor="middle" fill="#4a9fff" fontSize="9" fontFamily="monospace" opacity="0">
//       <animate attributeName="opacity" from="0" to="0.8" dur="0.4s" begin="3.7s" fill="freeze"/>
//       MASTER
//     </text>
//     <text x="60" y="165" textAnchor="middle" fill="#4a9fff" fontSize="8" fontFamily="monospace" opacity="0">
//       <animate attributeName="opacity" from="0" to="0.8" dur="0.4s" begin="3.9s" fill="freeze"/>
//       KITCHEN
//     </text>
//     <text x="210" y="165" textAnchor="middle" fill="#4a9fff" fontSize="8" fontFamily="monospace" opacity="0">
//       <animate attributeName="opacity" from="0" to="0.8" dur="0.4s" begin="4.1s" fill="freeze"/>
//       BED 2
//     </text>
//     <g transform="translate(268,200)" fill="none" stroke="#D4A13A" strokeWidth="1" opacity="0.7">
//       <circle r="9" strokeWidth="0.5"/>
//       <polygon points="0,-9 2,-4 0,-6 -2,-4" fill="#D4A13A"/>
//       <polygon points="0,9 2,4 0,6 -2,4" fill="#D4A13A" opacity="0.4"/>
//       <text y="1.5" textAnchor="middle" fill="#D4A13A" fontSize="5" fontFamily="monospace" stroke="none">N</text>
//     </g>
//   </svg>
// );

// const FoundationSVG = () => (
//   <svg viewBox="0 0 300 220" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
//     <defs>
//       <linearGradient id="soil1" x1="0" y1="0" x2="0" y2="1">
//         <stop offset="0%" stopColor="#3a2410"/>
//         <stop offset="100%" stopColor="#1e1208"/>
//       </linearGradient>
//       <linearGradient id="conc1" x1="0" y1="0" x2="0" y2="1">
//         <stop offset="0%" stopColor="#5a5a5a"/>
//         <stop offset="100%" stopColor="#3a3a3a"/>
//       </linearGradient>
//     </defs>
//     <rect width="300" height="220" fill="#141414"/>
//     <rect x="0" y="110" width="300" height="110" fill="url(#soil1)"/>
//     {[[40,125],[80,140],[120,130],[160,145],[200,135],[240,128],[60,158],[140,162],[220,155]].map(([x,y],i)=>(
//       <ellipse key={i} cx={x} cy={y} rx="5" ry="2" fill="#5a3820" opacity="0.4"/>
//     ))}
//     <rect x="40" y="100" width="220" height="10" fill="#2a2a2a"/>
//     <rect x="50" y="160" width="200" height="0" fill="url(#conc1)" rx="2">
//       <animate attributeName="height" from="0" to="50" dur="1.5s" begin="0.5s" fill="freeze"/>
//       <animate attributeName="y" from="160" to="110" dur="1.5s" begin="0.5s" fill="freeze"/>
//     </rect>
//     <g stroke="#D4A13A" strokeWidth="1.5" opacity="0">
//       <animate attributeName="opacity" from="0" to="0.6" dur="0.5s" begin="1.8s" fill="freeze"/>
//       {[130,145,160].map(y=>(<line key={y} x1="55" y1={y} x2="245" y2={y}/>))}
//       {[80,105,130,155,180,205,230].map(x=>(<line key={x} x1={x} y1="110" x2={x} y2="160"/>))}
//     </g>
//     {[[80,130],[105,130],[130,130],[155,130],[180,130],[205,130],[230,130],
//       [80,145],[105,145],[130,145],[155,145],[180,145],[205,145],[230,145]].map(([x,y],i)=>(
//       <circle key={i} cx={x} cy={y} r="2" fill="#D4A13A" opacity="0">
//         <animate attributeName="opacity" from="0" to="0.9" dur="0.3s" begin={`${2.1+i*0.05}s`} fill="freeze"/>
//       </circle>
//     ))}
//     <g opacity="0">
//       <animate attributeName="opacity" from="0" to="1" dur="0.1s" begin="0.3s" fill="freeze"/>
//       <rect x="130" y="60" width="40" height="50" fill="#4a4a4a" opacity="0.7"/>
//       <rect x="148" y="95" width="4" height="20" fill="#808080" opacity="0.8">
//         <animate attributeName="height" values="20;15;20;18;20" dur="0.8s" repeatCount="3"/>
//       </rect>
//     </g>
//     <g stroke="#4a9fff" strokeWidth="0.8" opacity="0.6">
//       <line x1="30" y1="100" x2="30" y2="160"/>
//       <line x1="26" y1="100" x2="34" y2="100"/>
//       <line x1="26" y1="160" x2="34" y2="160"/>
//       <text x="22" y="134" textAnchor="middle" fill="#4a9fff" fontSize="7" fontFamily="monospace" transform="rotate(-90,22,134)">1.2 m</text>
//     </g>
//     <text x="150" y="200" textAnchor="middle" fill="#555" fontSize="8" fontFamily="monospace">REINFORCED FOUNDATION</text>
//   </svg>
// );

// /* ─── Main Component ──────────────────────────────────────────────── */
// export default function HeroProjects() {
//   const [visibleCards, setVisibleCards] = useState([]);
//   const timerRef = useRef(null);

//   const clearAll = () => {
//     if (timerRef.current) clearTimeout(timerRef.current);
//   };

//   const runCards = useCallback(() => {
//     setVisibleCards([]);
//     setTimeout(() => setVisibleCards([0]), 80);
//     setTimeout(() => setVisibleCards([0,1]), 340);
//     setTimeout(() => setVisibleCards([0,1,2]), 600);
//   }, []);

//   useEffect(() => {
//     runCards();
//     return clearAll;
//   }, [runCards]);

//   return (
//     <>
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@800;900&family=Barlow:wght@400;500;600&display=swap');
//         *,*::before,*::after{box-sizing:border-box;margin:0;padding:0}

//         .hs-root{
//           position:relative;width:100%;height:100vh;min-height:600px;
//           overflow:hidden;font-family:'Barlow',sans-serif;background:#060e1a;
//         }
//         .hs-bg{
//           position:absolute;inset:0;z-index:0;
//           background:
//             radial-gradient(ellipse 70% 60% at 18% 82%,#0d2240 0%,transparent 70%),
//             radial-gradient(ellipse 55% 50% at 82% 18%,#1a0d00 0%,transparent 65%),
//             #060e1a;
//         }
//         .hs-grid{
//           position:absolute;inset:0;z-index:0;
//           background-image:radial-gradient(circle,rgba(212,161,58,0.07) 1px,transparent 1px);
//           background-size:40px 40px;
//           animation:gridDrift 22s linear infinite;
//         }
//         @keyframes gridDrift{from{background-position:0 0}to{background-position:40px 40px}}

//         .hs-label{
//           position:absolute;top:28px;left:0;right:0;z-index:10;
//           display:flex;justify-content:center;align-items:center;
//           animation:fadeUp .6s ease .3s both;
//           padding:0 20px;
//           text-align:center;
//         }
//         .hs-label-text{font-size:clamp(20px,3vw,32px);font-weight:700;letter-spacing:.18em;text-transform:uppercase;color:#fff;margin:0}

//         /* Phases */
//         .hs-phase{
//           position:absolute;inset:0;z-index:2;
//           transition:opacity .65s cubic-bezier(.16,1,.3,1),transform .65s cubic-bezier(.16,1,.3,1);
//         }
//         .hs-phase.cards-phase{
//           display:flex;align-items:center;justify-content:center;
//           padding:58px 4vw 48px;
//           background:rgba(6,14,26,.8);
//           backdrop-filter:blur(5px);-webkit-backdrop-filter:blur(5px);
//         }

//         /* Bento */
//         .bento-grid{
//           display:grid;
//           grid-template-columns:1.4fr 1fr;
//           grid-template-rows:1fr 1fr;
//           gap:13px;
//           width:100%;max-width:1050px;
//           height:min(76vh,610px);
//         }
//         .bento-large{grid-row:1/3}

//         .bento-card{
//           position:relative;border-radius:16px;overflow:hidden;cursor:pointer;
//           transform:scale(.78);opacity:0;
//           border:1px solid rgba(212,161,58,.1);
//           transition:transform .7s cubic-bezier(.16,1,.3,1),opacity .7s cubic-bezier(.16,1,.3,1),box-shadow .3s ease;
//         }
//         .bento-card.pop{transform:scale(1);opacity:1}
//         .bento-card:hover{
//           box-shadow:0 0 0 1.5px rgba(212,161,58,.5),0 22px 55px rgba(0,0,0,.7);
//           transform:scale(1.022)!important;
//         }
//         .bento-svg-wrap{width:100%;height:100%;transition:transform .7s cubic-bezier(.16,1,.3,1)}
//         .bento-card:hover .bento-svg-wrap{transform:scale(1.04)}
//         .bento-grad{
//           position:absolute;inset:0;
//           background:linear-gradient(to top,rgba(6,14,26,.88) 0%,rgba(6,14,26,0) 52%);
//         }
//         .bento-label{position:absolute;bottom:18px;left:20px}
//         .bento-cat{font-size:10px;font-weight:700;letter-spacing:.2em;text-transform:uppercase;color:#D4A13A;margin-bottom:3px}
//         .bento-name{font-family:'Barlow Condensed',sans-serif;font-weight:700;color:#fff;font-size:clamp(18px,2vw,25px);line-height:1.1}
//         .bento-card::after{
//           content:'';position:absolute;top:0;right:0;
//           width:0;height:0;border-style:solid;
//           border-width:0 26px 26px 0;border-color:transparent #D4A13A transparent transparent;
//           opacity:0;transition:opacity .22s;border-radius:0 16px 0 0;
//         }
//         .bento-card:hover::after{opacity:1}

//         @keyframes fadeUp{from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:translateY(0)}}

//         @media(max-width:680px){
//           .bento-grid{grid-template-columns:1fr;grid-template-rows:240px 170px 170px;height:auto}
//           .bento-large{grid-row:auto}
//           .hs-phase.cards-phase{padding:58px 3vw 60px;overflow-y:auto}
//         }
//       `}</style>

//       <div className="hs-root">
//         <div className="hs-bg"/>
//         <div className="hs-grid"/>

//         <div className="hs-label">
//           <h2 className="hs-label-text">Our Projects</h2>
//           <p style={{color:"#888",fontSize:14,marginTop:8}}>
//             Delivering quality construction across residential, commercial, and infrastructure projects.
//           </p>
//         </div>

//         <div className="hs-phase cards-phase">
//           <div className="bento-grid">

//             <div className={`bento-card bento-large${visibleCards.includes(0)?" pop":""}`}>
//               <div className="bento-svg-wrap"><SkyscraperSVG/></div>
//               <div className="bento-grad"/>
//               <div className="bento-label">
//                 <div className="bento-cat">Commercial</div>
//                 <div className="bento-name">Sky Tower Complex</div>
//               </div>
//             </div>

//             <div className={`bento-card${visibleCards.includes(1)?" pop":""}`}>
//               <div className="bento-svg-wrap"><BlueprintSVG/></div>
//               <div className="bento-grad"/>
//               <div className="bento-label">
//                 <div className="bento-cat">Design</div>
//                 <div className="bento-name">Alinma Bank HQ</div>
//               </div>
//             </div>

//             <div className={`bento-card${visibleCards.includes(2)?" pop":""}`}>
//               <div className="bento-svg-wrap"><FoundationSVG/></div>
//               <div className="bento-grad"/>
//               <div className="bento-label">
//                 <div className="bento-cat">Infrastructure</div>
//                 <div className="bento-name">Emirates Logistics</div>
//               </div>
//             </div>

//           </div>
//         </div>
//       </div>
//     </>
//   );
// }



import { useEffect, useState } from "react";

/* ══════════════════════════════════════════════════════════════════
   SVG 1 — SKYSCRAPER  (light daytime palette — crisp blues & whites)
══════════════════════════════════════════════════════════════════ */
const SkyscraperSVG = () => (
  <svg viewBox="0 0 420 580" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="s-sky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%"   stopColor="#dbeeff"/>
        <stop offset="45%"  stopColor="#eef6ff"/>
        <stop offset="100%" stopColor="#f8fbff"/>
      </linearGradient>
      <linearGradient id="s-tower" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%"   stopColor="#e8eff8"/>
        <stop offset="50%"  stopColor="#d0dcea"/>
        <stop offset="100%" stopColor="#b8c8da"/>
      </linearGradient>
      <linearGradient id="s-side" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%"   stopColor="#9aafc0"/>
        <stop offset="100%" stopColor="#b8cad8"/>
      </linearGradient>
      <linearGradient id="s-glass" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%"   stopColor="#ceeeff" stopOpacity="0.75"/>
        <stop offset="50%"  stopColor="#9ed8f8" stopOpacity="0.5"/>
        <stop offset="100%" stopColor="#6ec0ee" stopOpacity="0.65"/>
      </linearGradient>
      <linearGradient id="s-refl" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%"   stopColor="#ffffff" stopOpacity="0.55"/>
        <stop offset="100%" stopColor="#ffffff" stopOpacity="0.04"/>
      </linearGradient>
      <linearGradient id="s-ground" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%"   stopColor="#d8e4ee"/>
        <stop offset="100%" stopColor="#c4d2de"/>
      </linearGradient>
      <linearGradient id="s-crane" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%"   stopColor="#e8b840"/>
        <stop offset="100%" stopColor="#c09020"/>
      </linearGradient>
      <radialGradient id="s-sun" cx="72%" cy="18%" r="20%">
        <stop offset="0%"   stopColor="#fffbe0" stopOpacity="0.9"/>
        <stop offset="40%"  stopColor="#fff0a0" stopOpacity="0.5"/>
        <stop offset="100%" stopColor="#fff0a0" stopOpacity="0"/>
      </radialGradient>
      <filter id="s-blur"><feGaussianBlur stdDeviation="3"/></filter>
    </defs>

    <rect width="420" height="580" fill="url(#s-sky)"/>
    <rect width="420" height="580" fill="url(#s-sun)"/>

    {/* Clouds */}
    <g opacity="0.75">
      <ellipse cx="320" cy="48" rx="38" ry="12" fill="white" opacity="0.8"/>
      <ellipse cx="348" cy="42" rx="26" ry="16" fill="white" opacity="0.8"/>
      <ellipse cx="298" cy="44" rx="20" ry="10" fill="white" opacity="0.7"/>
      <ellipse cx="70"  cy="70" rx="30" ry="9"  fill="white" opacity="0.6"/>
      <ellipse cx="95"  cy="65" rx="20" ry="12" fill="white" opacity="0.6"/>
    </g>

    {/* Background skyline */}
    <g opacity="0.18" fill="#8aaccc">
      <rect x="0"   y="440" width="45"  height="120"/>
      <rect x="30"  y="410" width="28"  height="150"/>
      <rect x="52"  y="455" width="20"  height="105"/>
      <rect x="340" y="430" width="38"  height="130"/>
      <rect x="368" y="405" width="30"  height="155"/>
      <rect x="390" y="448" width="30"  height="112"/>
    </g>

    {/* Crane */}
    <g>
      <animateTransform attributeName="transform" type="rotate"
        from="-1.5 222 78" to="1.5 222 78" dur="7s"
        repeatCount="indefinite" additive="sum"
        calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1" keyTimes="0;0.5;1"/>
      <rect x="219" y="58"  width="6" height="220" rx="2" fill="url(#s-crane)"/>
      <rect x="118" y="70"  width="216" height="5" rx="2" fill="url(#s-crane)"/>
      <rect x="100" y="70"  width="24" height="5"  rx="2" fill="#c09030" opacity="0.8"/>
      <rect x="212" y="62"  width="18" height="14" rx="2" fill="#e8b840"/>
      <line x1="300" y1="75" x2="300" y2="135" stroke="#c8a040" strokeWidth="1.2" strokeDasharray="3 2"/>
      <rect x="292" y="134" width="16" height="11" rx="2" fill="#b89030">
        <animate attributeName="y" values="134;122;134" dur="7s" repeatCount="indefinite"
          calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1" keyTimes="0;0.5;1"/>
      </rect>
      <circle cx="222" cy="60" r="4" fill="#ff5533">
        <animate attributeName="opacity" values="1;0.2;1" dur="1.3s" repeatCount="indefinite"/>
      </circle>
      <line x1="222" y1="73" x2="300" y2="58" stroke="#c8a030" strokeWidth="0.9" opacity="0.6"/>
      <line x1="222" y1="73" x2="148" y2="58" stroke="#c8a030" strokeWidth="0.9" opacity="0.6"/>
    </g>

    {/* Tower shadow */}
    <ellipse cx="212" cy="535" rx="82" ry="9" fill="#a0b8cc" opacity="0.28" filter="url(#s-blur)"/>

    {/* Tower base plinth */}
    <rect x="106" y="510" width="190" height="30" rx="2" fill="#ccd8e4"/>
    <rect x="110" y="508" width="182" height="7"  rx="1" fill="#dde6f0"/>

    {/* Main tower floors — 22 floors */}
    {Array.from({length:22}).map((_,i)=>{
      const floorY = 508 - (i+1)*14.5;
      const w = 168 - i*1.4;
      const x = 118 + i*0.7;
      return (
        <g key={i}>
          <rect x={x} y={floorY} width={w} height="15" fill="url(#s-tower)"
            stroke="#b8c8da" strokeWidth="0.35" opacity={0.85+i*0.007}/>
          <rect x={x} y={floorY} width={w}  height="15" fill="url(#s-glass)" opacity="0.28"/>
          <rect x={x} y={floorY} width={w*0.16} height="15" fill="url(#s-refl)"/>
        </g>
      );
    })}

    {/* Windows — 22 floors x 9 cols */}
    {Array.from({length:22}).map((_,fi)=>{
      const floorY = 508 - (fi+1)*14.5 + 2.8;
      const baseX = 122 + fi*0.7;
      const totalW = 162 - fi*1.4;
      const colCount = 9;
      const gap = totalW / colCount;
      return Array.from({length:colCount}).map((_,ci)=>{
        const wx = baseX + ci*gap;
        return (
          <rect key={`${fi}-${ci}`} x={wx} y={floorY} width={gap*0.6} height="8.5" rx="0.5"
            fill={fi > 16 || ci%4 !== 2 ? "#cceeff" : "#8aaac0"}
            opacity={fi < 3 ? 0.6 : 0.9}>
            {fi > 18 && ci%2===0 && (
              <animate attributeName="opacity" values="0.85;0.45;0.85"
                dur={`${1.2+ci*0.22+fi*0.1}s`} repeatCount="indefinite"/>
            )}
          </rect>
        );
      });
    })}

    {/* Spire */}
    <polygon points="192,148 212,62 232,148" fill="url(#s-tower)" stroke="#b8ccde" strokeWidth="0.5"/>
    <polygon points="192,148 212,62 217,148" fill="url(#s-side)" opacity="0.45"/>
    <rect x="210" y="58" width="4" height="10" rx="1" fill="#d0dce8"/>
    <circle cx="212" cy="58" r="2.8" fill="#ff6644" opacity="0.9">
      <animate attributeName="opacity" values="0.9;0.25;0.9" dur="2.1s" repeatCount="indefinite"/>
    </circle>

    {/* Mechanical band */}
    <rect x="118" y="260" width="166" height="20" rx="1.5" fill="#b8c8d8" opacity="0.9"/>
    <rect x="118" y="260" width="166" height="6"  rx="1.5" fill="#ccd8e8"/>
    {[130,144,158,172,186,200,214,228,242,256,268].map((x,i)=>(
      <rect key={i} x={x} y="263" width="7" height="14" rx="1" fill="#8ec8e8" opacity="0.7"/>
    ))}

    {/* Tower side face */}
    <polygon points="286,278 318,288 318,510 286,506" fill="url(#s-side)" opacity="0.7"/>
    {Array.from({length:16}).map((_,i)=>(
      <rect key={i} x="291" y={294+i*14} width="18" height="10" rx="0.5"
        fill={i%3===0?"#d0ecff":"#9ab8cc"} opacity="0.75"/>
    ))}

    {/* Scaffold */}
    <g stroke="#c8a830" strokeWidth="0.9" opacity="0.55">
      {[295,310,325,340,355].map(y=>(<line key={y} x1="290" y1={y} x2="316" y2={y}/>))}
      <line x1="290" y1="295" x2="290" y2="358"/>
      <line x1="303" y1="295" x2="303" y2="358"/>
      <line x1="316" y1="295" x2="316" y2="358"/>
      <line x1="290" y1="295" x2="316" y2="325" opacity="0.35"/>
      <line x1="316" y1="295" x2="290" y2="325" opacity="0.35"/>
    </g>

    {/* Ground */}
    <rect x="0" y="524" width="420" height="56" fill="url(#s-ground)"/>
    <rect x="0" y="524" width="420" height="2" fill="#c8d8e8" opacity="0.9"/>
    {[138,162,186,210,234,258,282].map((x,i)=>(
      <rect key={i} x={x} y="530" width="16" height="3" rx="1" fill="white" opacity="0.35"/>
    ))}
    {[62,90,328,356].map((x,i)=>(
      <g key={i}>
        <rect x={x+3} y="505" width="4" height="22" rx="1" fill="#a8b8a0"/>
        <ellipse cx={x+5} cy="503" rx="10" ry="8" fill="#90a880" opacity="0.8"/>
      </g>
    ))}
  </svg>
);

/* ══════════════════════════════════════════════════════════════════
   SVG 2 — BLUEPRINT  (warm ivory/cream — luxe paper feel)
══════════════════════════════════════════════════════════════════ */
const BlueprintSVG = () => (
  <svg viewBox="0 0 380 280" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="bp-bg" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%"   stopColor="#fdfaf4"/>
        <stop offset="50%"  stopColor="#f8f3e8"/>
        <stop offset="100%" stopColor="#f2ece0"/>
      </linearGradient>
      <filter id="bp-lg">
        <feGaussianBlur stdDeviation="0.7" result="b"/>
        <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
      </filter>
    </defs>

    <rect width="380" height="280" fill="url(#bp-bg)"/>

    {Array.from({length:22}).map((_,i)=>(
      <line key={`v${i}`} x1={i*18} y1="0" x2={i*18} y2="280" stroke="#d8c8a8" strokeWidth="0.35" opacity="0.6"/>
    ))}
    {Array.from({length:16}).map((_,i)=>(
      <line key={`h${i}`} x1="0" y1={i*18} x2="380" y2={i*18} stroke="#d8c8a8" strokeWidth="0.35" opacity="0.6"/>
    ))}

    {/* Title block */}
    <rect x="238" y="208" width="128" height="60" rx="1.5" fill="#f0e8d0" stroke="#b8a878" strokeWidth="0.8"/>
    <line x1="238" y1="222" x2="366" y2="222" stroke="#b8a878" strokeWidth="0.6"/>
    <line x1="238" y1="236" x2="366" y2="236" stroke="#b8a878" strokeWidth="0.6"/>
    <line x1="302" y1="222" x2="302" y2="268" stroke="#b8a878" strokeWidth="0.6"/>
    <text x="302" y="218" textAnchor="middle" fill="#6a5a30" fontSize="6.5" fontFamily="'Courier New',monospace" fontWeight="700" letterSpacing="0.5">FLOOR PLAN — L3</text>
    <text x="268" y="231" textAnchor="middle" fill="#8a7240" fontSize="5.5" fontFamily="'Courier New',monospace">SCALE 1:100</text>
    <text x="334" y="231" textAnchor="middle" fill="#8a7240" fontSize="5.5" fontFamily="'Courier New',monospace">REV. 04</text>
    <text x="268" y="245" textAnchor="middle" fill="#a08850" fontSize="5" fontFamily="'Courier New',monospace">BY: A.KHALID</text>
    <text x="334" y="245" textAnchor="middle" fill="#a08850" fontSize="5" fontFamily="'Courier New',monospace">DATE: 2024</text>
    <text x="268" y="258" textAnchor="middle" fill="#a08850" fontSize="5" fontFamily="'Courier New',monospace">CHECK: M.R.</text>
    <text x="334" y="258" textAnchor="middle" fill="#6a9040" fontSize="5" fontFamily="'Courier New',monospace" fontWeight="700">APPROVED</text>

    {/* Outer wall */}
    <g filter="url(#bp-lg)">
      <rect x="26" y="22" width="296" height="178" rx="1.5" fill="none" stroke="#7a6030" strokeWidth="2.2"
        strokeDasharray="1000" strokeDashoffset="1000">
        <animate attributeName="stroke-dashoffset" from="1000" to="0" dur="2.6s" fill="freeze"/>
      </rect>
      <line x1="174" y1="22" x2="174" y2="152" stroke="#7a6030" strokeWidth="1.6"
        strokeDasharray="132" strokeDashoffset="132">
        <animate attributeName="stroke-dashoffset" from="132" to="0" dur="0.9s" begin="2.1s" fill="freeze"/>
      </line>
      <line x1="26" y1="152" x2="322" y2="152" stroke="#7a6030" strokeWidth="1.6"
        strokeDasharray="298" strokeDashoffset="298">
        <animate attributeName="stroke-dashoffset" from="298" to="0" dur="1.1s" begin="2.7s" fill="freeze"/>
      </line>
      <line x1="100" y1="152" x2="100" y2="200" stroke="#7a6030" strokeWidth="1.6"
        strokeDasharray="48" strokeDashoffset="48">
        <animate attributeName="stroke-dashoffset" from="48" to="0" dur="0.4s" begin="3.3s" fill="freeze"/>
      </line>
      <line x1="222" y1="152" x2="222" y2="200" stroke="#7a6030" strokeWidth="1.6"
        strokeDasharray="48" strokeDashoffset="48">
        <animate attributeName="stroke-dashoffset" from="48" to="0" dur="0.4s" begin="3.5s" fill="freeze"/>
      </line>
      <line x1="174" y1="152" x2="174" y2="200" stroke="#a09060" strokeWidth="1"
        strokeDasharray="48" strokeDashoffset="48">
        <animate attributeName="stroke-dashoffset" from="48" to="0" dur="0.4s" begin="3.7s" fill="freeze"/>
      </line>
    </g>

    {/* Door swings */}
    <path d="M174 22 Q194 22 194 42" fill="none" stroke="#7a6030" strokeWidth="1.1" opacity="0"
      strokeDasharray="30" strokeDashoffset="30">
      <animate attributeName="opacity" from="0" to="1" dur="0.1s" begin="3.9s" fill="freeze"/>
      <animate attributeName="stroke-dashoffset" from="30" to="0" dur="0.4s" begin="3.9s" fill="freeze"/>
    </path>
    <path d="M26 152 Q26 172 46 172" fill="none" stroke="#7a6030" strokeWidth="1.1" opacity="0"
      strokeDasharray="28" strokeDashoffset="28">
      <animate attributeName="opacity" from="0" to="1" dur="0.1s" begin="4.1s" fill="freeze"/>
      <animate attributeName="stroke-dashoffset" from="28" to="0" dur="0.4s" begin="4.1s" fill="freeze"/>
    </path>
    <path d="M322 152 Q322 172 302 172" fill="none" stroke="#7a6030" strokeWidth="1.1" opacity="0"
      strokeDasharray="28" strokeDashoffset="28">
      <animate attributeName="opacity" from="0" to="1" dur="0.1s" begin="4.3s" fill="freeze"/>
      <animate attributeName="stroke-dashoffset" from="28" to="0" dur="0.4s" begin="4.3s" fill="freeze"/>
    </path>

    {/* Window markers */}
    {[[56,22,62],[176,22,62],[56,200,62]].map(([x,y,w],i)=>(
      <line key={i} x1={x} y1={y} x2={x+w} y2={y} stroke="#7a9860" strokeWidth="3.5" opacity="0">
        <animate attributeName="opacity" from="0" to="0.7" dur="0.3s" begin={`${4.5+i*0.15}s`} fill="freeze"/>
      </line>
    ))}

    {/* Room fills */}
    <rect x="28"  y="24" width="144" height="126" fill="#e8d8b0" opacity="0">
      <animate attributeName="opacity" from="0" to="0.13" dur="0.4s" begin="4.0s" fill="freeze"/>
    </rect>
    <rect x="176" y="24" width="144" height="126" fill="#b0d8c8" opacity="0">
      <animate attributeName="opacity" from="0" to="0.13" dur="0.4s" begin="4.2s" fill="freeze"/>
    </rect>
    <rect x="28"  y="154" width="70"  height="44" fill="#d8b0c0" opacity="0">
      <animate attributeName="opacity" from="0" to="0.12" dur="0.4s" begin="4.4s" fill="freeze"/>
    </rect>

    {/* Room labels */}
    {[
      ["LIVING ROOM","42 m²", 100, 90, 4.6],
      ["MASTER SUITE","38 m²", 248, 90, 4.8],
      ["KITCHEN",    "18 m²",  62,176, 5.0],
      ["DINING",     "22 m²", 162,176, 5.2],
      ["BATH",        "9 m²", 272,176, 5.4],
    ].map(([lbl,area,x,y,d])=>(
      <g key={lbl} opacity="0">
        <animate attributeName="opacity" from="0" to="1" dur="0.4s" begin={`${d}s`} fill="freeze"/>
        <text x={x} y={y-7} textAnchor="middle" fill="#5a4820" fontSize="8.5"
          fontFamily="'Courier New',monospace" fontWeight="700" letterSpacing="0.8">{lbl}</text>
        <text x={x} y={y+5} textAnchor="middle" fill="#8a7240" fontSize="7"
          fontFamily="'Courier New',monospace">{area}</text>
      </g>
    ))}

    {/* Dimension lines */}
    <g stroke="#9a8050" strokeWidth="0.7" opacity="0.9">
      <line x1="26" y1="11" x2="322" y2="11"/>
      <line x1="26" y1="8"  x2="26"  y2="14"/>
      <line x1="322" y1="8" x2="322" y2="14"/>
      <text x="174" y="9" textAnchor="middle" fill="#6a5030" fontSize="7.5" fontFamily="'Courier New',monospace">29.6 m</text>
    </g>
    <g stroke="#9a8050" strokeWidth="0.7" opacity="0.9">
      <line x1="13" y1="22"  x2="13"  y2="200"/>
      <line x1="10" y1="22"  x2="16"  y2="22"/>
      <line x1="10" y1="200" x2="16"  y2="200"/>
      <text x="6" y="115" textAnchor="middle" fill="#6a5030" fontSize="7.5"
        fontFamily="'Courier New',monospace" transform="rotate(-90,6,115)">17.8 m</text>
    </g>

    {/* Compass */}
    <g transform="translate(200,242)" opacity="0">
      <animate attributeName="opacity" from="0" to="1" dur="0.5s" begin="5.5s" fill="freeze"/>
      <circle r="13" fill="none" stroke="#b8a070" strokeWidth="0.9"/>
      <circle r="13" fill="none" stroke="#8a7040" strokeWidth="0.4" strokeDasharray="4 3"/>
      <polygon points="0,-12 2.5,-5 0,-7 -2.5,-5" fill="#7a6030"/>
      <polygon points="0,12  2.5,5  0,7  -2.5,5" fill="#c8a860" opacity="0.5"/>
      <circle r="2.5" fill="#f8f3e8" stroke="#8a7040" strokeWidth="0.8"/>
      {["N","S","E","W"].map((d,i)=>{
        const [tx,ty]=[[0,-17],[0,20],[17,1],[-15,1]][i];
        return <text key={d} x={tx} y={ty} textAnchor="middle" fill="#6a5030"
          fontSize="6" fontFamily="'Courier New',monospace" fontWeight="700">{d}</text>;
      })}
    </g>

    {/* Corner marks */}
    {[[26,22],[322,22],[26,200],[322,200]].map(([x,y],i)=>(
      <g key={i} opacity="0">
        <animate attributeName="opacity" from="0" to="1" dur="0.2s" begin={`${5+i*0.1}s`} fill="freeze"/>
        <line x1={x-6} y1={y}   x2={x+6} y2={y}   stroke="#7a6030" strokeWidth="1.2"/>
        <line x1={x}   y1={y-6} x2={x}   y2={y+6} stroke="#7a6030" strokeWidth="1.2"/>
      </g>
    ))}

    <text x="80" y="250" fill="#c8a860" fontSize="9" fontFamily="'Courier New',monospace"
      fontWeight="700" letterSpacing="4" opacity="0.28">APPROVED 2024</text>
  </svg>
);

/* ══════════════════════════════════════════════════════════════════
   SVG 3 — FOUNDATION  (clean white/light cross-section)
══════════════════════════════════════════════════════════════════ */
const FoundationSVG = () => (
  <svg viewBox="0 0 380 280" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="f-sky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%"   stopColor="#f4f8fc"/>
        <stop offset="100%" stopColor="#e8f0f8"/>
      </linearGradient>
      <linearGradient id="f-soil1" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%"   stopColor="#dcc898"/>
        <stop offset="100%" stopColor="#c8b07a"/>
      </linearGradient>
      <linearGradient id="f-soil2" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%"   stopColor="#b89860"/>
        <stop offset="100%" stopColor="#a08048"/>
      </linearGradient>
      <linearGradient id="f-soil3" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%"   stopColor="#888070"/>
        <stop offset="100%" stopColor="#706050"/>
      </linearGradient>
      <linearGradient id="f-concrete" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%"   stopColor="#d0d8e0"/>
        <stop offset="40%"  stopColor="#b8c4ce"/>
        <stop offset="100%" stopColor="#a0acb8"/>
      </linearGradient>
      <linearGradient id="f-conctop" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%"   stopColor="#e0e8f0"/>
        <stop offset="100%" stopColor="#ccd4de"/>
      </linearGradient>
      <linearGradient id="f-slab" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%"   stopColor="#e8eef4"/>
        <stop offset="100%" stopColor="#d0d8e4"/>
      </linearGradient>
      <linearGradient id="f-rebar" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%"   stopColor="#b06020"/>
        <stop offset="50%"  stopColor="#e08840"/>
        <stop offset="100%" stopColor="#b06020"/>
      </linearGradient>
      <radialGradient id="f-node" cx="50%" cy="30%" r="60%">
        <stop offset="0%"   stopColor="#f09050"/>
        <stop offset="100%" stopColor="#c06030"/>
      </radialGradient>
      <filter id="f-shadow"><feDropShadow dx="0" dy="2" stdDeviation="2" floodOpacity="0.15"/></filter>
      <filter id="f-glow">
        <feGaussianBlur stdDeviation="0.9" result="b"/>
        <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
      </filter>
      <pattern id="f-hatch" patternUnits="userSpaceOnUse" width="6" height="6" patternTransform="rotate(45)">
        <line x1="0" y1="0" x2="0" y2="6" stroke="#8890a0" strokeWidth="0.7" opacity="0.35"/>
      </pattern>
    </defs>

    <rect width="380" height="280" fill="url(#f-sky)"/>

    {/* Ground surface */}
    <rect x="0" y="82" width="380" height="8"   fill="#b0a070"/>
    <rect x="0" y="82" width="380" height="2.5" fill="#d0c080"/>

    {/* Grass */}
    {[18,45,72,100,275,305,335,360].map((x,i)=>(
      <g key={i}>
        <line x1={x}   y1="82" x2={x-3} y2="74" stroke="#78a04a" strokeWidth="1.6"/>
        <line x1={x+4} y1="82" x2={x+2} y2="73" stroke="#88b050" strokeWidth="1.5"/>
        <line x1={x+8} y1="82" x2={x+7} y2="75" stroke="#78a04a" strokeWidth="1.2"/>
      </g>
    ))}

    {/* Soil strata */}
    <rect x="0" y="90"  width="380" height="40"  fill="url(#f-soil1)"/>
    <rect x="0" y="130" width="380" height="38"  fill="url(#f-soil2)"/>
    <rect x="0" y="168" width="380" height="112" fill="url(#f-soil3)"/>

    {/* Pebbles */}
    {[[32,104,6,3],[78,116,8,4],[124,108,5,3],[168,114,7,3.5],[212,106,6,3],[258,113,8,4],[304,104,5,2.5],[348,110,6,3],
      [48,144,7,3.5],[108,148,6,3],[164,140,9,4.5],[220,144,6,3],[278,138,8,4],[338,142,5,2.5],
      [38,180,10,5],[98,188,8,4],[158,176,7,3.5],[218,183,11,5.5],[278,177,9,4.5],[340,183,6,3]
    ].map(([x,y,rx,ry],i)=>(
      <ellipse key={i} cx={x} cy={y} rx={rx} ry={ry} fill="white" opacity="0.18"/>
    ))}

    {/* Stratum labels */}
    {[["TOPSOIL",100],["CLAY",145],["BEDROCK",190]].map(([lbl,y])=>(
      <text key={lbl} x="358" y={y} textAnchor="end"
        fill="rgba(255,255,255,0.42)" fontSize="7.5" fontFamily="'Courier New',monospace">{lbl}</text>
    ))}

    {/* Foundation body */}
    <rect x="64" y="252" width="252" height="0" fill="url(#f-concrete)" rx="1.5" filter="url(#f-shadow)">
      <animate attributeName="height" from="0" to="134" dur="1.8s" begin="0.4s" fill="freeze"/>
      <animate attributeName="y"      from="252" to="118" dur="1.8s" begin="0.4s" fill="freeze"/>
    </rect>
    <rect x="64" y="252" width="252" height="0" fill="url(#f-hatch)" opacity="0.2" rx="1.5">
      <animate attributeName="height" from="0" to="134" dur="1.8s" begin="0.4s" fill="freeze"/>
      <animate attributeName="y"      from="252" to="118" dur="1.8s" begin="0.4s" fill="freeze"/>
    </rect>

    {/* Top cap */}
    <rect x="58" y="112" width="264" height="14" rx="2" fill="url(#f-conctop)" opacity="0">
      <animate attributeName="opacity" from="0" to="1" dur="0.4s" begin="2s" fill="freeze"/>
    </rect>
    <rect x="58" y="112" width="264" height="4" rx="1.5" fill="#e8f0f8" opacity="0">
      <animate attributeName="opacity" from="0" to="1" dur="0.4s" begin="2s" fill="freeze"/>
    </rect>

    {/* Ground slab */}
    <rect x="44" y="104" width="292" height="12" rx="1.5" fill="url(#f-slab)" opacity="0">
      <animate attributeName="opacity" from="0" to="1" dur="0.4s" begin="2.1s" fill="freeze"/>
    </rect>

    {/* Rebar horizontal */}
    <g filter="url(#f-glow)" opacity="0">
      <animate attributeName="opacity" from="0" to="1" dur="0.5s" begin="2.2s" fill="freeze"/>
      {[146,164,182,200,220,240].map(y=>(
        <rect key={y} x="70" y={y} width="240" height="3.5" rx="1.5" fill="url(#f-rebar)"/>
      ))}
      {[88,116,144,172,200,228,256,288].map(x=>(
        <rect key={x} x={x} y="140" width="3.5" height="112" rx="1.5" fill="url(#f-rebar)" opacity="0.7"/>
      ))}
    </g>

    {/* Rebar nodes */}
    {[88,116,144,172,200,228,256,288].flatMap((x,i)=>
      [146,164,182,200,220,240].map((y,j)=>(
        <circle key={`${i}-${j}`} cx={x+1.75} cy={y+1.75} r="3.5" fill="url(#f-node)" opacity="0">
          <animate attributeName="opacity" from="0" to="1" dur="0.2s"
            begin={`${2.4+(i*6+j)*0.022}s`} fill="freeze"/>
        </circle>
      ))
    )}

    {/* Formwork */}
    <g opacity="0">
      <animate attributeName="opacity" from="0" to="1" dur="0.3s" begin="0.3s" fill="freeze"/>
      <rect x="60"  y="118" width="8" height="134" rx="1.5" fill="#c09858" opacity="0.65"/>
      <rect x="312" y="118" width="8" height="134" rx="1.5" fill="#c09858" opacity="0.65"/>
      {[126,134,142,150,158,166,174,182,190,200,210,220,230,240].map((y,i)=>(
        <g key={i}>
          <line x1="60" y1={y} x2="68" y2={y} stroke="#d8b070" strokeWidth="0.6" opacity="0.55"/>
          <line x1="312" y1={y} x2="320" y2={y} stroke="#d8b070" strokeWidth="0.6" opacity="0.55"/>
        </g>
      ))}
    </g>

    {/* Excavator */}
    <g opacity="0">
      <animate attributeName="opacity" from="0" to="1" dur="0.3s" begin="0.2s" fill="freeze"/>
      <rect x="148" y="44" width="52" height="40" rx="3" fill="#e0b040" opacity="0.88"/>
      <rect x="164" y="32" width="30" height="20" rx="3" fill="#f0c848" opacity="0.95"/>
      <rect x="168" y="35" width="14" height="12" rx="1.5" fill="#b0ddf0" opacity="0.8"/>
      <rect x="190" y="50" width="5" height="30" rx="2" fill="#c8a030" opacity="0.9">
        <animate attributeName="height" values="30;22;30;26;30" dur="1.2s" repeatCount="3"/>
        <animate attributeName="y"      values="50;58;50;54;50" dur="1.2s" repeatCount="3"/>
      </rect>
      <path d="M187 78 L197 78 L200 90 L184 90 Z" fill="#b07828" opacity="0.85"/>
      <rect x="145" y="80" width="62" height="9" rx="4" fill="#906020" opacity="0.9"/>
      <rect x="149" y="81" width="54" height="7" rx="3" fill="#b07828" opacity="0.7"/>
    </g>

    {/* Dimensions */}
    <g opacity="0">
      <animate attributeName="opacity" from="0" to="1" dur="0.4s" begin="2.6s" fill="freeze"/>
      <line x1="36" y1="116" x2="36" y2="252" stroke="#7a7060" strokeWidth="0.9"/>
      <line x1="32" y1="116" x2="40" y2="116" stroke="#7a7060" strokeWidth="0.9"/>
      <line x1="32" y1="252" x2="40" y2="252" stroke="#7a7060" strokeWidth="0.9"/>
      <text x="26" y="188" textAnchor="middle" fill="#6a6050" fontSize="7.5"
        fontFamily="'Courier New',monospace" transform="rotate(-90,26,188)">1.35 m</text>
      <line x1="64" y1="264" x2="316" y2="264" stroke="#7a7060" strokeWidth="0.9"/>
      <line x1="64" y1="260" x2="64"  y2="268" stroke="#7a7060" strokeWidth="0.9"/>
      <line x1="316" y1="260" x2="316" y2="268" stroke="#7a7060" strokeWidth="0.9"/>
      <text x="190" y="275" textAnchor="middle" fill="#6a6050" fontSize="7.5"
        fontFamily="'Courier New',monospace">25.2 m SPAN</text>
    </g>

    <text x="190" y="14" textAnchor="middle" fill="#807060" fontSize="8.5"
      fontFamily="'Courier New',monospace" letterSpacing="2.5" opacity="0.8">
      SECTION A–A · REINFORCED STRIP FOUNDATION
    </text>
    <line x1="26" y1="17" x2="140" y2="17" stroke="#a09060" strokeWidth="0.5" opacity="0.4"/>
    <line x1="240" y1="17" x2="356" y2="17" stroke="#a09060" strokeWidth="0.5" opacity="0.4"/>
  </svg>
);

/* ══════════════════════════════════════════════════════════════════
   Data & Component
══════════════════════════════════════════════════════════════════ */
const stats = [
  { value:"50+", label:"Projects Completed" },
  { value:"5+",   label:"Years Experience"   },
  { value:"25+",  label:"Happy Clients"     },
  { value:"100%", label:"Quality Assurance" },
];

const cards = [
  {
    cat: "Commercial",
    name: "Premium Office Complex",
    
    svg: <SkyscraperSVG />,
    accent: "#c87a20",
  },
  {
    cat: "Residential",
    name: "Luxury Villa Project",
    
    svg: <BlueprintSVG />,
    accent: "#8a6020",
  },
  {
    cat: "Infrastructure",
    name: "Industrial Warehouse",
    
    svg: <FoundationSVG />,
    accent: "#4a7090",
  },
];

export default function HeroProjects() {
  const navigate = useNavigate();
  const [vis, setVis] = useState({ tag:false, h:false, sub:false, stats:false, c:[] });

  useEffect(()=>{
    const t=(fn,ms)=>setTimeout(fn,ms);
    t(()=>setVis(v=>({...v,tag:true})),    80);
    t(()=>setVis(v=>({...v,h:true})),     240);
    t(()=>setVis(v=>({...v,sub:true})),   460);
    t(()=>setVis(v=>({...v,stats:true})), 600);
    t(()=>setVis(v=>({...v,c:[0]})),      380);
    t(()=>setVis(v=>({...v,c:[0,1]})),    580);
    t(()=>setVis(v=>({...v,c:[0,1,2]})), 780);
  },[]);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,800;1,700&family=Syne:wght@400;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap');
        *,*::before,*::after{box-sizing:border-box;margin:0;padding:0}

        .hp{
          width:100%;min-height:100vh;
          font-family:'Syne',sans-serif;
          background:#ffffff;
          overflow:hidden;position:relative;
        }

        .hp-grid{
          position:absolute;inset:0;z-index:0;pointer-events:none;
          background-image:radial-gradient(circle,rgba(0,0,0,0.045) 1px,transparent 1px);
          background-size:30px 30px;
        }
        .hp-wash{
          position:absolute;inset:0;z-index:0;pointer-events:none;
          background:
            radial-gradient(ellipse 52% 48% at 0%   100%,rgba(200,140,50,0.052) 0%,transparent 65%),
            radial-gradient(ellipse 38% 32% at 100% 0%,  rgba(80,130,180,0.038) 0%,transparent 55%);
        }

        /* ── MAIN LAYOUT ── */
        .hp-inner{
          position:relative;z-index:2;
          max-width:1440px;margin:0 auto;
          padding:32px 52px 32px;
          display:grid;
          grid-template-columns:295px 1fr;
          gap:50px;
          min-height:100vh;
          align-items:center;
        }

        /* ── LEFT ── */
        .hp-left{
          display:flex;flex-direction:column;
          justify-content:center;
        }

        .hp-tag{
          display:inline-flex;align-items:center;gap:8px;
          padding:5px 14px 5px 9px;
          border:1px solid rgba(0,0,0,0.1);
          border-radius:100px;
          background:rgba(200,122,32,0.05);
          width:fit-content;margin-bottom:24px;
          opacity:0;transform:translateY(8px);
          transition:opacity .5s ease,transform .5s ease;
        }
        .hp-tag.in{opacity:1;transform:translateY(0)}
        .hp-tag-dot{
          width:7px;height:7px;border-radius:50%;
          background:#c87a20;
          animation:tpulse 2.6s ease infinite;
        }
        @keyframes tpulse{
          0%,100%{box-shadow:0 0 0 0 rgba(200,122,32,.5)}
          50%    {box-shadow:0 0 0 6px rgba(200,122,32,0)}
        }
        .hp-tag-text{
          font-size:10.5px;font-weight:700;
          letter-spacing:.22em;text-transform:uppercase;color:#5a4a30;
        }

        /* Headline */
        .hp-h1{
          font-family:'Playfair Display',serif;
          font-size:clamp(40px,4.4vw,66px);
          line-height:1.03;
          color:#0f0e0d;
          font-weight:800;
        }
        .hp-hl{display:block;overflow:hidden;line-height:1.13}
        .hp-hi{
          display:block;
          transform:translateY(108%);opacity:0;
          transition:transform .92s cubic-bezier(.16,1,.3,1),opacity .7s ease;
        }
        .hp-hi.in{transform:translateY(0);opacity:1}
        .hp-hi.d1{transition-delay:.14s}
        .hp-hi.d2{transition-delay:.28s}
        .hp-em{font-style:italic;color:#c87a20}

        .hp-rule{
          width:40px;height:1.5px;
          background:linear-gradient(to right,#c87a20,rgba(200,122,32,0));
          margin:18px 0 14px;
          opacity:0;transform:scaleX(0);transform-origin:left;
          transition:opacity .6s ease .3s,transform .6s ease .3s;
        }
        .hp-rule.in{opacity:1;transform:scaleX(1)}

        .hp-sub{
          font-size:14px;font-weight:400;line-height:1.78;
          color:#6a6458;max-width:265px;
          margin-bottom:24px;
          opacity:0;transform:translateY(8px);
          transition:opacity .6s ease,transform .6s ease;
        }
        .hp-sub.in{opacity:1;transform:translateY(0)}

        .hp-cta-wrap{
          display:flex;
          flex-direction:column;
          align-items:flex-start;
          gap:12px;
          opacity:0;
          animation:fadeUp .6s ease 1.05s both;
        }
        .hp-cta{
          position:relative;
          isolation:isolate;
          display:inline-flex;align-items:center;gap:12px;
          padding:13px 22px;border:none;border-radius:16px;
          background:linear-gradient(135deg,#0f0e0d 0%,#1f1c18 55%,#111111 100%);
          color:#fff;
          font-family:'Syne',sans-serif;
          font-size:12.5px;font-weight:700;letter-spacing:.06em;
          cursor:pointer;width:fit-content;
          box-shadow:0 10px 28px rgba(0,0,0,.14);
          transition:transform .28s ease,box-shadow .28s ease;
          overflow:hidden;
        }
        .hp-cta::before{
          content:'';
          position:absolute;
          inset:-1px;
          border-radius:inherit;
          padding:1px;
          background:linear-gradient(130deg,rgba(255,255,255,.1),rgba(127,212,232,.65),rgba(255,255,255,.08));
          -webkit-mask:linear-gradient(#fff 0 0) content-box,linear-gradient(#fff 0 0);
          -webkit-mask-composite:xor;
          mask-composite:exclude;
          opacity:.95;
          z-index:-1;
        }
        .hp-cta::after{
          content:'';
          position:absolute;
          top:-35%;
          left:-18%;
          width:46%;
          height:170%;
          background:linear-gradient(90deg,transparent,rgba(255,255,255,.3),transparent);
          transform:rotate(18deg);
          animation:hpCtaSweep 3.4s ease-in-out infinite;
          pointer-events:none;
        }
        .hp-cta:hover{
          transform:translateY(-3px) scale(1.01);
          box-shadow:0 16px 34px rgba(0,0,0,.18);
        }
        .hp-cta-ic{
          width:26px;height:26px;border-radius:50%;
          background:linear-gradient(135deg,rgba(255,255,255,.18),rgba(127,212,232,.3));
          display:flex;align-items:center;justify-content:center;font-size:11px;
          box-shadow:inset 0 1px 0 rgba(255,255,255,.24);
          transition:transform .28s ease,background .28s ease;
        }
        .hp-cta:hover .hp-cta-ic{transform:translateX(3px) rotate(0deg);background:linear-gradient(135deg,rgba(255,255,255,.22),rgba(127,212,232,.45))}

        .hp-cta-meta{
          display:flex;
          align-items:center;
          gap:12px;
          min-width:260px;
        }
        .hp-cta-signal{
          position:relative;
          width:10px;
          height:10px;
          border-radius:50%;
          background:#7fd4e8;
          box-shadow:0 0 0 0 rgba(127,212,232,.42);
          animation:hpSignalPulse 2.2s ease-out infinite;
          flex-shrink:0;
        }
        .hp-cta-track{
          position:relative;
          flex:1;
          height:2px;
          border-radius:999px;
          overflow:hidden;
          background:rgba(0,0,0,.08);
        }
        .hp-cta-track::after{
          content:'';
          position:absolute;
          inset:0;
          width:38%;
          border-radius:inherit;
          background:linear-gradient(90deg,rgba(79,134,198,.12),rgba(79,134,198,.95),rgba(127,212,232,.2));
          animation:hpTrackRun 2.8s cubic-bezier(.65,0,.35,1) infinite;
        }
        .hp-cta-note{
          font-size:10px;
          font-weight:700;
          letter-spacing:.18em;
          text-transform:uppercase;
          color:rgba(0,0,0,.45);
          white-space:nowrap;
        }
        .hp-est{
          margin-top:0;
          font-family:'JetBrains Mono',monospace;
          font-size:9.5px;color:rgba(0,0,0,.34);
          letter-spacing:.18em;
          opacity:.9;
        }
        @keyframes hpCtaSweep{
          0%,12%{transform:translateX(-140%) rotate(18deg);opacity:0}
          24%{opacity:1}
          52%{transform:translateX(320%) rotate(18deg);opacity:.85}
          100%{transform:translateX(320%) rotate(18deg);opacity:0}
        }
        @keyframes hpSignalPulse{
          0%{box-shadow:0 0 0 0 rgba(127,212,232,.45)}
          70%{box-shadow:0 0 0 10px rgba(127,212,232,0)}
          100%{box-shadow:0 0 0 0 rgba(127,212,232,0)}
        }
        @keyframes hpTrackRun{
          0%{transform:translateX(-130%)}
          100%{transform:translateX(360%)}
        }

        /* ── RIGHT ── */
        .hp-right{
          display:flex;flex-direction:column;
          gap:12px;
          /* Stretch to fill the grid cell vertically */
          align-self:stretch;
          justify-content:center;
        }

        /* Stats */
        .hp-stats{
          display:grid;grid-template-columns:repeat(4,1fr);
          border:1px solid rgba(0,0,0,0.085);
          border-radius:10px;overflow:hidden;
          background:#ffffff;
          opacity:0;transform:translateY(10px);
          transition:opacity .6s ease,transform .6s ease;
        }
        .hp-stats.in{opacity:1;transform:translateY(0)}
        .hp-stat{
          padding:13px 18px;
          border-right:1px solid rgba(0,0,0,0.07);
          display:flex;flex-direction:column;gap:3px;
        }
        .hp-stat:last-child{border-right:none}
        .hp-sv{
          font-family:'Playfair Display',serif;
          font-size:27px;color:#0f0e0d;
          line-height:1;font-weight:700;
        }
        .hp-sl{
          font-size:9.5px;font-weight:700;
          letter-spacing:.16em;text-transform:uppercase;color:#b0a898;
        }

        /* Bento — fills all remaining height */
        .hp-bento{
          display:grid;
          grid-template-columns:1.48fr 1fr;
          grid-template-rows:1fr 1fr;
          gap:12px;
          flex:1;
          min-height:340px;
          max-height:calc(100vh - 32px - 32px - 62px - 12px - 40px);
        }
        .hp-cl{grid-row:1/3}

        /* Cards */
        .hp-card{
          position:relative;border-radius:14px;overflow:hidden;cursor:pointer;
          border:1px solid rgba(0,0,0,0.08);
          background:#f9f8f6;
          transform:scale(.84) translateY(12px);opacity:0;
          transition:
            transform .76s cubic-bezier(.16,1,.3,1),
            opacity   .76s cubic-bezier(.16,1,.3,1),
            box-shadow .3s ease;
          box-shadow:0 2px 10px rgba(0,0,0,.055);
        }
        .hp-card.pop{transform:scale(1) translateY(0);opacity:1}
        .hp-card:hover{
          box-shadow:0 0 0 1.5px rgba(0,0,0,.1),0 18px 44px rgba(0,0,0,.1);
          transform:scale(1.016) translateY(-2px)!important;
        }
        .hp-svg{
          width:100%;height:100%;
          transition:transform .85s cubic-bezier(.16,1,.3,1);
        }
        .hp-card:hover .hp-svg{transform:scale(1.05)}

        .hp-ov{
          position:absolute;inset:0;pointer-events:none;
          background:linear-gradient(
            to top,
            rgba(255,255,255,.97) 0%,
            rgba(255,255,255,.5)  28%,
            rgba(255,255,255,0)   56%
          );
        }

        .hp-ci{
          position:absolute;bottom:0;left:0;right:0;
          padding:11px 14px 15px;
          display:flex;align-items:flex-end;justify-content:space-between;
        }
        .hp-ccat{
          font-size:9px;font-weight:700;
          letter-spacing:.22em;text-transform:uppercase;
          margin-bottom:4px;
        }
        .hp-cname{
          font-family:'Playfair Display',serif;
          font-size:clamp(14px,1.45vw,19px);
          line-height:1.15;font-weight:700;color:#0f0e0d;
        }

        .hp-cloc{
          position:absolute;top:11px;left:11px;
          padding:4px 12px;border-radius:100px;
          font-family:'JetBrains Mono',monospace;font-size:9px;
          background:rgba(255,255,255,0.84);
          border:1px solid rgba(0,0,0,0.1);
          color:#5a5040;backdrop-filter:blur(4px);
          opacity:0;transform:translateY(-4px);
          transition:opacity .35s ease .5s,transform .35s ease .5s;
        }
        .hp-card.pop .hp-cloc{opacity:1;transform:translateY(0)}

        .hp-carr{
          width:28px;height:28px;border-radius:50%;
          display:flex;align-items:center;justify-content:center;font-size:12px;
          opacity:0;transform:translateX(6px);
          transition:opacity .22s,transform .22s;
          flex-shrink:0;border:1.5px solid;
        }
        .hp-card:hover .hp-carr{opacity:1;transform:translateX(0)}

        @keyframes fadeUp{from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:translateY(0)}}

        /* ── VIEW ALL BUTTON ── */
        .hp-view-all{
          position:relative;
          isolation:isolate;
          display:inline-flex;align-items:center;gap:16px;
          padding:14px 28px 14px 20px;
          border:1px solid rgba(128,0,32,0.2);
          border-radius:6px;
          background:linear-gradient(135deg,#fff5f7 0%,#ffe8ed 100%);
          color:#6a0020;
          font-family:'Syne',sans-serif;
          font-size:11.5px;font-weight:700;letter-spacing:.14em;
          text-transform:uppercase;
          cursor:pointer;
          overflow:hidden;
          opacity:0;
          animation:fadeUp .6s ease 1.2s both;
          transition:border-color .65s ease,box-shadow .65s ease,transform .3s ease,color .65s ease;
        }
        .hp-view-all::before{
          content:'';
          position:absolute;
          inset:0;
          background:linear-gradient(135deg,#4a0010 0%,#800020 45%,#a0002e 100%);
          transform:translateX(-101%);
          transition:transform .75s cubic-bezier(.77,0,.18,1);
          z-index:-1;
        }
        .hp-view-all::after{
          content:'';
          position:absolute;
          left:0;top:0;bottom:0;
          width:3px;
          background:linear-gradient(to bottom,#a0002e,#4a0010);
          border-radius:6px 0 0 6px;
          transition:background .65s ease;
        }
        .hp-view-all:hover::before{transform:translateX(0)}
        .hp-view-all:hover::after{background:rgba(255,255,255,0.25)}
        .hp-view-all:hover{
          color:#ffffff;
          border-color:transparent;
          box-shadow:0 10px 30px rgba(128,0,32,.28);
          transform:translateY(-2px);
        }
        .hp-view-all-text{
          display:flex;flex-direction:column;gap:1px;
        }
        .hp-view-all-sub{
          font-size:8.5px;font-weight:500;
          letter-spacing:.2em;opacity:.45;
          text-transform:uppercase;
          transition:opacity .3s ease;
        }
        .hp-view-all:hover .hp-view-all-sub{opacity:.7}
        .hp-view-all-arrow{
          display:inline-flex;align-items:center;justify-content:center;
          width:28px;height:28px;border-radius:4px;
          border:1px solid rgba(128,0,32,0.2);
          font-size:13px;
          margin-left:auto;
          transition:transform .4s cubic-bezier(.16,1,.3,1),border-color .4s ease,background .4s ease;
        }
        .hp-view-all:hover .hp-view-all-arrow{
          transform:translateX(4px) rotate(45deg);
          border-color:rgba(255,255,255,0.25);
          background:rgba(255,255,255,0.1);
        }

        /* ── RESPONSIVE ── */
        @media(max-width:1024px){
          .hp-inner{
            grid-template-columns:1fr;
            padding:28px 24px 36px;gap:22px;
            min-height:auto;align-items:start;
          }
          .hp-left{max-width:720px}
          .hp-cta-meta{min-width:0;width:100%}
          .hp-bento{
            grid-template-columns:1fr;
            grid-template-rows:275px 188px 188px;
            height:auto;max-height:none;flex:none;
          }
          .hp-cl{grid-row:auto}
          .hp-stats{grid-template-columns:repeat(2,1fr)}
          .hp-stat:nth-child(2){border-right:none}
          .hp-stat:nth-child(1),.hp-stat:nth-child(2){border-bottom:1px solid rgba(0,0,0,.07)}
          .hp-right{align-self:auto}
        }
        @media(max-width:640px){
          .hp{min-height:auto}
          .hp-inner{padding:22px 16px 30px;gap:18px}
          .hp-stats{grid-template-columns:1fr}
          .hp-stat{border-right:none!important;border-bottom:1px solid rgba(0,0,0,.07)}
          .hp-stat:last-child{border-bottom:none}
          .hp-bento{grid-template-rows:240px 170px 170px;gap:10px;min-height:0}
          .hp-ci{padding:10px 12px 13px}
          .hp-cloc{top:10px;left:10px}
          .hp-cta-wrap{width:100%}
          .hp-cta{width:100%;justify-content:center}
          .hp-cta-meta{gap:10px}
          .hp-cta-note{font-size:9px;letter-spacing:.14em}
          .hp-est{font-size:8.5px;letter-spacing:.12em}
        }
      `}</style>

      <div className="hp">
        <div className="hp-grid"/>
        <div className="hp-wash"/>

        <div className="hp-inner">

          {/* LEFT */}
          <div className="hp-left">
            <div className="site-section-heading" style={{ "--section-accent": "#4f86c6", maxWidth: "520px", gap: "12px", marginBottom: "8px" }}>
              <span className="site-section-kicker">Our Projects</span>
              <h1 className="site-section-title" style={{ maxWidth: "10ch" }}>
                Building Spaces That <span className="site-section-accent">Define</span><br />
                the Future.
              </h1>
            </div>

            <p className="site-section-subtitle" style={{ maxWidth: "40ch" }}>
              Delivering high-quality residential, commercial, and infrastructure projects with precision, reliability, and a commitment to excellence.
            </p>

            <button className="hp-view-all" style={{marginTop:"45px"}} onClick={() => navigate('/projects')}>
              <span className="hp-view-all-text">
                <span>View All Projects</span>
                <span className="hp-view-all-sub">50+ Projects Completed</span>
              </span>
              <span className="hp-view-all-arrow">↗</span>
            </button>
          </div>

          {/* RIGHT */}
          <div className="hp-right">
            <div className={`hp-stats${vis.stats?" in":""}`}>
              {stats.map((s,i)=>(
                <div className="hp-stat" key={i}>
                  <span className="hp-sv">{s.value}</span>
                  <span className="hp-sl">{s.label}</span>
                </div>
              ))}
            </div>

            <div className="hp-bento">
              {cards.map((c,i)=>(
                <div key={i}
                  className={`hp-card${i===0?" hp-cl":""}${vis.c.includes(i)?" pop":""}`}>
                  <div className="hp-svg">{c.svg}</div>
                  <div className="hp-ov"/>
                  {i===0 && <div className="hp-cloc">{c.loc}</div>}
                  <div className="hp-ci">
                    <div>
                      <div className="hp-ccat" style={{color:c.accent}}>{c.cat}</div>
                      <div className="hp-cname">{c.name}</div>
                    </div>
                    <div className="hp-carr" style={{borderColor:c.accent+"99",color:c.accent}}>↗</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </>
  );
}