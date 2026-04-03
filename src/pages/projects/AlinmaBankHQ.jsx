import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import ScrollToTop from '../../components/ScrollToTop';

const AlinmaBankHQ = () => {
  const navigate = useNavigate();

  const stats = [
    { value: '430K', label: 'sq ft GFA', accent: true },
    { value: '28', label: 'Floors', accent: false },
    { value: '2024', label: 'Delivered', accent: true },
    { value: 'Riyadh, KSA', label: 'Location', accent: false },
  ];

  const timeline = [
    { year: '2021', title: 'Concept Design', desc: 'Architectural vision established with parametric modeling and sustainability analysis.' },
    { year: '2022 Q2', title: 'Detailed Design', desc: 'Complete working drawings, MEP coordination, and regulatory approvals secured.' },
    { year: '2023 Q1', title: 'Construction Start', desc: 'Excavation complete, foundation work commenced with secant pile wall system.' },
    { year: '2023 Q4', title: 'Structure Complete', desc: 'Reaching roof level with composite steel-concrete floor system.' },
    { year: '2024 Q2', title: 'Handover', desc: 'Final commissioning of building management systems and client move-in.' },
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
    { icon: '🏦', title: 'Tier-1 Banking HQ', desc: 'Purpose-built headquarters for Saudi Arabia’s leading digital bank' },
    { icon: '🌿', title: 'Mostadama Platinum', desc: 'Highest sustainability rating in KSA banking sector' },
    { icon: '💻', title: 'Smart Building', desc: 'Integrated BMS with AI-driven energy management' },
    { icon: '⚡', title: '99.99% Uptime', desc: 'Mission-critical data center with N+1 redundancy' },
  ];

  return (
    <>
      <ScrollToTop />
      <div className="min-h-screen bg-gradient-to-br from-emerald-900 via-teal-900/30 to-slate-900 text-white overflow-hidden">
        <Navbar />
        
        {/* HERO */}
        <section className="relative pt-32 pb-24 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900/70 via-emerald-900/20 to-slate-900/80" />
            <img 
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=2000&h=1200&fit=crop" 
              alt="Alinma Bank HQ" 
              className="w-full h-full object-cover object-center scale-[1.02]"
            />
          </div>
          
          <div className="relative z-10 container mx-auto px-6 text-center">
            <span className="inline-flex items-center px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest bg-gradient-to-r from-emerald-400/20 to-teal-400/20 border border-emerald-400/30 text-emerald-100 mb-8">
              Corporate Headquarters • Riyadh KSA
            </span>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold bg-gradient-to-r from-white via-slate-100/90 to-emerald-100 bg-clip-text text-transparent mb-6 leading-tight">
              Alinma Bank<br />
              <span className="text-5xl md:text-6xl lg:text-7xl bg-gradient-to-r from-emerald-400 via-teal-400 to-emerald-500 bg-clip-text text-transparent">Headquarters</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300/90 max-w-3xl mx-auto mb-12 leading-relaxed">
              State-of-the-art global headquarters for Saudi Arabia's premier digital bank. 
              Mostadama Platinum certified with integrated smart building technology.
            </p>
            
            <div className="flex flex-wrap justify-center gap-8 mb-16">
              {stats.map((stat, idx) => (
                <div key={idx} className="text-center">
                  <div className={`text-4xl md:text-5xl font-black ${stat.accent ? 'bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent' : 'text-white/90'}`}>
                    {stat.value}
                  </div>
                  <div className="text-sm uppercase tracking-wider text-slate-400 mt-2 font-semibold">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => navigate('/enquire')}
                className="px-14 py-5 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-900 font-bold text-lg rounded-3xl shadow-2xl hover:shadow-emerald-500/25 hover:-translate-y-1 transition-all duration-300 uppercase tracking-widest"
              >
                Discuss Your Project
              </button>
              <button 
                onClick={() => navigate('/projects')}
                className="px-12 py-4 border-2 border-slate-400/50 hover:border-emerald-300 text-white/90 font-bold text-lg rounded-2xl hover:bg-emerald-500/10 backdrop-blur-sm hover:-translate-y-1 transition-all duration-300 uppercase tracking-wide"
              >
                ← All Projects
              </button>
            </div>
          </div>
        </section>

        {/* FEATURES */}
        <section className="py-24 bg-slate-900/40">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center mb-20">
              <span className="inline-block px-6 py-3 rounded-full text-sm font-bold uppercase tracking-wider bg-gradient-to-r from-emerald-400/15 to-teal-400/15 border-2 border-emerald-400/25 text-emerald-200">
                Key Features
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-white/95 mt-6 mb-8 leading-tight">
                Banking Innovation<br />
                <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-emerald-500 bg-clip-text text-transparent">Meets Architecture</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, idx) => (
                <div key={idx} className="group p-8 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-emerald-400/50 hover:bg-emerald-500/5 transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl hover:shadow-emerald-500/20">
                  <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-4 group-hover:text-emerald-400 transition-colors">
                    {feature.title}
                  </h4>
                  <p className="text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">
                    {feature.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TIMELINE */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/20 to-transparent pointer-events-none" />
          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center mb-24">
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-slate-100 to-emerald-100 bg-clip-text text-transparent mb-6">
                3 Years to Reality
              </h2>
              <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                Delivered on time for KSA's premier digital banking institution
              </p>
            </div>

            <div className="relative max-w-5xl mx-auto">
              <div className="absolute left-1/2 -translate-x-1/2 w-1.5 h-full bg-gradient-to-b from-emerald-400 via-teal-400 to-emerald-500 rounded-full shadow-lg" />
              
              <div className="space-y-16">
                {timeline.map((item, idx) => (
                  <div key={idx} className={`flex items-center gap-12 ${idx % 2 === 0 ? 'flex-row-reverse' : ''}`}>
                    <div className="flex-1 max-w-md">
                      <div className={`p-8 rounded-3xl shadow-2xl backdrop-blur-xl border
                        ${idx % 2 === 0 
                          ? 'bg-gradient-to-br from-teal-500/10 via-emerald-400/5 to-teal-500/10 border-teal-400/40 ml-auto'
                          : 'bg-gradient-to-br from-emerald-500/10 via-teal-400/5 to-emerald-500/10 border-emerald-400/40'
                        }`}
                      >
                        <div className="flex items-center gap-6 mb-8">
                          <div className="w-20 h-20 bg-gradient-to-br from-emerald-400 to-teal-400 rounded-2xl flex items-center justify-center font-mono font-bold text-xl text-slate-900 shadow-2xl">
                            {item.year}
                          </div>
                          <div>
                            <h4 className="text-2xl font-bold text-white mb-1">{item.title}</h4>
                          </div>
                        </div>
                        <p className="text-lg text-slate-300 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                    <div className="w-20 h-20 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-3xl flex items-center justify-center text-2xl font-bold text-slate-900 shadow-2xl ring-8 ring-emerald-500/20 rotate-12 hover:rotate-0 transition-all duration-500 mx-auto" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* GALLERY */}
        <section className="py-24 bg-slate-900/50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-slate-100 via-emerald-100 to-slate-100 bg-clip-text text-transparent">
                Gallery
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {gallery.map((img, idx) => (
                <div 
                  key={idx} 
                  className="group relative overflow-hidden rounded-4xl shadow-2xl bg-gradient-to-br from-slate-800/50 to-transparent backdrop-blur-xl hover:shadow-emerald-500/30 transition-all duration-700 hover:-translate-y-4 hover:scale-[1.02]"
                >
                  <img 
                    src={img} 
                    alt={`Alinma Bank HQ ${idx + 1}`}
                    className="w-full h-80 object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end p-8">
                    <div className="bg-white/95 text-slate-900 p-6 rounded-2xl backdrop-blur-xl shadow-2xl w-full transform translate-y-8 group-hover:translate-y-0 transition-all duration-500">
                      <span className="text-3xl font-bold block mb-2">Project {idx + 1}</span>
                      <span className="text-sm font-mono uppercase tracking-wider opacity-75">Progress Capture</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="py-24">
          <div className="container mx-auto px-6 max-w-4xl">
            <div className="text-center mb-20">
              <span className="inline-block px-8 py-4 rounded-2xl text-lg font-bold uppercase tracking-widest bg-gradient-to-r from-emerald-400/20 to-teal-400/20 border border-emerald-400/30 text-emerald-100 px-6 py-3">
                Client Success
              </span>
              <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white to-emerald-100 bg-clip-text text-transparent mt-8">
                "Transformational<br />
                <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">Partnership"</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <blockquote className="p-12 rounded-3xl bg-gradient-to-br from-emerald-500/5 via-teal-500/3 to-emerald-500/5 border border-emerald-400/20 shadow-2xl backdrop-blur-xl">
                <div className="flex items-start gap-6 mb-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-emerald-400 to-teal-400 rounded-2xl flex items-center justify-center font-bold text-2xl text-slate-900 shadow-xl">
                    AA
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-white mb-2">Abdulrahman Al-Abdulwahed</h4>
                    <p className="text-emerald-300 font-semibold text-lg">CEO, Alinma Bank</p>
                  </div>
                </div>
                <p className="text-xl text-slate-200 leading-relaxed mb-8 opacity-90">
                  "The new headquarters embodies our vision for digital banking innovation while 
                  setting new standards for sustainable corporate architecture in the Kingdom. 
                  Exceptional delivery on all fronts."
                </p>
                <div className="flex items-center gap-4 text-emerald-400 text-sm font-bold uppercase tracking-wider">
                  <span>🏆 Mostadama Platinum</span>
                  <span>⭐ 5.0 Client Rating</span>
                </div>
              </blockquote>

              <div className="space-y-8">
                <div className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl hover:border-emerald-400/50 hover:bg-emerald-500/5 transition-all">
                  <h5 className="text-xl font-bold text-emerald-300 mb-4 uppercase tracking-wide">Key Metrics</h5>
                  <div className="space-y-4 text-lg">
                    <div className="flex justify-between"><span>BMS Integration</span><span>100%</span></div>
                    <div className="flex justify-between"><span>Energy Savings</span><span>38%</span></div>
                    <div className="flex justify-between"><span>Water Efficiency</span><span>45%</span></div>
                    <div className="flex justify-between"><span>Carbon Footprint</span><span>-62%</span></div>
                  </div>
                </div>

                <div className="p-8 rounded-3xl bg-gradient-to-r from-emerald-500/10 to-teal-500/10 border border-emerald-400/30 shadow-xl hover:shadow-emerald-500/30 transition-all">
                  <h5 className="text-xl font-bold text-white mb-6 uppercase tracking-wide">Technical Excellence</h5>
                  <ul className="space-y-3 text-slate-300">
                    <li className="flex items-center gap-3">✓ Saudi Green Building Forum Platinum</li>
                    <li className="flex items-center gap-3">✓ 100% BIM Level 2 Implementation</li>
                    <li className="flex items-center gap-3">✓ 5G-ready smart infrastructure</li>
                    <li className="flex items-center gap-3">✓ Earthquake resistant design (Zone 2B)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="py-32 relative overflow-hidden bg-gradient-to-b from-slate-900 to-emerald-900/50">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_20%_80%,rgba(16,185,129,0.15),transparent)]" />
          <div className="container mx-auto px-6 text-center relative z-10 max-w-4xl">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-white via-slate-100 to-emerald-200 bg-clip-text text-transparent mb-8 leading-tight">
              Engineering<br />
              <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-emerald-500 bg-clip-text text-transparent">Excellence</span>
            </h2>
            <p className="text-2xl md:text-3xl text-slate-300/90 mb-16 max-w-3xl mx-auto leading-relaxed opacity-95">
              Ready to transform your vision into architectural reality?
            </p>
            <div className="flex flex-col xl:flex-row gap-8 justify-center items-center">
              <button 
                onClick={() => navigate('/enquire')}
                className="px-20 py-8 bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-600 hover:from-emerald-400 hover:via-teal-400 hover:to-emerald-500 text-slate-900 font-bold text-xl lg:text-2xl rounded-3xl shadow-2xl hover:shadow-emerald-500/50 hover:-translate-y-3 transition-all duration-700 uppercase tracking-widest px-16 py-7"
              >
                Start Consultation
              </button>
              <button 
                onClick={() => navigate('/services')}
                className="px-16 py-7 border-4 border-emerald-400/50 hover:border-emerald-300 text-emerald-200 font-bold text-xl lg:text-xl rounded-3xl hover:bg-emerald-500/20 backdrop-blur-2xl hover:-translate-y-3 transition-all duration-500 uppercase tracking-widest hover:text-white"
              >
                Our Services →
              </button>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default AlinmaBankHQ;

