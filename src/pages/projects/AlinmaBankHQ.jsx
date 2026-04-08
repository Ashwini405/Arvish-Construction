// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import Navbar from '../../components/Navbar';
// import Footer from '../../components/Footer';
// import ScrollToTop from '../../components/ScrollToTop';

// const ResidentialVillaProject = () => {
//   const navigate = useNavigate();

//   const stats = [
//     { value: '2,500', label: 'sq ft Area', accent: true },
//     { value: '2', label: 'Floors', accent: false },
//     { value: '2024', label: 'Completed', accent: true },
//     { value: 'Hyderabad', label: 'Location', accent: false },
//   ];

//   const timeline = [
//     { year: '2023', title: 'Planning', desc: 'Initial design and site preparation.' },
//     { year: '2023', title: 'Foundation', desc: 'Foundation and structural base work completed.' },
//     { year: '2024', title: 'Structure', desc: 'Main construction of the villa completed.' },
//     { year: '2024', title: 'Finishing', desc: 'Interior and exterior finishing works completed.' },
//     { year: '2024', title: 'Handover', desc: 'Final inspection and project delivery.' },
//   ];

//   const gallery = [
//     'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&h=800&fit=crop',
//     'https://images.unsplash.com/photo-1558618047-3c8c76ca7e8e?w=1200&h=800&fit=crop',
//     'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1200&h=800&fit=crop',
//     'https://images.unsplash.com/photo-1517457373958-b7bdd4587206?w=1200&h=800&fit=crop',
//     'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1200&h=800&fit=crop',
//     'https://images.unsplash.com/photo-1564013588239-35f7913a8f93?w=1200&h=800&fit=crop',
//   ];

//   const features = [
//     { icon: '�', title: 'Modern Home Design', desc: 'Designed with comfortable layouts for daily living.' },
//     { icon: '🧱', title: 'Quality Construction', desc: 'Built using strong materials for durability and safety.' },
//     { icon: '📐', title: 'Efficient Planning', desc: 'Optimized use of space for better functionality.' },
//     { icon: '🚗', title: 'Basic Amenities', desc: 'Includes parking, utilities, and essential facilities.' },
//   ];

//   return (
//     <>
//       <ScrollToTop />
//       <div className="min-h-screen bg-white overflow-hidden">
//         <Navbar />

//         {/* Animated Background Elements */}
//         <div className="fixed inset-0 pointer-events-none overflow-hidden">
//           <div className="absolute top-20 -left-20 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-float"></div>
//           <div className="absolute bottom-20 -right-20 w-96 h-96 bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-float-delayed"></div>
//         </div>

//         {/* HERO SECTION */}
//         <section className="relative pt-32 pb-24 overflow-hidden">
//           <div className="absolute inset-0">
//             <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-indigo-900/70 to-slate-900/80" />
//             <img 
//               src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=2000&h=1200&fit=crop" 
//               alt="Residential Villa Project" 
//               className="w-full h-full object-cover object-center"
//             />
//           </div>
          
//           <div className="relative z-10 container mx-auto px-6 text-center">
//             <div className="inline-flex items-center gap-3 mb-6">
//               <div className="w-8 h-0.5 bg-white/50 rounded-full"></div>
//               <span className="text-xs font-bold text-white/80 uppercase tracking-wider">
//                 Hyderabad • Residential Project
//               </span>
//               <div className="w-8 h-0.5 bg-white/50 rounded-full"></div>
//             </div>
//             <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
//               Residential Villa Project
//             </h1>
//             <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto mb-12 leading-relaxed">
//               A residential villa designed to provide comfortable living with modern design, quality construction, and practical space planning.
//             </p>
            
            

            
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
//                 Residential Comfort <br />
//                 <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Meets Practical Design</span>
//               </h2>
//             </div>

//             <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//               {features.map((feature, idx) => (
//                 <div 
//                   key={idx} 
//                   className="group p-8 rounded-2xl bg-white shadow-md border border-gray-100 hover:border-blue-200 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 animate-fade-in-up"
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
//         <section className="py-24 bg-white relative overflow-hidden">
//           <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent pointer-events-none" />
//           <div className="container mx-auto px-6 relative z-10">
//             <div className="text-center mb-16">
//               <div className="inline-flex items-center gap-3 mb-4">
//                 <div className="w-8 h-0.5 bg-blue-600 rounded-full"></div>
//                 <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">Project Timeline</span>
//                 <div className="w-8 h-0.5 bg-blue-600 rounded-full"></div>
//               </div>
//               <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
//                 3 Years to Reality
//               </h2>
//               <p className="text-xl text-gray-600 max-w-2xl mx-auto">
//                 Delivered on time for KSA's premier digital banking institution
//               </p>
//             </div>

//             <div className="relative max-w-5xl mx-auto">
//               <div className="absolute left-1/2 -translate-x-1/2 w-1 h-full bg-blue-200 rounded-full hidden md:block" />
              
//               <div className="space-y-12">
//                 {timeline.map((item, idx) => (
//                   <div key={idx} className={`flex flex-col md:flex-row items-center gap-8 ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
//                     <div className="flex-1">
//                       <div className={`p-6 rounded-xl bg-gray-50 border border-gray-100 shadow-md hover:shadow-lg transition-all ${idx % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}>
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

//         {/* GALLERY SECTION */}
        



       

//         <Footer />

