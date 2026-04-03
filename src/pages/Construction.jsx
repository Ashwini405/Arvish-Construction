import Footer from "../components/Footer";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";

export default function Construction() {
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
            src="https://images.pexels.com/photos/2760242/pexels-photo-2760242.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Construction site with crane"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
          {/* Construction blueprint overlay */}
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
              Construction Excellence
            </span>
            <h1 className="text-5xl md:text-7xl font-bold mt-6 mb-4 leading-tight">
              Building Beyond<br />Expectations
            </h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto text-gray-200">
              We transform blueprints into reality with uncompromising quality, safety, and innovation,
              delivering structures that stand the test of time.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <button className="px-6 py-3 bg-[#D4A13A] text-[#051614] font-bold rounded-lg hover:bg-[#c3922f] transition">
                Request a Quote
              </button>
              <button className="px-6 py-3 border border-white text-white font-bold rounded-lg hover:bg-white/10 transition">
                View Our Projects
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

      {/* Our Core Strengths */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <span className="text-sm font-bold text-[#D4A13A] uppercase tracking-widest">Core Strengths</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#051614] mt-2">What Sets Us Apart</h2>
            <div className="w-20 h-1 bg-[#D4A13A] mx-auto mt-4" />
            <p className="text-gray-600 max-w-3xl mx-auto mt-6">
              Our construction approach combines advanced engineering, artisanal craftsmanship, and
              rigorous project management to deliver world‑class structures.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Structural Integrity",
                desc: "We build with seismic resilience, high‑strength materials, and precision engineering.",
                icon: "🏗️"
              },
              {
                title: "Artisanal Materials",
                desc: "Hand‑selected finishes and premium materials that elevate aesthetics and longevity.",
                icon: "✨"
              },
              {
                title: "Elite Management",
                desc: "Lean construction practices, real‑time reporting, and experienced site leadership.",
                icon: "📊"
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

      {/* Construction Phases */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <span className="text-sm font-bold text-[#D4A13A] uppercase tracking-widest">Our Process</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#051614] mt-2">How We Build</h2>
            <div className="w-20 h-1 bg-[#D4A13A] mx-auto mt-4" />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                phase: "Phase 1: Site Preparation",
                items: ["Clearing & grading", "Temporary utilities", "Shoring & excavation", "Foundation pouring"]
              },
              {
                phase: "Phase 2: Structural Frame",
                items: ["Steel erection / reinforced concrete", "Floor slabs", "Vertical circulation cores", "Pre‑cast elements"]
              },
              {
                phase: "Phase 3: Enclosure & MEP",
                items: ["Curtain wall / cladding", "Roofing & waterproofing", "HVAC, electrical, plumbing rough‑ins", "Fire protection"]
              },
              {
                phase: "Phase 4: Finishes & Commissioning",
                items: ["Interior finishes", "Fixtures & equipment", "System testing & balancing", "Final inspections & handover"]
              }
            ].map((phase, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.1, duration: 0.4 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition"
              >
                <h3 className="text-xl font-bold text-[#D4A13A] mb-3">{phase.phase}</h3>
                <ul className="space-y-2">
                  {phase.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-600">
                      <span className="text-[#D4A13A] mt-1">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <span className="text-sm font-bold text-[#D4A13A] uppercase tracking-widest">Why Partner With Us</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#051614] mt-2">Unmatched Construction Value</h2>
            <div className="w-20 h-1 bg-[#D4A13A] mx-auto mt-4" />
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Safety First", desc: "Zero‑incident culture with ISO 45001 certified protocols.", icon: "🛡️" },
              { title: "On‑Time Delivery", desc: "98% project completion within original schedule.", icon: "⏱️" },
              { title: "Quality Assurance", desc: "Rigorous inspections and material testing at every stage.", icon: "🔍" },
              { title: "Sustainable Building", desc: "LEED and Estidama practices for greener footprints.", icon: "🌱" }
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

      {/* Featured Project */}
      <section className="py-20 px-4 bg-[#051614] text-white">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <span className="text-sm font-bold text-[#D4A13A] uppercase tracking-widest">Featured Work</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">The Arvish Tower – A Landmark Completed</h2>
            <div className="w-20 h-1 bg-[#D4A13A] mx-auto mt-4" />
          </motion.div>

          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2">
              <img
                src="https://images.pexels.com/photos/2277963/pexels-photo-2277963.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Completed building"
                className="rounded-2xl shadow-xl"
              />
            </div>
            <div className="md:w-1/2 space-y-4">
              <p className="text-gray-300">
                The 45‑story mixed‑use tower was delivered 3 months ahead of schedule, with zero
                lost‑time incidents and a LEED Gold certification. Our team employed advanced BIM
                coordination, prefabricated facade panels, and a just‑in‑time logistics strategy to
                achieve exceptional quality and efficiency.
              </p>
              <div className="flex gap-6 text-sm">
                <div>
                  <span className="block text-2xl font-bold text-[#D4A13A]">3 mo</span>
                  <span className="text-gray-400">Early delivery</span>
                </div>
                <div>
                  <span className="block text-2xl font-bold text-[#D4A13A]">0</span>
                  <span className="text-gray-400">LTI incidents</span>
                </div>
                <div>
                  <span className="block text-2xl font-bold text-[#D4A13A]">LEED Gold</span>
                  <span className="text-gray-400">Certified</span>
                </div>
              </div>
              <button className="mt-4 text-[#D4A13A] font-bold flex items-center gap-1 hover:gap-2 transition-all">
                View Project Gallery <span>→</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Construction Animation / Illusion */}
      <section className="py-20 px-4 bg-white overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <span className="text-sm font-bold text-[#D4A13A] uppercase tracking-widest">Innovation in Motion</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#051614] mt-2">Bringing Blueprints to Life</h2>
            <div className="w-20 h-1 bg-[#D4A13A] mx-auto mt-4" />
          </motion.div>

          <div className="relative w-full h-[300px] md:h-[400px]">
            <svg className="w-full h-full" viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#D4A13A" stopOpacity="0.2" />
                  <stop offset="100%" stopColor="#051614" stopOpacity="0.2" />
                </linearGradient>
                <filter id="shadow">
                  <feDropShadow dx="2" dy="2" stdDeviation="3" floodOpacity="0.3" />
                </filter>
              </defs>

              {/* Animated construction crane */}
              <g transform="translate(100, 50)">
                <line x1="0" y1="0" x2="0" y2="200" stroke="#D4A13A" strokeWidth="4" strokeDasharray="5 5">
                  <animate attributeName="stroke-dashoffset" values="0;20" dur="2s" repeatCount="indefinite" />
                </line>
                <line x1="0" y1="0" x2="80" y2="0" stroke="#D4A13A" strokeWidth="4" />
                <line x1="80" y1="0" x2="80" y2="50" stroke="#D4A13A" strokeWidth="2" strokeDasharray="3 3">
                  <animate attributeName="y2" values="50;70;50" dur="3s" repeatCount="indefinite" />
                </line>
                <circle cx="0" cy="200" r="8" fill="#D4A13A" filter="url(#shadow)" />
                <circle cx="80" cy="50" r="6" fill="#D4A13A" />
              </g>

              {/* Building blocks rising */}
              {[200, 300, 400, 500, 600].map((x, i) => (
                <rect
                  key={i}
                  x={x}
                  y={350 - i * 30}
                  width="30"
                  height={i * 30 + 30}
                  fill="url(#grad)"
                  stroke="#D4A13A"
                  strokeWidth="1.5"
                  rx="2"
                >
                  <animate
                    attributeName="height"
                    values={`${i * 30 + 30};${i * 30 + 70};${i * 30 + 30}`}
                    dur="4s"
                    repeatCount="indefinite"
                    begin={`${i * 0.5}s`}
                  />
                </rect>
              ))}

              {/* Construction workers silhouette */}
              <g transform="translate(500, 320)" opacity="0.8">
                <circle cx="0" cy="0" r="8" fill="#051614" />
                <rect x="-4" y="0" width="8" height="20" fill="#051614" />
                <circle cx="30" cy="0" r="8" fill="#051614" />
                <rect x="26" y="0" width="8" height="20" fill="#051614" />
              </g>

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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to build your next landmark?</h2>
            <p className="text-lg opacity-90 mb-8">
              Let’s discuss your project – from concept to completion, we deliver excellence.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="px-8 py-3 bg-[#051614] text-white font-bold rounded-lg hover:bg-black transition">
                Start Your Project
              </button>
              <button className="px-8 py-3 border-2 border-[#051614] text-[#051614] font-bold rounded-lg hover:bg-[#051614]/10 transition">
                Contact Our Team
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}