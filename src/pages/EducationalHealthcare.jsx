import Header from "../components/Header";
import Footer from "../components/Footer";

export default function EducationalHealthcare() {
  const projects = [
    { name: "Prestige International School", location: "Dubai", type: "K-12 School", status: "Completed" },
    { name: "Gulf Medical Centre", location: "Sharjah", type: "Hospital", status: "Completed" },
    { name: "Emirates University Campus", location: "Ajman", type: "University", status: "Ongoing" },
    { name: "Al Shifa Specialist Clinic", location: "Abu Dhabi", type: "Clinic", status: "Upcoming" },
  ];

  const features = [
    { icon: "🏫", title: "Schools & Universities", desc: "Safe, inspiring learning environments built to international educational standards." },
    { icon: "🏥", title: "Hospitals & Clinics", desc: "Healthcare facilities designed for patient safety, operational efficiency, and clinical excellence." },
    { icon: "♿", title: "Accessibility First", desc: "All facilities are fully accessible and compliant with UAE disability and safety regulations." },
    { icon: "🔬", title: "Specialist Facilities", desc: "Laboratories, operating theatres, and specialist rooms built to exact technical specifications." },
  ];

  const statusColor = { Completed: "bg-green-100 text-green-700", Ongoing: "bg-blue-100 text-blue-700", Upcoming: "bg-yellow-100 text-yellow-700" };

  return (
    <div className="bg-gray-50 min-h-screen">
      <Header />

      <div className="bg-[#051614] text-white py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <span className="text-xs font-bold text-[#D4A13A] uppercase tracking-widest">Services / Educational & Healthcare</span>
          <h1 className="text-5xl font-bold mt-4 mb-6">Educational & Healthcare</h1>
          <p className="text-gray-300 max-w-2xl text-lg">Building the foundations of community wellbeing — from world-class schools and universities to state-of-the-art hospitals and clinics.</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {features.map((f, i) => (
            <div key={i} className="bg-white rounded-2xl p-8 shadow-sm text-center">
              <div className="text-4xl mb-4">{f.icon}</div>
              <h3 className="text-lg font-bold text-[#051614] mb-2">{f.title}</h3>
              <p className="text-gray-500 text-sm">{f.desc}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="h-80 bg-gradient-to-br from-[#051614] to-[#0a3d35] rounded-3xl" />
          <div>
            <span className="text-xs font-bold text-[#D4A13A] uppercase tracking-widest">Our Commitment</span>
            <h2 className="text-3xl font-bold text-[#051614] mt-3 mb-6">Built for People, Built to Last</h2>
            <p className="text-gray-600 mb-4">Educational and healthcare facilities carry a unique responsibility — they serve communities for generations. We approach every such project with the highest standards of safety, functionality, and long-term durability.</p>
            <p className="text-gray-600 mb-8">Our teams work closely with educators, healthcare professionals, and regulatory bodies to ensure every facility meets and exceeds operational requirements from day one.</p>
            <div className="flex gap-8">
              <div className="text-center">
                <p className="text-3xl font-black text-[#D4A13A]">80+</p>
                <p className="text-xs text-gray-500 mt-1">Facilities Built</p>
              </div>
              <div className="w-px bg-gray-200" />
              <div className="text-center">
                <p className="text-3xl font-black text-[#D4A13A]">25+</p>
                <p className="text-xs text-gray-500 mt-1">Healthcare Projects</p>
              </div>
              <div className="w-px bg-gray-200" />
              <div className="text-center">
                <p className="text-3xl font-black text-[#D4A13A]">100%</p>
                <p className="text-xs text-gray-500 mt-1">Code Compliant</p>
              </div>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-[#051614] mb-8">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-sm flex">
              <div className="w-32 bg-gradient-to-b from-[#051614] to-[#0a3d35] flex-shrink-0" />
              <div className="p-6">
                <h3 className="text-lg font-bold text-[#051614] mb-1">{p.name}</h3>
                <p className="text-sm text-gray-500 mb-3">{p.location} · {p.type}</p>
                <span className={`text-xs font-semibold px-3 py-1 rounded-full ${statusColor[p.status]}`}>{p.status}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
