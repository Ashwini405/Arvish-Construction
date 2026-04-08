// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import { motion } from 'framer-motion';
// import Navbar from '../../components/Navbar';
// import Footer from '../../components/Footer';
// import ScrollToTop from '../../components/ScrollToTop';

// const IndustrialWarehouseProject = () => {
//   const navigate = useNavigate();

//   const stats = [
//     { value: '60,000', label: 'sq ft Area', accent: true },
//     { value: '1', label: 'Warehouse Unit', accent: false },
//     { value: 'Ongoing', label: 'Status', accent: true },
//     { value: 'Telangana', label: 'Location', accent: false },
//   ];

//   const timeline = [
//     { year: '2023', title: 'Planning', desc: 'Project planning and site preparation.' },
//     { year: '2023', title: 'Foundation', desc: 'Foundation and base structure completed.' },
//     { year: '2024', title: 'Structure', desc: 'Main warehouse structure construction.' },
//     { year: '2024', title: 'Finishing', desc: 'Roofing and finishing works.' },
//     { year: '2025', title: 'Completion', desc: 'Final inspection and project completion.' },
//   ];

//   const gallery = [
//     'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&h=800&fit=crop',
//     'https://images.unsplash.com/photo-1581091226825-a6a2a5e169c5?w=1200&h=800&fit=crop',
//     'https://images.unsplash.com/photo-1562808588-e69b8e4f9587?w=1200&h=800&fit=crop',
//     'https://images.unsplash.com/photo-1501183638710-841dd1904471?w=1200&h=800&fit=crop',
//     'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=800&fit=crop',
//     'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=1200&h=800&fit=crop',
//   ];

//   const features = [
//     {
//       icon: '🏭',
//       title: 'Warehouse Construction',
//       desc: 'Designed for efficient storage and logistics operations.',
//     },
//     {
//       icon: '🧱',
//       title: 'Durable Structure',
//       desc: 'Built with strong materials for long-term industrial use.',
//     },
//     {
//       icon: '📦',
//       title: 'Storage Efficiency',
//       desc: 'Optimized layouts for easy movement and storage handling.',
//     },
//     {
//       icon: '⚙️',
//       title: 'Practical Design',
//       desc: 'Designed to support daily industrial operations.',
//     },
//   ];

//   return (
//     <>
//       <ScrollToTop />
//       <div className="bg-white min-h-screen overflow-hidden">
//         <Navbar />

//         {/* Animated Background Elements */}
//         <div className="fixed inset-0 pointer-events-none overflow-hidden">
//           <div className="absolute top-20 -left-20 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-float" />
//           <div className="absolute bottom-20 -right-20 w-96 h-96 bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-float-delayed" />
//         </div>

//         {/* HERO SECTION */}
//         <section className="relative pt-32 pb-20 overflow-hidden">
//           <div className="absolute inset-0">
//             <img
//               src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=2000&h=1200&fit=crop"
//               alt="Industrial Warehouse Project"
//               className="w-full h-full object-cover"
//             />
//             <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-indigo-900/70 to-slate-900/80" />
//           </div>
//           <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
//             <motion.div
//               initial={{ opacity: 0, y: 30 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8 }}
//             >
//               <div className="inline-flex items-center gap-3 mb-6">
//                 <div className="w-8 h-0.5 bg-white/50 rounded-full" />
//                 <span className="text-xs font-bold text-white/80 uppercase tracking-wider">
//                   Telangana • Industrial Project
//                 </span>
//                 <div className="w-8 h-0.5 bg-white/50 rounded-full" />
//               </div>
//               <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight">
//                 Industrial Warehouse
//               </h1>
//               <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto mb-12 leading-relaxed">
//                 An industrial warehouse project designed for efficient storage, logistics operations, and durable long-term use.
//               </p>

             

              
//             </motion.div>
//           </div>
//         </section>

//         {/* PROJECT OVERVIEW */}
//         <section className="py-24 px-6 bg-white">
//           <div className="max-w-7xl mx-auto">
//             <div className="grid lg:grid-cols-2 gap-16 items-center">
//               <motion.div
//                 initial={{ opacity: 0, x: -30 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 transition={{ duration: 0.7 }}
//                 viewport={{ once: true }}
//               >
//                 <div className="inline-flex items-center gap-3 mb-4">
//                   <div className="w-8 h-0.5 bg-blue-600 rounded-full" />
//                   <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">
//                     Project Overview
//                   </span>
//                 </div>
//                 <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-6 leading-tight">
//                   Industrial Strength<br />
//                   <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
//                     Warehouse Solution
//                   </span>
//                 </h2>
//                 <p className="text-gray-600 text-lg leading-relaxed mb-8">
//                   This project focuses on building a strong and practical warehouse suitable for industrial storage and operations. The design ensures durability, efficient space usage, and smooth workflow.
//                 </p>
//               </motion.div>

//               <motion.div
//                 initial={{ opacity: 0, scale: 0.95 }}
//                 whileInView={{ opacity: 1, scale: 1 }}
//                 transition={{ duration: 0.7 }}
//                 viewport={{ once: true }}
//                 className="relative"
//               >
//                 <img
//                   src="https://images.unsplash.com/photo-1581091226825-a6a2a5e169c5?w=800&h=1000&fit=crop"
//                   alt="Industrial Warehouse Project"
//                   className="w-full h-auto rounded-2xl shadow-2xl"
//                 />
//                 <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/10 via-transparent to-indigo-500/10 rounded-2xl blur-xl" />
//               </motion.div>
//             </div>
//           </div>
//         </section>

//         {/* FEATURES SECTION */}
//         <section className="py-24 bg-gray-50">
//           <div className="container mx-auto px-6">
//             <div className="max-w-4xl mx-auto text-center mb-16">
//               <div className="inline-flex items-center gap-3 mb-4">
//                 <div className="w-8 h-0.5 bg-blue-600 rounded-full"></div>
//                 <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">Key Features</span>
//                 <div className="w-8 h-0.5 bg-blue-600 rounded-full"></div>
//               </div>
//               <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-4">
//                 Industrial Strength <br />
//                 <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Meets Practical Design</span>
//               </h2>
//             </div>

