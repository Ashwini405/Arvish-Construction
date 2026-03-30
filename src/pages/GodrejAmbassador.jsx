import Footer from "../components/Footer";

export default function GodrejAmbassador() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto px-6 py-24">
        <div className="mb-12">
          <span className="text-xs font-bold text-[#D4A13A] uppercase tracking-widest">Godrej Ambassador</span>
          <h1 className="text-4xl font-bold text-[#051614] mt-4 mb-6">An exclusive ambassador experience</h1>
          <p className="text-gray-600 mb-4">Learn more about the Godrej Ambassador program, designed for premium clients and partners seeking exceptional service and access.</p>
          <p className="text-gray-600">This page contains curated content, benefits, and special invitations for ambassador members.</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {[
            { title: "Exclusive Access", description: "Priority previews, events, and ambassador-only offerings." },
            { title: "Premium Support", description: "Dedicated support with personalized attention." },
            { title: "Curated Benefits", description: "Unique privileges crafted for our ambassador community." },
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
