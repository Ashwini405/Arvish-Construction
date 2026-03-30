import Footer from "../components/Footer";

export default function MediaCenter() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto px-6 py-24">
        <div className="mb-12">
          <span className="text-xs font-bold text-[#D4A13A] uppercase tracking-widest">Media Center</span>
          <h1 className="text-4xl font-bold text-[#051614] mt-4 mb-6">News, stories, and press</h1>
          <p className="text-gray-600 mb-4">Catch up on our latest announcements, media coverage, and press releases. This is the hub for the stories behind our most ambitious developments.</p>
          <p className="text-gray-600">From corporate news to project highlights, the Media Center keeps you informed and connected.</p>
        </div>

        <div className="space-y-6">
          {[
            { title: "Press Release: New Launch", summary: "A fresh milestone in our latest residential development." },
            { title: "In the News", summary: "Coverage from top business and real estate publications." },
            { title: "Media Resources", summary: "Downloadable assets, images, and project briefs." },
          ].map((item, index) => (
            <div key={index} className="bg-white rounded-3xl p-10 shadow-sm">
              <h2 className="text-2xl font-bold text-[#051614] mb-3">{item.title}</h2>
              <p className="text-gray-600">{item.summary}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
