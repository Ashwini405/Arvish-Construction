import Footer from "../components/Footer";

export default function Blog() {
  const posts = [
    { title: "Top Construction Trends in 2025", date: "Jan 15, 2025", category: "Industry", desc: "Exploring the latest innovations shaping the construction industry across the UAE and beyond." },
    { title: "Sustainable Building Practices", date: "Feb 3, 2025", category: "Sustainability", desc: "How Prestige Group is leading the way in eco-friendly construction and green building certifications." },
    { title: "Luxury Residential Design Tips", date: "Mar 10, 2025", category: "Design", desc: "Key design principles behind our award-winning residential projects in Dubai and Sharjah." },
    { title: "Commercial Real Estate Outlook", date: "Apr 5, 2025", category: "Market", desc: "A deep dive into the commercial property market trends across the GCC region for 2025." },
    { title: "Smart Buildings & IoT Integration", date: "May 20, 2025", category: "Technology", desc: "How we integrate smart technology into modern construction for better efficiency and comfort." },
    { title: "Project Management Best Practices", date: "Jun 1, 2025", category: "Operations", desc: "Lessons learned from managing large-scale construction projects on time and within budget." },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto px-6 py-24">
        <h1 className="text-4xl font-bold text-[#051614] mb-2">Our Blog</h1>
        <p className="text-gray-500 mb-12">Insights, news, and stories from Prestige Group</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, i) => (
            <div key={i} className="bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-md transition-shadow">
              <div className="h-48 bg-gradient-to-br from-[#051614] to-[#0a2e2a]" />
              <div className="p-6">
                <span className="text-xs font-bold text-[#D4A13A] uppercase tracking-wider">{post.category}</span>
                <h2 className="text-lg font-bold text-[#051614] mt-2 mb-2">{post.title}</h2>
                <p className="text-gray-500 text-sm mb-4">{post.desc}</p>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-gray-400">{post.date}</span>
                  <button className="text-xs font-bold text-[#D4A13A] hover:underline">Read More →</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
