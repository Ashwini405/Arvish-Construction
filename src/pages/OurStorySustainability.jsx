import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const pillars = [
  {
    icon: "🌿",
    label: "Environmental",
    title: "Responsible Construction",
    desc: "We focus on reducing material waste, using efficient construction methods, and maintaining clean and safe project sites.",
    metrics: [
      { val: "Efficient", label: "Material Usage" },
      { val: "Reduced", label: "Site Waste" },
      { val: "Safe", label: "Work Environment" },
    ],
    color: "#3b82f6",
  },
  {
    icon: "🤝",
    label: "Social",
    title: "People & Community",
    desc: "We support local employment and maintain strong relationships with clients, workers, and communities.",
    metrics: [
      { val: "25+", label: "Team Members" },
      { val: "Local", label: "Workforce" },
      { val: "Trusted", label: "Client Relations" },
    ],
    color: "#2563eb",
  },
  {
    icon: "⚖️",
    label: "Quality",
    title: "Work Standards",
    desc: "We follow proper construction practices, maintain transparency, and ensure quality in every project.",
    metrics: [
      { val: "100%", label: "Quality Focus" },
      { val: "On-Time", label: "Delivery" },
      { val: "Reliable", label: "Execution" },
    ],
    color: "#1d4ed8",
  },
];

const goals2030 = [
  { pct: 80, label: "Efficient Material Usage", color: "#3b82f6" },
  { pct: 70, label: "Waste Reduction", color: "#2563eb" },
  { pct: 90, label: "On-Time Project Delivery", color: "#1d4ed8" },
  { pct: 100, label: "Quality Commitment", color: "#0f172a" },
];

