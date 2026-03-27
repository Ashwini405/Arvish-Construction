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

function useCountUp(target, active, duration = 2400) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) return;
    let start = 0;
    const step = Math.ceil(target / (duration / 16));
    const t = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(t); }
      else setCount(start);
    }, 16);
    return () => clearInterval(t);
  }, [active, target, duration]);
  return count;
}

const stats = [
  { value: 30,   suffix: "+", label: "Years of Excellence" },
  { value: 500,  suffix: "+", label: "Projects Completed"  },
  { value: 5000, suffix: "+", label: "Happy Clients"       },
  { value: 12,   suffix: "",  label: "Countries Served"    },
];

const pillars = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/>
      </svg>
    ),
    title: "Legacy of Craft",
    desc: "Three decades of precision engineering and architectural mastery across the UAE and beyond.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/>
      </svg>
    ),
    title: "On-Time Delivery",
    desc: "Every milestone met with discipline — because your time is as valuable as the structure we build.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    title: "Uncompromised Quality",
    desc: "ISO 9001:2015 certified processes ensuring every detail exceeds international standards.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    title: "People First",
    desc: "2,000+ professionals united by a culture of safety, loyalty, and shared purpose.",
  },
];

function StatCard({ value, suffix, label, visible, index }) {
  const count = useCountUp(value, visible);
  return (
    <div
      className="relative flex flex-col items-center text-center group px-4 py-6"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(30px)",
        transition: `opacity 0.7s ease ${600 + index * 130}ms, transform 0.7s ease ${600 + index * 130}ms`,
      }}
    >
      {/* animated gold number */}
      <div className="text-5xl md:text-6xl font-black text-[#D4A13A] leading-none tracking-tight">
        {count}<span className="text-3xl">{suffix}</span>
      </div>
      {/* expanding rule */}
      <div
        className="my-2 h-px bg-gradient-to-r from-transparent via-[#D4A13A] to-transparent"
        style={{ width: visible ? "48px" : "0px", transition: `width 0.9s ease ${800 + index * 130}ms` }}
      />
      <div className="text-[10px] uppercase tracking-[0.25em] text-white/50 font-bold">{label}</div>
    </div>
  );
}

