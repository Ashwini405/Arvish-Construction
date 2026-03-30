import Footer from "../components/Footer";
import { motion } from "framer-motion";

export default function SmartIntegration() {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.6 }
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section with Parallax Background */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/2079249/pexels-photo-2079249.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Smart home technology"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
          {/* Tech grid overlay */}
          <div
            className="absolute inset-0 opacity-20 pointer-events-none"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cpath fill='none' stroke='%23D4A13A' stroke-width='0.5' d='M10 0 L10 100 M20 0 L20 100 M30 0 L30 100 M40 0 L40 100 M50 0 L50 100 M60 0 L60 100 M70 0 L70 100 M80 0 L80 100 M90 0 L90 100 M0 10 L100 10 M0 20 L100 20 M0 30 L100 30 M0 40 L100 40 M0 50 L100 50 M0 60 L100 60 M0 70 L100 70 M0 80 L100 80 M0 90 L100 90' /%3E%3C/svg%3E")`,
              backgroundSize: "30px 30px"
            }}
          />
        </div>

        <div className="relative z-10 text-center text-white px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-sm font-bold text-[#D4A13A] uppercase tracking-widest border-b border-[#D4A13A] pb-1">
              Smart Integration
            </span>
            <h1 className="text-5xl md:text-7xl font-bold mt-6 mb-4 leading-tight">
              Intelligence Built<br />Into Every Space
            </h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto text-gray-200">
              We embed cutting‑edge technology and future‑proof infrastructure into every project,
              creating environments that are intuitive, efficient, and ready for tomorrow.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <button className="px-6 py-3 bg-[#D4A13A] text-[#051614] font-bold rounded-lg hover:bg-[#c3922f] transition">
                Explore Smart Solutions
              </button>
              <button className="px-6 py-3 border border-white text-white font-bold rounded-lg hover:bg-white/10 transition">
                Request a Consultation
              </button>
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7-7-7m14-6l-7 7-7-7" />
          </svg>
        </div>
      </section>

      {/* Core Smart Services */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <span className="text-sm font-bold text-[#D4A13A] uppercase tracking-widest">Smart Solutions</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#051614] mt-2">Technology for Modern Living</h2>
            <div className="w-20 h-1 bg-[#D4A13A] mx-auto mt-4" />
            <p className="text-gray-600 max-w-3xl mx-auto mt-6">
              From seamless automation to robust infrastructure, we design and integrate smart
              systems that enhance comfort, security, and energy efficiency.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Smart Systems",
                desc: "Integrated IoT devices, voice‑controlled automation, and real‑time monitoring for ultimate convenience.",
                icon: "🏠"
              },
              {
                title: "Automation Ready",
                desc: "Pre‑wired for lighting, climate, audio, security, and window treatments – easy upgrades at any time.",
                icon: "⚙️"
              },
              {
                title: "Future‑Proof Design",
                desc: "Scalable infrastructure, high‑bandwidth cabling, and adaptable layouts that evolve with technology.",
                icon: "🚀"
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-shadow"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-[#051614] mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Smart Integration Process */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <span className="text-sm font-bold text-[#D4A13A] uppercase tracking-widest">How We Integrate</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#051614] mt-2">A Structured Approach</h2>
            <div className="w-20 h-1 bg-[#D4A13A] mx-auto mt-4" />
          </motion.div>

          <div className="relative">
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-[#D4A13A]/30 transform -translate-y-1/2" />
            <div className="grid md:grid-cols-4 gap-6 relative z-10">
              {[
                { step: "1", title: "Consultation", desc: "Understand needs, lifestyle, and future tech goals." },
                { step: "2", title: "Design & Spec", desc: "Select systems, wiring plan, and interface design." },
                { step: "3", title: "Infrastructure", desc: "Install structured cabling, conduits, and central hubs." },
                { step: "4", title: "Commissioning", desc: "Configuration, testing, and user training." }
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1, duration: 0.4 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl p-6 shadow-md text-center relative"
                >
                  <div className="w-12 h-12 rounded-full bg-[#D4A13A] text-white flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-bold text-[#051614] mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <span className="text-sm font-bold text-[#D4A13A] uppercase tracking-widest">Why Go Smart</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#051614] mt-2">Benefits of Intelligent Design</h2>
            <div className="w-20 h-1 bg-[#D4A13A] mx-auto mt-4" />
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Energy Efficiency", desc: "Reduce consumption with automated lighting, HVAC, and smart metering.", icon: "💡" },
              { title: "Enhanced Security", desc: "Remote monitoring, biometric access, and real‑time alerts.", icon: "🔒" },
              { title: "Convenience", desc: "Control everything from your phone or voice – anywhere.", icon: "📱" },
              { title: "Property Value", desc: "Smart‑ready homes command higher resale value and appeal.", icon: "📈" }
            ].map((benefit, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1, duration: 0.4 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-gray-50 rounded-xl hover:shadow-md transition"
              >
                <div className="text-4xl mb-3">{benefit.icon}</div>
                <h3 className="text-lg font-bold text-[#051614] mb-2">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study: Smart Tower */}
      <section className="py-20 px-4 bg-[#051614] text-white">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <span className="text-sm font-bold text-[#D4A13A] uppercase tracking-widest">Success Story</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">The Arvish Tower: A Smart Landmark</h2>
            <div className="w-20 h-1 bg-[#D4A13A] mx-auto mt-4" />
          </motion.div>

          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2">
              <img
                src="https://images.pexels.com/photos/2760242/pexels-photo-2760242.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Smart building"
                className="rounded-2xl shadow-xl"
              />
            </div>
            <div className="md:w-1/2 space-y-4">
              <p className="text-gray-300">
                The Arvish Tower features a fully integrated building management system (BMS) that
                controls lighting, HVAC, and security. Occupants enjoy personalized climate zones,
                energy usage insights, and remote access. The building achieved a 28% reduction
                in energy consumption and was awarded the "Smart Building of the Year" accolade.
              </p>
              <div className="flex gap-6 text-sm">
                <div>
                  <span className="block text-2xl font-bold text-[#D4A13A]">28%</span>
                  <span className="text-gray-400">Energy savings</span>
                </div>
                <div>
                  <span className="block text-2xl font-bold text-[#D4A13A]">100%</span>
                  <span className="text-gray-400">Smart‑ready units</span>
                </div>
                <div>
                  <span className="block text-2xl font-bold text-[#D4A13A]">5⭐</span>
                  <span className="text-gray-400">User satisfaction</span>
                </div>
              </div>
              <button className="mt-4 text-[#D4A13A] font-bold flex items-center gap-1 hover:gap-2 transition-all">
                Read Full Case Study <span>→</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Futuristic Smart Animation */}
      <section className="py-20 px-4 bg-white overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <span className="text-sm font-bold text-[#D4A13A] uppercase tracking-widest">Innovation in Action</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#051614] mt-2">Connected Living</h2>
            <div className="w-20 h-1 bg-[#D4A13A] mx-auto mt-4" />
          </motion.div>

          <div className="relative w-full h-[300px] md:h-[400px]">
            <svg className="w-full h-full" viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="techGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#D4A13A" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#051614" stopOpacity="0.4" />
                </linearGradient>
                <filter id="glowTech">
                  <feGaussianBlur stdDeviation="2" result="coloredBlur" />
                  <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* Smart home silhouette */}
              <rect x="100" y="150" width="180" height="180" fill="url(#techGrad)" stroke="#D4A13A" strokeWidth="1.5" rx="8" />
              <rect x="160" y="250" width="60" height="80" fill="#D4A13A" opacity="0.3" />
              <circle cx="190" cy="220" r="15" fill="#D4A13A" opacity="0.5">
                <animate attributeName="r" values="15;20;15" dur="2s" repeatCount="indefinite" />
              </circle>

              {/* Data streams */}
              {[0, 1, 2, 3, 4].map(i => (
                <line
                  key={i}
                  x1="280"
                  y1={180 + i * 30}
                  x2="380"
                  y2={180 + i * 30}
                  stroke="#D4A13A"
                  strokeWidth="1.5"
                  strokeDasharray="5 5"
                >
                  <animate attributeName="stroke-dashoffset" values="0;20;0" dur="2s" repeatCount="indefinite" />
                </line>
              ))}

              {/* Central hub with pulses */}
              <g transform="translate(500, 220)">
                <circle cx="0" cy="0" r="25" fill="none" stroke="#D4A13A" strokeWidth="2" filter="url(#glowTech)">
                  <animate attributeName="r" values="25;35;25" dur="2s" repeatCount="indefinite" />
                </circle>
                <circle cx="0" cy="0" r="8" fill="#D4A13A" />
                <circle cx="0" cy="0" r="15" fill="none" stroke="#D4A13A" strokeWidth="1" strokeDasharray="3 3">
                  <animate attributeName="r" values="15;25;15" dur="2s" repeatCount="indefinite" />
                </circle>
              </g>

              {/* Connection nodes */}
              <circle cx="600" cy="140" r="8" fill="#D4A13A" filter="url(#glowTech)">
                <animate attributeName="r" values="8;12;8" dur="1.5s" repeatCount="indefinite" />
              </circle>
              <circle cx="650" cy="300" r="8" fill="#D4A13A" filter="url(#glowTech)">
                <animate attributeName="r" values="8;12;8" dur="1.5s" repeatCount="indefinite" begin="0.5s" />
              </circle>
              <circle cx="720" cy="180" r="6" fill="#D4A13A" filter="url(#glowTech)">
                <animate attributeName="r" values="6;10;6" dur="1.2s" repeatCount="indefinite" begin="1s" />
              </circle>

              {/* Ground line */}
              <line x1="0" y1="350" x2="800" y2="350" stroke="#D4A13A" strokeWidth="2" strokeDasharray="5 5" />
            </svg>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-[#D4A13A] text-[#051614]">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div {...fadeInUp}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to go smart?</h2>
            <p className="text-lg opacity-90 mb-8">
              Let our smart integration experts design a connected environment that anticipates your needs.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="px-8 py-3 bg-[#051614] text-white font-bold rounded-lg hover:bg-black transition">
                Start Your Smart Journey
              </button>
              <button className="px-8 py-3 border-2 border-[#051614] text-[#051614] font-bold rounded-lg hover:bg-[#051614]/10 transition">
                Download Smart Brochure
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}