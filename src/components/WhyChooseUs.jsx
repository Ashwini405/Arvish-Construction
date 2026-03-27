import React, { useEffect, useRef, useState } from 'react';

function useInView(threshold = 0.1) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, visible];
}

const HEX_CLIP = 'polygon(50% 0%, 93% 25%, 93% 75%, 50% 100%, 7% 75%, 7% 25%)';

const features = [
  { id:'01', label:'Under Commit, Over Deliver',    sub:'We set realistic expectations and consistently exceed them on every project.',                          image:'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&q=80' },
  { id:'02', label:'Employee Loyalty & Safety',      sub:'Our people are our greatest asset — their safety and growth come before everything.',                   image:'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&q=80' },
  { id:'03', label:'Organization Before Self',       sub:'Collective success drives individual purpose — we put the team first, always.',                         image:'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&q=80' },
  { id:'04', label:'Integrity',                      sub:'Transparent, honest, and accountable — in every decision, every day.',                                  image:'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400&q=80' },
  { id:'05', label:'Environmentally Conscious',      sub:'Sustainable practices and green building solutions embedded in every project.',                         image:'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=400&q=80' },
  { id:'06', label:'Client Focus',                   sub:"Every decision is made with the client's vision, timeline, and satisfaction in mind.",                  image:'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&q=80' },
  { id:'07', label:'Teamwork',                       sub:'Unified teams, shared goals — collaboration is the cornerstone of our success.',                        image:'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=400&q=80' },
  { id:'08', label:'Positive Attitude',              sub:'Challenges are opportunities — we approach every obstacle with energy and optimism.',                   image:'https://images.unsplash.com/photo-1543269865-cbf427effbad?w=400&q=80' },
];

// HEX size
const HW = 170; // hex width
const HH = 192; // hex height  (HW * 1.13)

function HexCard({ item, index, visible }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className="flex flex-col items-center gap-2 cursor-default"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0) scale(1)' : 'translateY(40px) scale(0.85)',
        transition: `opacity 0.6s ease ${index * 90}ms, transform 0.6s cubic-bezier(0.34,1.2,0.64,1) ${index * 90}ms`,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative" style={{ width: HW, height: HH }}>
        {/* Gold border hex */}
        <div className="absolute inset-0 transition-all duration-500"
          style={{
            clipPath: HEX_CLIP,
            background: 'linear-gradient(135deg,#D4A13A,#f5c842)',
            transform: hovered ? 'scale(1.07)' : 'scale(1.03)',
            opacity: hovered ? 1 : 0.7,
          }}
        />
        {/* Image hex */}
        <div className="absolute" style={{ inset: 5, clipPath: HEX_CLIP, overflow: 'hidden' }}>
          <img src={item.image} alt={item.label}
            className="w-full h-full object-cover transition-transform duration-700"
            style={{ transform: hovered ? 'scale(1.12)' : 'scale(1.0)' }}
          />
          <div className="absolute inset-0 transition-all duration-500"
            style={{ background: hovered ? 'linear-gradient(to bottom,rgba(5,22,20,0.15),rgba(5,22,20,0.88))' : 'linear-gradient(to bottom,rgba(5,22,20,0.05),rgba(5,22,20,0.6))' }}
          />
          {/* ID badge */}
          <div className="absolute top-4 left-0 right-0 flex justify-center">
            <span className="text-[9px] font-black tracking-widest px-2 py-0.5 rounded-full"
              style={{ background: 'rgba(212,161,58,0.9)', color: '#051614' }}>
              {item.id}
            </span>
          </div>
          {/* label always visible */}
          <div className="absolute bottom-0 left-0 right-0 px-3 pb-4 text-center">
            <p className="text-white font-bold text-[11px] uppercase tracking-wide leading-tight mb-1"
              style={{ color: hovered ? '#f5c842' : 'white' }}>
              {item.label}
            </p>
            <div className="mx-auto h-px bg-[#D4A13A] transition-all duration-500"
              style={{ width: hovered ? 50 : 20 }} />
            <p className="text-white/75 text-[9px] leading-relaxed mt-1.5 transition-all duration-400"
              style={{ opacity: hovered ? 1 : 0, maxHeight: hovered ? 60 : 0, overflow: 'hidden' }}>
              {item.sub}
            </p>
          </div>
        </div>
        {/* outer glow on hover */}
        <div className="absolute -inset-2 pointer-events-none transition-all duration-500 rounded-full"
          style={{ opacity: hovered ? 1 : 0, boxShadow: '0 0 30px rgba(212,161,58,0.4)' }} />
      </div>
    </div>
  );
}