//         {/* Animation Styles */}
//         <style>{`
//           @keyframes float {
//             0%, 100% { transform: translateY(0px) rotate(0deg); }
//             50% { transform: translateY(-20px) rotate(5deg); }
//           }
//           @keyframes float-delayed {
//             0%, 100% { transform: translateY(0px) rotate(0deg); }
//             50% { transform: translateY(20px) rotate(-5deg); }
//           }
//           @keyframes fadeInUp {
//             from {
//               opacity: 0;
//               transform: translateY(30px);
//             }
//             to {
//               opacity: 1;
//               transform: translateY(0);
//             }
//           }
//           .animate-float {
//             animation: float 8s ease-in-out infinite;
//           }
//           .animate-float-delayed {
//             animation: float-delayed 10s ease-in-out infinite;
//           }
//           .animate-fade-in-up {
//             animation: fadeInUp 0.6s ease-out forwards;
//             opacity: 0;
//           }
//         `}</style>
//       </div>
//     </>
//   );
// };

// export default ResidentialVillaProject;





import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import ScrollToTop from '../../components/ScrollToTop';

/* ─── Animated SVG Illustrations ─────────────────────────────────── */

const VillaHeroIllustration = () => (
  <svg viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-2xl">
    <defs>
      {/* Soft Light Gradients */}
      <linearGradient id="gridFade" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#f8fafc" stopOpacity="0" />
        <stop offset="100%" stopColor="#f8fafc" stopOpacity="1" />
      </linearGradient>
      
      {/* Blueprint Grid Patterns */}
      <pattern id="archGridLight" width="40" height="40" patternUnits="userSpaceOnUse">
        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#60a5fa" strokeWidth="0.5" strokeOpacity="0.2" />
      </pattern>
      <pattern id="fineGridLight" width="10" height="10" patternUnits="userSpaceOnUse">
        <path d="M 10 0 L 0 0 0 10" fill="none" stroke="#60a5fa" strokeWidth="0.5" strokeOpacity="0.08" />
      </pattern>

      <filter id="softShadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="10" stdDeviation="15" floodColor="#1e3a8a" floodOpacity="0.1" />
      </filter>

      {/* Blue Marker Arrow */}
      <marker id="arrowBlue" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="4" markerHeight="4" orient="auto-start-reverse">
        <path d="M 0 0 L 10 5 L 0 10 z" fill="#3b82f6" />
      </marker>
    </defs>

    {/* Background Paper / Grids */}
    <rect width="100%" height="100%" fill="white" rx="24" filter="url(#softShadow)" />
    <rect width="100%" height="100%" fill="url(#fineGridLight)" rx="24" />
    <rect width="100%" height="100%" fill="url(#archGridLight)" rx="24" />

    {/* Abstract Architectural Wireframe - Dark/Blue Lines for Light Theme */}
    <g transform="translate(140, 150)" stroke="#1e3a8a" strokeWidth="1.5" fill="none">
      
      {/* Base Reference Line */}
      <line x1="-80" y1="300" x2="600" y2="300" stroke="#94a3b8" strokeWidth="1" strokeDasharray="8 4" />
      <line x1="-80" y1="310" x2="600" y2="310" stroke="#cbd5e1" strokeWidth="0.5" />

      {/* Structural Blocks */}
      {/* Ground Floor Block */}
      <rect x="20" y="180" width="480" height="120" fill="#f1f5f9" />
      <rect x="20" y="180" width="480" height="120" stroke="#1e3a8a" strokeWidth="2" />
      
      {/* Upper Floor Block */}
      <rect x="80" y="60" width="360" height="120" fill="#f8fafc" />
      <rect x="80" y="60" width="360" height="120" stroke="#1e3a8a" strokeWidth="2" />
      
      {/* Roof Pitch */}
      <path d="M 50 60 L 260 -20 L 470 60 Z" fill="#e2e8f0" stroke="#1e3a8a" strokeWidth="2" />
      
      {/* Glazing / Windows Wireframe */}
      {/* Ground floor windows */}
      {[60, 150, 310, 400].map((x, i) => (
        <rect key={i} x={x} y={200} width="60" height="100" fill="white" stroke="#3b82f6" strokeWidth="1.5" />
      ))}
      
      {/* Main Entrance Pivot Door */}
      <rect x="230" y="200" width="60" height="100" fill="#dbeafe" stroke="#2563eb" strokeWidth="2" />
      <line x1="260" y1="200" x2="260" y2="300" stroke="#2563eb" strokeWidth="1.5" strokeDasharray="4 2" />
      <circle cx="252" cy="250" r="3" fill="#2563eb" />
      
      {/* Upper floor windows */}
      {[100, 180, 260, 340].map((x, i) => (
        <g key={i}>
          <rect x={x} y={80} width="60" height="100" fill="white" stroke="#3b82f6" strokeWidth="1.5" />
          <line x1={x} y1={130} x2={x+60} y2={130} stroke="#93c5fd" strokeWidth="1" />
        </g>
      ))}

      {/* Internal structure depth lines */}
      <path d="M 20 180 L 80 60 M 500 180 L 440 60" stroke="#94a3b8" strokeWidth="1" strokeDasharray="4 4" />
      <path d="M 50 60 L 50 -10 M 470 60 L 470 -10" stroke="#94a3b8" strokeWidth="1" strokeDasharray="2 2" />
      
      {/* Decorative Blueprint Dimensions */}
      <g stroke="#3b82f6" strokeWidth="1.5">
        {/* Height dimension */}
        <line x1="-20" y1="180" x2="-20" y2="300" markerEnd="url(#arrowBlue)" markerStart="url(#arrowBlue)" />
        <text x="-35" y="240" fill="#2563eb" fontSize="12" fontFamily="monospace" transform="rotate(-90 -35 240)" fontWeight="bold" stroke="none">12.5M height</text>

        {/* Width dimension */}
        <line x1="80" y1="25" x2="440" y2="25" markerEnd="url(#arrowBlue)" markerStart="url(#arrowBlue)" />
        <text x="260" y="15" fill="#2563eb" fontSize="12" fontFamily="monospace" fontWeight="bold" textAnchor="middle" stroke="none">28.0M FACADE WIDTH</text>
      </g>

      {/* Accent structural nodes */}
      {[ [20,180], [500,180], [80,60], [440,60], [260,-20], [20,300], [500,300] ].map(([x,y], i) => (
        <circle key={i} cx={x} cy={y} r="4" fill="#3b82f6" stroke="none">
          <animate attributeName="opacity" values="0.4;1;0.4" dur={`${1.5+i%2}s`} repeatCount="indefinite" />
        </circle>
      ))}

      {/* Tech spec labels */}
      <g fill="#64748b" fontSize="10" fontFamily="monospace" stroke="none">
        <text x="-60" y="-30" fontWeight="bold" fill="#1e3a8a">SYS.01: STRUCTURAL_GRID</text>
        <text x="-60" y="-15">VOL: 4,850 M3</text>
        <text x="-60" y="0">MAT: REINFORCED_CONCRETE</text>
        <text x="-60" y="15">ZONING: R-1</text>
      </g>
    </g>

    {/* Bottom white fade out */}
    <rect x="0" y="450" width="100%" height="150" fill="url(#gridFade)" rx="24" />
  </svg>
);

