import { useRef, useState, useEffect, useCallback } from "react";

const projects = [
  {
    id: 1,
    title: "Administrative City",
    category: "Culture & Public Buildings",
    location: "Riyadh, Saudi Arabia",
    year: "2023",
    area: "1.2M sq ft",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=1000&fit=crop",
  },
  {
    id: 2,
    title: "Address Fountain Views",
    category: "Commercial",
    location: "Dubai, UAE",
    year: "2022",
    area: "850K sq ft",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=1000&fit=crop",
  },
  {
    id: 3,
    title: "Address Sky View",
    category: "Hospitality",
    location: "Dubai, UAE",
    year: "2023",
    area: "620K sq ft",
    image: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=800&h=1000&fit=crop",
  },
  {
    id: 4,
    title: "Alinma Bank HQ",
    category: "Commercial",
    location: "Riyadh, Saudi Arabia",
    year: "2024",
    area: "430K sq ft",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=1000&fit=crop",
  },
  {
    id: 5,
    title: "Emirates Logistics Park",
    category: "Industrial",
    location: "Dubai, UAE",
    year: "2024",
    area: "2.1M sq ft",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=1000&fit=crop",
  },
  {
    id: 6,
    title: "Gulf Medical Centre",
    category: "Healthcare",
    location: "Sharjah, UAE",
    year: "2024",
    area: "310K sq ft",
    image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=800&h=1000&fit=crop",
  },
  {
    id: 7,
    title: "Prestige Academy Campus",
    category: "Educational",
    location: "Ras Al Khaimah, UAE",
    year: "2025",
    area: "540K sq ft",
    image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&h=1000&fit=crop",
  },
];

const CARD_WIDTH = 280;
const CARD_GAP = 14;
const SCROLL_STEP = CARD_WIDTH + CARD_GAP;

export default function Projects() {
  const trackRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // drag state
  const isDragging = useRef(false);
  const dragStartX = useRef(0);
  const scrollStartLeft = useRef(0);

  const updateScrollState = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 4);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 4);
    const idx = Math.round(el.scrollLeft / SCROLL_STEP);
    setActiveIndex(Math.min(idx, projects.length - 1));
  }, []);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    el.addEventListener("scroll", updateScrollState, { passive: true });
    updateScrollState();
    return () => el.removeEventListener("scroll", updateScrollState);
  }, [updateScrollState]);

  const scrollTo = (dir) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * SCROLL_STEP, behavior: "smooth" });
  };

  const scrollToIndex = (i) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollTo({ left: i * SCROLL_STEP, behavior: "smooth" });
  };

  // Mouse drag handlers
  const onMouseDown = (e) => {
    isDragging.current = true;
    dragStartX.current = e.pageX;
    scrollStartLeft.current = trackRef.current.scrollLeft;
    trackRef.current.style.cursor = "grabbing";
    trackRef.current.style.userSelect = "none";
  };

  const onMouseMove = (e) => {
    if (!isDragging.current) return;
    const dx = e.pageX - dragStartX.current;
    trackRef.current.scrollLeft = scrollStartLeft.current - dx;
  };

  const onMouseUp = () => {
    isDragging.current = false;
    if (trackRef.current) {
      trackRef.current.style.cursor = "grab";
      trackRef.current.style.userSelect = "";
    }
  };

  return (
    <section className="relative py-12 overflow-hidden">
      {/* Full-bleed background image with dark overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#051614]/75 backdrop-blur-[2px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* Header — centred */}
        <div className="text-center mb-8">
          <span className="text-xs font-bold text-[#D4A13A] uppercase tracking-widest">
            What We Build
          </span>
          <h2 className="text-4xl font-bold text-white mt-3">Our Projects</h2>
          <p className="text-gray-400 mt-3 text-sm max-w-xl mx-auto">
            Industry-defining developments across commercial, residential, industrial,
            healthcare, and educational sectors.
          </p>

          {/* Arrow controls — centred below subtitle */}
          <div className="flex items-center justify-center gap-3 mt-6">
            <button
              onClick={() => scrollTo(-1)}
              disabled={!canScrollLeft}
              className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-300
                ${canScrollLeft
                  ? "border-[#D4A13A] text-[#D4A13A] hover:bg-[#D4A13A] hover:text-[#051614]"
                  : "border-white/20 text-white/20 cursor-not-allowed"}`}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>
            <button
              onClick={() => scrollTo(1)}
              disabled={!canScrollRight}
              className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-300
                ${canScrollRight
                  ? "border-[#D4A13A] text-[#D4A13A] hover:bg-[#D4A13A] hover:text-[#051614]"
                  : "border-white/20 text-white/20 cursor-not-allowed"}`}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          </div>
        </div>

        {/* Scrollable track */}
        <div
          ref={trackRef}
          className="flex gap-4 overflow-x-auto pb-4 cursor-grab"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          onMouseDown={onMouseDown}
          onMouseMove={onMouseMove}
          onMouseUp={onMouseUp}
          onMouseLeave={onMouseUp}
        >
          <style>{`.projects-track::-webkit-scrollbar { display: none; }`}</style>

          {projects.map((project, i) => (
            <div
              key={project.id}
              className="group relative flex-shrink-0 overflow-hidden rounded-2xl"
              style={{ width: CARD_WIDTH, height: 380 }}
            >
              {/* Image */}
              <img
                src={project.image}
                alt={project.title}
                draggable={false}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              {/* Top badge */}
              <div className="absolute top-5 left-5">
                <span className="bg-[#D4A13A] text-[#051614] text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full">
                  {project.category}
                </span>
              </div>

              {/* Bottom content */}
              <div className="absolute bottom-0 left-0 right-0 p-5">
                {/* Meta row */}
                <div className="flex items-center gap-4 mb-3">
                  <span className="flex items-center gap-1.5 text-gray-400 text-xs">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    {project.location}
                  </span>
                  <span className="w-1 h-1 rounded-full bg-gray-600" />
                  <span className="text-gray-400 text-xs">{project.year}</span>
                </div>

                <h3 className="text-white text-2xl font-bold leading-tight mb-2">
                  {project.title}
                </h3>

                {/* Area stat */}
                <div className="flex items-center gap-2 mb-6">
                  <div className="h-px w-6 bg-[#D4A13A]" />
                  <span className="text-[#D4A13A] text-xs font-semibold tracking-wide">
                    {project.area}
                  </span>
                </div>

                {/* CTA — slides up on hover */}
                <div className="translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400">
                  <button className="flex items-center gap-2 bg-[#D4A13A] hover:bg-amber-400 text-[#051614] text-sm font-bold px-5 py-2.5 rounded-full transition-colors duration-200">
                    View Project
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-4 h-4">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dot indicators */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {projects.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollToIndex(i)}
              className={`rounded-full transition-all duration-300 ${
                i === activeIndex
                  ? "w-8 h-2 bg-[#D4A13A]"
                  : "w-2 h-2 bg-white/25 hover:bg-white/50"
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
