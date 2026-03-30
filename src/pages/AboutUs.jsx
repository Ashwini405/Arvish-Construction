import Footer from "../components/Footer";

export default function AboutUs() {
  const stats = [
    { value: "30+", label: "Years of Excellence" },
    { value: "500+", label: "Projects Completed" },
    { value: "5000+", label: "Happy Clients" },
    { value: "12", label: "Countries Served" },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <span className="text-xs font-bold text-[#D4A13A] uppercase tracking-widest">Who We Are</span>
            <h1 className="text-4xl font-bold text-[#051614] mt-3 mb-6">Building the Future, One Project at a Time</h1>
            <p className="text-gray-600 mb-4">Prestige Group has been a cornerstone of construction excellence in the UAE since 1994. With a commitment to quality, innovation, and sustainability, we have delivered landmark projects across residential, commercial, and industrial sectors.</p>
            <p className="text-gray-600">Our team of over 2,000 professionals brings unmatched expertise to every project, ensuring timely delivery and the highest standards of craftsmanship.</p>
          </div>
          <div className="h-80 bg-gradient-to-br from-[#051614] to-[#0a2e2a] rounded-3xl" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((s, i) => (
            <div key={i} className="bg-white rounded-2xl p-8 text-center shadow-sm">
              <p className="text-4xl font-black text-[#D4A13A]">{s.value}</p>
              <p className="text-sm text-gray-500 mt-2">{s.label}</p>
            </div>
          ))}
        </div>

        <div className="bg-[#051614] rounded-3xl p-12 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">To deliver world-class construction solutions that exceed client expectations, foster community growth, and uphold the highest standards of integrity and sustainability in every project we undertake.</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
