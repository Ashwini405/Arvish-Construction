import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Home, Shield, Users, CheckCircle, ArrowRight } from "lucide-react";

export default function Residential() {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, threshold: 0.1 });

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [inView, controls]);

  const projects = [
    { name: "Independent House Construction", location: "Hyderabad", units: "3BHK Residential Home", status: "Completed", type: "house" },
    { name: "Residential Apartment Project", location: "Hyderabad", units: "Apartment Units", status: "Completed", type: "apartment" },
    { name: "Villa Construction Project", location: "Telangana", units: "Modern Villa", status: "Ongoing", type: "villa" },
    { name: "Home Renovation Project", location: "Hyderabad", units: "Residential Upgrade", status: "Completed", type: "renovation" },
  ];

  const ProjectAnimation = ({ type }) => {
    return (
      <div className="w-full h-full min-h-[250px] bg-slate-900/95 relative overflow-hidden flex items-center justify-center p-4 group-hover:scale-105 transition-transform duration-700 font-mono">
        {/* Background blueprint grid */}
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='20' height='20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h20v20H0z' fill='none'/%3E%3Cpath d='M0 19.5h20M19.5 0v20M0 9.5h20M9.5 0v20' stroke='rgba(56, 189, 248, 0.4)' stroke-width='1'/%3E%3C/svg%3E\")" }} />


        {/* Ambient Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-blue-500 rounded-full mix-blend-screen filter blur-[50px] opacity-20"></div>

        {/* Corner HUD framing */}
        <div className="absolute top-4 right-4 w-6 h-6 border-t-[2px] border-r-[2px] border-cyan-400/60 z-20"></div>
        <div className="absolute bottom-4 left-4 w-6 h-6 border-b-[2px] border-l-[2px] border-cyan-400/60 z-20"></div>

        {/* SVG Animation based on type */}
        <svg className="w-full h-full max-w-[80%] max-h-[80%] relative z-10 drop-shadow-[0_0_10px_rgba(34,211,238,0.6)]" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.5">
          
          {/* Animated paths for House */}
          {type === 'house' && (
            <g>
              {/* Base blueprint wireframe */}
              <g className="text-slate-500/70" stroke="currentColor" strokeWidth="0.5" strokeDasharray="1 2" fill="none">
                <path d="M 20 80 L 80 80 L 80 40 L 50 15 L 20 40 Z" />
                <path d="M 35 80 L 35 55 L 50 55 L 50 80" />
                <path d="M 60 50 L 60 70 L 70 70 L 70 50 Z" />
                <path d="M 20 40 L 80 40" strokeWidth="0.5" />
              </g>
              
              {/* Stationary Dimensions */}
              <path d="M 10 80 L 10 40 M 8 80 L 12 80 M 8 40 L 12 40" stroke="rgba(56, 189, 248, 0.4)" strokeWidth="0.5" strokeDasharray="1 1" />

              {/* Glowing Constructed structure revealed by scanner */}
              <motion.g 
                 initial={{ clipPath: "inset(100% 0% 0% 0%)" }}
                 animate={{ clipPath: ["inset(100% 0% 0% 0%)", "inset(0% 0% 0% 0%)", "inset(100% 0% 0% 0%)"] }}
                 transition={{ duration: 5, ease: "easeInOut", repeat: Infinity }}
                 className="text-cyan-400"
              >
                  {/* Formed Walls & Roof */}
                  <path d="M 20 80 L 80 80 L 80 40 L 50 15 L 20 40 Z" fill="rgba(34,211,238,0.08)" stroke="currentColor" strokeWidth="1" />
                  
                  <path d="M 35 80 L 35 55 L 50 55 L 50 80" fill="rgba(15,23,42,0.6)" stroke="currentColor" strokeWidth="1" />
                  <path d="M 60 50 L 60 70 L 70 70 L 70 50 Z" fill="rgba(34,211,238,0.2)" stroke="currentColor" strokeWidth="1" />
                  <path d="M 20 40 L 80 40" stroke="currentColor" strokeWidth="1.5" />
                  
                  {/* Structural nodes */}
                  <circle cx="20" cy="40" r="1.5" fill="cyan" />
                  <circle cx="80" cy="40" r="1.5" fill="cyan" />
                  <circle cx="50" cy="15" r="1.5" fill="cyan" />
                  <circle cx="20" cy="80" r="1.5" fill="cyan" />
                  <circle cx="80" cy="80" r="1.5" fill="cyan" />
              </motion.g>
            </g>
          )}

          {/* Animated paths for Apartment */}
          {type === 'apartment' && (
            <motion.g initial={{ pathLength: 0, opacity: 0.5 }} animate={{ pathLength: 1, opacity: 1 }} transition={{ duration: 4, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }} className="text-cyan-400">
              <path d="M 30 90 L 70 90 L 70 10 L 30 10 Z" />
              <path d="M 40 10 L 40 90 M 50 10 L 50 90 M 60 10 L 60 90" strokeWidth="0.5" />
              <path d="M 30 20 L 70 20 M 30 30 L 70 30 M 30 40 L 70 40 M 30 50 L 70 50 M 30 60 L 70 60 M 30 70 L 70 70 M 30 80 L 70 80" strokeWidth="0.5" />
              <motion.path d="M 20 10 L 80 10" animate={{ translateY: [0, 80, 0] }} transition={{ duration: 3, repeat: Infinity, ease: "linear" }} stroke="rgba(34,211,238,0.9)" strokeWidth="1" />
              <path d="M 25 90 L 30 90 M 70 90 L 75 90" strokeWidth="2" />
            </motion.g>
          )}

          {/* Animated paths for Villa */}
          {type === 'villa' && (
            <motion.g initial={{ pathLength: 0, opacity: 0.5 }} animate={{ pathLength: 1, opacity: 1 }} transition={{ duration: 3.5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }} className="text-cyan-400">
              <path d="M 10 80 L 90 80 L 90 60 L 60 60 L 60 30 L 20 30 L 20 50 L 10 50 Z" />
              <path d="M 60 60 L 20 60 M 50 30 L 50 60 M 40 40 L 60 40" strokeWidth="0.5" />
              <path d="M 70 60 L 70 80 M 80 60 L 80 80" strokeWidth="0.5" />
              <path d="M 25 80 L 45 80 L 45 85 L 25 85 Z" stroke="rgba(56, 189, 248, 0.4)" fill="rgba(56, 189, 248, 0.15)" />
              <circle cx="15" cy="70" r="1.5" fill="rgba(34,211,238,0.7)" />
              <circle cx="85" cy="55" r="1.5" fill="rgba(34,211,238,0.7)" />
            </motion.g>
          )}

          {/* Animated paths for Renovation */}
          {type === 'renovation' && (
             <g>
               {/* Base old Structure (Grey/Faded) */}
               <path d="M 20 80 L 80 80 L 80 40 L 50 15 L 20 40 Z" stroke="rgba(148, 163, 184, 0.4)" strokeWidth="0.5" strokeDasharray="2 2" />
               <path d="M 20 40 L 80 40" stroke="rgba(148, 163, 184, 0.4)" strokeWidth="0.5" strokeDasharray="2 2" />

               {/* Upgraded Structure Revealed by scanner */}
               <motion.g 
                 initial={{ clipPath: "inset(0% 100% 0% 0%)" }}
                 animate={{ clipPath: ["inset(0% 100% 0% 0%)", "inset(0% 0% 0% 0%)", "inset(0% 0% 0% 0%)"] }}
                 transition={{ duration: 4, ease: "linear", repeat: Infinity, repeatDelay: 1 }}
               >
                 <path d="M 15 85 L 85 85 L 85 35 L 50 10 L 15 35 Z" fill="rgba(34,211,238,0.05)" stroke="rgba(34,211,238,0.8)" strokeWidth="1" />
                 
                 {/* New Extension */}
                 <path d="M 85 85 L 95 85 L 95 50 L 85 50" stroke="rgba(34,211,238,1)" strokeWidth="1.5" />
                 <path d="M 85 50 L 95 50 L 95 85" fill="rgba(34,211,238,0.2)" stroke="none" />
                 
                 {/* New Window Upgrade */}
                 <path d="M 30 85 L 30 50 L 50 50 L 50 85" stroke="rgba(34,211,238,0.9)" strokeWidth="1" />
                 <path d="M 30 65 L 50 65 M 40 50 L 40 85" stroke="rgba(34,211,238,0.5)" strokeWidth="0.5" />
                 
                 {/* Data Points */}
                 <circle cx="50" cy="10" r="1.5" fill="cyan" />
                 <circle cx="95" cy="50" r="1.5" fill="cyan" />
                 <circle cx="95" cy="85" r="1.5" fill="cyan" />
               </motion.g>
             </g>
          )}
        </svg>

        {/* UNIQUE ANIMATIONS PER TYPE */}
        {type === 'house' && (
          <motion.div
             animate={{ top: ['100%', '0%', '100%'] }}
             transition={{ duration: 5, ease: 'easeInOut', repeat: Infinity }}
             className="absolute left-0 w-full h-[2px] bg-cyan-400/50 z-20 shadow-[0_0_15px_rgba(34,211,238,0.8)] pointer-events-none"
             style={{ background: 'linear-gradient(to right, transparent, #22d3ee, transparent)' }}
          />
        )}

        {type === 'apartment' && (
          <motion.div
             animate={{ left: ['0%', '100%', '0%'] }}
             transition={{ duration: 5, ease: 'easeInOut', repeat: Infinity }}
             className="absolute top-0 w-[2px] h-full bg-blue-400/60 z-20 shadow-[0_0_15px_rgba(59,130,246,0.9)] pointer-events-none"
          />
        )}

        {type === 'villa' && (
           <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20">
              <motion.div
                 initial={{ scale: 0, opacity: 0.8 }}
                 animate={{ scale: 2.5, opacity: 0 }}
                 transition={{ duration: 3, ease: 'easeOut', repeat: Infinity }}
                 className="w-32 h-32 border-[1.5px] border-cyan-400/60 rounded-full"
              />
              <motion.div
                 initial={{ scale: 0, opacity: 0.8 }}
                 animate={{ scale: 2.5, opacity: 0 }}
                 transition={{ duration: 3, ease: 'easeOut', repeat: Infinity, delay: 1 }}
                 className="absolute w-32 h-32 border-[1.5px] border-cyan-400/60 rounded-full"
              />
           </div>
        )}

        {type === 'renovation' && (
          <div className="absolute inset-0 z-20 pointer-events-none">
             <motion.div
               animate={{ left: ['0%', '100%', '100%'] }}
               transition={{ duration: 4, ease: 'linear', repeat: Infinity, repeatDelay: 1 }}
               className="absolute top-0 w-[2.5px] h-full z-20 shadow-[0_0_20px_rgba(34,211,238,1)] flex items-center justify-center mix-blend-screen"
               style={{ background: 'linear-gradient(to bottom, transparent, #22d3ee, #06b6d4, #22d3ee, transparent)' }}
             >
                <div className="w-2 h-2 bg-white rounded-full shadow-[0_0_15px_#fff]"></div>
             </motion.div>
          </div>
        )}
        
        {/* Inner shadow for depth */}
        <div className="absolute inset-0 shadow-[inset_0_0_30px_rgba(0,0,0,0.8)] pointer-events-none z-30"></div>
      </div>
    );
  };

  const features = [
    { icon: Home, title: "Custom Home Design", desc: "Homes designed based on your needs, preferences, and budget." },
    { icon: Shield, title: "Quality Construction", desc: "Strong structures built using reliable materials and proven methods." },
    { icon: Users, title: "Experienced Team", desc: "Skilled engineers and workers ensuring proper execution at every stage." },
    { icon: CheckCircle, title: "Timely Delivery", desc: "Projects completed on time with proper planning and coordination." },
  ];

  const statusColor = {
    Completed: "bg-emerald-100 text-emerald-700",
    Ongoing: "bg-blue-100 text-blue-700",
    Upcoming: "bg-amber-100 text-amber-700",
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="bg-white min-h-screen">
      <Navbar />

      {/* Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 -left-20 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-float"></div>
        <div className="absolute bottom-20 -right-20 w-96 h-96 bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-float-delayed"></div>
      </div>

      {/* ══ HERO ══ */}
      <section className="relative overflow-hidden min-h-[70vh] md:min-h-[90vh]">
        <div className="absolute inset-0">
          <img
            src="/residential_hero.png"
            alt="Residential construction background"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text overlay — left-anchored, no heavy dark overlay */}
        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 36 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="w-full max-w-[520px] rounded-[20px] bg-white/90 backdrop-blur-[12px] p-6 sm:p-10 border border-slate-200/70 shadow-[0_24px_64px_rgba(20,30,40,0.12)]"
              style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.96) 0%, rgba(250,250,250,0.88) 100%)' }}
            >
              {/* Eyebrow */}
              <motion.div
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.22, duration: 0.65 }}
                style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: '1.2rem' }}
              >
                <div style={{ width: 28, height: 1, background: '#6a7a8a' }} />
                <span style={{ fontSize: 10, fontWeight: 600, color: '#6a7a8a', letterSpacing: '0.22em', textTransform: 'uppercase', fontFamily: 'sans-serif' }}>
                  Services / Residential
                </span>
                <div style={{ width: 28, height: 1, background: '#6a7a8a' }} />
              </motion.div>

              {/* Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.32, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                style={{
                  fontFamily: 'serif',
                  fontSize: 'clamp(2.6rem, 4.5vw, 4rem)',
                  fontWeight: 700,
                  color: '#18232e',
                  lineHeight: 1.06,
                  marginBottom: '1.25rem',
                  letterSpacing: '-0.02em',
                }}
              >
                Residential<br />
                <em style={{ fontStyle: 'italic', fontWeight: 400, color: '#4a5e72' }}>
                  Construction
                </em>
              </motion.h1>

              {/* Rule */}
              

              {/* Body */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.55, duration: 0.8 }}
                style={{ fontSize: '0.95rem', fontWeight: 300, color: '#4a5a6a', lineHeight: 1.78 }}
              >
                We build residential homes, apartments, and villas designed for absolute comfort, enduring durability, and modern living.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-8 h-0.5 bg-blue-600 rounded-full"></div>
              <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">Why Choose Us</span>
              <div className="w-8 h-0.5 bg-blue-600 rounded-full"></div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Excellence in Every Detail</h2>
            
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-2xl p-8 text-center hover:bg-blue-50 transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-5 group-hover:bg-blue-600 transition-colors duration-300">
                  <feature.icon size={28} className="text-blue-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section ref={ref} className="py-20 px-6 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={controls ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7 }}
            >
              <div className="inline-flex items-center gap-3 mb-4">
                <div className="w-8 h-0.5 bg-blue-600 rounded-full"></div>
                <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">Our Approach</span>
                <div className="w-8 h-0.5 bg-blue-600 rounded-full"></div>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-6">
                Homes Designed for Your Needs
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We believe every home should be a reflection of its owner. Our residential construction process begins with a deep understanding of your needs, preferences, and budget — then we bring that vision to life with precision and care.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                From foundation to finishing, our experienced teams manage every detail, ensuring quality at every stage of construction.
              </p>
              <div className="flex flex-wrap gap-8">
                <div className="text-center">
                  <p className="text-3xl font-black text-blue-600">25+</p>
                  <p className="text-xs text-gray-500 mt-1">Projects Delivered</p>
                </div>
                <div className="w-px bg-gray-300" />
                <div className="text-center">
                  <p className="text-3xl font-black text-blue-600">100%</p>
                  <p className="text-xs text-gray-500 mt-1">Quality Focus</p>
                </div>
                <div className="w-px bg-gray-300" />
                <div className="text-center">
                  <p className="text-3xl font-black text-blue-600">9+</p>
                  <p className="text-xs text-gray-500 mt-1">Years Experience</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={controls ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.7 }}
              className="relative rounded-[2rem] overflow-hidden shadow-2xl h-[450px] bg-slate-900 border-4 border-slate-50 flex items-center justify-center p-8 group"
            >
              {/* Blueprint Grid Background */}
              <div className="absolute inset-0 opacity-40 mix-blend-screen" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='40' height='40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h40v40H0z' fill='none'/%3E%3Cpath d='M0 39.5h40M39.5 0v40M0 19.5h40M19.5 0v40' stroke='rgba(59, 130, 246, 0.2)' stroke-width='1'/%3E%3C/svg%3E\")" }} />
              
              {/* Animated Glowing Grid Plane */}
              <motion.div
                 animate={{ rotateZ: 360 }}
                 transition={{ duration: 60, ease: "linear", repeat: Infinity }}
                 className="absolute w-[800px] h-[800px] rounded-full opacity-60"
                 style={{ backgroundImage: 'radial-gradient(circle, rgba(59,130,246,0.3) 1px, transparent 1px)', backgroundSize: '20px 20px', transform: 'rotateX(60deg)' }}
              />

              {/* 3D Isometric Construction Animation using CSS */}
              <div className="relative w-full h-full flex flex-col items-center justify-center z-10" style={{ perspective: '1000px' }}>
                 <motion.div 
                   animate={{ rotateZ: 360 }}
                   transition={{ duration: 25, ease: "linear", repeat: Infinity }}
                   className="relative w-48 h-48"
                   style={{ transformStyle: 'preserve-3d', transform: 'rotateX(60deg)' }}
                 >
                    {/* Base Platform */}
                    <div className="absolute inset-0 border border-blue-400/50 shadow-[0_0_30px_rgba(59,130,246,0.2)]" style={{ backgroundColor: 'rgba(30,58,138,0.3)', transform: 'translateZ(0px)' }}>
                       <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_48%,rgba(59,130,246,0.4)_49%,rgba(59,130,246,0.4)_51%,transparent_52%)]"></div>
                       <div className="absolute inset-0 bg-[linear-gradient(-45deg,transparent_48%,rgba(59,130,246,0.4)_49%,rgba(59,130,246,0.4)_51%,transparent_52%)]"></div>
                    </div>
                    {/* Building Pillars (Simulating structural growth) */}
                    <motion.div animate={{ height: [40, 140, 40] }} transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }} className="absolute left-0 top-0 w-3 bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.8)]" style={{ transformOrigin: 'bottom', transform: 'rotateX(-90deg) translateZ(0px) translateY(-100%)' }} />
                    <motion.div animate={{ height: [140, 40, 140] }} transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }} className="absolute right-0 top-0 w-3 bg-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.8)]" style={{ transformOrigin: 'bottom', transform: 'rotateX(-90deg) translateZ(0px) translateY(-100%)' }} />
                    <motion.div animate={{ height: [80, 160, 80] }} transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 2 }} className="absolute left-0 bottom-0 w-3 bg-indigo-500 shadow-[0_0_15px_rgba(99,102,241,0.8)]" style={{ transformOrigin: 'bottom', transform: 'rotateX(-90deg) translateZ(0px) translateY(-100%)' }} />
                    <motion.div animate={{ height: [160, 80, 160] }} transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }} className="absolute right-0 bottom-0 w-3 bg-blue-400 shadow-[0_0_15px_rgba(96,165,250,0.8)]" style={{ transformOrigin: 'bottom', transform: 'rotateX(-90deg) translateZ(0px) translateY(-100%)' }} />
                    
                    {/* Floating Roof Segment / Drone */}
                    <motion.div animate={{ translateZ: [100, 200, 100] }} transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }} className="absolute inset-4 border border-cyan-400 shadow-[0_0_30px_rgba(34,211,238,0.3)] backdrop-blur-md flex items-center justify-center overflow-hidden" style={{ backgroundColor: 'rgba(6,182,212,0.1)' }}>
                       {/* Center glowing logo outline inside roof */}
                       <div className="w-16 h-16 border border-cyan-500/50 transform rotate-45 flex items-center justify-center">
                          <motion.div animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }} transition={{ duration: 2, repeat: Infinity }} className="w-6 h-6 bg-cyan-400 shadow-[0_0_20px_rgba(34,211,238,1)]"></motion.div>
                       </div>
                    </motion.div>
                 </motion.div>
              </div>

              {/* Data Overlay HUD Elements */}
              <div className="absolute top-6 left-6 flex items-center gap-3 z-20">
                 <div className="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></div>
                 <span className="text-cyan-400 font-mono text-xs font-bold tracking-widest drop-shadow-[0_0_5px_rgba(34,211,238,0.8)]">SYSTEM ACTIVE</span>
              </div>
              <div className="absolute bottom-6 left-6 z-20">
                 <div className="flex gap-2 mb-2 items-end h-8">
                    <motion.div animate={{ height: ["30%", "100%", "30%"] }} transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }} className="w-1.5 bg-blue-500" />
                    <motion.div animate={{ height: ["80%", "20%", "80%"] }} transition={{ duration: 2, repeat: Infinity, ease: "linear" }} className="w-1.5 bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
                    <motion.div animate={{ height: ["50%", "90%", "50%"] }} transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }} className="w-1.5 bg-indigo-500" />
                 </div>
                 <div className="text-slate-400 font-mono text-[10px] tracking-widest uppercase">Live Metrics</div>
              </div>
              <div className="absolute bottom-6 right-6 text-right z-20">
                 <div className="text-slate-400 font-mono text-[10px] tracking-widest uppercase mb-1">Rendering Data</div>
                 <div className="text-blue-400 font-mono text-xs font-bold whitespace-nowrap">SRC: RESIDENTIAL_SYS</div>
                 <div className="text-slate-500 font-mono text-[10px] whitespace-nowrap mt-1">LAT: 17.3850° N / LON: 78.4867° E</div>
              </div>
              
              {/* Corner HUD Framing Elements */}
              <div className="absolute inset-0 z-10 pointer-events-none">
                <div className="absolute top-4 left-4 w-8 h-8 border-t-[3px] border-l-[3px] border-blue-500/50 transition-colors duration-500 group-hover:border-cyan-400"></div>
                <div className="absolute top-4 right-4 w-8 h-8 border-t-[3px] border-r-[3px] border-blue-500/50 transition-colors duration-500 group-hover:border-cyan-400"></div>
                <div className="absolute bottom-4 left-4 w-8 h-8 border-b-[3px] border-l-[3px] border-blue-500/50 transition-colors duration-500 group-hover:border-cyan-400"></div>
                <div className="absolute bottom-4 right-4 w-8 h-8 border-b-[3px] border-r-[3px] border-blue-500/50 transition-colors duration-500 group-hover:border-cyan-400"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-8 h-0.5 bg-blue-600 rounded-full"></div>
              <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">our work</span>
              <div className="w-8 h-0.5 bg-blue-600 rounded-full"></div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Featured Residential Projects</h2>
            
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-gray-100"
              >
                <div className="flex flex-col md:flex-row">
                  <div className="w-full md:w-2/5 h-80 md:h-auto overflow-hidden bg-slate-900 border-b border-slate-100 md:border-b-0 md:border-r flex-shrink-0 relative">
                    <ProjectAnimation type={project.type} />
                  </div>
                  <div className="w-full md:w-3/5 p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
                      {project.name}
                    </h3>
                    <p className="text-sm text-gray-500 mb-2">{project.location}</p>
                    <p className="text-sm text-gray-600 mb-3">{project.units}</p>
                    <span className={`text-xs font-semibold px-3 py-1 rounded-full ${statusColor[project.status]}`}>
                      {project.status}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>



      <Footer />

      {/* Animation Styles */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(20px) rotate(-5deg); }
        }
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 10s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}