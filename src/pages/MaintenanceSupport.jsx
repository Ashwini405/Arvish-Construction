import Footer from "../components/Footer";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";

export default function MaintenanceSupport() {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.6 }
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      {/* Hero Section with Parallax Background */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/258117/pexels-photo-258117.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Maintenance worker"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
          {/* Subtle pattern overlay */}
          <div
            className="absolute inset-0 opacity-10 pointer-events-none"
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
              Maintenance & Support
            </span>
            <h1 className="text-5xl md:text-7xl font-bold mt-6 mb-4 leading-tight">
              Protecting Your<br />Investment
            </h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto text-gray-200">
              We provide comprehensive, proactive maintenance and dedicated support to ensure your
              asset remains in peak condition for decades.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <button className="px-6 py-3 bg-[#D4A13A] text-[#051614] font-bold rounded-lg hover:bg-[#c3922f] transition">
                Schedule Service
              </button>
              <button className="px-6 py-3 border border-white text-white font-bold rounded-lg hover:bg-white/10 transition">
                Explore Support Plans
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

      {/* Core Services */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <span className="text-sm font-bold text-[#D4A13A] uppercase tracking-widest">Our Expertise</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#051614] mt-2">Comprehensive Asset Care</h2>
            <div className="w-20 h-1 bg-[#D4A13A] mx-auto mt-4" />
            <p className="text-gray-600 max-w-3xl mx-auto mt-6">
              From routine inspections to emergency repairs, we deliver peace of mind through
              proactive maintenance and responsive support.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "24/7 Support",
                desc: "Round‑the‑clock emergency response, dedicated hotline, and on‑site technicians ready when you need them.",
                icon: "📞"
              },
              {
                title: "Preventive Care",
                desc: "Scheduled inspections, predictive analytics, and proactive repairs to avoid costly downtime.",
                icon: "🔧"
              },
              {
                title: "Lifetime Warranty",
                desc: "Comprehensive coverage on workmanship and materials, backed by our commitment to quality.",
                icon: "🏆"
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

      {/* Maintenance Process */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <span className="text-sm font-bold text-[#D4A13A] uppercase tracking-widest">How We Work</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#051614] mt-2">A Structured Support Framework</h2>
            <div className="w-20 h-1 bg-[#D4A13A] mx-auto mt-4" />
          </motion.div>

          <div className="relative">
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-[#D4A13A]/30 transform -translate-y-1/2" />
            <div className="grid md:grid-cols-4 gap-6 relative z-10">
              {[
                { step: "1", title: "Assessment", desc: "Initial audit to identify asset condition and risks." },
                { step: "2", title: "Plan", desc: "Customized maintenance schedule and support package." },
                { step: "3", title: "Execute", desc: "Proactive inspections, repairs, and documentation." },
                { step: "4", title: "Review", desc: "Performance analytics and continuous improvement." }
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
            <span className="text-sm font-bold text-[#D4A13A] uppercase tracking-widest">Why Partner With Us</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#051614] mt-2">Unmatched Support Value</h2>
            <div className="w-20 h-1 bg-[#D4A13A] mx-auto mt-4" />
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Rapid Response", desc: "Average 2‑hour emergency response time.", icon: "⚡" },
              { title: "Predictive Analytics", desc: "IoT sensors predict failures before they occur.", icon: "📊" },
              { title: "Certified Technicians", desc: "Factory‑trained experts for all systems.", icon: "🎓" },
              { title: "Transparent Reporting", desc: "Digital logs and real‑time updates.", icon: "📋" }
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

      {/* Case Study: Long-Term Partnership */}
      <section className="py-20 px-4 bg-[#051614] text-white">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <span className="text-sm font-bold text-[#D4A13A] uppercase tracking-widest">Client Success</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">10 Years of Uninterrupted Operation</h2>
            <div className="w-20 h-1 bg-[#D4A13A] mx-auto mt-4" />
          </motion.div>

          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2">
              <img
                src="https://images.pexels.com/photos/2760242/pexels-photo-2760242.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Building maintenance"
                className="rounded-2xl shadow-xl"
              />
            </div>
            <div className="md:w-1/2 space-y-4">
              <p className="text-gray-300">
                For over a decade, we have maintained the Arvish Tower's complex systems – HVAC,
                electrical, plumbing, and building automation. Through our preventive care program,
                the building has achieved 99.9% uptime, zero major breakdowns, and extended equipment
                life by an average of 40%.
              </p>
              <div className="flex gap-6 text-sm">
                <div>
                  <span className="block text-2xl font-bold text-[#D4A13A]">99.9%</span>
                  <span className="text-gray-400">System uptime</span>
                </div>
                <div>
                  <span className="block text-2xl font-bold text-[#D4A13A]">40%</span>
                  <span className="text-gray-400">Extended equipment life</span>
                </div>
                <div>
                  <span className="block text-2xl font-bold text-[#D4A13A]">0</span>
                  <span className="text-gray-400">Major breakdowns</span>
                </div>
              </div>
              <button className="mt-4 text-[#D4A13A] font-bold flex items-center gap-1 hover:gap-2 transition-all">
                Read Full Case Study <span>→</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Animated Maintenance Illustration */}
      <section className="py-20 px-4 bg-white overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <span className="text-sm font-bold text-[#D4A13A] uppercase tracking-widest">Continuous Care</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#051614] mt-2">Always Protecting Your Asset</h2>
            <div className="w-20 h-1 bg-[#D4A13A] mx-auto mt-4" />
          </motion.div>

          <div className="relative w-full h-[300px] md:h-[400px]">
            <svg className="w-full h-full" viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="maintGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#D4A13A" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#051614" stopOpacity="0.3" />
                </linearGradient>
                <filter id="glowMaint">
                  <feGaussianBlur stdDeviation="2" result="coloredBlur" />
                  <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* Building silhouette with gear (maintenance symbol) */}
              <rect x="100" y="150" width="200" height="200" fill="url(#maintGrad)" stroke="#D4A13A" strokeWidth="1.5" rx="4" />
              <g transform="translate(200, 260)">
                <circle cx="0" cy="0" r="20" fill="none" stroke="#D4A13A" strokeWidth="2" />
                <circle cx="0" cy="0" r="10" fill="#D4A13A" filter="url(#glowMaint)" />
                <path d="M0, -25 L0, -15 M0, 15 L0, 25 M-25,0 L-15,0 M15,0 L25,0" stroke="#D4A13A" strokeWidth="2" />
              </g>

              {/* Pulse rings around building */}
              <circle cx="200" cy="250" r="50" fill="none" stroke="#D4A13A" strokeWidth="1" strokeDasharray="3 3">
                <animate attributeName="r" values="50;80;50" dur="3s" repeatCount="indefinite" />
              </circle>
              <circle cx="200" cy="250" r="65" fill="none" stroke="#D4A13A" strokeWidth="1" strokeDasharray="3 3">
                <animate attributeName="r" values="65;95;65" dur="3s" repeatCount="indefinite" begin="1s" />
              </circle>

              {/* Support technicians */}
              <g transform="translate(450, 280)">
                <rect x="-20" y="-10" width="40" height="20" fill="#D4A13A" opacity="0.8" rx="4" />
                <circle cx="0" cy="-10" r="12" fill="#D4A13A" />
                <line x1="-10" y1="0" x2="-20" y2="20" stroke="#D4A13A" strokeWidth="2" />
                <line x1="10" y1="0" x2="20" y2="20" stroke="#D4A13A" strokeWidth="2" />
              </g>
              <g transform="translate(550, 300)">
                <rect x="-15" y="-8" width="30" height="16" fill="#D4A13A" opacity="0.8" rx="3" />
                <circle cx="0" cy="-8" r="10" fill="#D4A13A" />
              </g>

              {/* Data flow lines */}
              <path d="M300 250 L400 280" stroke="#D4A13A" strokeWidth="1.5" strokeDasharray="4 2">
                <animate attributeName="stroke-dashoffset" values="0;20;0" dur="2s" repeatCount="indefinite" />
              </path>
              <path d="M300 270 L400 310" stroke="#D4A13A" strokeWidth="1.5" strokeDasharray="4 2">
                <animate attributeName="stroke-dashoffset" values="0;20;0" dur="2.5s" repeatCount="indefinite" />
              </path>

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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Protect your investment today</h2>
            <p className="text-lg opacity-90 mb-8">
              Let our maintenance experts create a custom support plan for your property.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="px-8 py-3 bg-[#051614] text-white font-bold rounded-lg hover:bg-black transition">
                Get a Maintenance Quote
              </button>
              <button className="px-8 py-3 border-2 border-[#051614] text-[#051614] font-bold rounded-lg hover:bg-[#051614]/10 transition">
                Download Support Brochure
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}