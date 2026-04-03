import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const services = [
  {
    id: "pre",
    phase: "01",
    title: "The Vision",
    subtitle: "Pre-Construction",
    tagline: "Where every great structure begins.",
    items: ["Detailed Site Analysis", "Innovative Design Planning", "Accurate Project Estimation"],
    icon: "✧",
    accent:    "#4a7a9b",
    accentRgb: "74,122,155",
    bgCard:    "#deeaf2",
  },
  {
    id: "main",
    phase: "02",
    title: "The Craft",
    subtitle: "Construction",
    tagline: "Built with precision. Delivered with excellence.",
    items: ["Strong Structural Execution", "High-Quality Materials", "Efficient Project Management"],
    icon: "✦",
    accent:    "#9a6f48",
    accentRgb: "154,111,72",
    bgCard:    "#f0e4d6",
  },
  {
    id: "post",
    phase: "03",
    title: "The Legacy",
    subtitle: "Post-Construction",
    tagline: "Perfection in every detail.",
    items: ["Quality Inspection", "Premium Finishing", "Smooth Project Handover"],
    icon: "✶",
    accent:    "#3d8c7a",
    accentRgb: "61,140,122",
    bgCard:    "#d4ece7",
  },
  {
    id: "tech",
    phase: "04",
    title: "The Precision",
    subtitle: "Smart Integration",
    tagline: "Smart structures for modern living.",
    items: ["Smart Automation Systems", "Energy-Efficient Solutions", "Future-Ready Design"],
    icon: "◈",
    accent:    "#5e4fa0",
    accentRgb: "94,79,160",
    bgCard:    "#e0daf5",
  },
  {
    id: "care",
    phase: "05",
    title: "The Stewardship",
    subtitle: "Maintenance & Support",
    tagline: "Committed beyond completion.",
    items: ["Reliable Maintenance Support", "Regular Inspections", "Long-Term Service Care"],
    icon: "◉",
    accent:    "#8a7040",
    accentRgb: "138,112,64",
    bgCard:    "#ede3cc",
  },
];

const AUTO_INTERVAL = 3000;