const FloorPlanSVG = () => (
  <svg viewBox="0 0 480 380" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <defs>
      <pattern id="grid" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
        <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#e2e8f0" strokeWidth="0.5" />
      </pattern>
    </defs>
    <rect width="480" height="380" fill="#f8fafc" />
    <rect width="480" height="380" fill="url(#grid)" />

    {/* Outer walls */}
    <rect x="40" y="30" width="400" height="320" fill="none" stroke="#1e293b" strokeWidth="6" rx="2" />

    {/* Room dividers */}
    <line x1="200" y1="30" x2="200" y2="195" stroke="#1e293b" strokeWidth="4" />
    <line x1="40" y1="195" x2="440" y2="195" stroke="#1e293b" strokeWidth="4" />
    <line x1="310" y1="195" x2="310" y2="350" stroke="#1e293b" strokeWidth="4" />
    <line x1="200" y1="110" x2="440" y2="110" stroke="#1e293b" strokeWidth="4" />

    {/* Room fills */}
    <rect x="43" y="33" width="154" height="159" fill="#dbeafe" opacity="0.4" />
    <rect x="203" y="33" width="234" height="74" fill="#f0fdf4" opacity="0.4" />
    <rect x="203" y="113" width="234" height="79" fill="#fef9c3" opacity="0.4" />
    <rect x="43" y="198" width="264" height="149" fill="#f3e8ff" opacity="0.4" />
    <rect x="313" y="198" width="124" height="149" fill="#fff7ed" opacity="0.4" />

    {/* Room labels */}
    <text x="120" y="108" textAnchor="middle" fontSize="11" fill="#1e40af" fontWeight="600" fontFamily="system-ui">Living Room</text>
    <text x="120" y="122" textAnchor="middle" fontSize="9" fill="#3b82f6" fontFamily="system-ui">38 m²</text>

    <text x="320" y="68" textAnchor="middle" fontSize="11" fill="#15803d" fontWeight="600" fontFamily="system-ui">Master Bedroom</text>
    <text x="320" y="82" textAnchor="middle" fontSize="9" fill="#22c55e" fontFamily="system-ui">45 m²</text>

    <text x="320" y="145" textAnchor="middle" fontSize="11" fill="#854d0e" fontWeight="600" fontFamily="system-ui">Kitchen</text>
    <text x="320" y="159" textAnchor="middle" fontSize="9" fill="#eab308" fontFamily="system-ui">32 m²</text>

    <text x="175" y="268" textAnchor="middle" fontSize="11" fill="#7e22ce" fontWeight="600" fontFamily="system-ui">Dining Room</text>
    <text x="175" y="282" textAnchor="middle" fontSize="9" fill="#a855f7" fontFamily="system-ui">40 m²</text>

    <text x="375" y="265" textAnchor="middle" fontSize="11" fill="#c2410c" fontWeight="600" fontFamily="system-ui">Bedroom 2</text>
    <text x="375" y="279" textAnchor="middle" fontSize="9" fill="#f97316" fontFamily="system-ui">28 m²</text>

    {/* Doors */}
    {/* Main entrance */}
    <path d="M 220 350 A 30 30 0 0 1 250 350" fill="none" stroke="#64748b" strokeWidth="1.5" strokeDasharray="3,2" />
    <line x1="220" y1="350" x2="220" y2="320" stroke="#64748b" strokeWidth="1.5" />

    {/* Window markers */}
    {[[40,80,0,50],[40,160,0,50],[440,60,0,50],[440,155,0,50],[440,240,0,50],[130,30,50,0],[290,30,50,0]].map(([x,y,w,h], i) => (
      <g key={i}>
        <line x1={x} y1={y} x2={x+(w||4)} y2={y+(h||4)} stroke="#93c5fd" strokeWidth={w>0?4:4} />
        <line x1={x+(w>0?10:0)} y1={y+(h>0?10:0)} x2={x+(w>0?w-10:0)} y2={y+(h>0?h-10:0)} stroke="white" strokeWidth="2" />
      </g>
    ))}

    {/* Compass rose */}
    <g transform="translate(440,340)">
      <circle cx="0" cy="0" r="18" fill="white" stroke="#94a3b8" strokeWidth="1" />
      <text x="0" y="-6" textAnchor="middle" fontSize="9" fill="#1e293b" fontWeight="700" fontFamily="system-ui">N</text>
      <path d="M0 -14 L3 0 L0 -4 L-3 0 Z" fill="#1e293b" />
      <path d="M0 14 L3 0 L0 4 L-3 0 Z" fill="#94a3b8" />
    </g>

    {/* Scale bar */}
    <line x1="60" y1="360" x2="160" y2="360" stroke="#475569" strokeWidth="2" />
    <line x1="60" y1="355" x2="60" y2="365" stroke="#475569" strokeWidth="2" />
    <line x1="160" y1="355" x2="160" y2="365" stroke="#475569" strokeWidth="2" />
    <text x="110" y="375" textAnchor="middle" fontSize="9" fill="#475569" fontFamily="system-ui">10 m</text>
  </svg>
);

