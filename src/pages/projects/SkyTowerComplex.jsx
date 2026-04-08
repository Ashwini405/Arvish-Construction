import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import ScrollToTop from '../../components/ScrollToTop';

const CommercialOfficeProject = () => {
  const navigate = useNavigate();

  const stats = [
    { value: '40,000', label: 'sq ft Area', accent: true },
    { value: '1', label: 'Building', accent: false },
    { value: '2024', label: 'Completed', accent: true },
    { value: 'Hyderabad', label: 'Location', accent: false },
  ];

  const timeline = [
    { year: '2023', title: 'Planning', desc: 'Project planning, design, and site preparation.' },
    { year: '2023', title: 'Foundation Work', desc: 'Foundation and structural base construction.' },
    { year: '2024', title: 'Structure Completion', desc: 'Main building structure completed.' },
    { year: '2024', title: 'Finishing', desc: 'Interior and exterior finishing works.' },
    { year: '2024', title: 'Project Handover', desc: 'Final inspection and project delivery.' },
  ];

  const gallery = [
    'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&h=800&fit=crop',
    'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&h=800&fit=crop',
    'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&h=800&fit=crop',
    'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=1200&h=800&fit=crop',
    'https://images.unsplash.com/photo-1517457373958-b7bdd4587206?w=1200&h=800&fit=crop',
    'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1200&h=800&fit=crop',
  ];

  return (
    <>
      <ScrollToTop />
      <div className="min-h-screen bg-white overflow-hidden">
        <Navbar />

        {/* Animated Background Orbs */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-20 -left-20 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-float" />
          <div className="absolute bottom-20 -right-20 w-96 h-96 bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-float-delayed" />
        </div>

        {/* HERO SECTION */}
        <section className="relative pt-32 pb-24 overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=2000&h=1200&fit=crop"
              alt="Commercial Office Building Project"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-indigo-900/70 to-slate-900/80" />
          </div>
          <div className="relative z-10 container mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-3 mb-6">
                <div className="w-8 h-0.5 bg-white/50 rounded-full" />
                <span className="text-xs font-bold text-white/80 uppercase tracking-wider">
                  Hyderabad • Commercial Project
                </span>
                <div className="w-8 h-0.5 bg-white/50 rounded-full" />
              </div>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight">
                Commercial Office
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto mb-12 leading-relaxed">
                A commercial office building designed to support modern business operations with efficient layouts, durable construction, and practical design.
              </p>

            

              
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
                  Functional and Modern<br />
                  <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                    Commercial Spaces
                  </span>
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  This project focuses on creating a practical and efficient office space suitable for business operations. The building is designed with proper planning, ensuring durability, functionality, and ease of use.
                </p>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-900 text-lg mb-1">Efficient Layout Design</h4>
                      <p className="text-gray-500">
                        Optimized office spaces for better productivity and usage.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-900 text-lg mb-1">Quality Construction</h4>
                      <p className="text-gray-500">
                        Built using reliable materials ensuring strength and durability.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-900 text-lg mb-1">Practical Infrastructure</h4>
                      <p className="text-gray-500">
                        Includes essential facilities like parking and utility support.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
                className="relative"
              >
                <img
                  src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=1000&fit=crop"
                  alt="Prestige Business Park rendering"
                  className="w-full h-auto rounded-2xl shadow-2xl"
                />
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/10 via-transparent to-indigo-500/10 rounded-2xl blur-xl" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* TIMELINE */}
        <section className="py-24 px-6 bg-gradient-to-r from-blue-50 to-indigo-50">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center gap-3 mb-4">
                <div className="w-8 h-0.5 bg-blue-600 rounded-full" />
                <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">
                  Project Timeline
                </span>
                <div className="w-8 h-0.5 bg-blue-600 rounded-full" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2">
                From Vision to Reality
              </h2>
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
                        className={`p-6 rounded-xl bg-white shadow-md hover:shadow-lg transition-all ${
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

export default CommercialOfficeProject;