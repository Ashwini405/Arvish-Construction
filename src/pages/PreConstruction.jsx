import Footer from "../components/Footer";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";

export default function PreConstruction() {
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
              Pre-Construction
            </span>
            <h1 className="text-5xl md:text-7xl font-bold mt-6 mb-4 leading-tight">
              The Vision
            </h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto text-gray-200">
              Where every great structure begins. We plan, design, and prepare every detail to ensure a strong and successful construction process.
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
              Pre-construction is the initial stage of any project where planning, design, and preparation are carried out before construction begins. This phase ensures that the project is well-organized, cost-effective, and ready for execution.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Site Evaluation",
                desc: "Understanding the site conditions, surroundings, and requirements before starting the project.",
                icon: "🏗️"
              },
              {
                title: "Design Planning",
                desc: "Creating practical and efficient designs that match client needs and project goals.",
                icon: "📐"
              },
              {
                title: "Cost Estimation",
                desc: "Providing clear budget planning to ensure smooth execution without delays.",
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
              { step: "01", title: "Planning", desc: "Initial discussions and understanding project requirements." },
              { step: "02", title: "Site Analysis", desc: "Evaluating site conditions and feasibility." },
              { step: "03", title: "Design Development", desc: "Preparing layouts and design concepts." },
              { step: "04", title: "Budget Planning", desc: "Estimating costs and planning resources." },
              { step: "05", title: "Preparation", desc: "Finalizing all requirements before construction begins." }
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
                title: "Clear Planning",
                desc: "We ensure every project starts with proper planning and preparation.",
                icon: "📋"
              },
              {
                title: "Better Cost Control",
                desc: "Helps in managing budget effectively before construction begins.",
                icon: "💰"
              },
              {
                title: "Smooth Execution",
                desc: "Proper preparation leads to faster and smoother construction.",
                icon: "⚙️"
              },
              {
                title: "Reduced Risks",
                desc: "Identifying challenges early helps avoid delays and issues.",
                icon: "🛡️"
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
              { month: "Stage 1", title: "Planning & Site Analysis", icon: "🔍" },
              { month: "Stage 2", title: "Design Development", icon: "✍️" },
              { month: "Stage 3", title: "Cost Planning", icon: "📐" },
              { month: "Stage 4", title: "Project Preparation", icon: "🚚" }
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

   

      

      <Footer />
    </div>
  );
}