const ConstructionProcessSVG = ({ step }) => {
  const layers = [
    { label: "Foundation", fill: "#92400e", y: 280, h: 40 },
    { label: "Structure", fill: "#78716c", y: 230, h: 48 },
    { label: "Walls", fill: "#d4c4a8", y: 180, h: 48 },
    { label: "Roofing", fill: "#374151", y: 145, h: 33 },
    { label: "Finishing", fill: "#bfdbfe", y: 115, h: 28 },
  ];

  return (
    <svg viewBox="0 0 320 340" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <defs>
        <linearGradient id="buildingGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#f1f5f9" />
          <stop offset="100%" stopColor="#e2e8f0" />
        </linearGradient>
      </defs>
      <rect width="320" height="340" fill="#f8fafc" />

      {/* Ground */}
      <rect x="20" y="316" width="280" height="20" fill="#d1fae5" rx="2" />
      <text x="160" y="330" textAnchor="middle" fontSize="9" fill="#065f46" fontFamily="system-ui">Ground Level</text>

      {/* Layers */}
      {layers.map((layer, i) => {
        const isActive = i < step;
        const isCurrent = i === step - 1;
        return (
          <g key={i}>
            <rect
              x="60" y={layer.y} width="200" height={layer.h}
              fill={isActive ? layer.fill : "#f1f5f9"}
              stroke={isCurrent ? "#3b82f6" : "#cbd5e1"}
              strokeWidth={isCurrent ? 2 : 1}
              rx="2"
              opacity={isActive ? 1 : 0.4}
            >
              {isCurrent && <animate attributeName="opacity" values="0.7;1;0.7" dur="1.5s" repeatCount="indefinite" />}
            </rect>
            <text
              x="160" y={layer.y + layer.h / 2 + 4}
              textAnchor="middle"
              fontSize="10"
              fill={isActive ? "white" : "#94a3b8"}
              fontWeight={isCurrent ? "700" : "500"}
              fontFamily="system-ui"
            >
              {layer.label}
            </text>
            {isActive && (
              <text x="275" y={layer.y + layer.h / 2 + 4} textAnchor="start" fontSize="9" fill="#22c55e" fontFamily="system-ui">✓</text>
            )}
          </g>
        );
      })}

      {/* Step indicator */}
      <text x="160" y="25" textAnchor="middle" fontSize="13" fill="#1e293b" fontWeight="700" fontFamily="system-ui">
        Construction Phase
      </text>
      <text x="160" y="42" textAnchor="middle" fontSize="10" fill="#64748b" fontFamily="system-ui">
        {step}/{layers.length} layers complete
      </text>

      {/* Progress bar */}
      <rect x="60" y="55" width="200" height="8" fill="#e2e8f0" rx="4" />
      <rect x="60" y="55" width={step * 40} height="8" fill="#3b82f6" rx="4">
        <animate attributeName="width" from="0" to={step * 40} dur="0.5s" fill="freeze" />
      </rect>
    </svg>
  );
};

