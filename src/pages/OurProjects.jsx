import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const projects = [
  {
    id: 1,
    name: "Residential Apartment Project",
    type: "Residential",
    location: "Hyderabad",
    year: "2024",
    area: "25,000 sq ft",
    status: "Completed",
    desc: "A modern residential apartment designed for comfort, functionality, and long-term durability using high-quality materials.",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800",
  },
  {
    id: 2,
    name: "Commercial Office Building",
    type: "Commercial",
    location: "Hyderabad",
    year: "2023",
    area: "40,000 sq ft",
    status: "Completed",
    desc: "A commercial office space built with modern design, efficient layouts, and high-quality construction standards.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800",
  },
  {
    id: 3,
    name: "Independent Villa Construction",
    type: "Residential",
    location: "Hyderabad",
    year: "2024",
    area: "5,000 sq ft",
    status: "Completed",
    desc: "A premium villa project focused on modern architecture, spacious design, and high-end finishing.",
    image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=800",
  },
  {
    id: 4,
    name: "Retail Shop Complex",
    type: "Commercial",
    location: "Telangana",
    year: "2023",
    area: "15,000 sq ft",
    status: "Completed",
    desc: "A retail complex designed for business use with optimized space planning and durability.",
    image: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=800",
  },
  {
    id: 5,
    name: "Industrial Warehouse",
    type: "Industrial",
    location: "Telangana",
    year: "2024",
    area: "60,000 sq ft",
    status: "Ongoing",
    desc: "A large-scale industrial warehouse designed for efficient storage and operations.",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800",
  },
  {
    id: 6,
    name: "School Building Project",
    type: "Educational",
    location: "Hyderabad",
    year: "2024",
    area: "20,000 sq ft",
    status: "Ongoing",
    desc: "An educational building designed to provide a safe and modern learning environment.",
    image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800",
  },
];

const ALL = "All";
const types = [ALL, ...Array.from(new Set(projects.map((p) => p.type)))];
const statusColor = {
  Completed: "bg-emerald-100 text-emerald-700",
  Ongoing: "bg-blue-100 text-blue-700",
  Upcoming: "bg-amber-100 text-amber-700",
};

export default function OurProjects() {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState(ALL);
  const [hoveredId, setHoveredId] = useState(null);

  const filtered = activeFilter === ALL ? projects : projects.filter((p) => p.type === activeFilter);

  const stats = [
    { val: "50+", label: "Projects Completed" },
    { val: "5+", label: "Years Experience" },
    { val: "25+", label: "Happy Clients" },
    { val: "100%", label: "Quality Commitment" },
  ];

  return (
    <div className="bg-white min-h-screen">
      <Navbar />

      {/* Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 -left-20 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-float"></div>
        <div className="absolute bottom-20 -right-20 w-96 h-96 bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-float-delayed"></div>
      </div>

      {/* Hero Section */}
      <div className="relative pt-32 pb-16 overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-8 h-0.5 bg-blue-600 rounded-full"></div>
            <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">Portfolio</span>
            <div className="w-8 h-0.5 bg-blue-600 rounded-full"></div>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            Our <span className="bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-600 bg-clip-text text-transparent bg-300% animate-gradient">Projects</span>
          </h1>
          <p className="text-gray-600 max-w-xl mx-auto mb-12 text-base md:text-lg">
            Showcasing our residential, commercial, and industrial projects built with quality, precision, and trust.
          </p>

          {/* Stats Row */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center animate-fade-in-up" style={{ animationDelay: `${idx * 100}ms` }}>
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-1">{stat.val}</div>
                <div className="text-xs text-gray-500 uppercase tracking-wide">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="sticky top-[64px] z-40 bg-white/95 backdrop-blur-sm border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-2 sm:px-6 flex overflow-x-auto gap-1">
          {types.map((type) => (
            <button
              key={type}
              onClick={() => setActiveFilter(type)}
              className={`shrink-0 px-5 py-3 text-sm font-semibold uppercase tracking-wider transition-all duration-300 whitespace-nowrap ${
                activeFilter === type
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "text-gray-500 hover:text-gray-800 border-b-2 border-transparent"
              }`}
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="relative max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((project, idx) => (
            <div
              key={project.id}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
              className="group flex flex-col bg-white rounded-2xl shadow-md border border-gray-100 hover:shadow-xl hover:border-blue-200 transition-all duration-500 transform hover:-translate-y-2 overflow-hidden animate-fade-in-up h-full"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              {/* Image Container */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent" />
                
                {/* Type Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                    {project.type}
                  </span>
                </div>
                
                {/* Status Badge */}
                <div className="absolute top-4 right-4">
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full ${statusColor[project.status]}`}>
                    {project.status}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {project.name}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-2">
                  {project.desc}
                </p>
                
                <div className="flex flex-wrap items-center gap-4 text-xs text-gray-500 mb-5">
                  <span className="flex items-center gap-1">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {project.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {project.year}
                  </span>
                  <span className="flex items-center gap-1 text-blue-600 font-medium">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                    </svg>
                    {project.area}
                  </span>
                </div>

                <button
                  onClick={() => navigate(`/projects/${project.id}`)}
                  className="w-full flex items-center justify-center gap-2 bg-blue-50 text-blue-700 text-sm font-semibold py-2.5 rounded-xl hover:bg-blue-600 hover:text-white transition-all duration-300 group/btn"
                >
                  View Project
                  <svg className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No projects found</h3>
            <p className="text-gray-500">Try selecting a different category</p>
          </div>
        )}
      </div>

      <Footer />

      {/* Animation Styles */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(20px) rotate(-5deg); }
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes gradientShift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 10s ease-in-out infinite;
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
          opacity: 0;
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradientShift 4s ease infinite;
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
}