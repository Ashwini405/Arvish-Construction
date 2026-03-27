import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

function useInView(threshold = 0.1) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, visible];
}

const services = [
  {
    id: "01",
    title: "Residential",
    short: "Villas · Apartments · Communities",
    desc: "Luxury villas, high-rise apartments and gated communities crafted with elegance and lasting quality.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=85",
    route: "/services/residential",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
        <polyline points="9 22 9 12 15 12 15 22"/>
      </svg>
    ),
  },
  {
    id: "02",
    title: "Commercial",
    short: "Towers · Malls · Mixed-Use",
    desc: "Iconic office towers, retail destinations and mixed-use developments that define skylines.",
    image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&q=85",
    route: "/services/commercial-retail",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <rect x="2" y="7" width="20" height="14" rx="1"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/>
        <line x1="12" y1="12" x2="12" y2="16"/><line x1="10" y1="14" x2="14" y2="14"/>
      </svg>
    ),
  },
  {
    id: "03",
    title: "Education & Health",
    short: "Schools · Hospitals · Clinics",
    desc: "Purpose-built schools, universities and hospitals designed for safety and community service.",
    image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600&q=85",
    route: "/services/educational-healthcare",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
      </svg>
    ),
  },
  {
    id: "04",
    title: "Industrial",
    short: "Warehouses · Factories · Logistics",
    desc: "Heavy-duty industrial facilities engineered for peak operational performance and durability.",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=85",
    route: "/services/industrial",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <rect x="2" y="3" width="20" height="14" rx="1"/>
        <path d="M8 21h8M12 17v4"/>
        <path d="M7 8l3 3 3-3 3 3"/>
      </svg>
    ),
  },
];

function CircleCard({ service, index, visible }) {
  const navigate = useNavigate();
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="flex flex-col items-center gap-4"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(40px)",
        transition: `opacity 0.7s ease ${index * 150}ms, transform 0.7s ease ${index * 150}ms`,
      }}
    >
      {/* 3D flip circle */}
      <div
        className="relative cursor-pointer"
        style={{ width: 200, height: 200, perspective: "800px" }}
        onMouseEnter={() => setFlipped(true)}
        onMouseLeave={() => setFlipped(false)}
        onClick={() => navigate(service.route)}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            position: "relative",
            transformStyle: "preserve-3d",
            transition: "transform 0.7s cubic-bezier(0.4,0.2,0.2,1)",
            transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
          }}
        >
          {/* FRONT */}
          <div
            style={{ backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden" }}
            className="absolute inset-0 rounded-full overflow-hidden border-4 border-[#D4A13A] shadow-2xl"
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-full object-cover"
            />
            {/* dark overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#051614]/80 via-[#051614]/20 to-transparent" />
            {/* front label */}
            <div className="absolute inset-0 flex flex-col items-center justify-end pb-8 px-4 text-center">
              <div className="text-[#D4A13A] mb-2">{service.icon}</div>
              <h3 className="text-white font-black text-base leading-tight">{service.title}</h3>
            </div>
            {/* gold ring pulse */}
            <div className="absolute inset-0 rounded-full border-2 border-[#D4A13A]/30 scale-110 pointer-events-none" />
          </div>

          {/* BACK */}
          <div
            style={{
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
              transform: "rotateY(180deg)",
            }}
            className="absolute inset-0 rounded-full bg-[#051614] border-4 border-[#D4A13A] shadow-2xl flex flex-col items-center justify-center px-6 text-center"
          >
            {/* ID */}
            <span className="text-[#D4A13A]/30 text-5xl font-black absolute top-6 leading-none select-none">{service.id}</span>
            <p className="text-[9px] font-black text-[#D4A13A] uppercase tracking-[0.2em] mb-2 relative z-10">{service.short}</p>
            <p className="text-white/80 text-[11px] leading-relaxed relative z-10">{service.desc}</p>
          </div>
        </div>

        {/* outer glow ring on hover */}
        <div
          className="absolute -inset-2 rounded-full border border-[#D4A13A]/40 pointer-events-none transition-opacity duration-500"
          style={{ opacity: flipped ? 1 : 0 }}
        />
      </div>

      {/* Label below circle */}
      <div className="text-center">
        <p className="text-white font-black text-sm uppercase tracking-wider">{service.title}</p>
        <div
          className="mx-auto mt-1.5 h-px bg-[#D4A13A] transition-all duration-500"
          style={{ width: flipped ? "60px" : "24px" }}
        />
      </div>
    </div>
  );
}

