import { useEffect, useRef, useState } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import {
  Award,
  Building2,
  Users,
  Globe,
  Clock,
  CheckCircle,
  TrendingUp,
  Shield,
  Heart,
  Lightbulb,
  Target,
  Quote,
} from "lucide-react";

export default function AboutUs() {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, threshold: 0.1 });
  const [counters, setCounters] = useState({
    years: 0,
    projects: 0,
    clients: 0,
    countries: 0,
  });

  const stats = [
    { key: "years", value: 5, label: "Years Experience", suffix: "+", icon: Clock },
    { key: "projects", value: 50, label: "Projects Completed", suffix: "+", icon: Building2 },
    { key: "clients", value: 25, label: "Happy Clients", suffix: "+", icon: Users },
    { key: "countries", value: 1, label: "Cities Served", suffix: "", icon: Globe },
  ];

  const values = [
    { title: "Quality First", desc: "We never compromise on materials, workmanship, or safety.", icon: Shield },
    { title: "Innovation", desc: "Embracing modern techniques and sustainable practices.", icon: Lightbulb },
    { title: "Integrity", desc: "Transparent communication and honest partnerships.", icon: Heart },
    { title: "Excellence", desc: "Delivering beyond expectations, every time.", icon: Award },
  ];

  const milestones = [
    { year: "2020", title: "Founded", desc: "Started Arvish Constructions with a focus on quality construction services." },
    { year: "2021", title: "Growth", desc: "Completed initial residential and small commercial projects." },
    { year: "2023", title: "Expansion", desc: "Expanded services to include commercial and industrial projects." },
    { year: "2025", title: "Today", desc: "Continuing to deliver reliable construction solutions across Hyderabad and Telangana." },
  ];

  useEffect(() => {
    if (inView) {
      controls.start("visible");
      // Animate counters
      const duration = 2000;
      const stepTime = 20;
      const steps = duration / stepTime;
      let step = 0;
      const interval = setInterval(() => {
        step++;
        const progress = step / steps;
        setCounters({
          years: Math.min(5, Math.floor(5 * progress)),
          projects: Math.min(50, Math.floor(50 * progress)),
          clients: Math.min(25, Math.floor(25 * progress)),
          countries: Math.min(1, Math.floor(1 * progress)),
        });
        if (step >= steps) clearInterval(interval);
      }, stepTime);
      return () => clearInterval(interval);
    }
  }, [inView, controls]);

  return (
    <div className="bg-white min-h-screen">
      <Navbar />

      {/* Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 -left-20 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-float"></div>
        <div className="absolute bottom-20 -right-20 w-96 h-96 bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-float-delayed"></div>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-[550px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/2760242/pexels-photo-2760242.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Construction site"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-indigo-900/80" />
        </div>
        <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-8 h-0.5 bg-white/50 rounded-full"></div>
              <span className="text-sm font-bold text-white/80 uppercase tracking-wider">
                About Arvish Constructions
              </span>
              <div className="w-8 h-0.5 bg-white/50 rounded-full"></div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mt-4 mb-4">
              Building Dreams,<br />Creating Quality Spaces
            </h1>
            <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
              Arvish Constructions is committed to delivering reliable and high-quality construction solutions with a focus on precision, durability, and timely execution.
            </p>
          </motion.div>
        </div>
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7-7-7" />
          </svg>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-3 mb-4">
                <div className="w-8 h-0.5 bg-blue-600 rounded-full"></div>
                <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">Who We Are</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-6">
                Building the Future, One Project at a Time
              </h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Arvish Constructions is a Hyderabad-based construction company focused on delivering residential, commercial, and infrastructure projects with quality and reliability.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                We work closely with clients to understand their requirements and ensure each project is completed with proper planning, attention to detail, and timely execution.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative h-80 md:h-96 rounded-2xl overflow-hidden shadow-xl"
            >
              <img
                src="https://images.pexels.com/photos/269077/pexels-photo-269077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Arvish construction team"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-transparent" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats with animated counters */}
      <section ref={ref} className="py-16 px-6 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, idx) => (
              <motion.div
                key={stat.key}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="bg-white rounded-2xl p-6 text-center shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-blue-100"
              >
                <stat.icon size={32} className="text-blue-600 mx-auto mb-3" />
                <p className="text-3xl md:text-4xl font-black text-gray-900">
                  {counters[stat.key]}
                  {stat.suffix}
                </p>
                <p className="text-sm text-gray-500 mt-2">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-8 h-0.5 bg-blue-600 rounded-full"></div>
              <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">Core Values</span>
              <div className="w-8 h-0.5 bg-blue-600 rounded-full"></div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">What Drives Us</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mt-4" />
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="text-center p-6 rounded-xl bg-gray-50 hover:bg-blue-50 transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-600 transition-colors duration-300">
                  <value.icon size={28} className="text-blue-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600 text-sm">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
<section className="py-20 px-6 bg-gradient-to-r from-blue-50 to-indigo-50">
  <div className="max-w-7xl mx-auto">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="text-center mb-12"
    >
      <div className="inline-flex items-center gap-3 mb-4">
        <div className="w-8 h-0.5 bg-blue-600 rounded-full" />
        <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">Our Journey</span>
        <div className="w-8 h-0.5 bg-blue-600 rounded-full" />
      </div>
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">Our Growth Journey</h2>
      <div className="w-20 h-1 bg-blue-600 mx-auto mt-4" />
    </motion.div>

    <div className="relative">
      <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-blue-200 hidden md:block" />
      <div className="space-y-8 md:space-y-0">
        {[
          { stage: "Stage 1", title: "Company Foundation", desc: "Started with a vision to deliver reliable construction services in Hyderabad." },
          { stage: "Stage 2", title: "Residential Projects", desc: "Focused on building quality residential homes with strong construction practices." },
          { stage: "Stage 3", title: "Commercial Expansion", desc: "Expanded into commercial and retail construction projects." },
          { stage: "Stage 4", title: "Project Growth", desc: "Successfully completed multiple projects with a focus on quality and timely delivery." },
          { stage: "Stage 5", title: "Service Expansion", desc: "Extended services to include industrial and specialized construction projects." },
          { stage: "Stage 6", title: "Modern Approach", desc: "Adopted efficient construction methods and improved project management practices." },
          { stage: "Stage 7", title: "Client Trust", desc: "Built strong relationships with clients through reliable work and consistent results." },
          { stage: "Stage 8", title: "Ongoing Growth", desc: "Continuing to grow with a focus on quality construction and customer satisfaction." }
        ].map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            viewport={{ once: true }}
            className={`relative flex flex-col md:flex-row items-center ${
              idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            }`}
          >
            <div className="flex-1 p-6 bg-white rounded-xl shadow-md mx-4 md:mx-8 hover:shadow-lg transition-all border border-blue-100">
              <span className="text-3xl font-black text-blue-100">{item.stage}</span>
              <h3 className="text-xl font-bold text-gray-900 mt-1">{item.title}</h3>
              <p className="text-gray-600 mt-2">{item.desc}</p>
            </div>
            <div className="hidden md:flex w-12 h-12 rounded-full bg-blue-600 text-white items-center justify-center z-10 shadow-md">
              {idx + 1}
            </div>
            <div className="flex-1 hidden md:block" />
          </motion.div>
        ))}
      </div>
    </div>
  </div>
