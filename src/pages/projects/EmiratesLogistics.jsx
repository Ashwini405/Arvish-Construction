import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import ScrollToTop from '../../components/ScrollToTop';

const IndustrialWarehouseProject = () => {
  const navigate = useNavigate();

  const stats = [
    { value: '60,000', label: 'sq ft Area', accent: true },
    { value: '1', label: 'Warehouse Unit', accent: false },
    { value: 'Ongoing', label: 'Status', accent: true },
    { value: 'Telangana', label: 'Location', accent: false },
  ];

  const timeline = [
    { year: '2023', title: 'Planning', desc: 'Project planning and site preparation.' },
    { year: '2023', title: 'Foundation', desc: 'Foundation and base structure completed.' },
    { year: '2024', title: 'Structure', desc: 'Main warehouse structure construction.' },
    { year: '2024', title: 'Finishing', desc: 'Roofing and finishing works.' },
    { year: '2025', title: 'Completion', desc: 'Final inspection and project completion.' },
  ];

  const gallery = [
    'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&h=800&fit=crop',
    'https://images.unsplash.com/photo-1581091226825-a6a2a5e169c5?w=1200&h=800&fit=crop',
    'https://images.unsplash.com/photo-1562808588-e69b8e4f9587?w=1200&h=800&fit=crop',
    'https://images.unsplash.com/photo-1501183638710-841dd1904471?w=1200&h=800&fit=crop',
    'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=800&fit=crop',
    'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=1200&h=800&fit=crop',
  ];

  const features = [
    {
      icon: '🏭',
      title: 'Warehouse Construction',
      desc: 'Designed for efficient storage and logistics operations.',
    },
    {
      icon: '🧱',
      title: 'Durable Structure',
      desc: 'Built with strong materials for long-term industrial use.',
    },
    {
      icon: '📦',
      title: 'Storage Efficiency',
      desc: 'Optimized layouts for easy movement and storage handling.',
    },
    {
      icon: '⚙️',
      title: 'Practical Design',
      desc: 'Designed to support daily industrial operations.',
    },
  ];

  return (
    <>
      <ScrollToTop />
      <div className="bg-white min-h-screen overflow-hidden">
        <Navbar />

        {/* Animated Background Elements */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-20 -left-20 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-float" />
          <div className="absolute bottom-20 -right-20 w-96 h-96 bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-float-delayed" />
        </div>

        {/* HERO SECTION */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=2000&h=1200&fit=crop"
              alt="Industrial Warehouse Project"
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
              <div className="inline-flex items-center gap-3 mb-6">
                <div className="w-8 h-0.5 bg-white/50 rounded-full" />
                <span className="text-xs font-bold text-white/80 uppercase tracking-wider">
                  Telangana • Industrial Project
                </span>
                <div className="w-8 h-0.5 bg-white/50 rounded-full" />
              </div>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight">
                Industrial Warehouse
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto mb-12 leading-relaxed">
                An industrial warehouse project designed for efficient storage, logistics operations, and durable long-term use.
              </p>

             

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => navigate('/enquire')}
                  className="group px-10 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg rounded-full shadow-xl hover:shadow-blue-500/25 hover:-translate-y-1 transition-all duration-300 uppercase tracking-wider flex items-center gap-2"
                >
                  Start Your Project
                  <svg
                    className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
                <button
                  onClick={() => navigate('/projects')}
                  className="px-8 py-4 border-2 border-white/30 hover:border-blue-400 text-white font-bold text-lg rounded-full hover:bg-blue-600/10 backdrop-blur-sm hover:-translate-y-1 transition-all duration-300 uppercase tracking-wide"
                >
                  ← View Portfolio
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* PROJECT OVERVIEW */}
        <section className="py-24 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
              >
                <div className="inline-flex items-center gap-3 mb-4">
                  <div className="w-8 h-0.5 bg-blue-600 rounded-full" />
                  <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">
                    Project Overview
                  </span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-6 leading-tight">
                  Industrial Strength<br />
                  <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                    Warehouse Solution
                  </span>
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  This project focuses on building a strong and practical warehouse suitable for industrial storage and operations. The design ensures durability, efficient space usage, and smooth workflow.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
                className="relative"
              >
                <img
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5e169c5?w=800&h=1000&fit=crop"
                  alt="Industrial Warehouse Project"
                  className="w-full h-auto rounded-2xl shadow-2xl"
                />
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/10 via-transparent to-indigo-500/10 rounded-2xl blur-xl" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* FEATURES SECTION */}
        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <div className="inline-flex items-center gap-3 mb-4">
                <div className="w-8 h-0.5 bg-blue-600 rounded-full"></div>
                <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">Key Features</span>
                <div className="w-8 h-0.5 bg-blue-600 rounded-full"></div>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-4">
                Industrial Strength <br />
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Meets Practical Design</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, idx) => (
                <div
                  key={idx}
                  className="group p-8 rounded-2xl bg-white shadow-md border border-gray-100 hover:border-blue-200 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 animate-fade-in-up"
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {feature.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TIMELINE SECTION */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <div className="inline-flex items-center gap-3 mb-4">
                <div className="w-8 h-0.5 bg-blue-600 rounded-full" />
                <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">
                  Construction Timeline
                </span>
                <div className="w-8 h-0.5 bg-blue-600 rounded-full" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
                Project Timeline
              </h2>
              <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
                Step-by-step construction process for quality delivery
              </p>
            </motion.div>

            <div className="relative">
              <div className="absolute left-1/2 -translate-x-1/2 w-1 h-full bg-blue-200 rounded-full hidden md:block" />
              <div className="space-y-12">
                {timeline.map((item, idx) => (
                  <div
                    key={idx}
                    className={`flex flex-col md:flex-row items-center gap-8 ${
                      idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                    }`}
                  >
                    <div className="flex-1">
                      <div
                        className={`p-6 rounded-xl bg-gray-50 border border-gray-100 shadow-md hover:shadow-lg transition-all ${
                          idx % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
                        }`}
                      >
                        <div className="flex items-center gap-4 mb-3">
                          <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center font-bold text-xl text-white shadow-md">
                            {item.year}
                          </div>
                          <h4 className="text-xl font-bold text-gray-900">{item.title}</h4>
                        </div>
                        <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                    <div className="hidden md:flex w-10 h-10 bg-blue-600 rounded-full items-center justify-center text-white font-bold shadow-md z-10">
                      {idx + 1}
                    </div>
                    <div className="flex-1 hidden md:block" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>


        

        <Footer />

        {/* Custom Animations */}
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
    </>
  );
};

export default IndustrialWarehouseProject;