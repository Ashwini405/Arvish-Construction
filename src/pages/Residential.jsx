import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Home, Shield, Users, CheckCircle, ArrowRight } from "lucide-react";

export default function Residential() {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, threshold: 0.1 });

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [inView, controls]);

  const projects = [
    { name: "Independent House Construction", location: "Hyderabad", units: "3BHK Residential Home", status: "Completed", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600" },
    { name: "Residential Apartment Project", location: "Hyderabad", units: "Apartment Units", status: "Completed", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600" },
    { name: "Villa Construction Project", location: "Telangana", units: "Modern Villa", status: "Ongoing", image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600" },
    { name: "Home Renovation Project", location: "Hyderabad", units: "Residential Upgrade", status: "Completed", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600" },
  ];

  const features = [
    { icon: Home, title: "Custom Home Design", desc: "Homes designed based on your needs, preferences, and budget." },
    { icon: Shield, title: "Quality Construction", desc: "Strong structures built using reliable materials and proven methods." },
    { icon: Users, title: "Experienced Team", desc: "Skilled engineers and workers ensuring proper execution at every stage." },
    { icon: CheckCircle, title: "Timely Delivery", desc: "Projects completed on time with proper planning and coordination." },
  ];

  const statusColor = {
    Completed: "bg-emerald-100 text-emerald-700",
    Ongoing: "bg-blue-100 text-blue-700",
    Upcoming: "bg-amber-100 text-amber-700",
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="bg-white min-h-screen">
      <Navbar />

      {/* Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 -left-20 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-float"></div>
        <div className="absolute bottom-20 -right-20 w-96 h-96 bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-float-delayed"></div>
      </div>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Luxury residential"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-indigo-900/70 to-slate-900/80" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-8 h-0.5 bg-white/50 rounded-full"></div>
              <span className="text-xs font-bold text-white/80 uppercase tracking-wider">Services / Residential</span>
              <div className="w-8 h-0.5 bg-white/50 rounded-full"></div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mt-4 mb-6">
              Residential Construction
            </h1>
            <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
              We build residential homes, apartments, and villas designed for comfort, durability, and modern living.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-8 h-0.5 bg-blue-600 rounded-full"></div>
              <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">Why Choose Us</span>
              <div className="w-8 h-0.5 bg-blue-600 rounded-full"></div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Excellence in Every Detail</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mt-4" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-2xl p-8 text-center hover:bg-blue-50 transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-5 group-hover:bg-blue-600 transition-colors duration-300">
                  <feature.icon size={28} className="text-blue-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section ref={ref} className="py-20 px-6 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={controls ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7 }}
            >
              <div className="inline-flex items-center gap-3 mb-4">
                <div className="w-8 h-0.5 bg-blue-600 rounded-full"></div>
                <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">Our Approach</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-6">
                Homes Designed for Your Needs
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We believe every home should be a reflection of its owner. Our residential construction process begins with a deep understanding of your needs, preferences, and budget — then we bring that vision to life with precision and care.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                From foundation to finishing, our experienced teams manage every detail, ensuring quality at every stage of construction.
              </p>
              <div className="flex flex-wrap gap-8">
                <div className="text-center">
                  <p className="text-3xl font-black text-blue-600">50+</p>
                  <p className="text-xs text-gray-500 mt-1">Homes Delivered</p>
                </div>
                <div className="w-px bg-gray-300" />
                <div className="text-center">
                  <p className="text-3xl font-black text-blue-600">100%</p>
                  <p className="text-xs text-gray-500 mt-1">Quality Focus</p>
                </div>
                <div className="w-px bg-gray-300" />
                <div className="text-center">
                  <p className="text-3xl font-black text-blue-600">5+</p>
                  <p className="text-xs text-gray-500 mt-1">Years Experience</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={controls ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.7 }}
              className="relative rounded-2xl overflow-hidden shadow-xl h-96"
            >
              <img
                src="https://images.pexels.com/photos/269077/pexels-photo-269077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Construction team"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-8 h-0.5 bg-blue-600 rounded-full"></div>
              <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">Portfolio</span>
              <div className="w-8 h-0.5 bg-blue-600 rounded-full"></div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Featured Residential Projects</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mt-4" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-gray-100"
              >
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-2/5 h-48 md:h-auto overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="md:w-3/5 p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
                      {project.name}
                    </h3>
                    <p className="text-sm text-gray-500 mb-2">{project.location}</p>
                    <p className="text-sm text-gray-600 mb-3">{project.units}</p>
                    <span className={`text-xs font-semibold px-3 py-1 rounded-full ${statusColor[project.status]}`}>
                      {project.status}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      

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
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 10s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}