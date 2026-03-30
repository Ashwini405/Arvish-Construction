import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

const pillars = [
  {
    icon: "🌿",
    label: "Environmental",
    title: "Net Zero by 2040",
    desc: "We are committed to achieving net-zero carbon emissions across all our operations and project sites by 2040, through renewable energy adoption, waste reduction, and sustainable material sourcing.",
    metrics: [{ val: "42%", label: "Carbon Reduction Since 2018" }, { val: "78%", label: "Waste Diverted from Landfill" }, { val: "100%", label: "New Projects LEED Targeted" }],
    color: "#22c55e",
  },
  {
    icon: "🤝",
    label: "Social",
    title: "People & Communities",
    desc: "We invest in the communities where we build — from local employment programmes and skills training to affordable housing initiatives and community infrastructure projects.",
    metrics: [{ val: "2,000+", label: "Employees Worldwide" }, { val: "60%", label: "Local Workforce on Projects" }, { val: "AED 12M", label: "Community Investment (2024)" }],
    color: "#3b82f6",
  },
  {
    icon: "⚖️",
    label: "Governance",
    title: "Ethics & Transparency",
    desc: "Our governance framework ensures accountability at every level — from board oversight and anti-corruption policies to transparent supply chain auditing and ESG reporting aligned with GRI standards.",
    metrics: [{ val: "100%", label: "Suppliers Code-Compliant" }, { val: "GRI", label: "Aligned Reporting" }, { val: "Zero", label: "Corruption Incidents (2024)" }],
    color: "#D4A13A",
  },
];

const certifications = [
  { name: "LEED Platinum", body: "U.S. Green Building Council", year: "2019", desc: "Highest level of LEED certification for sustainable building design and construction." },
  { name: "ISO 14001", body: "International Organization for Standardization", year: "2016", desc: "Environmental management systems certification across all project operations." },
  { name: "BREEAM Excellent", body: "BRE Global", year: "2021", desc: "Building Research Establishment Environmental Assessment Method — Excellent rating." },
  { name: "Estidama Pearl 3", body: "Abu Dhabi Urban Planning Council", year: "2020", desc: "UAE's sustainability rating system — Pearl 3 achieved on multiple projects." },
];

const goals2030 = [
  { pct: 80, label: "Renewable Energy on All Sites", color: "#22c55e" },
  { pct: 65, label: "Reduction in Embodied Carbon", color: "#3b82f6" },
  { pct: 90, label: "Construction Waste Recycled", color: "#D4A13A" },
  { pct: 100, label: "LEED/Estidama Certified Projects", color: "#a855f7" },
];

const NAV_H = 64;

