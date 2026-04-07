import { useState } from "react";
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
      title: "Key Factors to Consider Before Starting Construction",
      date: "Jan 10, 2026",
      category: "Industry",
      desc: "Before starting any construction project, it is important to understand planning, budgeting, and design considerations to avoid delays and unexpected costs.",
      author: "Arvish Team",
      readTime: "4 min read",
      featured: true,
      image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800",
    },
    {
      title: "How to Choose the Right Construction Company",
      date: "Feb 2, 2026",
      category: "Industry",
      desc: "Choosing the right construction company is crucial. Look for experience, transparency, and quality of previous work before making a decision.",
      author: "Arvish Team",
      readTime: "5 min read",
      featured: false,
      image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800",
    },
    {
      title: "Modern Home Design Ideas for 2026",
      date: "Mar 5, 2026",
      category: "Design",
      desc: "Explore simple and modern design ideas that improve space utilization, lighting, and comfort in residential construction.",
      author: "Arvish Team",
      readTime: "5 min read",
      featured: false,
      image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800",
    },
    {
      title: "Importance of Quality Materials in Construction",
      date: "Apr 12, 2026",
      category: "Operations",
      desc: "Using high-quality materials ensures durability, safety, and long-term performance of any construction project.",
      author: "Arvish Team",
      readTime: "4 min read",
      featured: false,
      image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800",
    },
    {
      title: "Smart Construction: Future of Building",
      date: "May 18, 2026",
      category: "Technology",
      desc: "Smart construction techniques and automation are improving efficiency, reducing cost, and enhancing project management.",
      author: "Arvish Team",
      readTime: "6 min read",
      featured: false,
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800",
    },
    {
      title: "Sustainable Construction Practices",
      date: "Jun 8, 2026",
      category: "Sustainability",
      desc: "Eco-friendly construction practices help reduce environmental impact while maintaining quality and efficiency.",
      author: "Arvish Team",
      readTime: "5 min read",
      featured: false,
      image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800",
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
    <div className="bg-white min-h-screen">
      <Navbar />

      {/* Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 -left-20 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-float"></div>
        <div className="absolute bottom-20 -right-20 w-96 h-96 bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-float-delayed"></div>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-[450px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/261949/pexels-photo-261949.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Blog header"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-indigo-900/70 to-slate-900/80" />
        </div>
        <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-8 h-0.5 bg-white/50 rounded-full"></div>
              <span className="text-xs font-bold text-white/80 uppercase tracking-wider">Insights & Stories</span>
              <div className="w-8 h-0.5 bg-white/50 rounded-full"></div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mt-4 mb-4">Construction Insights</h1>
            <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
              Practical knowledge, expert tips, and real-world insights from Arvish Constructions to help you understand modern construction better.
            </p>
            <p style={{marginTop: "10px", fontSize: "14px", color: "#ccc"}}>
              Learn how we approach construction projects with quality, planning, and precision.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <div className="relative max-w-7xl mx-auto px-6 py-16">
        {/* Featured Post */}
        {featuredPost && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-blue-100 hover:shadow-2xl transition-all duration-500">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="h-64 md:h-auto overflow-hidden">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
                <div className="p-8 md:p-10">
                  <span className="text-xs font-bold text-blue-600 uppercase tracking-wider bg-blue-50 px-3 py-1 rounded-full">
                    Latest Article
                  </span>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-4 mb-3">
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
                  <button className="inline-flex items-center gap-2 text-blue-600 font-bold hover:gap-3 transition-all group">
                    Read More <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
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
                  ? "bg-blue-600 text-white shadow-md"
                  : "bg-white text-gray-600 hover:bg-blue-50 border border-gray-200"
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
                className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-blue-200 group hover:-translate-y-2"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="mb-2">
                    <span className="text-xs font-bold text-blue-600 uppercase tracking-wider bg-blue-50 px-2 py-1 rounded">
                      {post.category}
                    </span>
                  </div>
                  <h2 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
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
                  <button className="text-sm font-bold text-blue-600 hover:underline inline-flex items-center gap-1 group/btn">
                    Read More <ChevronRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

      </div>

      <Footer />

      {/* Animation Styles */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(20px) rotate(-5deg); }
        }
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 10s ease-in-out infinite;
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
}