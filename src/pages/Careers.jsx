import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

export default function Careers() {
  const navigate = useNavigate();
  const jobs = [
    { title: "Senior Civil Engineer", dept: "Engineering", location: "Dubai, UAE", type: "Full-Time" },
    { title: "Project Manager", dept: "Operations", location: "Sharjah, UAE", type: "Full-Time" },
    { title: "Interior Designer", dept: "Design", location: "Dubai, UAE", type: "Full-Time" },
    { title: "Site Supervisor", dept: "Construction", location: "Ajman, UAE", type: "Full-Time" },
    { title: "Quantity Surveyor", dept: "Finance", location: "Abu Dhabi, UAE", type: "Full-Time" },
    { title: "HSE Officer", dept: "Safety", location: "Dubai, UAE", type: "Contract" },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      <div className="max-w-6xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <span className="text-xs font-bold text-[#D4A13A] uppercase tracking-widest">Join Our Team</span>
            <h1 className="text-4xl font-bold text-[#051614] mt-3 mb-6">Build Your Career with Prestige Group</h1>
            <p className="text-gray-600 mb-4">We are always looking for talented, passionate individuals to join our growing team. At Prestige Group, you'll work on landmark projects and grow alongside industry leaders.</p>
            <p className="text-gray-600">We offer competitive salaries, career development programs, and a collaborative work environment that values innovation and excellence.</p>
          </div>
          <div className="bg-[#051614] rounded-3xl p-10 text-white">
            <h3 className="text-xl font-bold mb-6">Why Work With Us?</h3>
            {["Competitive compensation packages", "Career growth & mentorship", "Work on iconic projects", "Diverse & inclusive culture", "Health & wellness benefits"].map((b, i) => (
              <div key={i} className="flex items-center gap-3 mb-4">
                <div className="w-2 h-2 bg-[#D4A13A] rounded-full flex-shrink-0" />
                <span className="text-gray-300 text-sm">{b}</span>
              </div>
            ))}
          </div>
        </div>

        <h2 className="text-2xl font-bold text-[#051614] mb-8">Open Positions</h2>
        <div className="space-y-4">
          {jobs.map((job, i) => (
            <div key={i} className="bg-white rounded-2xl p-6 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h3 className="text-lg font-bold text-[#051614]">{job.title}</h3>
                <p className="text-sm text-gray-500">{job.dept} · {job.location}</p>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-xs font-semibold bg-[#D4A13A]/10 text-[#D4A13A] px-3 py-1 rounded-full">{job.type}</span>
                <button
                  onClick={() => navigate('/contact')}
                  className="bg-[#051614] text-white text-sm font-bold px-6 py-2 rounded-full hover:bg-[#0a2e2a] transition-colors"
                >
                  Apply Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
