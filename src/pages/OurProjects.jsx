
import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useInView, AnimatePresence } from "framer-motion";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import {
  MapPin, Calendar, Maximize2, ArrowUpRight, ArrowRight,
  CheckCircle, Clock, ChevronRight
} from "lucide-react";

/* ─────────────────────────────────────────────
   MINIMAL ELEVATION SVGs — Architectural Slate
───────────────────────────────────────────── */
/* ─────────────────────────────────────────────
   TRUE ISOMETRIC SVGs — Hero Blueprint Style
───────────────────────────────────────────── */
// Helper for perfect 3D isometric prisms
function IsoBox({ x = 0, y = 0, z = 0, w = 30, l = 30, h = 70, color = "light" }) {
  const ox = x - y;
  const oy = (x + y) / 2 - z;
  const fills = color === "light"
    ? { left: "#ffffff", right: "#f1f5f9", top: "#e2e8f0" }
    : { left: "#f8fafc", right: "#e2e8f0", top: "#cbd5e1" };

  return (
    <g>
      <polygon points={`${ox},${oy - h} ${ox - l},${oy + l / 2 - h} ${ox - l},${oy + l / 2} ${ox},${oy}`} fill={fills.left} stroke="#1e3a8a" strokeWidth="1" strokeLinejoin="round" />
      <polygon points={`${ox},${oy - h} ${ox + w},${oy + w / 2 - h} ${ox + w},${oy + w / 2} ${ox},${oy}`} fill={fills.right} stroke="#1e3a8a" strokeWidth="1" strokeLinejoin="round" />
      <polygon points={`${ox},${oy - h} ${ox + w},${oy + w / 2 - h} ${ox + w - l},${oy + (w + l) / 2 - h} ${ox - l},${oy + l / 2 - h}`} fill={fills.top} stroke="#1e3a8a" strokeWidth="1" strokeLinejoin="round" />
    </g>
  )
  
}

