import Footer from "../components/Footer";

export default function NriCorner() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto px-6 py-24">
        <div className="mb-12">
          <span className="text-xs font-bold text-[#D4A13A] uppercase tracking-widest">NRI Corner</span>
          <h1 className="text-4xl font-bold text-[#051614] mt-4 mb-6">Supporting overseas investors</h1>
          <p className="text-gray-600 mb-4">Our NRI Corner provides tailored information for non-resident investors seeking premium UAE properties and guidance through every step of the process.</p>
          <p className="text-gray-600">From documentation support to investment benefits, we make the experience seamless and transparent.</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {[
            { title: "Property Guidance", description: "Clear advice for overseas buyers across our developments." },
            { title: "Investment Support", description: "Financial and legal assistance for NRIs." },
            { title: "Relocation Help", description: "Resources to help you settle in the UAE." },
            { title: "Customer Care", description: "Dedicated support for your enquiry and follow-up." },
          ].map((item, index) => (
            <div key={index} className="bg-white rounded-3xl p-10 shadow-sm">
              <h2 className="text-2xl font-bold text-[#051614] mb-3">{item.title}</h2>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
