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
              The Stewardship
            </h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto text-gray-200">
              Committed beyond completion. We provide ongoing support and maintenance to ensure your building remains safe, functional, and well-maintained.
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
                title: "Regular Maintenance",
                desc: "Periodic checks to ensure the building remains in good condition.",
                icon: "🔧"
              },
              {
                title: "Repair Support",
                desc: "Timely repairs to fix issues and maintain performance.",
                icon: "🛠️"
              },
              {
                title: "Ongoing Assistance",
                desc: "Continuous support for any maintenance needs after project completion.",
                icon: "🤝"
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
                { step: "1", title: "Inspection", desc: "Checking the condition of the building regularly." },
                { step: "2", title: "Maintenance Planning", desc: "Planning required maintenance activities." },
                { step: "3", title: "Repair & Service", desc: "Fixing issues and maintaining building systems." },
                { step: "4", title: "Follow-Up", desc: "Ensuring everything continues to function properly." }
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
              {
                title: "Long-Term Durability",
                desc: "Ensures the building remains strong and reliable over time.",
                icon: "🏗️"
              },
              {
                title: "Cost Efficiency",
                desc: "Regular maintenance helps avoid major repair costs.",
                icon: "💰"
              },
              {
                title: "Safe Environment",
                desc: "Maintains safety standards for occupants and users.",
                icon: "🛡️"
              },
              {
                title: "Client Support",
                desc: "Continuous assistance even after project completion.",
                icon: "😊"
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
