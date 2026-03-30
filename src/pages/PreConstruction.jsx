import Footer from "../components/Footer";
import { motion } from "framer-motion"; // or use CSS animations; we'll use Tailwind and keyframes

export default function PreConstruction() {
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
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Construction site"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
          {/* Blueprint Grid Overlay */}
          <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cpath fill='none' stroke='%23D4A13A' stroke-width='0.5' d='M10 0 L10 100 M20 0 L20 100 M30 0 L30 100 M40 0 L40 100 M50 0 L50 100 M60 0 L60 100 M70 0 L70 100 M80 0 L80 100 M90 0 L90 100 M0 10 L100 10 M0 20 L100 20 M0 30 L100 30 M0 40 L100 40 M0 50 L100 50 M0 60 L100 60 M0 70 L100 70 M0 80 L100 80 M0 90 L100 90' /%3E%3C/svg%3E')", backgroundSize: "30px 30px" }} />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center text-white px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-sm font-bold text-[#D4A13A] uppercase tracking-widest border-b border-[#D4A13A] pb-1">
              Pre‑Construction Excellence
            </span>
            <h1 className="text-5xl md:text-7xl font-bold mt-6 mb-4 leading-tight">
              Vision, Planning,<br />Precision
            </h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto text-gray-200">
              We transform your vision into a detailed roadmap – from feasibility to final design,
              ensuring every project starts with a solid foundation.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <button className="px-6 py-3 bg-[#D4A13A] text-[#051614] font-bold rounded-lg hover:bg-[#c3922f] transition">
                Get a Consultation
              </button>
              <button className="px-6 py-3 border border-white text-white font-bold rounded-lg hover:bg-white/10 transition">
                Explore Our Process
              </button>
            </div>
          </motion.div>
        </div>

        {/* Animated Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7-7-7m14-6l-7 7-7-7" />
          </svg>
        </div>
      </section>

      {/* What is Pre‑Construction? */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <span className="text-sm font-bold text-[#D4A13A] uppercase tracking-widest">The Foundation</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#051614] mt-2">What is Pre‑Construction?</h2>
            <div className="w-20 h-1 bg-[#D4A13A] mx-auto mt-4" />
            <p className="text-gray-600 max-w-3xl mx-auto mt-6">
              Pre‑construction is the critical phase where ideas become actionable plans. We analyze,
              design, budget, and schedule before a single shovel breaks ground – reducing risk and
              maximizing project success.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Site Analysis",
                desc: "Geotechnical surveys, environmental studies, zoning compliance, and utility assessments.",
                icon: "🏗️"
              },
              {
                title: "Architectural Schematics",
                desc: "Concept designs, 3D renderings, and value engineering to align aesthetics with budget.",
                icon: "📐"
              },
              {
                title: "Budgeting & Scheduling",
                desc: "Accurate cost estimates, procurement strategies, and phased project timelines.",
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

      {/* Our Pre‑Construction Process */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <span className="text-sm font-bold text-[#D4A13A] uppercase tracking-widest">Methodology</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#051614] mt-2">Our 5‑Phase Process</h2>
            <div className="w-20 h-1 bg-[#D4A13A] mx-auto mt-4" />
          </motion.div>

          <div className="relative">
            {/* Vertical Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-[#D4A13A]/30 hidden md:block" />

            {[
              { step: "01", title: "Feasibility Study", desc: "Market analysis, site selection, preliminary budgeting, and risk assessment." },
              { step: "02", title: "Concept Design", desc: "Architectural sketches, 3D models, and design development with stakeholder input." },
              { step: "03", title: "Detailed Engineering", desc: "Structural, MEP, and civil engineering plans ready for permitting." },
              { step: "04", title: "Cost Planning", desc: "Itemized estimates, material sourcing, and value engineering workshops." },
              { step: "05", title: "Scheduling & Procurement", desc: "Phased timelines, long‑lead material orders, and contractor pre‑qualification." }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className={`relative mb-12 md:mb-20 flex flex-col md:flex-row items-center ${
                  idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className="flex-1 p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow md:mx-8">
                  <span className="text-4xl font-black text-[#D4A13A]/20">{item.step}</span>
                  <h3 className="text-xl font-bold text-[#051614] mt-2">{item.title}</h3>
                  <p className="text-gray-600 mt-2">{item.desc}</p>
                </div>
                <div className="hidden md:block w-12 h-12 rounded-full bg-[#D4A13A] text-white flex items-center justify-center text-xl font-bold z-10">
                  {idx + 1}
                </div>
                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <span className="text-sm font-bold text-[#D4A13A] uppercase tracking-widest">Why Choose Us</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#051614] mt-2">Unmatched Pre‑Construction Value</h2>
            <div className="w-20 h-1 bg-[#D4A13A] mx-auto mt-4" />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Cost Certainty",
                desc: "We provide ±5% budget accuracy through detailed quantity takeoffs and historical data.",
                icon: "💰"
              },
              {
                title: "Risk Mitigation",
                desc: "Identify potential issues early with comprehensive site analysis and constructability reviews.",
                icon: "🛡️"
              },
              {
                title: "Time Optimization",
                desc: "Phased schedules and fast‑track strategies compress delivery without compromising quality.",
                icon: "⏱️"
              },
              {
                title: "Collaborative Approach",
                desc: "We work with architects, engineers, and stakeholders as an integrated team from day one.",
                icon: "🤝"
              }
            ].map((benefit, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.1, duration: 0.4 }}
                viewport={{ once: true }}
                className="flex gap-4 p-6 rounded-2xl bg-gray-50 hover:bg-[#D4A13A]/5 transition-all"
              >
                <div className="text-3xl">{benefit.icon}</div>
                <div>
                  <h3 className="text-xl font-bold text-[#051614] mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline / Milestone Illustration */}
      <section className="py-20 px-4 bg-[#051614] text-white">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <span className="text-sm font-bold text-[#D4A13A] uppercase tracking-widest">Project Milestones</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">From Concept to Groundbreaking</h2>
            <div className="w-20 h-1 bg-[#D4A13A] mx-auto mt-4" />
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6 text-center">
            {[
              { month: "Month 1-2", title: "Feasibility & Site Analysis", icon: "🔍" },
              { month: "Month 3-4", title: "Concept Design & Permitting", icon: "✍️" },
              { month: "Month 5-6", title: "Detailed Engineering & Costing", icon: "📐" },
              { month: "Month 7-8", title: "Procurement & Mobilization", icon: "🚚" }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="text-4xl mb-3">{item.icon}</div>
                <p className="text-[#D4A13A] font-bold">{item.month}</p>
                <h3 className="text-lg font-semibold mt-2">{item.title}</h3>
                {idx < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-[#D4A13A]/50" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study / Sample Project */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <span className="text-sm font-bold text-[#D4A13A] uppercase tracking-widest">Success Story</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#051614] mt-2">The Arvish Tower – Pre‑Construction in Action</h2>
            <div className="w-20 h-1 bg-[#D4A13A] mx-auto mt-4" />
          </motion.div>

          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2">
              <img
                src="https://images.pexels.com/photos/1051571/pexels-photo-1051571.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Project rendering"
                className="rounded-2xl shadow-xl"
              />
            </div>
            <div className="md:w-1/2 space-y-4">
              <p className="text-gray-600">
                For the 45‑story mixed‑use tower, our pre‑construction team conducted a comprehensive
                geotechnical survey, optimized structural design saving 12% in steel, and created a
                phased schedule that reduced overall timeline by 4 months.
              </p>
              <div className="flex gap-6 text-sm">
                <div>
                  <span className="block text-2xl font-bold text-[#D4A13A]">12%</span>
                  <span className="text-gray-500">Cost savings</span>
                </div>
                <div>
                  <span className="block text-2xl font-bold text-[#D4A13A]">4 mo</span>
                  <span className="text-gray-500">Schedule reduction</span>
                </div>
                <div>
                  <span className="block text-2xl font-bold text-[#D4A13A]">0</span>
                  <span className="text-gray-500">Change orders</span>
                </div>
              </div>
              <button className="mt-4 text-[#D4A13A] font-bold flex items-center gap-1 hover:gap-2 transition-all">
                Read Full Case Study <span>→</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-[#D4A13A] text-[#051614]">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div {...fadeInUp}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to start your project on the right foot?</h2>
            <p className="text-lg opacity-90 mb-8">
              Let our pre‑construction experts guide you from vision to reality.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="px-8 py-3 bg-[#051614] text-white font-bold rounded-lg hover:bg-black transition">
                Request a Consultation
              </button>
              <button className="px-8 py-3 border-2 border-[#051614] text-[#051614] font-bold rounded-lg hover:bg-[#051614]/10 transition">
                Download Brochure
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}