//             <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//               {features.map((feature, idx) => (
//                 <div
//                   key={idx}
//                   className="group p-8 rounded-2xl bg-white shadow-md border border-gray-100 hover:border-blue-200 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 animate-fade-in-up"
//                   style={{ animationDelay: `${idx * 100}ms` }}
//                 >
//                   <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
//                     {feature.icon}
//                   </div>
//                   <h4 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
//                     {feature.title}
//                   </h4>
//                   <p className="text-gray-600 leading-relaxed">
//                     {feature.desc}
//                   </p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* TIMELINE SECTION */}
//         <section className="py-20 px-6 bg-white">
//           <div className="max-w-6xl mx-auto">
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6 }}
//               viewport={{ once: true }}
//               className="text-center mb-12"
//             >
//               <div className="inline-flex items-center gap-3 mb-4">
//                 <div className="w-8 h-0.5 bg-blue-600 rounded-full" />
//                 <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">
//                   Construction Timeline
//                 </span>
//                 <div className="w-8 h-0.5 bg-blue-600 rounded-full" />
//               </div>
//               <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
//                 Project Timeline
//               </h2>
//               <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
//                 Step-by-step construction process for quality delivery
//               </p>
//             </motion.div>

//             <div className="relative">
//               <div className="absolute left-1/2 -translate-x-1/2 w-1 h-full bg-blue-200 rounded-full hidden md:block" />
//               <div className="space-y-12">
//                 {timeline.map((item, idx) => (
//                   <div
//                     key={idx}
//                     className={`flex flex-col md:flex-row items-center gap-8 ${
//                       idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
//                     }`}
//                   >
//                     <div className="flex-1">
//                       <div
//                         className={`p-6 rounded-xl bg-gray-50 border border-gray-100 shadow-md hover:shadow-lg transition-all ${
//                           idx % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
//                         }`}
//                       >
//                         <div className="flex items-center gap-4 mb-3">
//                           <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center font-bold text-xl text-white shadow-md">
//                             {item.year}
//                           </div>
//                           <h4 className="text-xl font-bold text-gray-900">{item.title}</h4>
//                         </div>
//                         <p className="text-gray-600 leading-relaxed">{item.desc}</p>
//                       </div>
//                     </div>
//                     <div className="hidden md:flex w-10 h-10 bg-blue-600 rounded-full items-center justify-center text-white font-bold shadow-md z-10">
//                       {idx + 1}
//                     </div>
//                     <div className="flex-1 hidden md:block" />
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </section>


        

//         <Footer />

//         {/* Custom Animations */}
//         <style>{`
//           @keyframes float {
//             0%, 100% { transform: translateY(0px) rotate(0deg); }
//             50% { transform: translateY(-20px) rotate(5deg); }
//           }
//           @keyframes float-delayed {
//             0%, 100% { transform: translateY(0px) rotate(0deg); }
//             50% { transform: translateY(20px) rotate(-5deg); }
//           }
//           .animate-float {
//             animation: float 8s ease-in-out infinite;
//           }
//           .animate-float-delayed {
//             animation: float-delayed 10s ease-in-out infinite;
//           }
//         `}</style>
//       </div>
//     </>
//   );
// };

// export default IndustrialWarehouseProject;




import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import ScrollToTop from '../../components/ScrollToTop';

/* ═══════════════════════════════════════════════════════════════════
   SVG ILLUSTRATIONS — LIGHT THEME
═══════════════════════════════════════════════════════════════════ */

