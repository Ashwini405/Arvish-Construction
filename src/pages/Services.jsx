import Footer from "../components/Footer";

export default function Services() {
  const services = [
    { title: "Residential Construction", icon: "🏠", desc: "Luxury villas, apartments, and gated communities built to the highest standards of comfort and design." },
    { title: "Commercial & Retail", icon: "🏢", desc: "Office towers, shopping malls, and retail spaces that blend functionality with striking architecture." },
    { title: "Educational & Healthcare", icon: "🏥", desc: "Schools, universities, hospitals, and clinics designed for safety, accessibility, and long-term use." },
    { title: "Industrial Projects", icon: "🏭", desc: "Warehouses, factories, and logistics hubs engineered for efficiency and operational excellence." },
    { title: "Interior Fit-Out", icon: "🛋️", desc: "Complete interior design and fit-out services for residential and commercial spaces." },
    { title: "Project Management", icon: "📋", desc: "End-to-end project management ensuring on-time, on-budget delivery for all project types." },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <span className="text-xs font-bold text-[#D4A13A] uppercase tracking-widest">What We Offer</span>
          <h1 className="text-4xl font-bold text-[#051614] mt-3">Our Services</h1>
          <p className="text-gray-500 mt-4 max-w-xl mx-auto">Comprehensive construction and development services tailored to meet the unique needs of every client.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <div key={i} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow border border-gray-100">
              <div className="text-4xl mb-4">{s.icon}</div>
              <h2 className="text-xl font-bold text-[#051614] mb-3">{s.title}</h2>
              <p className="text-gray-500 text-sm">{s.desc}</p>
              <button className="mt-6 text-sm font-bold text-[#D4A13A] hover:underline">Learn More →</button>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
