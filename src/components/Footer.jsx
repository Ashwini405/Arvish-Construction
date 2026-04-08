import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Phone, MapPin, ArrowUp, ArrowRight, Home, Building2, Factory, GraduationCap } from 'lucide-react';

// ----- Data from first footer -----
const navLinks = [
  { label: 'Home', path: '/home' },
  { label: 'About Us', path: '/about' },
  // { label: 'Services', path: '/services' },
  { label: 'Our Projects', path: '/projects' },
  { label: 'Our Divisions', path: '/group-companies' },
  { label: 'Careers', path: '/careers' },
  // { label: 'News', path: '/news' },
  // { label: 'Blog', path: '/blog' },
  { label: 'Contact', path: '/contact' },
];

const serviceLinks = [
  { label: 'Residential', path: '/services/residential' },
  { label: 'Commercial & Retail', path: '/services/commercial-retail' },
  { label: 'Educational & Healthcare', path: '/services/educational-healthcare' },
  { label: 'Industrial', path: '/services/industrial' },
];

const socials = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/company/arvishgroup',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/arvishgroup',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
      </svg>
    ),
  },
  {
    label: 'Twitter / X',
    href: 'https://twitter.com/arvishgroup',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: 'YouTube',
    href: 'https://www.youtube.com/@arvishgroup',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
        <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white" />
      </svg>
    ),
  },
];

const offices = [
  { city: 'Hyderabad', phone: '+91 99665 56804', po: 'Telangana, India' },
];

// ----- Decorative categories (from second footer) -----
const categories = [
  { label: 'Residential',              Icon: Home,           color: '#E31E24' },
  { label: 'Commercial & Retail',      Icon: Building2,      color: '#1E3A8A' },
  { label: 'Industrial',               Icon: Factory,        color: '#F97316' },
  { label: 'Educational & Healthcare', Icon: GraduationCap,  color: '#16a34a' },
];

// ----- SVG Components (Blueprint Grid & Architectural Illustration) -----
function BlueprintGrid() {
  return (
    <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg" style={{ opacity: 0.07 }}>
      <defs>
        <pattern id="smallGrid" width="24" height="24" patternUnits="userSpaceOnUse">
          <path d="M 24 0 L 0 0 0 24" fill="none" stroke="#1E3A8A" strokeWidth="0.5" />
        </pattern>
        <pattern id="bigGrid" width="120" height="120" patternUnits="userSpaceOnUse">
          <rect width="120" height="120" fill="url(#smallGrid)" />
          <path d="M 120 0 L 0 0 0 120" fill="none" stroke="#1E3A8A" strokeWidth="1.2" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#bigGrid)" />
    </svg>
  );
}