const WarehouseHeroSVG = () => (
  <svg viewBox="0 0 1200 680" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <defs>
      <linearGradient id="heroSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#f0f4ff" />
        <stop offset="55%" stopColor="#e8f0fa" />
        <stop offset="100%" stopColor="#dde8f5" />
      </linearGradient>
      <linearGradient id="groundGrad" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#e2e8f0" />
        <stop offset="100%" stopColor="#cbd5e1" />
      </linearGradient>
      <linearGradient id="wallGrad" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stopColor="#f1f5f9" />
        <stop offset="50%" stopColor="#ffffff" />
        <stop offset="100%" stopColor="#f1f5f9" />
      </linearGradient>
      <linearGradient id="roofGrad" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#e2e8f0" />
        <stop offset="100%" stopColor="#cbd5e1" />
      </linearGradient>
      <linearGradient id="sunGrad" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#fef3c7" />
        <stop offset="100%" stopColor="#fde68a" />
      </linearGradient>
      <clipPath id="mainClip"><rect width="1200" height="680" /></clipPath>
    </defs>
    <g clipPath="url(#mainClip)">
      {/* Sky */}
      <rect width="1200" height="680" fill="url(#heroSky)" />

      {/* Sun */}
      <circle cx="980" cy="130" r="60" fill="#fef9c3" opacity="0.6" />
      <circle cx="980" cy="130" r="42" fill="url(#sunGrad)" />
      <circle cx="980" cy="130" r="28" fill="#fde68a" />

      {/* Clouds */}
      <ellipse cx="200" cy="100" rx="90" ry="28" fill="white" opacity="0.85" />
      <ellipse cx="260" cy="88" rx="60" ry="22" fill="white" opacity="0.9" />
      <ellipse cx="150" cy="108" rx="50" ry="18" fill="white" opacity="0.8" />

      <ellipse cx="700" cy="70" rx="75" ry="22" fill="white" opacity="0.75" />
      <ellipse cx="755" cy="58" rx="50" ry="18" fill="white" opacity="0.8" />

      {/* Background hills */}
      <ellipse cx="100" cy="480" rx="200" ry="80" fill="#d1fae5" opacity="0.3" />
      <ellipse cx="1100" cy="490" rx="180" ry="70" fill="#d1fae5" opacity="0.25" />

      {/* Ground */}
      <rect x="0" y="500" width="1200" height="180" fill="url(#groundGrad)" />
      <line x1="0" y1="502" x2="1200" y2="502" stroke="#94a3b8" strokeWidth="1.5" opacity="0.4" />

      {/* Road markings */}
      {[80, 200, 320, 500, 640, 760, 900, 1040].map((x, i) => (
        <rect key={i} x={x} y={530} width={80} height={6} rx="3" fill="#94a3b8" opacity="0.15" />
      ))}

      {/* Background buildings (silhouette) */}
      <rect x="0" y="340" width="160" height="165" fill="#cbd5e1" opacity="0.5" />
      <rect x="25" y="310" width="50" height="30" fill="#cbd5e1" opacity="0.4" />

      {/* Power pylons far right */}
      {[1030, 1080, 1120].map((x, i) => (
        <g key={i}>
          <line x1={x} y1={490} x2={x} y2={310} stroke="#94a3b8" strokeWidth="1.5" opacity="0.5" />
          <line x1={x - 18} y1={370} x2={x + 18} y2={370} stroke="#94a3b8" strokeWidth="1" opacity="0.4" />
          <line x1={x - 12} y1={350} x2={x + 12} y2={350} stroke="#94a3b8" strokeWidth="0.8" opacity="0.3" />
        </g>
      ))}

      {/* Main warehouse body */}
      <rect x="200" y="260" width="750" height="245" fill="url(#wallGrad)" stroke="#cbd5e1" strokeWidth="1.5" />

      {/* Wall panel lines */}
      {[...Array(10)].map((_, i) => (
        <line key={i} x1="200" y1={282 + i * 22} x2="950" y2={282 + i * 22} stroke="#e2e8f0" strokeWidth="0.8" />
      ))}
      {[200, 295, 390, 485, 580, 675, 770, 865, 950].map((x, i) => (
        <rect key={i} x={x - 4} y={256} width={8} height={250} fill="#e2e8f0" opacity="0.6" />
      ))}

      {/* Sawtooth roof */}
      {[200, 295, 390, 485, 580, 675, 770, 865].map((x, i) => (
        <polygon key={i} points={`${x},260 ${x + 47},210 ${x + 95},260`} fill="url(#roofGrad)" stroke="#cbd5e1" strokeWidth="1" />
      ))}

      {/* Skylights on roof */}
      {[240, 335, 430, 525, 620, 715, 810].map((x, i) => (
        <g key={i}>
          <rect x={x - 18} y={222} width={36} height={10} rx="2" fill="#bfdbfe" stroke="#93c5fd" strokeWidth="0.8" />
          <rect x={x - 16} y={223} width={32} height={7} fill="#dbeafe" opacity="0.6" />
        </g>
      ))}

      {/* Amber accent bar */}
      <rect x="200" y="256" width="750" height="10" fill="#f59e0b" />

      {/* Loading docks */}
      {[240, 370, 500, 630, 760].map((x, i) => (
        <g key={i}>
          <rect x={x} y={380} width={90} height={125} fill="#f8fafc" stroke="#cbd5e1" strokeWidth="1.5" rx="1" />
          {[...Array(6)].map((_, j) => (
            <line key={j} x1={x + 2} y1={388 + j * 18} x2={x + 88} y2={388 + j * 18} stroke="#e2e8f0" strokeWidth="0.7" />
          ))}
          <rect x={x + 10} y={495} width={18} height={10} rx="2" fill="#f59e0b" opacity="0.8" />
          <rect x={x + 62} y={495} width={18} height={10} rx="2" fill="#f59e0b" opacity="0.8" />
        </g>
      ))}

      {/* Windows on upper wall */}
      {[215, 310, 405, 500, 595, 690, 785, 880].map((x, i) => (
        <g key={i}>
          <rect x={x} y={278} width={62} height={30} rx="1" fill="#eff6ff" stroke="#bfdbfe" strokeWidth="0.8" />
          <rect x={x + 2} y={279} width={58} height={27} fill="#dbeafe" opacity="0.4" />
        </g>
      ))}

      {/* Crane rail on roof */}
      <rect x="840" y="80" width="12" height="390" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="1" />
      <rect x="700" y="80" width="160" height="7" fill="#cbd5e1" stroke="#94a3b8" strokeWidth="0.8" />
      <rect x="840" y="80" width="100" height="7" fill="#cbd5e1" stroke="#94a3b8" strokeWidth="0.8" />

      {/* Crane trolley */}
      <rect x="760" y="74" width="20" height="14" rx="2" fill="#f59e0b">
        <animate attributeName="x" values="710;820;710" dur="8s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.6 1;0.4 0 0.6 1" />
      </rect>
      <line x1="770" y1="88" x2="770" y2="155" stroke="#94a3b8" strokeWidth="1.2">
        <animate attributeName="x1" values="720;830;720" dur="8s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.6 1;0.4 0 0.6 1" />
        <animate attributeName="x2" values="720;830;720" dur="8s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.6 1;0.4 0 0.6 1" />
      </line>
      <rect x="762" y="153" width="16" height="10" rx="2" fill="#94a3b8">
        <animate attributeName="x" values="712;822;712" dur="8s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.6 1;0.4 0 0.6 1" />
      </rect>

      {/* Status light */}
      <circle cx="848" cy="82" r="4" fill="#22c55e">
        <animate attributeName="opacity" values="1;0.2;1" dur="1.4s" repeatCount="indefinite" />
      </circle>

      {/* Forklift */}
      <g>
        <rect x="380" y="493" width="130" height="36" rx="3" fill="#f1f5f9" stroke="#94a3b8" strokeWidth="1.2" />
        <rect x="468" y="476" width="42" height="20" rx="3" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="1.2" />
        <rect x="474" y="479" width="30" height="12" rx="2" fill="#bfdbfe" opacity="0.6" />
        {[398, 430, 466, 495].map((x, i) => (
          <circle key={i} cx={x} cy="532" r="8" fill="#cbd5e1" stroke="#94a3b8" strokeWidth="1" />
        ))}
        <rect x="382" y="500" width="4" height="8" rx="1" fill="#ef4444" opacity="0.8" />
      </g>

      {/* Light beams from skylights */}
      {[258, 353, 448].map((x, i) => (
        <polygon key={i} points={`${x - 12},232 ${x + 12},232 ${x + 28},500 ${x - 28},500`} fill="#fef3c7" opacity="0.07">
          <animate attributeName="opacity" values="0.04;0.1;0.04" dur={`${4 + i}s`} repeatCount="indefinite" />
        </polygon>
      ))}

      {/* Smoke / steam vents */}
      {[920, 960].map((x, i) => (
        <g key={i}>
          <rect x={x} y={250} width={12} height={14} fill="#e2e8f0" stroke="#94a3b8" strokeWidth="0.8" />
          <ellipse cx={x + 6} cy={230} rx="6" ry="9" fill="#f1f5f9" opacity="0.5">
            <animate attributeName="cy" values="240;210;180" dur={`${3 + i}s`} repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.5;0.2;0" dur={`${3 + i}s`} repeatCount="indefinite" />
            <animate attributeName="rx" values="6;11;16" dur={`${3 + i}s`} repeatCount="indefinite" />
          </ellipse>
        </g>
      ))}
    </g>
  </svg>
);

