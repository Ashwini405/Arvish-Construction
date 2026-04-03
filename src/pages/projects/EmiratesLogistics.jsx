import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import ScrollToTop from '../../components/ScrollToTop';

const EmiratesLogistics = () => {
  const navigate = useNavigate();

  const stats = [
    { value: '2.1M', label: 'sq m Development', accent: true },
    { value: '18', label: 'Warehouse Blocks', accent: false },
    { value: 'Ongoing', label: 'Status', accent: true },
    { value: 'Dubai, UAE', label: 'Location', accent: false },
  ];

  const timeline = [
    { year: '2023 Q3', title: 'Site Preparation', desc: 'Land clearing, geotechnical investigation, and utility coordination completed.' },
    { year: '2024 Q1', title: 'Infrastructure', desc: 'Road network, drainage systems, and power substation construction underway.' },
    { year: '2024 Q2', title: 'First Phase Warehouses', desc: 'Block A-F foundations cast, steel structure erection commencing.' },
    { year: '2024 Q4', title: 'Phase 1 Complete', desc: '6 warehouse blocks operational with full racking and mezzanine fitout.' },
    { year: '2025 Q2', title: 'Full Completion', desc: 'All 18 blocks, cold storage, and admin facilities operational.' },
  ];

  const gallery = [
    'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&h=800&fit=crop',
    'https://images.unsplash.com/photo-1581091226825-a6a2a5e169c5?w=1200&h=800&fit=crop',
    'https://images.unsplash.com/photo-1562808588-e69b8e4f9587?w=1200&h=800&fit=crop',
    'https://images.unsplash.com/photo-1501183638710-841dd1904471?w=1200&h=800&fit=crop',
    'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=800&fit=crop',
    'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=1200&h=800&fit=crop',
  ];

  const capacities = [
    { type: 'Standard Warehouse', area: '850K sqm', bays: '120', height: '12m' },
    { type: 'Cold Storage', area: '120K sqm', temp: '-20°C to +4°C', bays: '18' },
    { type: 'Cross-Dock', area: '95K sqm', doors: '248', automation: 'Full AS/RS' },
    { type: 'Hazardous Goods', area: '45K sqm', compliance: 'ATEX Zone 2', bays: '12' },
  ];

  return (
    <>
      <ScrollToTop />
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-gray-900/50 to-orange-900/20 text-white overflow-hidden">
        <Navbar />
        
        {/* HERO */}
        <section className="relative pt-32 pb-24 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-gray-900/30 to-slate-900/90" />
            <img 
              src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=2000&h=1200&fit=crop" 
              alt="Emirates Logistics Park" 
              className="w-full h-full object-cover object-center"
            />
          </div>
          
          <div className="relative z-10 container mx-auto px-6 text-center">
            <span className="inline-flex items-center px-6 py-3 rounded-full text-xs font-bold uppercase tracking-widest bg-gradient-to-r from-orange-500/20 via-amber-500/20 to-orange-500/20 border border-orange-500/40 text-orange-100 mb-8">
              Mega Logistics Park • Dubai Logistics Corridor
            </span>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold bg-gradient-to-r from-white via-gray-100 to-slate-200 bg-clip-text text-transparent mb-6 leading-tight">
              Emirates<br />
              <span className="text-5xl md:text-6xl lg:text-7xl bg-gradient-to-r from-orange-400 via-amber-500 to-orange-600 bg-clip-text text-transparent">Logistics Park</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto mb-12 leading-relaxed">
              Next-generation logistics mega-hub spanning 2.1 million sqm with 18 smart warehouses, 
              full automation, and hazardous goods capability on Dubai's strategic logistics corridor.
            </p>
            
            <div className="flex flex-wrap justify-center gap-8 mb-20">
              {stats.map((stat, idx) => (
                <div key={idx} className="text-center">
                  <div className={`text-4xl md:text-5xl font-black ${stat.accent ? 'bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent' : 'text-white/95'}`}>
                    {stat.value}
                  </div>
                  <div className="text-sm uppercase tracking-wider text-slate-400 mt-3 font-semibold">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button 
                onClick={() => navigate('/enquire')}
                className="px-16 py-5 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-400 hover:to-amber-400 text-slate-900 font-bold text-lg rounded-3xl shadow-2xl hover:shadow-orange-500/25 hover:-translate-y-1 transition-all duration-300 uppercase tracking-widest"
              >
                Facility Leasing
              </button>
              <button 
                onClick={() => navigate('/projects')}
                className="px-14 py-5 border-2 border-slate-300/60 hover:border-orange-400 text-white font-bold text-lg rounded-3xl hover:bg-orange-500/10 backdrop-blur-sm hover:-translate-y-1 transition-all duration-300 uppercase tracking-wide"
              >
                ← View Portfolio
              </button>
            </div>
          </div>
        </section>

        {/* SPECIFICATIONS */}
        <section className="py-28 bg-slate-900/40">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-24">
                <span className="inline-block px-8 py-4 rounded-2xl text-lg font-bold uppercase tracking-widest bg-gradient-to-r from-orange-500/15 to-amber-500/15 border border-orange-500/30 text-orange-150">
                  Infrastructure Scale
                </span>
                <h2 className="text-5xl md:text-6xl font-bold text-white mt-8 mb-12 leading-tight">
                  Industrial Engineering<br />
                  <span className="bg-gradient-to-r from-orange-400 via-amber-500 to-orange-600 bg-clip-text text-transparent">at Scale</span>
                </h2>
              </div>

              <div className="grid lg:grid-cols-2 gap-12 mb-20">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-8">Warehouse Specifications</h3>
                  <div className="space-y-6">
                    {capacities.map((spec, idx) => (
                      <div key={idx} className="group p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl hover:border-orange-400/50 hover:bg-orange-500/5 transition-all duration-500 hover:-translate-y-2">
                        <div className="flex items-start justify-between mb-4">
                          <h4 className="text-2xl font-bold text-orange-300 group-hover:text-orange-200">{spec.type}</h4>
                          <span className="text-3xl font-black text-orange-400">{spec.area}</span>
                        </div>
                        <div className="grid grid-cols-3 gap-6 text-sm text-slate-400">
                          <div>{spec.bays || spec.doors} Bays</div>
                          <div>{spec.height || spec.temp}</div>
                          <div>{spec.compliance || 'Automated'}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-8">
                  <div className="p-10 rounded-4xl bg-gradient-to-br from-orange-500/5 to-amber-500/5 border-2 border-orange-400/20 shadow-2xl backdrop-blur-xl">
                    <h4 className="text-3xl font-bold text-white mb-6">Scale & Capacity</h4>
                    <ul className="space-y-4 text-lg text-slate-300">
                      <li className="flex items-center gap-4">📏 <span>2.1M sqm total site area</span></li>
                      <li className="flex items-center gap-4">🚚 <span>15km internal road network</span></li>
                      <li className="flex items-center gap-4">⚡ <span>50MW dedicated power substation</span></li>
                      <li className="flex items-center gap-4">💧 <span>Zero discharge water recycling</span></li>
                      <li className="flex items-center gap-4">🔒 <span>24/7 AI security perimeter</span></li>
                    </ul>
                  </div>

                  <div className="grid grid-cols-2 gap-6 p-8 rounded-3xl bg-white/3 border border-white/10 backdrop-blur-xl">
                    <div>
                      <div className="text-4xl font-black text-orange-400 mb-2">Phase 1</div>
                      <div className="text-slate-400">Q2 2024</div>
                      <div className="text-sm text-slate-500 mt-2">6 warehouses operational</div>
                    </div>
                    <div>
                      <div className="text-4xl font-black text-orange-400 mb-2">Full Site</div>
                      <div className="text-slate-400">Q2 2025</div>
                      <div className="text-sm text-slate-500 mt-2">18 warehouses + support infra</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* TIMELINE */}
        <section className="py-24">
          <div className="container mx-auto px-6 max-w-5xl">
            <div className="text-center mb-24">
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-slate-100 to-orange-200 bg-clip-text text-transparent">
                Construction Timeline
              </h2>
              <p className="text-xl text-slate-400 mt-6 max-w-3xl mx-auto">
                Phased mega-project delivery for uninterrupted operations
              </p>
            </div>

            <div className="relative">
              <div className="absolute left-8 lg:left-1/2 w-1.5 h-full bg-gradient-to-b from-orange-400 via-amber-400 to-orange-500 rounded-full shadow-xl transform -translate-x-1/2 lg:translate-x-0" />
              
              <div className="space-y-16">
                {timeline.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-12 lg:gap-24">
                    <div className={`flex-1 p-10 rounded-4xl shadow-2xl backdrop-blur-xl border
                      ${idx % 2 === 0 
                        ? 'bg-gradient-to-r from-amber-500/8 via-orange-400/3 to-amber-500/8 border-amber-400/30 ml-auto order-2 lg:order-1'
                        : 'bg-gradient-to-r from-orange-500/8 via-amber-500/3 to-orange-500/8 border-orange-400/30 order-1 lg:order-2'
                      }`}
                    >
                      <div className="flex items-center gap-6 mb-8">
                        <div className="w-24 h-24 bg-gradient-to-br from-orange-400 to-amber-500 rounded-3xl flex items-center justify-center font-mono font-bold text-2xl text-slate-900 shadow-2xl border-4 border-white/20">
                          {item.year}
                        </div>
                        <div>
                          <h4 className="text-3xl font-bold text-white mb-2">{item.title}</h4>
                        </div>
                      </div>
                      <p className="text-xl text-slate-300 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* GALLERY */}
        <section className="py-24 bg-slate-900/60">
          <div className="container mx-auto px-6">
            <div className="text-center mb-24">
              <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-slate-100 via-orange-100 to-slate-100 bg-clip-text text-transparent">
                Site Progress
              </h2>
            </div>
            
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 max-w-none">
              {gallery.map((img, idx) => (
                <div 
                  key={idx}
                  className="group relative h-96 rounded-4xl overflow-hidden shadow-2xl bg-gradient-to-br from-slate-900/70 to-transparent backdrop-blur-xl border border-orange-400/20 hover:border-orange-500/50 transition-all duration-700 hover:shadow-orange-500/40 hover:-translate-y-4 hover:scale-[1.03]"
                >
                  <img 
                    src={img} 
                    alt={`Logistics Park ${idx + 1}`}
                    className="absolute inset-0 w-full h-full object-cover transition-all duration-1000 group-hover:scale-115"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex flex-col justify-end p-10">
                    <div className="bg-white/95 backdrop-blur-xl rounded-3xl p-8 shadow-2xl transform translate-y-16 group-hover:translate-y-0 transition-all duration-700 w-full max-w-md mx-auto">
                      <span className="block text-4xl font-black text-orange-500 mb-4">Phase {idx + 1}</span>
                      <span className="text-xl font-bold text-slate-900 uppercase tracking-wider block opacity-90">Construction Update</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-32 text-center bg-gradient-to-t from-slate-950 to-gray-900/50">
          <div className="container mx-auto px-6 max-w-4xl relative z-10">
            <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white via-slate-100 to-orange-200 bg-clip-text text-transparent mb-8 leading-tight">
              Industrial Powerhouse<br />
              <span className="bg-gradient-to-r from-orange-400 via-amber-500 to-orange-600 bg-clip-text text-transparent">Ready for Scale</span>
            </h2>
            <p className="text-2xl md:text-3xl text-slate-300 mb-16 max-w-3xl mx-auto leading-relaxed">
              2.1M sqm logistics ecosystem engineered for the future of global supply chains.
            </p>
            <div className="flex flex-col xl:flex-row gap-8 justify-center items-center">
              <button 
                onClick={() => navigate('/enquire')}
                className="px-20 py-8 bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 hover:from-orange-400 hover:via-amber-400 hover:to-orange-500 text-slate-900 font-bold text-xl rounded-4xl shadow-2xl hover:shadow-orange-500/50 hover:-translate-y-4 transition-all duration-700 uppercase tracking-widest"
              >
                Lease Space Now
              </button>
              <button 
                onClick={() => navigate('/services/industrial')}
                className="px-20 py-8 border-4 border-orange-400/60 hover:border-orange-300 text-orange-100 font-bold text-xl rounded-4xl hover:bg-orange-500/20 backdrop-blur-3xl hover:-translate-y-4 transition-all duration-700 uppercase tracking-widest hover:text-orange-50"
              >
                Industrial Services →
              </button>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default EmiratesLogistics;

