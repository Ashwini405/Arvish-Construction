import Footer from "../components/Footer";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";

export default function PostConstruction() {
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
            src="https://images.pexels.com/photos/2695867/pexels-photo-2695867.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Finished interior"
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
              Post‑Construction Excellence
            </span>
            <h1 className="text-5xl md:text-7xl font-bold mt-6 mb-4 leading-tight">
              Perfecting Every<br />Detail
            </h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto text-gray-200">
              We go beyond handover – ensuring flawless finishes, comprehensive documentation,
              and ongoing support so your project continues to perform for years.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <button className="px-6 py-3 bg-[#D4A13A] text-[#051614] font-bold rounded-lg hover:bg-[#c3922f] transition">
                Schedule a Walkthrough
              </button>
              <button className="px-6 py-3 border border-white text-white font-bold rounded-lg hover:bg-white/10 transition">
                Explore Our Services
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

      {/* Core Post‑Construction Services */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <span className="text-sm font-bold text-[#D4A13A] uppercase tracking-widest">Our Expertise</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#051614] mt-2">Beyond Construction</h2>
            <div className="w-20 h-1 bg-[#D4A13A] mx-auto mt-4" />
            <p className="text-gray-600 max-w-3xl mx-auto mt-6">
              Our post‑construction services ensure that your project not only meets but exceeds expectations,
              with a focus on quality, aesthetics, and a seamless transition to occupancy.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Quality Apotheosis",
                desc: "Rigorous final inspections, punch‑list management, and third‑party quality audits to achieve perfection.",
                icon: "🔍"
              },
              {
                title: "Aesthetic Finishing",
                desc: "Artisan‑led finishes, custom millwork, and curated material selections that elevate the space.",
                icon: "🎨"
              },
              {
                title: "The Grand Handover",
                desc: "Comprehensive documentation, client walkthroughs, and seamless transition to occupancy.",
                icon: "🔑"
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

      {/* The Post‑Construction Process */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <span className="text-sm font-bold text-[#D4A13A] uppercase tracking-widest">Our Process</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#051614] mt-2">From Finish to Handover</h2>
            <div className="w-20 h-1 bg-[#D4A13A] mx-auto mt-4" />
          </motion.div>

          <div className="relative">
            {/* Horizontal timeline line (for md and up) */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-[#D4A13A]/30 transform -translate-y-1/2" />

            <div className="grid md:grid-cols-4 gap-6 relative z-10">
              {[
                { step: "1", title: "Final Inspections", desc: "Comprehensive quality checks, system testing, and punch‑list closure." },
                { step: "2", title: "Finishing Touches", desc: "Architectural detailing, custom fixtures, and aesthetic refinements." },
                { step: "3", title: "Documentation", desc: "As‑built drawings, warranties, O&M manuals, and certification packages." },
                { step: "4", title: "Handover & Support", desc: "Client walkthrough, training, and post‑occupancy care." }
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
            <span className="text-sm font-bold text-[#D4A13A] uppercase tracking-widest">Why Choose Us</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#051614] mt-2">The Arvish Advantage</h2>
            <div className="w-20 h-1 bg-[#D4A13A] mx-auto mt-4" />
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Zero Punch‑List", desc: "We aim for a flawless handover with rigorous pre‑delivery checks.", icon: "✅" },
              { title: "Warranty Support", desc: "12‑month warranty on workmanship and extended options available.", icon: "🛡️" },
              { title: "Facility Onboarding", desc: "Training and documentation for your facilities team.", icon: "📚" },
              { title: "Post‑Occupancy Care", desc: "Scheduled inspections and proactive maintenance plans.", icon: "🔄" }
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

      {/* Case Study: Seamless Handover */}
      <section className="py-20 px-4 bg-[#051614] text-white">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <span className="text-sm font-bold text-[#D4A13A] uppercase tracking-widest">Success Story</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">A Flawless Finish: Arvish Tower Handover</h2>
            <div className="w-20 h-1 bg-[#D4A13A] mx-auto mt-4" />
          </motion.div>

          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2">
              <img
                src="https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Modern interior"
                className="rounded-2xl shadow-xl"
              />
            </div>
            <div className="md:w-1/2 space-y-4">
              <p className="text-gray-300">
                For the 45‑story Arvish Tower, our post‑construction team executed over 2,300 quality
                inspections, achieved a 99.8% punch‑list closure rate, and delivered a comprehensive
                digital operations manual. The handover was completed two weeks ahead of schedule,
                and the client's facilities team was fully trained on all building systems.
              </p>
              <div className="flex gap-6 text-sm">
                <div>
                  <span className="block text-2xl font-bold text-[#D4A13A]">99.8%</span>
                  <span className="text-gray-400">Punch‑list closure</span>
                </div>
                <div>
                  <span className="block text-2xl font-bold text-[#D4A13A]">2 weeks</span>
                  <span className="text-gray-400">Early handover</span>
                </div>
                <div>
                  <span className="block text-2xl font-bold text-[#D4A13A]">100%</span>
                  <span className="text-gray-400">Client satisfaction</span>
                </div>
              </div>
              <button className="mt-4 text-[#D4A13A] font-bold flex items-center gap-1 hover:gap-2 transition-all">
                Read Full Case Study <span>→</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Finishing Touches Animation */}
      <section className="py-20 px-4 bg-white overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <span className="text-sm font-bold text-[#D4A13A] uppercase tracking-widest">Craftsmanship in Motion</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#051614] mt-2">The Art of Finishing</h2>
            <div className="w-20 h-1 bg-[#D4A13A] mx-auto mt-4" />
          </motion.div>

          <div className="relative w-full h-[300px] md:h-[400px]">
            <svg className="w-full h-full" viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="finishGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#D4A13A" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#051614" stopOpacity="0.3" />
                </linearGradient>
                <filter id="glowFinish">
                  <feGaussianBlur stdDeviation="2" result="coloredBlur" />
                  <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* Building silhouette */}
              <rect x="100" y="100" width="80" height="250" fill="url(#finishGrad)" stroke="#D4A13A" strokeWidth="1.5" rx="4" />

              {/* Animated paint roller / finishing tool */}
              <g transform="translate(250, 220)">
                <rect x="0" y="-8" width="120" height="16" fill="#D4A13A" rx="8" filter="url(#glowFinish)">
                  <animate attributeName="x" values="0;100;0" dur="3s" repeatCount="indefinite" />
                </rect>
                <circle cx="0" cy="0" r="12" fill="#D4A13A" />
                <rect x="-8" y="-8" width="16" height="16" fill="#D4A13A" transform="rotate(45)" />
              </g>

              {/* Sparkle effect */}
              <g transform="translate(500, 150)">
                <circle cx="0" cy="0" r="5" fill="#D4A13A" opacity="0.7">
                  <animate attributeName="r" values="5;12;5" dur="1.5s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0.7;0;0.7" dur="1.5s" repeatCount="indefinite" />
                </circle>
                <circle cx="20" cy="30" r="4" fill="#D4A13A" opacity="0.6">
                  <animate attributeName="r" values="4;10;4" dur="2s" repeatCount="indefinite" begin="0.5s" />
                </circle>
              </g>

              {/* Handover key */}
              <g transform="translate(600, 280)">
                <rect x="-8" y="-4" width="60" height="8" fill="#D4A13A" rx="4" />
                <circle cx="-8" cy="0" r="6" fill="#D4A13A" />
                <polygon points="52,0 60,0 56,-6 56,6" fill="#D4A13A" />
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready for a flawless finish?</h2>
            <p className="text-lg opacity-90 mb-8">
              Let our post‑construction experts ensure your project reaches its full potential.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="px-8 py-3 bg-[#051614] text-white font-bold rounded-lg hover:bg-black transition">
                Request a Handover Consultation
              </button>
              <button className="px-8 py-3 border-2 border-[#051614] text-[#051614] font-bold rounded-lg hover:bg-[#051614]/10 transition">
                Download Our Checklist
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}