import Footer from "../components/Footer";

export default function ReachUs() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto px-6 py-24">
        <div className="mb-12">
          <span className="text-xs font-bold text-[#D4A13A] uppercase tracking-widest">Reach Us</span>
          <h1 className="text-4xl font-bold text-[#051614] mt-4 mb-6">Stay connected with Arvish</h1>
          <p className="text-gray-600 mb-4">Find all the ways to reach our team, from office details to direct contact channels.</p>
          <p className="text-gray-600">Whether you prefer email, phone, or a visit, we are always ready to assist you.</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {[
            { title: "Office Locations", description: "Find our headquarters and regional offices." },
            { title: "Contact Channels", description: "Email, phone, and support options for every enquiry." },
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