function AnimBlueprint() {
  return (
    <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg"
      style={{ width:"100%", height:"100%", display:"block" }}>
      <defs>
        <radialGradient id="v-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%"  stopColor="#4a7a9b" stopOpacity="0.18"/>
          <stop offset="100%" stopColor="#4a7a9b" stopOpacity="0"/>
        </radialGradient>
        <style>{`
          @keyframes v-fd  { from{opacity:0}          to{opacity:1} }
          @keyframes v-dr  { to{stroke-dashoffset:0}              }
          @keyframes v-pop { from{opacity:0;transform:scale(0.4)} to{opacity:1;transform:scale(1)} }
          @keyframes v-topo {
            0%   { r:8;  opacity:0.55; stroke-width:0.8 }
            60%  { r:52; opacity:0.18; stroke-width:0.4 }
            100% { r:72; opacity:0;    stroke-width:0.2 }
          }
          .v-topo { fill:none; stroke:#4a7a9b; animation:v-topo 3s ease-out infinite; }
          .v-topo:nth-child(1){ animation-delay:0.0s }
          .v-topo:nth-child(2){ animation-delay:0.6s }
          .v-topo:nth-child(3){ animation-delay:1.2s }
          .v-topo:nth-child(4){ animation-delay:1.8s }
          .v-site { fill:rgba(74,122,155,0.07); stroke:#2e6080; stroke-width:1.4;
            stroke-dasharray:8 4; stroke-dashoffset:900; fill-opacity:0;
            animation: v-dr 1.6s 0.2s ease both, v-fd 0.8s 0.2s ease both; }
          .v-wall { fill:none; stroke:#1a3a52; stroke-width:2; stroke-linejoin:round;
            stroke-dasharray:600; stroke-dashoffset:600; }
          .v-wall-1 { animation: v-dr 1.2s 0.9s cubic-bezier(0.4,0,0.2,1) both }
          .v-wall-2 { animation: v-dr 0.7s 1.6s cubic-bezier(0.4,0,0.2,1) both }
          .v-wall-3 { animation: v-dr 0.6s 2.0s cubic-bezier(0.4,0,0.2,1) both }
          .v-wall-4 { animation: v-dr 0.5s 2.4s cubic-bezier(0.4,0,0.2,1) both }
          .v-part { stroke:#4a7a9b; stroke-width:1; stroke-dasharray:200; stroke-dashoffset:200; fill:none; }
          .v-part:nth-child(1){ animation: v-dr 0.4s 2.2s ease both }
          .v-part:nth-child(2){ animation: v-dr 0.4s 2.4s ease both }
          .v-part:nth-child(3){ animation: v-dr 0.4s 2.6s ease both }
          .v-part:nth-child(4){ animation: v-dr 0.4s 2.8s ease both }
          .v-room { opacity:0; animation: v-fd 0.4s ease both; }
          .v-r1{ animation-delay:2.3s } .v-r2{ animation-delay:2.5s }
          .v-r3{ animation-delay:2.7s } .v-r4{ animation-delay:2.9s }
          .v-lbl { font-family:monospace; font-size:7.5px; fill:#1a3a52;
            opacity:0; animation: v-fd 0.35s ease both; letter-spacing:0.08em; }
          .v-l1{ animation-delay:2.5s } .v-l2{ animation-delay:2.7s }
          .v-l3{ animation-delay:2.9s } .v-l4{ animation-delay:3.1s }
          .v-dim { stroke:#4a7a9b; stroke-width:0.7; opacity:0; stroke-dasharray:2 3;
            animation: v-fd 0.3s 3.0s ease both; }
          .v-dtx { font-family:monospace; font-size:7px; fill:#2e6080;
            opacity:0; animation: v-fd 0.3s 3.2s ease both; }
          @keyframes v-pin {
            0%  { transform:translateY(-30px); opacity:0 }
            55% { transform:translateY(4px);   opacity:1 }
            75% { transform:translateY(-3px) }
            100%{ transform:translateY(0px);   opacity:1 }
          }
          .v-pin { animation: v-pin 0.7s 1.8s cubic-bezier(0.2,1,0.3,1) both; transform-origin:200px 88px; }
          @keyframes v-ping {
            0%  { r:6;  opacity:0.9 }
            100%{ r:28; opacity:0   }
          }
          .v-ping { fill:none; stroke:#4a7a9b; stroke-width:1.2;
            animation: v-ping 1.2s 2.6s ease-out infinite; }
          @keyframes v-compass {
            from{ transform:rotate(-180deg); opacity:0 }
            to  { transform:rotate(0deg);    opacity:1 }
          }
          .v-compass { animation: v-compass 0.9s 0.6s cubic-bezier(0.34,1.56,0.64,1) both;
            transform-origin:352px 38px; }
        `}</style>
      </defs>
      <rect width="400" height="300" fill="#deeaf2"/>
      <rect width="400" height="300" fill="url(#v-glow)"/>
      <g transform="translate(200,88)">
        <circle className="v-topo"/>
        <circle className="v-topo"/>
        <circle className="v-topo"/>
        <circle className="v-topo"/>
      </g>
      <polygon className="v-site"
        points="48,268 52,42 210,28 358,48 370,260 240,278 140,282"/>
      <path className="v-wall v-wall-1" d="M 90 240 L 90 80 L 310 80 L 310 240 Z"/>
      <path className="v-wall v-wall-2" d="M 200 80 L 200 160 L 310 160"/>
      <g>
        <line className="v-part" x1="90"  y1="160" x2="200" y2="160"/>
        <line className="v-part" x1="155" y1="80"  x2="155" y2="160"/>
        <line className="v-part" x1="200" y1="160" x2="200" y2="240"/>
        <line className="v-part" x1="90"  y1="200" x2="200" y2="200"/>
      </g>
      <path className="v-wall v-wall-3" fill="none" d="M 155 200 Q 170 200 170 215"/>
      <path className="v-wall v-wall-4" fill="none" d="M 200 130 Q 215 130 215 145"/>
      <rect className="v-room v-r1" x="91"  y="81"  width="63"  height="78" fill="rgba(74,122,155,0.08)"/>
      <rect className="v-room v-r2" x="156" y="81"  width="43"  height="78" fill="rgba(74,122,155,0.06)"/>
      <rect className="v-room v-r3" x="91"  y="161" width="108" height="78" fill="rgba(74,122,155,0.1)"/>
      <rect className="v-room v-r4" x="201" y="161" width="108" height="78" fill="rgba(74,122,155,0.06)"/>
      <text className="v-lbl v-l1" x="122" y="124" textAnchor="middle">STUDY</text>
      <text className="v-lbl v-l2" x="178" y="124" textAnchor="middle">BED</text>
      <text className="v-lbl v-l3" x="145" y="184" textAnchor="middle">LIVING</text>
      <text className="v-lbl v-l4" x="255" y="204" textAnchor="middle">KITCHEN</text>
      <line className="v-dim" x1="90"  y1="258" x2="310" y2="258"/>
      <line className="v-dim" x1="90"  y1="252" x2="90"  y2="264"/>
      <line className="v-dim" x1="310" y1="252" x2="310" y2="264"/>
      <text className="v-dtx" x="200" y="271" textAnchor="middle">18.0 m</text>
      <line className="v-dim" x1="326" y1="80"  x2="326" y2="240"/>
      <line className="v-dim" x1="320" y1="80"  x2="332" y2="80"/>
      <line className="v-dim" x1="320" y1="240" x2="332" y2="240"/>
      <text className="v-dtx" x="344" y="163" textAnchor="middle">12.0 m</text>
      <g className="v-pin">
        <ellipse cx="200" cy="106" rx="10" ry="10" fill="#4a7a9b"/>
        <ellipse cx="200" cy="106" rx="4"  ry="4"  fill="white"/>
        <path fill="#4a7a9b" d="M 192 106 Q 192 118 200 126 Q 208 118 208 106 Z"/>
      </g>
      <circle className="v-ping" cx="200" cy="106"/>
      <g className="v-compass">
        <circle cx="352" cy="38" r="14" fill="white" fillOpacity="0.7" stroke="#2e6080" strokeWidth="0.8"/>
        <polygon fill="#2e6080" points="352,26 354.5,36 352,34 349.5,36"/>
        <polygon fill="#aac4d8" points="352,50 354.5,40 352,42 349.5,40"/>
        <polygon fill="#aac4d8" points="340,38 350,35.5 348,38 350,40.5"/>
        <polygon fill="#aac4d8" points="364,38 354,35.5 356,38 354,40.5"/>
        <text x="352" y="30" textAnchor="middle"
          style={{fontFamily:"monospace",fontSize:"6px",fill:"#1a3a52",fontWeight:"bold"}}>N</text>
      </g>
    </svg>
  );
}