const ElevationSVG = () => (
  <svg viewBox="0 0 560 300" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <defs>
      <linearGradient id="sky2" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#eff6ff" />
        <stop offset="100%" stopColor="#dbeafe" />
      </linearGradient>
      <linearGradient id="wall2" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#f5f0e8" />
        <stop offset="100%" stopColor="#ede4d0" />
      </linearGradient>
    </defs>

    <rect width="560" height="300" fill="url(#sky2)" />

    {/* Ground */}
    <rect x="0" y="262" width="560" height="38" fill="#d1fae5" />
    <line x1="0" y1="262" x2="560" y2="262" stroke="#6ee7b7" strokeWidth="1.5" />

    {/* Main building body */}
    <rect x="80" y="90" width="400" height="174" fill="url(#wall2)" />

    {/* Roof */}
    <polygon points="60,90 280,30 500,90" fill="#374151" />
    <polygon points="60,90 280,30 500,90" fill="none" stroke="#1f2937" strokeWidth="2" />

    {/* Roof tile detail */}
    {[...Array(8)].map((_, i) => (
      <line key={i}
        x1={80 + i * 50} y1={90}
        x2={80 + i * 50 + 25} y2={60}
        stroke="#4b5563" strokeWidth="0.8" opacity="0.6"
      />
    ))}

    {/* Window – upper floor */}
    {[130, 235, 340].map((x, i) => (
      <g key={i}>
        <rect x={x} y={115} width={85} height={65} fill="#bfdbfe" stroke="#93c5fd" strokeWidth="1.5" rx="1" />
        <rect x={x+2} y={117} width={39} height={61} fill="#dbeafe" />
        <rect x={x+44} y={117} width={39} height={61} fill="#dbeafe" />
        <line x1={x+43} y1={115} x2={x+43} y2={180} stroke="#93c5fd" strokeWidth="1.5" />
        <line x1={x} y1={148} x2={x+85} y2={148} stroke="#93c5fd" strokeWidth="1" />
      </g>
    ))}

    {/* Main door */}
    <rect x="240" y="192" width="80" height="80" fill="#92400e" stroke="#78350f" strokeWidth="2" rx="2" />
    <path d="M240 192 Q280 175 320 192" fill="none" stroke="#b45309" strokeWidth="2" />
    <rect x="242" y="194" width="76" height="76" rx="1" fill="#7c2d12" opacity="0.7" />
    <circle cx="315" cy="235" r="4" fill="#fbbf24" />
    {/* Door panels */}
    <rect x="248" y="200" width="28" height="32" rx="1" fill="#6b21a8" opacity="0.15" />
    <rect x="284" y="200" width="28" height="32" rx="1" fill="#6b21a8" opacity="0.15" />

    {/* Columns */}
    {[220, 320].map((x, i) => (
      <g key={i}>
        <rect x={x} y={180} width="14" height="82" fill="#e8dcc8" />
        <rect x={x-3} y={177} width="20" height="7" fill="#d4c4a8" />
        <rect x={x-3} y={258} width="20" height="5" fill="#d4c4a8" />
      </g>
    ))}

    {/* Floor divider line */}
    <line x1="80" y1="192" x2="480" y2="192" stroke="#c8b896" strokeWidth="2" />
    {/* Cornice details */}
    <rect x="80" y="85" width="400" height="8" fill="#d4c4a8" />
    <rect x="80" y="188" width="400" height="6" fill="#c8b896" />
    <rect x="80" y="257" width="400" height="5" fill="#c8b896" />

    {/* Dimension arrows */}
    <line x1="50" y1="90" x2="50" y2="262" stroke="#3b82f6" strokeWidth="1" markerEnd="url(#arr2)" />
    <line x1="50" y1="262" x2="50" y2="90" stroke="#3b82f6" strokeWidth="1" markerEnd="url(#arr2)" />
    <text x="30" y="180" textAnchor="middle" fontSize="9" fill="#3b82f6" fontFamily="system-ui">8.5 m</text>

    <line x1="80" y1="280" x2="480" y2="280" stroke="#3b82f6" strokeWidth="1" />
    <line x1="80" y1="276" x2="80" y2="284" stroke="#3b82f6" strokeWidth="1" />
    <line x1="480" y1="276" x2="480" y2="284" stroke="#3b82f6" strokeWidth="1" />
    <text x="280" y="295" textAnchor="middle" fontSize="9" fill="#3b82f6" fontFamily="system-ui">18.5 m</text>

    <defs>
      <marker id="arr2" viewBox="0 0 8 8" refX="4" refY="4" markerWidth="5" markerHeight="5" orient="auto">
        <path d="M1 1L7 4L1 7" fill="none" stroke="#3b82f6" strokeWidth="1.5" />
      </marker>
    </defs>
  </svg>
);

/* ─── Stat Counter Hook ───────────────────────────────────────────── */
const useCounter = (target, duration = 1500) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        let start = 0;
        const step = Math.ceil(target / (duration / 16));
        const timer = setInterval(() => {
          start = Math.min(start + step, target);
          setCount(start);
          if (start >= target) clearInterval(timer);
        }, 16);
        observer.disconnect();
      }
    }, { threshold: 0.2 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, duration]);
  return [count, ref];
};

