import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function News() {
  const news = [
    { title: "Prestige Group Wins Best Developer Award 2025", date: "June 10, 2025", tag: "Award", desc: "We are proud to announce that Prestige Group has been recognized as the Best Developer of the Year at the UAE Construction Excellence Awards." },
    { title: "New Partnership with Green Build Initiative", date: "May 22, 2025", tag: "Partnership", desc: "Prestige Group signs a strategic partnership with the UAE Green Build Initiative to accelerate sustainable construction practices." },
    { title: "Groundbreaking Ceremony for Horizon Mall Extension", date: "April 15, 2025", tag: "Project Launch", desc: "The groundbreaking ceremony for the Horizon Mall Extension project was held in Dubai, marking the start of a major retail development." },
    { title: "Prestige Group Expands to London", date: "March 5, 2025", tag: "Expansion", desc: "Prestige Group officially opens its UK office in London, marking a significant milestone in the company's international growth strategy." },
    { title: "Annual Safety Excellence Recognition", date: "February 18, 2025", tag: "Safety", desc: "Our HSE team achieved zero lost-time incidents across all active project sites in 2024, earning the Annual Safety Excellence recognition." },
    { title: "Q4 2024 Financial Results Announced", date: "January 30, 2025", tag: "Financial", desc: "Prestige Group reports a 22% revenue growth in Q4 2024, driven by strong performance in residential and commercial segments." },
  ];

  const tagColor = { Award: "bg-yellow-100 text-yellow-700", Partnership: "bg-blue-100 text-blue-700", "Project Launch": "bg-green-100 text-green-700", Expansion: "bg-purple-100 text-purple-700", Safety: "bg-red-100 text-red-700", Financial: "bg-gray-100 text-gray-700" };

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      <div className="max-w-6xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <span className="text-xs font-bold text-[#D4A13A] uppercase tracking-widest">Latest Updates</span>
          <h1 className="text-4xl font-bold text-[#051614] mt-3">News & Press</h1>
          <p className="text-gray-500 mt-4 max-w-xl mx-auto">Stay up to date with the latest announcements, milestones, and achievements from Prestige Group.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {news.map((n, i) => (
            <div key={i} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex justify-between items-center mb-4">
                <span className={`text-xs font-bold px-3 py-1 rounded-full ${tagColor[n.tag]}`}>{n.tag}</span>
                <span className="text-xs text-gray-400">{n.date}</span>
              </div>
              <h2 className="text-lg font-bold text-[#051614] mb-3">{n.title}</h2>
              <p className="text-gray-500 text-sm mb-4">{n.desc}</p>
              <button className="text-sm font-bold text-[#D4A13A] hover:underline">Read Full Story →</button>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
