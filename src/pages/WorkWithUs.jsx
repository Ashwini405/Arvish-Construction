import Footer from "../components/Footer";

export default function WorkWithUs() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto px-6 py-24">
        <div className="mb-12">
          <span className="text-xs font-bold text-[#D4A13A] uppercase tracking-widest">Work with Us</span>
          <h1 className="text-4xl font-bold text-[#051614] mt-4 mb-6">Partner with our team</h1>
          <p className="text-gray-600 mb-4">Explore opportunities to collaborate with Arvish Properties, whether you are a professional, contractor, or consultant.</p>
          <p className="text-gray-600">We value teamwork, expertise, and shared commitment to delivering exceptional buildings.</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {[
            { title: "Join Our Team", description: "Find open roles and career opportunities." },
            { title: "Partner With Us", description: "Collaborate on projects and services." },
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
