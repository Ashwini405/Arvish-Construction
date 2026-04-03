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
      color: "#D4A13A",
      bgGradient: "from-amber-50 to-orange-50",
      description:
        "We build luxury villas, apartments, and gated communities that redefine modern living. Every home is crafted with precision, using premium materials and innovative designs that prioritize comfort, aesthetics, and long-term durability.",
      features: [
        "Custom luxury villas & townhouses",
        "High-rise apartment complexes",
        "Gated communities & integrated townships",
        "Smart home automation ready",
        "Eco-friendly & energy-efficient designs",
      ],
      stats: { projects: "250+", satisfaction: "98%" },
      image:
        "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: "commercial",
      title: "Commercial & Retail",
      icon: Building2,
      color: "#1E3A8A",
      bgGradient: "from-blue-50 to-indigo-50",
      description:
        "From iconic office towers to vibrant shopping malls, we create commercial spaces that inspire productivity and drive footfall. Our designs blend functionality with striking architecture, ensuring your business stands out.",
      features: [
        "Office towers & corporate campuses",
        "Shopping malls & retail outlets",
        "Hotels & hospitality venues",
        "Mixed-use developments",
        "LEED-certified sustainable buildings",
      ],
      stats: { projects: "180+", satisfaction: "96%" },
      image:
        "https://images.pexels.com/photos/1080696/pexels-photo-1080696.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: "educational",
      title: "Educational & Healthcare",
      icon: GraduationCap,
      color: "#16a34a",
      bgGradient: "from-green-50 to-emerald-50",
      description:
        "We design and construct schools, universities, hospitals, and clinics that prioritize safety, accessibility, and long-term functionality. Our expertise ensures these critical facilities meet the highest regulatory standards.",
      features: [
        "K-12 schools & universities",
        "Teaching hospitals & medical centers",
        "Research laboratories",
        "Specialized care facilities",
        "Anti-seismic & accessibility compliant",
      ],
      stats: { projects: "120+", satisfaction: "99%" },
      image:
        "https://images.pexels.com/photos/236380/pexels-photo-236380.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: "industrial",
      title: "Industrial Projects",
      icon: Factory,
      color: "#F97316",
      bgGradient: "from-orange-50 to-amber-50",
      description:
        "We deliver robust industrial facilities – warehouses, factories, and logistics hubs – engineered for operational efficiency, safety, and scalability. Our solutions help streamline your supply chain and production.",
      features: [
        "Warehouses & distribution centers",
        "Manufacturing plants",
        "Cold storage facilities",
        "Logistics hubs",
        "Heavy industrial infrastructure",
      ],
      stats: { projects: "95+", satisfaction: "97%" },
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
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      {/* Hero Section */}
      <section className="relative h-screen-75 min-h-[450px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/2760242/pexels-photo-2760242.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Construction site"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#051614]/70" />
          <div
            className="absolute inset-0 opacity-20 pointer-events-none"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cpath fill='none' stroke='%23D4A13A' stroke-width='0.5' d='M10 0 L10 100 M20 0 L20 100 M30 0 L30 100 M40 0 L40 100 M50 0 L50 100 M60 0 L60 100 M70 0 L70 100 M80 0 L80 100 M90 0 L90 100 M0 10 L100 10 M0 20 L100 20 M0 30 L100 30 M0 40 L100 40 M0 50 L100 50 M0 60 L100 60 M0 70 L100 70 M0 80 L100 80 M0 90 L100 90' /%3E%3C/svg%3E")`,
              backgroundSize: "40px 40px",
            }}
          />
        </div>
        <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-sm font-bold text-[#D4A13A] uppercase tracking-widest border-b border-[#D4A13A] pb-1">
              What We Offer
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mt-4 mb-4">
              Comprehensive Construction Services
            </h1>
            <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
              From residential to industrial – we deliver excellence across every sector with
              precision, quality, and innovation.
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
      <div ref={ref} className="max-w-6xl mx-auto px-4 xs:px-6 section-padding">
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
              } gap-10 items-center bg-white rounded-3xl shadow-lg overflow-hidden border border-gray-100`}
            >
              {/* Image */}
              <div className="lg:w-1/2 h-80 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
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
                  <h2 className="text-2xl md:text-3xl font-bold text-[#051614]">{service.title}</h2>
                </div>
                <p className="text-gray-600 leading-relaxed mb-6">{service.description}</p>
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-gray-600">
                      <CheckCircle size={14} className="text-[#D4A13A] flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="flex gap-6 border-t border-gray-100 pt-6">
                  <div>
                    <p className="text-2xl font-bold text-[#D4A13A]">{service.stats.projects}</p>
                    <p className="text-xs text-gray-500">Projects Completed</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-[#D4A13A]">{service.stats.satisfaction}</p>
                    <p className="text-xs text-gray-500">Client Satisfaction</p>
                  </div>
                </div>
                <button
                  className="mt-6 inline-flex items-center gap-2 text-[#D4A13A] font-bold hover:gap-3 transition-all"
                  onClick={() => (window.location.href = `/services/${service.id}`)}
                >
                  Explore {service.title.split(" ")[0]} Solutions <ArrowRight size={16} />
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Why Choose Us Banner */}
      <section className="py-16 px-6 bg-[#051614] text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Why Choose Arvish Constructions?</h2>
          <div className="w-20 h-1 bg-[#D4A13A] mx-auto mb-8" />
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: Shield, label: "Quality Assurance", desc: "ISO-certified processes" },
              { icon: Clock, label: "On-Time Delivery", desc: "98% on-schedule record" },
              { icon: TrendingUp, label: "Innovation", desc: "Modern techniques & materials" },
              { icon: Users, label: "Expert Team", desc: "2000+ skilled professionals" },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <item.icon size={36} className="text-[#D4A13A] mx-auto mb-3" />
                <h3 className="font-bold mb-1">{item.label}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-[#D4A13A] text-[#051614]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to start your project?</h2>
          <p className="mb-6">Let's discuss your requirements and bring your vision to life.</p>
          <button
            onClick={() => (window.location.href = "/contact")}
            className="px-8 py-3 bg-[#051614] text-white font-bold rounded-lg hover:bg-black transition"
          >
            Request a Consultation
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}