import Footer from "../components/Footer";

export default function Industrial() {
  const projects = [
    { name: "Emirates Logistics Park", location: "Dubai", type: "Logistics Hub", status: "Completed" },
    { name: "Sharjah Industrial Complex", location: "Sharjah", type: "Manufacturing", status: "Completed" },
    { name: "Gulf Steel Fabrication Plant", location: "Ajman", type: "Factory", status: "Ongoing" },
    { name: "RAK Free Zone Warehouse", location: "Ras Al Khaimah", type: "Warehouse", status: "Upcoming" },
  ];

  const features = [
    { icon: "🏭", title: "Factories & Plants", desc: "Heavy-duty industrial facilities engineered for large-scale manufacturing operations." },
    { icon: "📦", title: "Warehouses & Logistics", desc: "High-capacity storage and distribution centres built for operational efficiency." },
    { icon: "⚙️", title: "Steel Structures", desc: "Pre-engineered and custom steel structures for industrial and commercial applications." },
    { icon: "🔧", title: "MEP & Utilities", desc: "Complete mechanical, electrical, and plumbing systems for industrial environments." },
  ];

  const statusColor = { Completed: "bg-green-100 text-green-700", Ongoing: "bg-blue-100 text-blue-700", Upcoming: "bg-yellow-100 text-yellow-700" };

  return (
    <div className="bg-gray-50 min-h-screen">

      <div className="bg-[#051614] text-white py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <span className="text-xs font-bold text-[#D4A13A] uppercase tracking-widest">Services / Industrial</span>
          <h1 className="text-5xl font-bold mt-4 mb-6">Industrial Construction</h1>
          <p className="text-gray-300 max-w-2xl text-lg">Robust, purpose-built industrial facilities — from warehouses and logistics parks to factories and manufacturing plants — engineered for performance and durability.</p>
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
          <div>
            <span className="text-xs font-bold text-[#D4A13A] uppercase tracking-widest">Our Capability</span>
            <h2 className="text-3xl font-bold text-[#051614] mt-3 mb-6">Built Tough for Industry</h2>
            <p className="text-gray-600 mb-4">Industrial construction demands precision engineering, heavy-duty materials, and an understanding of complex operational requirements. Our industrial division has the expertise and equipment to handle projects of any scale and complexity.</p>
            <p className="text-gray-600 mb-8">We work with manufacturers, logistics operators, and free zone authorities across the UAE to deliver facilities that are ready to operate from day one.</p>
            <div className="flex gap-8">
              <div className="text-center">
                <p className="text-3xl font-black text-[#D4A13A]">100+</p>
                <p className="text-xs text-gray-500 mt-1">Industrial Projects</p>
              </div>
              <div className="w-px bg-gray-200" />
              <div className="text-center">
                <p className="text-3xl font-black text-[#D4A13A]">5M+</p>
                <p className="text-xs text-gray-500 mt-1">Sq Ft Delivered</p>
              </div>
              <div className="w-px bg-gray-200" />
              <div className="text-center">
                <p className="text-3xl font-black text-[#D4A13A]">7</p>
                <p className="text-xs text-gray-500 mt-1">Emirates Covered</p>
              </div>
            </div>
          </div>
          <div className="h-80 bg-gradient-to-br from-[#051614] to-[#0a3d35] rounded-3xl" />
        </div>

        <h2 className="text-2xl font-bold text-[#051614] mb-8">Featured Industrial Projects</h2>
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