const WarehouseLayoutSVG = () => (
  <svg viewBox="0 0 560 400" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <defs>
      <pattern id="gridWh" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
        <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#e2e8f0" strokeWidth="0.5" />
      </pattern>
    </defs>
    <rect width="560" height="400" fill="#f8fafc" />
    <rect width="560" height="400" fill="url(#gridWh)" />
    {/* Outer boundary */}
    <rect x="30" y="25" width="500" height="350" fill="none" stroke="#f59e0b" strokeWidth="2.5" rx="2" />

    {/* Storage racks zone */}
    <rect x="35" y="30" width="300" height="220" fill="#f0fdf4" opacity="0.9" />
    <rect x="35" y="30" width="300" height="220" fill="none" stroke="#16a34a" strokeWidth="1" />
    {[...Array(5)].map((_, row) =>
      [...Array(6)].map((__, col) => (
        <rect key={`${row}-${col}`} x={45 + col * 47} y={40 + row * 40} width={38} height={28}
          fill="#dcfce7" stroke="#16a34a" strokeWidth={0.8} rx="1" />
      ))
    )}
    <text x="185" y="268" textAnchor="middle" fontSize="9" fill="#15803d" fontFamily="monospace" fontWeight="700">STORAGE RACKS  A1–F6</text>

    {/* Staging area */}
    <rect x="340" y="30" width="185" height="220" fill="#fffbeb" opacity="0.95" />
    <rect x="340" y="30" width="185" height="220" fill="none" stroke="#d97706" strokeWidth="1" />
    <text x="432" y="125" textAnchor="middle" fontSize="9" fill="#b45309" fontFamily="monospace" fontWeight="700">STAGING AREA</text>
    {[380, 430, 480].map((x, i) => (
      <g key={i} transform={`translate(${x}, 155)`}>
        <rect x="-14" y="-9" width="28" height="18" rx="2" fill="#fde68a" stroke="#d97706" strokeWidth="0.8" />
        <rect x="-20" y="3" width="8" height="2" fill="#94a3b8" />
        <rect x="-20" y="7" width="8" height="2" fill="#94a3b8" />
      </g>
    ))}

    {/* Office */}
    <rect x="35" y="255" width="150" height="115" fill="#eff6ff" opacity="0.95" />
    <rect x="35" y="255" width="150" height="115" fill="none" stroke="#2563eb" strokeWidth="1.2" />
    <text x="110" y="315" textAnchor="middle" fontSize="9" fill="#1d4ed8" fontFamily="monospace" fontWeight="700">OFFICE + ADMIN</text>

    {/* Utility */}
    <rect x="195" y="255" width="140" height="115" fill="#fff1f2" opacity="0.95" />
    <rect x="195" y="255" width="140" height="115" fill="none" stroke="#dc2626" strokeWidth="1.2" strokeDasharray="5,3" />
    <text x="265" y="315" textAnchor="middle" fontSize="9" fill="#b91c1c" fontFamily="monospace" fontWeight="700">UTILITY + MECH.</text>

    {/* Shipping / Receiving */}
    <rect x="340" y="255" width="185" height="115" fill="#f0fdf4" opacity="0.95" />
    <rect x="340" y="255" width="185" height="115" fill="none" stroke="#16a34a" strokeWidth="1.2" />
    <text x="432" y="315" textAnchor="middle" fontSize="9" fill="#15803d" fontFamily="monospace" fontWeight="700">SHIPPING + RECEIVING</text>

    {/* Dock bays */}
    {[50, 140, 230, 320, 410, 490].map((x, i) => (
      <g key={i}>
        <rect x={x} y={368} width={48} height={8} rx="1" fill="#f59e0b" opacity="0.75" />
        <text x={x + 24} y={376} textAnchor="middle" fontSize="7" fill="#92400e" fontFamily="monospace">DOCK {i + 1}</text>
      </g>
    ))}

    {/* Grid lines */}
    <line x1="335" y1="30" x2="335" y2="370" stroke="#f59e0b" strokeWidth="0.8" strokeDasharray="5,4" opacity="0.5" />
    <line x1="35" y1="250" x2="530" y2="250" stroke="#f59e0b" strokeWidth="0.8" strokeDasharray="5,4" opacity="0.5" />

    {/* Compass */}
    <g transform="translate(520,55)">
      <circle cx="0" cy="0" r="16" fill="white" stroke="#f59e0b" strokeWidth="1" />
      <text x="0" y="-4" textAnchor="middle" fontSize="8" fill="#b45309" fontWeight="700" fontFamily="monospace">N</text>
      <polygon points="0,-12 2.5,0 0,-4 -2.5,0" fill="#f59e0b" />
      <polygon points="0,12 2.5,0 0,4 -2.5,0" fill="#94a3b8" />
    </g>

    {/* Scale bar */}
    <line x1="40" y1="390" x2="140" y2="390" stroke="#f59e0b" strokeWidth="1.5" opacity="0.7" />
    <line x1="40" y1="386" x2="40" y2="394" stroke="#f59e0b" strokeWidth="1.5" opacity="0.7" />
    <line x1="140" y1="386" x2="140" y2="394" stroke="#f59e0b" strokeWidth="1.5" opacity="0.7" />
    <text x="90" y="400" textAnchor="middle" fontSize="8" fill="#b45309" fontFamily="monospace">50 m</text>
  </svg>
);

