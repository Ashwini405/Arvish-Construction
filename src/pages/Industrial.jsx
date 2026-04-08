
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion, useInView, useAnimation } from "framer-motion";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Factory, Warehouse, Cog, Zap, CheckCircle, Building2, TrendingUp, MapPin } from "lucide-react";

// ─── Animated SVG Hero Illustration ────────────────────────────────────────
function HeroIllustration() {
  return (
    <svg
      viewBox="0 0 900 500"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="skyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#dbeafe" />
          <stop offset="100%" stopColor="#eff6ff" />
        </linearGradient>
        <linearGradient id="buildingGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#bfdbfe" />
          <stop offset="100%" stopColor="#93c5fd" />
        </linearGradient>
        <linearGradient id="roofGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#1e3a8a" />
          <stop offset="100%" stopColor="#1d4ed8" />
        </linearGradient>
        <linearGradient id="groundGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#e2e8f0" />
          <stop offset="100%" stopColor="#cbd5e1" />
        </linearGradient>
        <linearGradient id="glassGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#bfdbfe" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#eff6ff" stopOpacity="0.4" />
        </linearGradient>
        <filter id="shadow" x="-10%" y="-10%" width="120%" height="130%">
          <feDropShadow dx="0" dy="6" stdDeviation="8" floodColor="#1e3a8a" floodOpacity="0.12" />
        </filter>
        <filter id="softShadow">
          <feDropShadow dx="2" dy="4" stdDeviation="4" floodColor="#1e40af" floodOpacity="0.15" />
        </filter>
        <clipPath id="sceneClip">
          <rect width="900" height="500" />
        </clipPath>
      </defs>

      <g clipPath="url(#sceneClip)">
        {/* Sky */}
        <rect width="900" height="500" fill="url(#skyGrad)" />

        {/* Floating grid dots – blueprint feel */}
        {Array.from({ length: 18 }).map((_, c) =>
          Array.from({ length: 10 }).map((_, r) => (
            <circle
              key={`${c}-${r}`}
              cx={c * 52 + 10}
              cy={r * 52 + 10}
              r="1.2"
              fill="#93c5fd"
              opacity="0.35"
            />
          ))
        )}

        {/* Ground */}
        <rect x="0" y="400" width="900" height="100" fill="url(#groundGrad)" />
        <rect x="0" y="398" width="900" height="4" fill="#94a3b8" opacity="0.4" />

        {/* ── Far background small factory ── */}
        <g opacity="0.35" filter="url(#softShadow)">
          <rect x="50" y="320" width="90" height="80" fill="#bfdbfe" rx="2" />
          <rect x="50" y="312" width="90" height="12" fill="#1d4ed8" rx="1" />
          <rect x="65" y="330" width="18" height="22" fill="url(#glassGrad)" rx="1" />
          <rect x="95" y="330" width="18" height="22" fill="url(#glassGrad)" rx="1" />
          {/* chimney */}
          <rect x="115" y="295" width="10" height="25" fill="#60a5fa" rx="2" />
          <rect x="125" y="295" width="10" height="15" fill="#60a5fa" rx="2" />
        </g>

        {/* ── Main warehouse building (center-left) ── */}
        <g filter="url(#shadow)">
          {/* Body */}
          <rect x="150" y="230" width="260" height="170" fill="#eff6ff" rx="4" />
          {/* Roof truss */}
          <polygon points="140,232 280,185 420,232" fill="url(#roofGrad)" />
          <polygon points="140,232 280,185 420,232" fill="none" stroke="#1e3a8a" strokeWidth="1.5" opacity="0.3" />
          {/* Ridge line */}
          <line x1="280" y1="185" x2="280" y2="232" stroke="#93c5fd" strokeWidth="1.5" />

          {/* Large shutter door */}
          <rect x="195" y="310" width="100" height="90" fill="#bfdbfe" rx="3" />
          {/* door lines */}
          {[0, 1, 2, 3, 4].map((i) => (
            <line key={i} x1="195" y1={310 + i * 18} x2="295" y2={310 + i * 18} stroke="#93c5fd" strokeWidth="1" />
          ))}
          <rect x="235" y="395" width="22" height="5" fill="#60a5fa" rx="2" />

          {/* Windows row */}
          {[0, 1, 2].map((i) => (
            <rect key={i} x={170 + i * 70} y="248" width="42" height="30" fill="url(#glassGrad)" rx="3" />
          ))}

          {/* Side panel detail */}
          <rect x="310" y="280" width="90" height="120" fill="#dbeafe" rx="2" />
          <rect x="320" y="295" width="30" height="40" fill="url(#glassGrad)" rx="2" />
          <rect x="360" y="295" width="30" height="40" fill="url(#glassGrad)" rx="2" />

          {/* Chimneys */}
          <rect x="190" y="175" width="14" height="55" fill="#3b82f6" rx="3" />
          <rect x="360" y="190" width="12" height="42" fill="#3b82f6" rx="3" />
        </g>

        {/* Smoke puffs */}
        <g opacity="0.6">
          <motion.circle cx="197" cy="165" r="10" fill="white"
            style={{ animation: "smokeRise 3s ease-in-out infinite" }} />
          <motion.circle cx="205" cy="148" r="7" fill="white"
            style={{ animation: "smokeRise 3s ease-in-out 0.5s infinite" }} />
          <motion.circle cx="195" cy="133" r="5" fill="white"
            style={{ animation: "smokeRise 3s ease-in-out 1s infinite" }} />
          <motion.circle cx="366" cy="180" r="8" fill="white"
            style={{ animation: "smokeRise 3.5s ease-in-out 0.3s infinite" }} />
          <motion.circle cx="373" cy="165" r="5" fill="white"
            style={{ animation: "smokeRise 3.5s ease-in-out 0.8s infinite" }} />
        </g>

        {/* ── Modern office annex (right) ── */}
        <g filter="url(#shadow)">
          <rect x="450" y="200" width="200" height="200" fill="#f0f9ff" rx="4" />
          {/* top accent bar */}
          <rect x="450" y="200" width="200" height="10" fill="#1d4ed8" rx="4" />
          {/* Glass curtain wall grid */}
          {[0, 1, 2, 3].map((col) =>
            [0, 1, 2, 3, 4].map((row) => (
              <rect
                key={`w-${col}-${row}`}
                x={458 + col * 46}
                y={220 + row * 34}
                width="38"
                height="26"
                fill="url(#glassGrad)"
                rx="2"
                opacity="0.85"
              />
            ))
          )}
          {/* door */}
          <rect x="515" y="340" width="50" height="60" fill="url(#glassGrad)" rx="3" />
          <rect x="538" y="370" width="6" height="10" fill="#60a5fa" rx="1" />
        </g>

        {/* ── Small structure far right ── */}
        <g opacity="0.55" filter="url(#softShadow)">
          <rect x="680" y="310" width="120" height="90" fill="#bfdbfe" rx="3" />
          <polygon points="670,312 740,275 810,312" fill="#1e40af" />
          <rect x="700" y="340" width="30" height="30" fill="url(#glassGrad)" rx="2" />
          <rect x="750" y="340" width="30" height="30" fill="url(#glassGrad)" rx="2" />
          <rect x="720" y="355" width="28" height="45" fill="url(#glassGrad)" rx="2" />
          <rect x="675" y="285" width="8" height="30" fill="#3b82f6" rx="2" />
        </g>

        {/* ── Forklift illustration ── */}
        <g transform="translate(88, 350)">
          {/* body */}
          <rect x="0" y="10" width="55" height="30" fill="#fbbf24" rx="4" />
          {/* cabin */}
          <rect x="35" y="0" width="22" height="20" fill="#f59e0b" rx="3" />
          {/* window */}
          <rect x="38" y="3" width="14" height="12" fill="url(#glassGrad)" rx="2" />
          {/* mast */}
          <rect x="0" y="-30" width="5" height="42" fill="#d97706" rx="1" />
          <rect x="5" y="-30" width="5" height="42" fill="#b45309" rx="1" />
          {/* forks */}
          <rect x="-18" y="6" width="18" height="4" fill="#92400e" rx="1" />
          <rect x="-18" y="14" width="18" height="4" fill="#92400e" rx="1" />
          {/* wheels */}
          <circle cx="10" cy="42" r="8" fill="#374151" />
          <circle cx="10" cy="42" r="4" fill="#6b7280" />
          <circle cx="48" cy="42" r="8" fill="#374151" />
          <circle cx="48" cy="42" r="4" fill="#6b7280" />
        </g>

        {/* ── Crane arm (decorative) ── */}
        <g opacity="0.7">
          <line x1="820" y1="80" x2="820" y2="370" stroke="#1e3a8a" strokeWidth="6" strokeLinecap="round" />
          <line x1="820" y1="90" x2="680" y2="90" stroke="#1e3a8a" strokeWidth="5" strokeLinecap="round" />
          <line x1="820" y1="90" x2="870" y2="90" stroke="#1e3a8a" strokeWidth="4" strokeLinecap="round" />
          {/* cable */}
          <line x1="700" y1="90" x2="700" y2="200" stroke="#60a5fa" strokeWidth="2" strokeDasharray="4,4" />
          {/* hook box */}
          <rect x="685" y="198" width="32" height="22" fill="#bfdbfe" rx="3" stroke="#1d4ed8" strokeWidth="1.5" />
          {/* truss diagonals */}
          {[0, 1, 2, 3].map((i) => (
            <line key={i} x1={683 + i * 35} y1="90" x2={700 + i * 35} y2="110" stroke="#60a5fa" strokeWidth="1.2" opacity="0.5" />
          ))}
          {/* counterweight */}
          <rect x="850" y="80" width="30" height="20" fill="#1d4ed8" rx="3" />
        </g>

        {/* ── Road markings ── */}
        {[0, 1, 2, 3, 4, 5, 6].map((i) => (
          <rect key={i} x={i * 130 + 20} y="404" width="60" height="5" fill="white" opacity="0.4" rx="2" />
        ))}

        {/* ── Floating spec labels (blueprint style) ── */}
        <g fontFamily="monospace" fontSize="11" fill="#93c5fd" opacity="0.55">
          <line x1="420" y1="207" x2="450" y2="207" stroke="#93c5fd" strokeWidth="1" strokeDasharray="3,3" />
          <text x="422" y="204">MAIN FACILITY</text>
          <line x1="280" y1="185" x2="280" y2="155" stroke="#93c5fd" strokeWidth="1" strokeDasharray="3,3" />
          <text x="248" y="150">RIDGE +18m</text>
          <line x1="650" y1="200" x2="680" y2="200" stroke="#93c5fd" strokeWidth="1" strokeDasharray="3,3" />
          <text x="652" y="197">ANNEX BLOCK</text>
        </g>

        {/* ── Animated measurement arrows ── */}
        <g stroke="#93c5fd" strokeWidth="1" opacity="0.3" markerEnd="url(#arrow)">
          <line x1="150" y1="415" x2="410" y2="415" />
          <line x1="150" y1="418" x2="150" y2="412" />
          <line x1="410" y1="418" x2="410" y2="412" />
        </g>
        <text x="255" y="430" fontFamily="monospace" fontSize="10" fill="#93c5fd" opacity="0.4" textAnchor="middle">260m²</text>
      </g>

      {/* Smoke animation keyframes via style */}
      <style>{`
        @keyframes smokeRise {
          0%   { transform: translateY(0) scale(1);   opacity: 0.6; }
          50%  { transform: translateY(-14px) scale(1.3); opacity: 0.3; }
          100% { transform: translateY(-28px) scale(0.8); opacity: 0; }
        }
      `}</style>
    </svg>
  );
}

