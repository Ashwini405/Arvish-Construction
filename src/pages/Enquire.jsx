import Footer from "../components/Footer";

export default function Enquire() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto px-6 py-24">
        <div className="mb-12">
          <span className="text-xs font-bold text-[#D4A13A] uppercase tracking-widest">Enquire</span>
          <h1 className="text-4xl font-bold text-[#051614] mt-4 mb-6">Send us your enquiry</h1>
          <p className="text-gray-600 mb-4">Have questions about a project or need more information? Use this page to reach our team and start a conversation quickly.</p>
          <p className="text-gray-600">We’ll respond promptly with the support you need to move your enquiry forward.</p>
        </div>

        <div className="bg-white rounded-3xl p-12 shadow-sm">
          <h2 className="text-2xl font-bold text-[#051614] mb-4">What would you like to know?</h2>
          <p className="text-gray-600">Please share your project interests, preferred locations, and the best way to connect. Our team will follow up with personalized guidance.</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