function AnimConstruction() {
  const rows = [
    { y:228, bricks:[{x:92,w:56},{x:154,w:56},{x:216,w:56},{x:276,w:52}],  delay:"0.10s" },
    { y:200, bricks:[{x:108,w:54},{x:168,w:54},{x:228,w:54},{x:282,w:38}], delay:"0.28s" },
    { y:173, bricks:[{x:96,w:56},{x:158,w:56},{x:220,w:56}],               delay:"0.46s" },
    { y:147, bricks:[{x:108,w:54},{x:168,w:54},{x:228,w:54}],              delay:"0.64s" },
    { y:122, bricks:[{x:96,w:56},{x:158,w:56},{x:220,w:56}],               delay:"0.82s" },
    { y:97,  bricks:[{x:108,w:54,win:true},{x:168,w:54,win:true},{x:228,w:54,win:true}], delay:"1.00s" },
  ];
  return (
    <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg"
      style={{ width:"100%", height:"100%", display:"block" }}>
      <defs>
        <style>{`
          @keyframes cn-rise { from{opacity:0;transform:translateY(12px)} to{opacity:1;transform:translateY(0)} }
          @keyframes cn-roof { from{opacity:0;transform:translateY(10px)} to{opacity:1;transform:translateY(0)} }
          @keyframes cn-crane{ from{opacity:0} to{opacity:1} }
          @keyframes cn-swing{ 0%,100%{transform:rotate(-5deg)} 50%{transform:rotate(5deg)} }
          @keyframes cn-dust { 0%{opacity:0;r:2} 45%{opacity:0.45} 100%{opacity:0;r:10} }
          @keyframes cn-scaf { from{opacity:0} to{opacity:0.32} }
        `}</style>
      </defs>
      <rect width="400" height="300" fill="#f0e4d6"/>
      <rect x="50" y="255" width="300" height="7" rx="2" fill="#9a6f48" opacity="0.22"/>
      <g style={{animation:"cn-scaf 0.3s 0.04s ease both",opacity:0}}>
        <line stroke="#b5845a" strokeWidth="1" x1="88"  y1="255" x2="88"  y2="86"/>
        <line stroke="#b5845a" strokeWidth="1" x1="312" y1="255" x2="312" y2="86"/>
        {[190,158,126,94].map(y => <line key={y} stroke="#b5845a" strokeWidth="0.7" x1="82" y1={y} x2="318" y2={y}/>)}
      </g>
      {rows.map((row,ri) => (
        <g key={ri} style={{animation:`cn-rise 0.42s ${row.delay} cubic-bezier(0.2,1,0.3,1) both`,opacity:0}}>
          {row.bricks.map((b,bi) => (
            <g key={bi}>
              <rect x={b.x} y={row.y} width={b.w} height={24} rx="1"
                fill={bi%2===0?"#c4956a":"#b5845a"} stroke="#f0e4d6" strokeWidth="1.5"/>
              {b.win && <rect x={b.x+10} y={row.y+4} width={b.w-20} height={16} rx="1"
                fill="#c8dcea" stroke="#9a7055" strokeWidth="0.8" opacity="0.85"/>}
            </g>
          ))}
          {ri%2===0 && <circle r="5" cx={row.bricks[0].x+28} cy={row.y}
            fill="#9a6f48" opacity="0"
            style={{animation:`cn-dust 0.38s ${row.delay} ease both`}}/>}
        </g>
      ))}
      <g style={{animation:"cn-roof 0.48s 1.18s cubic-bezier(0.2,1,0.3,1) both",opacity:0}}>
        <polygon fill="#7a5030" stroke="#f0e4d6" strokeWidth="1.5" points="86,97 200,60 314,97"/>
        <line stroke="#f0e4d6" strokeWidth="1" x1="200" y1="60" x2="200" y2="97"/>
      </g>
      <g style={{animation:"cn-crane 0.55s 1.55s ease both",opacity:0}}>
        <line stroke="#9a6f48" strokeWidth="2.5" x1="320" y1="260" x2="320" y2="46"/>
        <line stroke="#9a6f48" strokeWidth="2"   x1="242" y1="46"  x2="370" y2="46"/>
        <line stroke="#9a6f48" strokeWidth="1.5" x1="370" y1="46"  x2="378" y2="70"/>
        <g style={{animation:"cn-swing 2.2s 2.1s ease-in-out infinite",transformOrigin:"320px 46px"}}>
          <line stroke="#888" strokeWidth="1" x1="320" y1="46" x2="320" y2="82"/>
          <path fill="none" stroke="#888" strokeWidth="1.5" d="M315 82 Q311 91 317 94 Q323 97 326 91"/>
        </g>
      </g>
    </svg>
  );
}

