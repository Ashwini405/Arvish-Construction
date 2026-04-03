import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const projects = [
  {
    id: 1,
    name: "Administrative City",
    type: "Culture & Public",
    location: "Riyadh, Saudi Arabia",
    year: "2023",
    area: "1.2M sq ft",
    status: "Completed",
    desc: "A landmark civic complex redefining public architecture with sustainable design and world-class facilities.",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop",
  },
  {
    id: 2,
    name: "Address Fountain Views",
    type: "Commercial",
    location: "Dubai, UAE",
    year: "2022",
    area: "850K sq ft",
    status: "Completed",
    desc: "Premium mixed-use tower offering panoramic views of the Dubai Fountain and Burj Khalifa.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop",
  },
  {
    id: 3,
    name: "Address Sky View",
    type: "Hospitality",
    location: "Dubai, UAE",
    year: "2023",
    area: "620K sq ft",
    status: "Completed",
    desc: "Iconic twin towers connected by a sky bridge, housing luxury hotel and serviced residences.",
    image: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=800&h=600&fit=crop",
  },
  {
    id: 4,
    name: "Alinma Bank HQ",
    type: "Commercial",
    location: "Riyadh, Saudi Arabia",
    year: "2024",
    area: "430K sq ft",
    status: "Completed",
    desc: "State-of-the-art corporate headquarters designed for one of Saudi Arabia's leading financial institutions.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop",
  },
  {
    id: 5,
    name: "Emirates Logistics Park",
    type: "Industrial",
    location: "Dubai, UAE",
    year: "2024",
    area: "2.1M sq ft",
    status: "Ongoing",
    desc: "Mega logistics and warehousing hub engineered for next-generation supply chain operations.",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=600&fit=crop",
  },
  {
    id: 6,
    name: "Gulf Medical Centre",
    type: "Healthcare",
    location: "Sharjah, UAE",
    year: "2024",
    area: "310K sq ft",
    status: "Ongoing",
    desc: "Advanced multi-specialty hospital built to international healthcare standards with cutting-edge medical infrastructure.",
    image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=800&h=600&fit=crop",
  },
  {
    id: 7,
    name: "Prestige Academy Campus",
    type: "Educational",
    location: "Ras Al Khaimah, UAE",
    year: "2025",
    area: "540K sq ft",
    status: "Upcoming",
    desc: "A world-class educational campus fostering innovation, creativity, and academic excellence.",
    image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&h=600&fit=crop",
  },
  {
    id: 8,
    name: "Palm Grove Villas",
    type: "Residential",
    location: "Dubai, UAE",
    year: "2023",
    area: "180K sq ft",
    status: "Completed",
    desc: "Exclusive gated villa community blending contemporary architecture with lush tropical landscaping.",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&h=600&fit=crop",
  },
  {
    id: 9,
    name: "Horizon Mall Extension",
    type: "Retail",
    location: "Dubai, UAE",
    year: "2025",
    area: "760K sq ft",
    status: "Upcoming",
    desc: "Major retail expansion featuring flagship stores, dining destinations, and entertainment zones.",
    image: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=800&h=600&fit=crop",
  },
];

const ALL = "All";
const types = [ALL, ...Array.from(new Set(projects.map((p) => p.type)))];
const statusColor = {
  Completed: "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30",
  Ongoing: "bg-blue-500/20 text-blue-400 border border-blue-500/30",
  Upcoming: "bg-amber-500/20 text-amber-400 border border-amber-500/30",
};

