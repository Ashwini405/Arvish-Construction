

import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import ScrollToTop from '../../components/ScrollToTop';

/* ═══════════════════════════════════════════════════════════════════
   SVG ILLUSTRATIONS
═══════════════════════════════════════════════════════════════════ */

const OfficeHeroSVG = () => (
  <svg viewBox="0 0 1200 680" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <defs>
      <linearGradient id="offSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#eef4ff" />
        <stop offset="55%" stopColor="#e8f0fa" />
        <stop offset="100%" stopColor="#dde8f5" />
      </linearGradient>
      <linearGradient id="offGround" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#e2e8f0" />
        <stop offset="100%" stopColor="#cbd5e1" />
      </linearGradient>
      <linearGradient id="offGlass" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#dbeafe" stopOpacity="0.9" />
        <stop offset="100%" stopColor="#bfdbfe" stopOpacity="0.7" />
      </linearGradient>
      <linearGradient id="offFacade" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#f8fafc" />
        <stop offset="100%" stopColor="#f1f5f9" />
      </linearGradient>
      <linearGradient id="sunG" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#fef3c7" />
        <stop offset="100%" stopColor="#fde68a" />
      </linearGradient>
      <clipPath id="offClip"><rect width="1200" height="680" /></clipPath>
    </defs>
    <g clipPath="url(#offClip)">
      {/* Sky */}
      <rect width="1200" height="680" fill="url(#offSky)" />

      {/* Sun */}
      <circle cx="970" cy="110" r="55" fill="#fef9c3" opacity="0.55" />
      <circle cx="970" cy="110" r="38" fill="url(#sunG)" />
      <circle cx="970" cy="110" r="24" fill="#fde68a" />

      {/* Clouds */}
      <ellipse cx="180" cy="90" rx="95" ry="26" fill="white" opacity="0.88" />
      <ellipse cx="245" cy="78" rx="65" ry="20" fill="white" opacity="0.9" />
      <ellipse cx="130" cy="100" rx="55" ry="18" fill="white" opacity="0.8" />

      <ellipse cx="650" cy="65" rx="80" ry="22" fill="white" opacity="0.78" />
      <ellipse cx="710" cy="52" rx="55" ry="18" fill="white" opacity="0.82" />

      <ellipse cx="1060" cy="200" rx="60" ry="18" fill="white" opacity="0.65" />

      {/* Ground / plaza */}
      <rect x="0" y="510" width="1200" height="170" fill="url(#offGround)" />
      <line x1="0" y1="512" x2="1200" y2="512" stroke="#94a3b8" strokeWidth="1.2" opacity="0.35" />

      {/* Plaza pavement lines */}
      {[100, 220, 340, 460, 580, 700, 820, 940, 1060].map((x, i) => (
        <rect key={i} x={x} y={535} width={90} height={5} rx="2" fill="#94a3b8" opacity="0.12" />
      ))}

      {/* Background trees (left) */}
      {[60, 110, 150].map((x, i) => (
        <g key={i}>
          <rect x={x - 4} y={420 - i * 12} width={8} height={95 + i * 12} fill="#a3b8a0" opacity="0.5" />
          <ellipse cx={x} cy={415 - i * 12} rx={22 + i * 4} ry={30 + i * 4} fill="#86efac" opacity={0.35 + i * 0.05} />
        </g>
      ))}

      {/* Background trees (right) */}
      {[1040, 1080, 1115].map((x, i) => (
        <g key={i}>
          <rect x={x - 4} y={430 - i * 10} width={8} height={85 + i * 10} fill="#a3b8a0" opacity="0.5" />
          <ellipse cx={x} cy={425 - i * 10} rx={20 + i * 3} ry={28 + i * 3} fill="#86efac" opacity={0.3 + i * 0.05} />
        </g>
      ))}

      {/* Side building (left, short) */}
      <rect x="80" y="340" width="120" height="175" fill="#f1f5f9" stroke="#e2e8f0" strokeWidth="1" />
      {[...Array(6)].map((_, row) =>
        [...Array(3)].map((__, col) => (
          <rect key={`${row}-${col}`} x={92 + col * 36} y={355 + row * 28} width={26} height={18}
            fill="url(#offGlass)" stroke="#93c5fd" strokeWidth="0.5" rx="1" />
        ))
      )}

      {/* Side building (right, tall) */}
      <rect x="1000" y="280" width="100" height="235" fill="#f1f5f9" stroke="#e2e8f0" strokeWidth="1" />
      {[...Array(8)].map((_, row) =>
        [...Array(2)].map((__, col) => (
          <rect key={`${row}-${col}`} x={1012 + col * 42} y={295 + row * 28} width={30} height={18}
            fill="url(#offGlass)" stroke="#93c5fd" strokeWidth="0.5" rx="1" />
        ))
      )}

      {/* ── MAIN OFFICE BUILDING ── */}
      {/* Base podium */}
      <rect x="240" y="440" width="720" height="75" fill="#f1f5f9" stroke="#e2e8f0" strokeWidth="1.5" />
      {/* Podium windows / entrance */}
      <rect x="510" y="452" width="180" height="63" fill="#dbeafe" stroke="#93c5fd" strokeWidth="1" rx="1" />
      <rect x="518" y="454" width="164" height="59" fill="#bfdbfe" opacity="0.5" />
      {/* Entrance door */}
      <rect x="562" y="475" width="40" height="40" fill="#93c5fd" opacity="0.6" rx="1" />
      <rect x="566" y="477" width="16" height="36" fill="#dbeafe" rx="1" />
      <rect x="584" y="477" width="16" height="36" fill="#dbeafe" rx="1" />
      {/* Podium side windows */}
      {[265, 310, 355, 400, 445].map((x, i) => (
        <rect key={i} x={x} y={458} width={34} height={22} rx="1" fill="url(#offGlass)" stroke="#93c5fd" strokeWidth="0.6" />
      ))}
      {[755, 800, 845, 890, 935].map((x, i) => (
        <rect key={i} x={x} y={458} width={34} height={22} rx="1" fill="url(#offGlass)" stroke="#93c5fd" strokeWidth="0.6" />
      ))}

      {/* Tower floors */}
      {[...Array(9)].map((_, floor) => (
        <g key={floor}>
          <rect x={310 + floor * 8} y={110 + floor * 37} width={580 - floor * 16} height={37}
            fill="url(#offFacade)" stroke="#e2e8f0" strokeWidth="1" />
          {/* Glass curtain wall panels */}
          {[...Array(Math.max(5, 11 - floor))].map((__, col) => (
            <rect key={col}
              x={322 + floor * 8 + col * Math.floor((556 - floor * 16) / Math.max(5, 11 - floor))}
              y={113 + floor * 37}
              width={Math.floor((556 - floor * 16) / Math.max(5, 11 - floor)) - 4}
              height={30}
              fill="url(#offGlass)" stroke="#93c5fd" strokeWidth="0.6" rx="1"
            />
          ))}
          {/* Floor slab line */}
          <line
            x1={310 + floor * 8} y1={110 + floor * 37}
            x2={890 - floor * 8} y2={110 + floor * 37}
            stroke="#cbd5e1" strokeWidth="1.2"
          />
        </g>
      ))}

      {/* Roof parapet */}
      <rect x="382" y="103" width="436" height="12" fill="#e2e8f0" stroke="#cbd5e1" strokeWidth="1" />
      {/* Blue accent stripe */}
      <rect x="382" y="108" width="436" height="7" fill="#3b82f6" opacity="0.6" />

      {/* Rooftop elements */}
      <rect x="480" y="78" width="50" height="28" rx="2" fill="#f1f5f9" stroke="#e2e8f0" strokeWidth="1" />
      <rect x="560" y="68" width="80" height="38" rx="2" fill="#f1f5f9" stroke="#e2e8f0" strokeWidth="1" />
      <rect x="660" y="74" width="60" height="32" rx="2" fill="#f1f5f9" stroke="#e2e8f0" strokeWidth="1" />
      {/* Antenna */}
      <line x1="600" y1="68" x2="600" y2="38" stroke="#94a3b8" strokeWidth="2" />
      <circle cx="600" cy="36" r="3" fill="#3b82f6" opacity="0.7">
        <animate attributeName="opacity" values="0.7;0.15;0.7" dur="1.6s" repeatCount="indefinite" />
      </circle>
      {/* Flag */}
      <line x1="720" y1="74" x2="720" y2="48" stroke="#94a3b8" strokeWidth="1.5" />
      <polygon points="720,48 742,54 720,60" fill="#3b82f6" opacity="0.6">
        <animateTransform attributeName="transform" type="translate" values="0,0;3,0;0,0" dur="2s" repeatCount="indefinite" />
      </polygon>

      {/* Reflection / shadow on ground */}
      <ellipse cx="600" cy="516" rx="300" ry="12" fill="#94a3b8" opacity="0.1" />

      {/* Plaza detail — bollards */}
      {[320, 380, 820, 880].map((x, i) => (
        <g key={i}>
          <rect x={x - 3} y={516} width={6} height={18} rx="3" fill="#94a3b8" opacity="0.5" />
          <ellipse cx={x} cy={516} rx={6} ry={3} fill="#94a3b8" opacity="0.3" />
        </g>
      ))}

      {/* Walking figures */}
      <g opacity="0.35">
        <ellipse cx="430" cy="530" rx="5" ry="12" fill="#64748b" />
        <circle cx="430" cy="515" r="5" fill="#64748b" />
      </g>
      <g opacity="0.3">
        <ellipse cx="770" cy="528" rx="4" ry="10" fill="#64748b" />
        <circle cx="770" cy="515" r="4" fill="#64748b" />
      </g>

      {/* Car (parked) */}
      <g>
        <rect x="260" y="548" width="110" height="36" rx="5" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="1" />
        <rect x="276" y="540" width="78" height="22" rx="4" fill="#dbeafe" stroke="#93c5fd" strokeWidth="0.8" />
        <circle cx="282" cy="586" r="8" fill="#cbd5e1" stroke="#94a3b8" strokeWidth="1" />
        <circle cx="358" cy="586" r="8" fill="#cbd5e1" stroke="#94a3b8" strokeWidth="1" />
      </g>

      {/* Ambient light bloom from sun */}
      <ellipse cx="970" cy="110" rx="180" ry="70" fill="#fef3c7" opacity="0.08" />
    </g>
  </svg>
);

