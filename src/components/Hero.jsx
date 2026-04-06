


import { useEffect, useState, useRef } from "react";
import { useNavigate, Link } from "react-router-dom";

const PHASES = [
  { label: "Phase 1", name: "Groundworks", status: "Excavation, piling & podium underway.", hint: "Site prep", icon: "ground", pct: 9 },
  { label: "Phase 2", name: "Superstructure", status: "Core walls and floor plates rising.", hint: "Frame rising", icon: "structure", pct: 36 },
  { label: "Phase 3", name: "Envelope", status: "Facade cladding and glazing applied.", hint: "Facade wrap", icon: "facade", pct: 59 },
  { label: "Phase 4", name: "Interiors", status: "MEP commissioning & fit-out underway.", hint: "Fit-out", icon: "interior", pct: 82 },
  { label: "Phase 5", name: "Delivered", status: "Tower complete and handed over.", hint: "Ready", icon: "delivered", pct: 100 },
];
const DURATIONS = [1400, 1600, 1600, 1600, 2000];

function PhaseIcon({ type, active, done }) {
  const size   = 52;
  const iconScale = active ? 1 : done ? 0.42 : 0.54;
  const boxBg  = active ? "#0A1628" : done ? "rgba(200,146,42,0.08)" : "rgba(10,22,40,0.05)";
  const boxBdr = active ? "#C8922A" : done ? "rgba(200,146,42,0.28)" : "rgba(10,22,40,0.10)";
  const stroke = active ? "#C8922A" : done ? "#C8922A" : "rgba(78,98,120,0.55)";
  const sw     = active ? "1.6" : "1.5";
  const pad    = "18%";

  const wrapStyle = {
    width: size, height: size,
    borderRadius: active ? 12 : 8,
    background: boxBg,
    border: `1px solid ${boxBdr}`,
    display: "flex", alignItems: "center", justifyContent: "center",
    flexShrink: 0,
    transition: "background .35s, border-color .35s, border-radius .35s, box-shadow .35s",
    overflow: "hidden",
    position: "relative",
  };

  const svgStyle = {
    width: "100%", height: "100%",
    padding: pad,
    display: "block",
    transform: `scale(${iconScale})`,
    transformOrigin: "center",
    transition: "transform .45s cubic-bezier(.22,1,.36,1)",
  };

  const icons = {
    ground: (
      <svg viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth={sw}
        strokeLinecap="round" strokeLinejoin="round" style={svgStyle}>
        <line x1="2" y1="19" x2="22" y2="19"/>
        <line x1="6" y1="6" x2="6" y2="14"/>
        <g>
          <line x1="6" y1="14" x2="3.5" y2="11.5" opacity="0.7"/>
          <line x1="6" y1="14" x2="8.5" y2="11.5" opacity="0.7"/>
          {active && (
            <animateTransform attributeName="transform" type="translate"
              values="0,0;0,3;0,0" dur="0.7s" repeatCount="indefinite"
              additive="sum"/>
          )}
        </g>
        <rect x="4.5" y="14" width="3" height="5" rx="0.5">
          {active && (
            <animate attributeName="y" values="14;15;14" dur="0.7s" repeatCount="indefinite"/>
          )}
        </rect>
        <path d="M10.5 6.5h7l-3.5 6.5">
          {active && (
            <animateTransform attributeName="transform" type="rotate"
              values="0,14,10;-5,14,10;0,14,10" dur="2s" repeatCount="indefinite" additive="sum"/>
          )}
        </path>
      </svg>
    ),
    structure: (
      <svg viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth={sw}
        strokeLinecap="round" strokeLinejoin="round" style={svgStyle}>
        <rect x="5" y="4" width="14" height="16" rx="1.5"/>
        <line x1="5" y1="9"  x2="19" y2="9"/>
        <line x1="5" y1="14" x2="19" y2="14"/>
        <rect x="8" y="6"  width="2.5" height="2" rx="0.4" opacity={active?"1":"0.6"}>
          {active && <animate attributeName="opacity" values="0.3;1;0.3" dur="1.6s" repeatCount="indefinite"/>}
        </rect>
        <rect x="13.5" y="6"  width="2.5" height="2" rx="0.4" opacity={active?"1":"0.6"}>
          {active && <animate attributeName="opacity" values="1;0.3;1" dur="1.6s" repeatCount="indefinite"/>}
        </rect>
        <rect x="8" y="11"  width="2.5" height="2" rx="0.4" opacity={active?"1":"0.6"}>
          {active && <animate attributeName="opacity" values="0.5;1;0.5" dur="1.2s" repeatCount="indefinite"/>}
        </rect>
        <rect x="13.5" y="11" width="2.5" height="2" rx="0.4" opacity={active?"1":"0.6"}>
          {active && <animate attributeName="opacity" values="1;0.4;1" dur="1.8s" repeatCount="indefinite"/>}
        </rect>
        {active && (
          <rect x="5" y="3" width="14" height="2" rx="1" fill={stroke} stroke="none" opacity="0.35">
            <animate attributeName="y" values="3;2;3" dur="1.1s" repeatCount="indefinite"/>
            <animate attributeName="opacity" values="0.35;0.7;0.35" dur="1.1s" repeatCount="indefinite"/>
          </rect>
        )}
      </svg>
    ),
    facade: (
      <svg viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth={sw}
        strokeLinecap="round" strokeLinejoin="round" style={svgStyle}>
        <rect x="3" y="3" width="18" height="18" rx="1.5"/>
        <line x1="9"  y1="3" x2="9"  y2="21"/>
        <line x1="15" y1="3" x2="15" y2="21"/>
        <line x1="3" y1="9"  x2="21" y2="9"/>
        <line x1="3" y1="15" x2="21" y2="15"/>
        {active && (
          <>
            <rect x="3" y="3" width="6" height="6" rx="0" fill={stroke} stroke="none" opacity="0">
              <animate attributeName="opacity" values="0;0.12;0" dur="2.4s" begin="0s" repeatCount="indefinite"/>
            </rect>
            <rect x="9" y="3" width="6" height="6" rx="0" fill={stroke} stroke="none" opacity="0">
              <animate attributeName="opacity" values="0;0.12;0" dur="2.4s" begin="0.3s" repeatCount="indefinite"/>
            </rect>
            <rect x="15" y="3" width="6" height="6" rx="0" fill={stroke} stroke="none" opacity="0">
              <animate attributeName="opacity" values="0;0.12;0" dur="2.4s" begin="0.6s" repeatCount="indefinite"/>
            </rect>
            <rect x="3" y="9" width="6" height="6" rx="0" fill={stroke} stroke="none" opacity="0">
              <animate attributeName="opacity" values="0;0.12;0" dur="2.4s" begin="0.15s" repeatCount="indefinite"/>
            </rect>
            <rect x="9" y="9" width="6" height="6" rx="0" fill={stroke} stroke="none" opacity="0">
              <animate attributeName="opacity" values="0;0.12;0" dur="2.4s" begin="0.45s" repeatCount="indefinite"/>
            </rect>
            <rect x="15" y="9" width="6" height="6" rx="0" fill={stroke} stroke="none" opacity="0">
              <animate attributeName="opacity" values="0;0.12;0" dur="2.4s" begin="0.75s" repeatCount="indefinite"/>
            </rect>
            <rect x="3" y="15" width="6" height="6" rx="0" fill={stroke} stroke="none" opacity="0">
              <animate attributeName="opacity" values="0;0.12;0" dur="2.4s" begin="0.6s" repeatCount="indefinite"/>
            </rect>
            <rect x="9" y="15" width="6" height="6" rx="0" fill={stroke} stroke="none" opacity="0">
              <animate attributeName="opacity" values="0;0.12;0" dur="2.4s" begin="0.9s" repeatCount="indefinite"/>
            </rect>
            <rect x="15" y="15" width="6" height="6" rx="0" fill={stroke} stroke="none" opacity="0">
              <animate attributeName="opacity" values="0;0.12;0" dur="2.4s" begin="1.2s" repeatCount="indefinite"/>
            </rect>
          </>
        )}
      </svg>
    ),
    interior: (
      <svg viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth={sw}
        strokeLinecap="round" strokeLinejoin="round" style={svgStyle}>
        <line x1="3" y1="20" x2="21" y2="20"/>
        <path d="M7 20V8h10v12"/>
        <g>
          <path d="M7 20V8h7v12H7z" fill={active ? "rgba(200,146,42,0.08)" : "none"} stroke={stroke} strokeWidth={sw}>
            {active && (
              <animateTransform attributeName="transform" type="skewX"
                values="0;-12;0" dur="2.2s" repeatCount="indefinite" additive="sum"
                calcMode="spline" keySplines="0.4 0 0.2 1;0.4 0 0.2 1"/>
            )}
          </path>
          <circle cx="12.5" cy="14" r="0.8" fill={stroke} stroke="none">
            {active && (
              <animateTransform attributeName="transform" type="skewX"
                values="0;-12;0" dur="2.2s" repeatCount="indefinite" additive="sum"
                calcMode="spline" keySplines="0.4 0 0.2 1;0.4 0 0.2 1"/>
            )}
          </circle>
        </g>
        {active && (
          <line x1="14" y1="14" x2="18" y2="17" strokeDasharray="1,2" opacity="0.5">
            <animate attributeName="opacity" values="0.5;0.05;0.5" dur="2.2s" repeatCount="indefinite"/>
          </line>
        )}
      </svg>
    ),
    delivered: (
      <svg viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth={sw}
        strokeLinecap="round" strokeLinejoin="round" style={svgStyle}>
        <circle cx="12" cy="12" r="9">
          {active && (
            <animate attributeName="stroke-dashoffset" from="57" to="0" dur="1s"
              fill="freeze" repeatCount="1"/>
          )}
          {active && <animate attributeName="stroke-dasharray" values="0,57;57,0" dur="1s" fill="freeze"/>}
        </circle>
        <path d="M7.5 12l3 3 6-6">
          {active && (
            <animate attributeName="stroke-dasharray" values="0,20;20,0" dur="0.6s"
              begin="0.7s" fill="freeze" repeatCount="1"/>
          )}
        </path>
        {active && (
          <>
            <circle cx="12" cy="3.5" r="1" fill={stroke} stroke="none" opacity="0">
              <animate attributeName="opacity" values="0;0.7;0" dur="2s" begin="0.2s" repeatCount="indefinite"/>
            </circle>
            <circle cx="20.5" cy="12" r="0.8" fill={stroke} stroke="none" opacity="0">
              <animate attributeName="opacity" values="0;0.6;0" dur="2s" begin="0.7s" repeatCount="indefinite"/>
            </circle>
            <circle cx="12" cy="20.5" r="1" fill={stroke} stroke="none" opacity="0">
              <animate attributeName="opacity" values="0;0.7;0" dur="2s" begin="1.2s" repeatCount="indefinite"/>
            </circle>
          </>
        )}
      </svg>
    ),
  };

  return (
    <div style={wrapStyle}>
      {icons[type] || null}
      {done && (
        <div style={{
          position: "absolute", top: -4, right: -4,
          width: 13, height: 13, borderRadius: "50%",
          background: "#C8922A",
          display: "flex", alignItems: "center", justifyContent: "center",
          animation: "checkPop .35s cubic-bezier(.34,1.56,.64,1) forwards",
        }}>
          <svg width="7" height="7" viewBox="0 0 10 10" fill="none">
            <path d="M2 5l2.5 2.5L8 3" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      )}
    </div>
  );
}