export default function OurProjects() {
  const navigate = useNavigate();
  const [active, setActive] = useState(ALL);
  const [hovered, setHovered] = useState(null);

  const filtered = active === ALL ? projects : projects.filter((p) => p.type === active);

  const stats = [
    { val: "120+", label: "Projects Delivered" },
    { val: "18+", label: "Cities Presence" },
    { val: "4.9★", label: "Client Rating" },
    { val: "35+", label: "Awards Won" },
  ];

  return (
    <div style={{ background: "#020208", minHeight: "100vh", color: "#fff", fontFamily: "'DM Sans', sans-serif" }}>
      <Navbar />

      {/* HERO BANNER */}
      <div style={{ position: "relative", overflow: "hidden" }}>
        <div style={{
          position: "relative", padding: "80px 40px 60px",
          background: "linear-gradient(160deg, #04040f 0%, #060c1e 60%, #020208 100%)",
          textAlign: "center",
        }}>
          {/* Glow orbs */}
          <div style={{
            position: "absolute", top: "20%", left: "15%", width: 400, height: 400,
            borderRadius: "50%", background: "radial-gradient(circle, rgba(50,100,255,0.12) 0%, transparent 70%)",
            pointerEvents: "none",
          }} />
          <div style={{
            position: "absolute", top: "10%", right: "10%", width: 300, height: 300,
            borderRadius: "50%", background: "radial-gradient(circle, rgba(212,161,58,0.08) 0%, transparent 70%)",
            pointerEvents: "none",
          }} />

          <span style={{
            fontSize: 10, fontWeight: 700, letterSpacing: ".35em",
            color: "#D4A13A", textTransform: "uppercase",
            display: "flex", alignItems: "center", justifyContent: "center", gap: 10, marginBottom: 20,
          }}>
            <span style={{ display: "block", width: 32, height: 1, background: "linear-gradient(90deg,transparent,#D4A13A)" }} />
            Portfolio
            <span style={{ display: "block", width: 32, height: 1, background: "linear-gradient(90deg,#D4A13A,transparent)" }} />
          </span>

          <h1 style={{
            fontSize: "clamp(36px,5.5vw,72px)", fontWeight: 300,
            letterSpacing: "-.02em", lineHeight: 1.1, marginBottom: 16,
            fontFamily: "'Cormorant Garamond', serif",
          }}>
            Our <span style={{
              background: "linear-gradient(135deg,#D4A13A,#f0c96a)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
            }}>Projects</span>
          </h1>
          <p style={{
            fontSize: 14, color: "rgba(160,185,230,0.6)", maxWidth: 480,
            margin: "0 auto 48px", lineHeight: 1.8, fontWeight: 300,
          }}>
            Industry-defining developments across commercial, residential, industrial, healthcare, and educational sectors.
          </p>

          {/* Stats row */}
          <div style={{ display: "flex", justifyContent: "center", gap: 0, flexWrap: "wrap", marginBottom: 8 }}>
            {stats.map((s, i) => (
              <div key={i} style={{
                padding: "20px 36px",
                borderLeft: i === 0 ? "1px solid rgba(255,255,255,0.08)" : "none",
                borderRight: "1px solid rgba(255,255,255,0.08)",
              }}>
                <div style={{ fontSize: "clamp(22px,2.5vw,32px)", fontWeight: 300, color: "#D4A13A", letterSpacing: "-.02em" }}>{s.val}</div>
                <div style={{ fontSize: 10, letterSpacing: ".14em", color: "rgba(160,185,230,0.45)", textTransform: "uppercase", marginTop: 4 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FILTER TABS */}
      <div style={{
        position: "sticky", top: 68, zIndex: 40,
        background: "rgba(2,2,8,0.92)", backdropFilter: "blur(18px)",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
        padding: "0 40px",
        display: "flex", gap: 0, overflowX: "auto",
      }}>
        {types.map((t) => (
          <button key={t} onClick={() => setActive(t)} style={{
            background: "none", border: "none", cursor: "pointer",
            padding: "16px 20px", fontSize: 12, fontWeight: active === t ? 600 : 400,
            color: active === t ? "#D4A13A" : "rgba(160,185,230,0.5)",
            letterSpacing: ".06em", textTransform: "uppercase", whiteSpace: "nowrap",
            borderBottom: active === t ? "2px solid #D4A13A" : "2px solid transparent",
            transition: "all 0.2s",
          }}>
            {t}
          </button>
        ))}
      </div>

      {/* PROJECTS GRID */}
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "60px 40px" }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(360px, 1fr))",
          gap: 24,
        }}>
          {filtered.map((p) => (
            <div
              key={p.id}
              onMouseEnter={() => setHovered(p.id)}
              onMouseLeave={() => setHovered(null)}
              style={{
                position: "relative", borderRadius: 16, overflow: "hidden",
                border: "1px solid rgba(255,255,255,0.07)",
                transition: "transform 0.35s, box-shadow 0.35s, border-color 0.35s",
                transform: hovered === p.id ? "translateY(-6px)" : "translateY(0)",
                boxShadow: hovered === p.id
                  ? "0 24px 60px rgba(0,0,0,0.6), 0 0 0 1px rgba(212,161,58,0.25)"
                  : "0 4px 20px rgba(0,0,0,0.3)",
                cursor: "pointer",
              }}
            >
            
            
              {/* Image */}
              <div style={{ position: "relative", height: 240, overflow: "hidden" }}>
                <img
                  src={p.image}
                  alt={p.name}
                  style={{
                    width: "100%", height: "100%", objectFit: "cover",
                    transition: "transform 0.6s",
                    transform: hovered === p.id ? "scale(1.06)" : "scale(1)",
                  }}
                />
                <div style={{
                  position: "absolute", inset: 0,
                  background: "linear-gradient(to top, rgba(2,2,8,0.85) 0%, rgba(2,2,8,0.1) 60%, transparent 100%)",
                }} />
                {/* Type badge */}
                <div style={{ position: "absolute", top: 16, left: 16 }}>
                  <span style={{
                    background: "#D4A13A", color: "#051614",
                    fontSize: 10, fontWeight: 800, letterSpacing: ".1em",
                    textTransform: "uppercase", padding: "4px 12px", borderRadius: 20,
                  }}>{p.type}</span>
                </div>
                {/* Status badge */}
                <div style={{ position: "absolute", top: 16, right: 16 }}>
                  <span style={{
                    fontSize: 10, fontWeight: 600, padding: "4px 10px",
                    borderRadius: 20, letterSpacing: ".06em",
                  }} className={statusColor[p.status]}>{p.status}</span>
                </div>
              </div>

              {/* Content */}
              <div style={{
                padding: "20px 24px 24px",
                background: "linear-gradient(160deg, rgba(10,15,35,0.95) 0%, rgba(2,2,8,0.98) 100%)",
              }}>
                <h3 style={{ fontSize: 20, fontWeight: 600, marginBottom: 8, letterSpacing: "-.01em" }}>{p.name}</h3>
                <p style={{ fontSize: 13, color: "rgba(160,185,230,0.55)", lineHeight: 1.7, marginBottom: 16, fontWeight: 300 }}>{p.desc}</p>

                <div style={{ display: "flex", alignItems: "center", gap: 20, marginBottom: 20 }}>
                  <span style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 12, color: "rgba(160,185,230,0.5)" }}>
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
                    </svg>
                    {p.location}
                  </span>
                  <span style={{ fontSize: 12, color: "rgba(160,185,230,0.5)" }}>{p.year}</span>
                  <span style={{ display: "flex", alignItems: "center", gap: 5, fontSize: 12, color: "#D4A13A" }}>
                    <div style={{ width: 16, height: 1, background: "#D4A13A" }} />
                    {p.area}
                  </span>
                </div>

                <button style={{
                  display: "flex", alignItems: "center", gap: 8,
                  background: hovered === p.id ? "#D4A13A" : "rgba(212,161,58,0.1)",
                  border: "1px solid rgba(212,161,58,0.3)",
                  color: hovered === p.id ? "#051614" : "#D4A13A",
                  fontSize: 12, fontWeight: 700, letterSpacing: ".06em",
                  textTransform: "uppercase", padding: "10px 20px", borderRadius: 8,
                  cursor: "pointer", transition: "all 0.25s",
                }}>
                  View Project
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div style={{ textAlign: "center", padding: "80px 0", color: "rgba(160,185,230,0.4)", fontSize: 14 }}>
            No projects found for this category.
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}
