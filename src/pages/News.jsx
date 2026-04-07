import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import {
  Calendar,
  Tag,
  ArrowRight,
  Mail,
  Send,
} from "lucide-react";

export default function News() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const news = [
    {
      title: "New Residential Project Successfully Completed in Hyderabad",
      date: "June 12, 2026",
      tag: "Project",
      desc: "Arvish Constructions has successfully completed a modern residential project in Hyderabad, delivering quality construction with timely execution.",
      image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800",
    },
    {
      title: "Expansion of Commercial Construction Services",
      date: "May 28, 2026",
      tag: "Business",
      desc: "We are expanding our commercial construction services to meet the growing demand for office and retail spaces in Hyderabad.",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800",
    },
    {
      title: "Focus on Sustainable Construction Practices",
      date: "May 10, 2026",
      tag: "Sustainability",
      desc: "Arvish Constructions is adopting eco-friendly materials and efficient construction methods to reduce environmental impact.",
      image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800",
    },
    {
      title: "Industrial Project Development in Telangana",
      date: "April 18, 2026",
      tag: "Project",
      desc: "Our team has started a new industrial infrastructure project in Telangana with advanced construction techniques.",
      image: "https://img.indiafilings.com/learn/wp-content/uploads/2020/01/Telangana-State-Industrial-Policy.jpg",
    },
    {
      title: "Improving Project Delivery with Modern Techniques",
      date: "March 25, 2026",
      tag: "Technology",
      desc: "We are implementing modern construction technologies to improve efficiency, reduce delays, and ensure better project outcomes.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800",
    },
    {
      title: "Commitment to Quality and Client Satisfaction",
      date: "March 5, 2026",
      tag: "Quality",
      desc: "Arvish Constructions continues to focus on delivering high-quality projects with strong attention to detail and customer satisfaction.",
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800",
    },
  ];

  const tagColor = {
    Project: "bg-blue-100 text-blue-700",
    Business: "bg-indigo-100 text-indigo-700",
    Sustainability: "bg-green-100 text-green-700",
    Technology: "bg-purple-100 text-purple-700",
    Quality: "bg-amber-100 text-amber-700",
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 3000);
    }
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
      <section className="relative min-h-[450px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="News header"
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
              <span className="text-xs font-bold text-white/80 uppercase tracking-wider">Latest Updates</span>
              <div className="w-8 h-0.5 bg-white/50 rounded-full"></div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mt-4 mb-4">Latest Updates</h1>
            <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
              Stay informed with the latest project updates, company milestones, and construction insights from Arvish Constructions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* News Grid */}
      <div className="relative max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {news.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-blue-200 hover:-translate-y-2"
            >
              <div className="h-56 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <span className={`text-xs font-bold px-3 py-1 rounded-full ${tagColor[item.tag]}`}>
                    {item.tag}
                  </span>
                  <span className="text-xs text-gray-400 flex items-center gap-1">
                    <Calendar size={12} /> {item.date}
                  </span>
                </div>
                <h2 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
                  {item.title}
                </h2>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">{item.desc}</p>
                <button className="text-sm font-bold text-blue-600 hover:underline inline-flex items-center gap-1 group/btn">
                  Read More <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                </button>
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
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
}