import { useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();

  return (
    <div className="bg-white min-h-screen">
      <Navbar />

      {/* Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 -left-20 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-float"></div>
        <div className="absolute bottom-20 -right-20 w-96 h-96 bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-float-delayed"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-50 rounded-full blur-3xl opacity-20 animate-pulse-slow"></div>
      </div>

      {/* HERO SECTION */}
      <div className="relative pt-32 pb-20 overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <div className="inline-flex items-center gap-3 mb-6">
                <div className="w-8 h-0.5 bg-blue-600 rounded-full"></div>
                <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">Our Story · Sustainability</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Building Responsibly for a Better Future
              </h1>
              <p className="text-gray-600 text-lg leading-relaxed max-w-xl mb-8">
                At Arvish Constructions, we focus on responsible construction practices by using quality materials, reducing waste, and ensuring efficient project execution.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-full">
                  <span className="text-blue-600 text-sm">🌿</span>
                  <span className="text-xs font-semibold text-blue-700">Responsible Construction</span>
                </div>
                <div className="flex items-center gap-2 bg-indigo-50 px-4 py-2 rounded-full">
                  <span className="text-indigo-600 text-sm">🏗️</span>
                  <span className="text-xs font-semibold text-indigo-700">Quality Materials</span>
                </div>
                <div className="flex items-center gap-2 bg-slate-100 px-4 py-2 rounded-full">
                  <span className="text-slate-600 text-sm">♻️</span>
                  <span className="text-xs font-semibold text-slate-700">Waste Reduction</span>
                </div>
              </div>
            </div>
            <div className="relative animate-fade-in-up animation-delay-200">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-200 to-indigo-200 rounded-3xl blur-2xl opacity-30"></div>
              <div className="relative bg-white rounded-3xl shadow-2xl border border-blue-100 p-8 transform hover:scale-[1.02] transition-all duration-500">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-50 to-transparent rounded-tr-3xl"></div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <span className="w-8 h-1 bg-blue-600 rounded-full"></span>
                  Our Sustainability Commitment
                </h3>
                <div className="space-y-4">
                    <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                    </div>
                    <p className="text-gray-600 text-sm">Responsible material handling and on-site waste management</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                    </div>
                    <p className="text-gray-600 text-sm">Quality materials and safe practices at every stage</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                    </div>
                    <p className="text-gray-600 text-sm">Clean sites and careful disposal of construction waste</p>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Local Best Practices:</span>
                    <div className="flex gap-2">
                      <span className="px-2 py-0.5 bg-blue-50 text-blue-700 rounded text-xs">Site Safety</span>
                      <span className="px-2 py-0.5 bg-blue-50 text-blue-700 rounded text-xs">Waste Control</span>
                      <span className="px-2 py-0.5 bg-blue-50 text-blue-700 rounded text-xs">Quality</span>
                    </div>
                  </div>
                </div>
              </div>
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

      {/* 2030 GOALS SECTION */}
      <div className="relative py-20 bg-gradient-to-r from-blue-50 via-white to-indigo-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in-up">
              <div className="inline-flex items-center gap-3 mb-4">
                <div className="w-8 h-0.5 bg-blue-600 rounded-full"></div>
                <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">2030 Targets</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Sustainability Goals for 2030</h2>
              <p className="text-gray-600 leading-relaxed">
                We aim to improve our construction practices by focusing on efficiency, reducing waste, and maintaining high-quality standards across all our projects.
              </p>
            </div>
            <div className="space-y-6 animate-fade-in-up animation-delay-200">
              {goals2030.map((goal, idx) => (
                <div key={idx}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-gray-700">{goal.label}</span>
                    <span className="text-sm font-bold text-blue-600">{goal.pct}%</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-blue-500 to-blue-700 transition-all duration-1000 ease-out"
                      style={{ width: `${goal.pct}%` }}
                    ></div>
                  </div>
                </div>
              ))}
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

      {/* PLEDGE BANNER */}
      <div className="relative py-16 mx-6 md:mx-12 mb-12 rounded-3xl overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-700 opacity-90"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1508193638397-1c4234db14d8?w=1600&h=400&fit=crop')] bg-cover bg-center mix-blend-overlay"></div>
        <div className="relative max-w-4xl mx-auto text-center px-6 py-12">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-12 h-px bg-white/30"></div>
            <span className="text-xs font-bold text-white uppercase tracking-wider">Our Pledge</span>
            <div className="w-12 h-px bg-white/30"></div>
          </div>
          <p className="text-xl md:text-2xl lg:text-3xl font-light text-white leading-relaxed italic">
            "We are committed to delivering construction projects with quality, responsibility, and a focus on long-term value."
          </p>
          <button
            onClick={() => navigate("/contact")}
            className="mt-8 inline-flex items-center gap-2 bg-white text-blue-700 px-6 py-3 rounded-full text-sm font-semibold hover:bg-blue-50 transition-all transform hover:scale-105 shadow-lg"
          >
            Partner With Us
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
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