export default function AboutSection() {
  const navigate = useNavigate();
  const [sectionRef, visible] = useInView(0.06);

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-[#051614]">

      <style>{`
        @keyframes kenBurns {
          0%,100% { transform: scale(1.08) translate(0px,0px); }
          50%      { transform: scale(1.13) translate(-10px,-6px); }
        }
        .ken-burns { animation: kenBurns 16s ease-in-out infinite; }

        @keyframes floatBadge {
          0%,100% { transform: translateY(0px); }
          50%     { transform: translateY(-7px); }
        }
        .float-badge { animation: floatBadge 4s ease-in-out infinite; }

        @keyframes heartbeat {
          0%,100% { transform: scale(1); }
          14%     { transform: scale(1.15); }
          28%     { transform: scale(1); }
          42%     { transform: scale(1.1); }
          56%     { transform: scale(1); }
        }
        .heartbeat { animation: heartbeat 3s ease-in-out infinite; }

        @keyframes shimmerLine {
          0%   { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        .shimmer-line {
          background: linear-gradient(90deg, transparent, rgba(212,161,58,0.6), transparent);
          background-size: 200% 100%;
          animation: shimmerLine 2.5s infinite;
        }

        @keyframes pulseRing {
          0%   { transform: scale(1);   opacity: 0.5; }
          100% { transform: scale(2.4); opacity: 0; }
        }

        @keyframes revealUp {
          from { opacity:0; transform: translateY(40px); }
          to   { opacity:1; transform: translateY(0); }
        }
      `}</style>

      {/* ══════════════════════════════════════════
          HERO — FULL SPLIT WITH SOUL
      ══════════════════════════════════════════ */}
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[620px]">

        {/* ── LEFT: IMAGE SIDE ── */}
        <div className="relative overflow-hidden min-h-[420px] lg:min-h-0">

          {/* Ken Burns image */}
          <div className="absolute inset-0 ken-burns">
            <img
              src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=900&q=85"
              alt="Arvish Construction site"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Multi-layer overlays for depth */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#051614]/90 via-[#051614]/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#051614]/80 via-transparent to-[#051614]/20" />

          {/* Gold diagonal slash */}
          <div className="absolute inset-0 pointer-events-none">
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 600 700" preserveAspectRatio="none">
              <path d="M480 0 L360 700 L600 700 L600 0 Z" fill="rgba(212,161,58,0.05)" />
              <path d="M480 0 L360 700" stroke="#D4A13A" strokeWidth="1" strokeOpacity="0.25" />
            </svg>
          </div>

          {/* Corner brackets */}
          <div className="absolute top-6 right-6 opacity-50">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
              <path d="M40 0 H14 V3 H37 V28 H40 Z" fill="#D4A13A"/>
            </svg>
          </div>
          <div className="absolute bottom-6 left-6 opacity-50 rotate-180">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
              <path d="M40 0 H14 V3 H37 V28 H40 Z" fill="#D4A13A"/>
            </svg>
          </div>

          {/* Floating Est. badge */}
          <div
            className="absolute bottom-10 left-10 float-badge"
            style={{ opacity: visible ? 1 : 0, transition: "opacity 1s ease 500ms" }}
          >
            
          </div>

          {/* Heartbeat pulse — soul indicator */}
          <div
            className="absolute top-8 left-8"
            style={{ opacity: visible ? 1 : 0, transition: "opacity 1s ease 800ms" }}
          >
            <div className="relative heartbeat">
              <div className="absolute inset-0 rounded-full border border-[#D4A13A]/40"
                style={{ animation: "pulseRing 2s ease-out infinite" }} />
              <div className="w-10 h-10 rounded-full bg-[#D4A13A]/10 border border-[#D4A13A]/40 flex items-center justify-center">
                <svg viewBox="0 0 24 24" fill="#D4A13A" className="w-5 h-5">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                </svg>
              </div>
            </div>
          </div>

          {/* Image caption strip */}
          <div
            className="absolute bottom-0 left-0 right-0 px-8 py-4 bg-gradient-to-t from-[#051614] to-transparent"
            style={{ opacity: visible ? 1 : 0, transition: "opacity 1s ease 600ms" }}
          >
            <div className="flex items-center gap-3">
              <div className="w-6 h-px bg-[#D4A13A]" />
              <span className="text-white/40 text-[9px] uppercase tracking-[0.3em]">Arvish Construction · Dubai, UAE</span>
            </div>
          </div>
        </div>

        {/* ── RIGHT: TEXT SIDE ── */}
        <div className="relative flex flex-col justify-center px-10 md:px-14 py-16 bg-[#051614]">

          {/* Vertical gold rule — the spine */}
          <div
            className="absolute left-0 top-12 bottom-12 w-px"
            style={{
              background: "linear-gradient(to bottom, transparent, #D4A13A 30%, #D4A13A 70%, transparent)",
              opacity: visible ? 1 : 0,
              transition: "opacity 1s ease 300ms",
            }}
          />

          {/* Subtle dot grid bg */}
          <div className="absolute inset-0 opacity-[0.03]"
            style={{ backgroundImage: "radial-gradient(#D4A13A 1px, transparent 1px)", backgroundSize: "24px 24px" }} />

          {/* Eyebrow */}
          <div
            className="flex items-center gap-3 mb-5 relative z-10"
            style={{ opacity: visible ? 1 : 0, transform: visible ? "translateX(0)" : "translateX(30px)", transition: "all 0.7s ease 200ms" }}
          >
            <div className="w-8 h-px bg-[#D4A13A]" />
            <span className="text-[#D4A13A] text-[10px] font-black uppercase tracking-[0.35em]">Who We Are</span>
          </div>

          {/* Headline */}
          <div
            className="relative z-10 mb-6"
            style={{ opacity: visible ? 1 : 0, transform: visible ? "translateX(0)" : "translateX(30px)", transition: "all 0.8s ease 300ms" }}
          >
            <h2 className="text-4xl md:text-5xl font-black text-white leading-[1.08] mb-1">
              Building the Future,
            </h2>
            <h2 className="text-4xl md:text-5xl font-black leading-[1.08]">
              <span className="relative inline-block text-[#D4A13A]">
                One Project at a Time
                <svg className="absolute -bottom-2 left-0 w-full" height="6" viewBox="0 0 300 6" preserveAspectRatio="none">
                  <path
                    d="M0 3 Q75 0 150 3 Q225 6 300 3"
                    stroke="#D4A13A" strokeWidth="2" fill="none" strokeDasharray="300"
                    style={visible ? { strokeDashoffset: 0, transition: "stroke-dashoffset 1.3s ease 700ms" } : { strokeDashoffset: 300 }}
                  />
                </svg>
              </span>
            </h2>
          </div>

          {/* Shimmer divider */}
          <div
            className="relative z-10 h-px shimmer-line mb-6 rounded-full"
            style={{ opacity: visible ? 1 : 0, transition: "opacity 0.8s ease 500ms" }}
          />

          {/* Body copy */}
          <div
            className="relative z-10"
            style={{ opacity: visible ? 1 : 0, transform: visible ? "translateX(0)" : "translateX(30px)", transition: "all 0.8s ease 450ms" }}
          >
            <p className="text-white/65 text-base leading-relaxed mb-4">
              Arvish Construction has been a cornerstone of construction excellence since 1994.
              With a commitment to quality, innovation, and sustainability, we have delivered
              landmark projects across residential, commercial, and industrial sectors.
            </p>
            <p className="text-white/40 text-sm leading-relaxed mb-8">
              Our team of over 2,000 professionals brings unmatched expertise to every project —
              ensuring timely delivery and the highest standards of craftsmanship, from
              foundation to finishing touch.
            </p>
          </div>

          {/* Highlight pills */}
          <div
            className="flex flex-wrap gap-2 mb-8 relative z-10"
            style={{ opacity: visible ? 1 : 0, transition: "opacity 0.8s ease 550ms" }}
          >
            {["ISO 9001:2015 Certified", "Award-Winning Designs", "100% UAE Compliant"].map((tag, i) => (
              <span key={i}
                className="text-[9px] font-black uppercase tracking-widest px-3 py-1.5 border border-[#D4A13A]/25 text-[#D4A13A]/80 bg-[#D4A13A]/5">
                {tag}
              </span>
            ))}
          </div>

          {/* CTA */}
          <div
            className="relative z-10"
            style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(20px)", transition: "all 0.7s ease 650ms" }}
          >
            <button
              onClick={() => navigate("/about")}
              className="group inline-flex items-center gap-3 px-8 py-4 bg-[#D4A13A] text-[#051614] text-xs font-black uppercase tracking-widest hover:bg-white transition-all duration-300"
            >
              Discover Our Story
              <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"/>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════
          STATS BAND — THE HEARTBEAT
      ══════════════════════════════════════════ */}
      <div className="relative border-t border-b border-[#D4A13A]/15 bg-[#051614]">
        {/* shimmer top line */}
        <div className="absolute top-0 left-0 right-0 h-px shimmer-line" />

        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-[#D4A13A]/10">
            {stats.map((s, i) => (
              <StatCard key={i} {...s} visible={visible} index={i} />
            ))}
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-px shimmer-line" />
      </div>


    </section>
  );
}