export default function SustainabilityPage() {
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
        <button onClick={() => navigate("/our-story/about")} style={{
          display: "flex", alignItems: "center", gap: 8, background: "none", border: "none",
          color: "rgba(160,185,230,0.65)", fontSize: 13, cursor: "pointer", letterSpacing: ".04em",
        }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="15 18 9 12 15 6" /></svg>
          Our Story
        </button>
        <div style={{ textAlign: "center" }}>
          <div style={{ fontSize: 15, fontWeight: 700, letterSpacing: ".1em", textTransform: "uppercase" }}>Arvish</div>
          <div style={{ fontSize: 9, letterSpacing: ".3em", color: "rgba(255,255,255,0.4)", textTransform: "uppercase" }}>PROPERTIES</div>
        </div>
        <div style={{ display: "flex", justifyContent: "flex-end", gap: 6 }}>
          {["About", "Management"].map((label) => (
            <button key={label} onClick={() => navigate(`/our-story/${label.toLowerCase()}`)} style={{
              background: "none", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 6,
              color: "rgba(160,185,230,0.6)", fontSize: 11, letterSpacing: ".06em",
              padding: "6px 14px", cursor: "pointer",
            }}
              onMouseEnter={e => { e.target.style.color = "#fff"; e.target.style.borderColor = "rgba(212,161,58,0.4)"; }}
              onMouseLeave={e => { e.target.style.color = "rgba(160,185,230,0.6)"; e.target.style.borderColor = "rgba(255,255,255,0.1)"; }}
            >{label}</button>
          ))}
        </div>
      </nav>

      {/* HERO */}
      <div style={{ paddingTop: NAV_H, position: "relative", overflow: "hidden" }}>
        <div style={{ position: "relative", minHeight: 500, display: "flex", alignItems: "center" }}>
          <img src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1920&h=700&fit=crop"
            alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", opacity: 0.2 }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(160deg,rgba(2,2,8,0.97) 40%,rgba(2,10,5,0.8) 100%)" }} />
          <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 160, background: "linear-gradient(0deg,#020208,transparent)" }} />
          {/* Green glow */}
          <div style={{ position: "absolute", top: "20%", right: "20%", width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(circle,rgba(34,197,94,0.08) 0%,transparent 70%)", pointerEvents: "none" }} />

          <div style={{ position: "relative", maxWidth: 1200, margin: "0 auto", padding: "80px 40px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
              <div style={{ width: 32, height: 1, background: "#22c55e" }} />
              <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: ".35em", color: "#22c55e", textTransform: "uppercase" }}>Our Story · Sustainability</span>
            </div>
            <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(36px,5.5vw,72px)", fontWeight: 300, lineHeight: 1.1, letterSpacing: "-.02em", marginBottom: 20, maxWidth: 700 }}>
              Building a Greener World,<br />
              <span style={{ background: "linear-gradient(135deg,#22c55e,#86efac)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                One Project at a Time
              </span>
            </h1>
            <p style={{ fontSize: 15, color: "rgba(160,185,230,0.55)", maxWidth: 520, lineHeight: 1.85, fontWeight: 300, marginBottom: 40 }}>
              Sustainability is not a checkbox for us — it is embedded in every decision we make, from material selection and site management to community engagement and long-term asset stewardship.
            </p>
            <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
              <div style={{ padding: "10px 20px", borderRadius: 8, background: "rgba(34,197,94,0.1)", border: "1px solid rgba(34,197,94,0.25)", fontSize: 12, color: "#22c55e", fontWeight: 600, letterSpacing: ".06em" }}>
                🌿 Net Zero Target: 2040
              </div>
              <div style={{ padding: "10px 20px", borderRadius: 8, background: "rgba(212,161,58,0.1)", border: "1px solid rgba(212,161,58,0.25)", fontSize: 12, color: "#D4A13A", fontWeight: 600, letterSpacing: ".06em" }}>
                🏆 LEED Platinum Certified
              </div>
              <div style={{ padding: "10px 20px", borderRadius: 8, background: "rgba(59,130,246,0.1)", border: "1px solid rgba(59,130,246,0.25)", fontSize: 12, color: "#60a5fa", fontWeight: 600, letterSpacing: ".06em" }}>
                📊 GRI-Aligned Reporting
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ESG PILLARS */}
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "60px 40px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 48 }}>
          <div style={{ width: 24, height: 1, background: "#22c55e" }} />
          <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: ".3em", color: "#22c55e", textTransform: "uppercase" }}>ESG Framework</span>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))", gap: 24 }}>
          {pillars.map((p, i) => (
            <div key={i} style={{
              borderRadius: 16, overflow: "hidden",
              border: `1px solid ${p.color}22`,
              background: "linear-gradient(160deg,rgba(10,15,35,0.9) 0%,rgba(2,2,8,0.95) 100%)",
              position: "relative",
            }}>
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: `linear-gradient(90deg,transparent,${p.color},transparent)` }} />
              <div style={{ padding: "32px 28px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
                  <span style={{ fontSize: 28 }}>{p.icon}</span>
                  <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: ".25em", color: p.color, textTransform: "uppercase" }}>{p.label}</span>
                </div>
                <h3 style={{ fontSize: 20, fontWeight: 600, marginBottom: 12, letterSpacing: "-.01em" }}>{p.title}</h3>
                <p style={{ fontSize: 13, color: "rgba(160,185,230,0.55)", lineHeight: 1.8, fontWeight: 300, marginBottom: 24 }}>{p.desc}</p>
                <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                  {p.metrics.map((m, j) => (
                    <div key={j} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "10px 14px", borderRadius: 8, background: `${p.color}0d`, border: `1px solid ${p.color}1a` }}>
                      <span style={{ fontSize: 12, color: "rgba(160,185,230,0.5)", letterSpacing: ".04em" }}>{m.label}</span>
                      <span style={{ fontSize: 16, fontWeight: 700, color: p.color }}>{m.val}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 2030 GOALS */}
      <div style={{ background: "rgba(255,255,255,0.02)", borderTop: "1px solid rgba(255,255,255,0.05)", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "72px 40px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
                <div style={{ width: 24, height: 1, background: "#22c55e" }} />
                <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: ".3em", color: "#22c55e", textTransform: "uppercase" }}>2030 Targets</span>
              </div>
              <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(28px,3.5vw,48px)", fontWeight: 300, lineHeight: 1.2, marginBottom: 16, letterSpacing: "-.01em" }}>
                Our Sustainability Goals for 2030
              </h2>
              <p style={{ fontSize: 14, color: "rgba(160,185,230,0.55)", lineHeight: 1.85, fontWeight: 300 }}>
                We have set ambitious, measurable targets aligned with the UAE Net Zero 2050 strategy and the UN Sustainable Development Goals. Progress is tracked quarterly and reported annually.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              {goals2030.map((g, i) => (
                <div key={i}>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
                    <span style={{ fontSize: 13, color: "rgba(160,185,230,0.7)", fontWeight: 400 }}>{g.label}</span>
                    <span style={{ fontSize: 13, fontWeight: 700, color: g.color }}>{g.pct}%</span>
                  </div>
                  <div style={{ height: 4, borderRadius: 2, background: "rgba(255,255,255,0.06)", overflow: "hidden" }}>
                    <div style={{ height: "100%", width: `${g.pct}%`, borderRadius: 2, background: `linear-gradient(90deg,${g.color}88,${g.color})`, transition: "width 1s ease" }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CERTIFICATIONS */}
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "72px 40px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 48 }}>
          <div style={{ width: 24, height: 1, background: "#D4A13A" }} />
          <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: ".3em", color: "#D4A13A", textTransform: "uppercase" }}>Certifications & Standards</span>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(260px,1fr))", gap: 20 }}>
          {certifications.map((c, i) => (
            <div key={i} style={{
              padding: "28px 24px", borderRadius: 12,
              border: "1px solid rgba(255,255,255,0.06)",
              background: "linear-gradient(160deg,rgba(10,15,35,0.8) 0%,rgba(2,2,8,0.9) 100%)",
              position: "relative", overflow: "hidden",
            }}>
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 1, background: "linear-gradient(90deg,transparent,rgba(212,161,58,0.4),transparent)" }} />
              <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: ".2em", color: "#D4A13A", textTransform: "uppercase", marginBottom: 10 }}>{c.year}</div>
              <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 4 }}>{c.name}</h3>
              <p style={{ fontSize: 11, color: "rgba(160,185,230,0.4)", letterSpacing: ".04em", marginBottom: 12 }}>{c.body}</p>
              <p style={{ fontSize: 13, color: "rgba(160,185,230,0.55)", lineHeight: 1.7, fontWeight: 300 }}>{c.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* PLEDGE BANNER */}
      <div style={{ position: "relative", overflow: "hidden", margin: "0 40px 80px", borderRadius: 20 }}>
        <img src="https://images.unsplash.com/photo-1508193638397-1c4234db14d8?w=1600&h=400&fit=crop" alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", opacity: 0.15 }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg,rgba(2,10,5,0.97) 0%,rgba(2,15,8,0.9) 100%)" }} />
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 1, background: "linear-gradient(90deg,transparent,rgba(34,197,94,0.5),transparent)" }} />
        <div style={{ position: "relative", padding: "64px 60px", textAlign: "center" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 12, marginBottom: 20 }}>
            <div style={{ width: 32, height: 1, background: "linear-gradient(90deg,transparent,#22c55e)" }} />
            <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: ".35em", color: "#22c55e", textTransform: "uppercase" }}>Our Pledge</span>
            <div style={{ width: 32, height: 1, background: "linear-gradient(90deg,#22c55e,transparent)" }} />
          </div>
          <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(18px,2.5vw,28px)", fontWeight: 300, color: "#fff", maxWidth: 760, margin: "0 auto 32px", lineHeight: 1.7 }}>
            "We pledge to leave every community we build in better shape than we found it — environmentally, socially, and economically."
          </p>
          <button onClick={() => navigate("/contact")} style={{
            display: "inline-flex", alignItems: "center", gap: 10,
            background: "rgba(34,197,94,0.1)", border: "1px solid rgba(34,197,94,0.35)",
            color: "#22c55e", fontSize: 12, fontWeight: 600, letterSpacing: ".08em",
            textTransform: "uppercase", padding: "12px 28px", borderRadius: 8, cursor: "pointer",
          }}>
            Partner With Us
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
}