export default function ServicesSection() {
  const navigate = useNavigate();
  const [sectionRef, visible] = useInView(0.08);

  return (
    <section ref={sectionRef} className="relative py-12 px-6 overflow-hidden">

      <style>{`
        @keyframes slowDrift {
          0%, 100% { transform: scale(1.05) translate(0px, 0px); }
          50%       { transform: scale(1.08) translate(-6px, -4px); }
        }
        .slow-drift { animation: slowDrift 18s ease-in-out infinite; }
      `}</style>

      {/* Background building image — more transparent */}
      <div className="absolute inset-0 pointer-events-none">
        <img
          src="https://img.freepik.com/free-photo/construction-silhouette_1150-8336.jpg?semt=ais_hybrid&w=740&q=80"
          alt=""
          className="w-full h-full object-cover slow-drift"
        />
        <div className="absolute inset-0 bg-[#faf9f6]/78" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* ── HEADER ── */}
        <div
          className="text-center mb-10"
          style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(30px)", transition: "all 0.7s ease 0ms" }}
        >
          {/* Eyebrow */}
          <div className="flex items-center justify-center gap-3 mb-3">
            <div
              className="h-px bg-gradient-to-r from-transparent to-white/60"
              style={{ width: visible ? 48 : 0, transition: "width 1s ease 0.3s" }}
            />
            <span className="text-[10px] font-black text-white uppercase tracking-[0.35em] px-3 py-1 border border-white/40 rounded-full bg-white/10">
              What We Do
            </span>
            <div
              className="h-px bg-gradient-to-l from-transparent to-white/60"
              style={{ width: visible ? 48 : 0, transition: "width 1s ease 0.3s" }}
            />
          </div>

          {/* Headline */}
          <h2 className="text-4xl md:text-5xl font-black text-white leading-none mb-3">
            Our{" "}
            <span className="relative inline-block text-[#D4A13A]" style={{ textShadow: "0 0 40px #d4dbe2ef" }}>
              Services
              <svg className="absolute -bottom-1 left-0 w-full" height="5" viewBox="0 0 200 5" preserveAspectRatio="none">
                <path
                  d="M0 4 Q50 0 100 3 Q150 6 200 2"
                  stroke="rgb(212, 207, 196)"
                  strokeWidth="2"
                  fill="none"
                  strokeDasharray="220"
                  style={visible
                    ? { strokeDashoffset: 0, transition: "stroke-dashoffset 1.1s ease 0.6s" }
                    : { strokeDashoffset: 220 }
                  }
                />
              </svg>
            </span>
          </h2>

          {/* Subtext */}
          <p className="text-sm text-white/80 leading-relaxed max-w-xl mx-auto">
            <span className="font-bold text-white">Four core sectors.</span>{" "}
            <span className="text-[#D4A13A] font-semibold">One standard of excellence.</span>{" "}
            Built to last across the UAE and beyond.
          </p>

          {/* Decorative dots */}
          <div className="flex items-center justify-center gap-2 mt-4">
            {[0,1,2].map(i => (
              <div
                key={i}
                className="rounded-full bg-[#D4A13A]"
                style={{
                  width: i === 1 ? 20 : 6,
                  height: 4,
                  opacity: visible ? 1 : 0,
                  transition: `opacity 0.5s ease ${0.8 + i * 0.1}s`,
                }}
              />
            ))}
          </div>
        </div>

        {/* ── CIRCLE CARDS ── */}
        <div className="flex flex-wrap justify-center gap-10 md:gap-14">
          {services.map((s, i) => (
            <CircleCard key={s.id} service={s} index={i} visible={visible} />
          ))}
        </div>

        {/* ── BOTTOM STRIP ── */}
        

      </div>
    </section>
  );
}
