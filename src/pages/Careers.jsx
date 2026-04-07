import { useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

export default function Careers() {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState("All");
  
  const jobs = [
    { title: "Civil Engineer", dept: "Engineering", location: "Hyderabad", type: "Full-Time" },
    { title: "Site Supervisor", dept: "Construction", location: "Hyderabad", type: "Full-Time" },
    { title: "Interior Designer", dept: "Design", location: "Hyderabad", type: "Full-Time" },
    { title: "Project Coordinator", dept: "Operations", location: "Hyderabad", type: "Full-Time" },
    { title: "Quantity Surveyor", dept: "Finance", location: "Hyderabad", type: "Full-Time" },
    { title: "Safety Officer", dept: "Safety", location: "Telangana", type: "Contract" },
  ];

  // Get unique departments for filter
  const departments = ["All", ...new Set(jobs.map(job => job.dept))];
  
  const filteredJobs = activeFilter === "All" 
    ? jobs 
    : jobs.filter(job => job.dept === activeFilter);

  // Stats data
  const stats = [
    { value: "50+", label: "Projects Completed" },
    { value: "5+", label: "Years Experience" },
    { value: "25+", label: "Team Members" },
    { value: "100%", label: "Commitment to Quality" },
  ];

  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      
      {/* Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 -left-20 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float"></div>
        <div className="absolute bottom-20 -right-20 w-96 h-96 bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float-delayed"></div>
      </div>

      <main className="relative">
        {/* Hero Section */}
        <div className="max-w-7xl mx-auto px-6 pt-24 pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column */}
            <div className="space-y-6 animate-fade-in-up">
              <div className="inline-flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-full">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
                </span>
                <span className="text-xs font-bold text-blue-700 uppercase tracking-wider">Join Our Team</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-600 bg-clip-text text-transparent bg-300% animate-gradient">
                  Build Your Career
                </span>
                <br />
                <span className="text-gray-900">with Arvish Constructions</span>
              </h1>
              
              <p className="text-gray-600 text-lg leading-relaxed">
                We are always looking for skilled and passionate individuals to join our growing team. 
                At Arvish Constructions, you will work on real-world projects and gain valuable experience in the construction industry.
              </p>
              
              <p className="text-gray-600">
                We provide a supportive work environment, opportunities for learning, and the chance to grow your career while contributing to quality construction projects.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 pt-4">
                <button 
                  onClick={() => document.getElementById('open-positions')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  View Open Positions
                </button>
                <button 
                  onClick={() => navigate('/contact')}
                  className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transform hover:scale-105 transition-all duration-300"
                >
                  Contact Us
                </button>
              </div>
            </div>

            {/* Right Column - Why Work With Us */}
            <div className="relative animate-fade-in-up animation-delay-200">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-200 to-indigo-200 rounded-3xl blur-2xl opacity-20"></div>
              <div className="relative bg-white rounded-3xl p-8 shadow-2xl border border-blue-100 transform hover:scale-[1.02] transition-all duration-500">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-100 to-transparent rounded-tr-3xl"></div>
                <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-2">
                  <span className="w-8 h-1 bg-blue-600 rounded-full"></span>
                  Why Work With Us?
                </h3>
                <div className="space-y-6">
                  {[
                    "Work on real construction projects",
                    "Opportunities to learn and grow",
                    "Supportive and professional work environment",
                    "Hands-on industry experience",
                    "Focus on quality and teamwork",
                    "Career development opportunities"
                  ].map((benefit, i) => (
                    <div key={i} className="flex items-center gap-3 group cursor-pointer">
                      <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300">
                        <svg className="w-3 h-3 text-blue-600 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-gray-700 group-hover:text-gray-900 transition-colors">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-blue-50 via-white to-indigo-50 py-12 my-8">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, idx) => (
                <div key={idx} className="text-center group animate-fade-in-up" style={{ animationDelay: `${idx * 100}ms` }}>
                  <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2 group-hover:scale-110 transition-transform duration-300">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600 uppercase tracking-wide">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Open Positions Section */}
        <div id="open-positions" className="max-w-7xl mx-auto px-6 py-16">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12 gap-6">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-3">Open Positions</h2>
              <p className="text-gray-600">Join our team and be part of something extraordinary</p>
            </div>
            
            {/* Filter Chips */}
            <div className="flex flex-wrap gap-2">
              {departments.map((dept) => (
                <button
                  key={dept}
                  onClick={() => setActiveFilter(dept)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 ${
                    activeFilter === dept
                      ? "bg-blue-600 text-white shadow-md"
                      : "bg-gray-100 text-gray-700 hover:bg-blue-100"
                  }`}
                >
                  {dept}
                </button>
              ))}
            </div>
          </div>

          {/* Job Count */}
          <div className="mb-6 text-sm text-gray-500">
            Showing {filteredJobs.length} {filteredJobs.length === 1 ? 'position' : 'positions'}
          </div>

          {/* Jobs List */}
          <div className="space-y-4">
            {filteredJobs.map((job, i) => (
              <div
                key={i}
                className="group bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:border-blue-200 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 animate-fade-in-up"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2 flex-wrap">
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                        {job.title}
                      </h3>
                      <span className="text-xs font-semibold bg-blue-50 text-blue-700 px-3 py-1 rounded-full">
                        {job.type}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                      <span className="flex items-center gap-1">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                        {job.dept}
                      </span>
                      <span className="flex items-center gap-1">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {job.location}
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={() => navigate('/contact')}
                    className="bg-white border-2 border-blue-600 text-blue-600 text-sm font-bold px-6 py-2.5 rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 group/btn"
                  >
                    Apply Now
                    <svg className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {filteredJobs.length === 0 && (
            <div className="text-center py-16 animate-fade-in-up">
              <div className="w-24 h-24 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-12 h-12 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No positions found</h3>
              <p className="text-gray-500">Try selecting a different department filter</p>
            </div>
          )}

          {/* Call to Action */}
          <div className="mt-16 text-center bg-gradient-to-r from-blue-50 to-indigo-50 rounded-3xl p-12 animate-fade-in-up">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Looking for an opportunity?</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              We are always open to connecting with skilled professionals. Send us your details and we will reach out when suitable opportunities are available.
            </p>
            <button
              onClick={() => navigate('/contact')}
              className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg"
            >
              Submit Your Resume
            </button>
          </div>
        </div>
      </main>

      <Footer />

      {/* Custom Animations */}
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
        .animation-delay-200 {
          animation-delay: 0.2s;
        }
        @keyframes ping {
          75%, 100% {
            transform: scale(2);
            opacity: 0;
          }
        }
        .animate-ping {
          animation: ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
      `}</style>
    </div>
  );
}