import { useEffect, useRef, useState } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import {
  Award,
  Building2,
  Users,
  Clock,
  TrendingUp,
  Headphones,
  Shield,
  Heart,
  Lightbulb,
  Target,
  Quote,
  CheckCircle,
} from "lucide-react";

export default function AboutUs() {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, threshold: 0.1 });
  const [counters, setCounters] = useState({
    years: 0,
    projects: 0,
    clients: 0,
    countries: 0,
  });

  const stats = [
    { key: "years", value: 9, label: "Years Experience", suffix: "+", icon: Clock },
    { key: "projects", value: 25, label: "Projects Completed", suffix: "+", icon: Building2 },
    { key: "clients", value: 25, label: "Happy Clients", suffix: "+", icon: Users },
    { key: "support", value: 24, label: "Client Support", suffix: "24/7", icon: Headphones }
  ];

  const values = [
    { title: "Quality First", desc: "We never compromise on materials, workmanship, or safety.", icon: Shield },
    { title: "Innovation", desc: "Embracing modern techniques and sustainable practices.", icon: Lightbulb },
    { title: "Integrity", desc: "Transparent communication and honest partnerships.", icon: Heart },
    { title: "Excellence", desc: "Delivering beyond expectations, every time.", icon: Award },
  ];

  useEffect(() => {
    if (inView) {
      controls.start("visible");
      const duration = 2000;
      const stepTime = 20;
      const steps = duration / stepTime;
      let step = 0;
      const interval = setInterval(() => {
        step++;
        const progress = step / steps;
        // Ease out quad
        const ease = progress * (2 - progress);
        setCounters({
          years: Math.min(9, Math.round(9 * ease)),
          projects: Math.min(25, Math.round(25 * ease)),
          clients: Math.min(25, Math.round(25 * ease)),
          countries: Math.min(1, Math.round(1 * ease)),
        });
        if (step >= steps) clearInterval(interval);
      }, stepTime);
      return () => clearInterval(interval);
    }
  }, [inView, controls]);

  return (
    <div className="bg-slate-50 min-h-screen font-sans">
      <Navbar />

      {/* ── STYLES FOR 3D CSS ELEMENTS ── */}
      <style>{`
        .light-bg-grid {
          position: absolute;
          inset: 0;
          background-image: linear-gradient(to right, rgba(59, 130, 246, 0.05) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(59, 130, 246, 0.05) 1px, transparent 1px);
          background-size: 30px 30px;
          animation: bgFloat 30s linear infinite;
        }
        @keyframes bgFloat { 0% { transform: translateY(0); } 100% { transform: translateY(40e px); } }

        /* Isometric Container */
        .iso-scene {
          width: 100%;
          height: 100%;
          perspective: 1200px;
          display: flex;
          align-items: center;
          justify-content: center;
          transform-style: preserve-3d;
        }
        .iso-wrapper {
          position: relative;
          transform: rotateX(60deg) rotateZ(45deg);
          animation: isoHover 6s ease-in-out infinite;
          transform-style: preserve-3d;
        }
        @keyframes isoHover {
          0%, 100% { transform: rotateX(60deg) rotateZ(45deg) translateZ(0px); }
          50% { transform: rotateX(60deg) rotateZ(45deg) translateZ(20px); }
        }

        /* 3D Shapes */
        .iso-cube { position: absolute; transform-style: preserve-3d; transition: transform 0.3s; }
        .iso-face { position: absolute; }
        
        /* Main Tower */
        .c-main { left: -60px; top: -60px; transform: translateZ(0); }
        .c-main .f-top { width: 120px; height: 120px; background: #e0f2fe; transform: rotateX(90deg) translateZ(60px) translateY(-60px); border: 2px solid white; }
        .c-main .f-left { width: 120px; height: 220px; background: #bae6fd; transform: rotateY(-90deg) translateZ(60px) translateY(-110px); border: 2px solid white; display: flex; flex-wrap: wrap; padding: 8px; gap: 8px; align-content: flex-start;}
        .c-main .f-right { width: 120px; height: 220px; background: #7dd3fc; transform: rotateY(0deg) translateZ(60px) translateY(-110px); border: 2px solid white; display: flex; flex-wrap: wrap; padding: 8px; gap: 8px; align-content: flex-start;}
        
        /* Windows */
        .iso-win { width: 20px; height: 26px; background: rgba(255,255,255,0.7); border-radius: 2px; }
        
        /* Smaller Buildings */
        .c-small-1 { left: 80px; top: -20px; transform: translateZ(0); }
        .c-small-1 .f-top { width: 80px; height: 80px; background: #e2e8f0; transform: rotateX(90deg) translateZ(40px) translateY(-40px); border: 2px solid white;}
        .c-small-1 .f-left { width: 80px; height: 140px; background: #cbd5e1; transform: rotateY(-90deg) translateZ(40px) translateY(-70px); border: 2px solid white;}
        .c-small-1 .f-right { width: 80px; height: 140px; background: #94a3b8; transform: rotateY(0deg) translateZ(40px) translateY(-70px); border: 2px solid white;}

        .c-small-2 { left: -20px; top: 100px; transform: translateZ(0); }
        .c-small-2 .f-top { width: 60px; height: 60px; background: #dbeafe; transform: rotateX(90deg) translateZ(30px) translateY(-30px); border: 2px solid white;}
        .c-small-2 .f-left { width: 60px; height: 100px; background: #bfdbfe; transform: rotateY(-90deg) translateZ(30px) translateY(-50px); border: 2px solid white;}
        .c-small-2 .f-right { width: 60px; height: 100px; background: #93c5fd; transform: rotateY(0deg) translateZ(30px) translateY(-50px); border: 2px solid white;}
        
        /* Crane */
        .iso-crane-base { position: absolute; width: 12px; height: 240px; background: #64748b; transform: rotateX(90deg) translateZ(70px) translateX(90px) translateY(-120px); }
        .iso-crane-arm { position: absolute; top: 0; left: -80px; width: 280px; height: 12px; background: #94a3b8; transform-origin: 80px center; animation: craneSwing 15s ease-in-out infinite alternate; }
        .iso-crane-rope { position: absolute; top: 12px; right: 20px; width: 2px; height: 100px; background: #475569; }
        .iso-crane-hook { position: absolute; bottom: -8px; left: -4px; width: 10px; height: 8px; background: #334155; border-radius: 2px; }
        @keyframes craneSwing { 0% { transform: rotateZ(15deg); } 100% { transform: rotateZ(-35deg); } }

        /* Floating Cards */
        .float-obj { position: absolute; background: white; border-radius: 12px; padding: 12px; box-shadow: 0 10px 25px -5px rgba(59, 130, 246, 0.1); display: flex; align-items: center; gap: 10px; font-weight: 600; font-size: 14px; color: #1e293b; border: 1px solid #eff6ff; z-index: 10; }
        .obj-1 { top: 10%; left: 0%; animation: f1 4s ease-in-out infinite; }
        .obj-2 { bottom: 15%; right: 0%; animation: f1 5s ease-in-out infinite 1s; }
        @keyframes f1 { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-15px); } }
      `}</style>

      {/* ── HERO SECTION ── */}
      <section className="relative min-h-[600px] flex items-center pt-0 pb-16 overflow-hidden bg-white">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="light-bg-grid opacity-60"></div>
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-50 rounded-full mix-blend-multiply filter blur-3xl opacity-70 transform translate-x-1/3 -translate-y-1/4"></div>
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-50 rounded-full mix-blend-multiply filter blur-3xl opacity-70 transform -translate-x-1/3 translate-y-1/4"></div>
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <div className="inline-flex items-center gap-3 mb-6 bg-blue-100/50 px-4 py-2 rounded-full border border-blue-200">
              <Shield size={16} className="text-blue-600" />
              <span className="text-xs font-bold text-blue-700 uppercase tracking-widest">
                About Arvish
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 leading-tight mb-6 tracking-tight">
              Building <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-sky-400">Dreams</span>,<br />
              Creating Spaces.
            </h1>
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-8 max-w-xl">
              Arvish Constructions is committed to delivering reliable and high-quality construction solutions with a focus on precision, durability, and timely execution.
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => window.location.href = "/contact"}
                className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-2xl
                           border border-[#4f6478]/15 bg-gradient-to-r from-[#4f6478] to-[#3f5366] px-8 py-4
                           text-white font-semibold shadow-[0_16px_34px_rgba(63,83,102,0.18)]
                           transition-all duration-300 ease-out hover:-translate-y-0.5
                           hover:shadow-[0_20px_40px_rgba(63,83,102,0.24)]"
              >
                <span className="absolute inset-0 bg-white/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <span className="relative z-10">Discuss Your Project</span>
                <svg className="relative z-10 h-4 w-4 transition-transform duration-300 ease-out group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </motion.div>

          {/* 3D Isometric Hero Visual */}
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 0.2 }} className="relative h-[450px] lg:h-[600px] w-full hidden md:block">
            <div className="iso-scene">
              <div className="iso-wrapper">
                {/* Massive Base Platform */}
                <div style={{ width: 450, height: 450, background: 'rgba(241, 245, 249, 0.7)', border: '2px solid rgba(226, 232, 240, 0.8)', position: 'absolute', transform: 'translate(-50%, -50%)', borderRadius: 30, boxShadow: 'inset 0 0 40px rgba(255,255,255,1), 20px 20px 40px rgba(59,130,246,0.05)' }}>
                  {/* Grid lines on platform */}
                  <div style={{ position: 'absolute', inset: 20, border: '2px dashed rgba(148,163,184,0.2)', borderRadius: 20 }}></div>
                </div>

                {/* Main Tower Building */}
                <div className="iso-cube c-main">
                  <div className="iso-face f-top"></div>
                  <div className="iso-face f-left">
                    {Array(24).fill(0).map((_, i) => <div key={`l${i}`} className="iso-win" />)}
                  </div>
                  <div className="iso-face f-right">
                    {Array(24).fill(0).map((_, i) => <div key={`r${i}`} className="iso-win" />)}
                  </div>
                </div>

                {/* Smaller Ancillary Building 1 */}
                <div className="iso-cube c-small-1">
                  <div className="iso-face f-top"></div>
                  <div className="iso-face f-left"></div>
                  <div className="iso-face f-right"></div>
                </div>

                {/* Smaller Ancillary Building 2 */}
                <div className="iso-cube c-small-2">
                  <div className="iso-face f-top"></div>
                  <div className="iso-face f-left"></div>
                  <div className="iso-face f-right"></div>
                </div>

                {/* Crane Segment */}
                <div className="iso-crane-base">
                  <div className="iso-crane-arm">
                    <div className="iso-crane-rope">
                      <div className="iso-crane-hook"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Info Cards */}
            

            <div className="float-obj obj-2">
              <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600">
                <Award size={20} />
              </div>
              <div>
                <div className="text-xs text-slate-400 font-medium">Quality</div>
                <div className="text-sm font-bold text-slate-800">Premium</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── WHO WE ARE ── */}
      <section id="who-we-are" className="py-24 px-6 relative bg-slate-50">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          {/* Animated Image with Holographic UI Overlay */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1 relative h-[450px] w-full rounded-[2rem] overflow-hidden shadow-2xl group border-8 border-white"
          >
            {/* Background Image */}
            <div className="absolute inset-0 bg-slate-900 overflow-hidden">
               <motion.img 
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  src="/interior_blueprint.png" 
                  alt="Architecture and Interior Designer with Holographic Blueprint" 
                  className="w-full h-full object-cover opacity-90 mix-blend-screen"
               />
            </div>

            {/* Glowing Tech Overlay HUD */}
            <div className="absolute inset-0 z-10 pointer-events-none">
               {/* Animated Scanning Line */}
               <motion.div 
                 animate={{ top: ['0%', '100%', '0%'] }} 
                 transition={{ duration: 6, ease: "linear", repeat: Infinity }}
                 className="absolute left-0 w-full h-[2px] bg-blue-400/50 shadow-[0_0_20px_rgba(96,165,250,0.9)]"
               />

               {/* Corner HUD Framing Elements */}
               <div className="absolute top-6 left-6 w-10 h-10 border-t-[3px] border-l-[3px] border-blue-400/70 transition-transform duration-500 group-hover:-translate-x-2 group-hover:-translate-y-2"></div>
               <div className="absolute top-6 right-6 w-10 h-10 border-t-[3px] border-r-[3px] border-blue-400/70 transition-transform duration-500 group-hover:translate-x-2 group-hover:-translate-y-2"></div>
               <div className="absolute bottom-6 left-6 w-10 h-10 border-b-[3px] border-l-[3px] border-blue-400/70 transition-transform duration-500 group-hover:-translate-x-2 group-hover:translate-y-2"></div>
               <div className="absolute bottom-6 right-6 w-10 h-10 border-b-[3px] border-r-[3px] border-blue-400/70 transition-transform duration-500 group-hover:translate-x-2 group-hover:translate-y-2"></div>

               {/* Floating Animated UI Dots */}
               <motion.div 
                 animate={{ opacity: [0.1, 1, 0.1], scale: [0.8, 1.2, 0.8] }} 
                 transition={{ duration: 2, repeat: Infinity }}
                 className="absolute top-1/4 left-1/3 w-3 h-3 rounded-full bg-cyan-400 shadow-[0_0_15px_rgba(34,211,238,1)]"
               />
               <motion.div 
                 animate={{ opacity: [0.1, 1, 0.1], scale: [0.8, 1.2, 0.8] }} 
                 transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                 className="absolute bottom-1/3 right-1/4 w-3 h-3 rounded-full bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,1)]"
               />

               {/* Sci-Fi Grid Texture Overlay */}
               <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAzNHYtbGgtaHYtbGgtaHY0SDM2em0wIDRoOHY0aC04di00em0tNCA0aDR2NGgtNHYtNHptLTQgNGg0djRoLTR2LTR6bS00IDRoNHYzaC00di0zem0wLTd2LTRoLTR2NGg0em0wLTR2LTRoLTR2NGg0em0wLTR2LTRoLTR2NGg0em00IDBoNHY0aC00di00em00IDBoNHY0aC00di00em00IDBoNHY0aC00di00eiIgZmlsbD0iIzQwYjZmZiIgZmlsbC1vcGFjaXR5PSIwLjE1Ii8+PC9nPjwvc3ZnPg==')] opacity-50 mix-blend-lighten"></div>
            </div>
            
           
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-8 h-0.5 bg-blue-600 rounded-full"></div>
              <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">Who We Are</span>
              <div className="w-8 h-0.5 bg-blue-600 rounded-full"></div>
            </div>
            <h3 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
              Building the Future,<br />One Project at a Time.
            </h3>
            <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
              <p>
                Arvish Constructions is a Hyderabad-based construction company focused on delivering residential, commercial, and infrastructure projects with uncompromised quality and absolute reliability.
              </p>
              <p>
                We believe that every structure we build is a testament to our dedication. We work closely with our clients to fully understand their unique requirements, ensuring each project undergoes rigorous planning, precise detailing, and flawless execution.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── STATS SECTION ── */}
 {/* Stats with animated counters */}
      <section ref={ref} className="py-16 px-6 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, idx) => (
              <motion.div
                key={stat.key}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="bg-white rounded-2xl p-6 text-center shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-blue-100"
              >
                <stat.icon size={32} className="text-blue-600 mx-auto mb-3" />
                <p className="text-3xl md:text-4xl font-black text-gray-900">
                  {counters[stat.key]}
                  {stat.suffix}
                </p>
                <p className="text-sm text-gray-500 mt-2">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
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
              <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">Core Values</span>
              <div className="w-8 h-0.5 bg-blue-600 rounded-full"></div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">What Drives Us</h2>
           
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="text-center p-6 rounded-xl bg-gray-50 hover:bg-blue-50 transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-600 transition-colors duration-300">
                  <value.icon size={28} className="text-blue-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600 text-sm">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TIMELINE ── */}
      <section className="py-20 px-6 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-8 h-0.5 bg-blue-600 rounded-full" />
              <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">Our Journey</span>
              <div className="w-8 h-0.5 bg-blue-600 rounded-full" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">Our Growth Journey</h2>
            
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-blue-200 hidden md:block" />
            <div className="space-y-8 md:space-y-0">
              {[
                { stage: "2017", title: "Company Foundation", desc: "Started with a vision to deliver reliable construction services in Hyderabad." },
                { stage: "2018", title: "Residential Projects", desc: "Focused on building quality residential homes with strong construction practices." },
                { stage: "2019", title: "Commercial Expansion", desc: "Expanded into commercial and retail construction projects." },
                { stage: "2020", title: "Project Growth", desc: "Successfully completed multiple projects with a focus on quality and timely delivery." },
                { stage: "2021", title: "Service Expansion", desc: "Extended services to include industrial and specialized construction projects." },
                { stage: "2022", title: "Modern Approach", desc: "Adopted efficient construction methods and improved project management practices." },
                { stage: "2023", title: "Client Trust", desc: "Built strong relationships with clients through reliable work and consistent results." },
                { stage: "2024", title: "Ongoing Growth", desc: "Continuing to grow with a focus on quality construction and customer satisfaction." }
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative flex flex-col md:flex-row items-center ${idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                >
                  <div className="flex-1 p-6 bg-white rounded-xl shadow-md mx-4 md:mx-8 hover:shadow-lg transition-all border border-blue-100">
                    <span className="text-3xl font-black text-blue-100">{item.stage}</span>
                    <h3 className="text-xl font-bold text-gray-900 mt-1">{item.title}</h3>
                    <p className="text-gray-600 mt-2">{item.desc}</p>
                  </div>
                  <div className="hidden md:flex w-12 h-12 rounded-full bg-blue-600 text-white items-center justify-center z-10 shadow-md">
                    {idx + 1}
                  </div>
                  <div className="flex-1 hidden md:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* ── MISSION & VISION ── */}
      <section className="py-24 px-6 relative overflow-hidden bg-white/70 backdrop-blur-xl border border-white/70 shadow-[0_30px_80px_rgba(15,23,42,0.08)]">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAzNHYtbGgtaHYtbGgtaHY0SDM2em0wIDRoOHY0aC04di00em0tNCA0aDR2NGgtNHYtNHptLTQgNGg0djRoLTR2LTR6bS00IDRoNHYzaC00di0zem0wLTd2LTRoLTR2NGg0em0wLTR2LTRoLTR2NGg0em0wLTR2LTRoLTR2NGg0em00IDBoNHY0aC00di00em00IDBoNHY0aC00di00em00IDBoNHY0aC00di00eiIgZmlsbD0iIzFZTDRGMCIgZmlsbC1vcGFjaXR5PSIwLjA1Ii8+PC9nPjwvc3ZnPg==')] opacity-20"></div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
            <div className="w-20 h-20 bg-blue-100/70 rounded-full flex items-center justify-center mx-auto mb-8 border border-blue-100/80">
              <Target size={40} className="text-blue-600" />
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-8">Our Mission & Vision</h2>
            <h3 className="text-2xl font-serif text-slate-600 italic max-w-3xl mx-auto leading-relaxed mb-12">
              "To deliver high-quality construction services that meet client expectations while maintaining absolute transparency, reliability, and precision."
            </h3>

            <div className="flex flex-wrap justify-center gap-4 md:gap-8">
              {[
                { icon: TrendingUp, label: "Constant Innovation" },
                { icon: Heart, label: "Honest Integrity" },
                { icon: Award, label: "Proven Excellence" }
              ].map((m, i) => (
                <div key={i} className="flex items-center gap-3 bg-white/80 border border-slate-200/70 rounded-full px-6 py-3 hover:scale-110 hover:shadow-xl hover:border-blue-400 hover:bg-blue-50/80 transition-all duration-300 cursor-pointer">
                  <m.icon size={20} className="text-blue-600" />
                  <span className="text-slate-900 font-medium">{m.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      

      <Footer />
    </div>
  );
}
