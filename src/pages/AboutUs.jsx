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
    { key: "years", value: 30, label: "Years of Excellence", suffix: "+", icon: Clock },
    { key: "projects", value: 500, label: "Projects Completed", suffix: "+", icon: Building2 },
    { key: "clients", value: 5000, label: "Happy Clients", suffix: "+", icon: Users },
    { key: "countries", value: 12, label: "Countries Served", suffix: "", icon: Globe },
  ];

  const values = [
    { title: "Quality First", desc: "We never compromise on materials, workmanship, or safety.", icon: Shield },
    { title: "Innovation", desc: "Embracing modern techniques and sustainable practices.", icon: Lightbulb },
    { title: "Integrity", desc: "Transparent communication and honest partnerships.", icon: Heart },
    { title: "Excellence", desc: "Delivering beyond expectations, every time.", icon: Award },
  ];

  const milestones = [
    { year: "1994", title: "Founded", desc: "Started as a small construction firm in Dubai." },
    { year: "2005", title: "Expansion", desc: "Opened offices in Sharjah and Abu Dhabi." },
    { year: "2015", title: "International", desc: "First overseas project in Saudi Arabia." },
    { year: "2024", title: "30 Years", desc: "Celebrating three decades of excellence." },
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
          years: Math.min(30, Math.floor(30 * progress)),
          projects: Math.min(500, Math.floor(500 * progress)),
          clients: Math.min(5000, Math.floor(5000 * progress)),
          countries: Math.min(12, Math.floor(12 * progress)),
        });
        if (step >= steps) clearInterval(interval);
      }, stepTime);
      return () => clearInterval(interval);
    }
  }, [inView, controls]);

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      {/* Hero Section */}
      <section className="relative h-screen-75 min-h-[450px] xs:min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/2760242/pexels-photo-2760242.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Construction site"
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
              About Arvish Constructions
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mt-6 mb-4">
              Building Dreams,<br />Creating Landmarks
            </h1>
            <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
              For over three decades, we have shaped skylines and transformed visions into reality
              with unwavering commitment to quality and innovation.
            </p>
          </motion.div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7-7-7" />
          </svg>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <span className="text-xs font-bold text-[#D4A13A] uppercase tracking-widest">Who We Are</span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#051614] mt-3 mb-6">
                Building the Future, One Project at a Time
              </h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Arvish Constructions has been a cornerstone of construction excellence in India since 1994.
                With a commitment to quality, innovation, and sustainability, we have delivered landmark
                projects across residential, commercial, and industrial sectors.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our team of over 2,000 professionals brings unmatched expertise to every project,
                ensuring timely delivery and the highest standards of craftsmanship. From concept to
                completion, we partner with clients to turn their aspirations into enduring structures.
              </p>
              <div className="mt-6 flex gap-4">
                <div className="flex items-center gap-2">
                  <CheckCircle size={18} className="text-[#D4A13A]" />
                  <span className="text-sm text-gray-700">ISO 9001 Certified</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle size={18} className="text-[#D4A13A]" />
                  <span className="text-sm text-gray-700">LEED Gold Partner</span>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative h-80 rounded-2xl overflow-hidden shadow-xl"
            >
              <img
                src="https://images.pexels.com/photos/269077/pexels-photo-269077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Arvish construction team"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#051614]/40 to-transparent" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats with animated counters */}
      <section ref={ref} className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, idx) => (
              <motion.div
                key={stat.key}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="bg-white rounded-2xl p-6 text-center shadow-md hover:shadow-lg transition-all"
              >
                <stat.icon size={32} className="text-[#D4A13A] mx-auto mb-3" />
                <p className="text-3xl md:text-4xl font-black text-[#051614]">
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
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-xs font-bold text-[#D4A13A] uppercase tracking-widest">Core Values</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#051614] mt-2">What Drives Us</h2>
            <div className="w-20 h-1 bg-[#D4A13A] mx-auto mt-4" />
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="text-center p-6 rounded-xl bg-gray-50 hover:shadow-md transition-all"
              >
                <div className="w-16 h-16 bg-[#D4A13A]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon size={28} className="text-[#D4A13A]" />
                </div>
                <h3 className="text-xl font-bold text-[#051614] mb-2">{value.title}</h3>
                <p className="text-gray-600 text-sm">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-xs font-bold text-[#D4A13A] uppercase tracking-widest">Our Journey</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#051614] mt-2">Milestones of Excellence</h2>
            <div className="w-20 h-1 bg-[#D4A13A] mx-auto mt-4" />
          </motion.div>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-[#D4A13A]/30 hidden md:block" />
            <div className="space-y-8 md:space-y-0">
              {milestones.map((milestone, idx) => (
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
                  <div className="flex-1 p-6 bg-white rounded-xl shadow-md mx-4 md:mx-8">
                    <span className="text-3xl font-black text-[#D4A13A]/20">{milestone.year}</span>
                    <h3 className="text-xl font-bold text-[#051614] mt-1">{milestone.title}</h3>
                    <p className="text-gray-600 mt-2">{milestone.desc}</p>
                  </div>
                  <div className="hidden md:flex w-12 h-12 rounded-full bg-[#D4A13A] text-white items-center justify-center z-10">
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
      <section className="py-20 px-6 bg-[#051614] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Target size={48} className="text-[#D4A13A] mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission & Vision</h2>
            <div className="w-20 h-1 bg-[#D4A13A] mx-auto mb-8" />
            <p className="text-gray-200 text-lg leading-relaxed max-w-2xl mx-auto">
              To deliver world-class construction solutions that exceed client expectations,
              foster community growth, and uphold the highest standards of integrity and
              sustainability in every project we undertake.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-6">
              <div className="flex items-center gap-2">
                <TrendingUp size={20} className="text-[#D4A13A]" />
                <span>Innovation</span>
              </div>
              <div className="flex items-center gap-2">
                <Heart size={20} className="text-[#D4A13A]" />
                <span>Integrity</span>
              </div>
              <div className="flex items-center gap-2">
                <Award size={20} className="text-[#D4A13A]" />
                <span>Excellence</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonial / Quote */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <Quote size={48} className="text-[#D4A13A] mx-auto mb-4 opacity-50" />
          <p className="text-xl md:text-2xl text-gray-700 italic">
            "Arvish Constructions didn't just build our office – they built a partnership based on trust,
            transparency, and exceptional quality. Their attention to detail is unmatched."
          </p>
          <p className="mt-4 font-bold text-[#051614]">— Rajesh Mehta, CEO, Mehta Group</p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-[#D4A13A] text-[#051614]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to start your next project?</h2>
          <p className="mb-6">Let's discuss how we can bring your vision to life.</p>
          <button
            onClick={() => (window.location.href = "/contact")}
            className="px-8 py-3 bg-[#051614] text-white font-bold rounded-lg hover:bg-black transition"
          >
            Contact Us Today
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}