const OfficePlanSVG = () => (
  <svg viewBox="0 0 560 400" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <defs>
      <pattern id="gridOff" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
        <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#e2e8f0" strokeWidth="0.5" />
      </pattern>
    </defs>
    <rect width="560" height="400" fill="#f8fafc" />
    <rect width="560" height="400" fill="url(#gridOff)" />

    {/* Outer boundary */}
    <rect x="30" y="25" width="500" height="350" fill="none" stroke="#3b82f6" strokeWidth="2.5" rx="2" />

    {/* Open office zone */}
    <rect x="35" y="30" width="310" height="200" fill="#eff6ff" opacity="0.8" />
    <rect x="35" y="30" width="310" height="200" fill="none" stroke="#3b82f6" strokeWidth="1" />
    {[...Array(4)].map((_, row) =>
      [...Array(5)].map((__, col) => (
        <g key={`${row}-${col}`}>
          <rect x={48 + col * 58} y={45 + row * 45} width={36} height={24} fill="#dbeafe" stroke="#60a5fa" strokeWidth="0.7" rx="1" />
          <rect x={62 + col * 58} y={53 + row * 45} width={8} height={10} fill="#93c5fd" opacity="0.6" rx="1" />
        </g>
      ))
    )}
    <text x="190" y="242" textAnchor="middle" fontSize="9" fill="#1d4ed8" fontFamily="monospace" fontWeight="700">OPEN OFFICE — WORKSTATIONS</text>

    {/* Meeting rooms */}
    <rect x="350" y="30" width="175" height="200" fill="#f0fdf4" opacity="0.9" />
    <rect x="350" y="30" width="175" height="200" fill="none" stroke="#16a34a" strokeWidth="1" />
    {/* Room dividers */}
    <line x1="350" y1="115" x2="525" y2="115" stroke="#16a34a" strokeWidth="0.8" strokeDasharray="4,3" />
    <text x="437" y="80" textAnchor="middle" fontSize="8" fill="#15803d" fontFamily="monospace" fontWeight="700">BOARDROOM</text>
    <rect x="368" y="50" width="139" height="52" rx="2" fill="#dcfce7" stroke="#16a34a" strokeWidth="0.7" />
    {[374, 404, 434, 464, 494].map((x, i) => (
      <rect key={i} x={x} y={58} width={18} height={36} rx="1" fill="#a3e635" opacity="0.3" />
    ))}
    <text x="437" y="178" textAnchor="middle" fontSize="8" fill="#15803d" fontFamily="monospace" fontWeight="700">MEETING ROOM</text>
    <rect x="368" y="128" width="139" height="62" rx="2" fill="#dcfce7" stroke="#16a34a" strokeWidth="0.7" />

    {/* Lobby */}
    <rect x="35" y="235" width="150" height="135" fill="#faf5ff" opacity="0.9" />
    <rect x="35" y="235" width="150" height="135" fill="none" stroke="#7c3aed" strokeWidth="1.2" />
    <text x="110" y="305" textAnchor="middle" fontSize="9" fill="#6d28d9" fontFamily="monospace" fontWeight="700">LOBBY</text>
    {/* Reception desk */}
    <rect x="60" y="275" width="100" height="24" rx="3" fill="#ede9fe" stroke="#7c3aed" strokeWidth="0.8" />
    <text x="110" y="291" textAnchor="middle" fontSize="7" fill="#5b21b6" fontFamily="monospace">RECEPTION</text>

    {/* Utility */}
    <rect x="190" y="235" width="155" height="135" fill="#fff7ed" opacity="0.9" />
    <rect x="190" y="235" width="155" height="135" fill="none" stroke="#ea580c" strokeWidth="1.2" strokeDasharray="5,3" />
    <text x="267" y="305" textAnchor="middle" fontSize="9" fill="#c2410c" fontFamily="monospace" fontWeight="700">UTILITIES + MEP</text>

    {/* Parking / service */}
    <rect x="350" y="235" width="175" height="135" fill="#f0fdf4" opacity="0.9" />
    <rect x="350" y="235" width="175" height="135" fill="none" stroke="#16a34a" strokeWidth="1.2" />
    <text x="437" y="305" textAnchor="middle" fontSize="9" fill="#15803d" fontFamily="monospace" fontWeight="700">PARKING + SERVICE</text>

    {/* Doors */}
    {[50, 140, 230, 320, 410, 490].map((x, i) => (
      <g key={i}>
        <rect x={x} y={368} width={48} height={8} rx="1" fill="#3b82f6" opacity="0.6" />
        <text x={x + 24} y={376} textAnchor="middle" fontSize="7" fill="#1e40af" fontFamily="monospace">ENTRY {i + 1}</text>
      </g>
    ))}

    {/* Grid lines */}
    <line x1="345" y1="30" x2="345" y2="370" stroke="#3b82f6" strokeWidth="0.7" strokeDasharray="5,4" opacity="0.4" />
    <line x1="35" y1="230" x2="530" y2="230" stroke="#3b82f6" strokeWidth="0.7" strokeDasharray="5,4" opacity="0.4" />

    {/* Compass */}
    <g transform="translate(520,55)">
      <circle cx="0" cy="0" r="16" fill="white" stroke="#3b82f6" strokeWidth="1" />
      <text x="0" y="-4" textAnchor="middle" fontSize="8" fill="#1d4ed8" fontWeight="700" fontFamily="monospace">N</text>
      <polygon points="0,-12 2.5,0 0,-4 -2.5,0" fill="#3b82f6" />
      <polygon points="0,12 2.5,0 0,4 -2.5,0" fill="#94a3b8" />
    </g>

    {/* Scale */}
    <line x1="40" y1="390" x2="140" y2="390" stroke="#3b82f6" strokeWidth="1.5" opacity="0.7" />
    <line x1="40" y1="386" x2="40" y2="394" stroke="#3b82f6" strokeWidth="1.5" opacity="0.7" />
    <line x1="140" y1="386" x2="140" y2="394" stroke="#3b82f6" strokeWidth="1.5" opacity="0.7" />
    <text x="90" y="400" textAnchor="middle" fontSize="8" fill="#1d4ed8" fontFamily="monospace">40 m</text>
  </svg>
);