export default function SustainabilityPage() {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />

      {/* Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 -left-20 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-float"></div>
        <div className="absolute bottom-20 -right-20 w-96 h-96 bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-float-delayed"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-50 rounded-full blur-3xl opacity-20 animate-pulse-slow"></div>
      </div>

      {/* ════════════════════════════════════════
          HERO SECTION — Environmental Blueprint
          ════════════════════════════════════════ */}
      <div className="relative pt-5 pb-24 overflow-hidden border-b border-slate-200 bg-white">
        
        {/* Soft background grid */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="sustain-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#1e3a8a" strokeWidth="0.5" strokeOpacity="0.05"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#sustain-grid)" />
          </svg>
        </div>

        {/* Ambient background glows */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-50/50 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-50/50 rounded-full blur-[80px] pointer-events-none translate-y-1/3 -translate-x-1/4"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            {/* Left Column */}
            <div className="lg:col-span-6 animate-fade-in-up">
              <div className="inline-flex items-center gap-3 mb-8">
                <div className="w-6 h-px bg-[#1e3a8a]/40"></div>
                <span className="text-[11px] font-bold text-[#1e3a8a] uppercase tracking-[0.25em]">Our Story Sustainability</span>
              </div>
              <h1 className="font-display text-5xl md:text-6xl lg:text-[4rem] font-extrabold text-slate-900 leading-[1.05] tracking-tight mb-8">
                Building softly <br/> on a <span className="text-[#1e3a8a]">solid foundation.</span>
              </h1>
              <p className="text-slate-600 text-lg leading-relaxed mb-10 max-w-lg font-medium">
                At Arvish Constructions, sustainability isn't an afterthought—it's engineered into every blueprint. We focus on responsible resource management, waste reduction, and lifecycle efficiency.
              </p>
              
              <div className="flex flex-wrap gap-3">
                {[
                  { id: "01", label: "Responsible Construction" },
                  { id: "02", label: "Quality Materials" },
                  { id: "03", label: "Waste Reduction" }
                ].map((tag) => (
                  <div key={tag.id} className="flex items-center gap-3 bg-white border border-slate-200 px-4 py-2.5 rounded-full shadow-sm">
                    <span className="text-[10px] font-bold text-[#1e3a8a] tracking-wider">{tag.id}</span>
                    <span className="w-px h-3 bg-slate-200"></span>
                    <span className="text-[11px] font-semibold text-slate-700 uppercase tracking-wide">{tag.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column (Data Card) */}
            <div className="lg:col-span-6 relative animate-fade-in-up animation-delay-200">
              
              {/* Complex Architectural Card */}
              <div className="relative bg-white/70 backdrop-blur-xl rounded-[2rem] border border-white p-10 md:p-12 shadow-[0_20px_40px_rgba(30,58,138,0.06)] overflow-hidden">
                
                {/* Structural Overlay inside card */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#1e3a8a]/5 to-transparent rounded-tr-[2rem] pointer-events-none"></div>
                
                {/* Subtle blueprint path inside the card */}
                <svg className="absolute bottom-0 right-0 w-full h-[60%] opacity-[0.03] pointer-events-none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M 100 150 L 300 150 L 300 50 L 400 50" stroke="#1e3a8a" strokeWidth="4" fill="none" strokeLinejoin="round"/>
                  <circle cx="100" cy="150" r="8" fill="#1e3a8a"/>
                  <circle cx="400" cy="50" r="8" fill="#1e3a8a"/>
                </svg>

                <h3 className="font-display text-2xl font-extrabold text-slate-900 mb-8 flex items-center gap-4 border-b border-slate-100 pb-6">
                  <div className="w-1.5 h-1.5 bg-[#1e3a8a]" />
                  Sustainability Metrics
                </h3>
                
                <div className="space-y-6 relative z-10">
                  {[
                    { title: "Resource Handling", desc: "Responsible material processing and certified on-site waste management." },
                    { title: "Lifecycle Quality", desc: "Sourcing premium materials for prolonged structural durability." },
                    { title: "Site Ecology", desc: "Clean operations and zero-toxicity disposal of construction waste." }
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-4 group">
                      <div className="shrink-0 w-6 h-6 rounded-full border border-slate-200 flex items-center justify-center bg-white shadow-sm mt-0.5 group-hover:border-[#1e3a8a]/40 transition-colors">
                        <div className="w-2 h-2 rounded-full bg-[#1e3a8a]/40 group-hover:bg-[#1e3a8a] transition-colors"></div>
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-slate-900 mb-1 tracking-wide">{item.title}</h4>
                        <p className="text-slate-500 text-xs leading-relaxed font-medium">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-slate-100/80 relative z-10">
                  <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">Execution Protocols</span>
                    <div className="flex gap-2">
                      <span className="px-3 py-1 bg-[#1e3a8a]/5 border border-[#1e3a8a]/10 text-[#1e3a8a] font-semibold rounded-full text-[10px] uppercase tracking-wider">Site Safety</span>
                      <span className="px-3 py-1 bg-emerald-500/5 border border-emerald-500/10 text-emerald-700 font-semibold rounded-full text-[10px] uppercase tracking-wider">Eco Control</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* CAD Crosshairs overlaying card */}
              <div className="absolute -top-4 -left-4 w-8 h-8 border-t border-l border-[#1e3a8a]/30 pointer-events-none" />
              <div className="absolute -bottom-4 -right-4 w-8 h-8 border-b border-r border-[#1e3a8a]/30 pointer-events-none" />
            </div>
            
          </div>
        </div>
      </div>

      {/* ESG PILLARS */}
      <div className="relative py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-8 h-0.5 bg-blue-600 rounded-full"></div>
              <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">ESG Framework</span>
              <div className="w-8 h-0.5 bg-blue-600 rounded-full"></div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Environmental, Social & Governance</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Our integrated approach to sustainability across every project phase</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pillars.map((pillar, idx) => (
              <div
                key={idx}
                className="group bg-white rounded-2xl shadow-lg border border-gray-100 hover:border-blue-200 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 animate-fade-in-up"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-3xl">{pillar.icon}</span>
                    <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">{pillar.label}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{pillar.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">{pillar.desc}</p>
                  <div className="space-y-3">
                    {pillar.metrics.map((metric, i) => (
                      <div key={i} className="flex justify-between items-center p-3 bg-gray-50 rounded-xl group-hover:bg-blue-50 transition-colors">
                        <span className="text-xs text-gray-500">{metric.label}</span>
                        <span className="text-base font-bold text-blue-600">{metric.val}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ════════════════════════════════════════
          2030 GOALS SECTION — Minimalist Clean Layout
          ════════════════════════════════════════ */}
      <div className="relative py-24 bg-[#f8fafc] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Content */}
            <div className="animate-fade-in-up pr-8">
              <div className="inline-flex items-center gap-4 mb-6">
                <div className="w-8 h-[2px] bg-[#1e3a8a]"></div>
                <span className="text-xs font-bold text-[#1e3a8a] uppercase tracking-widest">2030 Targets</span>
                <div className="w-8 h-[2px] bg-[#1e3a8a]"></div>
              </div>
              
              <h2 className="font-display text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight leading-[1.1]">
                Our Sustainability Goals for 2030
              </h2>
              
              <p className="text-slate-600 text-lg leading-relaxed">
                We aim to improve our construction practices by focusing on efficiency, reducing waste, and maintaining high-quality standards across all our projects.
              </p>
            </div>

            {/* Right Content - Clean Progress Card */}
            <div className="animate-fade-in-up animation-delay-200">
              <div className="bg-white rounded-3xl p-10 md:p-14 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] border border-slate-100">
                <div className="space-y-10">
                  {goals2030.map((goal, idx) => (
                    <div key={idx}>
                      <div className="flex justify-between items-center mb-3">
                        <span className="text-[15px] font-semibold text-slate-700">{goal.label}</span>
                        <span className="text-[15px] font-bold text-[#1e3a8a]">{goal.pct}%</span>
                      </div>
                      
                      {/* Progress Bar Container */}
                      <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                        {/* Actual Bar */}
                        <div
                          className="h-full bg-[#1e3a8a] rounded-full transition-all duration-[1500ms] ease-out"
                          style={{ width: `${goal.pct}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* OUR APPROACH SECTION */}
      <div className="relative py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-8 h-0.5 bg-blue-600 rounded-full"></div>
              <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">Our Approach</span>
              <div className="w-8 h-0.5 bg-blue-600 rounded-full"></div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Approach</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">We focus on practical and responsible construction by ensuring proper planning, quality materials, and efficient execution in every project we deliver.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-6 animate-fade-in-up">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Planning</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Careful project planning helps us manage time, materials, and site activity responsibly.</p>
            </div>
            <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-6 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Materials</h3>
              <p className="text-gray-600 text-sm leading-relaxed">We use quality construction materials that support durability and long-term performance.</p>
            </div>
            <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-6 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Execution</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Projects are delivered with care, clear communication, and focus on long-term value.</p>
            </div>
          </div>
        </div>
      </div>

      {/* ════════════════════════════════════════
          PLEDGE BANNER — Eco-Architectural Style
          ════════════════════════════════════════ */}
      <div className="relative py-24 mx-6 md:mx-12 mb-16 rounded-[2rem] overflow-hidden shadow-xl border border-slate-200 group">
        {/* Background Image — Desaturated & Tinted */}
        <div className="absolute inset-0 bg-[#f8fafc] z-0"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1508193638397-1c4234db14d8?w=1600&h=600&fit=crop')] bg-cover bg-center grayscale opacity-[0.12] z-0"></div>
        
        {/* Architectural Blueprint Grid */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" xmlns="http://www.w3.org/2000/svg">
          <pattern id="eco-grid" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#1e3a8a" strokeWidth="1" strokeOpacity="0.06"/>
          </pattern>
          <rect width="100%" height="100%" fill="url(#eco-grid)" />
        </svg>

        {/* Ambient Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-[400px] bg-blue-100/50 blur-[100px] rounded-full pointer-events-none z-0"></div>

        {/* Main Content Card (Frosted Glass) */}
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <div className="bg-white/70 backdrop-blur-xl border border-white shadow-[0_20px_40px_rgba(30,58,138,0.06)] p-10 md:p-14 rounded-3xl relative overflow-hidden text-center backdrop-saturate-150">
            
            {/* Top architectural label */}
            <div className="inline-flex items-center justify-center gap-3 mb-8 w-full">
              <div className="w-12 h-px bg-[#1e3a8a]/20"></div>
              <span className="text-[11px] font-bold text-[#1e3a8a] uppercase tracking-[0.3em]">Our Corporate Pledge</span>
              <div className="w-12 h-px bg-[#1e3a8a]/20"></div>
            </div>
            
            <p className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-slate-900 leading-[1.3] mb-10 tracking-tight" style={{ fontFamily: "'Syne', sans-serif" }}>
              "We are committed to delivering construction projects with <span className="relative inline-block text-[#1e3a8a]">quality, responsibility</span> and a focus on long-term value."
            </p>
            
            <div className="flex justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-[#1e3a8a] text-white px-8 py-4 rounded-xl text-sm font-bold hover:bg-[#152c6e] transition-all duration-300 shadow-xl shadow-[#1e3a8a]/20 group/btn"
                >
                  Partner With Us
                  <svg className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
            </div>
          </div>
        </div>
      </div>

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
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes gradientShift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.4; }
        }
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 10s ease-in-out infinite;
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
          opacity: 0;
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradientShift 4s ease infinite;
        }
        .animate-pulse-slow {
          animation: pulse-slow 6s ease-in-out infinite;
        }
        .animation-delay-200 {
          animation-delay: 0.2s;
        }
      `}</style>
    </div>
  );
}