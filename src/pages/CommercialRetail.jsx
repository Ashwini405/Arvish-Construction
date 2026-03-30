import Footer from "../components/Footer";

export default function CommercialRetail() {
  const projects = [
    { name: "Prestige Business Tower", location: "Dubai", type: "Office Tower", status: "Completed" },
    { name: "Marina Retail Plaza", location: "Dubai", type: "Shopping Mall", status: "Completed" },
    { name: "Sharjah Trade Centre", location: "Sharjah", type: "Mixed-Use", status: "Ongoing" },
    { name: "Ajman Commercial Hub", location: "Ajman", type: "Retail Park", status: "Upcoming" },
  ];

  const features = [
    { icon: "🏢", title: "Office Towers", desc: "Grade-A office spaces designed for productivity, prestige, and modern business needs." },
    { icon: "🛍️", title: "Retail Spaces", desc: "High-footfall retail environments that maximize customer experience and brand visibility." },
    { icon: "🏨", title: "Mixed-Use Developments", desc: "Integrated developments combining retail, office, and hospitality under one roof." },
    { icon: "🅿️", title: "Parking & Infrastructure", desc: "Smart parking structures and supporting infrastructure for commercial complexes." },
  ];

  const statusColor = { Completed: "bg-green-100 text-green-700", Ongoing: "bg-blue-100 text-blue-700", Upcoming: "bg-yellow-100 text-yellow-700" };

  return (
    <div className="bg-gray-50 min-h-screen">

      <div className="bg-[#051614] text-white py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <span className="text-xs font-bold text-[#D4A13A] uppercase tracking-widest">Services / Commercial & Retail</span>
          <h1 className="text-5xl font-bold mt-4 mb-6">Commercial & Retail</h1>
          <p className="text-gray-300 max-w-2xl text-lg">Delivering iconic office towers, retail destinations, and mixed-use developments that drive business growth and define city skylines.</p>
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
            <span className="text-xs font-bold text-[#D4A13A] uppercase tracking-widest">Why Choose Us</span>
            <h2 className="text-3xl font-bold text-[#051614] mt-3 mb-6">Spaces That Work as Hard as You Do</h2>
            <p className="text-gray-600 mb-4">Our commercial and retail projects are engineered for performance. We understand that every square metre of commercial space must deliver returns — so we design and build with efficiency, aesthetics, and functionality at the forefront.</p>
            <p className="text-gray-600 mb-8">With deep expertise in UAE commercial regulations and market demands, we deliver projects that attract tenants, customers, and investors alike.</p>
            <div className="flex gap-8">
              <div className="text-center">
                <p className="text-3xl font-black text-[#D4A13A]">150+</p>
                <p className="text-xs text-gray-500 mt-1">Commercial Projects</p>
              </div>
              <div className="w-px bg-gray-200" />
              <div className="text-center">
                <p className="text-3xl font-black text-[#D4A13A]">2M+</p>
                <p className="text-xs text-gray-500 mt-1">Sq Ft Built</p>
              </div>
              <div className="w-px bg-gray-200" />
              <div className="text-center">
                <p className="text-3xl font-black text-[#D4A13A]">50+</p>
                <p className="text-xs text-gray-500 mt-1">Corporate Clients</p>
              </div>
            </div>
          </div>
          <div className="h-80 bg-gradient-to-br from-[#051614] to-[#0a3d35] rounded-3xl" />
        </div>

        <h2 className="text-2xl font-bold text-[#051614] mb-8">Featured Commercial Projects</h2>
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