function AnimPostConstruction() {
  return (
    <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg"
      style={{ width:"100%", height:"100%", display:"block" }}>
      <defs>
        <linearGradient id="pc-sh" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%"   stopColor="white" stopOpacity="0"/>
          <stop offset="50%"  stopColor="white" stopOpacity="0.72"/>
          <stop offset="100%" stopColor="white" stopOpacity="0"/>
        </linearGradient>
        <style>{`
          @keyframes pc-pop  { from{opacity:0;transform:scale(0.87)} to{opacity:1;transform:scale(1)} }
          @keyframes pc-fade { from{opacity:0} to{opacity:1} }
          @keyframes pc-draw { to{stroke-dashoffset:0} }
          @keyframes pc-shine {
            0%{opacity:0;transform:translateX(-130px)} 18%{opacity:1} 82%{opacity:1}
            100%{opacity:0;transform:translateX(540px)}
          }
          @keyframes pc-spark {
            0%{opacity:0;transform:scale(0)} 50%{opacity:1;transform:scale(1.25)} 100%{opacity:0.7;transform:scale(1)}
          }
          @keyframes pc-ring { 0%,100%{r:29;opacity:0.14} 50%{r:40;opacity:0} }
        `}</style>
      </defs>
      <rect width="400" height="300" fill="#d4ece7"/>
      <polygon fill="#b8dcd6" stroke="#3d8c7a" strokeWidth="1" points="42,34 358,34 358,246 42,246"/>
      <rect fill="none" stroke="#3d8c7a" strokeWidth="0.6" strokeDasharray="5,4" x="60" y="50" width="102" height="86" opacity="0.5"/>
      <rect fill="none" stroke="#3d8c7a" strokeWidth="0.6" strokeDasharray="5,4" x="238" y="50" width="102" height="86" opacity="0.5"/>
      <rect fill="#a0cfc8" x="42"  y="234" width="316" height="12"/>
      <polygon fill="#90c0b8" points="42,246 358,246 378,282 22,282"/>
      {[90,176,262].map(x => <line key={x} stroke="#88b8b0" strokeWidth="0.5" x1={x} y1="246" x2={x+26} y2="282" opacity="0.5"/>)}
      <g style={{animation:"pc-pop 0.52s 0.28s cubic-bezier(0.2,1,0.3,1) both",opacity:0,transformOrigin:"196px 204px"}}>
        <rect fill="#6aafaa" rx="4" x="84" y="194" width="164" height="40"/>
        <rect fill="#58a09a" rx="3" x="84" y="182" width="164" height="16"/>
        <rect fill="#58a09a" rx="3" x="80" y="182" width="16" height="54"/>
        <rect fill="#58a09a" rx="3" x="236" y="182" width="16" height="54"/>
      </g>
      <g style={{animation:"pc-pop 0.52s 0.52s cubic-bezier(0.2,1,0.3,1) both",opacity:0,transformOrigin:"196px 228px"}}>
        <rect fill="#a8d8d2" stroke="#3d8c7a" strokeWidth="1" rx="2" x="148" y="228" width="90" height="6"/>
        <line stroke="#3d8c7a" strokeWidth="1.5" x1="160" y1="234" x2="160" y2="246"/>
        <line stroke="#3d8c7a" strokeWidth="1.5" x1="228" y1="234" x2="228" y2="246"/>
      </g>
      <g style={{animation:"pc-pop 0.52s 0.76s cubic-bezier(0.2,1,0.3,1) both",opacity:0,transformOrigin:"200px 74px"}}>
        <line stroke="#3d8c7a" strokeWidth="1.5" x1="200" y1="34" x2="200" y2="62"/>
        <ellipse fill="#fffbe6" stroke="#c9a96e" strokeWidth="1.2" cx="200" cy="70" rx="22" ry="14"/>
        <ellipse fill="rgba(201,169,110,0.16)" cx="200" cy="78" rx="36" ry="24"/>
      </g>
      <g style={{animation:"pc-pop 0.52s 1.00s cubic-bezier(0.2,1,0.3,1) both",opacity:0,transformOrigin:"200px 256px"}}>
        <ellipse fill="none" stroke="#3d8c7a" strokeWidth="1.2" strokeDasharray="4,3" cx="200" cy="256" rx="78" ry="16"/>
        <ellipse fill="none" stroke="#3d8c7a" strokeWidth="0.6" cx="200" cy="256" rx="56" ry="11"/>
      </g>
      <rect x="0" y="0" width="92" height="300" fill="url(#pc-sh)"
        style={{animation:"pc-shine 1.4s 1.18s ease both"}}/>
      <g style={{animation:"pc-fade 0.3s 1.28s ease both",opacity:0}}>
        <rect fill="white" stroke="#b8dcd6" strokeWidth="1" rx="6" x="296" y="46" width="80" height="98"/>
        <rect fill="#3d8c7a" rx="4" x="296" y="46" width="80" height="22"/>
        <text x="336" y="61" textAnchor="middle"
          style={{fontFamily:"monospace",fontSize:"9px",fill:"white",letterSpacing:"1px"}}>QUALITY</text>
        {[0,1,2].map(i => (
          <g key={i} transform={`translate(308,${88+i*24})`}>
            <circle r="10" cx="0" cy="0" fill="none" stroke="#3d8c7a" strokeWidth="1.5"
              strokeDasharray="63" strokeDashoffset="63"
              style={{animation:`pc-draw 0.4s ${1.5+i*0.24}s ease both`}}/>
            <path fill="none" stroke="#3d8c7a" strokeWidth="2.2"
              strokeLinecap="round" strokeLinejoin="round" d="M -5 0 L -1 5 L 7 -5"
              strokeDasharray="22" strokeDashoffset="22"
              style={{animation:`pc-draw 0.3s ${1.65+i*0.24}s ease both`}}/>
            <g style={{animation:`pc-spark 0.5s ${1.88+i*0.24}s ease both`,opacity:0}}>
              <line stroke="#c9a96e" strokeWidth="1.2" x1="13" y1="-11" x2="15" y2="-15"/>
              <line stroke="#c9a96e" strokeWidth="1.2" x1="15" y1="-8"  x2="19" y2="-8"/>
            </g>
          </g>
        ))}
        <circle cx="336" cy="96" r="29" fill="none" stroke="#3d8c7a" strokeWidth="0.8"
          style={{animation:"pc-ring 2.4s 2.4s ease-in-out infinite"}}/>
      </g>
    </svg>
  );
}

