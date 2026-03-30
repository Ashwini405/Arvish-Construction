import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

const stats = [
  { val: "30+", label: "Years of Excellence" },
  { val: "500+", label: "Projects Completed" },
  { val: "5,000+", label: "Happy Clients" },
  { val: "12", label: "Countries Served" },
];

const milestones = [
  { year: "1994", title: "Founded in Dubai", desc: "Arvish Construction Group was established with a vision to redefine construction excellence across the UAE." },
  { year: "2001", title: "First Landmark Project", desc: "Delivered the iconic Prestige Tower in Dubai Marina, setting a new benchmark for commercial construction." },
  { year: "2008", title: "Regional Expansion", desc: "Expanded operations to Saudi Arabia, Qatar, and Oman, growing into a pan-GCC construction powerhouse." },
  { year: "2015", title: "Sustainability Pledge", desc: "Committed to LEED-certified construction across all new projects, pioneering green building in the region." },
  { year: "2020", title: "500 Projects Milestone", desc: "Celebrated the completion of our 500th project — a testament to two decades of relentless excellence." },
  { year: "2024", title: "Global Footprint", desc: "Now operating across 12 countries with over 2,000 professionals and a pipeline exceeding AED 10 billion." },
];

const values = [
  { icon: "◈", title: "Integrity", desc: "We hold ourselves to the highest ethical standards in every decision, partnership, and project we undertake." },
  { icon: "◉", title: "Excellence", desc: "Mediocrity is not in our vocabulary. Every detail, every finish, every deadline is treated with uncompromising precision." },
  { icon: "◎", title: "Innovation", desc: "We embrace emerging technologies and forward-thinking design to deliver buildings that stand the test of time." },
  { icon: "◐", title: "Sustainability", desc: "We build with the future in mind — minimising environmental impact while maximising long-term value." },
];

const NAV_H = 64;

