import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import {
  Home,
  Building2,
  GraduationCap,
  Factory,
  CheckCircle,
  ArrowRight,
  TrendingUp,
  Shield,
  Clock,
  Users,
} from "lucide-react";

export default function Services() {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, threshold: 0.1 });

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [inView, controls]);

  const services = [
    {
      id: "residential",
      title: "Residential Construction",
      icon: Home,
      color: "#3b82f6",
      bgGradient: "from-blue-50 to-indigo-50",
      description:
        "We build residential homes, apartments, and villas designed for comfort, durability, and modern living using quality materials and proper planning.",
      features: [
        "Independent houses & villas",
        "Apartment construction",
        "Renovation & extensions",
        "Quality material usage",
        "Modern design planning",
      ],
      stats: { projects: "50+", satisfaction: "100%" },
      image:
        "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: "commercial",
      title: "Commercial & Retail",
      icon: Building2,
      color: "#2563eb",
      bgGradient: "from-sky-50 to-blue-50",
      description:
        "We construct commercial buildings such as offices, shops, and retail spaces with efficient layouts and strong structural design.",
      features: [
        "Office buildings",
        "Retail shops & showrooms",
        "Commercial complexes",
        "Space planning",
        "Durable construction",
      ],
      stats: { projects: "40+", satisfaction: "100%" },
      image:
        "https://images.pexels.com/photos/1080696/pexels-photo-1080696.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: "educational",
      title: "Educational & Healthcare",
      icon: GraduationCap,
      color: "#1d4ed8",
      bgGradient: "from-blue-50 to-indigo-50",
      description:
        "We build schools, colleges, and healthcare facilities designed for safety, accessibility, and long-term use.",
      features: [
        "School buildings",
        "Colleges & institutions",
        "Clinic & hospital structures",
        "Safe construction planning",
        "Functional layouts",
      ],
      stats: { projects: "20+", satisfaction: "100%" },
      image:
        "https://images.pexels.com/photos/236380/pexels-photo-236380.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: "industrial",
      title: "Industrial Projects",
      icon: Factory,
      color: "#0f172a",
      bgGradient: "from-gray-50 to-slate-50",
      description:
        "We develop warehouses, factories, and industrial buildings designed for efficiency, safety, and operational use.",
      features: [
        "Warehouses",
        "Factory buildings",
        "Storage units",
        "Industrial sheds",
        "Efficient layouts",
      ],
      stats: { projects: "15+", satisfaction: "100%" },
      image:
        "https://images.pexels.com/photos/210607/pexels-photo-210607.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
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
      <section className="relative min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/2760242/pexels-photo-2760242.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Construction site"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-indigo-900/80" />
        </div>
        <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-8 h-0.5 bg-white/50 rounded-full"></div>
              <span className="text-sm font-bold text-white/80 uppercase tracking-wider">
                What We Offer
              </span>
              <div className="w-8 h-0.5 bg-white/50 rounded-full"></div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mt-4 mb-4">
              Our Construction Services
            </h1>
            <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
              We provide reliable residential, commercial, and industrial construction services with a focus on quality, planning, and timely execution.
            </p>
          </motion.div>
        </div>
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7-7-7" />
          </svg>
        </div>
      </section>

      {/* Services List */}
      <div ref={ref} className="relative max-w-7xl mx-auto px-6 py-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="space-y-24"
        >
          {services.map((service, idx) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              className={`flex flex-col ${
                idx % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } gap-10 items-center bg-white rounded-3xl shadow-xl overflow-hidden border border-blue-100 transition-all duration-500 hover:shadow-2xl`}
            >
              {/* Image */}
              <div className="lg:w-1/2 h-80 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
              </div>
              {/* Content */}
              <div className="lg:w-1/2 p-8 md:p-10">
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: `${service.color}15` }}
                  >
                    <service.icon size={24} style={{ color: service.color }} />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900">{service.title}</h2>
                </div>
                <p className="text-gray-600 leading-relaxed mb-6">{service.description}</p>
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-gray-600">
                      <CheckCircle size={14} className="text-blue-600 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="flex gap-6 border-t border-gray-100 pt-6">
                  <div>
                    <p className="text-2xl font-bold text-blue-600">{service.stats.projects}</p>
                    <p className="text-xs text-gray-500">Projects Completed</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-blue-600">{service.stats.satisfaction}</p>
                    <p className="text-xs text-gray-500">Client Satisfaction</p>
                  </div>
                </div>
                <button
                  className="mt-6 inline-flex items-center gap-2 text-blue-600 font-bold hover:gap-3 transition-all group"
                  onClick={() => (window.location.href = `/services/${service.id}`)}
                >
                  Explore {service.title.split(" ")[0]} Solutions
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Why Choose Us Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-blue-50 via-white to-indigo-50">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-8 h-0.5 bg-blue-600 rounded-full"></div>
            <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">Why Choose Us</span>
            <div className="w-8 h-0.5 bg-blue-600 rounded-full"></div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose Arvish Constructions?
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-12" />
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: Shield, label: "Quality Work", desc: "Focus on strong and durable construction" },
              { icon: Clock, label: "Timely Delivery", desc: "Projects completed on schedule" },
              { icon: TrendingUp, label: "Modern Approach", desc: "Efficient planning and execution" },
              { icon: Users, label: "Experienced Team", desc: "Skilled engineers and workers" },
            ].map((item, i) => (
              <div key={i} className="text-center group animate-fade-in-up" style={{ animationDelay: `${i * 100}ms` }}>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-600 transition-colors duration-300">
                  <item.icon size={28} className="text-blue-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-bold text-gray-900 mb-1">{item.label}</h3>
                <p className="text-gray-500 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Ready to start your construction project?</h2>
          <p className="text-blue-100 mb-8 text-lg">Let's discuss your requirements and bring your vision to life.</p>
          <button
            onClick={() => (window.location.href = "/contact")}
            className="px-8 py-3 bg-white text-blue-700 font-bold rounded-full hover:bg-blue-50 transition-all transform hover:scale-105 shadow-lg inline-flex items-center gap-2"
          >
            Request a Consultation
            <ArrowRight size={18} />
          </button>
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
        .animate-bounce {
          animation: bounce 2s infinite;
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(-25%) translateX(-50%); animation-timing-function: cubic-bezier(0.8, 0, 1, 1); }
          50% { transform: translateY(0) translateX(-50%); animation-timing-function: cubic-bezier(0, 0, 0.2, 1); }
        }
      `}</style>
    </div>
  );
}