function AnimSmartIntegration() {
  return (
    <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg"
      style={{ width:"100%", height:"100%", display:"block" }}>
      <defs>
        <linearGradient id="smart-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"  stopColor="#0a1929"/>
          <stop offset="100%" stopColor="#051220"/>
        </linearGradient>
        <linearGradient id="building-grad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"  stopColor="#5e4fa0"/>
          <stop offset="100%" stopColor="#3d2a6d"/>
        </linearGradient>
        <style>{`
          @keyframes s-fd  { from{opacity:0} to{opacity:1} }
          @keyframes s-grow { from{transform:scale(0)} to{transform:scale(1)} }
          @keyframes s-draw { from{stroke-dashoffset:300} to{stroke-dashoffset:0} }
          .s-building { animation: s-draw 0.8s ease 0.2s both; fill:none; stroke:#5e4fa0; stroke-width:2; stroke-dasharray:300; }
          @keyframes s-device {
            0% { opacity:0; r:3 }
            50% { r:7; opacity:1 }
            100% { opacity:0.8; r:5 }
          }
          .s-device { animation: s-device 0.6s ease-out both; }
          .s-d1 { animation-delay:0.9s }
          .s-d2 { animation-delay:1.2s }
          .s-d3 { animation-delay:1.5s }
          .s-d4 { animation-delay:1.8s }
          .s-d5 { animation-delay:2.1s }
          @keyframes s-flow {
            0%,100% { opacity:0.3; stroke-width:1 }
            50% { opacity:1; stroke-width:2 }
          }
          .s-flow { animation: s-flow 1.4s ease-in-out infinite; }
          .s-f1 { animation-delay:1.1s }
          .s-f2 { animation-delay:1.3s }
          .s-f3 { animation-delay:1.5s }
          .s-f4 { animation-delay:1.7s }
          @keyframes s-hub {
            0%,100% { r:6; opacity:1 }
            50% { r:9; opacity:0.6 }
          }
          .s-hub { animation: s-hub 1.2s ease-in-out infinite; fill:#b090f0; }
          @keyframes s-ripple {
            0% { r:2; opacity:1 }
            100% { r:28; opacity:0 }
          }
          .s-ripple { fill:none; stroke:#7060b8; }
          .s-r1 { animation: s-ripple 1.5s ease-out infinite; }
          .s-r2 { animation: s-ripple 1.5s ease-out 0.5s infinite; }
          .s-r3 { animation: s-ripple 1.5s ease-out 1.0s infinite; }
          .s-label { font-family:monospace; font-size:7px; fill:#a090d8; opacity:0; animation: s-fd 0.3s ease both; }
          .s-l1 { animation-delay:1.0s }
          .s-l2 { animation-delay:1.3s }
          .s-l3 { animation-delay:1.6s }
          .s-l4 { animation-delay:1.9s }
          .s-l5 { animation-delay:2.2s }
          @keyframes s-bar {
            from { height:0; opacity:0 }
            to { opacity:1 }
          }
          .s-bar { animation: s-bar 0.5s cubic-bezier(0.2,1,0.3,1) both; transform-origin:bottom; }
          .s-b1 { animation-delay:2.5s }
          .s-b2 { animation-delay:2.7s }
          .s-b3 { animation-delay:2.9s }
          .s-status { font-family:monospace; font-size:8px; fill:#d0c0f8; opacity:0; animation: s-fd 0.4s ease; }
          .s-st1 { animation-delay:3.1s }
          .s-st2 { animation-delay:3.3s }
        `}</style>
      </defs>
      <rect width="400" height="300" fill="url(#smart-bg)"/>
      <defs>
        <pattern id="smart-grid" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#5040a0" strokeWidth="0.3" opacity="0.1"/>
        </pattern>
      </defs>
      <rect width="400" height="300" fill="url(#smart-grid)"/>
      <g>
        <path className="s-building" d="M 60 80 L 60 240 L 160 240 L 160 80 Z"/>
        <rect className="s-building" x="70" y="100" width="35" height="35" rx="3" style={{animationDelay:"0.5s"}}/>
        <rect className="s-building" x="115" y="100" width="35" height="35" rx="3" style={{animationDelay:"0.6s"}}/>
        <rect className="s-building" x="70" y="155" width="35" height="35" rx="3" style={{animationDelay:"0.7s"}}/>
        <rect className="s-building" x="115" y="155" width="35" height="35" rx="3" style={{animationDelay:"0.8s"}}/>
      </g>
      <g>
        <circle className="s-device s-d1" cx="50" cy="100" fill="#ffc107"/>
        <text className="s-label s-l1" x="50" y="125" textAnchor="middle">LIGHT</text>
      </g>
      <g>
        <circle className="s-device s-d2" cx="190" cy="100" fill="#ff6b6b"/>
        <text className="s-label s-l2" x="190" y="125" textAnchor="middle">TEMP</text>
      </g>
      <g>
        <circle className="s-device s-d3" cx="50" cy="240" fill="#4facfe"/>
        <text className="s-label s-l3" x="50" y="265" textAnchor="middle">CAMERA</text>
      </g>
      <g>
        <circle className="s-device s-d4" cx="190" cy="240" fill="#00d4ff"/>
        <text className="s-label s-l4" x="190" y="265" textAnchor="middle">DOOR</text>
      </g>
      <circle className="s-hub" cx="120" cy="160" r="6" style={{animationDelay:"1.3s"}}/>
      <circle className="s-ripple s-r1" cx="120" cy="160"/>
      <circle className="s-ripple s-r2" cx="120" cy="160"/>
      <circle className="s-ripple s-r3" cx="120" cy="160"/>
      <line className="s-flow s-f1" x1="120" y1="160" x2="50" y2="100" stroke="#7060b8" strokeWidth="1.5"/>
      <line className="s-flow s-f2" x1="120" y1="160" x2="190" y2="100" stroke="#7060b8" strokeWidth="1.5"/>
      <line className="s-flow s-f3" x1="120" y1="160" x2="50" y2="240" stroke="#7060b8" strokeWidth="1.5"/>
      <line className="s-flow s-f4" x1="120" y1="160" x2="190" y2="240" stroke="#7060b8" strokeWidth="1.5"/>
      <g>
        <text x="250" y="95" style={{fontFamily:"monospace", fontSize:"10px", fill:"#7060b8", fontWeight:"bold"}}>EFFICIENCY</text>
        <rect x="240" y="220" width="15" height="0" className="s-bar s-b1" fill="#00d4ff"/>
        <rect x="260" y="200" width="15" height="0" className="s-bar s-b2" fill="#4facfe"/>
        <rect x="280" y="180" width="15" height="0" className="s-bar s-b3" fill="#7060b8"/>
        <circle cx="248" cy="160" r="3" fill="#3d8c7a"/>
        <text className="s-status s-st1" x="260" y="165">OPTIMIZED</text>
        <circle cx="248" cy="140" r="3" fill="#7060b8"/>
        <text className="s-status s-st2" x="260" y="145">CONNECTED</text>
      </g>
      <text x="120" y="30" style={{fontFamily:"monospace", fontSize:"11px", fill:"#a090d8", letterSpacing:"0.15em", opacity:0, animation:"s-fd 0.4s 0.3s ease both", textAnchor:"middle"}}>
        SMART AUTOMATION
      </text>
    </svg>
  );
}