// ─── Floating geometry background ──────────────────────────────────────────
function GeometryBg() {
  return (
    <svg className="absolute inset-0 w-full h-full pointer-events-none" aria-hidden="true">
      <defs>
        <linearGradient id="heroBase" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#eff6ff" />
          <stop offset="50%" stopColor="#dbeafe" />
          <stop offset="100%" stopColor="#bfdbfe" />
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#heroBase)" />
      {/* Large hex shapes */}
      <polygon points="80,40 130,10 180,40 180,100 130,130 80,100" fill="#1d4ed8" opacity="0.04" />
      <polygon points="750,20 820,-20 890,20 890,110 820,150 750,110" fill="#3b82f6" opacity="0.05" />
      <polygon points="30,300 90,260 150,300 150,380 90,420 30,380" fill="#1e3a8a" opacity="0.03" />
      {/* Grid lines */}
      {Array.from({ length: 12 }).map((_, i) => (
        <line key={`v${i}`} x1={`${i * 9}%`} y1="0" x2={`${i * 9}%`} y2="100%" stroke="#93c5fd" strokeWidth="0.5" opacity="0.2" />
      ))}
      {Array.from({ length: 8 }).map((_, i) => (
        <line key={`h${i}`} x1="0" y1={`${i * 15}%`} x2="100%" y2={`${i * 15}%`} stroke="#93c5fd" strokeWidth="0.5" opacity="0.2" />
      ))}
      {/* Diagonal accent */}
      <line x1="0" y1="100%" x2="60%" y2="0" stroke="#1d4ed8" strokeWidth="1.5" opacity="0.06" />
      <line x1="100%" y1="0" x2="40%" y2="100%" stroke="#1d4ed8" strokeWidth="1" opacity="0.05" />
    </svg>
  );
}