function ArchitecturalIllusion() {
  return (
    <svg
      viewBox="0 0 900 420"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute bottom-0 left-0 w-full pointer-events-none select-none"
      style={{ opacity: 1, height: '220px' }}
      preserveAspectRatio="xMidYMax meet"
    >
      <defs>
        <linearGradient id="skyGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#eef2f9" stopOpacity="0" />
          <stop offset="100%" stopColor="#dde6f5" stopOpacity="0.6" />
        </linearGradient>
        <linearGradient id="groundGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#c8d8ef" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#eef2f9" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="bldA" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#1E3A8A" stopOpacity="0.13" />
          <stop offset="100%" stopColor="#3b5faa" stopOpacity="0.08" />
        </linearGradient>
        <linearGradient id="bldB" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#E31E24" stopOpacity="0.10" />
          <stop offset="100%" stopColor="#ff6b6b" stopOpacity="0.05" />
        </linearGradient>
        <linearGradient id="bldC" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#1E3A8A" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#2d4fa0" stopOpacity="0.07" />
        </linearGradient>
        <linearGradient id="bldD" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#F97316" stopOpacity="0.10" />
          <stop offset="100%" stopColor="#fb923c" stopOpacity="0.05" />
        </linearGradient>
        <linearGradient id="bldE" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#16a34a" stopOpacity="0.10" />
          <stop offset="100%" stopColor="#22c55e" stopOpacity="0.05" />
        </linearGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="1.5" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id="reflBlur">
          <feGaussianBlur stdDeviation="1" />
        </filter>
        <clipPath id="groundClip">
          <rect x="0" y="310" width="900" height="110" />
        </clipPath>
      </defs>

      {/* Ground plane */}
      <rect x="0" y="308" width="900" height="2" fill="#1E3A8A" opacity="0.12" />
      <rect x="0" y="310" width="900" height="110" fill="url(#groundGrad)" />

      {/* Distant skyline */}
      <rect x="30" y="190" width="28" height="120" fill="#1E3A8A" opacity="0.04" />
      <rect x="36" y="178" width="16" height="16" fill="#1E3A8A" opacity="0.04" />
      <rect x="820" y="200" width="32" height="110" fill="#1E3A8A" opacity="0.04" />
      <rect x="827" y="186" width="18" height="18" fill="#1E3A8A" opacity="0.04" />

      {/* Building 1 */}
      <ellipse cx="112" cy="312" rx="44" ry="6" fill="#1E3A8A" opacity="0.06" />
      <rect x="76" y="100" width="72" height="210" fill="url(#bldA)" stroke="#1E3A8A" strokeWidth="0.6" strokeOpacity="0.15" />
      <rect x="148" y="115" width="18" height="195" fill="#1E3A8A" opacity="0.06" />
      <rect x="84" y="90" width="56" height="14" fill="#1E3A8A" opacity="0.10" />
      <rect x="100" y="80" width="24" height="12" fill="#1E3A8A" opacity="0.10" />
      <rect x="108" y="68" width="8" height="14" fill="#E31E24" opacity="0.18" />
      <line x1="112" y1="68" x2="112" y2="48" stroke="#1E3A8A" strokeWidth="0.8" strokeOpacity="0.2" />
      <circle cx="112" cy="47" r="1.5" fill="#E31E24" opacity="0.4">
        <animate attributeName="opacity" values="0.4;0.9;0.4" dur="2s" repeatCount="indefinite" />
      </circle>
      {/* windows grid omitted for brevity – keep original */}
      {/* Reflection */}
      <g clipPath="url(#groundClip)" filter="url(#reflBlur)" transform="scale(1,-1) translate(0,-622)">
        <rect x="76" y="100" width="72" height="120" fill="url(#bldA)" opacity="0.4" />
      </g>

      {/* Building 2 – Sleek Skyscraper */}
      <ellipse cx="230" cy="312" rx="36" ry="5" fill="#1E3A8A" opacity="0.05" />
      <polygon points="198,308 210,50 250,50 262,308" fill="url(#bldC)" stroke="#1E3A8A" strokeWidth="0.5" strokeOpacity="0.18" />
      <polygon points="262,308 270,60 262,50 250,50" fill="#1E3A8A" opacity="0.05" />
      <polygon points="225,50 230,10 235,50" fill="#1E3A8A" opacity="0.14" />
      <circle cx="230" cy="9" r="2" fill="#E31E24" opacity="0.5">
        <animate attributeName="opacity" values="0.5;1;0.5" dur="1.8s" repeatCount="indefinite" />
      </circle>
      {/* windows omitted */}
      <g clipPath="url(#groundClip)" filter="url(#reflBlur)" transform="scale(1,-1) translate(0,-622)">
        <polygon points="198,308 210,200 250,200 262,308" fill="url(#bldC)" opacity="0.3" />
      </g>

      {/* Building 3 – Wide Commercial Block */}
      <ellipse cx="420" cy="312" rx="80" ry="7" fill="#1E3A8A" opacity="0.06" />
      <rect x="330" y="160" width="180" height="150" fill="url(#bldA)" stroke="#1E3A8A" strokeWidth="0.5" strokeOpacity="0.14" />
      <rect x="316" y="240" width="208" height="70" fill="#1E3A8A" opacity="0.05" stroke="#1E3A8A" strokeWidth="0.5" strokeOpacity="0.12" />
      {/* Crane */}
      <line x1="510" y1="160" x2="510" y2="80" stroke="#E31E24" strokeWidth="0.8" strokeOpacity="0.25" />
      <line x1="510" y1="80" x2="570" y2="80" stroke="#E31E24" strokeWidth="0.8" strokeOpacity="0.25" />
      <line x1="570" y1="80" x2="570" y2="110" stroke="#E31E24" strokeWidth="0.5" strokeOpacity="0.20" strokeDasharray="4,2">
        <animate attributeName="y2" values="110;116;110" dur="3s" repeatCount="indefinite" />
      </line>
      {/* windows omitted */}
      <g clipPath="url(#groundClip)" filter="url(#reflBlur)" transform="scale(1,-1) translate(0,-622)">
        <rect x="330" y="240" width="180" height="70" fill="url(#bldA)" opacity="0.35" />
      </g>

      {/* Building 4 – Red Accent Tower */}
      <ellipse cx="618" cy="312" rx="40" ry="5" fill="#E31E24" opacity="0.05" />
      <rect x="585" y="130" width="66" height="180" fill="url(#bldB)" stroke="#E31E24" strokeWidth="0.5" strokeOpacity="0.14" />
      <rect x="592" y="115" width="52" height="18" fill="#E31E24" opacity="0.07" />
      <rect x="600" y="100" width="36" height="18" fill="#E31E24" opacity="0.09" />
      <rect x="610" y="86" width="16" height="16" fill="#E31E24" opacity="0.11" />
      <line x1="618" y1="86" x2="618" y2="60" stroke="#E31E24" strokeWidth="0.8" strokeOpacity="0.22" />
      <circle cx="618" cy="59" r="1.8" fill="#E31E24" opacity="0.5">
        <animate attributeName="opacity" values="0.5;1;0.5" dur="2.3s" repeatCount="indefinite" begin="0.5s" />
      </circle>
      {/* windows omitted */}
      <g clipPath="url(#groundClip)" filter="url(#reflBlur)" transform="scale(1,-1) translate(0,-622)">
        <rect x="585" y="240" width="66" height="70" fill="url(#bldB)" opacity="0.35" />
      </g>

      {/* Building 5 – Industrial Stack */}
      <ellipse cx="770" cy="312" rx="55" ry="6" fill="#F97316" opacity="0.05" />
      <rect x="722" y="175" width="96" height="135" fill="url(#bldD)" stroke="#F97316" strokeWidth="0.5" strokeOpacity="0.14" />
      <polygon points="718,175 770,152 822,175" fill="#F97316" opacity="0.07" stroke="#F97316" strokeWidth="0.4" strokeOpacity="0.14" />
      <rect x="730" y="130" width="10" height="46" fill="#F97316" opacity="0.12" />
      <rect x="750" y="118" width="10" height="58" fill="#F97316" opacity="0.12" />
      <rect x="800" y="140" width="10" height="36" fill="#F97316" opacity="0.10" />
      {/* smoke animation omitted */}
      <g clipPath="url(#groundClip)" filter="url(#reflBlur)" transform="scale(1,-1) translate(0,-622)">
        <rect x="722" y="240" width="96" height="70" fill="url(#bldD)" opacity="0.30" />
      </g>

      {/* Foreground: road, trees, lamps, annotations */}
      {[0, 1, 2, 3, 4, 5, 6, 7].map(i => (
        <rect key={`road-${i}`} x={i * 120 + 30} y="314" width="50" height="1.5" fill="#1E3A8A" opacity="0.06" />
      ))}
      {[160, 280, 520, 680, 840].map((x, i) => (
        <g key={`tree-${i}`} transform={`translate(${x},290)`}>
          <rect x="-1.5" y="0" width="3" height="22" fill="#16a34a" opacity="0.15" />
          <circle cx="0" cy="-5" r="10" fill="#16a34a" opacity="0.08" />
          <circle cx="-5" cy="2" r="7" fill="#16a34a" opacity="0.06" />
          <circle cx="5" cy="2" r="7" fill="#16a34a" opacity="0.06" />
        </g>
      ))}
      {[60, 300, 560, 760].map((x, i) => (
        <g key={`lamp-${i}`}>
          <line x1={x} y1="308" x2={x} y2="270" stroke="#1E3A8A" strokeWidth="0.8" strokeOpacity="0.15" />
          <path d={`M${x},270 Q${x+8},260 ${x+14},265`} fill="none" stroke="#1E3A8A" strokeWidth="0.8" strokeOpacity="0.15" />
          <circle cx={x+14} cy="265" r="2.5" fill="#F97316" opacity="0.3">
            <animate attributeName="opacity" values="0.3;0.5;0.3" dur="4s" begin={`${i*0.8}s`} repeatCount="indefinite" />
          </circle>
        </g>
      ))}

      {/* Annotations */}
      <line x1="330" y1="75" x2="510" y2="75" stroke="#1E3A8A" strokeWidth="0.5" strokeOpacity="0.18" strokeDasharray="4,2" />
      <text x="420" y="71" fontFamily="monospace" fontSize="7" fill="#1E3A8A" fillOpacity="0.25" textAnchor="middle">48,500 sq ft</text>
      <line x1="272" y1="50" x2="272" y2="308" stroke="#1E3A8A" strokeWidth="0.4" strokeOpacity="0.14" strokeDasharray="3,2" />
      <text x="278" y="180" fontFamily="monospace" fontSize="7" fill="#1E3A8A" fillOpacity="0.22" transform="rotate(-90,278,180)">H=220m</text>

      <g transform="translate(858,50)" opacity="0.15">
        <circle cx="0" cy="0" r="14" fill="none" stroke="#1E3A8A" strokeWidth="0.6" />
        <polygon points="0,-13 2,-3 0,-1 -2,-3" fill="#E31E24" />
        <polygon points="0,13 2,3 0,1 -2,3" fill="#1E3A8A" />
        <polygon points="-13,0 -3,2 -1,0 -3,-2" fill="#1E3A8A" />
        <polygon points="13,0 3,2 1,0 3,-2" fill="#1E3A8A" />
        <text x="0" y="-16" fontFamily="monospace" fontSize="7" fill="#1E3A8A" textAnchor="middle">N</text>
      </g>

      <text x="24" y="38" fontFamily="monospace" fontSize="8" fill="#1E3A8A" fillOpacity="0.2" letterSpacing="2">ARVISH — MASTER PLAN REF. 2024-ARC</text>
      <line x1="20" y1="42" x2="280" y2="42" stroke="#1E3A8A" strokeWidth="0.4" strokeOpacity="0.15" />

      <rect x="0" y="310" width="900" height="110" fill="url(#groundGrad)" />
      <rect x="0" y="290" width="900" height="130" fill="url(#skyGrad)" />
    </svg>
  );
}

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!subscribed) return;

    const timer = window.setTimeout(() => {
      setSubscribed(false);
    }, 3200);

    return () => window.clearTimeout(timer);
  }, [subscribed]);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;600;700;900&family=Lato:wght@300;400;700&display=swap');

        @keyframes spinSlow   { to { transform: rotate(360deg); } }
        @keyframes floatY     { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-14px)} }
        @keyframes pulseRing  { 0%{transform:scale(0.9);opacity:0.7} 100%{transform:scale(1.5);opacity:0} }
        @keyframes slideInUp  { from{opacity:0;transform:translateY(30px)} to{opacity:1;transform:translateY(0)} }
        @keyframes drawLine   { from{stroke-dashoffset:200} to{stroke-dashoffset:0} }
        @keyframes morphBlob  {}
        @keyframes borderFlow {
          0%   { border-color: #E31E24; }
          33%  { border-color: #1E3A8A; }
          66%  { border-color: #F97316; }
          100% { border-color: #E31E24; }
        }

        .footer-root { font-family: 'Lato', sans-serif; margin-bottom: 0; padding-bottom: env(safe-area-inset-bottom, 0); }
        .footer-heading { font-family: 'Barlow Condensed', sans-serif; }

        .link-item { position: relative; }
        .link-item::after {
          content: '';
          position: absolute;
          bottom: -2px; left: 0;
          width: 0; height: 1.5px;
          background: #E31E24;
          transition: width 0.3s ease;
        }
        .link-item:hover::after { width: 100%; }

        .subscribe-btn {
          background: linear-gradient(135deg, #E31E24 0%, #1E3A8A 100%);
          background-size: 200% 200%;
          transition: background-position 0.4s ease, transform 0.2s ease;
        }
        .subscribe-btn:hover {
          background-position: 100% 100%;
          transform: translateY(-1px);
        }

        .diamond-icon { transition: transform 0.3s ease; }
        li:hover .diamond-icon { transform: rotate(15deg) scale(1.15); }

        .glow-border {
          animation: borderFlow 4s linear infinite;
        }
      `}</style>

      <footer className="footer-root relative w-full overflow-hidden" style={{ position: 'relative', bottom: 0, left: 0, right: 0, marginBottom: 0, paddingBottom: 'env(safe-area-inset-bottom, 0)', background: 'linear-gradient(160deg, #ffffff 0%, #eef2f9 40%, #e8eef8 100%)' }}>
        <BlueprintGrid />

        {/* Top banner */}
        <div className="relative z-10 border-b border-slate-200">
        <div className="max-w-[1280px] mx-auto px-4 xs:px-6 lg:px-8 py-4 sm:py-6 grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-10 items-center">
            {/* Brand + contact */}
            <div className="space-y-4" style={{ animation: 'slideInUp 0.7s ease both' }}>
              <div className="flex items-center gap-3">
                <img
                  src="https://www.arvishconsulting.com/assets/arvish-logo-zo8liOBq.png"
                  alt="Arvish logo"
                  className="w-12 h-auto object-contain"
                />
                <span className="footer-heading text-4xl font-black tracking-tighter text-slate-800 uppercase">
                  Arvish Constructions
                </span>
              </div>
              <p className="text-slate-500 text-sm leading-relaxed max-w-md">
                Building reliable and modern construction projects in Hyderabad.
We focus on quality, trust, and delivering projects on time.
              </p>
              {/* Decorative line */}
              <svg viewBox="0 0 280 6" className="w-48 h-2">
                <line x1="0" y1="3" x2="200" y2="3" stroke="#b4c4f0" strokeWidth="1.5"
                  strokeDasharray="200" style={{ animation: 'drawLine 1.2s ease forwards' }} />
                <circle cx="210" cy="3" r="3" fill="#E31E24" />
                <circle cx="225" cy="3" r="2" fill="#F97316" />
                <circle cx="237" cy="3" r="1.5" fill="#16a34a" />
              </svg>

              

              {/* Socials */}
              <div>
                <p className="text-xs font-bold text-[#D4A13A] uppercase tracking-widest mb-3">Follow Us</p>
                <div className="flex gap-2">
                  {socials.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.label}
                      className="w-9 h-9 rounded-full border border-slate-300 flex items-center justify-center text-slate-500 hover:text-[#D4A13A] hover:border-[#D4A13A] hover:bg-[#D4A13A]/10 transition-all duration-300"
                    >
                      {s.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Newsletter */}
            <div className="relative bg-white border border-slate-200 p-6 shadow-xl"
              style={{ animation: 'slideInUp 0.8s ease both', animationDelay: '0.15s' }}>
              <div className="glow-border absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2" />
              <div className="glow-border absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2" style={{ animationDelay: '2s' }} />
              <svg className="absolute top-0 right-0 w-24 h-24 opacity-[0.06]" viewBox="0 0 96 96">
                <polygon points="0,0 96,0 96,96" fill="#1E3A8A" />
              </svg>

              <h3 className="footer-heading text-slate-800 font-black text-2xl uppercase tracking-widest mb-1">
                Stay Updated
              </h3>
              <p className="text-slate-400 text-sm mb-4">
                with our latest projects and construction updates.
              </p>

              {subscribed ? (
                <div className="flex items-center gap-3 py-4">
                  <svg viewBox="0 0 40 40" className="w-10 h-10 flex-shrink-0">
                    <circle cx="20" cy="20" r="18" fill="#16a34a" opacity="0.15" />
                    <path d="M12,20 L18,26 L28,14" stroke="#16a34a" strokeWidth="2.5" fill="none" strokeLinecap="round" />
                  </svg>
                  <p className="text-slate-600 text-sm font-semibold">You're subscribed! Welcome aboard.</p>
                </div>
              ) : (
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder="Your email address"
                    className="flex-1 bg-slate-50 border border-slate-200 px-4 py-3 text-sm text-slate-700 focus:outline-none focus:border-[#1E3A8A] transition-colors"
                  />
                  <button
                    onClick={() => { if (email) { setSubscribed(true); setEmail(''); } }}
                    className="subscribe-btn text-white px-6 py-3 text-xs font-bold uppercase tracking-widest flex items-center gap-2"
                  >
                    Subscribe <ArrowRight size={14} />
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Middle grid: Company | Services | Offices | Categories */}
        <div className="relative z-10 max-w-[1280px] mx-auto px-4 xs:px-6 lg:px-8 py-4 sm:py-6 grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 border-b border-slate-200">
          {/* Company links */}
          <div style={{ animation: 'slideInUp 0.6s ease both', animationDelay: '0.1s' }}>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-[#E31E24]" />
              <h4 className="footer-heading text-slate-700 text-[11px] font-bold uppercase tracking-[0.25em]">Company</h4>
            </div>
            <ul className="space-y-2">
              {navLinks.map(link => (
                <li key={link.label}>
                  {link.label === 'Home' ? (
                    <button
                      onClick={() => navigate('/home')}
                      className="link-item text-sm text-slate-500 hover:text-slate-800 transition-colors duration-200 inline-block bg-transparent border-none cursor-pointer p-0"
                    >
                      {link.label}
                    </button>
                  ) : (
                    <Link to={link.path} className="link-item text-sm text-slate-500 hover:text-slate-800 transition-colors duration-200 inline-block">
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Services links */}
          <div style={{ animation: 'slideInUp 0.6s ease both', animationDelay: '0.2s' }}>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-[#1E3A8A]" />
              <h4 className="footer-heading text-slate-700 text-[11px] font-bold uppercase tracking-[0.25em]">Services</h4>
            </div>
            <ul className="space-y-2">
              {serviceLinks.map(link => (
                <li key={link.label}>
                  <Link to={link.path} className="link-item text-sm text-slate-500 hover:text-slate-800 transition-colors duration-200 inline-block">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          
          {/* Contact details */}
              <div className="flex flex-col gap-3 text-sm">
                <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-[#FACC15]" />
              <h4 className="footer-heading text-slate-700 text-[11px] font-bold uppercase tracking-[0.25em]">Contact</h4>
            </div>
                <a href="tel:+91 99665 56804" className="flex items-center gap-3 text-slate-500 hover:text-slate-800 transition-colors duration-200 group">
                  <span className="w-8 h-8 flex-shrink-0 rounded-full flex items-center justify-center border border-current transition-transform duration-300 group-hover:scale-110"
                    style={{ color: '#E31E24', borderColor: '#E31E2433', background: '#E31E2410' }}>
                    <Phone size={13} />
                  </span>
                  +91 99665 56804
                </a>
                <a href="mailto:arvishconstructions.interiors@gmail.com" className="flex items-center gap-3 text-slate-500 hover:text-slate-800 transition-colors duration-200 group min-w-0">
                  <span className="w-8 h-8 flex-shrink-0 rounded-full flex items-center justify-center border border-current transition-transform duration-300 group-hover:scale-110"
                    style={{ color: '#1E3A8A', borderColor: '#1E3A8A33', background: '#1E3A8A10' }}>
                    <Mail size={13} />
                  </span>
                  <span className="break-all min-w-0">arvishconstructions.interiors@gmail.com</span>
                </a>
                <div className="flex items-center gap-3 text-slate-500">
                  <span className="w-8 h-8 flex-shrink-0 rounded-full flex items-center justify-center border border-current"
                    style={{ color: '#F97316', borderColor: '#F9731633', background: '#F9731610' }}>
                    <MapPin size={13} />
                  </span>
                  Hyderabad, Telangana, India
                </div>
              </div>

              {/* Offices */}
          <div style={{ animation: 'slideInUp 0.6s ease both', animationDelay: '0.3s' }}>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-[#F97316]" />
              <h4 className="footer-heading text-slate-700 text-[11px] font-bold uppercase tracking-[0.25em]">Our Offices</h4>
            </div>
            <div className="space-y-3">
              {offices.map(office => (
                <div key={office.city}>
                  <p className="text-sm font-bold text-slate-700 mb-1">{office.city}</p>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {office.po}<br />
                    
                   
                  </p>
                </div>
              ))}
            </div>
          </div>

         
        </div>

        {/* Architectural SVG */}
        <ArchitecturalIllusion />

        {/* Bottom bar */}
        <div className="relative z-10 max-w-[1280px] mx-auto px-4 xs:px-6 lg:px-8 py-4 sm:py-5 flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4">
          <div className="flex flex-wrap justify-center gap-8 text-[11px] uppercase tracking-widest text-slate-400">
            <Link to="/privacy-policy" className="link-item hover:text-slate-700 transition-colors">Privacy Policy</Link>
            <Link to="/terms-of-service" className="link-item hover:text-slate-700 transition-colors">Terms of Service</Link>
            <Link to="/cookie-policy" className="link-item hover:text-slate-700 transition-colors">Cookie Policy</Link>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
            <p className="text-[11px] tracking-widest text-slate-400 text-center">
              © {new Date().getFullYear()} Arvish Constructions. All rights reserved.
            </p>

            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="group flex items-center gap-2 text-[11px] font-bold tracking-widest text-[#E31E24] uppercase hover:text-[#1E3A8A] transition-colors"
            >
              <span className="relative">
                <ArrowUp size={14} className="group-hover:-translate-y-1 transition-transform duration-300" />
                <span className="absolute -inset-2 rounded-full border border-[#E31E24] opacity-0 group-hover:opacity-100 group-hover:scale-125 transition-all duration-400" />
              </span>
              Back to Top
            </button>
          </div>
        </div>
      </footer>
    </>
  );
}