// ── Precise SVG tree connector ──
// Layout (viewBox 1000 x 780):
//   Root center:        (500, 52)
//   Row1 [3 cards]:     (200,200) (500,200) (800,200)
//   Row2 [2 cards]:     (300,400) (700,400)
//   Row3 [3 cards]:     (200,600) (500,600) (800,600)
//   Bottom dot:         (500,740)
function Connectors({ visible }) {
  const stroke = { stroke: '#D4A13A', strokeWidth: 1.5, fill: 'none', strokeLinecap: 'round' };
  const dash = { ...stroke, strokeDasharray: '5 4', strokeOpacity: 0.5 };
  const solid = { ...stroke, strokeOpacity: 0.7 };

  const lineStyle = (delay) => ({
    opacity: visible ? 1 : 0,
    transition: `opacity 0.6s ease ${delay}ms`,
  });

  return (
    <svg viewBox="0 0 1000 780" className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 1 }} preserveAspectRatio="xMidYMid meet">
      <defs>
        <linearGradient id="lg1" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#D4A13A" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#D4A13A" stopOpacity="0.2" />
        </linearGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="2" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>

      {/* ── Root → Row1 ── */}
      {/* root to left */}
      <path d="M500,52 C500,120 200,130 200,200" {...solid} filter="url(#glow)" style={lineStyle(400)} />
      {/* root to center */}
      <line x1="500" y1="52" x2="500" y2="200" {...solid} filter="url(#glow)" style={lineStyle(400)} />
      {/* root to right */}
      <path d="M500,52 C500,120 800,130 800,200" {...solid} filter="url(#glow)" style={lineStyle(400)} />

      {/* ── Row1 horizontal connector ── */}
      <line x1="200" y1="200" x2="800" y2="200" {...dash} style={lineStyle(550)} />

      {/* ── Row1 → Row2 ── */}
      <path d="M200,200 C200,300 300,310 300,400" {...solid} style={lineStyle(600)} />
      <path d="M500,200 C500,280 300,320 300,400" {...solid} style={lineStyle(600)} />
      <path d="M500,200 C500,280 700,320 700,400" {...solid} style={lineStyle(600)} />
      <path d="M800,200 C800,300 700,310 700,400" {...solid} style={lineStyle(600)} />

      {/* ── Row2 horizontal connector ── */}
      <line x1="300" y1="400" x2="700" y2="400" {...dash} style={lineStyle(700)} />

      {/* ── Row2 → Row3 ── */}
      <path d="M300,400 C300,490 200,510 200,600" {...solid} style={lineStyle(750)} />
      <path d="M300,400 C300,490 500,510 500,600" {...solid} style={lineStyle(750)} />
      <path d="M700,400 C700,490 500,510 500,600" {...solid} style={lineStyle(750)} />
      <path d="M700,400 C700,490 800,510 800,600" {...solid} style={lineStyle(750)} />

      {/* ── Row3 horizontal connector ── */}
      <line x1="200" y1="600" x2="800" y2="600" {...dash} style={lineStyle(850)} />

      {/* ── Row3 → Bottom ── */}
      <path d="M200,600 C200,680 500,700 500,740" {...solid} style={lineStyle(900)} />
      <line x1="500" y1="600" x2="500" y2="740" {...solid} style={lineStyle(900)} />
      <path d="M800,600 C800,680 500,700 500,740" {...solid} style={lineStyle(900)} />

      {/* Node dots at each junction */}
      {[[500,52],[200,200],[500,200],[800,200],[300,400],[700,400],[200,600],[500,600],[800,600],[500,740]].map(([x,y],i) => (
        <circle key={i} cx={x} cy={y} r="5" fill="#D4A13A" opacity="0.9" filter="url(#glow)"
          style={{ opacity: visible ? 0.9 : 0, transition: `opacity 0.4s ease ${400 + i * 80}ms` }} />
      ))}
    </svg>
  );
}