/* ─── Main Component ──────────────────────────────────────────────── */
const ResidentialVillaProject = () => {
  const navigate = useNavigate();
  const [buildStep, setBuildStep] = useState(1);
  const [activeTab, setActiveTab] = useState('ground');
  const [areaCount, areaRef] = useCounter(2500);
  const [yearCount, yearRef] = useCounter(2024);
  const [floorsCount, floorsRef] = useCounter(2);
  const [roomsCount, roomsRef] = useCounter(8);

  useEffect(() => {
    const interval = setInterval(() => {
      setBuildStep(s => s >= 5 ? 1 : s + 1);
    }, 1800);
    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      svg: (
        <svg viewBox="0 0 48 48" className="w-10 h-10">
          <rect x="4" y="28" width="40" height="16" rx="2" fill="#dbeafe" stroke="#3b82f6" strokeWidth="1.5"/>
          <polygon points="4,28 24,10 44,28" fill="#bfdbfe" stroke="#3b82f6" strokeWidth="1.5"/>
          <rect x="19" y="32" width="10" height="12" fill="#93c5fd"/>
          <rect x="8" y="30" width="8" height="8" fill="#93c5fd" rx="1"/>
          <rect x="32" y="30" width="8" height="8" fill="#93c5fd" rx="1"/>
        </svg>
      ),
      title: 'Modern Architecture',
      desc: 'Contemporary design language blending clean lines with warm natural materials.'
    },
    {
      svg: (
        <svg viewBox="0 0 48 48" className="w-10 h-10">
          <rect x="8" y="8" width="14" height="14" rx="2" fill="#fef3c7" stroke="#f59e0b" strokeWidth="1.5"/>
          <rect x="26" y="8" width="14" height="14" rx="2" fill="#fef3c7" stroke="#f59e0b" strokeWidth="1.5"/>
          <rect x="8" y="26" width="14" height="14" rx="2" fill="#fef3c7" stroke="#f59e0b" strokeWidth="1.5"/>
          <rect x="26" y="26" width="14" height="14" rx="2" fill="#d1fae5" stroke="#10b981" strokeWidth="1.5"/>
          <line x1="22" y1="4" x2="22" y2="44" stroke="#e5e7eb" strokeWidth="1"/>
          <line x1="4" y1="22" x2="44" y2="22" stroke="#e5e7eb" strokeWidth="1"/>
        </svg>
      ),
      title: 'Smart Space Planning',
      desc: 'Every square foot optimized for function, flow, and comfortable daily living.'
    },
    {
      svg: (
        <svg viewBox="0 0 48 48" className="w-10 h-10">
          <circle cx="24" cy="24" r="18" fill="#fce7f3" stroke="#ec4899" strokeWidth="1.5"/>
          <path d="M24 10 L26 20 L36 20 L28 26 L31 37 L24 30 L17 37 L20 26 L12 20 L22 20 Z" fill="#f9a8d4" stroke="#ec4899" strokeWidth="1"/>
        </svg>
      ),
      title: 'Premium Finishes',
      desc: 'Curated materials — marble, solid wood, and brushed metals throughout.'
    },
    {
      svg: (
        <svg viewBox="0 0 48 48" className="w-10 h-10">
          <path d="M8 36 Q8 24 24 20 Q40 24 40 36" fill="#d1fae5" stroke="#10b981" strokeWidth="1.5"/>
          <circle cx="24" cy="18" r="6" fill="#a7f3d0" stroke="#10b981" strokeWidth="1.5"/>
          <path d="M14 40 L34 40" stroke="#10b981" strokeWidth="2" strokeLinecap="round"/>
          <circle cx="10" cy="32" r="3" fill="#6ee7b7"/>
          <circle cx="38" cy="32" r="3" fill="#6ee7b7"/>
        </svg>
      ),
      title: 'Landscape & Pool',
      desc: 'Lush garden design with a private swimming pool and outdoor entertainment area.'
    },
  ];

  const timeline = [
    { year: '2023', q: 'Q1', title: 'Design & Planning', desc: 'Architectural drawings, structural calculations, and all municipal approvals obtained.', color: '#3b82f6' },
    { year: '2023', q: 'Q2', title: 'Foundation Works', desc: 'Site excavation, pile foundation, and reinforced concrete base completed to spec.', color: '#8b5cf6' },
    { year: '2023', q: 'Q4', title: 'Structural Frame', desc: 'RCC columns, beams, and two-storey slab structure erected and cured.', color: '#10b981' },
    { year: '2024', q: 'Q1', title: 'MEP & Masonry', desc: 'All electrical, plumbing, HVAC rough-in works and brick masonry completed.', color: '#f59e0b' },
    { year: '2024', q: 'Q3', title: 'Handover', desc: 'Final snagging, landscaping, pool commissioning, and keys delivered to client.', color: '#ef4444' },
  ];

  const specs = [
    { label: 'Plot Area', value: '3,200 sq ft' },
    { label: 'Built-up Area', value: '2,500 sq ft' },
    { label: 'Structure', value: 'RCC Framed' },
    { label: 'Floors', value: 'G + 1' },
    { label: 'Bedrooms', value: '3 + Study' },
    { label: 'Bathrooms', value: '4 Full + 1 Powder' },
    { label: 'Car Parking', value: '2 Covered Bays' },
    { label: 'Pool', value: '8m × 4m Lap Pool' },
    { label: 'Roof Type', value: 'Pitched Mangalore Tile' },
    { label: 'Façade', value: 'Limestone Composite' },
  ];

  return (
    <>
      <ScrollToTop />
      <div className="min-h-screen bg-slate-50 overflow-hidden" style={{ fontFamily: "'Cormorant Garamond', 'Garamond', Georgia, serif" }}>
        <Navbar />

        {/* ── HERO ───────────────────────────────────────────── */}
        <section className="relative flex items-center overflow-hidden bg-slate-50 pt-32 pb-8">
          <div className="container mx-auto px-6 relative z-10">
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              
              {/* ── LEFT: Text Content ── */}
              <div className="text-left max-w-2xl">
                {/* Architectural Tags */}
                <div className="inline-flex items-center gap-4 mb-4 overflow-hidden rounded-full border border-blue-200 bg-blue-50 px-6 py-2">
                  <div className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
                  <span className="text-xs tracking-[0.2em] text-blue-800 uppercase font-sans font-bold">
                    Live Project Data
                  </span>
                  <div className="w-px h-3 bg-blue-300" />
                  <span className="text-xs tracking-[0.1em] text-slate-600 uppercase font-sans font-medium">
                    Hyderabad / 2024
                  </span>
                </div>

                {/* Main Typography */}
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 mb-4 leading-[1.1] tracking-tight">
                  Residential<br />
                  <span className="italic font-light text-blue-600">Villa</span>{' '}
                  <span>Project</span>
                </h1>

                <p className="text-lg md:text-xl text-slate-600 mb-8 leading-relaxed font-sans font-light">
                  A 2,500 sq ft private residence conceived as a quiet retreat — where
                  timeless proportions meet the warmth of Hyderabad living through precision engineering.
                </p>

                {/* Flat & Clean Stat Pills */}
                <div className="flex gap-4 w-full overflow-x-auto pb-4 scrollbar-hide">
                  {[
                    { v: '2,500', l: 'sq ft' },
                    { v: 'G+1', l: 'Floors' },
                    { v: '2024', l: 'Delivered' },
                    { v: '8', l: 'Spaces' },
                  ].map(({ v, l }) => (
                    <div key={l} className="bg-white border flex-shrink-0 border-slate-200 hover:border-blue-400 hover:shadow-md transition-all duration-300 rounded-full px-5 py-2.5 text-slate-900 font-sans whitespace-nowrap">
                      <span className="font-bold text-blue-600">{v}</span>
                      <span className="text-slate-500 text-sm ml-2 font-medium tracking-wide">{l}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* ── RIGHT: Blueprint Illustration ── */}
              <div className="relative w-full h-[400px] lg:h-[500px] flex items-center justify-center animate-fade-in-up">
                <div className="absolute inset-0">
                  <VillaHeroIllustration />
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ── COUNTERS ───────────────────────────────────────── */}
        <section className="py-20 bg-white border-b border-stone-100">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {[
                { ref: areaRef, count: areaCount, suffix: ' sq ft', label: 'Built-up Area' },
                { ref: floorsRef, count: floorsCount, suffix: '', label: 'Storeys' },
                { ref: roomsRef, count: roomsCount, suffix: '', label: 'Rooms & Spaces' },
                { ref: yearRef, count: yearCount, suffix: '', label: 'Year Completed' },
              ].map(({ ref, count, suffix, label }) => (
                <div key={label} ref={ref} className="text-center group">
                  <div className="text-4xl md:text-5xl font-light text-stone-900 mb-1 tabular-nums">
                    {count.toLocaleString()}{suffix}
                  </div>
                  <div className="text-xs tracking-widest uppercase text-stone-400 font-sans">
                    {label}
                  </div>
                  <div className="mt-3 h-px w-8 bg-amber-400 mx-auto group-hover:w-16 transition-all duration-500" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FEATURES ───────────────────────────────────────── */}
        <section className="py-24 bg-[#f9f7f4]">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <p className="text-xs tracking-[0.3em] text-amber-600 uppercase font-sans mb-4">Design Principles</p>
              <h2 className="text-4xl md:text-5xl font-light text-stone-900 leading-snug">
                Crafted for the<br />
                <em className="italic text-stone-600">Art of Living</em>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {features.map((f, i) => (
                <div
                  key={i}
                  className="group bg-white rounded-2xl p-8 border border-stone-100 hover:border-amber-200 hover:shadow-xl transition-all duration-500 hover:-translate-y-1"
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  <div className="mb-5 group-hover:scale-110 transition-transform duration-300 inline-block">
                    {f.svg}
                  </div>
                  <h4 className="text-lg font-semibold text-stone-900 mb-2 group-hover:text-amber-700 transition-colors">
                    {f.title}
                  </h4>
                  <p className="text-stone-500 text-sm leading-relaxed font-sans font-light">
                    {f.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FLOOR PLANS ────────────────────────────────────── */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="flex flex-col lg:flex-row gap-16 items-start">

                {/* Left – Text */}
                <div className="lg:w-2/5 lg:sticky lg:top-32">
                  <p className="text-xs tracking-[0.3em] text-amber-600 uppercase font-sans mb-4">Architecture</p>
                  <h2 className="text-4xl font-light text-stone-900 mb-6 leading-snug">
                    Thoughtful<br /><em className="italic">Floor Plans</em>
                  </h2>
                  <p className="text-stone-500 font-sans font-light leading-relaxed mb-8">
                    Each room is positioned to maximise natural light, cross-ventilation,
                    and a seamless indoor-outdoor connection with the garden.
                  </p>

                  {/* Floor tabs */}
                  <div className="flex gap-2 mb-6">
                    {['ground', 'first'].map(f => (
                      <button
                        key={f}
                        onClick={() => setActiveTab(f)}
                        className={`px-5 py-2 rounded-full text-sm font-sans transition-all ${
                          activeTab === f
                            ? 'bg-stone-900 text-white'
                            : 'bg-stone-100 text-stone-500 hover:bg-stone-200'
                        }`}
                      >
                        {f === 'ground' ? 'Ground Floor' : 'First Floor'}
                      </button>
                    ))}
                  </div>

                  {/* Specs list */}
                  <div className="space-y-3">
                    {specs.slice(0, 5).map(s => (
                      <div key={s.label} className="flex justify-between items-center py-2 border-b border-stone-100">
                        <span className="text-xs tracking-wider text-stone-400 uppercase font-sans">{s.label}</span>
                        <span className="text-sm font-medium text-stone-700 font-sans">{s.value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right – SVG Plan */}
                <div className="lg:w-3/5">
                  <div className="bg-stone-50 rounded-3xl p-6 border border-stone-100 shadow-inner">
                    <FloorPlanSVG />
                  </div>
                  <p className="text-center text-xs text-stone-400 font-sans mt-3 tracking-wider">
                    {activeTab === 'ground' ? 'Ground Floor Plan — Not to scale' : 'First Floor Plan — Not to scale'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── ELEVATION ──────────────────────────────────────── */}
        <section className="py-24 bg-[#f9f7f4]">
          <div className="container mx-auto px-6 max-w-5xl">
            <div className="text-center mb-12">
              <p className="text-xs tracking-[0.3em] text-amber-600 uppercase font-sans mb-4">Elevation Drawing</p>
              <h2 className="text-4xl font-light text-stone-900">
                Front <em className="italic">Elevation</em>
              </h2>
            </div>
            <div className="bg-white rounded-3xl p-8 border border-stone-100 shadow-sm">
              <ElevationSVG />
            </div>
          </div>
        </section>

        {/* ── CONSTRUCTION PROCESS ───────────────────────────── */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="flex flex-col lg:flex-row gap-16 items-center">

              {/* Animated build */}
              <div className="lg:w-2/5 w-full">
                <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-3xl p-6 border border-slate-100">
                  <ConstructionProcessSVG step={buildStep} />
                  <div className="flex justify-center gap-2 mt-4">
                    {[1,2,3,4,5].map(i => (
                      <button
                        key={i}
                        onClick={() => setBuildStep(i)}
                        className={`w-2 h-2 rounded-full transition-all ${i <= buildStep ? 'bg-blue-500 w-4' : 'bg-slate-200'}`}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Timeline */}
              <div className="lg:w-3/5 w-full">
                <p className="text-xs tracking-[0.3em] text-amber-600 uppercase font-sans mb-4">Project Timeline</p>
                <h2 className="text-4xl font-light text-stone-900 mb-10 leading-snug">
                  From Concept<br />to <em className="italic">Completion</em>
                </h2>

                <div className="relative">
                  {/* Vertical line */}
                  <div className="absolute left-6 top-0 bottom-0 w-px bg-stone-200" />

                  <div className="space-y-8">
                    {timeline.map((item, idx) => (
                      <div key={idx} className="flex gap-6 group">
                        {/* Dot */}
                        <div className="relative flex-shrink-0">
                          <div
                            className="w-12 h-12 rounded-full flex items-center justify-center z-10 relative border-2 border-white shadow-md transition-transform group-hover:scale-110"
                            style={{ backgroundColor: item.color + '20', borderColor: item.color }}
                          >
                            <span className="text-xs font-bold font-sans" style={{ color: item.color }}>
                              {idx + 1}
                            </span>
                          </div>
                        </div>
                        {/* Content */}
                        <div className="pt-2 pb-6">
                          <div className="flex items-center gap-3 mb-1">
                            <span className="text-xs font-sans px-2 py-0.5 rounded-full text-white font-medium" style={{ backgroundColor: item.color }}>
                              {item.year} {item.q}
                            </span>
                            <h4 className="text-lg font-semibold text-stone-900">{item.title}</h4>
                          </div>
                          <p className="text-stone-500 text-sm font-sans font-light leading-relaxed">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── SPECIFICATIONS ─────────────────────────────────── */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6 max-w-5xl">
            <div className="text-center mb-16">
              <p className="text-xs tracking-[0.3em] text-blue-600 uppercase font-sans mb-4">Technical Data</p>
              <h2 className="text-4xl font-light text-stone-900 leading-snug">
                Project <em className="italic text-stone-500">Specifications</em>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-px bg-stone-100 rounded-2xl overflow-hidden border border-stone-200">
              {specs.map((s, i) => (
                <div
                  key={s.label}
                  className="flex justify-between items-center px-8 py-5 bg-white hover:bg-stone-50 transition-colors"
                >
                  <span className="text-xs tracking-widest uppercase text-stone-500 font-sans">{s.label}</span>
                  <span className="text-sm font-medium text-stone-900 font-sans">{s.value}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ────────────────────────────────────────────── */}
        <section className="py-24 bg-[#f9f7f4]">
          <div className="container mx-auto px-6 max-w-3xl text-center">
            <p className="text-xs tracking-[0.3em] text-amber-600 uppercase font-sans mb-4">Begin Your Project</p>
            <h2 className="text-4xl md:text-5xl font-light text-stone-900 mb-6 leading-snug">
              Ready to build your<br />
              <em className="italic">dream home?</em>
            </h2>
            <p className="text-stone-500 font-sans font-light mb-10 leading-relaxed">
              Every exceptional home begins with a single conversation.
              Let's discuss your vision, site, and timeline.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => navigate('/contact')}
                className="px-10 py-4 bg-stone-900 text-white rounded-full font-sans text-sm tracking-widest uppercase hover:bg-stone-700 transition-all hover:shadow-xl"
              >
                Get in Touch
              </button>
              <button
                onClick={() => navigate('/projects')}
                className="px-10 py-4 border border-stone-300 text-stone-600 rounded-full font-sans text-sm tracking-widest uppercase hover:border-stone-500 transition-all"
              >
                View All Projects
              </button>
            </div>
          </div>
        </section>

        <Footer />

        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500&display=swap');
          
          @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(24px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .fade-in {
            animation: fadeInUp 0.7s ease-out forwards;
            opacity: 0;
          }
          html { scroll-behavior: smooth; }
          * { box-sizing: border-box; }
        `}</style>
      </div>
    </>
  );
};

export default ResidentialVillaProject;