function Scene({ isNight, pct, phase }) {
  const n = isNight;
  const ac = "#C8922A";
  const al = "#EDBA56";

  const FLOOR_H = 13, MAX_FL = 30;
  const floors = Math.max(1, Math.round((pct / 100) * MAX_FL));
  const TX = 290, TW = 140, TB = 390;
  const TT = TB - floors * FLOOR_H;
  const tH = floors * FLOOR_H;
  const COLS = 7, WW = 10, WH = 7;
  const wPad = 8;
  const wGX = (TW - wPad * 2 - COLS * WW) / (COLS + 1);
  const craneVisible = pct < 100;

  const stars = Array.from({ length: 40 }, (_, i) => ({
    x: (i * 137.5) % 780 + 10,
    y: (i * 53.7) % 100 + 4,
    r: 0.5 + (i % 4) * 0.35,
    dur: (1.6 + i * 0.11).toFixed(2),
    op: 0.4 + (i % 5) * 0.12,
  }));
  const clouds = [
    { x: 96, y: 82, w: 88, h: 24, op: 0.18, dur: "34s" },
    { x: 238, y: 64, w: 124, h: 32, op: 0.16, dur: "40s" },
    { x: 520, y: 96, w: 98, h: 26, op: 0.14, dur: "37s" },
  ];

  const leftBuildings = [
    { x: 18,  y: 255, w: 48,  h: 140, floors: 9,  cols: 3 },
    { x: 64,  y: 230, w: 38,  h: 165, floors: 11, cols: 2 },
    { x: 100, y: 270, w: 62,  h: 125, floors: 8,  cols: 4 },
    { x: 158, y: 247, w: 32,  h: 148, floors: 10, cols: 2 },
    { x: 187, y: 285, w: 56,  h: 110, floors: 7,  cols: 3 },
    { x: 238, y: 263, w: 34,  h: 132, floors: 9,  cols: 2 },
  ];
  const rightBuildings = [
    { x: 445, y: 243, w: 46,  h: 152, floors: 10, cols: 3 },
    { x: 488, y: 260, w: 58,  h: 135, floors: 9,  cols: 3 },
    { x: 543, y: 233, w: 52,  h: 162, floors: 11, cols: 3 },
    { x: 593, y: 267, w: 40,  h: 128, floors: 8,  cols: 2 },
    { x: 630, y: 245, w: 62,  h: 150, floors: 10, cols: 4 },
    { x: 689, y: 273, w: 44,  h: 122, floors: 8,  cols: 2 },
    { x: 730, y: 253, w: 52,  h: 142, floors: 9,  cols: 3 },
  ];

  const skyDay   = { s1:"#7F9FBA", s2:"#9CB8CF", s3:"#B7CDDD", s4:"#C9D9E6" };
  const skyNight = { s1:"#010810", s2:"#040E1C", s3:"#071528", s4:"#0C1C34" };
  const sky = n ? skyNight : skyDay;

  const bldFill = (idx) => {
    if (n) return ["#0A1828","#0C1C30","#0E2036","#0B1A2C","#101E32","#0D1C30"][idx % 6];
    return ["#2A3C52","#304558","#36505E","#2C3E54","#384C60","#304A58"][idx % 6];
  };

  const cX = TX + TW + 24;
  const craneY = Math.max(TT - 10, 42);
  const isComplete = pct === 100;
  const sunX = 680, sunY = 56;
  const brandCardX = TX + TW + 56;
  const brandCardY = TT + 34;

  return (
    <svg viewBox="0 0 800 460" xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMax meet"
      style={{ width:"100%", height:"100%", display:"block" }}>
      <defs>
        <linearGradient id="skyGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor={sky.s1}/>
          <stop offset="30%"  stopColor={sky.s2}/>
          <stop offset="65%"  stopColor={sky.s3}/>
          <stop offset="100%" stopColor={sky.s4}/>
        </linearGradient>
        <linearGradient id="groundGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor={n?"#182838":"#7A8E9E"}/>
          <stop offset="100%" stopColor={n?"#0E1C2A":"#647888"}/>
        </linearGradient>
        <linearGradient id="roadGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor={n?"#1A2C3E":"#728494"}/>
          <stop offset="100%" stopColor={n?"#121E2E":"#647688"}/>
        </linearGradient>
        <linearGradient id="towerGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor={n?"#1C3C5C":"#3C5A78"}/>
          <stop offset="35%"  stopColor={n?"#122638":"#2C4862"}/>
          <stop offset="100%" stopColor={n?"#0C1C30":"#1E3452"}/>
        </linearGradient>
        <linearGradient id="towerSide" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%"   stopColor={n?"#0A1828":"#182E4A"}/>
          <stop offset="100%" stopColor={n?"#050C18":"#0E2038"}/>
        </linearGradient>
        <linearGradient id="podiumGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor={n?"#1E3852":"#4C6480"}/>
          <stop offset="100%" stopColor={n?"#122438":"#384E66"}/>
        </linearGradient>
        <linearGradient id="hazeGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor={n?"#071528":"#C8DCE8"} stopOpacity="0"/>
          <stop offset="100%" stopColor={n?"#071528":"#C8DCE8"} stopOpacity="0.16"/>
        </linearGradient>
        {n && (
          <radialGradient id="cityAmbient" cx="40%" cy="100%" r="65%">
            <stop offset="0%"   stopColor={ac}      stopOpacity="0.07"/>
            <stop offset="50%"  stopColor="#1A4080" stopOpacity="0.04"/>
            <stop offset="100%" stopColor={ac}      stopOpacity="0"/>
          </radialGradient>
        )}
        {!n && (
          <radialGradient id="sunHalo" cx="50%" cy="50%" r="50%">
            <stop offset="0%"   stopColor="#FFF8D0" stopOpacity="0.36"/>
            <stop offset="100%" stopColor="#FFF8D0" stopOpacity="0"/>
          </radialGradient>
        )}
        <filter id="blur3"><feGaussianBlur stdDeviation="3"/></filter>
        <filter id="blur6"><feGaussianBlur stdDeviation="6"/></filter>
        <filter id="blur12"><feGaussianBlur stdDeviation="12"/></filter>
        <filter id="blur20"><feGaussianBlur stdDeviation="20"/></filter>
        <filter id="softglow">
          <feGaussianBlur stdDeviation="5" result="b"/>
          <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
        <linearGradient id="brandCardGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={n ? "#12253E" : "#FFFDF8"}/>
          <stop offset="55%" stopColor={n ? "#0B1728" : "#F5F1E7"}/>
          <stop offset="100%" stopColor={n ? "#08111D" : "#EBE4D7"}/>
        </linearGradient>
        <linearGradient id="brandCardShine" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="white" stopOpacity="0"/>
          <stop offset="48%" stopColor="white" stopOpacity={n ? "0.06" : "0.18"}/>
          <stop offset="100%" stopColor="white" stopOpacity="0"/>
        </linearGradient>
        <linearGradient id="brandCardEdge" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={n ? "rgba(255,255,255,0.18)" : "rgba(255,255,255,0.85)"}/>
          <stop offset="100%" stopColor={n ? "rgba(255,255,255,0.02)" : "rgba(255,255,255,0.12)"}/>
        </linearGradient>
        <linearGradient id="towerSweep" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="white" stopOpacity="0"/>
          <stop offset="50%" stopColor="white" stopOpacity={n ? "0.04" : "0.11"}/>
          <stop offset="100%" stopColor="white" stopOpacity="0"/>
        </linearGradient>
        <clipPath id="towerClip">
          <rect x={TX} y={TT} width={TW} height={tH+4}/>
        </clipPath>
      </defs>

      <rect width="800" height="460" fill="url(#skyGrad)"/>
      <rect x="0" y="310" width="800" height="110" fill="url(#hazeGrad)"/>

      {n && stars.map((s,i) => (
        <circle key={i} cx={s.x} cy={s.y} r={s.r} fill="white" opacity={s.op}>
          <animate attributeName="opacity" values={`${s.op};${s.op*0.15};${s.op}`}
            dur={`${s.dur}s`} repeatCount="indefinite"/>
        </circle>
      ))}
      {!n && clouds.map((c, i) => (
        <g key={i} opacity={c.op}>
          <ellipse cx={c.x} cy={c.y} rx={c.w/2} ry={c.h/2} fill="white" filter="url(#blur12)">
            <animateTransform attributeName="transform" type="translate"
              values={`0 0; ${24 + i * 10} ${i % 2 === 0 ? -4 : 3}; 0 0`}
              dur={c.dur} repeatCount="indefinite"/>
          </ellipse>
          <ellipse cx={c.x - 24} cy={c.y + 1} rx={c.w/3.8} ry={c.h/2.3} fill="white" filter="url(#blur12)">
            <animateTransform attributeName="transform" type="translate"
              values={`0 0; ${20 + i * 8} ${i % 2 === 0 ? -3 : 2}; 0 0`}
              dur={c.dur} repeatCount="indefinite"/>
          </ellipse>
          <ellipse cx={c.x + 26} cy={c.y + 2} rx={c.w/4.2} ry={c.h/2.6} fill="white" filter="url(#blur12)">
            <animateTransform attributeName="transform" type="translate"
              values={`0 0; ${18 + i * 8} ${i % 2 === 0 ? -3 : 2}; 0 0`}
              dur={c.dur} repeatCount="indefinite"/>
          </ellipse>
        </g>
      ))}
      {n && <ellipse cx="400" cy="48" rx="380" ry="20" fill="rgba(180,200,255,0.022)" filter="url(#blur20)"/>}

      {n && <>
        <circle cx="88" cy="58" r="55" fill="#010810" opacity="0.35" filter="url(#blur12)"/>
        <circle cx="82" cy="56" r="26" fill="#C4D4E4" opacity="0.88"/>
        <circle cx="92" cy="47" r="21" fill="#010810" opacity="0.91"/>
        <circle cx="76" cy="62" r="4"   fill="#A4B4C4" opacity="0.22"/>
        <circle cx="86" cy="68" r="2.5" fill="#A4B4C4" opacity="0.18"/>
        <circle cx="70" cy="52" r="3"   fill="#A4B4C4" opacity="0.16"/>
      </>}

      {!n && <>
        <circle cx={sunX} cy={sunY} r="76"  fill="url(#sunHalo)"/>
        <circle cx={sunX} cy={sunY} r="42"  fill="#FFF5C0" opacity="0.11" filter="url(#blur12)"/>
        <circle cx={sunX} cy={sunY} r="24"  fill="#FFE870" opacity="0.28"/>
        <circle cx={sunX} cy={sunY} r="15"  fill="#F5D040" opacity="0.64"/>
        <circle cx={sunX} cy={sunY} r="9"   fill="#FFF090" opacity="0.78"/>
        {Array.from({length:8},(_,i)=>{
          const a=(i*45)*Math.PI/180;
          return <line key={i}
            x1={sunX+Math.cos(a)*22} y1={sunY+Math.sin(a)*22}
            x2={sunX+Math.cos(a)*38} y2={sunY+Math.sin(a)*38}
            stroke="#FFE870" strokeWidth="1.8" opacity="0.28"/>;
        })}
        <circle cx={sunX} cy={sunY} r="58" fill="#FFF7CC" opacity="0.06" filter="url(#blur20)">
          <animate attributeName="opacity" values="0.04;0.11;0.05;0.13;0.04" dur="2.2s" repeatCount="indefinite"/>
          <animate attributeName="r" values="58;64;60;67;58" dur="2.2s" repeatCount="indefinite"/>
        </circle>
      </>}

      {n && <rect width="800" height="460" fill="url(#cityAmbient)"/>}
      {n && [[8,300,24,90],[30,283,18,107],[46,303,28,87],[72,288,16,102],[86,276,22,114],[106,300,20,90]].map(([x,y,w,h],i)=>(
        <rect key={i} x={x} y={y} width={w} height={h} fill="#08141E" opacity={0.5-i*0.02}/>
      ))}

      {leftBuildings.map((b,bi)=>(
        <g key={`lb${bi}`}>
          <rect x={b.x} y={b.y} width={b.w} height={b.h} fill={bldFill(bi)}/>
          <rect x={b.x+3} y={b.y-5} width={b.w-6} height="7" rx="1" fill={bldFill(bi+1)}/>
          <rect x={b.x+b.w/2-3} y={b.y-12} width="6" height="8" fill={bldFill(bi+2)}/>
          <rect x={b.x+b.w-8} y={b.y} width="8" height={b.h} fill={n?"rgba(0,0,0,0.3)":"rgba(0,0,0,0.15)"}/>
          {Array.from({length:b.floors}).map((_,f)=>
            Array.from({length:b.cols}).map((_,c)=>{
              const lit=n&&(f+c+bi)%4!==0;
              const wx=b.x+5+c*((b.w-10)/b.cols)+1;
              const wy=b.y+8+f*14;
              return <rect key={`${f}${c}`} x={wx} y={wy} width="8" height="6" rx="0.5"
                fill={lit?al:(n?"#0A1E38":((f+c)%3===0?"#567898":"#3A587A"))}
                opacity={lit?0.6+(f+c)%3*0.12:(n?0.5:0.35)}>
                {lit&&(f+c+bi)%6===0&&<animate attributeName="opacity"
                  values={`${0.6+(f+c)%3*0.12};0.15;${0.6+(f+c)%3*0.12}`}
                  dur={`${2.2+f*0.18}s`} repeatCount="indefinite"/>}
              </rect>;
            })
          )}
          {n&&<rect x={b.x} y={b.y} width={b.w} height={b.h} fill={al} opacity="0.015" filter="url(#blur6)"/>}
        </g>
      ))}

      {rightBuildings.map((b,bi)=>(
        <g key={`rb${bi}`}>
          <rect x={b.x} y={b.y} width={b.w} height={b.h} fill={bldFill(bi+2)}/>
          <rect x={b.x+3} y={b.y-5} width={b.w-6} height="7" rx="1" fill={bldFill(bi+3)}/>
          <rect x={b.x+b.w/2-3} y={b.y-12} width="6" height="8" fill={bldFill(bi)}/>
          <rect x={b.x+b.w-8} y={b.y} width="8" height={b.h} fill={n?"rgba(0,0,0,0.3)":"rgba(0,0,0,0.15)"}/>
          {Array.from({length:b.floors}).map((_,f)=>
            Array.from({length:b.cols}).map((_,c)=>{
              const lit=n&&(f*3+c+bi)%4!==0;
              const wx=b.x+5+c*((b.w-10)/b.cols)+1;
              const wy=b.y+8+f*14;
              return <rect key={`${f}${c}`} x={wx} y={wy} width="8" height="6" rx="0.5"
                fill={lit?al:(n?"#0A1E38":((f+c)%3===0?"#567898":"#3A587A"))}
                opacity={lit?0.55+(f+c)%3*0.13:(n?0.5:0.35)}>
                {lit&&(f+c+bi)%7===0&&<animate attributeName="opacity"
                  values={`${0.55+(f+c)%3*0.13};0.12;${0.55+(f+c)%3*0.13}`}
                  dur={`${2.6+c*0.25}s`} repeatCount="indefinite"/>}
              </rect>;
            })
          )}
          {n&&<rect x={b.x} y={b.y} width={b.w} height={b.h} fill={al} opacity="0.012" filter="url(#blur6)"/>}
        </g>
      ))}

      <rect x="0" y="390" width="800" height="70" fill="url(#groundGrad)"/>
      <rect x="0" y="390" width="800" height="1.5" fill={n?"#2A3E50":"#7A8E9E"} opacity="0.8"/>
      <rect x="0" y="402" width="800" height="50" fill="url(#roadGrad)"/>
      {[40,140,240,340,440,540,640,740].map((x,i)=>(
        <rect key={i} x={x} y="426" width="70" height="3" rx="1.5"
          fill={n?"rgba(240,215,155,0.12)":"rgba(255,255,255,0.45)"}/>
      ))}
      <rect x="0" y="400" width="800" height="3" fill={n?"#243040":"#8A9AA8"} opacity="0.6"/>
      <rect x="0" y="452" width="800" height="8" fill={n?"#121C28":"#687888"}/>
      {n&&<rect x="0" y="390" width="800" height="62" fill="url(#cityAmbient)" opacity="0.4"/>}

      {tH>0&&<>
        <ellipse cx={TX+TW/2} cy={TB+8} rx={TW*0.55} ry="9"
          fill="black" opacity={n?0.45:0.12} filter="url(#blur6)"/>
        <rect x={TX-48} y={TB-22} width={TW+96} height={30} fill="url(#podiumGrad)" rx="2"/>
        <rect x={TX-32} y={TB-38} width={TW+64} height={18} fill="url(#podiumGrad)" rx="2"/>
        <rect x={TX-16} y={TB-52} width={TW+32} height={16} fill="url(#podiumGrad)" rx="1"/>
        <rect x={TX-48} y={TB-22} width={TW+96} height="2.5" fill={ac} opacity={n?0.55:0.3}/>
        <rect x={TX-32} y={TB-38} width={TW+64} height="2"   fill={ac} opacity={n?0.38:0.18}/>
        <rect x={TX-16} y={TB-52} width={TW+32} height="1.5" fill={ac} opacity={n?0.25:0.12}/>

        <g clipPath="url(#towerClip)">
          <rect x={TX} y={TT} width={TW} height={tH} fill="url(#towerGrad)"/>
          <rect x={TX+TW-18} y={TT} width="18" height={tH} fill="url(#towerSide)"/>
          <rect x={TX} y={TT} width="6" height={tH} fill="rgba(255,255,255,0.05)"/>
          {Array.from({length:floors}).map((_,f)=>(
            <rect key={f} x={TX} y={TB-(f+1)*FLOOR_H} width={TW-18} height="1.5"
              fill={n?"#050C18":"#162A42"} opacity="0.8"/>
          ))}
          {[0.14,0.30,0.48,0.66,0.82].map((r,i)=>(
            <line key={i} x1={TX+r*(TW-18)} y1={TT} x2={TX+r*(TW-18)} y2={TB}
              stroke="rgba(255,255,255,0.03)" strokeWidth="1"/>
          ))}
          {Array.from({length:floors}).map((_,f)=>
            Array.from({length:COLS}).map((_,c)=>{
              const wx=TX+wPad+wGX+c*(WW+wGX);
              const wy=TB-(f+1)*FLOOR_H+(FLOOR_H-WH)/2;
              const litPat=[[1,0,1,0,1,1,0],[0,1,1,0,1,0,1],[1,1,0,1,0,1,1],[0,0,1,0,1,1,0],[1,0,1,1,0,0,1]];
              const lit=n&&litPat[f%litPat.length][c];
              return <g key={`w${f}${c}`}>
                <rect x={wx} y={wy} width={WW} height={WH} rx="0.5"
                  fill={lit?al:(n?"#0E2A44":"#4A7AA8")}
                  opacity={lit?0.92:(n?0.5:0.32)}>
                  {lit&&<animate attributeName="opacity" values="0.92;0.3;0.92"
                    dur={`${1.9+f*0.11+c*0.07}s`} repeatCount="indefinite"/>}
                </rect>
                {lit&&n&&<rect x={wx} y={wy} width={WW} height={WH} rx="0.5"
                  fill={al} opacity="0.22" filter="url(#blur3)"/>}
              </g>;
            })
          )}
          {!n && (
            <rect x={TX-40} y={TT} width="26" height={tH} fill="url(#towerSweep)" opacity="0.75">
              <animate attributeName="x" values={`${TX-40};${TX+TW};${TX+TW}`} dur="4.8s" repeatCount="indefinite"/>
              <animate attributeName="opacity" values="0;0.75;0" dur="4.8s" repeatCount="indefinite"/>
            </rect>
          )}
        </g>

        {floors>10&&<g>
          <rect x={TX-6} y={TB-10*FLOOR_H-2} width={TW+6} height="5" fill={ac} opacity={n?0.6:0.35}/>
          {n&&<rect x={TX-6} y={TB-10*FLOOR_H-2} width={TW+6} height="5"
            fill={al} opacity="0.18" filter="url(#blur6)"/>}
        </g>}

        <rect x={TX} y={TT} width={TW} height={tH} fill="none"
          stroke={n?"rgba(255,255,255,0.06)":"rgba(8,24,52,0.1)"} strokeWidth="1.5"/>

        {pct>=100&&<>
          <rect x={TX+16} y={TT-34} width={TW-32} height="36" rx="1" fill={n?"#1A3252":"#2E4A6A"}/>
          <rect x={TX+30} y={TT-58} width={TW-60} height="26" rx="1" fill={n?"#162A48":"#284262"}/>
          <rect x={TX+44} y={TT-76} width={TW-88} height="20" rx="1" fill={n?"#122040":"#20385C"}/>
          <line x1={TX+TW/2} y1={TT-76} x2={TX+TW/2} y2={TT-102}
            stroke={n?"#1E3A5A":"#2E4C6C"} strokeWidth="3.5"/>
          <line x1={TX+TW/2} y1={TT-102} x2={TX+TW/2} y2={TT-124}
            stroke={n?"#2A4C72":"#3A5E82"} strokeWidth="1.8"/>
          <circle cx={TX+TW/2} cy={TT-126} r="5.5" fill={ac} filter="url(#softglow)">
            <animate attributeName="opacity" values="0.72;1;0.78;1;0.72" dur="2.2s" repeatCount="indefinite"/>
          </circle>
          <circle cx={TX+TW/2} cy={TT-126} r="12" fill={ac} opacity="0.1" filter="url(#blur6)">
            <animate attributeName="opacity" values="0.04;0.16;0.06;0.18;0.04" dur="2.2s" repeatCount="indefinite"/>
            <animate attributeName="r" values="12;16;13;18;12" dur="2.2s" repeatCount="indefinite"/>
          </circle>
          {[TX+22,TX+38,TX+54,TX+70,TX+86,TX+102].map((wx,i)=>n&&(
            <rect key={i} x={wx} y={TT-30} width="11" height="22" rx="1" fill={al} opacity="0.5">
              <animate attributeName="opacity" values="0.5;0.18;0.5"
                dur={`${1.7+i*0.18}s`} repeatCount="indefinite"/>
            </rect>
          ))}
          <g>
            <line x1={TX+TW} y1={brandCardY+26} x2={brandCardX-14} y2={brandCardY+26}
              stroke={ac} strokeWidth="1.1" opacity="0.28" strokeDasharray="4,5"/>
            <circle cx={TX+TW} cy={brandCardY+26} r="4" fill={ac} opacity="0.85"/>
            <path d={`M${brandCardX+6} ${brandCardY+10} H${brandCardX+150} V${brandCardY+56} H${brandCardX+20} L${brandCardX} ${brandCardY+42} V${brandCardY+16} Z`}
              fill="black" opacity={n ? "0.22" : "0.09"} filter="url(#blur6)"/>
            <path d={`M${brandCardX} ${brandCardY+12} L${brandCardX+18} ${brandCardY} H${brandCardX+144} L${brandCardX+152} ${brandCardY+10} V${brandCardY+48} L${brandCardX+136} ${brandCardY+56} H${brandCardX+16} L${brandCardX} ${brandCardY+46} Z`}
              fill="url(#brandCardGrad)" stroke={ac} strokeWidth="1.2"/>
            <path d={`M${brandCardX+2} ${brandCardY+13} L${brandCardX+19} ${brandCardY+2} H${brandCardX+143}`}
              fill="none" stroke="url(#brandCardEdge)" strokeWidth="1.1" opacity="0.95"/>
            <rect x={brandCardX+16} y={brandCardY+15} width="24" height="24" rx="6"
              fill={n?"#10213A":"#11243D"} stroke={n ? "rgba(255,255,255,0.08)" : "rgba(255,255,255,0.2)"} strokeWidth="0.8"/>
            <polygon points={`${brandCardX+28},${brandCardY+19} ${brandCardX+36},${brandCardY+35} ${brandCardX+20},${brandCardY+35}`}
              fill="white" opacity="0.92"/>
            <polygon points={`${brandCardX+28},${brandCardY+25} ${brandCardX+32},${brandCardY+35} ${brandCardX+24},${brandCardY+35}`}
              fill={ac} opacity="0.9"/>
            <text x={brandCardX+49} y={brandCardY+20}
              fontFamily="'Rajdhani','DM Sans',sans-serif" fontSize="7.4" fontWeight="700" letterSpacing="1.8"
              fill={n?"rgba(237,186,86,0.98)":"rgba(200,146,42,1)"}>
              ARVISH
            </text>
            <text x={brandCardX+49} y={brandCardY+32}
              fontFamily="'DM Sans',sans-serif" fontSize="10.5" fontWeight="700"
              fill={n?"rgba(220,238,255,0.94)":"rgba(10,22,40,0.94)"}>
              Constructions
            </text>
            <text x={brandCardX+49} y={brandCardY+45}
              fontFamily="'DM Sans',sans-serif" fontSize="7.1" fontWeight="600" letterSpacing="1.0"
              fill={n?"rgba(212,228,244,0.7)":"rgba(78,98,120,0.82)"}>
              Signature Handover
            </text>
            <path d={`M${brandCardX+2} ${brandCardY+12} L${brandCardX+18} ${brandCardY} H${brandCardX+56}`}
              fill="none" stroke={n ? "rgba(255,255,255,0.08)" : "rgba(255,255,255,0.46)"} strokeWidth="1"/>
            <path d={`M${brandCardX+8} ${brandCardY+8} H${brandCardX+148}`}
              fill="none" stroke="url(#brandCardShine)" strokeWidth="16" opacity="0.55">
              <animate attributeName="stroke-dasharray" values="0 180;42 138;0 180" dur="5.8s" repeatCount="indefinite"/>
            </path>
          </g>
        </>}

        {pct<100&&pct>8&&<g opacity="0.65">
          <rect x={TX-10} y={TT-2} width="9" height={Math.min(100,tH)}
            fill="none" stroke={n?"#1E3A54":"#4A6880"} strokeWidth="1" strokeDasharray="4,3"/>
          {[20,50,80].filter(o=>o<Math.min(100,tH)).map(offset=>(
            <rect key={offset} x={TX-13} y={TT+offset} width="13" height="7" rx="1"
              fill={n?"#1E3A54":"#4A6880"} opacity="0.85"/>
          ))}
          <rect x={TX-14} y={TT+2} width="14" height="2"
            fill={n?"#2A4A64":"#5A7890"} opacity="0.7"/>
        </g>}
      </>}

      {craneVisible&&(
        <g style={{transformOrigin:`${cX}px ${craneY+10}px`,animation:"craneSway 9s ease-in-out infinite"}}>
          <rect x={cX-3.5} y={craneY} width="7" height={TB-craneY-16} rx="3.5" fill="#C8901E"/>
          {Array.from({length:6}).map((_,i)=>(
            <line key={i} x1={cX-3.5} y1={craneY+16+i*26} x2={cX+3.5} y2={craneY+28+i*26}
              stroke="#A07018" strokeWidth="1.2" opacity="0.65"/>
          ))}
          <rect x={cX-94} y={craneY-1} width="97" height="7" rx="3.5" fill="#D09820"/>
          <rect x={cX}    y={craneY-1} width="50" height="7" rx="3.5" fill="#A87018"/>
          <rect x={cX+38} y={craneY+5} width="18" height="26" rx="2"  fill="#8A5810"/>
          <line x1={cX} y1={craneY+6} x2={cX-92} y2={craneY+8} stroke="#7A4808" strokeWidth="1.4" opacity="0.8"/>
          <line x1={cX} y1={craneY+6} x2={cX+48} y2={craneY+8} stroke="#7A4808" strokeWidth="1.4" opacity="0.8"/>
          <g style={{animation:"trolley 7s ease-in-out infinite",transformOrigin:`${cX-40}px ${craneY+3}px`}}>
            <rect x={cX-50} y={craneY} width="20" height="8" rx="2" fill="#C8901E" opacity="0.9"/>
            <circle cx={cX-45} cy={craneY+1.5} r="2.5" fill="#8A6018"/>
            <circle cx={cX-36} cy={craneY+1.5} r="2.5" fill="#8A6018"/>
            <g style={{animation:"hookBob 3.4s ease-in-out infinite",transformOrigin:`${cX-40}px ${craneY+46}px`}}>
              <line x1={cX-40} y1={craneY+8} x2={cX-40} y2={craneY+68}
                stroke="#8898A8" strokeWidth="0.9" opacity="0.65" strokeDasharray="3,2"/>
              <rect x={cX-50} y={craneY+66} width="18" height="14" rx="2" fill="#C8901E" opacity="0.85"/>
              <line x1={cX-40} y1={craneY+80} x2={cX-40} y2={craneY+90} stroke="#8898A8" strokeWidth="1.1" opacity="0.6"/>
              <path d={`M${cX-45},${craneY+90} Q${cX-48},${craneY+97} ${cX-40},${craneY+97} Q${cX-32},${craneY+97} ${cX-36},${craneY+90}`}
                fill="none" stroke="#8A6018" strokeWidth="1.8"/>
            </g>
          </g>
          {n&&<circle cx={cX-94} cy={craneY+3} r="3.5" fill="#FF3311" opacity="0.9">
            <animate attributeName="opacity" values="0.9;0.08;0.9" dur="1.3s" repeatCount="indefinite"/>
          </circle>}
        </g>
      )}

      {[108,268,478,650].map((lx,i)=>(
        <g key={i}>
          <rect x={lx-2} y="375" width="4" height="28" rx="2" fill={n?"#182C3E":"#5A6E80"}/>
          <path d={`M${lx},375 Q${lx+12},365 ${lx+20},366`}
            fill="none" stroke={n?"#182C3E":"#5A6E80"} strokeWidth="3"/>
          <rect x={lx+13} y="362" width="14" height="6" rx="3" fill={n?"#243A50":"#6A7E90"}/>
          {n&&<>
            <ellipse cx={lx+20} cy="402" rx="22" ry="5" fill={al} opacity="0.05" filter="url(#blur6)"/>
            <ellipse cx={lx+20} cy="362" rx="24" ry="12" fill={al} opacity="0.06" filter="url(#blur12)"/>
            <circle cx={lx+20} cy="364" r="3.5" fill="#F2DC80" opacity="0.95">
              <animate attributeName="opacity" values="0.95;0.55;0.95"
                dur={`${2.0+i*0.4}s`} repeatCount="indefinite"/>
            </circle>
          </>}
        </g>
      ))}

      {[[195,382],[218,379],[242,383],[544,382],[568,379],[592,383]].map(([tx,ty],i)=>(
        <g key={i}>
          <rect x={tx-2} y={ty+6} width="4" height="14" rx="2" fill={n?"#182820":"#3A4C30"}/>
          <ellipse cx={tx}   cy={ty+4}  rx="14" ry="16" fill={n?"#1E3828":"#364E2E"}/>
          <ellipse cx={tx-4} cy={ty-3}  rx="11" ry="12" fill={n?"#283E30":"#425838"}/>
          <ellipse cx={tx+4} cy={ty-1}  rx="10" ry="11" fill={n?"#223430":"#3C5234"}/>
          <ellipse cx={tx}   cy={ty-8}  rx="8"  ry="10" fill={n?"#2C4436":"#486040"}/>
          <ellipse cx={tx+1} cy={ty-14} rx="5"  ry="7"  fill={n?"#304838":"#4E6644"}/>
          {!n&&<ellipse cx={tx-2} cy={ty-2} rx="4" ry="5" fill="rgba(255,255,255,0.06)"/>}
        </g>
      ))}

      <g style={{animation:"truckLR 22s linear infinite"}}>
        <rect x={-124} y="402" width="58" height="23" rx="2" fill={n?"#18293C":"#2E4260"}/>
        <rect x={-122} y="404" width="54" height="5"  rx="1" fill={ac} opacity={n?0.38:0.22}/>
        <rect x={-68}  y="406" width="32" height="19" rx="3" fill={n?"#0E1E32":"#243A50"}/>
        <rect x={-46}  y="409" width="8"  height="10" rx="1.5"
          fill={n?"#1A3C5A":"#3A6484"} opacity={n?0.9:0.65}/>
        {n&&<>
          <circle cx={-38} cy="417" r="3" fill="#F2E08A" opacity="0.9"/>
          <ellipse cx={-26} cy="417" rx="14" ry="4" fill="#F2E08A" opacity="0.07" filter="url(#blur6)"/>
        </>}
        {n&&<circle cx={-124} cy="416" r="2.5" fill="#FF2200" opacity="0.8">
          <animate attributeName="opacity" values="0.8;0.35;0.8" dur="1.8s" repeatCount="indefinite"/>
        </circle>}
        {[-112,-94,-78,-60,-44].map((wx,wi)=>(
          <g key={wi}>
            <circle cx={wx} cy="426" r="7"   fill={n?"#0C1824":"#1E3050"}/>
            <circle cx={wx} cy="426" r="4.5" fill={n?"#182838":"#2A3E5A"}/>
            <circle cx={wx} cy="426" r="2"   fill={n?"#243448":"#36506C"}/>
          </g>
        ))}
      </g>

      {!n&&(
        <g style={{animation:"birds 28s 3s linear infinite"}} opacity="0.22">
          {[[0,62],[16,67],[32,60],[50,65],[68,59]].map(([bx,by],i)=>(
            <path key={i} d={`M${bx},${by} Q${bx+6},${by-6} ${bx+12},${by}`}
              stroke="#6A7A92" strokeWidth={1.4-i*0.12} fill="none"/>
          ))}
        </g>
      )}

      <style>{`
        @keyframes craneSway {0%,100%{transform:rotate(-0.7deg);}50%{transform:rotate(0.7deg);}}
        @keyframes trolley   {0%,100%{transform:translateX(0);}50%{transform:translateX(-48px);}}
        @keyframes hookBob   {0%,100%{transform:translateY(0);}50%{transform:translateY(5px);}}
        @keyframes truckLR   {0%{transform:translateX(-160px);}100%{transform:translateX(960px);}}
        @keyframes birds     {0%{transform:translateX(-90px) translateY(0);}100%{transform:translateX(940px) translateY(-30px);}}
      `}</style>
    </svg>
  );
}

