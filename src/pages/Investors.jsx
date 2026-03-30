import Footer from "../components/Footer";

export default function Investors() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto px-6 py-24">
        <div className="mb-12">
          <span className="text-xs font-bold text-[#D4A13A] uppercase tracking-widest">Investor Relations</span>
          <h1 className="text-4xl font-bold text-[#051614] mt-4 mb-6">Invest with confidence</h1>
          <p className="text-gray-600 mb-4">Our investor page provides the latest updates, strategic priorities, and market insights for current and prospective partners.</p>
          <p className="text-gray-600">Learn about our growth trajectory, capital planning, and the strong returns that define our projects.</p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {[
            { label: "Financial Updates", value: "Quarterly reports and investor memos" },
            { label: "Growth Strategy", value: "Where we are headed in the next phase" },
            { label: "Partnership Approach", value: "How we collaborate with stakeholders" },
          ].map((item, index) => (
            <div key={index} className="bg-white rounded-3xl p-8 shadow-sm">
              <p className="text-sm text-[#D4A13A] uppercase tracking-widest mb-3">{item.label}</p>
              <p className="text-gray-600">{item.value}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
