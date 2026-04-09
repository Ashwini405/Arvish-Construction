import React, { useState, useEffect } from "react";
import Footer from "../components/Footer";

// ================= DATA (exactly the same) =================
const sections = [
  {
    title: "Information We Collect",
    content: `We collect information that you provide directly when you contact us, request a quotation, or share project details. This may include your name, phone number, email address, and project requirements. We may also collect basic technical information such as device type and browsing behavior to improve our website.`,
  },
  {
    title: "How We Use Your Information",
    content: `Arvish Constructions uses your information to respond to your inquiries, provide project estimates, communicate updates, and deliver our services efficiently. We also use this data to improve our website and overall customer experience.`,
  },
  {
    title: "Information Sharing",
    content: `We do not sell or trade your personal information. Your data may only be shared with trusted engineers, contractors, or service partners involved in your project. We may also disclose information if required by law.`,
  },
  {
    title: "Data Security",
    content: `However, no method of transmission over the internet is completely secure, and we cannot guarantee absolute security.`,
  },
  {
    title: "Data Retention",
    content: `We retain your information only as long as necessary for project completion and business purposes. Once no longer required, we securely remove or protect the data.`,
  },
  {
    title: "Cookies",
    content: `Our website may use cookies to enhance user experience and analyze traffic. You can disable cookies in your browser settings, but some features may not function properly.`,
  },
  {
    title: "Your Rights",
    content: `You have the right to access, update, or request deletion of your personal data. You can contact us anytime for such requests, and we will respond within a reasonable timeframe.`,
  },
  {
    title: "Contact Us",
    content: `If you have any questions regarding this Privacy Policy, please contact us at: Arvish Constructions, Hyderabad, Telangana, India. Email: arvishconstructions.interiors@gmail.com | Phone:
+91 99665 56804`,
  },
  {
    title: "Legal Compliance",
    content: `We handle your personal information in accordance with applicable laws and regulations in India. We ensure that your data is processed fairly, securely, and only for legitimate business purposes.`,
  },
];

// ================= HELPER: ICON SELECTOR (no TypeScript) =================
const getIcon = (title) => {
  switch (title) {
    case "Information We Collect":
      return "📋";
    case "How We Use Your Information":
      return "⚙️";
    case "Information Sharing":
      return "🤝";
    case "Data Security":
      return "🔒";
    case "Data Retention":
      return "⏱️";
    case "Cookies":
      return "🍪";
    case "Your Rights":
      return "⚖️";
    case "Contact Us":
      return "📞";
    case "Legal Compliance":
      return "📜";
    default:
      return "📄";
  }
};

// ================= COMPONENT =================
export default function PrivacyPolicy() {
  const [activeId, setActiveId] = useState("");
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Track scroll position for back-to-top button and active section
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);

      // Find which section is currently in view
      const sectionElements = sections.map((_, idx) =>
        document.getElementById(`section-${idx}`)
      );
      const scrollPosition = window.scrollY + 150;
      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const el = sectionElements[i];
        if (el && el.offsetTop <= scrollPosition) {
          setActiveId(`section-${i}`);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (index) => {
    const el = document.getElementById(`section-${index}`);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col relative">
      {/* ================= HERO with pattern overlay ================= */}
      <section className="relative bg-[#051614] pt-28 pb-20 px-6 overflow-hidden">
        {/* Decorative grid pattern */}
        <div
          className="absolute inset-0 opacity-5 pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cpath fill='none' stroke='%23D4A13A' stroke-width='0.5' d='M10 0 L10 100 M20 0 L20 100 M30 0 L30 100 M40 0 L40 100 M50 0 L50 100 M60 0 L60 100 M70 0 L70 100 M80 0 L80 100 M90 0 L90 100 M0 10 L100 10 M0 20 L100 20 M0 30 L100 30 M0 40 L100 40 M0 50 L100 50 M0 60 L100 60 M0 70 L100 70 M0 80 L100 80 M0 90 L100 90' /%3E%3C/svg%3E")`,
            backgroundSize: "40px 40px",
          }}
        />
        {/* Gold glow */}
        <div className="absolute top-20 left-1/4 w-64 h-64 bg-[#D4A13A] opacity-5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-[#D4A13A] opacity-5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <span className="text-xs font-bold text-[#D4A13A] uppercase tracking-widest border-b border-[#D4A13A] pb-1 inline-block">
            Legal
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-white mt-4 tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-gray-300 text-base md:text-lg mt-4 max-w-2xl mx-auto leading-relaxed">
            Arvish Constructions values your privacy and is committed to protecting your personal
            information with transparency and responsibility.
          </p>
          
        </div>
      </section>

      {/* ================= MAIN CONTENT (two columns on large screens) ================= */}
      <div className="flex-grow max-w-7xl mx-auto px-6 py-12 md:py-16">
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Sticky Table of Contents (left) */}
          <aside className="lg:w-1/4">
            <div className="sticky top-24 bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
              <h3 className="text-xs font-bold text-[#D4A13A] uppercase tracking-widest mb-4">
                On this page
              </h3>
              <ul className="space-y-2">
                {sections.map((section, idx) => (
                  <li key={idx}>
                    <button
                      onClick={() => scrollToSection(idx)}
                      className={`text-left text-sm transition-all duration-200 flex items-center gap-2 w-full px-2 py-1.5 rounded-lg ${
                        activeId === `section-${idx}`
                          ? "text-[#D4A13A] bg-[#D4A13A]/5 font-medium"
                          : "text-gray-500 hover:text-gray-800 hover:bg-gray-50"
                      }`}
                    >
                      <span className="text-[10px] font-mono">{String(idx + 1).padStart(2, "0")}</span>
                      <span className="truncate">{section.title}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          {/* Main Content (right) */}
          <main className="lg:w-3/4">
            <div className="space-y-6">
              {sections.map((section, index) => (
                <div
                  key={index}
                  id={`section-${index}`}
                  className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 scroll-mt-24 group"
                >
                  <div className="flex items-start gap-4">
                    {/* Icon */}
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-[#D4A13A]/10 to-[#D4A13A]/5 flex items-center justify-center text-2xl border border-[#D4A13A]/20 group-hover:border-[#D4A13A]/40 transition-colors">
                      {getIcon(section.title)}
                    </div>
                    <div className="flex-1">
                      <h2 className="text-xl md:text-2xl font-semibold text-[#051614] mb-3">
                        {section.title}
                      </h2>
                      <p className="text-gray-600 leading-relaxed">{section.content}</p>
                    </div>
                  </div>
                  {/* Decorative timeline line (optional) */}
                  {index < sections.length - 1 && (
                    <div className="ml-6 mt-4 pl-12 border-l-2 border-dashed border-gray-200 hidden md:block" />
                  )}
                </div>
              ))}
            </div>
          </main>
        </div>
      </div>

      

      {/* ================= FOOTER ================= */}
      <Footer />
    </div>
  );
}