</section>

      {/* Mission & Vision */}
      <section className="py-20 px-6 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Target size={48} className="text-white/80 mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Our Mission & Vision</h2>
            <div className="w-20 h-1 bg-white/50 mx-auto mb-8" />
            <p className="text-white/90 text-lg leading-relaxed max-w-2xl mx-auto">
              To deliver high-quality construction services that meet client expectations while maintaining transparency, reliability, and timely project completion.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-6">
              <div className="flex items-center gap-2 text-white/80">
                <TrendingUp size={20} className="text-white" />
                <span>Innovation</span>
              </div>
              <div className="flex items-center gap-2 text-white/80">
                <Heart size={20} className="text-white" />
                <span>Integrity</span>
              </div>
              <div className="flex items-center gap-2 text-white/80">
                <Award size={20} className="text-white" />
                <span>Excellence</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonial / Quote */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <Quote size={48} className="text-blue-300 mx-auto mb-4" />
          <p className="text-xl md:text-2xl text-gray-700 italic leading-relaxed">
            "We focus on building strong relationships with our clients by delivering quality work and maintaining trust throughout every project."
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Ready to start your next project?</h2>
          <p className="text-blue-100 mb-8">Let's discuss how we can bring your vision to life.</p>
          <button
            onClick={() => (window.location.href = "/contact")}
            className="px-8 py-3 bg-white text-blue-700 font-bold rounded-full hover:bg-blue-50 transition-all transform hover:scale-105 shadow-lg inline-flex items-center gap-2"
          >
            Contact Us Today
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>
      </section>

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
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 10s ease-in-out infinite;
        }
        .animate-bounce {
          animation: bounce 2s infinite;
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(-25%) translateX(-50%); animation-timing-function: cubic-bezier(0.8, 0, 1, 1); }
          50% { transform: translateY(0) translateX(-50%); animation-timing-function: cubic-bezier(0, 0, 0.2, 1); }
        }
      `}</style>
    </div>
  );
}