import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

const leadership = [
  {
    name: "Rajesh Arvish Kumar",
    title: "Chairman & Founder",
    tenure: "Since 1994",
    img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=500&fit=crop",
    bio: "With over 35 years in the construction industry, Rajesh founded Arvish Group with a singular vision — to build structures that outlast generations. His leadership has steered the company from a single-office operation in Dubai to a pan-GCC powerhouse.",
    expertise: ["Strategic Leadership", "Real Estate Development", "GCC Markets", "Stakeholder Relations"],
  },
  {
    name: "Priya Arvish Nair",
    title: "Chief Executive Officer",
    tenure: "Since 2010",
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=500&fit=crop",
    bio: "Priya brings 20+ years of executive experience across construction, real estate, and infrastructure. Under her leadership, Arvish Group has expanded into 12 countries and achieved a 40% revenue growth over five consecutive years.",
    expertise: ["Operations Excellence", "International Expansion", "P&L Management", "ESG Strategy"],
  },
  {
    name: "Mohammed Al Rashidi",
    title: "Chief Operating Officer",
    tenure: "Since 2008",
    img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=500&fit=crop",
    bio: "Mohammed oversees all project delivery operations across the UAE and GCC. His engineering background and operational acumen have been instrumental in maintaining Arvish's record of on-time, on-budget project delivery.",
    expertise: ["Project Delivery", "Engineering", "Supply Chain", "Quality Assurance"],
  },
  {
    name: "Sarah Al Mansoori",
    title: "Chief Financial Officer",
    tenure: "Since 2012",
    img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=500&fit=crop",
    bio: "Sarah leads Arvish's financial strategy, treasury, and investor relations. Her expertise in structured finance and capital markets has enabled the company to fund landmark projects while maintaining a robust balance sheet.",
    expertise: ["Financial Strategy", "Capital Markets", "Risk Management", "Investor Relations"],
  },
  {
    name: "David Chen",
    title: "Chief Technology Officer",
    tenure: "Since 2018",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop",
    bio: "David drives Arvish's digital transformation agenda — from BIM adoption and smart building integration to AI-powered project management tools that have reduced delivery timelines by 22%.",
    expertise: ["BIM & Digital Twin", "Smart Buildings", "AI & Automation", "PropTech"],
  },
  {
    name: "Fatima Al Zaabi",
    title: "Head of Sustainability",
    tenure: "Since 2015",
    img: "https://images.unsplash.com/photo-1598550874175-4d0ef436c909?w=400&h=500&fit=crop",
    bio: "Fatima leads Arvish's sustainability and ESG initiatives, overseeing LEED certification programmes, carbon reduction targets, and community impact strategies across all active projects.",
    expertise: ["LEED Certification", "Carbon Strategy", "ESG Reporting", "Green Materials"],
  },
];

const boardMembers = [
  { name: "H.E. Sultan Al Maktoum", role: "Independent Board Director" },
  { name: "Dr. Anita Sharma", role: "Non-Executive Director" },
  { name: "James Whitfield", role: "Independent Board Director" },
  { name: "Khalid Al Nuaimi", role: "Non-Executive Director" },
];

const NAV_H = 64;