function AnimMaintenance() {
  const makeTeeth = (cx,cy,r,teeth,h) =>
    Array.from({length:teeth},(_,i) => {
      const a  = (i/teeth)*Math.PI*2;
      const a1 = ((i+0.14)/teeth)*Math.PI*2;
      const a2 = ((i+0.86)/teeth)*Math.PI*2;
      const a3 = ((i+1.00)/teeth)*Math.PI*2;
      return `${cx+r*Math.cos(a)},${cy+r*Math.sin(a)} `+
             `${cx+(r+h)*Math.cos(a1)},${cy+(r+h)*Math.sin(a1)} `+
             `${cx+(r+h)*Math.cos(a2)},${cy+(r+h)*Math.sin(a2)} `+
             `${cx+r*Math.cos(a3)},${cy+r*Math.sin(a3)}`;
    }).join(" ");
  return (
    <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg"
      style={{ width:"100%", height:"100%", display:"block" }}>
      <defs>
        <style>{`
          @keyframes mt-cw  { from{transform:rotate(0deg)}   to{transform:rotate(360deg)} }
          @keyframes mt-ccw { from{transform:rotate(0deg)}   to{transform:rotate(-360deg)} }
          @keyframes mt-gin { from{opacity:0;transform:scale(0.65)} to{opacity:1;transform:scale(1)} }
          @keyframes mt-hb  { to{stroke-dashoffset:0} }
          @keyframes mt-pulse { 0%,100%{r:5;opacity:0.95} 50%{r:8;opacity:0.18} }
          @keyframes mt-fade  { from{opacity:0} to{opacity:1} }
          @keyframes mt-shield{ to{stroke-dashoffset:0} }
          @keyframes mt-tick  { to{stroke-dashoffset:0} }
          @keyframes mt-rock  { 0%,100%{transform:rotate(-10deg)} 50%{transform:rotate(10deg)} }
          .mt-gl { animation:mt-gin 0.4s 0.18s ease both, mt-cw  10s  0.6s  linear infinite; transform-origin:152px 148px; }
          .mt-gs { animation:mt-gin 0.4s 0.32s ease both, mt-ccw 6.6s 0.74s linear infinite; transform-origin:234px 108px; }
          .mt-gx { animation:mt-gin 0.4s 0.46s ease both, mt-cw  4.8s 0.88s linear infinite; transform-origin:236px 192px; }
        `}</style>
      </defs>
      <rect width="400" height="300" fill="#ede3cc"/>
      <g className="mt-gl">
        <polygon points={makeTeeth(152,148,38,12,10)} fill="#c8a870" stroke="#8a7040" strokeWidth="0.5"/>
        <circle cx="152" cy="148" r="38" fill="#c8a870" stroke="#8a7040" strokeWidth="1"/>
        <circle cx="152" cy="148" r="16" fill="#ede3cc" stroke="#8a7040" strokeWidth="1"/>
        <circle cx="152" cy="148" r="4"  fill="#8a7040"/>
        {[0,60,120,180,240,300].map(d => (
          <line key={d} stroke="#8a7040" strokeWidth="1.5"
            x1={152+10*Math.cos(d*Math.PI/180)} y1={148+10*Math.sin(d*Math.PI/180)}
            x2={152+14*Math.cos(d*Math.PI/180)} y2={148+14*Math.sin(d*Math.PI/180)}/>
        ))}
      </g>
      <g className="mt-gs">
        <polygon points={makeTeeth(234,108,24,8,7)} fill="#dfc090" stroke="#8a7040" strokeWidth="0.5"/>
        <circle cx="234" cy="108" r="24" fill="#dfc090" stroke="#8a7040" strokeWidth="1"/>
        <circle cx="234" cy="108" r="10" fill="#ede3cc" stroke="#8a7040" strokeWidth="1"/>
        <circle cx="234" cy="108" r="3"  fill="#8a7040"/>
      </g>
      <g className="mt-gx">
        <polygon points={makeTeeth(236,192,15,6,6)} fill="#c8a870" stroke="#8a7040" strokeWidth="0.5"/>
        <circle cx="236" cy="192" r="15" fill="#c8a870" stroke="#8a7040" strokeWidth="1"/>
        <circle cx="236" cy="192" r="6"  fill="#ede3cc" stroke="#8a7040" strokeWidth="0.8"/>
      </g>
      <path fill="none" stroke="#8a7040" strokeWidth="2" strokeLinecap="round"
        d="M 12 250 L 50 250 L 60 230 L 70 270 L 80 210 L 90 270 L 100 250 L 372 250"
        strokeDasharray="600" strokeDashoffset="600"
        style={{animation:"mt-hb 1.6s 0.8s ease both"}}/>
      <circle cx="330" cy="250" r="5" fill="#8a7040"
        style={{animation:"mt-pulse 1.4s 2.5s ease-in-out infinite"}}/>
      <path fill="#8a7040" opacity="0"
        d="M 330 38 L 372 54 L 372 96 Q 372 120 351 132 Q 330 120 330 96 Z"
        style={{animation:"mt-fade 0.4s 1.28s ease both"}}/>
      <path fill="none" stroke="#8a7040" strokeWidth="2"
        d="M 330 38 L 372 54 L 372 96 Q 372 120 351 132 Q 330 120 330 96 Z"
        strokeDasharray="260" strokeDashoffset="260"
        style={{animation:"mt-shield 0.7s 1.08s ease both"}}/>
      <path fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
        d="M 340 82 L 349 93 L 365 70"
        strokeDasharray="40" strokeDashoffset="40"
        style={{animation:"mt-tick 0.4s 1.78s ease both"}}/>
      <g style={{opacity:0,animation:"mt-fade 0.4s 0.58s ease both, mt-rock 2.8s 1.5s ease-in-out infinite",transformOrigin:"42px 248px"}}>
        <ellipse cx="42" cy="232" rx="8" ry="5"   fill="#c9a96e" stroke="#8a7040" strokeWidth="0.8"/>
        <rect x="38" y="234" width="8" height="24" rx="2" fill="#c8a870" stroke="#8a7040" strokeWidth="0.8"/>
        <ellipse cx="42" cy="259" rx="7" ry="4"   fill="#c9a96e" stroke="#8a7040" strokeWidth="0.8"/>
      </g>
      <g style={{animation:"mt-fade 0.5s 1.68s ease both",opacity:0}}>
        <rect x="294" y="166" width="76" height="70" rx="4" fill="white" stroke="#d4c090" strokeWidth="1"/>
        <rect x="294" y="166" width="76" height="21" rx="4" fill="#8a7040"/>
        <rect x="294" y="180" width="76" height="7" fill="#8a7040"/>
        {[320,344].map(x => <line key={x} stroke="#d4c090" strokeWidth="0.5" x1={x} y1="187" x2={x} y2="236"/>)}
        {[204,219].map(y => <line key={y} stroke="#d4c090" strokeWidth="0.5" x1="294" y1={y} x2="370" y2={y}/>)}
        <path fill="none" stroke="#3d8c7a" strokeWidth="2"
          strokeLinecap="round" strokeLinejoin="round"
          d="M 302 211 L 307 217 L 315 205"
          strokeDasharray="20" strokeDashoffset="20"
          style={{animation:"mt-tick 0.32s 2.18s ease both"}}/>
        <circle cx="332" cy="211" r="4" fill="#c9a96e" opacity="0.75"/>
        <circle cx="356" cy="211" r="4" fill="#c9a96e" opacity="0.52"/>
        <circle cx="332" cy="226" r="4" fill="#3d8c7a" opacity="0.65"/>
      </g>
    </svg>
  );
}

