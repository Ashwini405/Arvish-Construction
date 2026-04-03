import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function GroupCompanies() {
  const companies = [
    { name: "Prestige Contracting LLC", sector: "General Contracting", desc: "The flagship entity handling large-scale construction projects across the UAE.", est: "1994" },
    { name: "Prestige Interiors", sector: "Interior Design & Fit-Out", desc: "Specializing in luxury interior design and complete fit-out solutions for residential and commercial spaces.", est: "2001" },
    { name: "Prestige Real Estate", sector: "Property Development", desc: "Developing premium residential and commercial properties across the GCC region.", est: "2005" },
    { name: "Prestige Facilities Management", sector: "FM Services", desc: "Providing comprehensive facilities management and maintenance services for all property types.", est: "2010" },
    { name: "Prestige Green Build", sector: "Sustainable Construction", desc: "Focused on green building solutions and LEED-certified construction projects.", est: "2015" },
    { name: "Prestige International UK", sector: "International Operations", desc: "Managing Prestige Group's operations and investments in the United Kingdom.", est: "2018" },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      <div className="max-w-6xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <span className="text-xs font-bold text-[#D4A13A] uppercase tracking-widest">Our Ecosystem</span>
          <h1 className="text-4xl font-bold text-[#051614] mt-3">Group Companies</h1>
          <p className="text-gray-500 mt-4 max-w-xl mx-auto">A diversified group of companies delivering excellence across construction, real estate, and related sectors.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {companies.map((c, i) => (
            <div key={i} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow flex gap-6">
              <div className="w-14 h-14 rounded-xl bg-[#051614] flex items-center justify-center text-[#D4A13A] font-black text-xl flex-shrink-0">
                {c.name.charAt(0)}
              </div>
              <div>
                <span className="text-xs font-bold text-[#D4A13A] uppercase tracking-wider">{c.sector}</span>
                <h2 className="text-lg font-bold text-[#051614] mt-1 mb-2">{c.name}</h2>
                <p className="text-gray-500 text-sm mb-3">{c.desc}</p>
                <span className="text-xs text-gray-400">Est. {c.est}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