const WhyChooseUs = () => {
  const [sectionRef, visible] = useInView(0.06);
  const row1 = features.slice(0, 3);
  const row2 = features.slice(3, 5);
  const row3 = features.slice(5, 8);

  return (
    <section ref={sectionRef} className="relative overflow-hidden py-10">

      <style>{`
        @keyframes floatHex {
          0%,100% { transform: translateY(0px); }
          50%      { transform: translateY(-8px); }
        }
        @keyframes rotateSlow {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        @keyframes pulseGold {
          0%,100% { opacity:0.12; transform:scale(1); }
          50%     { opacity:0.25; transform:scale(1.04); }
        }
        .fh1 { animation: floatHex 5s   ease-in-out infinite; }
        .fh2 { animation: floatHex 6.5s ease-in-out infinite 1s; }
        .fh3 { animation: floatHex 4.5s ease-in-out infinite 0.5s; }
      `}</style>

      {/* ── BACKGROUND IMAGE ── */}
      <div className="absolute inset-0 pointer-events-none">
        <img
          src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1920&q=80"
          alt=""
          className="w-full h-full object-cover"
          style={{ filter: 'brightness(0.35) saturate(0.6)' }}
        />
        {/* dark tint overlay */}
        <div className="absolute inset-0" style={{ background: 'rgba(5,22,20,0.72)' }} />
        {/* gold radial glow */}
        <div className="absolute inset-0"
          style={{ background: 'radial-gradient(ellipse at 50% 50%, rgba(212,161,58,0.07) 0%, transparent 70%)' }} />
      </div>

      {/* ── BG HEX WATERMARKS ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[{s:280,t:'-60px',l:'-60px'},{s:220,b:'-50px',r:'-50px'},{s:160,t:'35%',l:'3%'},{s:180,t:'15%',r:'2%'}].map((h,i)=>(
          <div key={i} className="absolute"
            style={{ width:h.s, height:h.s*1.13, top:h.t, bottom:h.b, left:h.l, right:h.r,
              clipPath:HEX_CLIP, background:'#D4A13A', opacity:0.04,
              animation:`pulseGold ${5+i}s ease-in-out infinite ${i*0.8}s` }} />
        ))}
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4">

        {/* ── HEADER ── */}
        <div className="text-center mb-8"
          style={{ opacity:visible?1:0, transform:visible?'translateY(0)':'translateY(24px)', transition:'all 0.7s ease' }}>
          <div className="flex items-center justify-center gap-3 mb-2">
            <div className="h-px bg-gradient-to-r from-transparent to-[#D4A13A]"
              style={{ width:visible?44:0, transition:'width 1s ease 0.3s' }} />
            <span className="text-[10px] font-black text-[#D4A13A] uppercase tracking-[0.35em] px-3 py-1 border border-[#D4A13A]/40 rounded-full bg-[#D4A13A]/10">
              Our Core Values
            </span>
            <div className="h-px bg-gradient-to-l from-transparent to-[#D4A13A]"
              style={{ width:visible?44:0, transition:'width 1s ease 0.3s' }} />
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white leading-none mb-2">
            Why <span className="text-[#D4A13A]" style={{ textShadow:'0 0 40px rgba(212,161,58,0.35)' }}>Choose Us</span>
          </h2>
          <p className="text-white/55 text-sm max-w-lg mx-auto leading-relaxed">
            Committed to every project — ingenious ideas that become reality and every client leaves happy.
          </p>
        </div>

        {/* ── TREE ── */}
        <div className="relative" style={{ minHeight: 820 }}>
          <Connectors visible={visible} />

          {/* ROOT NODE */}
          <div className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center z-10" style={{ top: 0 }}>
            <div style={{ opacity:visible?1:0, transform:visible?'scale(1)':'scale(0.4)', transition:'all 0.7s cubic-bezier(0.34,1.2,0.64,1) 0.2s' }}>
              <div className="relative fh1">
                <div className="absolute -inset-5 rounded-full border border-dashed border-[#D4A13A]/30"
                  style={{ animation:'rotateSlow 20s linear infinite' }} />
                <div className="absolute -inset-9 rounded-full border border-[#D4A13A]/15"
                  style={{ animation:'rotateSlow 30s linear infinite reverse' }} />
                <div style={{ width:80, height:90, clipPath:HEX_CLIP, background:'linear-gradient(135deg,#D4A13A,#f5c842)' }}
                  className="flex items-center justify-center shadow-2xl">
                  <div style={{ width:68, height:77, clipPath:HEX_CLIP, background:'#051614' }}
                    className="flex items-center justify-center">
                    <svg viewBox="0 0 24 24" fill="none" stroke="#D4A13A" strokeWidth="1.5" className="w-7 h-7">
                      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                      <polyline points="9 22 9 12 15 12 15 22"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ROW 1 — 3 cards */}
          <div className="absolute w-full flex justify-center z-10" style={{ top: 148 }}>
            <div className="flex gap-6 md:gap-16">
              {row1.map((item,i) => (
                <div key={item.id} className={['fh2','fh1','fh3'][i]}>
                  <HexCard item={item} index={i} visible={visible} />
                </div>
              ))}
            </div>
          </div>

          {/* ROW 2 — 2 cards */}
          <div className="absolute w-full flex justify-center z-10" style={{ top: 348 }}>
            <div className="flex gap-20 md:gap-40">
              {row2.map((item,i) => (
                <div key={item.id} className={['fh3','fh1'][i]}>
                  <HexCard item={item} index={i+3} visible={visible} />
                </div>
              ))}
            </div>
          </div>

          {/* ROW 3 — 3 cards */}
          <div className="absolute w-full flex justify-center z-10" style={{ top: 548 }}>
            <div className="flex gap-6 md:gap-16">
              {row3.map((item,i) => (
                <div key={item.id} className={['fh1','fh3','fh2'][i]}>
                  <HexCard item={item} index={i+5} visible={visible} />
                </div>
              ))}
            </div>
          </div>

          {/* BOTTOM NODE */}
          <div className="absolute left-1/2 -translate-x-1/2 z-10" style={{ top: 880 }}>
            <div style={{ opacity:visible?1:0, transform:visible?'scale(1)':'scale(0.4)', transition:'all 0.7s cubic-bezier(0.34,1.2,0.64,1) 1s' }}>
              <div className="fh2">
                <div style={{ width:44, height:50, clipPath:HEX_CLIP, background:'linear-gradient(135deg,#D4A13A,#f5c842)' }}
                  className="flex items-center justify-center">
                  <div style={{ width:34, height:38, clipPath:HEX_CLIP, background:'#051614' }}
                    className="flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-[#D4A13A]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        

      </div>
    </section>
  );
};

export default WhyChooseUs;