function SkyToggle({ isNight, onToggle }) {
  return (
    <button
      onClick={onToggle}
      aria-label={isNight ? "Switch to Day" : "Switch to Night"}
      style={{
        display:"flex",alignItems:"center",gap:"10px",
        background:isNight?"rgba(4,14,34,0.80)":"rgba(255,255,255,0.18)",
        border:isNight?"1px solid rgba(200,146,42,0.35)":"1px solid rgba(255,255,255,0.32)",
        color:isNight?"rgba(200,220,255,0.80)":"rgba(255,255,255,0.88)",
        padding:"7px 14px 7px 7px",borderRadius:"999px",cursor:"pointer",
        fontFamily:"'DM Sans',sans-serif",fontSize:"9px",fontWeight:"600",
        letterSpacing:".14em",textTransform:"uppercase",
        transition:"background .4s, border .4s, color .4s",
        backdropFilter:"blur(6px)",WebkitBackdropFilter:"blur(6px)",
      }}
    >
      <div style={{
        position:"relative",width:"44px",height:"24px",borderRadius:"12px",
        background:isNight?"linear-gradient(135deg,#0C1A38,#1A2C50)":"linear-gradient(135deg,#87CEEB,#FFD580)",
        border:isNight?"1px solid rgba(100,140,220,0.3)":"1px solid rgba(255,200,80,0.5)",
        transition:"background .5s",flexShrink:0,overflow:"hidden",
      }}>
        {isNight&&<>
          <div style={{position:"absolute",top:"4px",left:"5px",width:"2px",height:"2px",borderRadius:"50%",background:"white",opacity:0.7}}/>
          <div style={{position:"absolute",top:"8px",left:"9px",width:"1.5px",height:"1.5px",borderRadius:"50%",background:"white",opacity:0.5}}/>
          <div style={{position:"absolute",top:"5px",left:"14px",width:"1px",height:"1px",borderRadius:"50%",background:"white",opacity:0.6}}/>
        </>}
        {!isNight&&<>
          <div style={{position:"absolute",top:"4px",right:"7px",width:"2px",height:"2px",borderRadius:"50%",background:"rgba(255,220,80,0.7)"}}/>
          <div style={{position:"absolute",top:"12px",right:"11px",width:"1.5px",height:"1.5px",borderRadius:"50%",background:"rgba(255,220,80,0.5)"}}/>
        </>}
        <div style={{
          position:"absolute",top:"3px",
          left:isNight?"21px":"3px",
          width:"18px",height:"18px",borderRadius:"50%",
          transition:"left .38s cubic-bezier(.34,1.56,.64,1)",
          display:"flex",alignItems:"center",justifyContent:"center",zIndex:2,
        }}>
          {isNight?(
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
              <path d="M21 12.79A9 9 0 1111.21 3a7 7 0 0 0 9.79 9.79z"
                fill="#C4D4E4" stroke="#A0B4C8" strokeWidth="1"/>
            </svg>
          ):(
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="5" fill="#FFD520" stroke="#FFC000" strokeWidth="1"/>
              {[0,45,90,135,180,225,270,315].map(deg=>{
                const r=Math.PI*deg/180;
                return <line key={deg}
                  x1={12+Math.cos(r)*7} y1={12+Math.sin(r)*7}
                  x2={12+Math.cos(r)*9.5} y2={12+Math.sin(r)*9.5}
                  stroke="#FFD520" strokeWidth="1.5" strokeLinecap="round"/>;
              })}
            </svg>
          )}
        </div>
      </div>
      {isNight?"Day View":"Night View"}
    </button>
  );
}

