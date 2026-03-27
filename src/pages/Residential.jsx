import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Residential() {
  const projects = [
    { name: "Palm Grove Villas", location: "Dubai", units: "48 Villas", status: "Completed" },
    { name: "Skyline Residences", location: "Sharjah", units: "120 Apartments", status: "Completed" },
    { name: "Al Noor Heights", location: "Ajman", units: "200 Apartments", status: "Ongoing" },
    { name: "Prestige Garden Homes", location: "Abu Dhabi", units: "64 Townhouses", status: "Upcoming" },
  ];

  const features = [
    { icon: "🏗️", title: "Custom Design", desc: "Tailored architectural designs that reflect your lifestyle and vision." },
    { icon: "🌿", title: "Sustainable Living", desc: "Eco-friendly materials and energy-efficient systems built into every home." },
    { icon: "🔒", title: "Smart Security", desc: "Integrated smart home security systems for complete peace of mind." },
    { icon: "🏊", title: "Premium Amenities", desc: "World-class amenities including pools, gyms, and landscaped gardens." },
  ];

  const statusColor = { Completed: "bg-green-100 text-green-700", Ongoing: "bg-blue-100 text-blue-700", Upcoming: "bg-yellow-100 text-yellow-700" };

  return (
    <div className="bg-gray-50 min-h-screen">
      <Header />

      <div className="bg-[#051614] text-white py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <span className="text-xs font-bold text-[#D4A13A] uppercase tracking-widest">Services / Residential</span>
          <h1 className="text-5xl font-bold mt-4 mb-6">Residential Construction</h1>
          <p className="text-gray-300 max-w-2xl text-lg">From luxury villas to high-rise apartments, we craft living spaces that combine elegance, comfort, and lasting quality.</p>
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
            <span className="text-xs font-bold text-[#D4A13A] uppercase tracking-widest">Our Approach</span>
            <h2 className="text-3xl font-bold text-[#051614] mt-3 mb-6">Homes Built Around You</h2>
            <p className="text-gray-600 mb-4">We believe every home should be a reflection of its owner. Our residential construction process begins with a deep understanding of your needs, preferences, and budget — then we bring that vision to life with precision and care.</p>
            <p className="text-gray-600 mb-8">From foundation to finishing, our experienced teams manage every detail, ensuring quality at every stage of construction.</p>
            <div className="flex gap-8">
              <div className="text-center">
                <p className="text-3xl font-black text-[#D4A13A]">300+</p>
                <p className="text-xs text-gray-500 mt-1">Homes Delivered</p>
              </div>
              <div className="w-px bg-gray-200" />
              <div className="text-center">
                <p className="text-3xl font-black text-[#D4A13A]">98%</p>
                <p className="text-xs text-gray-500 mt-1">Client Satisfaction</p>
              </div>
              <div className="w-px bg-gray-200" />
              <div className="text-center">
                <p className="text-3xl font-black text-[#D4A13A]">30+</p>
                <p className="text-xs text-gray-500 mt-1">Years Experience</p>
              </div>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-[#051614] mb-8">Featured Residential Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-sm flex">
              <div className="w-32 bg-gradient-to-b from-[#051614] to-[#0a3d35] flex-shrink-0" />
              <div className="p-6">
                <h3 className="text-lg font-bold text-[#051614] mb-1">{p.name}</h3>
                <p className="text-sm text-gray-500 mb-3">{p.location} · {p.units}</p>
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
