import Footer from "../components/Footer";

export default function OurStoryDesign() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto px-6 py-24">
        <div className="mb-12">
          <span className="text-xs font-bold text-[#D4A13A] uppercase tracking-widest">Our Story — Design</span>
          <h1 className="text-4xl font-bold text-[#051614] mt-4 mb-6">Design excellence in every detail</h1>
          <p className="text-gray-600 mb-4">Explore how our design team blends aesthetics, functionality, and sustainability to create spaces that delight and endure.</p>
          <p className="text-gray-600">This page showcases our design philosophy, process, and the creative thinking behind the projects we build.</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {[
            { title: "Design Philosophy", description: "Crafting spaces that balance beauty and performance." },
            { title: "Material Innovation", description: "Selecting premium finishes and durable materials." },
            { title: "User Experience", description: "Integrating comfort, flow, and lifestyle into every plan." },
            { title: "Sustainable Design", description: "Turning sustainability into meaningful living spaces." },
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