export default function AboutUsPage() {
  const navigate = useNavigate();

  return (
    <div style={{ background: "#020208", minHeight: "100vh", color: "#fff", fontFamily: "'DM Sans', sans-serif" }}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Cormorant+Garamond:wght@300;400;600&display=swap');`}</style>

      {/* NAV */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 50, height: NAV_H,
        display: "grid", gridTemplateColumns: "1fr auto 1fr", alignItems: "center",
        padding: "0 40px", background: "rgba(2,2,8,0.88)", backdropFilter: "blur(20px)",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
      }}>
        <button onClick={() => navigate("/home")} style={{
          display: "flex", alignItems: "center", gap: 8, background: "none", border: "none",
          color: "rgba(160,185,230,0.65)", fontSize: 13, cursor: "pointer", letterSpacing: ".04em",
        }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="15 18 9 12 15 6" /></svg>
          Back
        </button>
        <div style={{ textAlign: "center" }}>
          <div style={{ fontSize: 15, fontWeight: 700, letterSpacing: ".1em", textTransform: "uppercase" }}>Arvish</div>
          <div style={{ fontSize: 9, letterSpacing: ".3em", color: "rgba(255,255,255,0.4)", textTransform: "uppercase" }}>PROPERTIES</div>
        </div>
        <div style={{ display: "flex", justifyContent: "flex-end", gap: 6 }}>
          {["Management", "Sustainability"].map((label) => (
            <button key={label} onClick={() => navigate(`/our-story/${label.toLowerCase()}`)} style={{
              background: "none", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 6,
              color: "rgba(160,185,230,0.6)", fontSize: 11, letterSpacing: ".06em",
              padding: "6px 14px", cursor: "pointer", transition: "all 0.2s",
            }}
              onMouseEnter={e => { e.target.style.color = "#fff"; e.target.style.borderColor = "rgba(212,161,58,0.4)"; }}
              onMouseLeave={e => { e.target.style.color = "rgba(160,185,230,0.6)"; e.target.style.borderColor = "rgba(255,255,255,0.1)"; }}
            >{label}</button>
          ))}
        </div>
      </nav>

      {/* HERO */}
      <div style={{ paddingTop: NAV_H, position: "relative", overflow: "hidden" }}>
        <div style={{ position: "relative", minHeight: 520, display: "flex", alignItems: "center" }}>
          {/* BG image */}
          <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&h=800&fit=crop"
            alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", opacity: 0.18 }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(100deg,rgba(2,2,8,0.98) 40%,rgba(2,2,8,0.6) 100%)" }} />
          {/* Glow */}
          <div style={{ position: "absolute", top: "10%", right: "15%", width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(circle,rgba(212,161,58,0.07) 0%,transparent 70%)", pointerEvents: "none" }} />

          <div style={{ position: "relative", maxWidth: 1200, margin: "0 auto", padding: "80px 40px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}>
              <div style={{ width: 32, height: 1, background: "#D4A13A" }} />
              <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: ".35em", color: "#D4A13A", textTransform: "uppercase" }}>Our Story</span>
            </div>
            <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(40px,6vw,80px)", fontWeight: 300, lineHeight: 1.08, letterSpacing: "-.02em", marginBottom: 24, maxWidth: 700 }}>
              Building the Future,<br />
              <span style={{ background: "linear-gradient(135deg,#D4A13A,#f0c96a)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                One Project at a Time
              </span>
            </h1>
            <p style={{ fontSize: 15, color: "rgba(160,185,230,0.6)", maxWidth: 520, lineHeight: 1.85, fontWeight: 300, marginBottom: 40 }}>
              Since 1994, Arvish Construction Group has been the cornerstone of construction excellence across the UAE and beyond — delivering landmark developments that define skylines and transform communities.
            </p>
            {/* Stats row */}
            <div style={{ display: "flex", gap: 0, flexWrap: "wrap" }}>
              {stats.map((s, i) => (
                <div key={i} style={{
                  padding: "16px 32px",
                  borderLeft: i === 0 ? "1px solid rgba(212,161,58,0.2)" : "none",
                  borderRight: "1px solid rgba(212,161,58,0.2)",
                }}>
                  <div style={{ fontSize: "clamp(24px,2.8vw,36px)", fontWeight: 300, color: "#D4A13A", letterSpacing: "-.02em" }}>{s.val}</div>
                  <div style={{ fontSize: 10, letterSpacing: ".14em", color: "rgba(160,185,230,0.4)", textTransform: "uppercase", marginTop: 4 }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* WHO WE ARE */}
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "80px 40px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
              <div style={{ width: 24, height: 1, background: "#D4A13A" }} />
              <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: ".3em", color: "#D4A13A", textTransform: "uppercase" }}>Who We Are</span>
            </div>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(28px,3.5vw,48px)", fontWeight: 300, lineHeight: 1.2, marginBottom: 24, letterSpacing: "-.01em" }}>
              A Legacy Built on<br />Trust & Craftsmanship
            </h2>
            <p style={{ fontSize: 14, color: "rgba(160,185,230,0.6)", lineHeight: 1.9, fontWeight: 300, marginBottom: 16 }}>
              Arvish Construction Group has been a cornerstone of construction excellence in the UAE since 1994. With a commitment to quality, innovation, and sustainability, we have delivered landmark projects across residential, commercial, and industrial sectors.
            </p>
            <p style={{ fontSize: 14, color: "rgba(160,185,230,0.6)", lineHeight: 1.9, fontWeight: 300, marginBottom: 32 }}>
              Our team of over 2,000 professionals brings unmatched expertise to every project, ensuring timely delivery and the highest standards of craftsmanship — from foundation to finishing.
            </p>
            <button onClick={() => navigate("/projects")} style={{
              display: "inline-flex", alignItems: "center", gap: 10,
              background: "rgba(212,161,58,0.1)", border: "1px solid rgba(212,161,58,0.35)",
              color: "#D4A13A", fontSize: 12, fontWeight: 600, letterSpacing: ".08em",
              textTransform: "uppercase", padding: "12px 24px", borderRadius: 6, cursor: "pointer",
            }}>
              View Our Projects
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
            </button>
          </div>
          {/* Image mosaic */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, height: 420 }}>
            <img src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=500&fit=crop" alt="" style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: 12, gridRow: "span 2" }} />
            <img src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400&h=240&fit=crop" alt="" style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: 12 }} />
            <img src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&h=240&fit=crop" alt="" style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: 12 }} />
          </div>
        </div>
      </div>

      {/* VALUES */}
      <div style={{ background: "rgba(255,255,255,0.02)", borderTop: "1px solid rgba(255,255,255,0.05)", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "80px 40px" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 12, marginBottom: 16 }}>
              <div style={{ width: 32, height: 1, background: "linear-gradient(90deg,transparent,#D4A13A)" }} />
              <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: ".35em", color: "#D4A13A", textTransform: "uppercase" }}>What Drives Us</span>
              <div style={{ width: 32, height: 1, background: "linear-gradient(90deg,#D4A13A,transparent)" }} />
            </div>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(28px,3.5vw,48px)", fontWeight: 300, letterSpacing: "-.01em" }}>Our Core Values</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: 20 }}>
            {values.map((v, i) => (
              <div key={i} style={{
                padding: "32px 28px", borderRadius: 12,
                background: "linear-gradient(160deg,rgba(10,15,35,0.8) 0%,rgba(2,2,8,0.9) 100%)",
                border: "1px solid rgba(255,255,255,0.06)",
                position: "relative", overflow: "hidden",
              }}>
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 1, background: "linear-gradient(90deg,transparent,rgba(212,161,58,0.4),transparent)" }} />
                <div style={{ fontSize: 28, color: "#D4A13A", marginBottom: 16, opacity: 0.8 }}>{v.icon}</div>
                <h3 style={{ fontSize: 16, fontWeight: 600, marginBottom: 10, letterSpacing: ".02em" }}>{v.title}</h3>
                <p style={{ fontSize: 13, color: "rgba(160,185,230,0.55)", lineHeight: 1.8, fontWeight: 300 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* TIMELINE */}
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "80px 40px" }}>
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 12, marginBottom: 16 }}>
            <div style={{ width: 32, height: 1, background: "linear-gradient(90deg,transparent,#D4A13A)" }} />
            <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: ".35em", color: "#D4A13A", textTransform: "uppercase" }}>Our Journey</span>
            <div style={{ width: 32, height: 1, background: "linear-gradient(90deg,#D4A13A,transparent)" }} />
          </div>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(28px,3.5vw,48px)", fontWeight: 300, letterSpacing: "-.01em" }}>Three Decades of Excellence</h2>
        </div>
        <div style={{ position: "relative" }}>
          {/* vertical line */}
          <div style={{ position: "absolute", left: "50%", top: 0, bottom: 0, width: 1, background: "linear-gradient(180deg,transparent,rgba(212,161,58,0.3) 10%,rgba(212,161,58,0.3) 90%,transparent)", transform: "translateX(-50%)" }} />
          <div style={{ display: "flex", flexDirection: "column", gap: 48 }}>
            {milestones.map((m, i) => (
              <div key={i} style={{ display: "grid", gridTemplateColumns: "1fr 40px 1fr", alignItems: "center", gap: 0 }}>
                {i % 2 === 0 ? (
                  <>
                    <div style={{ textAlign: "right", paddingRight: 40 }}>
                      <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: ".2em", color: "#D4A13A", marginBottom: 6, textTransform: "uppercase" }}>{m.year}</div>
                      <h3 style={{ fontSize: 17, fontWeight: 600, marginBottom: 8 }}>{m.title}</h3>
                      <p style={{ fontSize: 13, color: "rgba(160,185,230,0.55)", lineHeight: 1.75, fontWeight: 300 }}>{m.desc}</p>
                    </div>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                      <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#D4A13A", boxShadow: "0 0 16px rgba(212,161,58,0.6)", flexShrink: 0 }} />
                    </div>
                    <div />
                  </>
                ) : (
                  <>
                    <div />
                    <div style={{ display: "flex", justifyContent: "center" }}>
                      <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#D4A13A", boxShadow: "0 0 16px rgba(212,161,58,0.6)", flexShrink: 0 }} />
                    </div>
                    <div style={{ paddingLeft: 40 }}>
                      <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: ".2em", color: "#D4A13A", marginBottom: 6, textTransform: "uppercase" }}>{m.year}</div>
                      <h3 style={{ fontSize: 17, fontWeight: 600, marginBottom: 8 }}>{m.title}</h3>
                      <p style={{ fontSize: 13, color: "rgba(160,185,230,0.55)", lineHeight: 1.75, fontWeight: 300 }}>{m.desc}</p>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* MISSION BANNER */}
      <div style={{ position: "relative", overflow: "hidden", margin: "0 40px 80px", borderRadius: 20 }}>
        <img src="https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=1600&h=500&fit=crop" alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", opacity: 0.2 }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg,rgba(5,22,20,0.97) 0%,rgba(5,22,20,0.85) 100%)" }} />
        <div style={{ position: "relative", padding: "64px 60px", textAlign: "center" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 12, marginBottom: 20 }}>
            <div style={{ width: 32, height: 1, background: "linear-gradient(90deg,transparent,#D4A13A)" }} />
            <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: ".35em", color: "#D4A13A", textTransform: "uppercase" }}>Our Mission</span>
            <div style={{ width: 32, height: 1, background: "linear-gradient(90deg,#D4A13A,transparent)" }} />
          </div>
          <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(18px,2.5vw,28px)", fontWeight: 300, color: "#fff", maxWidth: 760, margin: "0 auto", lineHeight: 1.7, letterSpacing: ".01em" }}>
            "To deliver world-class construction solutions that exceed client expectations, foster community growth, and uphold the highest standards of integrity and sustainability in every project we undertake."
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}