const StructuralSectionSVG = () => (
  <svg viewBox="0 0 500 320" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <rect width="500" height="320" fill="#f8fafc" />

    {/* Foundation */}
    <rect x="30" y="255" width="440" height="48" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="1.5" />
    {[...Array(18)].map((_, i) => (
      <line key={i} x1={38 + i * 24} y1={255} x2={38 + i * 24} y2={303} stroke="#cbd5e1" strokeWidth="0.7" />
    ))}
    <text x="250" y="282" textAnchor="middle" fontSize="9" fill="#64748b" fontFamily="monospace">REINFORCED CONCRETE FOUNDATION</text>

    {/* Columns */}
    {[80, 250, 420].map((x, i) => (
      <g key={i}>
        <rect x={x - 14} y={100} width={28} height={157} fill="#e8f0fb" stroke="#60a5fa" strokeWidth="1.2" />
        <rect x={x - 20} y={248} width={40} height={8} fill="#94a3b8" stroke="#64748b" strokeWidth="0.8" />
        <rect x={x - 20} y={100} width={40} height={8} fill="#94a3b8" stroke="#64748b" strokeWidth="0.8" />
        <line x1={x - 8} y1={256} x2={x - 8} y2={272} stroke="#64748b" strokeWidth="1.5" />
        <line x1={x + 8} y1={256} x2={x + 8} y2={272} stroke="#64748b" strokeWidth="1.5" />
      </g>
    ))}

    {/* Portal rafter */}
    <polyline points="66,100 250,45 434,100" fill="none" stroke="#f59e0b" strokeWidth="5" strokeLinejoin="round" />
    <polyline points="60,100 250,38 440,100" fill="none" stroke="#d97706" strokeWidth="1.2" strokeLinejoin="round" strokeDasharray="4,3" />

    {/* Purlins */}
    <polyline points="58,102 250,47 442,102" fill="none" stroke="#e2e8f0" strokeWidth="14" strokeLinejoin="round" opacity="0.8" />
    <polyline points="58,102 250,47 442,102" fill="none" stroke="#60a5fa" strokeWidth="1.5" strokeLinejoin="round" />

    {/* Side wall columns */}
    <rect x="55" y="100" width="18" height="158" fill="#e8f0fb" stroke="#60a5fa" strokeWidth="1" />
    <rect x="427" y="100" width="18" height="158" fill="#e8f0fb" stroke="#60a5fa" strokeWidth="1" />

    {/* Column connection plates */}
    <rect x="52" y="98" width="24" height="6" rx="2" fill="#94a3b8" stroke="#64748b" strokeWidth="0.8" />
    <rect x="428" y="98" width="24" height="6" rx="2" fill="#94a3b8" stroke="#64748b" strokeWidth="0.8" />

    {/* Height dimension */}
    <line x1="22" y1="100" x2="22" y2="255" stroke="#f59e0b" strokeWidth="0.8" opacity="0.7" />
    <line x1="17" y1="100" x2="27" y2="100" stroke="#f59e0b" strokeWidth="0.8" opacity="0.7" />
    <line x1="17" y1="255" x2="27" y2="255" stroke="#f59e0b" strokeWidth="0.8" opacity="0.7" />
    <text x="10" y="183" textAnchor="middle" fontSize="8" fill="#b45309" fontFamily="monospace" transform="rotate(-90,10,183)">10.5 m</text>

    {/* Width dimension */}
    <line x1="58" y1="308" x2="442" y2="308" stroke="#f59e0b" strokeWidth="0.8" opacity="0.7" />
    <line x1="58" y1="303" x2="58" y2="313" stroke="#f59e0b" strokeWidth="0.8" opacity="0.7" />
    <line x1="442" y1="303" x2="442" y2="313" stroke="#f59e0b" strokeWidth="0.8" opacity="0.7" />
    <text x="250" y="318" textAnchor="middle" fontSize="8" fill="#b45309" fontFamily="monospace">42.0 m — column bay</text>

    {/* Ridge level label */}
    <line x1="250" y1="40" x2="250" y2="255" stroke="#94a3b8" strokeWidth="0.5" strokeDasharray="3,3" opacity="0.5" />
    <text x="258" y="60" textAnchor="start" fontSize="7" fill="#94a3b8" fontFamily="monospace">+14.2 m RL</text>

    {/* Title */}
    <text x="250" y="18" textAnchor="middle" fontSize="10" fill="#374151" fontFamily="monospace" fontWeight="700">CROSS SECTION — PORTAL FRAME</text>
  </svg>
);

