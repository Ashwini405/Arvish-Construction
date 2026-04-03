import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import ScrollToTop from '../../components/ScrollToTop';

const SkyTowerComplex = () => {
  const navigate = useNavigate();

  const stats = [
    { value: '850K', label: 'sq ft Built Area', accent: true },
    { value: '52', label: 'Storeys', accent: false },
    { value: '2024', label: 'Completion', accent: true },
    { value: 'Dubai, UAE', label: 'Location', accent: false },
  ];

  const timeline = [
    { year: '2022', title: 'Design Phase', desc: 'Architectural concept and structural engineering completed with BIM modeling.' },
    { year: '2023 Q1', title: 'Foundation', desc: 'Deep pile foundation system installed to support 52-storey structure.' },
    { year: '2023 Q3', title: 'Superstructure', desc: 'Core and perimeter columns reaching 40th floor with precast elements.' },
    { year: '2024 Q1', title: 'Envelope Complete', desc: 'Curtain wall system installed with double-glazed unitized facade.' },
    { year: '2024 Q2', title: 'Completion', desc: 'Final fit-out, MEP commissioning, and handover to client.' },
  ];

  const gallery = [
    'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1200&h=800&fit=crop',
    'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1200&h=800&fit=crop',
    'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&h=800&fit=crop',
    'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200&h=800&fit=crop',
    'https://images.unsplash.com/photo-1531297484001-8002211f4d49?w=1200&h=800&fit=crop',
    'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=800&fit=crop',
  ];

  return (
    <>
      <ScrollToTop />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900/20 to-slate-900 text-white overflow-hidden">
        <Navbar />
        
        {/* HERO SECTION */}
        <section className="relative pt-20 xs:pt-28 pb-16 xs:pb-20 lg:pt-32 lg:pb-24 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-blue-900/20 to-slate-900/80" />
            <img 
              src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=2000&h=1200&fit=crop" 
              alt="Sky Tower Complex" 
              className="w-full h-full object-cover object-center scale-105"
            />
          </div>
          
          <div className="relative z-10 container mx-auto px-6 text-center">
            <span className="inline-flex items-center px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-yellow-400/20 to-orange-400/20 border border-yellow-400/30 text-yellow-100 mb-8">
              Commercial Tower • Dubai, UAE
            </span>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold bg-gradient-to-r from-white via-slate-100 to-slate-200 bg-clip-text text-transparent mb-6 leading-tight">
              Sky Tower<br />
              <span className="text-5xl md:text-6xl lg:text-7xl bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent">Complex</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto mb-12 leading-relaxed">
              A 52-storey landmark commercial tower redefining Dubai's skyline with sustainable design, 
              premium Grade-A office spaces, and world-class amenities.
            </p>
            
            <div className="flex flex-wrap justify-center gap-8 mb-16">
              {stats.map((stat, idx) => (
                <div key={idx} className="text-center">
                  <div className={`text-4xl md:text-5xl font-black ${stat.accent ? 'bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent' : 'text-white'}`}>
                    {stat.value}
                  </div>
                  <div className="text-sm uppercase tracking-wider text-slate-400 mt-2 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button 
                onClick={() => navigate('/enquire')}
                className="px-12 py-4 bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-400 hover:to-orange-400 text-slate-900 font-bold text-lg rounded-2xl shadow-2xl hover:shadow-yellow-500/25 hover:-translate-y-1 transition-all duration-300 uppercase tracking-wider"
              >
                Get Quote
              </button>
              <button 
                onClick={() => navigate('/projects')}
                className="px-12 py-4 border-2 border-slate-300/50 hover:border-white text-white font-bold text-lg rounded-2xl hover:bg-white/10 backdrop-blur-sm hover:-translate-y-1 transition-all duration-300 uppercase tracking-wider"
              >
                ← View All Projects
              </button>
            </div>
          </div>
        </section>

        {/* PROJECT OVERVIEW */}
        <section className="section-padding bg-slate-900/50">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="inline-block px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-yellow-400/20 to-orange-400/20 border border-yellow-400/30 text-yellow-200 mb-8">
                  Project Overview
                </span>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
                  Redefining<br />
                  <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent">Dubai's Skyline</span>
                </h2>
                <p className="text-lg text-slate-300 leading-relaxed mb-8">
                  Sky Tower Complex represents the pinnacle of modern commercial architecture. 
                  This 52-storey Grade-A office tower combines innovative sustainable design 
                  with premium office spaces and world-class amenities, setting a new benchmark 
                  for commercial real estate in Dubai.
                </p>
                <div className="space-y-4 mb-12">
                  <div className="flex items-start gap-4">
                    <div className="w-2 h-2 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full mt-2 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-white text-lg mb-2">LEED Gold Certified</h4>
                      <p className="text-slate-400">Achieved LEED Gold certification through energy-efficient systems, sustainable materials, and water conservation measures.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-2 h-2 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full mt-2 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-white text-lg mb-2">52 Connected Floors</h4>
                      <p className="text-slate-400">High-speed elevators serving 52 office floors plus 6 levels of premium parking and retail podium.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-2 h-2 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full mt-2 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-white text-lg mb-2">Sky Observatory</h4>
                      <p className="text-slate-400">Level 52 features a 360° observatory lounge with panoramic views of Dubai Marina and Palm Jumeirah.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=1000&fit=crop" 
                  alt="Sky Tower rendering" 
                  className="w-full h-auto rounded-3xl shadow-2xl"
                />
                <div className="absolute -inset-4 bg-gradient-to-r from-yellow-500/10 via-transparent to-orange-500/10 rounded-3xl blur-xl opacity-75" />
              </div>
            </div>
          </div>
        </section>

        {/* TIMELINE */}
        <section className="section-padding">
          <div className="container mx-auto px-6">
            <div className="text-center mb-24">
              <span className="inline-block px-6 py-3 rounded-full text-sm font-bold uppercase tracking-wider bg-gradient-to-r from-blue-500/10 to-indigo-500/10 border-2 border-blue-500/20 text-blue-200 mb-8">
                Project Timeline
              </span>
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-slate-100 to-slate-300 bg-clip-text text-transparent mb-6">
                From Vision to Reality
              </h2>
            </div>

            <div className="relative max-w-4xl mx-auto">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-yellow-400 via-orange-400 to-yellow-400" />
              
              <div className="space-y-12">
                {timeline.map((item, idx) => (
                  <div key={idx} className={`flex items-center ${idx % 2 === 0 ? 'flex-row-reverse justify-end' : 'justify-start'}`}>
                    <div className={`w-5/12 p-8 rounded-3xl shadow-xl backdrop-blur-sm
                      ${idx % 2 === 0 
                        ? 'bg-gradient-to-r from-orange-500/10 via-yellow-400/5 to-orange-500/10 border border-orange-400/30 ml-auto' 
                        : 'bg-gradient-to-r from-blue-500/10 via-indigo-500/5 to-blue-500/10 border border-blue-400/30'
                      }`}
                    >
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-2xl flex items-center justify-center font-bold text-slate-900 text-xl shadow-2xl">
                          {item.year}
                        </div>
                        <div>
                          <h4 className="text-2xl font-bold text-white">{item.title}</h4>
                        </div>
                      </div>
                      <p className="text-slate-300 leading-relaxed">{item.desc}</p>
                    </div>
                    <div className="w-1/2" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* GALLERY */}
        <section className="section-padding bg-slate-900/30">
          <div className="container mx-auto px-6">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-slate-100 via-blue-100 to-slate-100 bg-clip-text text-transparent mb-6">
                Visual Journey
              </h2>
              <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                Every phase captured — from foundation pouring to the final curtain wall installation
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
              {gallery.map((img, idx) => (
                <div key={idx} className="group relative overflow-hidden rounded-3xl shadow-2xl hover:shadow-yellow-500/20 transition-all duration-500 hover:-translate-y-2 hover:scale-105">
                  <img 
                    src={img} 
                    alt={`Project gallery ${idx + 1}`}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <span className="bg-white/90 text-slate-900 px-4 py-2 rounded-full text-sm font-bold backdrop-blur-sm">
                      View Full Size
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA SECTION */}
        <section className="section-padding text-center">
          <div className="container mx-auto px-6 max-w-4xl">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-slate-100 to-slate-200 bg-clip-text text-transparent mb-6">
              Ready to Build<br />
              <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">Your Vision?</span>
            </h2>
            <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto leading-relaxed">
              Sky Tower Complex proves our ability to deliver landmark commercial projects on time, 
              on budget, and to the highest international standards.
            </p>
            <div className="flex flex-col lg:flex-row gap-6 justify-center items-center">
              <button 
                onClick={() => navigate('/enquire')}
                className="px-16 py-6 bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 hover:from-yellow-400 hover:via-orange-400 hover:to-red-400 text-slate-900 font-bold text-xl rounded-3xl shadow-2xl hover:shadow-yellow-500/50 hover:-translate-y-2 transition-all duration-500 uppercase tracking-wide"
              >
                Start Your Project
              </button>
              <button 
                onClick={() => navigate('/contact')}
                className="px-16 py-6 border-4 border-white/20 hover:border-white text-white font-bold text-xl rounded-3xl hover:bg-white/10 backdrop-blur-xl hover:-translate-y-2 transition-all duration-500 uppercase tracking-wide"
              >
                Contact Expert Team
              </button>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default SkyTowerComplex;

