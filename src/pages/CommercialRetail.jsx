import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Building2, TrendingUp, Users, Award } from "lucide-react";

const FontLink = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400&family=Outfit:wght@300;400;500;600&display=swap');
  `}</style>
);

/* ─────────────────────────────────────────────────
   HERO SVG — architectural precision, warm stone
   palette, isometric city with crane & vehicles
───────────────────────────────────────────────── */
const HeroScene = () => (
  <svg viewBox="0 0 1440 680" xmlns="http://www.w3.org/2000/svg"
    className="w-full h-full" preserveAspectRatio="xMidYMid slice">
    <defs>
      <linearGradient id="hSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#f5f0eb"/>
        <stop offset="60%" stopColor="#e8e0d5"/>
        <stop offset="100%" stopColor="#d4c9bb"/>
      </linearGradient>
      <linearGradient id="tA_f" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#c5cdd9"/><stop offset="100%" stopColor="#9eaab8"/>
      </linearGradient>
      <linearGradient id="tA_s" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stopColor="#8896a8"/><stop offset="100%" stopColor="#6e7e92"/>
      </linearGradient>
      <linearGradient id="tA_t" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#dde4ec"/><stop offset="100%" stopColor="#c5cdd9"/>
      </linearGradient>
      <linearGradient id="tB_f" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#bfc5cc"/><stop offset="100%" stopColor="#939ba5"/>
      </linearGradient>
      <linearGradient id="tB_s" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stopColor="#7d8691"/><stop offset="100%" stopColor="#636c77"/>
      </linearGradient>
      <linearGradient id="rB_f" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#d4cab8"/><stop offset="100%" stopColor="#b8ad9a"/>
      </linearGradient>
      <linearGradient id="rB_s" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stopColor="#a89f90"/><stop offset="100%" stopColor="#8a8275"/>
      </linearGradient>
      <linearGradient id="winR" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#ffffff" stopOpacity="0.52"/>
        <stop offset="100%" stopColor="#b8cce0" stopOpacity="0.12"/>
      </linearGradient>
      <radialGradient id="vign" cx="50%" cy="50%" r="70%">
        <stop offset="0%" stopColor="transparent"/>
        <stop offset="100%" stopColor="#0e1520" stopOpacity="0.16"/>
      </radialGradient>
      <filter id="sh">
        <feDropShadow dx="0" dy="12" stdDeviation="16" floodColor="#0a0f1a" floodOpacity="0.18"/>
      </filter>
    </defs>

    {/* SKY */}
    <rect width="1440" height="680" fill="url(#hSky)"/>
    {/* Horizon haze */}
    <rect x="0" y="430" width="1440" height="80" fill="#c8bfb2" opacity="0.25"/>

    {/* Far silhouette */}
    {[[0,130,75,320],[65,165,55,285],[115,105,85,345],[195,145,48,305],
      [235,85,68,365],[295,125,52,325],[345,108,76,342],[880,128,68,312],
      [945,92,58,348],[1005,148,76,292],[1075,114,62,336],[1135,98,72,342],
      [1195,132,52,308],[1248,103,68,337],[1308,138,58,302],[1365,82,68,358],
    ].map(([x,y,w,h],i)=>(
      <rect key={i} x={x} y={y} width={w} height={h} fill="#c2b9ac" opacity="0.32" rx="1"/>
    ))}

    {/* GROUND */}
    <rect x="0" y="540" width="1440" height="140" fill="#c8bfb2"/>
    {/* Perspective grid */}
    {[-7,-5,-3,-1,1,3,5,7,9,11,13].map((t,i)=>(
      <line key={i} x1={720+t*190} y1="540" x2={720+t*820} y2="680"
        stroke="#b0a898" strokeWidth="0.7" opacity="0.45"/>
    ))}
    {[0,1,2,3].map(i=>(
      <line key={i} x1="0" y1={546+i*34} x2="1440" y2={546+i*34}
        stroke="#b0a898" strokeWidth="0.5" opacity="0.32"/>
    ))}

    {/* TOWER A — tallest, centre-left */}
    <g filter="url(#sh)">
      <ellipse cx="512" cy="546" rx="108" ry="11" fill="#8a8278" opacity="0.22"/>
      <rect x="372" y="82" width="198" height="462" fill="url(#tA_f)"/>
      <polygon points="570,82 638,112 638,536 570,544" fill="url(#tA_s)"/>
      <polygon points="372,82 440,52 638,82 570,112" fill="url(#tA_t)"/>
      {/* Window grid */}
      {Array.from({length:27}).map((_,r)=>Array.from({length:5}).map((_,c)=>(
        <rect key={`a${r}${c}`} x={380+c*36} y={92+r*16} width="30" height="12"
          fill="url(#winR)" rx="0.4" opacity={0.55+(r%4===0?0.2:0)}/>
      )))}
      {/* Mullions */}
      {[380,416,452,488,524,560].map((x,i)=>(
        <line key={i} x1={x} y1="88" x2={x} y2="544" stroke="#9eaab8" strokeWidth="0.5" opacity="0.35"/>
      ))}
      {/* Spandrels */}
      {Array.from({length:28}).map((_,r)=>(
        <line key={r} x1="372" y1={88+r*16} x2="570" y2={88+r*16} stroke="#9eaab8" strokeWidth="0.4" opacity="0.28"/>
      ))}
      {/* Entrance */}
      <polygon points="422,533 442,544 578,544 558,533" fill="#1a2940" opacity="0.88"/>
      <rect x="432" y="520" width="28" height="13" fill="#dde4ec" opacity="0.65" rx="0.4"/>
      <rect x="464" y="520" width="28" height="13" fill="#dde4ec" opacity="0.65" rx="0.4"/>
      {/* Parapet */}
      {[372,412,452,492,532].map((x,i)=>(
        <rect key={i} x={x} y="76" width="28" height="8" fill="#b8c4d0" rx="1"/>
      ))}
      {/* Antenna */}
      <line x1="471" y1="76" x2="471" y2="38" stroke="#8896a8" strokeWidth="2"/>
      <circle cx="471" cy="36" r="3" fill="#c5cdd9"/>
    </g>

    {/* TOWER B */}
    <g filter="url(#sh)">
      <ellipse cx="870" cy="545" rx="88" ry="10" fill="#8a8278" opacity="0.18"/>
      <rect x="732" y="162" width="178" height="382" fill="url(#tB_f)"/>
      <polygon points="910,162 968,192 968,536 910,544" fill="url(#tB_s)"/>
      <polygon points="732,162 790,134 968,162 910,192" fill="#ced5dc"/>
      {Array.from({length:22}).map((_,r)=>Array.from({length:4}).map((_,c)=>(
        <rect key={`b${r}${c}`} x={740+c*38} y={172+r*16} width="32" height="12"
          fill="url(#winR)" rx="0.4" opacity="0.52"/>
      )))}
      {[740,778,816,854,892].map((x,i)=>(
        <line key={i} x1={x} y1="168" x2={x} y2="544" stroke="#939ba5" strokeWidth="0.5" opacity="0.3"/>
      ))}
      <rect x="792" y="528" width="68" height="8" fill="#2c3e55"/>
    </g>

    {/* RETAIL PODIUM */}
    <g filter="url(#sh)">
      <ellipse cx="202" cy="545" rx="152" ry="10" fill="#8a8278" opacity="0.18"/>
      <rect x="42" y="362" width="308" height="182" fill="url(#rB_f)"/>
      <polygon points="350,362 408,388 408,544 350,544" fill="url(#rB_s)"/>
      <polygon points="42,362 100,340 408,362 350,388" fill="#ddd3c4"/>
      {[0,1,2,3].map(c=>(
        <rect key={c} x={54+c*68} y="392" width="56" height="136"
          fill="url(#winR)" rx="1" opacity="0.68"/>
      ))}
      <rect x="42" y="382" width="308" height="12" fill="#c8beb0"/>
      <rect x="32" y="378" width="326" height="6" fill="#2c3e55" opacity="0.82"/>
      {[0,1,2,3,4].map(i=>(
        <polygon key={i} points={`${46+i*62},384 ${46+i*62},400 ${100+i*62},400 ${100+i*62},384`}
          fill="#1a2940" opacity="0.72"/>
      ))}
      <rect x="42" y="528" width="308" height="16" fill="#2c3e55" opacity="0.88"/>
      <rect x="158" y="448" width="76" height="96" fill="#b8c4d0" opacity="0.55" rx="1"/>
    </g>

    {/* CRANE */}
    <g opacity="0.9">
      <rect x="1038" y="142" width="10" height="402" fill="#2c3e55"/>
      {Array.from({length:20}).map((_,i)=>(
        <line key={i} x1="1038" y1={142+i*20} x2="1048" y2={152+i*20}
          stroke="#3d546e" strokeWidth="0.9" opacity="0.55"/>
      ))}
      <rect x="878" y="140" width="278" height="8" fill="#2c3e55"/>
      <rect x="1048" y="138" width="118" height="8" fill="#2c3e55"/>
      <rect x="1148" y="126" width="34" height="26" fill="#1a2940" rx="2"/>
      <line x1="1043" y1="140" x2="893" y2="148" stroke="#4a6070" strokeWidth="1.4" opacity="0.65"/>
      <line x1="1043" y1="140" x2="1152" y2="146" stroke="#4a6070" strokeWidth="1.4" opacity="0.65"/>
      <line x1="918" y1="148" x2="918" y2="308" stroke="#5a6e7e" strokeWidth="1.2"/>
      <rect x="908" y="306" width="20" height="14" fill="#2c3e55" rx="1">
        <animate attributeName="y" values="306;294;306" dur="4.2s" repeatCount="indefinite"
          calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
      </rect>
      <rect x="900" y="320" width="36" height="18" fill="#3d546e" rx="1">
        <animate attributeName="y" values="320;308;320" dur="4.2s" repeatCount="indefinite"
          calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
      </rect>
      <rect x="910" y="136" width="18" height="14" fill="#3d546e" rx="1"/>
    </g>

    {/* Far background towers */}
    {[{x:1082,y:252,w:58,h:292},{x:1152,y:204,w:78,h:340},{x:1232,y:272,w:54,h:272},{x:1292,y:222,w:68,h:322}]
      .map((b,i)=>(
      <g key={i} opacity="0.48">
        <rect x={b.x} y={b.y} width={b.w} height={b.h} fill="#bbbdbe"/>
        {Array.from({length:Math.floor(b.h/18)}).map((_,r)=>
          Array.from({length:Math.floor(b.w/22)}).map((_,c)=>(
            <rect key={`bg${i}${r}${c}`} x={b.x+4+c*22} y={b.y+6+r*18} width="14" height="10"
              fill="#d8dadb" opacity="0.5" rx="0.4"/>
          ))
        )}
      </g>
    ))}

    {/* Street */}
    <rect x="0" y="540" width="1440" height="5" fill="#b8ae9e"/>
    {Array.from({length:14}).map((_,i)=>(
      <rect key={i} x={48+i*100} y="554" width="56" height="3" fill="#ccc4b8" rx="1" opacity="0.48"/>
    ))}
    {/* Lamp posts */}
    {[182,524,902,1262].map((x,i)=>(
      <g key={i}>
        <rect x={x} y="462" width="4" height="82" fill="#4a5568"/>
        <line x1={x+2} y1="464" x2={x+28} y2="454" stroke="#4a5568" strokeWidth="2.5"/>
        <circle cx={x+30} cy="452" r="5" fill="#fde68a" opacity="0.8"/>
      </g>
    ))}
    {/* Vehicles */}
    {[{x:82,c:"#9eaab8"},{x:652,c:"#b8a99a"},{x:1104,c:"#9eaab8"}].map((v,i)=>(
      <g key={i}>
        <rect x={v.x} y="533" width="70" height="15" fill={v.c} rx="4"/>
        <rect x={v.x+8} y="522" width="46" height="12" fill={v.c} opacity="0.68" rx="3"/>
        <circle cx={v.x+13} cy="548" r="5" fill="#2d3748"/>
        <circle cx={v.x+57} cy="548" r="5" fill="#2d3748"/>
        <rect x={v.x+4} y="525" width="18" height="8" fill="#dde4ec" opacity="0.58" rx="1"/>
        <rect x={v.x+46} y="525" width="18" height="8" fill="#dde4ec" opacity="0.58" rx="1"/>
      </g>
    ))}

    {/* Edge + vignette */}
    <rect x="0" y="0" width="220" height="680" fill="url(#hSky)" opacity="0.2"/>
    <rect x="1220" y="0" width="220" height="680" fill="url(#hSky)" opacity="0.2"/>
    <rect width="1440" height="680" fill="url(#vign)"/>
  </svg>
);

/* ── FEATURE ILLUSTRATIONS ── */
const OfficeIll = () => (
  <svg viewBox="0 0 280 180" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <defs>
      <linearGradient id="ofBg" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#f5f2ee"/><stop offset="100%" stopColor="#ede8e0"/></linearGradient>
      <linearGradient id="ofF" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#c5cdd9"/><stop offset="100%" stopColor="#9eaab8"/></linearGradient>
      <linearGradient id="ofS" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stopColor="#7e8e9e"/><stop offset="100%" stopColor="#6a7a8a"/></linearGradient>
      <linearGradient id="ofW" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#fff" stopOpacity="0.65"/><stop offset="100%" stopColor="#b8d0e8" stopOpacity="0.2"/></linearGradient>
    </defs>
    <rect width="280" height="180" fill="url(#ofBg)"/>
    <rect x="20" y="90" width="38" height="60" fill="#c8cdd3" opacity="0.42"/>
    <rect x="218" y="84" width="42" height="66" fill="#c8cdd3" opacity="0.38"/>
    <line x1="0" y1="148" x2="280" y2="148" stroke="#d4cdc4" strokeWidth="0.8"/>
    <rect x="90" y="28" width="100" height="120" fill="url(#ofF)"/>
    <polygon points="190,28 224,46 224,148 190,148" fill="url(#ofS)"/>
    <polygon points="90,28 124,12 224,28 190,46" fill="#d4dbe4"/>
    {Array.from({length:8}).map((_,r)=>Array.from({length:4}).map((_,c)=>(
      <rect key={`${r}${c}`} x={96+c*22} y={36+r*14} width="17" height="10"
        fill="url(#ofW)" rx="0.4"/>
    )))}
    {Array.from({length:9}).map((_,r)=>(
      <line key={r} x1="90" y1={34+r*14} x2="190" y2={34+r*14} stroke="#aab5c0" strokeWidth="0.4" opacity="0.3"/>
    ))}
    <rect x="128" y="134" width="32" height="14" fill="#2c3e55" opacity="0.85"/>
    <rect x="118" y="132" width="52" height="4" fill="#2c3e55"/>
    <rect x="50" y="124" width="4" height="24" fill="#8a7e6e"/>
    <ellipse cx="52" cy="118" rx="13" ry="10" fill="#b5c9a8" opacity="0.82"/>
    <rect x="222" y="124" width="4" height="24" fill="#8a7e6e"/>
    <ellipse cx="224" cy="118" rx="11" ry="9" fill="#b5c9a8" opacity="0.82"/>
    <line x1="140" y1="28" x2="140" y2="8" stroke="#9eaab8" strokeWidth="1.5"/>
    <circle cx="140" cy="6" r="2.5" fill="#c5cdd9"/>
    <rect x="0" y="148" width="280" height="32" fill="#ddd8d0"/>
  </svg>
);

const RetailIll = () => (
  <svg viewBox="0 0 280 180" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <defs>
      <linearGradient id="riBg" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#f5f2ee"/><stop offset="100%" stopColor="#ede8e0"/></linearGradient>
      <linearGradient id="riF" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#d4cab8"/><stop offset="100%" stopColor="#b8ad9a"/></linearGradient>
      <linearGradient id="riS" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stopColor="#a09282"/><stop offset="100%" stopColor="#857a6b"/></linearGradient>
      <linearGradient id="riW" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#fff" stopOpacity="0.6"/><stop offset="100%" stopColor="#c5d8ea" stopOpacity="0.22"/></linearGradient>
    </defs>
    <rect width="280" height="180" fill="url(#riBg)"/>
    <line x1="0" y1="148" x2="280" y2="148" stroke="#d4cdc4" strokeWidth="0.8"/>
    <rect x="28" y="66" width="192" height="82" fill="url(#riF)"/>
    <polygon points="220,66 256,84 256,148 220,148" fill="url(#riS)"/>
    <polygon points="28,66 64,50 256,66 220,84" fill="#e0d6c6"/>
    {[0,1,2].map(c=>(
      <rect key={c} x={36+c*58} y="80" width="50" height="60" fill="url(#riW)" rx="1"/>
    ))}
    {[0,1,2,3].map(i=>(
      <line key={i} x1={36+i*58} y1="76" x2={36+i*58} y2="148"
        stroke="#a09282" strokeWidth="1.2" opacity="0.42"/>
    ))}
    <rect x="20" y="74" width="208" height="6" fill="#2c3e55" opacity="0.88"/>
    {[0,1,2].map(i=>(
      <polygon key={i} points={`${38+i*58},80 ${38+i*58},94 ${88+i*58},94 ${88+i*58},80`}
        fill="#1a2940" opacity="0.68"/>
    ))}
    <rect x="28" y="140" width="192" height="8" fill="#2c3e55" opacity="0.85"/>
    <rect x="116" y="110" width="40" height="38" fill="url(#riW)" opacity="0.8" rx="0.5"/>
    <line x1="136" y1="110" x2="136" y2="148" stroke="#a09282" strokeWidth="0.8"/>
    <rect x="64" y="46" width="120" height="16" fill="#2c3e55" opacity="0.68" rx="2"/>
    <rect x="72" y="51" width="104" height="6" fill="#8896a8" rx="1" opacity="0.55"/>
    <rect x="0" y="148" width="280" height="32" fill="#ddd8d0"/>
  </svg>
);

const ComplexIll = () => (
  <svg viewBox="0 0 280 180" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <defs>
      <linearGradient id="ciBg" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#f5f2ee"/><stop offset="100%" stopColor="#ede8e0"/></linearGradient>
      <linearGradient id="ciA" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#c5cdd9"/><stop offset="100%" stopColor="#9eaab8"/></linearGradient>
      <linearGradient id="ciB" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#bfc5cc"/><stop offset="100%" stopColor="#939ba5"/></linearGradient>
      <linearGradient id="ciC" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#d4cab8"/><stop offset="100%" stopColor="#b8ad9a"/></linearGradient>
      <linearGradient id="ciW" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#fff" stopOpacity="0.58"/><stop offset="100%" stopColor="#b8d0e8" stopOpacity="0.16"/></linearGradient>
      <linearGradient id="ciAS" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stopColor="#7e8e9e"/><stop offset="100%" stopColor="#6a7a8a"/></linearGradient>
      <linearGradient id="ciCS" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stopColor="#a09282"/><stop offset="100%" stopColor="#857a6b"/></linearGradient>
    </defs>
    <rect width="280" height="180" fill="url(#ciBg)"/>
    <line x1="0" y1="150" x2="280" y2="150" stroke="#d4cdc4" strokeWidth="0.8"/>
    <rect x="10" y="58" width="68" height="92" fill="url(#ciA)"/>
    <polygon points="78,58 104,72 104,150 78,150" fill="url(#ciAS)"/>
    <polygon points="10,58 36,46 104,58 78,72" fill="#d4dbe4"/>
    {Array.from({length:6}).map((_,r)=>Array.from({length:3}).map((_,c)=>(
      <rect key={`l${r}${c}`} x={16+c*20} y={64+r*14} width="15" height="10"
        fill="url(#ciW)" rx="0.4"/>
    )))}
    <rect x="82" y="110" width="116" height="40" fill="url(#ciC)"/>
    <polygon points="198,110 222,122 222,150 198,150" fill="url(#ciCS)"/>
    <polygon points="82,110 106,100 222,110 198,122" fill="#e0d6c6"/>
    <rect x="178" y="18" width="78" height="132" fill="url(#ciB)"/>
    <polygon points="256,18 276,28 276,150 256,150" fill="#7d8691"/>
    <polygon points="178,18 198,8 276,18 256,28" fill="#ced5dc"/>
    {Array.from({length:9}).map((_,r)=>Array.from({length:3}).map((_,c)=>(
      <rect key={`r${r}${c}`} x={183+c*22} y={26+r*14} width="16" height="10"
        fill="url(#ciW)" rx="0.4"/>
    )))}
    <rect x="78" y="84" width="104" height="8" fill="#2c3e55" opacity="0.68"/>
    <rect x="82" y="76" width="4" height="20" fill="#2c3e55" opacity="0.6"/>
    <rect x="178" y="76" width="4" height="20" fill="#2c3e55" opacity="0.6"/>
    <rect x="0" y="150" width="280" height="30" fill="#ddd8d0"/>
    {[0,1,2,3].map(i=>(
      <rect key={i} x={88+i*22} y="118" width="16" height="26"
        fill="url(#ciW)" opacity="0.78" rx="0.5"/>
    ))}
  </svg>
);

const ParkingIll = () => (
  <svg viewBox="0 0 280 180" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <defs>
      <linearGradient id="pkBg" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#f5f2ee"/><stop offset="100%" stopColor="#ede8e0"/></linearGradient>
      <linearGradient id="pkF" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#bfc5cc"/><stop offset="100%" stopColor="#939ba5"/></linearGradient>
      <linearGradient id="pkS" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stopColor="#7d8691"/><stop offset="100%" stopColor="#636c77"/></linearGradient>
    </defs>
    <rect width="280" height="180" fill="url(#pkBg)"/>
    <line x1="0" y1="150" x2="280" y2="150" stroke="#d4cdc4" strokeWidth="0.8"/>
    <rect x="18" y="44" width="202" height="106" fill="url(#pkF)"/>
    <polygon points="220,44 258,64 258,150 220,150" fill="url(#pkS)"/>
    <polygon points="18,44 56,26 258,44 220,64" fill="#d0d6dc"/>
    {[44,76,108].map((y,i)=>(
      <rect key={i} x="18" y={y} width="202" height="4" fill="#8896a8" opacity="0.46"/>
    ))}
    {[0,1,2].map(floor=>[0,1,2,3].map(bay=>(
      <rect key={`${floor}${bay}`}
        x={26+bay*46} y={50+floor*32} width="38" height="22"
        fill="#6e7e92" opacity="0.32" rx="0.5"/>
    )))}
    <line x1="18" y1="150" x2="258" y2="64" stroke="#c5cdd9" strokeWidth="1"
      strokeDasharray="8,6" opacity="0.38"/>
    {[0,1,2,3].map(i=>(
      <g key={i}>
        <rect x={26+i*46} y="118" width="38" height="16" fill="#9eaab8" rx="3" opacity="0.82"/>
        <rect x={30+i*46} y="110" width="26" height="10" fill="#9eaab8" opacity="0.62" rx="2"/>
        <circle cx={32+i*46} cy="134" r="4" fill="#2d3748"/>
        <circle cx={56+i*46} cy="134" r="4" fill="#2d3748"/>
      </g>
    ))}
    <rect x="0" y="150" width="280" height="30" fill="#ddd8d0"/>
  </svg>
);

/* ── WHY CHOOSE US ── */
const WhyChooseIll = () => (
  <svg viewBox="0 0 520 420" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <defs>
      <linearGradient id="wcBg" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#f2ede6"/><stop offset="100%" stopColor="#e8e0d6"/>
      </linearGradient>
      <linearGradient id="wcT1" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#c5cdd9"/><stop offset="100%" stopColor="#9eaab8"/>
      </linearGradient>
      <linearGradient id="wcT1s" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stopColor="#7e8e9e"/><stop offset="100%" stopColor="#6a7a8a"/>
      </linearGradient>
      <linearGradient id="wcT2" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#d4cab8"/><stop offset="100%" stopColor="#b8ad9a"/>
      </linearGradient>
      <linearGradient id="wcT2s" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stopColor="#a09282"/><stop offset="100%" stopColor="#857a6b"/>
      </linearGradient>
      <linearGradient id="wcW" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#fff" stopOpacity="0.62"/><stop offset="100%" stopColor="#b8d0e8" stopOpacity="0.18"/>
      </linearGradient>
      <filter id="wcSh">
        <feDropShadow dx="0" dy="10" stdDeviation="14" floodColor="#0a0f1a" floodOpacity="0.14"/>
      </filter>
    </defs>
    <rect width="520" height="420" fill="url(#wcBg)" rx="20"/>
    <rect x="0" y="326" width="520" height="94" fill="#ddd8cf"/>
    {[-4,-2,0,2,4,6,8].map((t,i)=>(
      <line key={i} x1={260+t*120} y1="326" x2={260+t*500} y2="420"
        stroke="#c8c0b4" strokeWidth="0.65" opacity="0.45"/>
    ))}
    {[0,1,2].map(i=>(
      <line key={i} x1="0" y1={334+i*28} x2="520" y2={334+i*28}
        stroke="#c8c0b4" strokeWidth="0.55" opacity="0.28"/>
    ))}
    {/* Far building */}
    <rect x="342" y="132" width="116" height="194" fill="#bbbdbe" opacity="0.5"/>
    <polygon points="458,132 494,152 494,326 458,326" fill="#a0a4a8" opacity="0.38"/>
    {Array.from({length:10}).map((_,r)=>Array.from({length:4}).map((_,c)=>(
      <rect key={`bg${r}${c}`} x={348+c*25} y={140+r*18} width="17" height="12"
        fill="#d0d4d8" opacity="0.58" rx="0.4"/>
    )))}
    {/* Tower A */}
    <g filter="url(#wcSh)">
      <rect x="60" y="58" width="158" height="268" fill="url(#wcT1)"/>
      <polygon points="218,58 266,84 266,326 218,326" fill="url(#wcT1s)"/>
      <polygon points="60,58 108,34 266,58 218,84" fill="#d4dbe4"/>
      {Array.from({length:16}).map((_,r)=>Array.from({length:5}).map((_,c)=>(
        <rect key={`a${r}${c}`} x={67+c*27} y={68+r*16} width="21" height="12"
          fill="url(#wcW)" rx="0.4"/>
      )))}
      {[67,94,121,148,175,202].map((x,i)=>(
        <line key={i} x1={x} y1="64" x2={x} y2="326" stroke="#aab5c0" strokeWidth="0.5" opacity="0.3"/>
      ))}
      <rect x="110" y="305" width="58" height="21" fill="#2c3e55"/>
      <rect x="96" y="303" width="86" height="5" fill="#2c3e55"/>
      <line x1="139" y1="58" x2="139" y2="26" stroke="#9eaab8" strokeWidth="2"/>
      <circle cx="139" cy="24" r="3.5" fill="#c5cdd9"/>
    </g>
    {/* Retail podium */}
    <g filter="url(#wcSh)">
      <rect x="268" y="200" width="178" height="126" fill="url(#wcT2)"/>
      <polygon points="446,200 486,220 486,326 446,326" fill="url(#wcT2s)"/>
      <polygon points="268,200 308,182 486,200 446,220" fill="#e0d6c6"/>
      {[0,1,2].map(c=>(
        <rect key={c} x={276+c*54} y="214" width="46" height="96"
          fill="url(#wcW)" rx="0.5"/>
      ))}
      {[0,1,2,3].map(i=>(
        <line key={i} x1={276+i*54} y1="210" x2={276+i*54} y2="326"
          stroke="#a09282" strokeWidth="1.1" opacity="0.42"/>
      ))}
      <rect x="260" y="208" width="196" height="6" fill="#2c3e55" opacity="0.82"/>
      <rect x="268" y="316" width="178" height="10" fill="#2c3e55" opacity="0.8"/>
    </g>
    {/* Crane */}
    <rect x="224" y="88" width="7" height="238" fill="#2c3e55" opacity="0.8"/>
    <rect x="148" y="86" width="188" height="7" fill="#2c3e55" opacity="0.8"/>
    <rect x="231" y="84" width="78" height="7" fill="#2c3e55" opacity="0.68"/>
    <rect x="298" y="74" width="24" height="18" fill="#1a2940" rx="1" opacity="0.8"/>
    <line x1="191" y1="93" x2="191" y2="168" stroke="#4a6070" strokeWidth="1.2" opacity="0.65"/>
    <rect x="181" y="166" width="20" height="12" fill="#2c3e55" rx="1" opacity="0.85">
      <animate attributeName="y" values="166;154;166" dur="4s" repeatCount="indefinite"
        calcMode="spline" keySplines="0.45 0 0.55 1;0.45 0 0.55 1"/>
    </rect>
    {/* Trees */}
    {[{x:40},{x:490}].map((t,i)=>(
      <g key={i}>
        <rect x={t.x+2} y={278} width="4" height="48" fill="#8a7e6e"/>
        <ellipse cx={t.x+4} cy={272} rx="16" ry="13" fill="#b5c9a8" opacity="0.82"/>
        <ellipse cx={t.x+14} cy={265} rx="12" ry="10" fill="#a5ba98" opacity="0.72"/>
      </g>
    ))}
    {/* Lamp posts */}
    {[28,492].map((x,i)=>(
      <g key={i}>
        <rect x={x} y="286" width="3" height="40" fill="#4a5568"/>
        <line x1={x+1} y1="288" x2={x+15} y2="282" stroke="#4a5568" strokeWidth="2"/>
        <circle cx={x+17} cy="280" r="4" fill="#fde68a" opacity="0.78"/>
      </g>
    ))}
  </svg>
);

/* ── PROJECT CARD ILLUSTRATIONS ── */
const ProjOffice = () => (
  <svg viewBox="0 0 320 220" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <defs>
      <linearGradient id="poF" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#c5cdd9"/><stop offset="100%" stopColor="#9eaab8"/></linearGradient>
      <linearGradient id="poS" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stopColor="#7e8e9e"/><stop offset="100%" stopColor="#6a7a8a"/></linearGradient>
      <linearGradient id="poW" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#fff" stopOpacity="0.6"/><stop offset="100%" stopColor="#b8d0e8" stopOpacity="0.18"/></linearGradient>
    </defs>
    <rect width="320" height="220" fill="#f2ede6"/>
    <rect x="20" y="108" width="36" height="62" fill="#c8cdd3" opacity="0.38"/>
    <rect x="246" y="100" width="48" height="70" fill="#c8cdd3" opacity="0.35"/>
    <line x1="0" y1="172" x2="320" y2="172" stroke="#c8c0b4" strokeWidth="0.8"/>
    <rect x="100" y="30" width="120" height="142" fill="url(#poF)"/>
    <polygon points="220,30 260,50 260,172 220,172" fill="url(#poS)"/>
    <polygon points="100,30 140,12 260,30 220,50" fill="#d4dbe4"/>
    {Array.from({length:9}).map((_,r)=>Array.from({length:4}).map((_,c)=>(
      <rect key={`${r}${c}`} x={107+c*26} y={38+r*14} width="20" height="10"
        fill="url(#poW)" rx="0.4"/>
    )))}
    {Array.from({length:10}).map((_,r)=>(
      <line key={r} x1="100" y1={36+r*14} x2="220" y2={36+r*14} stroke="#aab5c0" strokeWidth="0.4" opacity="0.28"/>
    ))}
    <rect x="140" y="158" width="40" height="14" fill="#2c3e55"/>
    <rect x="130" y="156" width="60" height="4" fill="#2c3e55"/>
    <line x1="160" y1="30" x2="160" y2="10" stroke="#9eaab8" strokeWidth="1.5"/>
    <circle cx="160" cy="8" r="2.5" fill="#c5cdd9"/>
    <rect x="72" y="154" width="4" height="18" fill="#8a7e6e"/>
    <ellipse cx="74" cy="148" rx="12" ry="10" fill="#b5c9a8" opacity="0.78"/>
    <rect x="240" y="154" width="4" height="18" fill="#8a7e6e"/>
    <ellipse cx="242" cy="148" rx="10" ry="9" fill="#b5c9a8" opacity="0.78"/>
    <rect x="0" y="172" width="320" height="48" fill="#ddd8d0"/>
  </svg>
);

const ProjRetail = () => (
  <svg viewBox="0 0 320 220" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <defs>
      <linearGradient id="prF" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#d4cab8"/><stop offset="100%" stopColor="#b8ad9a"/></linearGradient>
      <linearGradient id="prS" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stopColor="#a09282"/><stop offset="100%" stopColor="#857a6b"/></linearGradient>
      <linearGradient id="prW" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#fff" stopOpacity="0.6"/><stop offset="100%" stopColor="#c5d8ea" stopOpacity="0.2"/></linearGradient>
    </defs>
    <rect width="320" height="220" fill="#f2ede6"/>
    <line x1="0" y1="172" x2="320" y2="172" stroke="#c8c0b4" strokeWidth="0.8"/>
    <rect x="18" y="78" width="242" height="94" fill="url(#prF)"/>
    <polygon points="260,78 298,98 298,172 260,172" fill="url(#prS)"/>
    <polygon points="18,78 56,60 298,78 260,98" fill="#e0d6c6"/>
    {[0,1,2,3].map(c=>(
      <rect key={c} x={26+c*56} y="92" width="48" height="72"
        fill="url(#prW)" rx="1"/>
    ))}
    {[0,1,2,3,4].map(i=>(
      <line key={i} x1={26+i*56} y1="88" x2={26+i*56} y2="172"
        stroke="#a09282" strokeWidth="1.1" opacity="0.4"/>
    ))}
    <rect x="10" y="86" width="260" height="6" fill="#2c3e55" opacity="0.85"/>
    {[0,1,2,3].map(i=>(
      <polygon key={i} points={`${28+i*56},92 ${28+i*56},106 ${78+i*56},106 ${78+i*56},92`}
        fill="#1a2940" opacity="0.65"/>
    ))}
    <rect x="18" y="162" width="242" height="10" fill="#2c3e55" opacity="0.85"/>
    <rect x="68" y="58" width="148" height="16" fill="#2c3e55" opacity="0.68" rx="2"/>
    <rect x="76" y="63" width="132" height="6" fill="#8896a8" rx="1" opacity="0.52"/>
    <rect x="0" y="172" width="320" height="48" fill="#ddd8d0"/>
    {[80,160,240].map((x,i)=>(
      <g key={i}>
        <circle cx={x} cy="182" r="5.5" fill="#2d3748" opacity="0.45"/>
        <rect x={x-4} y="188" width="8" height="12" fill="#3d4e5e" opacity="0.4" rx="1"/>
      </g>
    ))}
  </svg>
);

const ProjMixed = () => (
  <svg viewBox="0 0 320 220" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <defs>
      <linearGradient id="pmA" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#c5cdd9"/><stop offset="100%" stopColor="#9eaab8"/></linearGradient>
      <linearGradient id="pmB" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#bfc5cc"/><stop offset="100%" stopColor="#939ba5"/></linearGradient>
      <linearGradient id="pmC" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#d4cab8"/><stop offset="100%" stopColor="#b8ad9a"/></linearGradient>
      <linearGradient id="pmW" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#fff" stopOpacity="0.58"/><stop offset="100%" stopColor="#b8d0e8" stopOpacity="0.15"/></linearGradient>
      <linearGradient id="pmAS" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stopColor="#7e8e9e"/><stop offset="100%" stopColor="#6a7a8a"/></linearGradient>
      <linearGradient id="pmCS" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stopColor="#a09282"/><stop offset="100%" stopColor="#857a6b"/></linearGradient>
    </defs>
    <rect width="320" height="220" fill="#f2ede6"/>
    <line x1="0" y1="172" x2="320" y2="172" stroke="#c8c0b4" strokeWidth="0.8"/>
    {/* left */}
    <rect x="8" y="68" width="78" height="104" fill="url(#pmA)"/>
    <polygon points="86,68 112,80 112,172 86,172" fill="url(#pmAS)"/>
    <polygon points="8,68 34,58 112,68 86,80" fill="#d4dbe4"/>
    {Array.from({length:7}).map((_,r)=>Array.from({length:3}).map((_,c)=>(
      <rect key={`l${r}${c}`} x={14+c*22} y={74+r*13} width="16" height="9"
        fill="url(#pmW)" rx="0.4"/>
    )))}
    {/* centre */}
    <rect x="118" y="20" width="98" height="152" fill="url(#pmB)"/>
    <polygon points="216,20 248,34 248,172 216,172" fill="#7d8691"/>
    <polygon points="118,20 150,8 248,20 216,34" fill="#ced5dc"/>
    {Array.from({length:10}).map((_,r)=>Array.from({length:3}).map((_,c)=>(
      <rect key={`c${r}${c}`} x={124+c*28} y={28+r*14} width="22" height="10"
        fill="url(#pmW)" rx="0.4"/>
    )))}
    <line x1="167" y1="20" x2="167" y2="6" stroke="#9eaab8" strokeWidth="1.5"/>
    <circle cx="167" cy="4" r="2.5" fill="#ced5dc"/>
    {/* right */}
    <rect x="204" y="108" width="72" height="64" fill="url(#pmC)"/>
    <polygon points="276,108 302,122 302,172 276,172" fill="url(#pmCS)"/>
    <polygon points="204,108 230,96 302,108 276,122" fill="#e0d6c6"/>
    {Array.from({length:4}).map((_,r)=>Array.from({length:2}).map((_,c)=>(
      <rect key={`r${r}${c}`} x={210+c*30} y={114+r*13} width="22" height="10"
        fill="url(#pmW)" rx="0.4"/>
    )))}
    {/* bridge */}
    <rect x="112" y="94" width="10" height="8" fill="#2c3e55" opacity="0.68"/>
    <rect x="216" y="94" width="8" height="8" fill="#2c3e55" opacity="0.68"/>
    <rect x="116" y="96" width="108" height="4" fill="#2c3e55" opacity="0.6"/>
    {/* ongoing indicator */}
    <rect x="246" y="16" width="64" height="18" fill="none"
      stroke="#c2914a" strokeWidth="1.4" strokeDasharray="5,3" rx="2"/>
    <text x="278" y="29" textAnchor="middle" fill="#c2914a" fontSize="8"
      fontFamily="Georgia,serif" fontWeight="600">ONGOING</text>
    <rect x="0" y="172" width="320" height="48" fill="#ddd8d0"/>
  </svg>
);

const ProjUpcoming = () => (
  <svg viewBox="0 0 320 220" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <rect width="320" height="220" fill="#f0ece5"/>
    {Array.from({length:16}).map((_,i)=>(
      <line key={`h${i}`} x1="18" y1={14+i*13} x2="302" y2={14+i*13}
        stroke="#c8c0b4" strokeWidth="0.55" opacity="0.58"/>
    ))}
    {Array.from({length:23}).map((_,i)=>(
      <line key={`v${i}`} x1={18+i*13} y1="14" x2={18+i*13} y2="206"
        stroke="#c8c0b4" strokeWidth="0.55" opacity="0.58"/>
    ))}
    <rect x="48" y="42" width="224" height="132" fill="none"
      stroke="#8896a8" strokeWidth="1.7" strokeDasharray="7,4" rx="1"/>
    <line x1="160" y1="42" x2="160" y2="174" stroke="#8896a8" strokeWidth="1.1" strokeDasharray="5,3" opacity="0.65"/>
    <line x1="48" y1="108" x2="272" y2="108" stroke="#8896a8" strokeWidth="1.1" strokeDasharray="5,3" opacity="0.65"/>
    {[[48,42],[272,42],[48,174],[272,174]].map(([x,y],i)=>(
      <circle key={i} cx={x} cy={y} r="4" fill="#8896a8" opacity="0.82"/>
    ))}
    {[
      {x:104,y:76,t:"Block A"},{x:216,y:76,t:"Block B"},
      {x:104,y:142,t:"Lobby"},{x:216,y:142,t:"Retail"},
    ].map((l,i)=>(
      <text key={i} x={l.x} y={l.y} textAnchor="middle"
        fill="#6a7a8a" fontSize="10" fontFamily="Georgia,serif" opacity="0.88">{l.t}</text>
    ))}
    <line x1="48" y1="28" x2="272" y2="28" stroke="#8896a8" strokeWidth="0.9"/>
    <polygon points="48,25 48,31 40,28" fill="#8896a8"/>
    <polygon points="272,25 272,31 280,28" fill="#8896a8"/>
    <text x="160" y="23" textAnchor="middle" fill="#8896a8" fontSize="8.5"
      fontFamily="Georgia,serif">Shopping Area Construction</text>
    <rect x="106" y="96" width="108" height="24" rx="12" fill="#2c3e55" opacity="0.87"/>
    <text x="160" y="112" textAnchor="middle" fill="#f5f0eb"
      fontSize="10" fontFamily="Georgia,serif" fontWeight="600" letterSpacing="1.4">UPCOMING</text>
  </svg>
);

/* ════════════════════════════════════
   MAIN COMPONENT
════════════════════════════════════ */
export default function CommercialRetail() {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, threshold: 0.1 });

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [inView, controls]);

  const projects = [
    { name: "Commercial Office Building", location: "Hyderabad", type: "Office Space",  status: "Completed", Ill: ProjOffice },
    { name: "Retail Shop Complex",         location: "Hyderabad", type: "Retail Space",  status: "Completed", Ill: ProjRetail },
    { name: "Commercial Complex Development", location: "Telangana", type: "Mixed Use",  status: "Ongoing",   Ill: ProjMixed },
    { name: "Shopping Area Construction",  location: "Hyderabad", type: "Retail Units", status: "Upcoming",  Ill: ProjUpcoming },
  ];

  const features = [
    { title: "Office Buildings",       desc: "Construction of office spaces designed for productivity and efficient usage.",              Ill: OfficeIll },
    { title: "Retail Spaces",          desc: "Shops and commercial spaces designed to support business operations.",                     Ill: RetailIll },
    { title: "Commercial Complexes",   desc: "Multi-purpose commercial buildings with structured layouts.",                              Ill: ComplexIll },
    { title: "Infrastructure Support", desc: "Parking areas and supporting infrastructure for commercial projects.",                     Ill: ParkingIll },
  ];

  const statusCfg = {
    Completed: { bg: "#ecf5ee", text: "#2e6e3e", dot: "#4caf6e" },
    Ongoing:   { bg: "#eef2fb", text: "#2a4a9a", dot: "#4a72e0" },
    Upcoming:  { bg: "#faf4e8", text: "#7a5010", dot: "#d4900a" },
  };

  const stats = [
    { value: "25+",  label: "Commercial Projects", icon: Building2 },
    { value: "9+",   label: "Years Experience",    icon: TrendingUp },
    { value: "25+",  label: "Clients Served",      icon: Users },
    { value: "100%", label: "Quality Commitment",  icon: Award },
  ];

  const serif = "'Cormorant Garamond', serif";
  const sans  = "'Outfit', sans-serif";

  return (
    <>
      <FontLink />
      <div style={{ fontFamily: sans, background: "#faf8f5" }} className="min-h-screen">
        <Navbar />

        {/* ══ HERO ══ */}
        <section className="relative overflow-hidden" style={{ height: "90vh", minHeight: 560 }}>
          <div className="absolute inset-0">
            <HeroScene />
          </div>

          {/* Text overlay — left-anchored, no heavy dark overlay */}
          <div className="absolute inset-0 flex items-center">
            <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 2.5rem", width: "100%" }}>
              <motion.div
                initial={{ opacity: 0, y: 36 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                style={{
                  maxWidth: 520,
                  background: "linear-gradient(135deg, rgba(245,240,235,0.92) 0%, rgba(240,234,226,0.85) 100%)",
                  backdropFilter: "blur(12px)",
                  borderRadius: 20,
                  padding: "2.8rem 3rem",
                  border: "1px solid rgba(200,190,180,0.5)",
                  boxShadow: "0 24px 64px rgba(20,30,40,0.12)",
                }}
              >
                {/* Eyebrow */}
                <motion.div
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.22, duration: 0.65 }}
                  style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: "1.2rem" }}
                >
                  <div style={{ width: 28, height: 1, background: "#6a7a8a" }}/>
                  <span style={{ fontSize: 10, fontWeight: 600, color: "#6a7a8a",
                    letterSpacing: "0.22em", textTransform: "uppercase", fontFamily: sans }}>
                    Services / Commercial &amp; Retail
                  </span>
                  <div style={{ width: 28, height: 1, background: "#6a7a8a" }}/>
                </motion.div>

                {/* Headline */}
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.32, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  style={{
                    fontFamily: serif,
                    fontSize: "clamp(2.6rem, 4.5vw, 4rem)",
                    fontWeight: 700,
                    color: "#18232e",
                    lineHeight: 1.06,
                    marginBottom: "1.25rem",
                    letterSpacing: "-0.02em",
                  }}
                >
                  Commercial<br/>
                  <em style={{ fontStyle: "italic", fontWeight: 400, color: "#4a5e72" }}>&amp; Retail</em>
                </motion.h1>

                

                {/* Body */}
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.55, duration: 0.8 }}
                  style={{ fontSize: "0.95rem", fontWeight: 300, color: "#4a5a6a",
                    lineHeight: 1.78 }}
                >
                  We design and build commercial and retail spaces that support business growth with efficient layouts, durability, and modern construction practices.
                </motion.p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ══ FEATURES ══ */}
        <section style={{ padding: "7rem 2rem", background: "#faf8f5", position: "relative" }}>
          <div style={{
            position: "absolute", inset: 0, pointerEvents: "none",
            backgroundImage: "radial-gradient(circle, #c8bfb0 1px, transparent 1px)",
            backgroundSize: "30px 30px", opacity: 0.32,
          }}/>
          <div style={{ maxWidth: 1280, margin: "0 auto", position: "relative" }}>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }} viewport={{ once: true }}
              style={{ textAlign: "center", marginBottom: "4rem" }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 12, marginBottom: 10 }}>
                <div style={{ width: 26, height: 1, background: "#8896a8" }}/>
                <span style={{ fontSize: 10, fontWeight: 600, color: "#6a7a8a", letterSpacing: "0.22em", textTransform: "uppercase" }}>Our Expertise</span>
                <div style={{ width: 26, height: 1, background: "#8896a8" }}/>
              </div>
              <h2 style={{ fontFamily: serif, fontSize: "clamp(2rem,3.5vw,2.8rem)", fontWeight: 600, color: "#18232e", letterSpacing: "-0.02em" }}>
                Commercial Excellence
              </h2>
              
            </motion.div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))", gap: "1.5rem" }}>
              {features.map((f, i) => (
                <motion.div key={i}
                  initial={{ opacity: 0, y: 36 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.52 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -12, scale: 1.03, boxShadow: "0 32px 72px rgba(28,40,55,0.18)" }}
                  style={{
                    background: "#fff", borderRadius: 16,
                    border: "1px solid #e4ddd3", overflow: "hidden",
                    transition: "all 0.2s cubic-bezier(0.22, 1, 0.36, 1), border-color 0.2s ease",
                    cursor: "pointer",
                  }}
                >
                  <div style={{ height: 172, background: "#f5f0e8", overflow: "hidden" }}>
                    <f.Ill />
                  </div>
                  <div style={{ padding: "1.3rem 1.5rem 1.7rem" }}>
                    <h3 style={{ fontFamily: serif, fontSize: "1.15rem", fontWeight: 600, color: "#18232e", marginBottom: "0.45rem" }}>{f.title}</h3>
                    <p style={{ fontSize: "0.86rem", color: "#6a7a8a", lineHeight: 1.7, fontWeight: 300 }}>{f.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ WHY CHOOSE US ══ */}
        <section ref={ref} style={{ padding: "7rem 2rem", background: "#f5f0e8" }}>
          <div style={{ maxWidth: 1280, margin: "0 auto" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "center" }}>
              <motion.div
                initial={{ opacity: 0, x: -32 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
                  <div style={{ width: 26, height: 1, background: "#8896a8" }}/>
                  <span style={{ fontSize: 10, fontWeight: 600, color: "#6a7a8a", letterSpacing: "0.22em", textTransform: "uppercase" }}>Why Choose Us</span>
                  <div style={{ width: 26, height: 1, background: "#8896a8" }}/>
                </div>
                <h2 style={{ fontFamily: serif, fontSize: "clamp(1.7rem,2.8vw,2.5rem)", fontWeight: 600, color: "#18232e", lineHeight: 1.2, letterSpacing: "-0.02em", marginBottom: "1.4rem" }}>
                  Commercial Spaces<br/>Built for Performance
                </h2>
                <p style={{ fontSize: "0.9rem", color: "#5a6a7a", lineHeight: 1.82, fontWeight: 300, marginBottom: "1rem" }}>
                  Our commercial and retail projects are engineered for performance. We understand that every square metre of commercial space must deliver returns — so we design and build with efficiency, aesthetics, and functionality at the forefront.
                </p>
                <p style={{ fontSize: "0.9rem", color: "#5a6a7a", lineHeight: 1.82, fontWeight: 300, marginBottom: "2.5rem" }}>
                  We focus on building commercial spaces that are practical, durable, and suitable for business operations. Our approach ensures efficient use of space and timely project completion.
                </p>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "0.75rem" }}>
                  {stats.map((s, i) => (
                    <motion.div key={i}
                      initial={{ opacity: 0, scale: 0.88 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: 0.3 + i * 0.08, duration: 0.42 }}
                      whileHover={{ scale: 1.08, y: -6, boxShadow: "0 16px 40px rgba(28,40,55,0.15)" }}
                      style={{ background: "#fff", borderRadius: 12, border: "1px solid #e4ddd3", padding: "0.9rem 0.4rem", textAlign: "center", transition: "all 0.2s cubic-bezier(0.22, 1, 0.36, 1)", cursor: "pointer" }}
                    >
                      <s.icon size={17} color="#6a7a8a" style={{ margin: "0 auto 5px" }}/>
                      <p style={{ fontFamily: serif, fontSize: "1.4rem", fontWeight: 700, color: "#2c3e55", lineHeight: 1 }}>{s.value}</p>
                      <p style={{ fontSize: "0.7rem", color: "#8a9aaa", marginTop: 4, lineHeight: 1.3, fontWeight: 400 }}>{s.label}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.94 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
                style={{ borderRadius: 20, overflow: "hidden", border: "1px solid #e0d8ce", boxShadow: "0 24px 64px rgba(28,40,55,0.1)", background: "#f2ede6", minHeight: 380 }}
              >
                <WhyChooseIll />
              </motion.div>
            </div>
          </div>
        </section>

        {/* ══ PROJECTS ══ */}
        <section style={{ padding: "7rem 2rem", background: "#faf8f5", position: "relative" }}>
          <div style={{
            position: "absolute", inset: 0, pointerEvents: "none",
            backgroundImage: "radial-gradient(circle, #c8bfb0 1px, transparent 1px)",
            backgroundSize: "28px 28px", opacity: 0.26,
          }}/>
          <div style={{ maxWidth: 1280, margin: "0 auto", position: "relative" }}>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }} viewport={{ once: true }}
              style={{ textAlign: "center", marginBottom: "4rem" }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 12, marginBottom: 10 }}>
                <div style={{ width: 26, height: 1, background: "#8896a8" }}/>
                <span style={{ fontSize: 10, fontWeight: 600, color: "#6a7a8a", letterSpacing: "0.22em", textTransform: "uppercase" }}>our work</span>
                <div style={{ width: 26, height: 1, background: "#8896a8" }}/>
              </div>
              <h2 style={{ fontFamily: serif, fontSize: "clamp(2rem,3.5vw,2.8rem)", fontWeight: 600, color: "#18232e", letterSpacing: "-0.02em" }}>
                Featured Commercial Projects
              </h2>
             
            </motion.div>

            <div className="commercial-projects-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: "1.5rem" }}>
              {projects.map((p, i) => {
                const st = statusCfg[p.status];
                return (
                  <motion.div key={i}
                    initial={{ opacity: 0, y: 36 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.08, duration: 0.5 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5, boxShadow: "0 20px 48px rgba(28,40,55,0.1)" }}
                    className="commercial-project-card"
                    style={{ background: "#fff", borderRadius: 16, border: "1px solid #e4ddd3", overflow: "hidden", display: "flex", transition: "all 0.3s ease" }}
                  >
                    <div className="commercial-project-image" style={{ width: "42%", flexShrink: 0, background: "#f5f0e8", minHeight: 240 }}>
                      <p.Ill />
                    </div>
                    <div className="commercial-project-content" style={{ padding: "2rem 1.75rem", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                      <h3 style={{ fontFamily: serif, fontSize: "1.2rem", fontWeight: 600, color: "#18232e", marginBottom: 4, lineHeight: 1.2 }}>{p.name}</h3>
                      <p style={{ fontSize: "0.78rem", color: "#8a9aaa", marginBottom: 4, fontWeight: 400 }}>{p.location}</p>
                      <p style={{ fontSize: "0.84rem", color: "#5a6a7a", marginBottom: "1.2rem", fontWeight: 300 }}>{p.type}</p>
                      <div style={{ display: "flex", alignItems: "center", gap: 7, background: st.bg, borderRadius: 20, padding: "5px 12px", width: "fit-content" }}>
                        <div style={{ width: 6, height: 6, borderRadius: "50%", background: st.dot }}/>
                        <span style={{ fontSize: "0.73rem", fontWeight: 600, color: st.text, letterSpacing: "0.04em" }}>{p.status}</span>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        <Footer />

        <style>{`
          @media (max-width: 900px) {
            [data-wcu] { grid-template-columns: 1fr !important; }
          }
          @media (max-width: 760px) {
            .commercial-projects-grid { grid-template-columns: 1fr !important; }
            .commercial-project-card { flex-direction: column !important; }
            .commercial-project-image { width: 100% !important; min-height: 240px !important; }
            .commercial-project-content { padding: 1.5rem 1.25rem !important; }
          }
          @media (max-width: 620px) {
            [data-proj] { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </div>
    </>
  );
}