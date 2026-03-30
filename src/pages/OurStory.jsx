import Footer from "../components/Footer";

export default function OurStory() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto px-6 py-24">
        <div className="mb-12">
          <span className="text-xs font-bold text-[#D4A13A] uppercase tracking-widest">Our Story</span>
          <h1 className="text-4xl font-bold text-[#051614] mt-4 mb-6">The journey behind Arvish Properties</h1>
          <p className="text-gray-600 mb-4">Discover the vision, values, and milestones that have shaped our brand. This page highlights the purpose and people behind every landmark project.</p>
          <p className="text-gray-600">From humble beginnings to industry leadership, our story is built on trust, quality, and ambition.</p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {[
            { title: "Our Vision", description: "A future where excellence and sustainability lead every build." },
            { title: "Our Values", description: "Integrity, innovation, and client-first service." },
            { title: "Our Team", description: "Experienced professionals driving every phase of delivery." },
          ].map((item, index) => (
            <div key={index} className="bg-white rounded-3xl p-8 shadow-sm">
              <p className="text-sm text-[#D4A13A] uppercase tracking-widest mb-3">{item.title}</p>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