export default function ManagementPage() {
  const navigate = useNavigate();
  const [active, setActive] = useState(null);

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
          {["About", "Sustainability"].map((label) => (
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
        <div style={{ position: "relative", minHeight: 420, display: "flex", alignItems: "center" }}>
          <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&h=600&fit=crop"
            alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", opacity: 0.12 }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(100deg,rgba(2,2,8,0.98) 50%,rgba(2,2,8,0.7) 100%)" }} />
          <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 120, background: "linear-gradient(0deg,#020208,transparent)" }} />
          <div style={{ position: "relative", maxWidth: 1200, margin: "0 auto", padding: "80px 40px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
              <div style={{ width: 32, height: 1, background: "#D4A13A" }} />
              <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: ".35em", color: "#D4A13A", textTransform: "uppercase" }}>Our Story · Management</span>
            </div>
            <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(36px,5.5vw,72px)", fontWeight: 300, lineHeight: 1.1, letterSpacing: "-.02em", marginBottom: 20 }}>
              The People Behind<br />
              <span style={{ background: "linear-gradient(135deg,#D4A13A,#f0c96a)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Every Landmark</span>
            </h1>
            <p style={{ fontSize: 15, color: "rgba(160,185,230,0.55)", maxWidth: 500, lineHeight: 1.85, fontWeight: 300 }}>
              Our leadership team brings together decades of expertise in construction, finance, technology, and sustainability — united by a shared commitment to excellence.
            </p>
          </div>
        </div>
      </div>

      {/* LEADERSHIP GRID */}
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "60px 40px 80px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 48 }}>
          <div style={{ width: 24, height: 1, background: "#D4A13A" }} />
          <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: ".3em", color: "#D4A13A", textTransform: "uppercase" }}>Executive Leadership</span>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(340px,1fr))", gap: 24 }}>
          {leadership.map((p, i) => (
            <div key={i}
              onClick={() => setActive(active === i ? null : i)}
              style={{
                borderRadius: 14, overflow: "hidden", cursor: "pointer",
                border: active === i ? "1px solid rgba(212,161,58,0.4)" : "1px solid rgba(255,255,255,0.06)",
                background: "linear-gradient(160deg,rgba(10,15,35,0.9) 0%,rgba(2,2,8,0.95) 100%)",
                transition: "all 0.3s",
                boxShadow: active === i ? "0 20px 60px rgba(0,0,0,0.5),0 0 0 1px rgba(212,161,58,0.2)" : "none",
              }}>
              {/* Top: image + name */}
              <div style={{ display: "flex", gap: 0 }}>
                <div style={{ width: 110, flexShrink: 0, position: "relative" }}>
                  <img src={p.img} alt={p.name} style={{ width: "100%", height: 130, objectFit: "cover", objectPosition: "top" }} />
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(90deg,transparent 60%,rgba(10,15,35,0.9))" }} />
                </div>
                <div style={{ padding: "20px 20px 20px 16px", flex: 1 }}>
                  <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: ".2em", color: "#D4A13A", textTransform: "uppercase", marginBottom: 6 }}>{p.tenure}</div>
                  <h3 style={{ fontSize: 16, fontWeight: 600, marginBottom: 4, lineHeight: 1.3 }}>{p.name}</h3>
                  <p style={{ fontSize: 12, color: "rgba(160,185,230,0.55)", letterSpacing: ".04em" }}>{p.title}</p>
                  <div style={{ marginTop: 12, display: "flex", alignItems: "center", gap: 6, fontSize: 11, color: active === i ? "#D4A13A" : "rgba(160,185,230,0.4)" }}>
                    {active === i ? "Hide details" : "View profile"}
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
                      style={{ transform: active === i ? "rotate(180deg)" : "none", transition: "transform 0.3s" }}>
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Expanded bio */}
              {active === i && (
                <div style={{ padding: "0 20px 24px", borderTop: "1px solid rgba(255,255,255,0.05)", marginTop: 0, paddingTop: 20 }}>
                  <p style={{ fontSize: 13, color: "rgba(160,185,230,0.6)", lineHeight: 1.8, fontWeight: 300, marginBottom: 16 }}>{p.bio}</p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                    {p.expertise.map((tag, j) => (
                      <span key={j} style={{
                        fontSize: 10, letterSpacing: ".08em", color: "rgba(212,161,58,0.8)",
                        background: "rgba(212,161,58,0.08)", border: "1px solid rgba(212,161,58,0.2)",
                        borderRadius: 20, padding: "3px 10px",
                      }}>{tag}</span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* BOARD OF DIRECTORS */}
      <div style={{ background: "rgba(255,255,255,0.02)", borderTop: "1px solid rgba(255,255,255,0.05)", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "64px 40px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 40 }}>
            <div style={{ width: 24, height: 1, background: "#D4A13A" }} />
            <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: ".3em", color: "#D4A13A", textTransform: "uppercase" }}>Board of Directors</span>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(260px,1fr))", gap: 16 }}>
            {boardMembers.map((b, i) => (
              <div key={i} style={{
                padding: "24px 28px", borderRadius: 10,
                border: "1px solid rgba(255,255,255,0.06)",
                background: "rgba(10,15,35,0.5)",
                position: "relative", overflow: "hidden",
              }}>
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 1, background: "linear-gradient(90deg,transparent,rgba(212,161,58,0.3),transparent)" }} />
                <div style={{ width: 36, height: 36, borderRadius: "50%", background: "rgba(212,161,58,0.1)", border: "1px solid rgba(212,161,58,0.25)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 14, fontSize: 14, color: "#D4A13A", fontWeight: 700 }}>
                  {b.name.charAt(0)}
                </div>
                <h3 style={{ fontSize: 15, fontWeight: 600, marginBottom: 6 }}>{b.name}</h3>
                <p style={{ fontSize: 12, color: "rgba(160,185,230,0.45)", letterSpacing: ".04em" }}>{b.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* GOVERNANCE BANNER */}
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "80px 40px" }}>
        <div style={{ position: "relative", borderRadius: 20, overflow: "hidden", padding: "60px", background: "linear-gradient(135deg,rgba(5,22,20,0.98) 0%,rgba(10,30,25,0.95) 100%)", border: "1px solid rgba(212,161,58,0.15)" }}>
          <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 1, background: "linear-gradient(90deg,transparent,rgba(212,161,58,0.5),transparent)" }} />
          <div style={{ position: "absolute", top: "-30%", right: "-10%", width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle,rgba(212,161,58,0.06) 0%,transparent 70%)", pointerEvents: "none" }} />
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
            <div style={{ width: 24, height: 1, background: "#D4A13A" }} />
            <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: ".3em", color: "#D4A13A", textTransform: "uppercase" }}>Corporate Governance</span>
          </div>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(24px,3vw,40px)", fontWeight: 300, marginBottom: 16, maxWidth: 600 }}>
            Transparency, Accountability & Long-Term Value
          </h2>
          <p style={{ fontSize: 14, color: "rgba(160,185,230,0.55)", lineHeight: 1.85, maxWidth: 600, fontWeight: 300 }}>
            Arvish Group is committed to the highest standards of corporate governance. Our board structure, audit processes, and reporting frameworks are designed to ensure accountability to our clients, partners, and communities.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}
