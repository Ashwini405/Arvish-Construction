import Footer from "../components/Footer";

export default function DiyasExplorations() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto px-6 py-24">
        <div className="mb-12">
          <span className="text-xs font-bold text-[#D4A13A] uppercase tracking-widest">Diya's Explorations</span>
          <h1 className="text-4xl font-bold text-[#051614] mt-4 mb-6">Creative journeys and fresh ideas</h1>
          <p className="text-gray-600 mb-4">Explore the latest concepts, design experiments, and project inspirations from Diya's creative lens. Here we share the stories behind bold ideas and how they shape our built environment.</p>
          <p className="text-gray-600">From immersive design narratives to visionary community themes, this page offers a window into innovation and thoughtful architecture.</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {[
            {
              title: "Design Thinking",
              description: "How our ideas evolve from sketches to real-world spaces.",
            },
            {
              title: "Material Stories",
              description: "The textures, finishes, and materials that define each project.",
            },
            {
              title: "Community Focus",
              description: "Designs that support people, culture, and modern living.",
            },
            {
              title: "Future Living",
              description: "Concepts for the next generation of sustainable homes.",
            },
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
