import Footer from "../components/Footer";

export default function ScheduleSiteVisit() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto px-6 py-24">
        <div className="mb-12">
          <span className="text-xs font-bold text-[#D4A13A] uppercase tracking-widest">Schedule a Site Visit</span>
          <h1 className="text-4xl font-bold text-[#051614] mt-4 mb-6">Book your site visit today</h1>
          <p className="text-gray-600 mb-4">Arrange a convenient visit to our projects and experience the quality firsthand. Our team will help you select the best time and location.</p>
          <p className="text-gray-600">A site visit gives you the confidence to explore layouts, finishes, and the neighborhood with expert support.</p>
        </div>

        <div className="bg-white rounded-3xl p-12 shadow-sm">
          <h2 className="text-2xl font-bold text-[#051614] mb-4">Visit details</h2>
          <p className="text-gray-600">Choose your preferred destination and let us know when you'd like to tour our properties. We’ll arrange everything for you.</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