const BuildingElevationSVG = () => (
  <svg viewBox="0 0 560 340" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <defs>
      <linearGradient id="elevGlass" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#dbeafe" stopOpacity="0.9" />
        <stop offset="100%" stopColor="#bfdbfe" stopOpacity="0.6" />
      </linearGradient>
      <linearGradient id="elevFacade" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#f8fafc" />
        <stop offset="100%" stopColor="#f1f5f9" />
      </linearGradient>
    </defs>
    <rect width="560" height="340" fill="#f8fafc" />

    {/* Ground */}
    <rect x="20" y="278" width="520" height="40" fill="#e2e8f0" stroke="#cbd5e1" strokeWidth="1" />
    <text x="280" y="300" textAnchor="middle" fontSize="9" fill="#64748b" fontFamily="monospace">GROUND LEVEL — ± 0.00 m</text>

    {/* Building base */}
    <rect x="60" y="240" width="440" height="40" fill="#f1f5f9" stroke="#e2e8f0" strokeWidth="1.2" />
    {/* Lobby glazing */}
    <rect x="210" y="242" width="140" height="37" fill="url(#elevGlass)" stroke="#60a5fa" strokeWidth="1" rx="1" />

    {/* Tower floors */}
    {[...Array(8)].map((_, floor) => (
      <g key={floor}>
        <rect x={80 + floor * 10} y={40 + floor * 25} width={400 - floor * 20} height={25}
          fill="url(#elevFacade)" stroke="#e2e8f0" strokeWidth="1" />
        {[...Array(Math.max(4, 9 - floor))].map((__, col) => {
          const panels = Math.max(4, 9 - floor);
          const totalW = 380 - floor * 20;
          const panelW = Math.floor(totalW / panels) - 4;
          return (
            <rect key={col}
              x={88 + floor * 10 + col * Math.floor(totalW / panels)}
              y={43 + floor * 25}
              width={panelW}
              height={19}
              fill="url(#elevGlass)" stroke="#93c5fd" strokeWidth="0.6" rx="1"
            />
          );
        })}
        <line
          x1={80 + floor * 10} y1={40 + floor * 25}
          x2={480 - floor * 10} y2={40 + floor * 25}
          stroke="#cbd5e1" strokeWidth="1.2"
        />
      </g>
    ))}

    {/* Parapet */}
    <rect x="160" y="30" width="240" height="12" fill="#e2e8f0" stroke="#cbd5e1" strokeWidth="1" />
    <rect x="160" y="35" width="240" height="7" fill="#3b82f6" opacity="0.55" />

    {/* Roof elements */}
    <rect x="220" y="12" width="50" height="20" rx="2" fill="#f1f5f9" stroke="#e2e8f0" strokeWidth="1" />
    <rect x="290" y="6" width="70" height="26" rx="2" fill="#f1f5f9" stroke="#e2e8f0" strokeWidth="1" />
    <line x1="325" y1="6" x2="325" y2="0" stroke="#94a3b8" strokeWidth="1.5" />

    {/* Dimension lines */}
    <line x1="22" y1="40" x2="22" y2="278" stroke="#3b82f6" strokeWidth="0.8" opacity="0.6" />
    <line x1="17" y1="40" x2="27" y2="40" stroke="#3b82f6" strokeWidth="0.8" opacity="0.6" />
    <line x1="17" y1="278" x2="27" y2="278" stroke="#3b82f6" strokeWidth="0.8" opacity="0.6" />
    <text x="10" y="163" textAnchor="middle" fontSize="8" fill="#1d4ed8" fontFamily="monospace" transform="rotate(-90,10,163)">40.0 m</text>

    <line x1="60" y1="310" x2="500" y2="310" stroke="#3b82f6" strokeWidth="0.8" opacity="0.6" />
    <line x1="60" y1="305" x2="60" y2="315" stroke="#3b82f6" strokeWidth="0.8" opacity="0.6" />
    <line x1="500" y1="305" x2="500" y2="315" stroke="#3b82f6" strokeWidth="0.8" opacity="0.6" />
    <text x="280" y="325" textAnchor="middle" fontSize="8" fill="#1d4ed8" fontFamily="monospace">60.0 m — building width</text>

    {/* Floor labels */}
    {['G+8', 'G+7', 'G+6', 'G+5', 'G+4', 'G+3', 'G+2', 'G+1'].map((lbl, i) => (
      <text key={i} x="535" y={54 + i * 25} textAnchor="start" fontSize="7" fill="#94a3b8" fontFamily="monospace">{lbl}</text>
    ))}

    <text x="280" y="18" textAnchor="middle" fontSize="10" fill="#374151" fontFamily="monospace" fontWeight="700">FRONT ELEVATION — COMMERCIAL OFFICE BUILDING</text>
  </svg>
);