export default function Hero() {
  const navigate = useNavigate();
  const [isNight, setIsNight] = useState(false);
  const [phase,   setPhase]   = useState(0);
  const [scrolled,setScrolled]= useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const t = setTimeout(()=>setPhase(p=>(p+1)%PHASES.length), DURATIONS[phase]);
    return ()=>clearTimeout(t);
  }, [phase]);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", fn);
    return ()=>window.removeEventListener("scroll", fn);
  }, []);

  const p = PHASES[phase];
  const skyBg = isNight
    ? "linear-gradient(175deg,#010810 0%,#040E1C 40%,#071528 100%)"
    : "linear-gradient(175deg,#7F9FBA 0%,#9CB8CF 45%,#B7CDDD 100%)";

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800;900&family=DM+Sans:wght@300;400;500;600&family=Rajdhani:wght@600;700&display=swap');
        *,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
        :root{
          --ink:#0A1628;--muted:#4E6278;--muted-l:#7A90A4;
          --accent:#C8922A;--accent-l:#EDBA56;--accent-pale:rgba(200,146,42,0.10);
          --border:rgba(10,22,40,0.08);--border-s:rgba(10,22,40,0.14);
          --white:#FFFFFF;--bg:#F0F3F7;--surface:rgba(255,255,255,0.97);
        }
        .ah{font-family:'DM Sans',sans-serif;color:var(--ink);min-height:100vh;display:flex;flex-direction:column;background:var(--bg);}

        .ah-nav{height:72px;padding:0 52px;display:flex;align-items:center;justify-content:space-between;position:sticky;top:0;z-index:300;background:var(--surface);border-bottom:none;transition:box-shadow .3s;box-shadow:${scrolled?"0 4px 32px rgba(10,22,40,0.08)":"none"};}
        .ah-brand{display:flex;align-items:center;gap:14px;text-decoration:none;margin-left:24px;}
        .ah-logo{
          width:108px;height:108px;background:linear-gradient(150deg,#0A1628,#1A2E50);
          display:flex;align-items:center;justify-content:center;box-shadow:0 8px 20px rgba(10,22,40,0.2);
          clip-path:polygon(14% 6%,86% 6%,95% 42%,50% 100%,5% 42%);
        }
        .ah-brand-text{display:flex;flex-direction:column;gap:4px;margin-left:1px;}
        .ah-brand-name{
          font-family:'Playfair Display',Georgia,serif;font-size:34px;font-weight:800;
          letter-spacing:.04em;text-transform:uppercase;color:#2A4E7A;line-height:.95;
        }
        .ah-brand-sub{
          font-family:'DM Sans',sans-serif;font-size:12px;font-weight:600;
          letter-spacing:.16em;text-transform:uppercase;color:#A87418;line-height:1;font-weight:800;
        }
        .ah-nav-links{display:flex;align-items:center;margin-left:auto;padding-right:28px;}
        .ah-nav-links a{font-size:12.5px;font-weight:700;color:var(--muted);text-decoration:none;letter-spacing:.04em;padding:8px 18px;border-radius:6px;transition:.18s;}
        .ah-nav-links a:hover{color:var(--ink);background:var(--accent-pale);}
        .ah-nav-right{display:flex;align-items:center;gap:16px;}
        .ah-nav-cta{font-family:'DM Sans',sans-serif;font-size:11px;font-weight:600;letter-spacing:.12em;text-transform:uppercase;color:#fff;background:#2A4E7A;border:none;border-radius:6px;padding:11px 24px;cursor:pointer;transition:.22s;}
        .ah-nav-cta:hover{background:#1A2E50;transform:translateY(-1px);box-shadow:0 8px 24px rgba(10,22,40,0.22);}

        .ah-nav-toggle{display:none;align-items:center;justify-content:center;width:44px;height:44px;border:1px solid rgba(10,22,40,0.12);border-radius:14px;background:transparent;color:var(--ink);cursor:pointer;transition:.22s;}
        .ah-nav-toggle:hover{background:rgba(10,22,40,0.04);}
        .ah-nav-toggle svg{width:20px;height:16px;}
        .ah-nav-toggle rect{fill:var(--ink);rx:1;}

        .ah-mobile-menu{display:none;position:absolute;top:72px;left:0;right:0;flex-direction:column;gap:0.75rem;padding:1rem 24px;background:var(--surface);box-shadow:0 24px 48px rgba(10,22,40,0.12);z-index:299;border-bottom:1px solid var(--border);}
        .ah-mobile-menu.open{display:flex;}
        .ah-mobile-menu a{display:block;font-size:14px;font-weight:700;color:var(--ink);text-decoration:none;padding:14px 16px;border-radius:12px;transition:background .2s,color .2s;}
        .ah-mobile-menu a:hover{background:var(--accent-pale);color:var(--ink);}
        .ah-mobile-menu .ah-nav-cta{width:100%;padding:14px;}

        .ah-hero{flex:1;position:relative;display:flex;height:clamp(75vh, 90vw, calc(100vh - 72px));overflow:hidden;}

        .ah-right{position:absolute;top:0;right:0;bottom:0;width:58%;display:flex;flex-direction:column;overflow:hidden;transition:background 1.2s ease;}
        .ah-right::after{content:'';position:absolute;top:0;left:0;bottom:0;width:118px;pointer-events:none;z-index:5;transition:background 1.2s ease;}
        .ah-right.day::after  {background:linear-gradient(to right,rgba(255,255,255,0.42) 0%,rgba(255,255,255,0.16) 38%,rgba(255,255,255,0.05) 68%,transparent 100%);}
        .ah-right.night::after{background:linear-gradient(to right,#0D1826,transparent);}

        .ah-canvas{flex:1;min-height:0;position:relative;z-index:2;}
        .ah-canvas svg{position:absolute;inset:0;width:100%;height:100%;}

        .ah-scene-controls{position:absolute;top:22px;left:24px;z-index:20;display:flex;align-items:center;}

        .ah-left{
          position:relative;z-index:10;width:46%;
          padding:48px 78px 48px 60px;
          display:flex;flex-direction:column;justify-content:center;
          transition:background 1.2s ease;
          -webkit-mask-image:linear-gradient(to right,black 86%,rgba(0,0,0,0.95) 93%,transparent 100%);
          mask-image:linear-gradient(to right,black 86%,rgba(0,0,0,0.95) 93%,transparent 100%);
          overflow:hidden;
        }
        .ah-left.day  {background:#FFFFFF;}
        .ah-left.night{background:#0D1826;}
        .ah-dot-grid{position:absolute;inset:0;pointer-events:none;background-image:radial-gradient(circle,rgba(10,22,40,0.04) 1px,transparent 1px);background-size:24px 24px;}

        .ah-eyebrow{display:inline-flex;align-items:center;margin-bottom:18px;font-size:9px;font-weight:600;letter-spacing:.26em;text-transform:uppercase;color:var(--accent);}
        .ah-h1{
          font-family:'Playfair Display',Georgia,serif;font-weight:900;line-height:.88;letter-spacing:-.04em;
          color:var(--ink);margin-bottom:26px;margin-top:60px;transition:color .6s;text-align:left;
          display:flex;flex-direction:column;gap:2px;color:#2A4E7A;
        }
        .ah-h1 .ah-h1-line1{
          display:flex;flex-wrap:nowrap;align-items:baseline;gap:.14em;
          font-size:clamp(2.25rem, 8vw, clamp(48px,4.7vw,76px));
          white-space:nowrap;
        }
        .ah-h1 .ah-h1-line2{
          display:block;font-size:clamp(1.875rem, 7vw, clamp(34px,3.2vw,54px));
          letter-spacing:-.03em;margin:8px 0 0 auto;text-align:right;color:#2A4E7A;
        }
        .ah-h1 em{
          color:#A87418;font-style:normal;position:relative;display:inline-block;
          background:none;
          -webkit-background-clip:border-box;
          background-clip:border-box;
          text-shadow:0 6px 22px rgba(168,116,24,0.14);
        }
        .ah-h1 em::after{ content:none; }
        .ah-left.night .ah-h1{color:#D4E4F4;}
        .ah-left.night .ah-h1 .ah-h1-line2{color:#E4EEF8;}
        .ah-left.night .ah-h1 em{color:#EDBA56;text-shadow:0 8px 26px rgba(237,186,86,0.18);}

        /* ── Phase tracker ── */
        .ah-phases{
          position:relative;margin-bottom:26px;margin-top:0;
          padding:20px 18px 20px;
          border:1px solid var(--border);border-radius:18px;
          background:rgba(255,255,255,0.82);overflow:visible;
        }
        .ah-left.night .ah-phases{
          background:rgba(255,255,255,0.04);
          border-color:rgba(255,255,255,0.08);
        }
        .ah-phases-fill{display:none;}

        /* ── FIX: align-items:start so active icon expands downward freely ── */
        .ah-phase-row{
          display:grid;
          grid-template-columns:repeat(5,minmax(0,1fr));
          gap:10px;
          position:relative;
          z-index:1;
          align-items:start;          /* ← was: end — this was causing the squeeze */
        }

        /* ── FIX: removed min-height, let content size naturally ── */
        .ah-phase-item{
          display:flex;flex-direction:column;align-items:center;
          gap:8px;                    /* ← was: 5px — a bit more air between elements */
          padding-bottom:4px;
          transition:opacity .3s ease;
        }
        .ah-phase-item.done  { opacity:0.75; }
        .ah-phase-item.active{ opacity:1; }

        .ah-phase-num{
          font-size:9px;font-weight:700;letter-spacing:.2em;text-transform:uppercase;
          color:var(--muted-l);
          transition:color .3s;
          margin-top:2px;
        }
        .ah-phase-item.active .ah-phase-num{ color:var(--accent); }
        .ah-phase-item.done  .ah-phase-num{ color:rgba(200,146,42,0.55); }

        .ah-phase-label-txt{
          font-size:8px;font-weight:700;letter-spacing:.18em;text-transform:uppercase;
          color:var(--muted-l);line-height:1;
          transition:color .3s;
          display:none;
        }
        .ah-phase-name-txt{
          font-size:11px;font-weight:700;color:var(--muted);line-height:1.2;
          text-align:center;
          transition:color .3s;
        }
        .ah-phase-item.active .ah-phase-name-txt{ color:var(--ink); }
        .ah-phase-item.done  .ah-phase-name-txt{ color:var(--ink); }
        .ah-left.night .ah-phase-item.active .ah-phase-name-txt{ color:#D4E4F4; }
        .ah-left.night .ah-phase-item.done  .ah-phase-name-txt{ color:#C4D8EC; }

        .ah-phase-hint{
          font-size:9px;color:var(--accent);font-weight:600;
          letter-spacing:.1em;text-transform:uppercase;line-height:1;
          margin-top:1px;
        }
        .ah-left.night .ah-phase-hint{ color:rgba(237,186,86,0.92); }

        @keyframes checkPop{from{transform:scale(0)}to{transform:scale(1)}}

        @keyframes btnPulse{
          0%,100%{box-shadow:0 14px 34px rgba(42,78,122,0.28);}
          50%{box-shadow:0 18px 42px rgba(42,78,122,0.44);}
        }
        @keyframes arrowBounce{
          0%,100%{transform:translateX(0);}
          50%{transform:translateX(3px);}
        }

        .ah-actions{display:flex;gap:12px;flex-wrap:wrap;margin-bottom:28px;margin-top:auto;}
        .ah-cta-primary{
          font-family:'DM Sans',sans-serif;display:inline-flex;align-items:center;gap:10px;font-size:11px;font-weight:600;letter-spacing:.14em;text-transform:uppercase;
          color:#FFFFFF;background:linear-gradient(135deg,#3C689D 0%,#2A4E7A 52%,#1C375A 100%);
          padding:13px 26px;border:none;border-radius:6px;cursor:pointer;transition:transform .22s,box-shadow .22s,color .22s;
          position:relative;overflow:hidden;isolation:isolate;
          box-shadow:0 14px 34px rgba(42,78,122,0.28);animation:btnPulse 3s ease-in-out infinite;
        }
        .ah-cta-primary::before{
          content:'';position:absolute;inset:0;
          background:linear-gradient(120deg,rgba(255,255,255,0) 18%,rgba(153,191,234,0.34) 50%,rgba(255,255,255,0) 82%);
          transform:translateX(-135%) skewX(-12deg);
          animation:ctaFillSweep 2.4s ease-in-out infinite;
          z-index:0;
        }
        .ah-cta-primary svg{animation:arrowBounce 1.8s ease-in-out infinite;}
        .ah-cta-primary>*{position:relative;z-index:1;}
        .ah-cta-primary:hover{
          transform:translateY(-2px);
          box-shadow:0 18px 40px rgba(42,78,122,0.36);
          color:#FFFFFF;
        }
        @keyframes ctaFillSweep{
          0%{transform:translateX(-135%) skewX(-12deg);}
          55%{transform:translateX(135%);}
          100%{transform:translateX(135%);}
        }
        .ah-cta-secondary{font-family:'DM Sans',sans-serif;display:inline-flex;align-items:center;gap:8px;font-size:11px;font-weight:600;letter-spacing:.12em;text-transform:uppercase;color:var(--ink);background:transparent;padding:12px 20px;border:1.5px solid var(--border-s);border-radius:6px;cursor:pointer;transition:.2s;}
        .ah-cta-secondary:hover{border-color:var(--accent);color:var(--accent);background:var(--accent-pale);}

        .ah-metrics{display:flex;align-items:flex-end;gap:0;margin-top:auto;padding-top:24px;border-top:none;}
        .ah-metric{flex:1;padding:0 20px;position:relative;}
        .ah-metric:first-child{padding-left:0;}
        .ah-metric:last-child{padding-right:0;}
        .ah-metric+.ah-metric::before{content:'';position:absolute;left:0;top:10%;height:80%;width:1px;background:var(--border);}
        .ah-left.night .ah-metric+.ah-metric::before{background:rgba(255,255,255,0.07);}
        .ah-metric-value{
          font-family:'Playfair Display',serif;font-size:36px;font-weight:800;line-height:1;
          background:linear-gradient(135deg,#B98016,#EDBA56 55%,#C8922A);
          -webkit-background-clip:text;background-clip:text;color:transparent;
          letter-spacing:-.02em;
        }
        .ah-metric-label{font-size:8px;font-weight:600;letter-spacing:.22em;text-transform:uppercase;color:var(--muted-l);margin-top:5px;line-height:1.4;}

        @media(max-width:1000px){
          .ah-nav{padding:0 24px;}
          .ah-nav-links{display:none;}
          .ah-nav-toggle{display:flex;}
          .ah-nav-right{display:none;}
          .ah-hero{flex-direction:column;height:auto;}
          .ah-left{width:100%;-webkit-mask-image:none;mask-image:none;}
          .ah-right{position:relative;width:100%;min-height:440px;}
          .ah-right::after{display:none;}
          .ah-phases{padding:18px 16px 16px;overflow-x:auto;}
          .ah-phase-row{min-width:400px;}
        }
        @media(max-width:640px){
          .ah-left{padding:36px 20px 36px;}
          .ah-h1{font-size:clamp(32px,10vw,48px);}
        }
      `}</style>

      <div className="ah">
        <nav className="ah-nav">
          <a href="#" className="ah-brand">
            <div className="ah-logo">
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none">
                <polygon points="12,2 22,22 2,22" fill="white" opacity="0.9"/>
                <polygon points="12,9 17,22 7,22" fill="#C8922A" opacity="0.8"/>
              </svg>
            </div>
            <div className="ah-brand-text">
              <span className="ah-brand-name">Arvish</span>
              <span className="ah-brand-sub">Constructions</span>
            </div>
          </a>
          <button
            type="button"
            className="ah-nav-toggle"
            onClick={() => setMenuOpen(open => !open)}
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
          >
            <svg viewBox="0 0 20 16" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <rect x="0" y="1" width="20" height="2" rx="1" />
              <rect x="0" y="7" width="20" height="2" rx="1" />
              <rect x="0" y="13" width="20" height="2" rx="1" />
            </svg>
          </button>
          <nav className="ah-nav-links">
            <Link className="ah-nav-link" to="/about">About</Link>
            <Link className="ah-nav-link" to="/projects">Projects</Link>
            <Link className="ah-nav-link" to="/services">Capabilities</Link>
             <Link className="ah-nav-link" to="/our-story/sustainability">Sustainability</Link>
            <Link className="ah-nav-link" to="/careers">Careers</Link>
          </nav>
          <div className="ah-nav-right">
            <button className="ah-nav-cta" onClick={() => navigate('/contact')}>Start a Project</button>
          </div>
        </nav>

        <div className={`ah-mobile-menu${menuOpen ? " open" : ""}`}>
          <Link className="ah-nav-link" to="/about" onClick={() => setMenuOpen(false)}>About</Link>
          <Link className="ah-nav-link" to="/projects" onClick={() => setMenuOpen(false)}>Projects</Link>
          <Link className="ah-nav-link" to="/services" onClick={() => setMenuOpen(false)}>Capabilities</Link>
          <Link className="ah-nav-link" to="/our-story/sustainability" onClick={() => setMenuOpen(false)}>Sustainability</Link>
          <Link className="ah-nav-link" to="/careers" onClick={() => setMenuOpen(false)}>Careers</Link>
          <button className="ah-nav-cta" onClick={() => { setMenuOpen(false); navigate('/contact'); }}>
            Start a Project
          </button>
        </div>

        <div className="ah-hero">
          <div className={`ah-left ${isNight?"night":"day"}`}>
            <div className="ah-dot-grid"/>
            <div className="ah-eyebrow"></div>
            <h1 className="ah-h1">
              <span className="ah-h1-line1">
                <span>Shaping</span>
                <em>Skylines</em>
              </span>
              <span className="ah-h1-line2">Across India</span>
            </h1>

            <div className="ah-phases">
              <div
                className="ah-phases-fill"
                style={{ width: `calc((100% - 44px) * ${phase / (PHASES.length - 1)})` }}
              />
              <div className="ah-phase-row">
                {PHASES.map((ph, i) => {
                  const isDone   = i < phase;
                  const isActive = i === phase;
                  return (
                    <div
                      key={i}
                      className={`ah-phase-item${isActive ? " active" : ""}${isDone ? " done" : ""}`}
                    >
                      <PhaseIcon type={ph.icon} active={isActive} done={isDone} />
                      <div className="ah-phase-num">0{i + 1}</div>
                      <div className="ah-phase-name-txt">{ph.name}</div>
                      {isActive && (
                        <div className="ah-phase-hint">{ph.hint}</div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="ah-actions">
              <button className="ah-cta-primary" onClick={() => navigate('/projects')}>
                <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor"><polygon points="5,3 19,12 5,21"/></svg>
                Explore Projects
              </button>
              <button className="ah-cta-secondary">
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>
                  <polyline points="14,2 14,8 20,8"/>
                  <line x1="16" y1="13" x2="8" y2="13"/>
                  <line x1="16" y1="17" x2="8" y2="17"/>
                </svg>
                Download Brochure
              </button>
            </div>

            <div className="ah-metrics">
              {[["25+","Cities Delivered"],["98%","On-Time Completion"],["4.9★","Client Rating"]].map(([v,l])=>(
                <div className="ah-metric" key={l}>
                  <div className="ah-metric-value">{v}</div>
                  <div className="ah-metric-label">{l}</div>
                </div>
              ))}
            </div>
          </div>

          <div className={`ah-right ${isNight?"night":"day"}`} style={{background:skyBg}}>
            <div className="ah-scene-controls">
              <SkyToggle isNight={isNight} onToggle={()=>setIsNight(n=>!n)}/>
            </div>
            <div className="ah-canvas">
              <Scene isNight={isNight} pct={p.pct} phase={phase}/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}