// ─── 3-D isometric building icon ───────────────────────────────────────────
function IsoBuildingIcon({ color = "#1d4ed8", size = 48 }) {
  const s = size;
  return (
    <svg width={s} height={s} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* iso left face */}
      <polygon points="4,30 24,18 24,42 4,42" fill={color} opacity="0.55" />
      {/* iso right face */}
      <polygon points="24,18 44,30 44,42 24,42" fill={color} opacity="0.75" />
      {/* iso top face */}
      <polygon points="4,30 24,18 44,30 24,42" fill={color} opacity="0.95" />
      {/* window dots */}
      <rect x="8" y="32" width="5" height="5" fill="white" opacity="0.6" rx="1" />
      <rect x="28" y="32" width="5" height="5" fill="white" opacity="0.6" rx="1" />
      <rect x="36" y="32" width="5" height="5" fill="white" opacity="0.6" rx="1" />
    </svg>
  );
}

// ─── Animated counter ───────────────────────────────────────────────────────
function AnimatedStat({ value, label, icon: Icon, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.05, y: -4, boxShadow: "0 26px 70px rgba(30,64,175,0.16)" }}
      transition={{ delay, duration: 0.45, type: "spring", stiffness: 220, damping: 22 }}
      viewport={{ once: true }}
      className="flex flex-col items-center bg-white border border-blue-100 rounded-2xl p-5 shadow-sm cursor-pointer"
    >
      <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center mb-3">
        <Icon size={20} className="text-blue-600" />
      </div>
      <p className="text-2xl font-black text-blue-700 tracking-tight">{value}</p>
      <p className="text-xs text-slate-500 mt-1 text-center leading-tight">{label}</p>
    </motion.div>
  );
}