function IsoApartment() {
  return (
    <svg viewBox="0 0 200 140" fill="none" className="w-full h-full drop-shadow-lg">
      <g transform="translate(100, 100)">
        {/* Pulsing Base Ring */}
        <motion.ellipse initial={{ rx: 0, ry: 0, opacity: 0 }} animate={{ rx: [50, 60, 50], ry: [25, 30, 25], opacity: [0.2, 0.4, 0.2] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} cx="0" cy="5" fill="none" stroke="#1e3a8a" strokeWidth="0.5" strokeDasharray="3 3" />

        {/* Floating Architecture */}
        <motion.g initial={{ y: 20, opacity: 0 }} animate={{ y: [0, -4, 0], opacity: 1 }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}>
          <IsoBox w={25} l={25} h={75} />
          {[10, 25, 40, 55].map(z => <IsoBox key={z} x={-2} y={-2} z={z} w={29} l={29} h={4} color="dark" />)}

          {/* Data Callout */}
          <path d="M0,-75 L0,-90 L-30,-90" stroke="#1e3a8a" strokeWidth="1" fill="none" strokeDasharray="2 2" />
          <circle cx="0" cy="-75" r="2" fill="#1e3a8a" />
          <circle cx="-30" cy="-90" r="2" fill="#1e3a8a" />
          <text x="-30" y="-95" fill="#1e3a8a" fontSize="6" fontFamily="monospace" fontWeight="bold" textAnchor="middle">RES-TWR PEAK</text>
        </motion.g>
      </g>
    </svg>
  );
}

function IsoOffice() {
  return (
    <svg viewBox="0 0 200 140" fill="none" className="w-full h-full drop-shadow-lg">
      <g transform="translate(95, 105)">
        <motion.ellipse initial={{ opacity: 0 }} animate={{ rx: [60, 65, 60], ry: [30, 32.5, 30], opacity: [0.1, 0.3, 0.1] }} transition={{ duration: 4.5, repeat: Infinity }} cx="5" cy="5" fill="none" stroke="#1e3a8a" strokeWidth="0.5" strokeDasharray="3 3" />

        <motion.g animate={{ y: [0, -4, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}>
          <IsoBox w={50} l={40} h={15} />
          <IsoBox w={20} l={20} h={60} x={15} y={10} />
          {[20, 35, 50].map(z => <IsoBox key={z} x={14} y={9} z={z} w={22} l={22} h={4} color="dark" />)}

          <path d="M15,-50 L15,-75 L40,-75" stroke="#1e3a8a" strokeWidth="1" fill="none" strokeDasharray="2 2" />
          <circle cx="15" cy="-50" r="2" fill="#1e3a8a" />
          <circle cx="40" cy="-75" r="2" fill="#1e3a8a" />
          <text x="55" y="-78" fill="#1e3a8a" fontSize="6" fontFamily="monospace" fontWeight="bold" textAnchor="middle">GRADE-A STRUC</text>
        </motion.g>
      </g>
    </svg>
  );
}

function IsoVilla() {
  return (
    <svg viewBox="0 0 200 140" fill="none" className="w-full h-full drop-shadow-lg">
      <g transform="translate(100, 110)">
        <motion.ellipse initial={{ opacity: 0 }} animate={{ rx: [55, 60, 55], ry: [27, 30, 27], opacity: [0.1, 0.3, 0.1] }} transition={{ duration: 4, repeat: Infinity }} cx="0" cy="5" fill="none" stroke="#1e3a8a" strokeWidth="0.5" strokeDasharray="3 3" />

        <motion.g animate={{ y: [0, -3, 0] }} transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}>
          <polygon points="0,5 -50,30 20,65 70,40" fill="#f1f5f9" stroke="#1e3a8a" strokeWidth="0.5" />
          <polygon points="-10,35 -30,25 -20,15 0,25" fill="#bae6fd" stroke="#1e3a8a" strokeWidth="0.5" />
          <IsoBox w={40} l={30} h={15} x={-10} y={-10} />
          <IsoBox w={25} l={40} h={12} z={15} x={5} y={-15} color="dark" />
          <IsoBox w={27} l={42} h={2} z={27} x={4} y={-16} />

          <path d="M-8,-27 L-8,-55 L-40,-55" stroke="#1e3a8a" strokeWidth="1" fill="none" strokeDasharray="2 2" />
          <circle cx="-8" cy="-27" r="2" fill="#1e3a8a" />
          <circle cx="-40" cy="-55" r="2" fill="#1e3a8a" />
          <text x="-40" y="-60" fill="#1e3a8a" fontSize="6" fontFamily="monospace" fontWeight="bold" textAnchor="middle">BESPOKE EXT</text>
        </motion.g>
      </g>
    </svg>
  );
}

function IsoRetail() {
  return (
    <svg viewBox="0 0 200 140" fill="none" className="w-full h-full drop-shadow-lg">
      <g transform="translate(120, 90)">
        <motion.ellipse initial={{ opacity: 0 }} animate={{ rx: [65, 75, 65], ry: [32, 37, 32], opacity: [0.1, 0.3, 0.1] }} transition={{ duration: 4.2, repeat: Infinity }} cx="-30" cy="5" fill="none" stroke="#1e3a8a" strokeWidth="0.5" strokeDasharray="3 3" />

        <motion.g animate={{ y: [0, -3, 0] }} transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}>
          {[0, 1, 2].map(i => (
            <g key={i}>
              <IsoBox w={20} l={20} h={20} x={i * 22 - 20} y={0} />
              <IsoBox w={22} l={22} h={3} z={20} x={i * 22 - 21} y={-1} color="dark" />
            </g>
          ))}

          <path d="M12,-20 L12,-40 L40,-40" stroke="#1e3a8a" strokeWidth="1" fill="none" strokeDasharray="2 2" />
          <circle cx="12" cy="-20" r="2" fill="#1e3a8a" />
          <circle cx="40" cy="-40" r="2" fill="#1e3a8a" />
          <text x="40" y="-45" fill="#1e3a8a" fontSize="6" fontFamily="monospace" fontWeight="bold" textAnchor="middle">FRNT FACADE</text>
        </motion.g>
      </g>
    </svg>
  );
}

function IsoWarehouse() {
  return (
    <svg viewBox="0 0 200 140" fill="none" className="w-full h-full drop-shadow-lg">
      <g transform="translate(100, 110)">
        <motion.ellipse initial={{ opacity: 0 }} animate={{ rx: [60, 65, 60], ry: [30, 32, 30], opacity: [0.1, 0.3, 0.1] }} transition={{ duration: 5, repeat: Infinity }} cx="0" cy="5" fill="none" stroke="#1e3a8a" strokeWidth="0.5" strokeDasharray="3 3" />

        <motion.g animate={{ y: [0, -3, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}>
          <IsoBox w={60} l={40} h={25} x={-10} y={-10} />
          <IsoBox w={15} l={10} h={8} x={30} y={30} color="dark" />
          <IsoBox w={15} l={10} h={8} x={10} y={30} color="dark" />
          {[0, 1, 2].map(i => <IsoBox key={i} w={8} l={8} h={4} z={25} x={i * 15 - 5} y={5} color="dark" />)}

          <path d="M20,11 L20,-30 L45,-30" stroke="#1e3a8a" strokeWidth="1" fill="none" strokeDasharray="2 2" />
          <circle cx="20" cy="11" r="2" fill="#1e3a8a" />
          <circle cx="45" cy="-30" r="2" fill="#1e3a8a" />
          <text x="45" y="-35" fill="#1e3a8a" fontSize="6" fontFamily="monospace" fontWeight="bold" textAnchor="middle">DOCK BAY LVL</text>
        </motion.g>
      </g>
    </svg>
  );
}

function IsoSchool() {
  return (
    <svg viewBox="0 0 200 140" fill="none" className="w-full h-full drop-shadow-lg">
      <g transform="translate(100, 105)">
        <motion.ellipse initial={{ opacity: 0 }} animate={{ rx: [55, 60, 55], ry: [27, 30, 27], opacity: [0.1, 0.3, 0.1] }} transition={{ duration: 4.5, repeat: Infinity }} cx="0" cy="5" fill="none" stroke="#1e3a8a" strokeWidth="0.5" strokeDasharray="3 3" />

        <motion.g animate={{ y: [0, -4, 0] }} transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}>
          <IsoBox w={20} l={20} h={35} x={0} y={0} color="dark" />
          <IsoBox w={15} l={35} h={15} x={2} y={20} />
          <IsoBox w={35} l={15} h={15} x={20} y={2} />
          <IsoBox w={10} l={10} h={10} z={35} x={5} y={5} />

          <path d="M0,-45 L0,-65 L-30,-65" stroke="#1e3a8a" strokeWidth="1" fill="none" strokeDasharray="2 2" />
          <circle cx="0" cy="-45" r="2" fill="#1e3a8a" />
          <circle cx="-30" cy="-65" r="2" fill="#1e3a8a" />
          <text x="-30" y="-70" fill="#1e3a8a" fontSize="6" fontFamily="monospace" fontWeight="bold" textAnchor="middle">INFO TOWER</text>
        </motion.g>
      </g>
    </svg>
  );
}

/* ─────────────────────────────────────────────
   DATA
───────────────────────────────────────────── */
const projects = [
  {
    id: 1, num: "01", name: "Residential Apartment Project",
    type: "Residential", location: "Hyderabad", year: "2024",
    area: "25,000 sq ft", status: "Completed",
    desc: "Multi-storey residential complex featuring premium finishes and efficient spatial planning throughout.",
    tags: ["RERA Certified", "Premium Fit-out"], Svg: IsoApartment,
  },
  {
    id: 2, num: "02", name: "Commercial Office Building",
    type: "Commercial", location: "Hyderabad", year: "2023",
    area: "40,000 sq ft", status: "Completed",
    desc: "Grade-A office tower with curtain-wall glazing, open-plan floors, and intelligent building systems.",
    tags: ["Grade-A Structure", "Smart Systems"], Svg: IsoOffice,
  },
  {
    id: 3, num: "03", name: "Independent Villa",
    type: "Residential", location: "Hyderabad", year: "2024",
    area: "5,000 sq ft", status: "Completed",
    desc: "Premium villa with hip-roof architecture, landscaped garden, and bespoke interior detailing.",
    tags: ["Bespoke Design", "Private Garden"], Svg: IsoVilla,
  },
  {
    id: 4, num: "04", name: "Retail Shop Complex",
    type: "Commercial", location: "Telangana", year: "2023",
    area: "15,000 sq ft", status: "Completed",
    desc: "Four-bay retail strip optimised for high footfall, with flexible unit layouts and ample parking.",
    tags: ["High Footfall", "Flexible Units"], Svg: IsoRetail,
  },
  {
    id: 5, num: "05", name: "Industrial Warehouse",
    type: "Industrial", location: "Telangana", year: "2024",
    area: "60,000 sq ft", status: "Ongoing",
    desc: "Large-span warehouse with heavy-duty floor slabs, dock levellers, and fire suppression systems.",
    tags: ["Dock Levellers", "Fire Systems"], Svg: IsoWarehouse,
  },
  {
    id: 6, num: "06", name: "School Building Project",
    type: "Educational", location: "Hyderabad", year: "2024",
    area: "20,000 sq ft", status: "Ongoing",
    desc: "Safe, naturally-lit campus compliant with NBC norms, with a central clock tower as focal point.",
    tags: ["NBC Compliant", "Natural Light"], Svg: IsoSchool,
  },
];

const ALL = "All";
const types = [ALL, ...Array.from(new Set(projects.map(p => p.type)))];

const statusCfg = {
  Completed: { dot: "bg-emerald-500" },
  Ongoing: { dot: "bg-blue-500 animate-pulse" },
  Upcoming: { dot: "bg-amber-400" },
};

const processSteps = [
  { n: "01", title: "Consultation", desc: "Define scope, budget, timeline and site requirements with our senior engineers." },
  { n: "02", title: "Design & Plan", desc: "Architectural drawings, structural design, and phased execution plans prepared." },
  { n: "03", title: "Construction", desc: "On-site execution with daily supervision, quality checks, and progress reports." },
  { n: "04", title: "Handover", desc: "Final inspections, punch-list clearance, and full documentation handover." },
];

/* ─────────────────────────────────────────────
   PROJECT CARD
───────────────────────────────────────────── */
function ProjectCard({ project, idx }) {
  const { Svg, num, name, type, location, year, area, status, desc, tags } = project;
  const st = statusCfg[status];

  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: idx * 0.07, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true, margin: "-40px" }}
      className="group relative bg-white border border-slate-200/80 rounded-[1.25rem] overflow-hidden
                 hover:border-slate-300 hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)]
                 transition-all duration-500 flex flex-col"
    >
      {/* Illustration panel */}
      <div className="relative bg-gradient-to-br from-slate-50 to-slate-100 border-b border-slate-100 overflow-hidden" style={{ height: 220 }}>
        {/* Soft grid background */}
        <pattern id={`gridp${project.id}`} width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#cbd5e1" strokeWidth="0.5" strokeOpacity="0.4" />
        </pattern>
        <rect width="100%" height="100%" fill={`url(#gridp${project.id})`} />

        {/* SVG Wrapper */}
        <div className="relative z-10 w-full h-full flex items-center justify-center px-4 py-8 pointer-events-none">
          <Svg />
        </div>

        {/* Status pill */}
        <div className="absolute top-4 left-4 z-20 flex items-center gap-2 bg-white/90 backdrop-blur-sm
                        border border-slate-200 px-3 py-1.5 rounded-full shadow-sm transition-transform duration-300 group-hover:-translate-y-0.5">
          <span className={`w-1.5 h-1.5 rounded-full ${st.dot}`} />
          <span className="text-[11px] font-bold tracking-wide text-slate-600 uppercase">{status}</span>
        </div>
        {/* Type badge */}
        <div className="absolute top-4 right-4 z-20 bg-white/90 backdrop-blur-sm border border-slate-200
                        text-slate-700 text-[11px] font-bold px-3 py-1.5 rounded-full tracking-wide shadow-sm transition-transform duration-300 group-hover:-translate-y-0.5">
          {type}
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-7 pt-6">
        <h3 className="font-display text-[1.15rem] font-bold text-slate-800 mb-2.5 leading-snug
                       group-hover:text-[#1e3a8a] transition-colors duration-300 line-clamp-1">
          {name}
        </h3>
        <p className="text-slate-500 text-sm leading-relaxed mb-6 line-clamp-2">{desc}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {tags.map(t => (
            <span key={t} className="text-[11px] font-semibold px-2.5 py-1 rounded border border-slate-200 bg-slate-50 text-slate-500 uppercase tracking-wider">
              {t}
            </span>
          ))}

        </div>

        {/* meta + cta */}
        <div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between">
          <div className="flex flex-wrap gap-3 text-xs text-slate-400">
            <span className="flex items-center gap-1"><MapPin size={10} />{location}</span>
            <span className="flex items-center gap-1"><Calendar size={10} />{year}</span>
            <span className="flex items-center gap-1 text-[#1e3a8a] font-semibold">
              <Maximize2 size={10} />{area}
            </span>
          </div>
          <button className="w-8 h-8 rounded-full border border-slate-200 flex items-center
                             justify-center text-slate-400 hover:bg-slate-900 hover:text-white
                             hover:border-slate-900 transition-all duration-300 group/btn shrink-0">
            <ArrowUpRight size={14}
              className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </motion.article>
  );
}

