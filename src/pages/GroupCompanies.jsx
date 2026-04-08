import { motion } from "framer-motion";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import {
  Building2,
  Paintbrush,
  Wrench,
  Leaf,
  Globe,
  ArrowRight,
} from "lucide-react";

export default function GroupCompanies() {
  const companies = [
    {
      name: "Construction Division",
      sector: "Core Construction",
      desc: "Handles residential, commercial, and infrastructure construction projects with a focus on quality and timely execution.",
      est: "Active",
      icon: Building2,
      image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600",
    },
    {
      name: "Interior & Design",
      sector: "Design Services",
      desc: "Provides modern interior design solutions and space planning for residential and commercial projects.",
      est: "Active",
      icon: Paintbrush,
      image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=600",
    },
    {
      name: "Project Management",
      sector: "Operations",
      desc: "Ensures efficient planning, execution, and delivery of construction projects with proper coordination.",
      est: "Active",
      icon: Wrench,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqXQiZMWex0ARXvyc9eokOoLgNJwpHMT_5Qw&s",
    },
    {
      name: "Maintenance & Support",
      sector: "Post Construction",
      desc: "Provides ongoing maintenance, inspections, and support services after project completion.",
      est: "Active",
      icon: Wrench,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDUA1LtjqKCoMW5CyBMxVQVhaR_KVvFsMzyQ&s",
    },
    {
      name: "Sustainable Solutions",
      sector: "Eco Construction",
      desc: "Focuses on eco-friendly construction practices and energy-efficient building solutions.",
      est: "Active",
      icon: Leaf,
      image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=600",
    },
  ];

  const stats = [
    { value: "5", label: "Core Divisions", icon: Building2 },
    { value: "9+", label: "Years Experience", icon: "⏱️" },
    { value: "25+", label: "Team Members", icon: "👥" },
    { value: "100%", label: "Commitment", icon: Globe },
  ];

  return (
    <div className="bg-white min-h-screen">
      <Navbar />

      {/* Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 -left-20 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-float"></div>
        <div className="absolute bottom-20 -right-20 w-96 h-96 bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-float-delayed"></div>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-[450px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Group companies header"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-indigo-900/70 to-slate-900/80" />
        </div>
        <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-8 h-0.5 bg-white/50 rounded-full"></div>
              <span className="text-xs font-bold text-white/80 uppercase tracking-wider">Our Services & Divisions</span>
              <div className="w-8 h-0.5 bg-white/50 rounded-full"></div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mt-4 mb-4">Our Divisions</h1>
            <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
              Explore the core divisions of Arvish Constructions that work together to deliver complete construction solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Row */}
      <section className="py-12 px-6 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="text-center bg-white rounded-xl p-5 shadow-sm"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  {typeof stat.icon === "string" ? (
                    <span className="text-2xl">{stat.icon}</span>
                  ) : (
                    <stat.icon size={24} className="text-blue-600" />
                  )}
                </div>
                <p className="text-2xl font-bold text-blue-600">{stat.value}</p>
                <p className="text-xs text-gray-500 mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Companies Grid */}
      <div className="relative max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {companies.map((company, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-blue-200 hover:-translate-y-2"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={company.image}
                  alt={company.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600">
                    <company.icon size={20} />
                  </div>
                  <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">
                    {company.sector}
                  </span>
                </div>
                <h2 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {company.name}
                </h2>
                <p className="text-gray-600 text-sm mb-3">{company.desc}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-400">Est. {company.est}</span>
                  <button className="text-sm font-bold text-blue-600 hover:underline inline-flex items-center gap-1 group/btn">
                    Learn More <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        
      </div>

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