const ANIMATIONS = [
  AnimBlueprint,
  AnimConstruction,
  AnimPostConstruction,
  AnimSmartIntegration,
  AnimMaintenance,
];

export default function ServicesUltraPremium() {
  const navigate = useNavigate();
  const [active, setActive]       = useState(0);
  const [animating, setAnimating] = useState(false);
  const [loaded, setLoaded]       = useState(false);
  const [paused, setPaused]       = useState(false);
  const [animKeys, setAnimKeys]   = useState([0,0,0,0,0]);
  const touchStartX = useRef(null);
  const autoRef     = useRef(null);
  const resumeRef   = useRef(null);

  const servicePaths = {
    pre:  '/services/pre-construction',
    main: '/services/construction',
    post: '/services/post-construction',
    tech: '/services/smart-integration',
    care: '/services/maintenance-support',
  };

  useEffect(() => { setLoaded(true); }, []);

  useEffect(() => {
    if (paused) return;
    autoRef.current = setInterval(() => {
      setActive(prev => {
        const next = (prev + 1) % services.length;
        setAnimKeys(k => { const n = [...k]; n[next]++; return n; });
        return next;
      });
    }, AUTO_INTERVAL);
    return () => clearInterval(autoRef.current);
  }, [paused]);

  const handleActivate = (i) => {
    if (animating) return;
    if (i === active) {
      navigate(servicePaths[services[i].id]);
      return;
    }
    setAnimating(true);
    setActive(i);
    setAnimKeys(k => { const n = [...k]; n[i]++; return n; });
    setPaused(true);
    setTimeout(() => setAnimating(false), 800);
    clearTimeout(resumeRef.current);
    resumeRef.current = setTimeout(() => setPaused(false), 10000);
    setTimeout(() => { navigate(servicePaths[services[i].id]); }, 900);
  };

  const handleTouchStart = (e) => { touchStartX.current = e.touches[0].clientX; };
  const handleTouchEnd   = (e) => {
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
          padding: 48px 5%;

          background: #ffffff;
          color: #1a1a1a;
          font-family: 'Cormorant Garamond', serif;
          position: relative;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 60px;
        }

        .bg-mesh {
          position: absolute;
          inset: 0;
          background:
            radial-gradient(circle at 50% -20%, rgba(var(--ar), 0.08) 0%, transparent 50%),
            radial-gradient(circle at 0% 100%,  rgba(var(--ar), 0.05) 0%, transparent 40%);
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
          color: rgba(0,0,0,0.6);
          margin-bottom: 20px;
          display: block;
        }

        .main-title {
          font-size: clamp(32px, 6vw, 70px);
          font-weight: 300;
          line-height: 0.9;
          margin: 0 0 8px 0;
          letter-spacing: -0.03em;
          color: #1a1a1a;
        }

        .title-accent {
          display: inline-block;
          background: linear-gradient(135deg, #1a1a1a 0%, #475569 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          font-weight: 500;
        }

        .title-subtitle {
          font-family: 'Inter', sans-serif;
          font-size: clamp(14px, 2vw, 18px);
          color: rgba(0,0,0,0.55);
          font-weight: 300;
          letter-spacing: 0.05em;
          margin: 0;
        }

        /* ── STAGE — DESKTOP ── */
          .stage {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
            width: min(100%, 100vw);
            margin: 0 auto;
            height: clamp(420px, 80vh, 500px);
            z-index: 2;
          }

        .card {
          position: relative;
          border-radius: 4px;
          overflow: hidden;
          transition: all 0.8s cubic-bezier(0.2, 1, 0.3, 1);
          cursor: pointer;
          flex-shrink: 0;
        }

          .card.side {
            width: 60px;
            height: clamp(380px, 75vh, 450px);

          filter: grayscale(1) brightness(0.85);
          opacity: 0.6;
        }

        .card.side:hover {
          opacity: 0.82;
          filter: grayscale(0.5) brightness(0.92);
          height: 470px;
        }

          .card.active {
            width: calc(100vw - 140px);
            height: clamp(420px, 80vh, 550px);

          box-shadow: 0 40px 100px -20px rgba(0,0,0,0.22);
        }

        .card-anim-wrapper {
          position: absolute;
          inset: 0;
          transform: scale(1.08);
          transition: transform 1.2s cubic-bezier(0.2, 1, 0.3, 1);
          overflow: hidden;
        }

        .card.active .card-anim-wrapper {
          transform: scale(1);
        }

        .card-anim-wrapper > div {
          width: 100%;
          height: 100%;
          position: relative;
        }

        .card-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to top,
            rgba(0,0,0,0.82) 0%,
            rgba(0,0,0,0.55) 28%,
            rgba(0,0,0,0.18) 60%,
            transparent 100%
          );
          z-index: 2;
        }

        .card-content {
          position: absolute;
          bottom: 0;
          left: 0;
          padding: 50px;
          width: 100%;
          box-sizing: border-box;
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.6s 0.3s ease;
          z-index: 3;
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
          flex-shrink: 0;
        }

        /* ── FOOTER NAV ── */
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
          background: rgba(0,0,0,0.1);
          position: relative;
        }

        .progress-bar {
          position: absolute;
          left: 0; top: 0;
          height: 100%;
          background: #1a1a1a;
          transition: width 0.1s linear;
        }

        .nav-items {
          display: flex;
          justify-content: space-between;
        }

        .nav-btn {
          background: none;
          border: none;
          color: rgba(0,0,0,0.3);
          font-family: 'Montserrat', sans-serif;
          font-size: 11px;
          letter-spacing: 0.2em;
          cursor: pointer;
          transition: color 0.3s ease;
          padding: 10px;
        }

        .nav-btn.active { color: #1a1a1a; }

        /* ══════════════════════════════════════════
           MOBILE — replicate desktop feel exactly
        ══════════════════════════════════════════ */
        @media (max-width: 900px) {

          .ultra-services-container {
            padding: 48px 0 48px 0;
            gap: 36px;
            overflow: hidden;
          }

          .header-group {
            padding: 0 20px;
          }

          /* Stage: horizontal strip, same concept as desktop —
             active card is wide, side cards are narrow slivers */
          .stage {
            flex-direction: row;
            align-items: stretch;
            justify-content: flex-start;
            gap: 6px;
            width: 100%;
            max-width: 100%;
            height: auto;
            /* no scroll — cards fill the viewport width proportionally */
            overflow: visible;
            padding: 0 12px;
            box-sizing: border-box;
          }

          /* Side cards: slim vertical slivers exactly like desktop */
          .card.side {
            /* each side card gets an equal thin slice */
            width: 36px;
            height: 460px;
            min-width: 36px;
            flex-shrink: 0;
            filter: grayscale(0.6) brightness(0.88);
            opacity: 0.72;
          }

          .card.side:hover {
            height: 460px; /* no grow on mobile hover */
            opacity: 0.82;
            filter: grayscale(0.3) brightness(0.92);
          }

          /* Active card fills remaining width */
          .card.active {
            flex: 1 1 0;
            min-width: 0;
            height: 460px;
            box-shadow: 0 20px 60px -10px rgba(0,0,0,0.28);
          }

          /* anim wrapper — no scale trick on mobile, always show full */
          .card-anim-wrapper {
            transform: scale(1);
          }

          .card.active .card-anim-wrapper {
            transform: scale(1);
          }

          /* Content inside active card */
          .card-content {
            padding: 22px 20px 24px 20px;
          }

          .card-subtitle {
            font-size: 9px;
            letter-spacing: 0.35em;
            margin-bottom: 8px;
          }

          .card-title {
            font-size: clamp(28px, 7vw, 42px);
            margin-bottom: 8px;
          }

          .card-tagline {
            font-size: 13px;
            margin-bottom: 18px;
            line-height: 1.45;
          }

          /* Feature list: stacked vertically like desktop but compact */
          .feature-list {
            flex-direction: column;
            gap: 10px;
            margin-bottom: 20px;
          }

          .feature-item {
            font-size: 9px;
            letter-spacing: 0.15em;
            gap: 8px;
          }

          /* Discover row */
          .card-content > div:last-child {
            gap: 14px !important;
          }

          .card-content > div:last-child span {
            font-size: 10px !important;
          }

          /* Footer nav */
          .footer-nav {
            max-width: 100%;
            padding: 0 20px;
            box-sizing: border-box;
            gap: 14px;
          }

          .nav-items {
            flex-wrap: wrap;
            justify-content: center;
            gap: 4px;
          }

          .nav-btn {
            font-size: 9px;
            letter-spacing: 0.18em;
            padding: 8px 10px;
          }

          .progress-container {
            display: block; /* keep progress bar on mobile too */
          }
        }

        /* Extra small phones */
        @media (max-width: 400px) {
          .card.side {
            width: 28px;
            min-width: 28px;
          }

          .card.active,
          .card.side {
            height: 400px;
          }

          .card-title {
            font-size: 26px;
          }

          .card-tagline {
            font-size: 12px;
          }
        }
      `}</style>

      {/* bg tint */}
      <div className="bg-mesh" style={{ "--ar": cur.accentRgb }} />
      <div className="grain-overlay" />

      {/* Header */}
      <div className="header-group">
        <span className="phase-counter">Our Services</span>
        <h2 className="main-title">
          Crafting <span className="title-accent">Tomorrow</span>
        </h2>
        <p className="title-subtitle">From Concept to Completion — Delivering Excellence at Every Stage</p>
      </div>

      {/* Main Stage */}
      <div className="stage" onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
        {services.map((s, i) => {
          const Anim     = ANIMATIONS[i];
          const isActive = active === i;
          return (
            <div
              key={s.id}
              className={`card ${isActive ? "active" : "side"}`}
              style={{
                "--a": s.accent,
                backgroundColor: s.bgCard,
              }}
              onClick={() => handleActivate(i)}
            >
              <div className="card-anim-wrapper">
                <div key={`${i}-${animKeys[i]}`}>
                  <Anim />
                </div>
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

                <div style={{ display:"flex", alignItems:"center", gap:"20px" }}>
                  <div style={{ width:"40px", height:"1px", background:"#fff" }} />
                  <span style={{ fontSize:"12px", letterSpacing:"2px", textTransform:"uppercase", color:"#fff" }}>
                    Discover
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Footer Navigation */}
      <div className="footer-nav">
        <div className="progress-container">
          <div
            className="progress-bar"
            style={{
              width:      paused ? "100%" : "0%",
              transition: paused ? "none" : `width ${AUTO_INTERVAL}ms linear`,
              opacity:    paused ? 0.2 : 1,
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