// ─── Main Page ──────────────────────────────────────────────────────────────
export default function Industrial() {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, threshold: 0.1 });

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [inView, controls]);

  const projects = [
    { name: "Industrial Warehouse Construction", location: "Hyderabad", type: "Warehouse", status: "Completed" },
    { name: "Factory Building Project", location: "Telangana", type: "Manufacturing Unit", status: "Completed" },
    { name: "Logistics Storage Facility", location: "Hyderabad", type: "Storage Unit", status: "Ongoing" },
    { name: "Industrial Shed Development", location: "Telangana", type: "Industrial Shed", status: "Upcoming" },
  ];

  const features = [
    { icon: Factory, title: "Factory Buildings", desc: "Construction of industrial facilities designed for manufacturing and production at scale." },
    { icon: Warehouse, title: "Warehouses", desc: "Storage and logistics buildings built for efficient, high-throughput operations." },
    { icon: Cog, title: "Industrial Structures", desc: "Strong and durable structures engineered for demanding industrial environments." },
    { icon: Zap, title: "Utility Support", desc: "End-to-end infrastructure integration for power, plumbing, and utility systems." },
  ];

  const statusStyle = {
    Completed: { bg: "bg-emerald-50", text: "text-emerald-700", dot: "bg-emerald-500" },
    Ongoing: { bg: "bg-blue-50", text: "text-blue-700", dot: "bg-blue-500" },
    Upcoming: { bg: "bg-amber-50", text: "text-amber-700", dot: "bg-amber-500" },
  };

  const stats = [
    { value: "50+", label: "Industrial Projects", icon: Building2 },
    { value: "9+", label: "Years Experience", icon: TrendingUp },
    { value: "25+", label: "Clients Served", icon: MapPin },
    { value: "100%", label: "Quality Commitment", icon: CheckCircle },
  ];

  // Project type SVG icons
  const projectIcons = {
    Warehouse: (
      <svg viewBox="0 0 80 60" className="w-full h-full" fill="none">
        <rect x="5" y="25" width="70" height="30" fill="#bfdbfe" rx="2" />
        <polygon points="0,27 40,5 80,27" fill="#1d4ed8" />
        <rect x="18" y="35" width="14" height="20" fill="#60a5fa" rx="1" />
        <rect x="48" y="35" width="14" height="20" fill="#60a5fa" rx="1" />
        <rect x="33" y="38" width="15" height="17" fill="#93c5fd" rx="1" />
        {[0, 1, 2].map(i => <line key={i} x1="33" y1={41 + i * 5} x2="48" y2={41 + i * 5} stroke="#1d4ed8" strokeWidth="0.8" opacity="0.4" />)}
      </svg>
    ),
    "Manufacturing Unit": (
      <svg viewBox="0 0 80 60" className="w-full h-full" fill="none">
        <rect x="5" y="20" width="50" height="35" fill="#bfdbfe" rx="2" />
        <rect x="55" y="30" width="22" height="25" fill="#dbeafe" rx="2" />
        <rect x="5" y="20" width="50" height="6" fill="#1d4ed8" rx="1" />
        <rect x="14" y="30" width="10" height="12" fill="#60a5fa" rx="1" />
        <rect x="30" y="30" width="10" height="12" fill="#60a5fa" rx="1" />
        <rect x="15" y="10" width="6" height="14" fill="#3b82f6" rx="2" />
        <rect x="28" y="5" width="6" height="18" fill="#3b82f6" rx="2" />
        <circle cx="18" cy="8" r="5" fill="white" opacity="0.5" />
        <circle cx="31" cy="3" r="4" fill="white" opacity="0.4" />
      </svg>
    ),
    "Storage Unit": (
      <svg viewBox="0 0 80 60" className="w-full h-full" fill="none">
        <rect x="8" y="18" width="64" height="37" fill="#bfdbfe" rx="3" />
        <rect x="8" y="18" width="64" height="8" fill="#1e3a8a" rx="2" />
        <rect x="8" y="18" width="64" height="3" fill="#1d4ed8" />
        {[0, 1, 2, 3].map(i => <rect key={i} x={14 + i * 16} y="32" width="10" height="23" fill="#93c5fd" rx="1" />)}
        <rect x="30" y="38" width="22" height="17" fill="#60a5fa" rx="1" />
        {[0, 1, 2].map(i => <line key={i} x1="30" y1={41 + i * 5} x2="52" y2={41 + i * 5} stroke="#1d4ed8" strokeWidth="0.8" opacity="0.4" />)}
      </svg>
    ),
    "Industrial Shed": (
      <svg viewBox="0 0 80 60" className="w-full h-full" fill="none">
        <rect x="4" y="28" width="72" height="27" fill="#bfdbfe" rx="2" />
        <polygon points="0,30 40,8 80,30" fill="#1d4ed8" opacity="0.85" />
        <rect x="10" y="36" width="15" height="19" fill="#93c5fd" rx="1" />
        <rect x="34" y="36" width="15" height="19" fill="#93c5fd" rx="1" />
        <rect x="57" y="36" width="15" height="19" fill="#93c5fd" rx="1" />
        {[0, 1, 2].map(i => <line key={i} x1={10 + i * 23} y1="36" x2={25 + i * 23} y2="36" stroke="#1d4ed8" strokeWidth="0.8" opacity="0.3" />)}
      </svg>
    ),
  };

  return (
    <div className="bg-white min-h-screen font-sans" style={{ fontFamily: "'DM Sans', 'Segoe UI', system-ui, sans-serif" }}>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700;900&family=Syne:wght@700;800&display=swap');

        .font-display { font-family: 'Syne', sans-serif; }

        @keyframes smokeRise {
          0%   { transform: translateY(0) scale(1);   opacity: 0.55; }
          50%  { transform: translateY(-12px) scale(1.25); opacity: 0.25; }
          100% { transform: translateY(-26px) scale(0.7); opacity: 0; }
        }
        @keyframes floatUp {
          0%, 100% { transform: translateY(0px); }
          50%      { transform: translateY(-10px); }
        }
        @keyframes rotateSlow {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50%      { opacity: 0.3; }
        }
        .animate-float     { animation: floatUp 5s ease-in-out infinite; }
        .animate-float-d   { animation: floatUp 7s ease-in-out 1.5s infinite; }
        .animate-spin-slow { animation: rotateSlow 18s linear infinite; }
        .animate-blink     { animation: blink 2s ease-in-out infinite; }

        .card-hover {
          transition: transform 0.35s cubic-bezier(.22,1,.36,1), box-shadow 0.35s ease;
        }
        .card-hover:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 50px rgba(29,78,216,0.1);
        }

        /* Thin top-border accent on feature cards */
        .feature-card::before {
          content: '';
          display: block;
          height: 3px;
          width: 0;
          background: linear-gradient(90deg, #1d4ed8, #60a5fa);
          border-radius: 2px;
          transition: width 0.4s ease;
          margin-bottom: 1.25rem;
        }
        .feature-card:hover::before { width: 100%; }
      `}</style>

      <Navbar />

      {/* ══════════════════════════════════════════════════
          HERO SECTION — fully illustration-based, no photos
          ══════════════════════════════════════════════════ */}
      <section className="relative min-h-[72vh] flex flex-col justify-start overflow-hidden">
        <GeometryBg />

        {/* Floating orbs */}
        <div className="absolute top-16 left-10 w-72 h-72 rounded-full bg-blue-200 opacity-20 blur-3xl animate-float pointer-events-none" />
        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-indigo-200 opacity-15 blur-3xl animate-float-d pointer-events-none" />

        {/* Spinning blueprint circle */}
        <div className="absolute right-8 top-12 w-28 h-28 opacity-10 animate-spin-slow pointer-events-none">
          <svg viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="44" stroke="#1d4ed8" strokeWidth="1.5" fill="none" strokeDasharray="8 4" />
            <circle cx="50" cy="50" r="30" stroke="#1d4ed8" strokeWidth="1" fill="none" />
            <line x1="50" y1="6" x2="50" y2="94" stroke="#1d4ed8" strokeWidth="0.8" />
            <line x1="6" y1="50" x2="94" y2="50" stroke="#1d4ed8" strokeWidth="0.8" />
          </svg>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pt-16 pb-10 grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          {/* Left — Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Breadcrumb */}
            <motion.div
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.22, duration: 0.65 }}
              style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: '1.2rem' }}
            >
              <div style={{ width: 28, height: 1, background: '#6a7a8a' }} />
              <span style={{ fontSize: 10, fontWeight: 600, color: '#6a7a8a', letterSpacing: '0.22em', textTransform: 'uppercase', fontFamily: 'sans-serif' }}>
                Services / Industries
              </span>
              <div style={{ width: 28, height: 1, background: '#6a7a8a' }} />
            </motion.div>


            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 leading-[1.05] mb-6">
              Industrial<br />
              <span className="text-transparent bg-clip-text" style={{ backgroundImage: "linear-gradient(135deg,#1d4ed8 0%,#60a5fa 100%)" }}>
                Construction
              </span>
            </h1>

            <p className="text-slate-500 text-lg leading-relaxed max-w-md mb-8">
              We build warehouses, factories, and storage units engineered for efficiency,
              durability, and decades of practical use — on time and within budget.
            </p>



            {/* Mini stats row */}

          </motion.div>

          {/* Right — SVG illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative mt-10 lg:mt-17"
          >
            {/* Card frame */}
            <div className="relative rounded-3xl overflow-hidden bg-white border border-blue-100 shadow-2xl shadow-blue-100 animate-float">
              <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-blue-600 via-blue-400 to-indigo-500 rounded-t-3xl" />
              <div className="p-4">
                <HeroIllustration />
              </div>

            </div>




          </motion.div>
        </div>

        {/* Bottom wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 60L1440 60L1440 20C1200 55 960 0 720 30C480 60 240 10 0 40Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          FEATURES SECTION
          ══════════════════════════════════════════════════ */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-8 h-0.5 bg-blue-600 rounded-full"></div>
              <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">Our Capabilities</span>
              <div className="w-8 h-0.5 bg-blue-600 rounded-full"></div>
            </div>

            <h2 className="font-display text-4xl md:text-5xl font-extrabold text-slate-900 mt-5 mb-3">Industrial Expertise</h2>
            <p className="text-slate-500 max-w-xl mx-auto">From foundation to finish, we manage every aspect of industrial construction with precision and professionalism.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="feature-card card-hover bg-white border border-slate-100 rounded-2xl p-7 group"
              >
                <div className="w-14 h-14 rounded-2xl bg-blue-50 group-hover:bg-blue-600 flex items-center justify-center mb-5 transition-colors duration-300">
                  <feature.icon size={26} className="text-blue-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-lg font-bold text-slate-800 mb-2">{feature.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          CAPABILITY SECTION (replaces photo with 3-D iso scene)
          ══════════════════════════════════════════════════ */}
      <section ref={ref} className="py-24 px-6" style={{ background: "linear-gradient(135deg,#f0f9ff 0%,#e0f2fe 50%,#eff6ff 100%)" }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left text */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7 }}
            >
              <div className="inline-flex items-center gap-3 mb-4">
                <div className="w-8 h-0.5 bg-blue-600 rounded-full"></div>
                <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">Our Capability</span>
                <div className="w-8 h-0.5 bg-blue-600 rounded-full"></div>
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-extrabold text-slate-900 mt-4 mb-6">
                Industrial Facilities<br />Built for Performance
              </h2>
              <p className="text-slate-500 leading-relaxed mb-4">
                Industrial construction demands precision engineering, heavy-duty materials,
                and a deep understanding of complex operational requirements. Our team delivers
                on every dimension.
              </p>
              <p className="text-slate-500 leading-relaxed mb-10">
                We focus on strong, practical spaces with efficient layouts, proper planning,
                and timely execution — so your facility is ready when you need it.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {stats.map((stat, idx) => (
                  <AnimatedStat key={idx} {...stat} delay={idx * 0.1} />
                ))}
              </div>
            </motion.div>

            {/* Right — animated isometric 3D SVG scene */}
            <motion.div
              initial={{ opacity: 0, scale: 0.93 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="relative"
            >
              <div className="rounded-3xl overflow-hidden border border-blue-100 shadow-2xl shadow-blue-100 bg-white animate-float-d">
                <svg viewBox="0 0 480 360" xmlns="http://www.w3.org/2000/svg" className="w-full">
                  <defs>
                    <linearGradient id="isoSky" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#dbeafe" />
                      <stop offset="100%" stopColor="#eff6ff" />
                    </linearGradient>
                    <linearGradient id="isoFloor" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#e2e8f0" />
                      <stop offset="100%" stopColor="#f1f5f9" />
                    </linearGradient>
                  </defs>
                  <rect width="480" height="360" fill="url(#isoSky)" />

                  {/* Grid floor */}
                  {Array.from({ length: 9 }).map((_, i) => (
                    <line key={`gv${i}`} x1={60 + i * 45} y1="200" x2={240 + i * 45} y2="340" stroke="#cbd5e1" strokeWidth="0.8" />
                  ))}
                  {Array.from({ length: 6 }).map((_, i) => (
                    <line key={`gh${i}`} x1={60 + i * 30} y1={200 + i * 23} x2={420 + i * 0} y2={200 + i * 23} stroke="#cbd5e1" strokeWidth="0.8" />
                  ))}

                  {/* Iso building A */}
                  <g transform="translate(80,60)">
                    <polygon points="0,130 80,90 160,130 160,220 80,260 0,220" fill="#1d4ed8" opacity="0.08" />
                    {/* left */}
                    <polygon points="0,130 80,90 80,190 0,230" fill="#bfdbfe" />
                    {/* right */}
                    <polygon points="80,90 160,130 160,230 80,190" fill="#93c5fd" />
                    {/* top */}
                    <polygon points="0,130 80,90 160,130 80,170" fill="#dbeafe" />
                    {/* windows left */}
                    {[0, 1].map(r => [0, 1].map(c => (
                      <polygon key={`wl${r}${c}`}
                        points={`${8 + c * 25},${150 + r * 28} ${32 + c * 25},${138 + r * 28} ${32 + c * 25},${155 + r * 28} ${8 + c * 25},${167 + r * 28}`}
                        fill="#60a5fa" opacity="0.7" />
                    )))}
                    {/* windows right */}
                    {[0, 1].map(r => [0, 1].map(c => (
                      <polygon key={`wr${r}${c}`}
                        points={`${88 + c * 25},${148 + r * 28} ${112 + c * 25},${160 + r * 28} ${112 + c * 25},${177 + r * 28} ${88 + c * 25},${165 + r * 28}`}
                        fill="#60a5fa" opacity="0.55" />
                    )))}
                    {/* door */}
                    <polygon points="30,195 55,183 55,230 30,230" fill="#1d4ed8" opacity="0.5" />
                  </g>

                  {/* Iso building B (smaller, right) */}
                  <g transform="translate(255,100)">
                    <polygon points="0,80 60,50 120,80 120,160 60,190 0,160" fill="#3b82f6" opacity="0.06" />
                    <polygon points="0,80 60,50 60,130 0,160" fill="#dbeafe" />
                    <polygon points="60,50 120,80 120,160 60,130" fill="#bfdbfe" />
                    <polygon points="0,80 60,50 120,80 60,110" fill="#eff6ff" />
                    {/* window right */}
                    <polygon points="68,100 95,115 95,135 68,120" fill="#60a5fa" opacity="0.65" />
                    {/* chimney */}
                    <rect x="52" y="30" width="6" height="22" fill="#3b82f6" rx="2" transform="skewX(-5)" />
                    <circle cx="55" cy="28" r="7" fill="white" opacity="0.45" />
                    <circle cx="55" cy="22" r="5" fill="white" opacity="0.3" />
                  </g>

                  {/* Road */}
                  <ellipse cx="240" cy="300" rx="160" ry="28" fill="#e2e8f0" opacity="0.7" />
                  {[0, 1, 2].map(i => (
                    <line key={i} x1={150 + i * 35} y1="300" x2={175 + i * 35} y2="300" stroke="white" strokeWidth="2.5" opacity="0.6" />
                  ))}

                  {/* Tiny forklift */}
                  <g transform="translate(160,268) scale(0.55)">
                    <rect x="0" y="10" width="55" height="28" fill="#fbbf24" rx="3" />
                    <rect x="36" y="2" width="20" height="18" fill="#f59e0b" rx="2" />
                    <rect x="38" y="4" width="14" height="11" fill="#bfdbfe" opacity="0.8" rx="1" />
                    <rect x="0" y="-22" width="5" height="34" fill="#d97706" rx="1" />
                    <rect x="5" y="-22" width="4" height="34" fill="#b45309" rx="1" />
                    <rect x="-14" y="7" width="14" height="3" fill="#92400e" rx="1" />
                    <rect x="-14" y="14" width="14" height="3" fill="#92400e" rx="1" />
                    <circle cx="10" cy="40" r="7" fill="#374151" />
                    <circle cx="10" cy="40" r="3.5" fill="#6b7280" />
                    <circle cx="45" cy="40" r="7" fill="#374151" />
                    <circle cx="45" cy="40" r="3.5" fill="#6b7280" />
                  </g>

                  {/* Decorative gear */}
                  <g transform="translate(410,50)" opacity="0.12">
                    <circle cx="20" cy="20" r="18" stroke="#1d4ed8" strokeWidth="3" fill="none" />
                    <circle cx="20" cy="20" r="8" stroke="#1d4ed8" strokeWidth="2" fill="none" />
                    {[0, 45, 90, 135, 180, 225, 270, 315].map((deg, i) => (
                      <rect key={i} x="17" y="0" width="6" height="7" fill="#1d4ed8" rx="1"
                        transform={`rotate(${deg},20,20)`} />
                    ))}
                  </g>


                </svg>
              </div>


            </motion.div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          PROJECTS SECTION — SVG illustration cards
          ══════════════════════════════════════════════════ */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-8 h-0.5 bg-blue-600 rounded-full"></div>
              <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">Our Work</span>
              <div className="w-8 h-0.5 bg-blue-600 rounded-full"></div>
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-extrabold text-slate-900 mt-5">Featured Industrial Projects</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
            {projects.map((project, idx) => {
              const st = statusStyle[project.status];
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="card-hover bg-white border border-slate-100 rounded-2xl overflow-hidden flex shadow-sm group"
                >
                  {/* SVG illustration panel */}
                  <div className="w-2/5 bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center p-6 min-h-[160px]">
                    <div className="w-full h-28 group-hover:scale-105 transition-transform duration-500">
                      {projectIcons[project.type]}
                    </div>
                  </div>

                  {/* Info */}
                  <div className="w-3/5 p-7 flex flex-col justify-center">
                    {/* Status badge */}
                    <span className={`inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full mb-3 w-fit ${st.bg} ${st.text}`}>
                      <span className={`w-1.5 h-1.5 rounded-full ${st.dot}`} />
                      {project.status}
                    </span>
                    <h3 className="text-lg font-bold text-slate-800 mb-1 group-hover:text-blue-600 transition-colors leading-snug">
                      {project.name}
                    </h3>
                    <p className="text-sm text-slate-400 mb-1">{project.type}</p>
                    <div className="flex items-center gap-1 text-xs text-slate-400 mt-1">
                      <MapPin size={11} />
                      {project.location}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          CTA SECTION
          ══════════════════════════════════════════════════ */}
      <section className="py-20 px-6" style={{ background: "linear-gradient(135deg, #e0f2fe 0%, #bae6fd 60%, #ffffff 100%)" }}>
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {/* Decorative circles — lightened for the new palette */}
            <div className="flex justify-center gap-2 mb-6">
              {[12, 8, 5].map((s, i) => (
                <div key={i} className="rounded-full bg-blue-400/30" style={{ width: s * 4, height: s * 4 }} />
              ))}
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-extrabold text-slate-800 mb-5">
              Ready to Build Something Exceptional?
            </h2>
            <p className="text-slate-600 text-lg mb-10 max-w-xl mx-auto">
              Let's discuss your industrial project. Our team is ready to deliver on time, within budget.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/projects" className="px-8 py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-colors shadow-lg inline-flex items-center justify-center">
                Start Your Project
              </Link>
              <Link to="/contact" className="px-8 py-4 border-2 border-blue-300 text-slate-700 font-semibold rounded-xl hover:bg-blue-50 transition-colors inline-flex items-center justify-center">
                Contact Us →
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}