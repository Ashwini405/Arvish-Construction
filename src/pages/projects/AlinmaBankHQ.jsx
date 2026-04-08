import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import ScrollToTop from '../../components/ScrollToTop';

const ResidentialVillaProject = () => {
  const navigate = useNavigate();

  const stats = [
    { value: '2,500', label: 'sq ft Area', accent: true },
    { value: '2', label: 'Floors', accent: false },
    { value: '2024', label: 'Completed', accent: true },
    { value: 'Hyderabad', label: 'Location', accent: false },
  ];

  const timeline = [
    { year: '2023', title: 'Planning', desc: 'Initial design and site preparation.' },
    { year: '2023', title: 'Foundation', desc: 'Foundation and structural base work completed.' },
    { year: '2024', title: 'Structure', desc: 'Main construction of the villa completed.' },
    { year: '2024', title: 'Finishing', desc: 'Interior and exterior finishing works completed.' },
    { year: '2024', title: 'Handover', desc: 'Final inspection and project delivery.' },
  ];

  const gallery = [
    'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&h=800&fit=crop',
    'https://images.unsplash.com/photo-1558618047-3c8c76ca7e8e?w=1200&h=800&fit=crop',
    'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1200&h=800&fit=crop',
    'https://images.unsplash.com/photo-1517457373958-b7bdd4587206?w=1200&h=800&fit=crop',
    'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1200&h=800&fit=crop',
    'https://images.unsplash.com/photo-1564013588239-35f7913a8f93?w=1200&h=800&fit=crop',
  ];

  const features = [
    { icon: '�', title: 'Modern Home Design', desc: 'Designed with comfortable layouts for daily living.' },
    { icon: '🧱', title: 'Quality Construction', desc: 'Built using strong materials for durability and safety.' },
    { icon: '📐', title: 'Efficient Planning', desc: 'Optimized use of space for better functionality.' },
    { icon: '🚗', title: 'Basic Amenities', desc: 'Includes parking, utilities, and essential facilities.' },
  ];

  return (
    <>
      <ScrollToTop />
      <div className="min-h-screen bg-white overflow-hidden">
        <Navbar />

        {/* Animated Background Elements */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-20 -left-20 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-float"></div>
          <div className="absolute bottom-20 -right-20 w-96 h-96 bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-float-delayed"></div>
        </div>

        {/* HERO SECTION */}
        <section className="relative pt-32 pb-24 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-indigo-900/70 to-slate-900/80" />
            <img 
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=2000&h=1200&fit=crop" 
              alt="Residential Villa Project" 
              className="w-full h-full object-cover object-center"
            />
          </div>
          
          <div className="relative z-10 container mx-auto px-6 text-center">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-8 h-0.5 bg-white/50 rounded-full"></div>
              <span className="text-xs font-bold text-white/80 uppercase tracking-wider">
                Hyderabad • Residential Project
              </span>
              <div className="w-8 h-0.5 bg-white/50 rounded-full"></div>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Residential Villa Project
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto mb-12 leading-relaxed">
              A residential villa designed to provide comfortable living with modern design, quality construction, and practical space planning.
            </p>
            
            

            
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
                Residential Comfort <br />
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Meets Practical Design</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, idx) => (
                <div 
                  key={idx} 
                  className="group p-8 rounded-2xl bg-white shadow-md border border-gray-100 hover:border-blue-200 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 animate-fade-in-up"
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
        <section className="py-24 bg-white relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent pointer-events-none" />
          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-3 mb-4">
                <div className="w-8 h-0.5 bg-blue-600 rounded-full"></div>
                <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">Project Timeline</span>
                <div className="w-8 h-0.5 bg-blue-600 rounded-full"></div>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                3 Years to Reality
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Delivered on time for KSA's premier digital banking institution
              </p>
            </div>

            <div className="relative max-w-5xl mx-auto">
              <div className="absolute left-1/2 -translate-x-1/2 w-1 h-full bg-blue-200 rounded-full hidden md:block" />
              
              <div className="space-y-12">
                {timeline.map((item, idx) => (
                  <div key={idx} className={`flex flex-col md:flex-row items-center gap-8 ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                    <div className="flex-1">
                      <div className={`p-6 rounded-xl bg-gray-50 border border-gray-100 shadow-md hover:shadow-lg transition-all ${idx % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}>
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

        {/* GALLERY SECTION */}
        



       

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
        `}</style>
      </div>
    </>
  );
};

export default ResidentialVillaProject;