const ProgressSVG = ({ pct }) => (
  <svg viewBox="0 0 340 260" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <rect width="340" height="260" fill="#f8fafc" />
    <polygon points="20,200 170,80 320,200" fill="none" stroke="#e2e8f0" strokeWidth="2" strokeDasharray="4,3" />
    <rect x="20" y="200" width="300" height="30" fill="none" stroke="#e2e8f0" strokeWidth="1.5" strokeDasharray="3,2" />
    <clipPath id="progressClip">
      <rect x="0" y={200 - (120 * pct / 100)} width="340" height={120 * pct / 100 + 30} />
    </clipPath>
    <polygon points="20,200 170,80 320,200" fill="#fef3c7" opacity="0.6" clipPath="url(#progressClip)" />
    <rect x="20" y="200" width="300" height="30" fill="#fef3c7" opacity="0.6" clipPath="url(#progressClip)" />
    <polygon points="20,200 170,80 320,200" fill="none" stroke="#f59e0b" strokeWidth="2" clipPath="url(#progressClip)" />
    <rect x="10" y="228" width="320" height="20" rx="2" fill="#e2e8f0" />
    <rect x="10" y="228" width={320 * pct / 100} height="20" rx="2" fill="#f59e0b">
      <animate attributeName="width" from="0" to={320 * pct / 100} dur="1s" fill="freeze" />
    </rect>
    <text x="170" y="242" textAnchor="middle" fontSize="8" fill="#92400e" fontFamily="monospace" fontWeight="700">FOUNDATION TO ROOF</text>
    <text x="170" y="158" textAnchor="middle" fontSize="40" fill="#f59e0b" fontFamily="monospace" fontWeight="700" opacity="0.95">{pct}%</text>
    <text x="170" y="176" textAnchor="middle" fontSize="10" fill="#64748b" fontFamily="monospace">CONSTRUCTION PROGRESS</text>
    {[
      { y: 200, label: 'Structure', done: pct >= 60 },
      { y: 155, label: 'Roofing', done: pct >= 80 },
      { y: 115, label: 'Finishing', done: pct >= 95 },
    ].map(({ y, label, done }) => (
      <g key={label}>
        <line x1="320" y1={y} x2="330" y2={y} stroke={done ? '#f59e0b' : '#e2e8f0'} strokeWidth="1" />
        <text x="333" y={y + 4} textAnchor="start" fontSize="8" fill={done ? '#b45309' : '#cbd5e1'} fontFamily="monospace">
          {label}{done ? ' ✓' : ''}
        </text>
      </g>
    ))}
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
const IndustrialWarehouseProject = () => {
  const navigate = useNavigate();
  const [progress, setProgress] = useState(68);
  const [areaCount, areaRef] = useCounter(60000);
  const [bayCount, bayRef] = useCounter(6);
  const [heightCount, heightRef] = useCounter(14);
  const [dockCount, dockRef] = useCounter(6);

  const features = [
    {
      icon: (
        <svg viewBox="0 0 44 44" width="40" height="40">
          <rect x="4" y="22" width="36" height="18" fill="#fef3c7" stroke="#f59e0b" strokeWidth="1.2" rx="2" />
          <polygon points="4,22 22,8 40,22" fill="#fffbeb" stroke="#f59e0b" strokeWidth="1.2" />
          {[13, 19, 25, 31].map(x => (
            <rect key={x} x={x} y={27} width={4} height={13} fill="#f59e0b" opacity="0.7" rx="1" />
          ))}
        </svg>
      ),
      title: 'Steel Portal Frame',
      desc: 'Pre-engineered steel portal frame for maximum clear span and full operational flexibility without internal columns.',
      accent: '#f59e0b',
    },
    {
      icon: (
        <svg viewBox="0 0 44 44" width="40" height="40">
          <rect x="6" y="8" width="32" height="28" fill="#fffbeb" stroke="#f59e0b" strokeWidth="1.2" rx="2" />
          {[12, 19, 26].map(x => (
            <rect key={x} x={x} y={14} width={5} height={16} fill="#f59e0b" opacity="0.5" rx="1" />
          ))}
          <rect x="8" y="12" width="28" height="3" fill="#f59e0b" opacity="0.25" rx="1" />
          <rect x="8" y="31" width="28" height="3" fill="#f59e0b" opacity="0.25" rx="1" />
          <rect x="17" y="27" width="10" height="9" fill="#d97706" rx="1" />
          <circle cx="23" cy="32" r="1.5" fill="#fbbf24" />
        </svg>
      ),
      title: 'Loading Dock System',
      desc: '6 hydraulic leveller dock bays with truck restraint systems and dock shelter protection for all weather loading.',
      accent: '#f59e0b',
    },
    {
      icon: (
        <svg viewBox="0 0 44 44" width="40" height="40">
          <rect x="6" y="28" width="32" height="10" fill="#eff6ff" stroke="#2563eb" strokeWidth="1.2" rx="2" />
          <rect x="9" y="17" width="5" height="13" fill="#eff6ff" stroke="#2563eb" strokeWidth="1.2" />
          <rect x="30" y="17" width="5" height="13" fill="#eff6ff" stroke="#2563eb" strokeWidth="1.2" />
          <line x1="14" y1="17" x2="30" y2="17" stroke="#2563eb" strokeWidth="1.8" />
          <line x1="22" y1="17" x2="22" y2="10" stroke="#2563eb" strokeWidth="1.8" />
          <rect x="18" y="7" width="8" height="5" fill="#eff6ff" stroke="#2563eb" strokeWidth="1.2" rx="1" />
          <circle cx="12" cy="39" r="3" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="0.8" />
          <circle cx="32" cy="39" r="3" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="0.8" />
        </svg>
      ),
      title: 'EOT Crane Provision',
      desc: 'Step-columns structurally rated for future 10-tonne EOT crane installation with dedicated runway beams.',
      accent: '#2563eb',
    },
    {
      icon: (
        <svg viewBox="0 0 44 44" width="40" height="40">
          <polygon points="22,5 40,19 36,39 8,39 4,19" fill="#f0fdf4" stroke="#16a34a" strokeWidth="1.2" />
          <circle cx="22" cy="24" r="9" fill="#f0fdf4" stroke="#16a34a" strokeWidth="1.2" />
          <path d="M22 19 L22 24 L27 24" fill="none" stroke="#16a34a" strokeWidth="1.4" strokeLinecap="round" />
          <circle cx="22" cy="24" r="2" fill="#16a34a" />
        </svg>
      ),
      title: 'Fire Safety Systems',
      desc: 'NFPA-13 compliant wet pipe sprinkler system with FM-approved in-rack protection and early suppression.',
      accent: '#16a34a',
    },
  ];

  const timeline = [
    { year: '2023', q: 'Q1', title: 'Site & Planning',   desc: 'Geotechnical surveys, DTCP/HMDA approvals, and fire safety clearance obtained.',             color: '#2563eb', bg: '#eff6ff', done: true },
    { year: '2023', q: 'Q3', title: 'Foundation',        desc: 'Pile foundation, grade beam, and industrial-grade PCC concrete floor slab completed.',       color: '#7c3aed', bg: '#f5f3ff', done: true },
    { year: '2024', q: 'Q1', title: 'Steel Structure',   desc: '900-tonne steel portal frame erection with sawtooth roofing system complete.',               color: '#16a34a', bg: '#f0fdf4', done: true },
    { year: '2024', q: 'Q3', title: 'MEP & Cladding',    desc: 'Roof sheeting, wall cladding, HT/LT electrical, fire mains, and plumbing in progress.',     color: '#d97706', bg: '#fffbeb', done: false },
    { year: '2025', q: 'Q2', title: 'Handover',          desc: 'Dock equipment commissioning, safety systems, landscaping, and building use completion.',    color: '#dc2626', bg: '#fff1f2', done: false },
  ];

  const specs = [
    { label: 'Total Area',     value: '60,000 sq ft'       },
    { label: 'Plot Area',      value: '1.8 Acres'           },
    { label: 'Clear Height',   value: '10.5 – 14.2 m'      },
    { label: 'Bay Spacing',    value: '9 m × 30 m'          },
    { label: 'Floor Load',     value: '50 kN/m²'            },
    { label: 'Loading Docks',  value: '6 + 2 Grade'         },
    { label: 'Structure',      value: 'Pre-eng. Steel'      },
    { label: 'Roof System',    value: 'Sawtooth + Skylight' },
    { label: 'Fire System',    value: 'NFPA 13 Compliant'   },
    { label: 'Power Supply',   value: '2 MVA HT + 500 kVA DG'},
  ];

  return (
    <>
      <ScrollToTop />
      <div className="min-h-screen overflow-hidden bg-white" style={{ fontFamily: "'Inter', system-ui, sans-serif", color: '#1e293b' }}>
        <Navbar />

        {/* ── HERO ── */}
        <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-amber-50">
          <div className="absolute inset-0 opacity-90"><WarehouseHeroSVG /></div>
          <div className="absolute bottom-0 left-0 right-0 h-72 bg-gradient-to-t from-white via-white/80 to-transparent" />
          <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-white/50 to-transparent" />

          <div className="relative z-10 container mx-auto px-6 pt-32 pb-24">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur border border-slate-200 rounded-full px-4 py-1.5 mb-8 shadow-sm">
              <div className="w-1.5 h-1.5 rounded-full bg-amber-400" />
              <span className="text-xs font-medium tracking-widest text-slate-500 uppercase">Telangana · Industrial · Ongoing</span>
            </div>

            <h1 className="text-6xl md:text-8xl font-bold text-slate-900 mb-3 leading-[0.92] tracking-tight">
              Industrial<br />
              <span className="text-amber-500">Warehouse</span>
            </h1>
            <p className="text-sm font-medium text-amber-600 tracking-widest mb-7 uppercase">Pre-Engineered Steel Structure</p>

            <p className="text-base md:text-lg text-slate-500 max-w-xl mb-10 leading-relaxed">
              A 60,000 sq ft high-clearance industrial warehouse engineered for heavy logistics, cold-chain operations, and future EOT crane installation in Telangana.
            </p>

            {/* Status pill */}
            <div className="inline-flex items-center gap-3 bg-amber-50 border border-amber-200 rounded-full px-5 py-2.5 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500" />
              </span>
              <span className="text-amber-700 text-sm font-semibold tracking-wide">Under Construction — 68% Complete</span>
            </div>
          </div>
        </section>

        {/* ── COUNTERS ── */}
        <section className="py-16 border-y border-slate-100 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-slate-100">
              {[
                { ref: areaRef,   count: areaCount,   suffix: '',   unit: 'Sq Ft',   label: 'Total Built Area'  },
                { ref: bayRef,    count: bayCount,     suffix: '',   unit: 'Bays',    label: 'Loading Docks'     },
                { ref: heightRef, count: heightCount,  suffix: '.2', unit: 'Metres',  label: 'Clear Height'      },
                { ref: dockRef,   count: dockCount,    suffix: '',   unit: 'Units',   label: 'Dock Levellers'    },
              ].map(({ ref, count, suffix, unit, label }) => (
                <div key={label} ref={ref} className="text-center py-10 px-4 group">
                  <div className="text-4xl md:text-5xl font-bold text-slate-900 tabular-nums mb-1">{count.toLocaleString()}{suffix}</div>
                  <div className="text-xs font-semibold text-amber-500 tracking-widest uppercase mb-1">{unit}</div>
                  <div className="text-xs text-slate-400 tracking-wide">{label}</div>
                  <div className="mt-3 h-0.5 w-8 bg-amber-400 mx-auto group-hover:w-16 transition-all duration-500" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FEATURES ── */}
        <section className="py-24 bg-slate-50">
          <div className="container mx-auto px-6">
            <div className="max-w-2xl mb-14">
              <p className="text-xs font-semibold tracking-widest text-amber-500 uppercase mb-3">Engineering Features</p>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
                Built for<br /><span className="text-amber-500">Industry</span>
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
              {features.map((f, i) => (
                <div key={i} className="group p-7 bg-white border border-slate-100 hover:border-amber-200 rounded-2xl transition-all duration-300 hover:shadow-lg hover:shadow-amber-50">
                  <div className="mb-5 group-hover:scale-105 transition-transform duration-300">{f.icon}</div>
                  <h4 className="text-sm font-bold text-slate-800 mb-2 tracking-wide">{f.title}</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">{f.desc}</p>
                  <div className="mt-5 h-0.5 w-0 group-hover:w-full transition-all duration-500" style={{ background: f.accent }} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── LAYOUT PLAN ── */}
        <section className="py-24 bg-white border-t border-slate-100">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="flex flex-col lg:flex-row gap-16 items-start">
              <div className="lg:w-3/5 w-full">
                <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-xl shadow-slate-100">
                  <div className="bg-slate-50 px-4 py-2.5 flex items-center gap-2 border-b border-slate-200">
                    <div className="w-2 h-2 rounded-full bg-amber-400" />
                    <span className="text-xs font-medium text-slate-400 tracking-widest uppercase">Warehouse Layout Plan</span>
                  </div>
                  <WarehouseLayoutSVG />
                </div>
              </div>
              <div className="lg:w-2/5 lg:sticky lg:top-28">
                <p className="text-xs font-semibold tracking-widest text-amber-500 uppercase mb-3">Floor Plan</p>
                <h2 className="text-4xl font-bold text-slate-900 mb-5 leading-tight">Strategic<br /><span className="text-amber-500">Zoning</span></h2>
                <p className="text-slate-400 text-sm leading-relaxed mb-8">
                  The floor plan is zoned for racked storage, a clear-aisle staging area, administrative offices, and a dedicated shipping and receiving zone — designed around forklift circulation paths.
                </p>
                <div className="space-y-0 border border-slate-100 rounded-xl overflow-hidden">
                  {[
                    { color: '#16a34a', label: 'Storage Racks (A1–F6)', area: '28,000 sq ft' },
                    { color: '#f59e0b', label: 'Staging Area',           area: '12,000 sq ft' },
                    { color: '#2563eb', label: 'Office and Admin',       area: '5,000 sq ft'  },
                    { color: '#dc2626', label: 'Utility and Mechanical', area: '4,000 sq ft'  },
                    { color: '#16a34a', label: 'Shipping and Receiving', area: '11,000 sq ft' },
                  ].map((z, i) => (
                    <div key={z.label} className={`flex items-center justify-between py-3 px-4 ${i < 4 ? 'border-b border-slate-100' : ''} hover:bg-slate-50 transition-colors`}>
                      <div className="flex items-center gap-3">
                        <div className="w-2.5 h-2.5 rounded-sm flex-shrink-0" style={{ background: z.color }} />
                        <span className="text-xs text-slate-600">{z.label}</span>
                      </div>
                      <span className="text-xs font-bold text-amber-600">{z.area}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── STRUCTURAL SECTION ── */}
        <section className="py-24 bg-slate-50 border-t border-slate-100">
          <div className="container mx-auto px-6 max-w-5xl">
            <div className="text-center mb-12">
              <p className="text-xs font-semibold tracking-widest text-amber-500 uppercase mb-3">Engineering</p>
              <h2 className="text-4xl font-bold text-slate-900">Structural <span className="text-amber-500">Section</span></h2>
            </div>
            <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-xl shadow-slate-100">
              <div className="bg-white px-4 py-2.5 flex items-center gap-2 border-b border-slate-200">
                <div className="w-2 h-2 rounded-full bg-amber-400" />
                <span className="text-xs font-medium text-slate-400 tracking-widest uppercase">Cross-Section · Portal Frame</span>
              </div>
              <StructuralSectionSVG />
            </div>
          </div>
        </section>

        {/* ── CONSTRUCTION PROGRESS + TIMELINE ── */}
        <section className="py-24 bg-white border-t border-slate-100">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="flex flex-col lg:flex-row gap-16 items-center">
              <div className="lg:w-2/5 w-full">
                <div className="rounded-2xl overflow-hidden border border-slate-200 p-3 shadow-xl shadow-slate-100 bg-slate-50">
                  <ProgressSVG pct={progress} />
                  <div className="px-4 pb-4 pt-2">
                    <input
                      type="range" min="0" max="100" value={progress}
                      onChange={e => setProgress(+e.target.value)}
                      className="w-full"
                      style={{ accentColor: '#f59e0b' }}
                    />
                    <p className="text-xs text-center text-slate-400 mt-1">Drag to explore construction progress</p>
                  </div>
                </div>
              </div>
              <div className="lg:w-3/5 w-full">
                <p className="text-xs font-semibold tracking-widest text-amber-500 uppercase mb-3">Timeline</p>
                <h2 className="text-4xl font-bold text-slate-900 mb-10 leading-tight">Construction<br /><span className="text-amber-500">Phases</span></h2>
                <div className="relative">
                  <div className="absolute left-5 top-0 bottom-0 w-px bg-slate-100" />
                  <div className="space-y-6">
                    {timeline.map((item, idx) => (
                      <div key={idx} className="flex gap-6 group">
                        <div className="relative flex-shrink-0 z-10">
                          <div className="w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all duration-300"
                            style={{
                              backgroundColor: item.done ? item.bg : '#fff',
                              borderColor: item.done ? item.color : '#e2e8f0'
                            }}>
                            {item.done
                              ? <span className="text-xs font-bold" style={{ color: item.color }}>✓</span>
                              : <span className="text-xs text-slate-300 font-bold">{idx + 1}</span>
                            }
                          </div>
                        </div>
                        <div className={`pt-1 pb-6 transition-opacity ${item.done ? 'opacity-100' : 'opacity-40'}`}>
                          <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                            <span className="text-xs px-2.5 py-0.5 rounded-full font-semibold tracking-wide"
                              style={{ background: item.bg, color: item.color, border: `1px solid ${item.color}30` }}>
                              {item.year} {item.q}
                            </span>
                            <h4 className="text-sm font-bold text-slate-800 tracking-wide">{item.title}</h4>
                            {!item.done && (
                              <span className="text-xs text-amber-600 border border-amber-200 bg-amber-50 px-2 py-0.5 rounded-full">Upcoming</span>
                            )}
                          </div>
                          <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── SPECIFICATIONS ── */}
        <section className="py-24 bg-slate-50 border-t border-slate-100">
          <div className="container mx-auto px-6 max-w-5xl">
            <div className="text-center mb-14">
              <p className="text-xs font-semibold tracking-widest text-amber-500 uppercase mb-3">Technical Data</p>
              <h2 className="text-4xl font-bold text-slate-900">Project <span className="text-amber-500">Specifications</span></h2>
            </div>
            <div className="grid md:grid-cols-2 gap-px rounded-2xl overflow-hidden border border-slate-200 bg-slate-200 shadow-xl shadow-slate-100">
              {specs.map((s, i) => (
                <div key={s.label} className="flex justify-between items-center px-8 py-4 hover:bg-amber-50 transition-colors bg-white">
                  <span className="text-xs font-semibold tracking-widest text-slate-400 uppercase">{s.label}</span>
                  <span className="text-sm font-bold text-amber-600">{s.value}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-28 bg-slate-900 border-t border-slate-800">
          <div className="container mx-auto px-6 max-w-3xl text-center">
            <p className="text-xs font-semibold tracking-widest text-amber-400 uppercase mb-4">Commission a Project</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-5 leading-tight">
              Need an Industrial<br /><span className="text-amber-400">Solution?</span>
            </h2>
            <p className="text-slate-400 text-sm mb-10 leading-relaxed max-w-xl mx-auto">
              From site selection to structural handover — we deliver pre-engineered warehouses, logistics parks, and industrial facilities across Telangana.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button onClick={() => navigate('/contact')}
                className="px-10 py-4 bg-amber-500 text-white font-bold text-sm tracking-widest uppercase hover:bg-amber-400 transition-all rounded-xl hover:shadow-2xl hover:shadow-amber-500/25">
                Start a Project
              </button>
              <button onClick={() => navigate('/projects')}
                className="px-10 py-4 border border-slate-700 text-slate-300 font-bold text-sm tracking-widest uppercase hover:border-amber-500/50 hover:text-amber-400 transition-all rounded-xl">
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
          input[type=range] { height: 4px; border-radius: 2px; }
          @keyframes ping {
            75%, 100% { transform: scale(2); opacity: 0; }
          }
          .animate-ping { animation: ping 1.5s cubic-bezier(0,0,0.2,1) infinite; }
        `}</style>
      </div>
    </>
  );
};

export default IndustrialWarehouseProject;