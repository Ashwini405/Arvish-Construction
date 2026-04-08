import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
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
              Construction
            </span>
            <h1 className="text-5xl md:text-7xl font-bold mt-6 mb-4 leading-tight">
              The Craft
            </h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto text-gray-200">
              Built with precision. Delivered with excellence. We execute every project with strong construction practices, quality materials, and efficient project management.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="px-6 py-3 bg-[#D4A13A] text-[#051614] font-bold rounded-lg hover:bg-[#c3922f] transition inline-block">
                Get Connect
              </Link>
              <Link to="/projects" className="px-6 py-3 border border-white text-white font-bold rounded-lg hover:bg-white/10 transition inline-block">
                Explore Projects
              </Link>
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
                title: "Strong Construction",
                desc: "We ensure every structure is built with strength and durability.",
                icon: "🏗️"
              },
              {
                title: "Quality Materials",
                desc: "Using reliable materials to maintain long-term performance.",
                icon: "🧱"
              },
              {
                title: "Project Management",
                desc: "Efficient planning and execution for smooth construction.",
                icon: "📋"
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
                phase: "Step 1: Site Preparation",
                items: ["Site clearing", "Initial setup", "Foundation marking"]
              },
              {
                phase: "Step 2: Structural Work",
                items: ["Foundation work", "Columns and beams", "Slab construction"]
              },
              {
                phase: "Step 3: Finishing Work",
                items: ["Walls and plastering", "Flooring and fittings", "Painting"]
              },
              {
                phase: "Step 4: Final Completion",
                items: ["Final inspection", "Quality checks", "Project handover"]
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
              {
                title: "Quality Work",
                desc: "Maintaining high standards in every stage of construction.",
                icon: "✅"
              },
              {
                title: "On-Time Delivery",
                desc: "Projects completed within the planned schedule.",
                icon: "⏱️"
              },
              {
                title: "Experienced Team",
                desc: "Skilled professionals ensuring smooth execution.",
                icon: "👷"
              },
              {
                title: "Reliable Execution",
                desc: "Consistent and dependable construction process.",
                icon: "🏗️"
              }
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

     

      

      <Footer />
    </div>
  );
}
