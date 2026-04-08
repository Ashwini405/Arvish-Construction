


import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { GraduationCap, HeartPulse, Shield, Activity, Stethoscope, Building2 } from "lucide-react";

// Font loading
const FontLink = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400&family=Outfit:wght@300;400;500;600&display=swap');
  `}</style>
);

/* ─────────────────────────────────────────────────
   HERO SVG — Clean Medical & Educational Campus
   Cool whites, soft teals, and geometric precision
───────────────────────────────────────────────── */
const HeroScene = () => (
  <svg viewBox="0 0 1440 680" xmlns="http://www.w3.org/2000/svg"
    className="w-full h-full" preserveAspectRatio="xMidYMid slice">
    <defs>
      {/* Cool, clinical sky gradients */}
      <linearGradient id="ehSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#e8f5f6"/>
        <stop offset="60%" stopColor="#d4edf0"/>
        <stop offset="100%" stopColor="#b6e0e5"/>
      </linearGradient>
      
      {/* Pristine White / Teal-ish Building Gradients */}
      <linearGradient id="tU_f" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#ffffff"/><stop offset="100%" stopColor="#eaf1f2"/></linearGradient>
      <linearGradient id="tU_s" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stopColor="#d0e2e5"/><stop offset="100%" stopColor="#acced3"/></linearGradient>
      
      <linearGradient id="tH_f" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#f7fafa"/><stop offset="100%" stopColor="#dbe8eb"/></linearGradient>
      <linearGradient id="tH_s" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stopColor="#b8cfd3"/><stop offset="100%" stopColor="#96bac0"/></linearGradient>

      {/* Aqua Glass reflections */}
      <linearGradient id="winR" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#ffffff" stopOpacity="0.85"/>
        <stop offset="100%" stopColor="#80c6cc" stopOpacity="0.4"/>
      </linearGradient>
      
      <radialGradient id="vign" cx="50%" cy="50%" r="70%">
        <stop offset="0%" stopColor="transparent"/>
        <stop offset="100%" stopColor="#052c33" stopOpacity="0.12"/>
      </radialGradient>
      
      <filter id="sh">
        <feDropShadow dx="0" dy="12" stdDeviation="15" floodColor="#073b42" floodOpacity="0.1"/>
      </filter>
    </defs>

    {/* SKY */}
    <rect width="1440" height="680" fill="url(#ehSky)"/>
    {/* Horizon haze */}
    <rect x="0" y="430" width="1440" height="80" fill="#a4d1d8" opacity="0.4"/>

    {/* Far silhouette (Trees & Distant Suburbs) in soft slate/teal */}
    {[[0,150,75,300],[65,185,55,265],[115,125,85,325],[195,165,48,285],
      [235,105,68,345],[295,145,52,305],[345,128,76,322],[880,148,68,292],
      [945,112,58,328],[1005,168,76,272],[1075,134,62,316],[1135,118,72,322],
      [1195,152,52,288],[1248,123,68,317],[1308,158,58,282],[1365,102,68,338],
    ].map(([x,y,w,h],i)=>(
      <rect key={i} x={x} y={y} width={w} height={h} fill="#9abdc2" opacity="0.45" rx="2"/>
    ))}

    {/* GROUND */}
    <rect x="0" y="540" width="1440" height="140" fill="#d3e4e6"/>
    {/* Perspective grid (Medical/Technical graph paper vibe) */}
    {[-7,-5,-3,-1,1,3,5,7,9,11,13].map((t,i)=>(
      <line key={i} x1={720+t*190} y1="540" x2={720+t*820} y2="680" stroke="#a4c6cb" strokeWidth="0.8" opacity="0.6"/>
    ))}
    {[0,1,2,3,4].map(i=>(
      <line key={i} x1="0" y1={546+i*25} x2="1440" y2={546+i*25} stroke="#a4c6cb" strokeWidth="0.6" opacity="0.5"/>
    ))}

    {/* UNIVERSITY BUILDING (Left) */}
    <g filter="url(#sh)">
      <ellipse cx="940" cy="546" rx="140" ry="12" fill="#84a5ab" opacity="0.2"/>
      <rect x="800" y="240" width="198" height="304" fill="url(#tU_f)"/>
      <polygon points="998,240 1060,265 1060,536 998,544" fill="url(#tU_s)"/>
      
      {/* Pillars */}
      {[0,1,2,3,4,5,6].map(i => (
        <rect key={i} x={815+i*26} y="265" width="12" height="270" fill="#ffffff" rx="1"/>
      ))}
      <rect x="800" y="240" width="206" height="25" fill="#f8fdfd"/>
      <polygon points="800,240 900,190 1006,240" fill="#eaf1f2"/>
      
      {/* Dome */}
      <path d="M860,190 C860,140 940,140 940,190 Z" fill="#8cbac2"/>
      
      {/* Side of Pediment */}
      <polygon points="1006,240 1060,265 960,215 900,190" fill="#d0e2e5"/>
    </g>

    {/* HOSPITAL & CLINIC (Right) */}
    <g filter="url(#sh)">
      {/* Base */}
      <rect x="250" y="440" width="300" height="104" fill="url(#tH_f)"/>
      <polygon points="550,440 600,460 600,540 550,544" fill="url(#tH_s)"/>
      <polygon points="250,440 300,420 600,460 550,440" fill="#f0f6f7"/>
      
      {/* Glass sections base */}
      {[0,1,2,3,4].map(c => (
        <rect key={c} x={270+c*50} y="455" width="38" height="70" fill="url(#winR)" rx="1" opacity="0.9"/>
      ))}
      
      {/* Emergency Overhang */}
      <rect x="220" y="520" width="100" height="15" fill="#db4437" rx="1"/>
      <text x="270" y="531" fill="white" fontSize="9" fontWeight="bold" fontFamily="sans-serif" textAnchor="middle">EMERGENCY</text>

      {/* Main Tower Wing 1 */}
      <rect x="300" y="180" width="120" height="260" fill="url(#tH_f)"/>
      <polygon points="420,180 470,200 470,440 420,440" fill="url(#tH_s)"/>
      <polygon points="300,180 350,160 470,200 420,180" fill="#f0f6f7"/>

      {/* Main Tower Windows */}
      {Array.from({length:15}).map((_,r)=>Array.from({length:3}).map((_,c)=>(
        <rect key={`hw${r}${c}`} x={315+c*32} y={195+r*16} width="22" height="10" fill="url(#winR)" rx="0.5" opacity="0.8"/>
      )))}
      
      {/* Helipad */}
      <ellipse cx="385" cy="170" rx="30" ry="12" fill="#586c73"/>
      <text x="385" y="174" fill="#a4bcd1" fontSize="11" fontWeight="bold" fontFamily="sans-serif" textAnchor="middle">H</text>
    </g>

    {/* Landscaping / Park Elements between buildings (Mint Greens) */}
    {[{x:620},{x:680},{x:740}].map((t,i) => (
      <g key={i}>
        <rect x={t.x} y="520" width="4" height="24" fill="#6d7a71"/>
        <ellipse cx={t.x+2} cy="510" rx="20" ry="16" fill="#82b8a0" opacity="0.85"/>
        <ellipse cx={t.x-4} cy="500" rx="12" ry="10" fill="#a4d1be" opacity="0.85"/>
      </g>
    ))}

    {/* Ambulance & Bus */}
    <g>
      {/* Ambulance */}
      <rect x="180" y="530" width="45" height="18" fill="#ffffff" rx="2"/>
      <rect x="215" y="534" width="10" height="14" fill="#db4437" opacity="0.85" rx="1"/>
      <circle cx="190" cy="548" r="4" fill="#182c30"/>
      <circle cx="215" cy="548" r="4" fill="#182c30"/>
      <rect x="195" y="534" width="6" height="6" fill="#db4437"/>
      <rect x="195" y="534" width="6" height="6" fill="#db4437" transform="rotate(90 198 537)"/>
    </g>
    <g>
      {/* Campus Bus */}
      <rect x="650" y="535" width="80" height="20" fill="#f4b400" rx="3"/>
      {Array.from({length:5}).map((_,i) => (
        <rect key={i} x={655+i*14} y="538" width="10" height="8" fill="#2c4245" rx="1"/>
      ))}
      <circle cx="665" cy="555" r="5" fill="#182c30"/>
      <circle cx="715" cy="555" r="5" fill="#182c30"/>
    </g>

    {/* Edge + vignette */}
    <rect x="0" y="0" width="220" height="680" fill="url(#ehSky)" opacity="0.3"/>
    <rect x="1220" y="0" width="220" height="680" fill="url(#ehSky)" opacity="0.3"/>
    <rect width="1440" height="680" fill="url(#vign)"/>
  </svg>
);


/* ── FEATURE ILLUSTRATIONS ── */
const FeatureEduIll = () => (
  <svg viewBox="0 0 280 180" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <defs>
      <linearGradient id="eiBg" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#f5fafa"/><stop offset="100%" stopColor="#eaf5f7"/></linearGradient>
      <linearGradient id="eiF" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#ffffff"/><stop offset="100%" stopColor="#eaf1f2"/></linearGradient>
      <linearGradient id="eiS" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stopColor="#d0e2e5"/><stop offset="100%" stopColor="#acced3"/></linearGradient>
      <linearGradient id="eiW" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#fff" stopOpacity="0.9"/><stop offset="100%" stopColor="#96bac0" stopOpacity="0.4"/></linearGradient>
    </defs>
    <rect width="280" height="180" fill="url(#eiBg)"/>
    <line x1="0" y1="148" x2="280" y2="148" stroke="#bcdcdc" strokeWidth="0.8"/>
    
    <rect x="60" y="58" width="140" height="90" fill="url(#eiF)"/>
    <polygon points="200,58 240,78 240,148 200,148" fill="url(#eiS)"/>
    <polygon points="60,58 100,38 240,58 200,78" fill="#f8fdfd"/>
    
    {/* Pillars */}
    {[0,1,2,3,4].map(c => (
      <rect key={c} x={70+c*30} y="78" width="8" height="70" fill="#ffffff" rx="0.5"/>
    ))}
    
    {/* Pediment */}
    <polygon points="50,58 130,20 210,58" fill="url(#eiF)"/>
    <polygon points="130,20 170,40 250,78 210,58" fill="url(#eiS)"/>
    
    <rect x="0" y="148" width="280" height="32" fill="#e0f0f2"/>
  </svg>
);

const FeatureHealthIll = () => (
  <svg viewBox="0 0 280 180" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <defs>
      <linearGradient id="hiBg" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#f5fafa"/><stop offset="100%" stopColor="#eaf5f7"/></linearGradient>
      <linearGradient id="hiF" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#f7fafa"/><stop offset="100%" stopColor="#dbe8eb"/></linearGradient>
      <linearGradient id="hiS" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stopColor="#b8cfd3"/><stop offset="100%" stopColor="#96bac0"/></linearGradient>
      <linearGradient id="hiW" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#fff" stopOpacity="0.9"/><stop offset="100%" stopColor="#80c6cc" stopOpacity="0.5"/></linearGradient>
    </defs>
    <rect width="280" height="180" fill="url(#hiBg)"/>
    <line x1="0" y1="148" x2="280" y2="148" stroke="#bcdcdc" strokeWidth="0.8"/>
    
    <rect x="90" y="30" width="80" height="118" fill="url(#hiF)"/>
    <polygon points="170,30 210,50 210,148 170,148" fill="url(#hiS)"/>
    <polygon points="90,30 130,10 210,30 170,50" fill="#ffffff"/>
    
    {Array.from({length:6}).map((_,r)=>Array.from({length:2}).map((_,c)=>(
      <rect key={`${r}${c}`} x={105+c*30} y={40+r*16} width="18" height="10" fill="url(#hiW)" rx="0.4"/>
    )))}

    <rect x="50" y="100" width="80" height="48" fill="url(#hiF)"/>
    <polygon points="50,100 90,80 170,100 130,120" fill="#ffffff"/>
    <rect x="65" y="115" width="15" height="15" fill="#f25555" rx="1" opacity="0.9"/>
    <polygon points="70,118 75,118 75,115 80,115 80,118 85,118 85,123 80,123 80,126 75,126 75,123 70,123" fill="white"/>

    <rect x="0" y="148" width="280" height="32" fill="#e0f0f2"/>
  </svg>
);


/* ── PROJECT CARD ILLUSTRATIONS ── */
const ProjHospital = () => (
   <svg viewBox="0 0 320 220" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <defs>
      <linearGradient id="phF" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#f7fafa"/><stop offset="100%" stopColor="#dbe8eb"/></linearGradient>
      <linearGradient id="phS" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stopColor="#b8cfd3"/><stop offset="100%" stopColor="#96bac0"/></linearGradient>
      <linearGradient id="phW" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#fff" stopOpacity="0.9"/><stop offset="100%" stopColor="#80c6cc" stopOpacity="0.5"/></linearGradient>
    </defs>
    <rect width="320" height="220" fill="#f0fafc"/>
    <line x1="0" y1="180" x2="320" y2="180" stroke="#bae2e6" strokeWidth="0.8"/>
    
    <rect x="60" y="50" width="140" height="130" fill="url(#phF)"/>
    <polygon points="200,50 250,70 250,180 200,180" fill="url(#phS)"/>
    <polygon points="60,50 110,30 250,50 200,70" fill="#ffffff"/>
    
    {Array.from({length:8}).map((_,r)=>Array.from({length:4}).map((_,c)=>(
      <rect key={`${r}${c}`} x={75+c*30} y={60+r*13} width="20" height="9" fill="url(#phW)" rx="0.5" opacity="0.9"/>
    )))}
    
    <ellipse cx="155" cy="40" rx="30" ry="12" fill="#586c73"/>
    <text x="155" y="44" fill="#a4bcd1" fontSize="10" fontWeight="bold" fontFamily="sans-serif" textAnchor="middle">H</text>
    
    <rect x="0" y="180" width="320" height="40" fill="#e5f5f7"/>
  </svg>
);

const ProjUniversity = () => (
  <svg viewBox="0 0 320 220" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <defs>
      <linearGradient id="puF" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#ffffff"/><stop offset="100%" stopColor="#eaf1f2"/></linearGradient>
      <linearGradient id="puS" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stopColor="#d0e2e5"/><stop offset="100%" stopColor="#acced3"/></linearGradient>
    </defs>
    <rect width="320" height="220" fill="#f0fafc"/>
    <line x1="0" y1="180" x2="320" y2="180" stroke="#bae2e6" strokeWidth="0.8"/>
    
    <rect x="40" y="80" width="180" height="100" fill="url(#puF)"/>
    <polygon points="220,80 270,105 270,180 220,180" fill="url(#puS)"/>
    
    {[0,1,2,3,4,5,6,7].map(c => (
      <rect key={c} x={50+c*22} y="100" width="10" height="80" fill="#ffffff" rx="0.5"/>
    ))}
    
    <polygon points="30,80 130,40 230,80" fill="url(#puF)"/>
    <polygon points="130,40 180,65 270,105 220,80" fill="url(#puS)"/>
    <path d="M90,60 C90,20 170,20 170,60 Z" fill="#b0bcc5"/>
    
    <rect x="0" y="180" width="320" height="40" fill="#e5f5f7"/>
  </svg>
);

const ProjLab = () => (
  <svg viewBox="0 0 320 220" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <defs>
      <linearGradient id="plF" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#eaf5f7"/><stop offset="100%" stopColor="#c3dce0"/></linearGradient>
      <linearGradient id="plS" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stopColor="#96bac0"/><stop offset="100%" stopColor="#78a3aa"/></linearGradient>
      <linearGradient id="plW" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#fff" stopOpacity="0.9"/><stop offset="100%" stopColor="#6eb2b8" stopOpacity="0.5"/></linearGradient>
    </defs>
    <rect width="320" height="220" fill="#f0fafc"/>
    <line x1="0" y1="180" x2="320" y2="180" stroke="#bae2e6" strokeWidth="0.8"/>
    
    <rect x="70" y="70" width="130" height="110" fill="url(#plF)"/>
    <polygon points="200,70 240,90 240,180 200,180" fill="url(#plS)"/>
    <polygon points="70,70 110,50 240,70 200,90" fill="#f8fcfd"/>
    
    {Array.from({length:4}).map((_,r)=>Array.from({length:3}).map((_,c)=>(
      <rect key={`${r}${c}`} x={85+c*35} y={85+r*20} width="22" height="12" fill="url(#plW)" rx="1"/>
    )))}
    <rect x="120" y="160" width="30" height="20" fill="#3b4d52"/>

    <rect x="0" y="180" width="320" height="40" fill="#e5f5f7"/>
  </svg>
);


/* ════════════════════════════════════
   MAIN COMPONENT
════════════════════════════════════ */
export default function EducationalHealthcare() {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, threshold: 0.1 });

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [inView, controls]);

  const projects = [
    { name: "Metropolitan General Hospital", location: "Hyderabad", type: "Healthcare", status: "Completed", Ill: ProjHospital },
    { name: "State Technical University", location: "Hyderabad", type: "Education", status: "Ongoing", Ill: ProjUniversity },
    { name: "Advanced Research Labs", location: "Hyderabad", type: "Medical Labs", status: "Upcoming", Ill: ProjLab },
  ];

  const features = [
    { title: "Educational Nodes", desc: "Code-compliant learning environments constructed to support modern academic needs.", Ill: FeatureEduIll },
    { title: "Healthcare Facilities", desc: "Hospitals and clinics designed around strict clinical workflows and infection control.", Ill: FeatureHealthIll }
  ];

  const statusCfg = {
    Completed: { bg: "#e2f2eb", text: "#188050", dot: "#27ae60" },
    Ongoing:   { bg: "#eaf2fb", text: "#1b5a96", dot: "#2980b9" },
    Upcoming:  { bg: "#fdf5e6", text: "#a56611", dot: "#f39c12" },
  };

  const stats = [
    { value: "25+",  label: "Facilities Built",  icon: Building2 },
    { value: "9+",   label: "Experiential Years",icon: Stethoscope },
    { value: "100%", label: "QA / QC Score",     icon: Shield },
    { value: "5",   label: "Districts Served",  icon: GraduationCap },
  ];

  const serif = "'Cormorant Garamond', serif";
  const sans  = "'Outfit', sans-serif";

  return (
    <>
      <FontLink />
      {/* Updated Background to cool medical white */}
      <div style={{ fontFamily: sans, background: "#f6fbfc" }} className="min-h-screen">
        <Navbar />

        {/* ══ HERO ══ */}
        <section className="relative overflow-hidden" style={{ height: "90vh", minHeight: 560 }}>
          <div className="absolute inset-0">
            <HeroScene />
          </div>

          <div className="absolute inset-0 flex items-start">
            <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 2.5rem", paddingTop: "12rem", width: "100%" }}>
              <motion.div
                initial={{ opacity: 0, y: 36 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                style={{
                  maxWidth: 580,
                  // Glass pane updated to cool white
                  background: "linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(246,251,252,0.85) 100%)",
                  backdropFilter: "blur(15px)",
                  borderRadius: 24,
                  padding: "3rem 3.5rem",
                  border: "1px solid rgba(164,198,203,0.4)",
                  boxShadow: "0 24px 64px rgba(10,40,46,0.08)",
                }}
              >
                {/* Eyebrow */}
                <motion.div
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.22, duration: 0.65 }}
                  style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: "1.2rem" }}
                >
                  <div style={{ width: 28, height: 2, background: "#4ca1af" }}/>
                  <span style={{ fontSize: 10, fontWeight: 700, color: "#4ca1af",
                    letterSpacing: "0.22em", textTransform: "uppercase", fontFamily: sans }}>
                    Services / Education &amp; Healthcare
                  </span>
                  <div style={{ width: 28, height: 2, background: "#4ca1af" }}/>
                </motion.div>

                {/* Headline - Deep Teal color for contrast */}
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.32, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  style={{
                    fontFamily: serif,
                    fontSize: "clamp(2.4rem, 4vw, 3.6rem)",
                    fontWeight: 700,
                    color: "#0c3138",
                    lineHeight: 1.05,
                    marginBottom: "1.25rem",
                    letterSpacing: "-0.01em",
                  }}
                >
                  Education<br/>
                  <em style={{ fontStyle: "italic", fontWeight: 400, color: "#306e78" }}>&amp; Healthcare</em>
                </motion.h1>

                

                {/* Body */}
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.55, duration: 0.8 }}
                  style={{ fontSize: "0.95rem", fontWeight: 400, color: "#4d6b70",
                    lineHeight: 1.78 }}
                >
                  Precision-engineered blueprints for futuristic education and healthcare facilities. Constructed to exacting specifications with integrated technical parameters ensuring absolute clinical and academic functionality.
                </motion.p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ══ STATS ══ */}
        <section style={{ borderBottom: "1px solid #d4edf0", background: "#ffffff", padding: "2.5rem 0" }}>
          <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 2rem", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "2rem" }}>
            {stats.map((S,i)=>(
              <motion.div key={i}
                initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i*0.1+0.2 }} viewport={{ once: true }}
                style={{ display: "flex", alignItems: "center", gap: 16 }}
              >
                <div style={{ width: 56, height: 56, background: "#eff8f9", borderRadius: "16px", display: "flex", alignItems: "center", justifyContent: "center", color: "#4ca1af", border: "1px solid #d4edf0" }}>
                  <S.icon size={26} strokeWidth={1.5} />
                </div>
                <div>
                  <div style={{ fontSize: "1.7rem", fontWeight: 600, color: "#0c3138", fontFamily: serif, lineHeight: 1 }}>{S.value}</div>
                  <div style={{ fontSize: "0.85rem", color: "#6a8d94", marginTop: 6, fontWeight: 500 }}>{S.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>


        {/* ══ FEATURES ══ */}
        <section style={{ padding: "7rem 2rem", background: "#f6fbfc", position: "relative" }}>
          <div style={{
            position: "absolute", inset: 0, pointerEvents: "none",
            // Medical cross pattern instead of dots
            backgroundImage: "radial-gradient(#b6e0e5 1px, transparent 1px)",
            backgroundSize: "40px 40px", opacity: 0.4,
          }}/>
          <div style={{ maxWidth: 1280, margin: "0 auto", position: "relative" }}>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }} viewport={{ once: true }}
              style={{ textAlign: "center", marginBottom: "4rem" }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 12, marginBottom: 10 }}>
                <div style={{ width: 26, height: 2, background: "#4ca1af" }}/>
                <span style={{ fontSize: 10, fontWeight: 700, color: "#4ca1af", letterSpacing: "0.22em", textTransform: "uppercase" }}>Specialized Matrix</span>
                <div style={{ width: 26, height: 2, background: "#4ca1af" }}/>
              </div>
              <h2 style={{ fontFamily: serif, fontSize: "clamp(2.2rem,3.5vw,3rem)", fontWeight: 700, color: "#0c3138", letterSpacing: "-0.02em" }}>
                Institutional Expertise
              </h2>
            </motion.div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(350px,1fr))", gap: "2.5rem" }}>
              {features.map((f, i) => (
                <motion.div key={i}
                  initial={{ opacity: 0, y: 36 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.52 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8, boxShadow: "0 25px 50px rgba(10,40,46,0.1)" }}
                  style={{
                    background: "#ffffff", borderRadius: 20,
                    border: "1px solid #d4edf0", overflow: "hidden",
                    transition: "all 0.4s ease",
                  }}
                >
                  <div style={{ height: 210, background: "#eff8f9", overflow: "hidden", borderBottom: "1px solid #e0f2f4" }}>
                    <f.Ill />
                  </div>
                  <div style={{ padding: "2.5rem 2rem" }}>
                    <h3 style={{ fontFamily: serif, fontSize: "1.6rem", fontWeight: 700, color: "#0c3138", marginBottom: "1rem" }}>{f.title}</h3>
                    <p style={{ fontSize: "1rem", color: "#5a7a80", lineHeight: 1.6 }}>{f.desc}</p>
                   
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ PROJECTS ══ */}
        <section ref={ref} style={{ padding: "7rem 2rem", background: "#ffffff", borderTop: "1px solid #d4edf0" }}>
          <div style={{ maxWidth: 1280, margin: "0 auto" }}>
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "4rem", gap: "2rem" }}>
              <motion.div initial={{ opacity: 0, x: -20 }} animate={controls} variants={{ visible: { opacity: 1, x: 0, transition: { duration: 0.6 } } }}>
                 <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 12, marginBottom: 10 }}>
                <div style={{ width: 26, height: 2, background: "#4ca1af" }}/>
                <span style={{ fontSize: 10, fontWeight: 700, color: "#4ca1af", letterSpacing: "0.22em", textTransform: "uppercase" }}>Advanced precision and care parameters</span>
                <div style={{ width: 26, height: 2, background: "#4ca1af" }}/>
              </div>
                
                <h2 style={{ fontFamily: serif, fontSize: "clamp(2rem,3.5vw,2.8rem)", fontWeight: 700, color: "#0c3138", letterSpacing: "-0.02em", marginBottom: 16 }}>
                  Executed Infrastructures
                </h2>
              </motion.div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))", gap: "2.5rem" }}>
              {projects.map((p, i) => (
                <motion.div key={i}
                  initial={{ opacity: 0, y: 30 }} animate={controls}
                  variants={{ visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.1 } } }}
                  whileHover={{ y: -10 }}
                  style={{
                    background: "#ffffff", borderRadius: 16, overflow: "hidden",
                    border: "1px solid #d4edf0", boxShadow: "0 12px 35px rgba(10,40,46,0.04)",
                    transition: "transform 0.4s cubic-bezier(0.2,0.8,0.2,1)",
                  }}
                >
                  <div style={{ height: 230, overflow: "hidden", background: "#f6fbfc", position: "relative" }}>
                    <p.Ill />
                    <div style={{
                      position: "absolute", top: 16, right: 16,
                      background: statusCfg[p.status].bg, color: statusCfg[p.status].text,
                      padding: "6px 14px", borderRadius: 30, fontSize: "0.75rem",
                      fontWeight: 700, display: "flex", alignItems: "center", gap: 6,
                      boxShadow: "0 4px 15px rgba(0,0,0,0.06)"
                    }}>
                      <span style={{ width: 6, height: 6, borderRadius: "50%", background: statusCfg[p.status].dot }}/>
                      {p.status}
                    </div>
                  </div>
                  <div style={{ padding: "2rem" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
                      <div style={{ fontSize: "0.75rem", color: "#4ca1af", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", background: "#eff8f9", padding: "4px 10px", borderRadius: 4 }}>
                        {p.type}
                      </div>
                    </div>
                    
                    <h3 style={{ fontFamily: serif, fontSize: "1.5rem", fontWeight: 700, color: "#0c3138", marginBottom: 20, lineHeight: 1.25 }}>
                      {p.name}
                    </h3>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", borderTop: "1px solid #eaf3f5", paddingTop: "1.2rem" }}>
                      <span style={{ fontSize: "0.95rem", color: "#6a8d94", display: "flex", alignItems: "center", gap: 6, fontWeight: 500 }}>
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                        {p.location}
                      </span>
                      <div style={{ width: 32, height: 32, borderRadius: "50%", background: "#eff8f9", display: "flex", alignItems: "center", justifyContent: "center", color: "#4ca1af", cursor: "pointer", transition: "background 0.2s" }} className="hover:bg-[#d4edf0]">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

      </div>
      <Footer />
    </>
  );
}