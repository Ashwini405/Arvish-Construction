import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import {
  Calendar,
  User,
  Tag,
  ArrowRight,
  Mail,
  Send,
  Search,
  TrendingUp,
  Clock,
  ChevronRight,
} from "lucide-react";

export default function Blog() {
  const [filter, setFilter] = useState("All");
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const categories = ["All", "Industry", "Sustainability", "Design", "Technology", "Operations"];

  const posts = [
    {
      title: "Top Construction Trends in 2025",
      date: "Jan 15, 2025",
      category: "Industry",
      desc: "Exploring the latest innovations shaping the construction industry across India and beyond – from modular construction to AI-powered project management.",
      author: "Arvish Team",
      readTime: "5 min read",
      featured: true,
    },
    {
      title: "Sustainable Building Practices",
      date: "Feb 3, 2025",
      category: "Sustainability",
      desc: "How Arvish Constructions is leading the way in eco-friendly construction, green building certifications, and reducing carbon footprint.",
      author: "Arvish Team",
      readTime: "4 min read",
      featured: false,
    },
    {
      title: "Luxury Residential Design Tips",
      date: "Mar 10, 2025",
      category: "Design",
      desc: "Key design principles behind our award-winning residential projects in Hyderabad, Mumbai, and Bangalore.",
      author: "Arvish Team",
      readTime: "6 min read",
      featured: false,
    },
    {
      title: "Commercial Real Estate Outlook 2025",
      date: "Apr 5, 2025",
      category: "Industry",
      desc: "A deep dive into the commercial property market trends across India – office spaces, retail, and mixed-use developments.",
      author: "Arvish Team",
      readTime: "7 min read",
      featured: false,
    },
    {
      title: "Smart Buildings & IoT Integration",
      date: "May 20, 2025",
      category: "Technology",
      desc: "How we integrate smart technology into modern construction for better energy efficiency, security, and occupant comfort.",
      author: "Arvish Team",
      readTime: "5 min read",
      featured: false,
    },
    {
      title: "Project Management Best Practices",
      date: "Jun 1, 2025",
      category: "Operations",
      desc: "Lessons learned from managing large-scale construction projects on time and within budget – our proven methodologies.",
      author: "Arvish Team",
      readTime: "8 min read",
      featured: false,
    },
  ];

  const filteredPosts = filter === "All" ? posts : posts.filter((p) => p.category === filter);
  const featuredPost = posts.find((p) => p.featured);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/261949/pexels-photo-261949.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Blog header"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#051614]/70" />
          <div
            className="absolute inset-0 opacity-20 pointer-events-none"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cpath fill='none' stroke='%23D4A13A' stroke-width='0.5' d='M10 0 L10 100 M20 0 L20 100 M30 0 L30 100 M40 0 L40 100 M50 0 L50 100 M60 0 L60 100 M70 0 L70 100 M80 0 L80 100 M90 0 L90 100 M0 10 L100 10 M0 20 L100 20 M0 30 L100 30 M0 40 L100 40 M0 50 L100 50 M0 60 L100 60 M0 70 L100 70 M0 80 L100 80 M0 90 L100 90' /%3E%3C/svg%3E")`,
              backgroundSize: "40px 40px",
            }}
          />
        </div>
        <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-sm font-bold text-[#D4A13A] uppercase tracking-widest border-b border-[#D4A13A] pb-1">
              Insights & Stories
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mt-4 mb-4">Our Blog</h1>
            <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
              Expert insights, industry trends, and company news from Arvish Constructions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* Featured Post */}
        {featuredPost && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="h-64 md:h-auto bg-gradient-to-br from-[#051614] to-[#0a2e2a] flex items-center justify-center">
                  <TrendingUp size={64} className="text-[#D4A13A] opacity-50" />
                </div>
                <div className="p-8 md:p-10">
                  <span className="text-xs font-bold text-[#D4A13A] uppercase tracking-wider bg-[#D4A13A]/10 px-3 py-1 rounded-full">
                    Featured
                  </span>
                  <h2 className="text-2xl md:text-3xl font-bold text-[#051614] mt-4 mb-3">
                    {featuredPost.title}
                  </h2>
                  <p className="text-gray-600 mb-4">{featuredPost.desc}</p>
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
                    <span className="flex items-center gap-1">
                      <Calendar size={14} /> {featuredPost.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={14} /> {featuredPost.readTime}
                    </span>
                    <span className="flex items-center gap-1">
                      <Tag size={14} /> {featuredPost.category}
                    </span>
                  </div>
                  <button className="inline-flex items-center gap-2 text-[#D4A13A] font-bold hover:gap-3 transition-all">
                    Read Full Article <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                filter === cat
                  ? "bg-[#D4A13A] text-[#051614] shadow-md"
                  : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Blog Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredPosts.map((post, idx) => (
              <motion.div
                key={post.title}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.05 }}
                className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 group"
              >
                <div className="h-48 bg-gradient-to-br from-[#051614] to-[#0a2e2a] relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition" />
                  <div className="absolute bottom-3 left-3">
                    <span className="text-xs font-bold text-[#D4A13A] uppercase tracking-wider bg-white/90 px-2 py-1 rounded">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h2 className="text-lg font-bold text-[#051614] mb-2 line-clamp-2">
                    {post.title}
                  </h2>
                  <p className="text-gray-500 text-sm mb-4 line-clamp-3">{post.desc}</p>
                  <div className="flex items-center justify-between text-xs text-gray-400 mb-4">
                    <span className="flex items-center gap-1">
                      <Calendar size={12} /> {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={12} /> {post.readTime}
                    </span>
                  </div>
                  <button className="text-sm font-bold text-[#D4A13A] hover:underline inline-flex items-center gap-1">
                    Read More <ChevronRight size={14} />
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-20 bg-gradient-to-r from-[#051614] to-[#0a2e2a] rounded-3xl p-10 text-white text-center"
        >
          <Mail size={48} className="text-[#D4A13A] mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-2">Subscribe to Our Newsletter</h3>
          <p className="text-gray-300 mb-6 max-w-md mx-auto">
            Get the latest construction insights, project updates, and industry trends delivered to your inbox.
          </p>
          {subscribed ? (
            <div className="inline-flex items-center gap-2 bg-green-600 px-6 py-3 rounded-lg">
              <span>✓ Subscribed successfully!</span>
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                required
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#D4A13A]"
              />
              <button
                type="submit"
                className="bg-[#D4A13A] text-[#051614] font-bold px-6 py-3 rounded-lg hover:bg-[#c3922f] transition flex items-center justify-center gap-2"
              >
                Subscribe <Send size={16} />
              </button>
            </form>
          )}
        </motion.div>
      </div>

      <Footer />
    </div>
  );
}