/* ─────────────────────────────────────────────
   MAIN PAGE
───────────────────────────────────────────── */
export default function OurProjects() {
  const [activeFilter, setActiveFilter] = useState(ALL);
  const projectsRef = useRef(null);
  const processRef = useRef(null);
  const processInView = useInView(processRef, { once: true, threshold: 0.1 });

  const handleViewProjects = () => {
    projectsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const filtered = activeFilter === ALL
    ? projects
    : projects.filter(p => p.type === activeFilter);

  return (
    <div className="bg-white min-h-screen" style={{ fontFamily: "'DM Sans', sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,300;0,400;0,500;0,700;1,300&family=Syne:wght@700;800&display=swap');
        .font-display { font-family: 'Syne', sans-serif; }
        .line-clamp-2 {
          display:-webkit-box; -webkit-line-clamp:2;
          -webkit-box-orient:vertical; overflow:hidden;
        }
        .ftab { position:relative; }
        .ftab::after {
          content:''; position:absolute;
          bottom:-1px; left:0; right:0; height:2px;
          background:#1e3a8a; border-radius:2px;
          transform:scaleX(0); transform-origin:left;
          transition:transform 0.3s cubic-bezier(.22,1,.36,1);
        }
        .ftab.on::after { transform:scaleX(1); }

        @keyframes fadeUp {
          from { opacity:0; transform:translateY(22px); }
          to   { opacity:1; transform:translateY(0); }
        }
        .fu { animation: fadeUp 0.7s cubic-bezier(.22,1,.36,1) forwards; opacity:0; }
        .d1 { animation-delay:0.05s; }
        .d2 { animation-delay:0.15s; }
        .d3 { animation-delay:0.26s; }
        .d4 { animation-delay:0.38s; }
        .d5 { animation-delay:0.50s; }
      `}</style>

      <Navbar />

      {/* ════════════════════════════════════════
          HERO
          ════════════════════════════════════════ */}
      <section className="relative pt-3 pb-24 bg-white overflow-hidden">
        {/* Structural decoration with animated drafting lines */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden>
          {/* Top rule only, vertical divider removed */}
          <motion.div initial={{ width: 0 }} animate={{ width: "100%" }} transition={{ duration: 1.5, ease: "circOut" }} className="absolute top-0 left-0 h-px bg-slate-100" />

          {/* Blueprint corner marks */}
          <svg className="absolute top-24 left-6 opacity-25" width="36" height="36" viewBox="0 0 36 36" fill="none">
            <motion.path initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1, delay: 0.5 }} d="M0 36V0H36" stroke="#1e3a8a" strokeWidth="1.5" />
          </svg>
          <svg className="absolute bottom-8 right-6 opacity-15" width="36" height="36" viewBox="0 0 36 36" fill="none">
            <motion.path initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1, delay: 0.5 }} d="M36 0V36H0" stroke="#1e3a8a" strokeWidth="1.5" />
          </svg>

          {/* Animated Background Architectural Blueprint */}
          <svg className="absolute right-[-5%] top-[5%] h-[90%] w-[55%] opacity-[0.18]" viewBox="0 0 800 600" fill="none">
            {/* Background Grid */}
            <pattern id="isoGrid" width="40" height="23.09" patternUnits="userSpaceOnUse" patternTransform="scale(1.5)">
              <path d="M40 11.54L20 0 0 11.54M0 11.54L0 34.64M40 11.54L40 34.64M20 23.09L20 46.18M0 34.64L20 23.09 40 34.64" fill="none" stroke="#1e3a8a" strokeWidth="0.5" strokeOpacity="0.3" />
            </pattern>
            <rect width="800" height="600" fill="url(#isoGrid)" opacity="0.4" />

            {/* Central Isometric Hub / Blueprint Building */}
            <motion.g
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            >
              {/* Main Block */}
              <polygon points="400,150 550,230 550,430 400,510 250,430 250,230" stroke="#1e3a8a" strokeWidth="2.5" fill="#f8fafc" strokeLinejoin="round" />
              <path d="M400,150 L400,510 M250,230 L550,430 M250,430 L550,230" stroke="#1e3a8a" strokeWidth="1.5" strokeOpacity="0.5" />

              {/* Base block */}
              <polygon points="400,450 600,340 600,480 400,580 200,480 200,340" stroke="#1e3a8a" strokeWidth="1" strokeDasharray="4 4" fill="none" />
              <path d="M400,450 L400,580 M200,340 L600,480 M200,480 L600,340" stroke="#1e3a8a" strokeWidth="1" strokeOpacity="0.3" strokeDasharray="4 4" />

              {/* Floating inner rings */}
              <circle cx="400" cy="330" r="140" stroke="#1e3a8a" strokeWidth="1.5" fill="none" strokeOpacity="0.4" strokeDasharray="6 6" />
              <circle cx="400" cy="330" r="100" stroke="#1e3a8a" strokeWidth="1" fill="none" strokeOpacity="0.6" />

              {/* Measurement lines */}
              <path d="M620,300 L650,300" stroke="#1e3a8a" strokeWidth="1.5" />
              <path d="M635,300 L635,460" stroke="#1e3a8a" strokeWidth="1" strokeDasharray="4 4" />
              <path d="M620,460 L650,460" stroke="#1e3a8a" strokeWidth="1.5" />
              <text x="645" y="385" fill="#1e3a8a" fontSize="14" fontFamily="monospace" transform="rotate(90 645 385)">ELEVATION 24M</text>

              <path d="M220,180 L250,150" stroke="#1e3a8a" strokeWidth="1.5" />
              <path d="M235,165 L365,235" stroke="#1e3a8a" strokeWidth="1" strokeDasharray="4 4" />
              <path d="M350,250 L380,220" stroke="#1e3a8a" strokeWidth="1.5" />
            </motion.g>

            {/* Orbiting rings - dynamic */}
            <motion.g animate={{ rotate: 360 }} transition={{ duration: 40, repeat: Infinity, ease: "linear" }} style={{ originX: "400px", originY: "330px" }}>
              <circle cx="400" cy="330" r="280" stroke="#1e3a8a" strokeWidth="1" fill="none" strokeOpacity="0.4" strokeDasharray="4 20" />
              <circle cx="120" cy="330" r="4" fill="#1e3a8a" />
              <circle cx="680" cy="330" r="4" fill="#1e3a8a" />
            </motion.g>
          </svg>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

            {/* LEFT */}
            <div className="lg:col-span-5">
              <div className="fu d1 inline-flex items-center gap-3 mb-10">
                <div className="w-8 h-px bg-slate-900" />
                <span className="text-xs font-bold text-slate-400 uppercase tracking-[0.2em]">Our Portfolio</span>
              </div>

              <h1 className="fu d2 font-display text-5xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 leading-[1.05] mb-6">
                Work Built<br />
                to <span className="relative inline-block text-[#1e3a8a]">
                  Last.
                  
                </span>
              </h1>

              <p className="fu d3 text-slate-500 text-lg leading-relaxed max-w-md mb-8">
                Residential, commercial, industrial and educational construction across
                Hyderabad and Telangana — engineered for decades of performance.
              </p>

              <div className="fu d4 flex items-center gap-3">
                <button onClick={handleViewProjects} className="relative overflow-hidden px-8 py-4 bg-[#1e3a8a] text-white text-sm font-semibold
                                   rounded-xl hover:bg-[#1d4ed8] transition-colors duration-300
                                   flex items-center gap-2 group shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_8px_30px_rgba(30,58,138,0.3)]">
                  <span className="relative z-10 flex items-center gap-2">View All Projects <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" /></span>
                </button>
               
              </div>
            </div>

            {/* RIGHT — Dedicated Architectural Illustration */}
            <div className="fu d5 relative w-full h-[400px] lg:h-[600px] lg:col-span-7 flex items-center justify-center -ml-6">
              {/* Soft glow behind illustration */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-[#1e3a8a]/5 blur-[100px] rounded-full pointer-events-none" />

              <div className="relative w-full h-full">
                <svg viewBox="0 0 800 600" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-2xl">
                  {/* Isometric Graph Grid Background */}
                  <pattern id="hexGrid" width="60" height="34.64" patternUnits="userSpaceOnUse" patternTransform="scale(1.2)">
                    <path d="M60 17.32L30 0 0 17.32M0 17.32L0 51.96M60 17.32L60 51.96M30 34.64L30 69.28M0 51.96L30 34.64 60 51.96" fill="none" stroke="#1e3a8a" strokeWidth="0.5" strokeOpacity="0.15" />
                  </pattern>
                  <rect width="800" height="600" fill="url(#hexGrid)" />

                  <g transform="translate(280, 320)">
                    {/* Pulsing Base Ring */}
                    <motion.ellipse
                      initial={{ rx: 0, ry: 0, opacity: 0 }}
                      animate={{ rx: [200, 220, 200], ry: [100, 110, 100], opacity: [0.2, 0.5, 0.2] }}
                      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                      cx="0" cy="80" fill="none" stroke="#1e3a8a" strokeWidth="1" strokeDasharray="4 8"
                    />

                    {/* Orbiting Elements */}
                    <motion.g animate={{ rotate: 360 }} transition={{ duration: 30, repeat: Infinity, ease: "linear" }}>
                      <ellipse cx="0" cy="0" rx="240" ry="120" fill="none" stroke="#1e3a8a" strokeWidth="0.5" strokeOpacity="0.5" />
                      <circle cx="240" cy="0" r="4" fill="#1e3a8a" />
                      <circle cx="-240" cy="0" r="4" fill="#1e3a8a" />
                      <circle cx="0" cy="120" r="3" fill="#1e3a8a" />
                      <circle cx="0" cy="-120" r="3" fill="#1e3a8a" />
                    </motion.g>

                    <motion.g animate={{ rotate: -360 }} transition={{ duration: 40, repeat: Infinity, ease: "linear" }}>
                      <ellipse cx="0" cy="0" rx="180" ry="90" fill="none" stroke="#1e3a8a" strokeWidth="1" strokeOpacity="0.3" strokeDasharray="8 8" />
                    </motion.g>

                    {/* Container for Floating Architecture & Synced Elements */}
                    <motion.g
                      initial={{ y: 50, opacity: 0 }}
                      animate={{ y: [0, -10, 0], opacity: 1 }}
                      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                    >
                      {/* Left Block */}
                      <g transform="translate(-120, -20)">
                        <polygon points="0,0 60,-30 60,70 0,100" fill="#f8fafc" stroke="#1e3a8a" strokeWidth="1.5" strokeLinejoin="round" />
                        <polygon points="60,-30 120,0 120,100 60,70" fill="#e2e8f0" stroke="#1e3a8a" strokeWidth="1.5" strokeLinejoin="round" />
                        <polygon points="0,0 60,-30 120,0 60,30" fill="#cbd5e1" stroke="#1e3a8a" strokeWidth="1.5" strokeLinejoin="round" />
                        {/* Windows Left Block */}
                        {[0, 1, 2].map(r => [0, 1].map(c => (
                          <polygon key={`l${r}${c}`} points={`${10 + c * 20},${25 + r * 20 + c * -10} ${25 + c * 20},${17 + r * 20 + c * -10} ${25 + c * 20},${32 + r * 20 + c * -10} ${10 + c * 20},${40 + r * 20 + c * -10}`} fill="#1e3a8a" opacity="0.15" />
                        )))}
                      </g>

                      {/* Right Small Block */}
                      <g transform="translate(60, 40)">
                        <polygon points="0,0 40,-20 40,50 0,70" fill="#f8fafc" stroke="#1e3a8a" strokeWidth="1.5" strokeLinejoin="round" />
                        <polygon points="40,-20 80,0 80,70 40,50" fill="#e2e8f0" stroke="#1e3a8a" strokeWidth="1.5" strokeLinejoin="round" />
                        <polygon points="0,0 40,-20 80,0 40,20" fill="#cbd5e1" stroke="#1e3a8a" strokeWidth="1.5" strokeLinejoin="round" />
                        {/* Right Small Block Windows */}
                        <line x1="15" y1="-7" x2="15" y2="60" stroke="#1e3a8a" strokeWidth="1" opacity="0.3" />
                        <line x1="25" y1="-12" x2="25" y2="55" stroke="#1e3a8a" strokeWidth="1" opacity="0.3" />
                        <line x1="55" y1="-12" x2="55" y2="55" stroke="#1e3a8a" strokeWidth="1" opacity="0.3" />
                        <line x1="65" y1="-7" x2="65" y2="60" stroke="#1e3a8a" strokeWidth="1" opacity="0.3" />
                      </g>

                      {/* Center Tower */}
                      <g transform="translate(-40, -120)">
                        <polygon points="0,0 80,-40 80,140 0,180" fill="#ffffff" stroke="#1e3a8a" strokeWidth="2" strokeLinejoin="round" />
                        <polygon points="80,-40 160,0 160,180 80,140" fill="#f1f5f9" stroke="#1e3a8a" strokeWidth="2" strokeLinejoin="round" />
                        <polygon points="0,0 80,-40 160,0 80,40" fill="#e2e8f0" stroke="#1e3a8a" strokeWidth="2" strokeLinejoin="round" />

                        {/* Windows & Mullions Center Tower Left Face */}
                        <line x1="20" y1="-10" x2="20" y2="170" stroke="#1e3a8a" strokeWidth="1.5" opacity="0.25" />
                        <line x1="40" y1="-20" x2="40" y2="160" stroke="#1e3a8a" strokeWidth="1.5" opacity="0.25" />
                        <line x1="60" y1="-30" x2="60" y2="150" stroke="#1e3a8a" strokeWidth="1.5" opacity="0.25" />
                        {[0, 1, 2, 3, 4, 5, 6].map(i => (
                          <line key={`hzl${i}`} x1="0" y1={25 + i * 20} x2="80" y2={-15 + i * 20} stroke="#1e3a8a" strokeWidth="1" strokeOpacity="0.25" />
                        ))}

                        {/* Windows & Mullions Center Tower Right Face */}
                        <line x1="100" y1="-30" x2="100" y2="150" stroke="#1e3a8a" strokeWidth="1.5" opacity="0.25" />
                        <line x1="120" y1="-20" x2="120" y2="160" stroke="#1e3a8a" strokeWidth="1.5" opacity="0.25" />
                        <line x1="140" y1="-10" x2="140" y2="170" stroke="#1e3a8a" strokeWidth="1.5" opacity="0.25" />
                        {[0, 1, 2, 3, 4, 5, 6].map(i => (
                          <line key={`hzr${i}`} x1="80" y1={-15 + i * 20} x2="160" y2={25 + i * 20} stroke="#1e3a8a" strokeWidth="1" strokeOpacity="0.25" />
                        ))}

                        {/* Glazing / Tint Accents */}
                        <polygon points="20,10 40,0 40,140 20,150" fill="#1e3a8a" opacity="0.05" />
                        <polygon points="120,0 140,10 140,150 120,140" fill="#1e3a8a" opacity="0.1" />
                      </g>

                      {/* Synced Callouts (Moving precisely with towers) */}
                      <g>
                        {/* Dynamic Callout Lines */}
                        <motion.g
                          initial={{ pathLength: 0, opacity: 0 }}
                          animate={{ pathLength: 1, opacity: 0.8 }}
                          transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
                        >
                          <path d="M40,-160 L40,-220 L-120,-220" stroke="#1e3a8a" strokeWidth="1.5" fill="none" strokeDasharray="4 4" />
                          <circle cx="-120" cy="-220" r="4" fill="#1e3a8a" />
                          <circle cx="40" cy="-160" r="3" fill="#1e3a8a" />

                          <path d="M100,20 L140,-10 L200,-10" stroke="#1e3a8a" strokeWidth="1.5" fill="none" strokeDasharray="4 4" />
                          <circle cx="200" cy="-10" r="4" fill="#1e3a8a" />
                          <circle cx="100" cy="20" r="3" fill="#1e3a8a" />

                          <path d="M-60,50 L-140,90 L-180,90" stroke="#1e3a8a" strokeWidth="1.5" fill="none" strokeDasharray="4 4" />
                          <circle cx="-180" cy="90" r="4" fill="#1e3a8a" />
                          <circle cx="-60" cy="50" r="3" fill="#1e3a8a" />
                        </motion.g>

                        {/* Stable Info Tags attached to endpoints */}
                        <g fill="#1e3a8a" fontFamily="monospace" fontSize="11" fontWeight="bold">
                          <text x="-120" y="-230">SEC-A. TOWER PEAK</text>
                          <text x="145" y="-20">ELEV: +45m</text>
                          <text x="-180" y="80">STRUCTURAL BASE</text>
                        </g>
                      </g>
                    </motion.g>
                  </g>
                </svg>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          FILTER BAR
          ════════════════════════════════════════ */}
      <div className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-y border-slate-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 flex items-center overflow-x-auto gap-0">
          {types.map(t => (
            <button
              key={t}
              onClick={() => setActiveFilter(t)}
              className={`ftab ${activeFilter === t ? "on" : ""} shrink-0 px-5 py-4 text-sm font-semibold
                          tracking-wide whitespace-nowrap transition-colors duration-200
                          ${activeFilter === t ? "text-[#1e3a8a]" : "text-slate-400 hover:text-slate-800"}`}
            >
              {t}
            </button>
          ))}
          <span className="ml-auto text-xs text-slate-300 pl-4 pr-1 shrink-0 hidden sm:block">
            {filtered.length} project{filtered.length !== 1 ? "s" : ""}
          </span>
        </div>
      </div>

      {/* ════════════════════════════════════════
          PROJECTS GRID
          ════════════════════════════════════════ */}
      <section ref={projectsRef} className="max-w-7xl mx-auto px-6 py-20">
        <AnimatePresence mode="wait">
          {filtered.length > 0 ? (
            <motion.div
              key={activeFilter}
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              transition={{ duration: 0.22 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filtered.map((p, i) => <ProjectCard key={p.id} project={p} idx={i} />)}
            </motion.div>
          ) : (
            <motion.div
              key="empty" initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              className="text-center py-32"
            >
              <p className="font-display text-2xl font-bold text-slate-200 mb-3">Nothing here</p>
              <p className="text-slate-400 text-sm">Try a different category</p>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* ════════════════════════════════════════
          PROCESS — editorial horizontal rule style
          ════════════════════════════════════════ */}
      <section ref={processRef} className="border-t border-slate-100 py-24 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={processInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55 }}
            className="mb-16"
          >
            <div className="flex items-center gap-3 mb-5">
                <div className="w-6 h-px bg-[#1e3a8a]/40" />
                <span className="text-xs font-bold text-[#1e3a8a] uppercase tracking-[0.2em]">How We Work</span>
                <div className="w-6 h-px bg-[#1e3a8a]/40" />
              </div>
            <h2 className="font-display text-4xl md:text-5xl font-extrabold text-slate-900">
              Our Process
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0">
            {processSteps.map((step, i) => (
              <motion.div
                key={step.n}
                initial={{ opacity: 0, y: 22 }}
                animate={processInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="group relative border-t-2 border-slate-200 hover:border-[#1e3a8a]
                           pt-8 pr-8 pb-8 transition-colors duration-300"
              >
                <span className="font-display text-xs font-bold text-slate-300
                                 group-hover:text-[#1e3a8a] transition-colors duration-300
                                 block mb-4 tracking-widest">
                  {step.n}
                </span>
                <h3 className="font-display text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{step.desc}</p>
                {i < 3 && (
                  <ChevronRight size={16}
                    className="absolute top-6 right-0 text-slate-300 hidden lg:block" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          WHY US
          ════════════════════════════════════════ */}
      <section className="border-t border-slate-100 py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { icon: CheckCircle, label: "Quality Assured", sub: "ISO-aligned standards on every build" },
            { icon: Clock, label: "On-Time Delivery", sub: "98% of projects delivered on schedule" },
            { icon: Maximize2, label: "End-to-End Service", sub: "Design through handover under one roof" },
            { icon: MapPin, label: "Local Expertise", sub: "Deep knowledge of Hyderabad regulations" },
          ].map(({ icon: Icon, label, sub }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.06 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="w-10 h-10 rounded-xl border border-slate-200
                              group-hover:bg-slate-900 group-hover:border-slate-900
                              flex items-center justify-center mb-4 transition-all duration-300">
                <Icon size={18} className="text-slate-500 group-hover:text-white transition-colors duration-300" />
              </div>
              <p className="font-semibold text-slate-800 text-sm mb-1">{label}</p>
              <p className="text-xs text-slate-400 leading-relaxed">{sub}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ════════════════════════════════════════
          CTA — Architectural Light
          ════════════════════════════════════════ */}
      <section className="bg-slate-50 border-t border-slate-200 py-24 px-6 relative overflow-hidden">
        {/* Architectural Grid Background */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="cta-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#1e3a8a" strokeWidth="0.5" strokeOpacity="0.06" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#cta-grid)" />
        </svg>

        {/* Blueprint accent lines */}
        <div className="absolute top-0 left-12 w-px h-full bg-[#1e3a8a]/10" />
        <div className="absolute top-0 left-24 w-px h-full bg-[#1e3a8a]/5" />
        <div className="absolute bottom-12 left-0 w-full h-px bg-[#1e3a8a]/10" />

        {/* Ghost letters */}
        <span className="absolute right-8 top-1/2 -translate-y-1/2 font-display
                         text-[16rem] font-extrabold text-[#1e3a8a]/[0.03] select-none
                         pointer-events-none leading-none hidden lg:block">
          BUILD
        </span>

        <div className="relative z-10 max-w-7xl mx-auto md:pl-24">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-12">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-6 h-px bg-[#1e3a8a]/40" />
                <span className="text-xs font-bold text-[#1e3a8a] uppercase tracking-[0.2em]">Start Today</span>
                <div className="w-6 h-px bg-[#1e3a8a]/40" />
              </div>
              <h2 className="font-display text-4xl md:text-5xl font-extrabold text-slate-900 leading-[1.1]">
                Have a project<br />in mind?
              </h2>
            </div>
            <div className="flex flex-col gap-4 shrink-0 max-w-xs md:pr-12">
              <p className="text-slate-600 text-sm leading-relaxed">
                Tell us your vision — we'll deliver a detailed plan and quote within 48 hours.
              </p>
              <div className="flex gap-3">
               
                <Link to="/contact" className="px-6 py-3.5 border border-[#1e3a8a]/20 bg-white text-[#1e3a8a] font-semibold
                                   text-sm rounded-xl hover:bg-slate-50 transition-colors duration-300 shadow-sm inline-flex items-center justify-center">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}