/* ═══════════════════════════════════════════════════════════════════
   COUNTER HOOK
═══════════════════════════════════════════════════════════════════ */
const useCounter = (target, duration = 1800) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      let start = 0;
      const step = Math.max(1, Math.ceil(target / (duration / 16)));
      const timer = setInterval(() => {
        start = Math.min(start + step, target);
        setCount(start);
        if (start >= target) clearInterval(timer);
      }, 16);
      observer.disconnect();
    }, { threshold: 0.2 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, duration]);
  return [count, ref];
};

/* ═══════════════════════════════════════════════════════════════════
   MAIN COMPONENT
═══════════════════════════════════════════════════════════════════ */
const CommercialOfficeProject = () => {
  const navigate = useNavigate();
  const [areaCount, areaRef] = useCounter(40000);
  const [floorCount, floorRef] = useCounter(9);
  const [parkCount, parkRef] = useCounter(120);
  const [yearCount, yearRef] = useCounter(2024);

  const features = [
    {
      icon: (
        <svg viewBox="0 0 44 44" width="40" height="40">
          <rect x="6" y="10" width="32" height="26" fill="#eff6ff" stroke="#2563eb" strokeWidth="1.2" rx="2" />
          {[10, 18, 26, 34].map(x => (
            <rect key={x} x={x} y={16} width={5} height={14} fill="#bfdbfe" stroke="#60a5fa" strokeWidth="0.6" rx="1" />
          ))}
          <rect x="6" y="10" width="32" height="5" fill="#2563eb" opacity="0.4" rx="2" />
          <rect x="18" y="30" width="8" height="6" fill="#2563eb" opacity="0.5" rx="1" />
        </svg>
      ),
      title: 'Curtain Wall Facade',
      desc: 'High-performance double-glazed curtain wall system providing thermal efficiency and a professional aesthetic.',
      accent: '#2563eb',
    },
    {
      icon: (
        <svg viewBox="0 0 44 44" width="40" height="40">
          <rect x="8" y="8" width="28" height="28" fill="#f0fdf4" stroke="#16a34a" strokeWidth="1.2" rx="3" />
          <path d="M14 22 L20 28 L30 16" fill="none" stroke="#16a34a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="36" cy="10" r="6" fill="#dcfce7" stroke="#16a34a" strokeWidth="1" />
          <text x="36" y="14" textAnchor="middle" fontSize="8" fill="#15803d" fontWeight="700">A</text>
        </svg>
      ),
      title: 'Efficient Design',
      desc: 'Designed with a focus on energy efficiency and practical building performance.',
      accent: '#16a34a',
    },
    {
      icon: (
        <svg viewBox="0 0 44 44" width="40" height="40">
          <rect x="6" y="30" width="32" height="10" fill="#faf5ff" stroke="#7c3aed" strokeWidth="1.2" rx="2" />
          <rect x="14" y="20" width="16" height="12" fill="#faf5ff" stroke="#7c3aed" strokeWidth="1.2" />
          <rect x="20" y="10" width="4" height="12" fill="#7c3aed" opacity="0.5" />
          <rect x="10" y="26" width="4" height="6" fill="#ede9fe" stroke="#7c3aed" strokeWidth="0.8" rx="1" />
          <rect x="30" y="26" width="4" height="6" fill="#ede9fe" stroke="#7c3aed" strokeWidth="0.8" rx="1" />
          <circle cx="12" cy="41" r="3" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="0.8" />
          <circle cx="32" cy="41" r="3" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="0.8" />
        </svg>
      ),
      title: 'Basement Parking',
      desc: '120-car capacity basement parking with automated management system and secure parking facility designed for safe vehicle management.',
      accent: '#7c3aed',
    },
    {
      icon: (
        <svg viewBox="0 0 44 44" width="40" height="40">
          <rect x="6" y="14" width="32" height="22" fill="#fff7ed" stroke="#ea580c" strokeWidth="1.2" rx="2" />
          <circle cx="22" cy="25" r="7" fill="#fff7ed" stroke="#ea580c" strokeWidth="1.2" />
          <path d="M22 21 L22 25 L26 25" fill="none" stroke="#ea580c" strokeWidth="1.4" strokeLinecap="round" />
          <circle cx="22" cy="25" r="2" fill="#ea580c" />
          <rect x="14" y="8" width="16" height="8" rx="2" fill="#fff7ed" stroke="#ea580c" strokeWidth="1.2" />
          <line x1="18" y1="8" x2="18" y2="14" stroke="#ea580c" strokeWidth="0.8" />
          <line x1="26" y1="8" x2="26" y2="14" stroke="#ea580c" strokeWidth="0.8" />
        </svg>
      ),
      title: 'Building Systems',
      desc: 'Well-planned electrical, lighting, and ventilation systems for smooth building operation.',
      accent: '#ea580c',
    },
  ];

  const timeline = [
    { year: '2023', q: 'Q1', title: 'Planning & Design',       desc: 'Architectural design, structural engineering, MEP coordination, and HMDA regulatory approvals.',         color: '#2563eb', bg: '#eff6ff', done: true },
    { year: '2023', q: 'Q2', title: 'Foundation Work',          desc: 'Pile foundation, raft slab, basement excavation, and waterproofing layers completed.',                   color: '#7c3aed', bg: '#f5f3ff', done: true },
    { year: '2023', q: 'Q4', title: 'Structural Frame',         desc: 'RCC structural frame, G+8 floors, core walls, and lift shafts constructed.',                           color: '#16a34a', bg: '#f0fdf4', done: true },
    { year: '2024', q: 'Q1', title: 'Facade & MEP',            desc: 'Curtain wall glazing, electrical, plumbing, HVAC, and fire suppression systems installed.',             color: '#d97706', bg: '#fffbeb', done: true },
    { year: '2024', q: 'Q3', title: 'Interiors & Handover',    desc: 'Lobby fit-out, lift installation, landscaping, occupancy certificate, and client handover.',            color: '#16a34a', bg: '#f0fdf4', done: true },
  ];

const specs = [
  { label: 'Total Built-up', value: '40,000 sq ft' },
  { label: 'Plot Area', value: 'Approx. 1 Acre' },
  { label: 'Building Height', value: 'G + 8 Floors' },
  { label: 'Floor Space', value: 'Spacious Layouts' },
  { label: 'Parking', value: 'Basement Parking Available' },
  { label: 'Structure', value: 'RCC Construction' },
  { label: 'Facade', value: 'Modern Exterior Design' },
  { label: 'Utilities', value: 'Electrical & Water Systems' },
  { label: 'Safety', value: 'Basic Safety Measures' },
  { label: 'Design', value: 'Functional & Efficient' },
];

  return (
    <>
      <ScrollToTop />
      <div className="min-h-screen overflow-hidden bg-white" style={{ fontFamily: "'Inter', system-ui, sans-serif", color: '#1e293b' }}>
        <Navbar />

        {/* ── HERO ── */}
        <section className="relative min-h-screen w-full flex flex-col justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-slate-50 to-indigo-50">
          <div className="absolute inset-0 opacity-95"><OfficeHeroSVG /></div>
          <div className="absolute bottom-0 left-0 right-0 h-72 bg-gradient-to-t from-white via-white/75 to-transparent" />
          <div className="absolute top-0 left-0 right-0 h-28 bg-gradient-to-b from-white/50 to-transparent" />

          <div className="relative z-10 container mx-auto px-6 pt-24 pb-0">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur border border-slate-200 rounded-full px-4 py-1.5 mb-8 shadow-sm">
              <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
              <span className="text-xs font-medium tracking-widest text-slate-500 uppercase">Hyderabad · Commercial · Completed</span>
            </div>

            <h1 className="text-6xl md:text-8xl font-bold text-slate-900 mb-3 leading-[0.92] tracking-tight">
              Commercial<br />
              <span className="text-blue-600">Office</span>
            </h1>
            <p className="text-sm font-semibold text-blue-500 tracking-widest mb-7 uppercase">G + 8 Floors · Curtain Wall Facade</p>

            <p className="text-base md:text-lg text-slate-500 max-w-xl mb-10 leading-relaxed">
              A 40,000 sq ft premium commercial office building in Hyderabad — designed for modern business operations with efficient layouts, energy-efficient glazing, and BMS-integrated infrastructure.
            </p>

            {/* Status pill */}
            <div className="inline-flex items-center gap-3 bg-green-50 border border-green-200 rounded-full px-5 py-2.5 shadow-sm">
              <div className="w-2 h-2 rounded-full bg-green-500" />
              <span className="text-green-700 text-sm font-semibold tracking-wide">Completed — Handed Over 2024</span>
            </div>
          </div>
        </section>

        {/* ── COUNTERS ── */}
        <section className="py-5 border-y border-slate-100 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-slate-100">
              {[
                { ref: areaRef,  count: areaCount,  suffix: '',  unit: 'Sq Ft',   label: 'Total Built-up Area' },
                { ref: floorRef, count: floorCount,  suffix: '',  unit: 'Floors',  label: 'G + 8 Structure'     },
                { ref: parkRef,  count: parkCount,   suffix: '+', unit: 'Cars',    label: 'Basement Parking'    },
                { ref: yearRef,  count: yearCount,   suffix: '',  unit: 'Year',    label: 'Project Completed'   },
              ].map(({ ref, count, suffix, unit, label }) => (
                <div key={label} ref={ref} className="text-center py-8 px-4 group">
                  <div className="text-4xl md:text-5xl font-bold text-slate-900 tabular-nums mb-1">{label === 'Project Completed' ? count.toString() : count.toLocaleString()}{suffix}</div>
                  <div className="text-xs font-semibold text-blue-500 tracking-widest uppercase mb-1">{unit}</div>
                  <div className="text-xs text-slate-400 tracking-wide">{label}</div>
                  <div className="mt-3 h-0.5 w-8 bg-blue-400 mx-auto group-hover:w-16 transition-all duration-500" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── PROJECT OVERVIEW ── */}
        <section className="py-24 bg-slate-50 border-t border-slate-100">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
              >
                <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-8 h-0.5 bg-blue-600 rounded-full"></div>
              <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">project overview</span>
              <div className="w-8 h-0.5 bg-blue-600 rounded-full"></div>
            </div>
                <h2 className="text-4xl font-bold text-slate-900 mb-6 leading-tight">
                  Functional and<br /><span className="text-blue-600">Modern Spaces</span>
                </h2>
                <p className="text-slate-400 text-sm leading-relaxed mb-8">
                  This project delivers a practical, efficient office environment tailored for corporate and professional tenants. Designed with proper planning and engineered for durability, the building combines a contemporary curtain wall exterior with well-organised floor plates.
                </p>
                <div className="space-y-5">
                  {[
                    { title: 'Efficient Layout Design',     desc: 'Column-free floor plates with 4,200 sq ft per floor — optimised for open-plan and cabin configurations.' },
                    { title: 'Quality Construction',        desc: 'RCC frame with IS-compliant design, premium finishes, and 50-year design life.' },
                    { title: 'Practical Infrastructure',    desc: 'Two-level basement parking, dedicated service lift, 24/7 power backup, and fibre-ready conduits.' },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="w-2 h-2 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-slate-800 text-sm mb-1">{item.title}</h4>
                        <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
                className="rounded-2xl overflow-hidden border border-slate-200 shadow-xl shadow-slate-100"
              >
                <div className="bg-white px-4 py-2.5 flex items-center gap-2 border-b border-slate-200">
                  <div className="w-2 h-2 rounded-full bg-blue-500" />
                  <span className="text-xs font-medium text-slate-400 tracking-widest uppercase">Front Elevation</span>
                </div>
                <BuildingElevationSVG />
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── FEATURES ── */}
        <section className="py-24 bg-white border-t border-slate-100">
          <div className="container mx-auto px-6">
            <div className="max-w-2xl mb-14">
              <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-8 h-0.5 bg-blue-600 rounded-full"></div>
              <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">building features</span>
              <div className="w-8 h-0.5 bg-blue-600 rounded-full"></div>
            </div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
                Built for<br /><span className="text-blue-600">Business</span>
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
              {features.map((f, i) => (
                <div key={i} className="group p-7 bg-slate-50 border border-slate-100 hover:border-blue-200 rounded-2xl transition-all duration-300 hover:shadow-lg hover:shadow-blue-50">
                  <div className="mb-5 group-hover:scale-105 transition-transform duration-300">{f.icon}</div>
                  <h4 className="text-sm font-bold text-slate-800 mb-2">{f.title}</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">{f.desc}</p>
                  <div className="mt-5 h-0.5 w-0 group-hover:w-full transition-all duration-500" style={{ background: f.accent }} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FLOOR PLAN ── */}
        <section className="py-24 bg-slate-50 border-t border-slate-100">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="flex flex-col lg:flex-row gap-16 items-start">
              <div className="lg:w-3/5 w-full">
                <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-xl shadow-slate-100">
                  <div className="bg-white px-4 py-2.5 flex items-center gap-2 border-b border-slate-200">
                    <div className="w-2 h-2 rounded-full bg-blue-500" />
                    <span className="text-xs font-medium text-slate-400 tracking-widest uppercase">Typical Floor Plan</span>
                  </div>
                  <OfficePlanSVG />
                </div>
              </div>
              <div className="lg:w-2/5 lg:sticky lg:top-28">
               <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-8 h-0.5 bg-blue-600 rounded-full"></div>
              <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">floor plan</span>
              <div className="w-8 h-0.5 bg-blue-600 rounded-full"></div>
            </div>
                <h2 className="text-4xl font-bold text-slate-900 mb-5 leading-tight">Strategic<br /><span className="text-blue-600">Zoning</span></h2>
                <p className="text-slate-400 text-sm leading-relaxed mb-8">
                  Each floor is designed for maximum usability — open workstations, enclosed boardrooms, a welcoming lobby, and clean MEP routing ensure both efficiency and comfort.
                </p>
                <div className="space-y-0 border border-slate-100 rounded-xl overflow-hidden">
                  {[
                    { color: '#2563eb', label: 'Open Office Workstations',    area: '2,100 sq ft' },
                    { color: '#16a34a', label: 'Boardroom + Meeting Rooms',    area: '800 sq ft'   },
                    { color: '#7c3aed', label: 'Lobby and Reception',          area: '500 sq ft'   },
                    { color: '#ea580c', label: 'Utilities and MEP',            area: '400 sq ft'   },
                    { color: '#16a34a', label: 'Parking and Service',          area: '400 sq ft'   },
                  ].map((z, i) => (
                    <div key={z.label} className={`flex items-center justify-between py-3 px-4 ${i < 4 ? 'border-b border-slate-100' : ''} hover:bg-slate-50 transition-colors`}>
                      <div className="flex items-center gap-3">
                        <div className="w-2.5 h-2.5 rounded-sm flex-shrink-0" style={{ background: z.color }} />
                        <span className="text-xs text-slate-600">{z.label}</span>
                      </div>
                      <span className="text-xs font-bold text-blue-600">{z.area}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── TIMELINE ── */}
        <section className="py-24 bg-white border-t border-slate-100">
          <div className="container mx-auto px-6 max-w-4xl">
            <div className="text-center mb-14">
              <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-8 h-0.5 bg-blue-600 rounded-full"></div>
              <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">project timeline</span>
              <div className="w-8 h-0.5 bg-blue-600 rounded-full"></div>
            </div>
              <h2 className="text-4xl font-bold text-slate-900">From Vision<br /><span className="text-blue-600">to Reality</span></h2>
            </div>
            <div className="relative">
              <div className="absolute left-5 top-0 bottom-0 w-px bg-slate-100" />
              <div className="space-y-6">
                {timeline.map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    viewport={{ once: true }}
                    className="flex gap-6"
                  >
                    <div className="relative flex-shrink-0 z-10">
                      <div className="w-10 h-10 rounded-full flex items-center justify-center border-2"
                        style={{ backgroundColor: item.bg, borderColor: item.color }}>
                        <span className="text-xs font-bold" style={{ color: item.color }}>✓</span>
                      </div>
                    </div>
                    <div className="pt-1 pb-6">
                      <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                        <span className="text-xs px-2.5 py-0.5 rounded-full font-semibold tracking-wide"
                          style={{ background: item.bg, color: item.color, border: `1px solid ${item.color}30` }}>
                          {item.year} {item.q}
                        </span>
                        <h4 className="text-sm font-bold text-slate-800">{item.title}</h4>
                      </div>
                      <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── SPECIFICATIONS ── */}
        <section className="py-24 bg-slate-50 border-t border-slate-100">
          <div className="container mx-auto px-6 max-w-5xl">
            <div className="text-center mb-14">
              <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-8 h-0.5 bg-blue-600 rounded-full"></div>
              <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">technical data</span>
              <div className="w-8 h-0.5 bg-blue-600 rounded-full"></div>
            </div>
              <h2 className="text-4xl font-bold text-slate-900">Project <span className="text-blue-600">Specifications</span></h2>
            </div>
            <div className="grid md:grid-cols-2 gap-px rounded-2xl overflow-hidden border border-slate-200 bg-slate-200 shadow-xl shadow-slate-100">
              {specs.map((s) => (
                <div key={s.label} className="flex justify-between items-center px-8 py-4 hover:bg-blue-50 transition-colors bg-white">
                  <span className="text-xs font-semibold tracking-widest text-slate-400 uppercase">{s.label}</span>
                  <span className="text-sm font-bold text-blue-600">{s.value}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-28 bg-slate-900 border-t border-slate-800">
          <div className="container mx-auto px-6 max-w-3xl text-center">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-8 h-0.5 bg-blue-600 rounded-full"></div>
              <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">commission a project</span>
              <div className="w-8 h-0.5 bg-blue-600 rounded-full"></div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-5 leading-tight">
              Need a Commercial<br /><span className="text-blue-400">Office Building?</span>
            </h2>
            <p className="text-slate-400 text-sm mb-10 leading-relaxed max-w-xl mx-auto">
              From site planning to building handover — we deliver Grade-A commercial office buildings, IT parks, and mixed-use developments across Hyderabad and Telangana.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button onClick={() => navigate('/contact')}
                className="px-10 py-4 bg-blue-600 text-white font-bold text-sm tracking-widest uppercase hover:bg-blue-500 transition-all rounded-xl hover:shadow-2xl hover:shadow-blue-500/25">
                Start a Project
              </button>
              <button onClick={() => navigate('/projects')}
                className="px-10 py-4 border border-slate-700 text-slate-300 font-bold text-sm tracking-widest uppercase hover:border-blue-500/50 hover:text-blue-400 transition-all rounded-xl">
                View All Projects
              </button>
            </div>
          </div>
        </section>

        <Footer />

        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');
          html { scroll-behavior: smooth; }
          * { box-sizing: border-box; }
        `}</style>
      </div>
    </>
  );
};

export default CommercialOfficeProject;