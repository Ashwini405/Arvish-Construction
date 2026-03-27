import Header from "../components/Header";
import Footer from "../components/Footer";

export default function OurProjects() {
  const projects = [
    { name: "Prestige Tower Dubai", type: "Commercial", location: "Dubai, UAE", year: "2023", status: "Completed" },
    { name: "Al Noor Residences", type: "Residential", location: "Sharjah, UAE", year: "2024", status: "Completed" },
    { name: "Emirates Business Park", type: "Industrial", location: "Ajman, UAE", year: "2024", status: "Ongoing" },
    { name: "Greenfield Medical Centre", type: "Healthcare", location: "Abu Dhabi, UAE", year: "2025", status: "Ongoing" },
    { name: "Horizon Mall Extension", type: "Retail", location: "Dubai, UAE", year: "2025", status: "Upcoming" },
    { name: "Prestige Academy Campus", type: "Educational", location: "Ras Al Khaimah, UAE", year: "2025", status: "Upcoming" },
  ];

  const statusColor = { Completed: "bg-green-100 text-green-700", Ongoing: "bg-blue-100 text-blue-700", Upcoming: "bg-yellow-100 text-yellow-700" };

  return (
    <div className="bg-gray-50 min-h-screen">
      <Header />
      <div className="max-w-6xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <span className="text-xs font-bold text-[#D4A13A] uppercase tracking-widest">Portfolio</span>
          <h1 className="text-4xl font-bold text-[#051614] mt-3">Our Projects</h1>
          <p className="text-gray-500 mt-4 max-w-xl mx-auto">A showcase of landmark developments that define skylines and transform communities.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((p, i) => (
            <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="h-52 bg-gradient-to-br from-[#051614] to-[#0a3d35]" />
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <span className="text-xs font-bold text-[#D4A13A] uppercase">{p.type}</span>
                  <span className={`text-xs font-semibold px-2 py-1 rounded-full ${statusColor[p.status]}`}>{p.status}</span>
                </div>
                <h2 className="text-lg font-bold text-[#051614] mb-1">{p.name}</h2>
                <p className="text-sm text-gray-400">{p.location} · {p.year}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
