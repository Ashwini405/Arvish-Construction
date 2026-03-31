import React, { useState, useEffect } from "react";
import Footer from "../components/Footer";

// ================= INDIA‑COMPLIANT SECTIONS =================
const sections = [
  {
    title: "Acceptance of Terms",
    content: `By accessing and using the Arvish Constructions website, you agree to be bound by these Terms of Service and our Privacy Policy. If you do not agree, please do not use our website or services.`,
  },
  {
    title: "Services",
    content: `Arvish Constructions provides construction, project management, and related services across residential, commercial, and industrial sectors. All information on this website is for general guidance and does not form a binding agreement unless confirmed through a formal contract.`,
  },
  {
    title: "Project Agreements",
    content: `All construction projects are governed by separate written agreements between the client and Arvish Constructions. These agreements define scope, timelines, payment terms, and responsibilities. Website content does not override any signed agreement.`,
  },
  {
    title: "User Responsibilities",
    content: `Users agree to provide accurate information when contacting us or requesting services. Any misuse of the website, including submitting false details or attempting unauthorized access, is strictly prohibited.`,
  },
  {
    title: "Intellectual Property",
    content: `All content on this website, including text, images, designs, and logos, belongs to Arvish Constructions unless stated otherwise. Unauthorized use, copying, or distribution is not permitted.`,
  },
  {
    title: "Limitation of Liability",
    content: `Arvish Constructions is not responsible for any indirect or incidental damages resulting from the use of this website. The website content is provided for general information and may not always be fully accurate or up to date.`,
  },
  {
    title: "Payments",
    content: `Payment terms for projects are defined in individual contracts. Typically, payments are made in stages based on project progress. Any delays or penalties will be handled as per the agreed contract.`,
  },
  {
    title: "Warranties",
    content: `Any warranties related to construction work are defined in the project agreement. The duration and coverage depend on the nature of the project.`,
  },
  {
    title: "Governing Law",
    content: `These terms are governed by the laws of India. Any disputes arising from the use of this website or services will be subject to the jurisdiction of courts in Hyderabad, Telangana.`,
  },
  {
    title: "Changes to Terms",
    content: `We may update these Terms of Service from time to time. Changes will be posted on this page, and continued use of the website indicates acceptance of the updated terms.`,
  },
  {
    title: "Contact",
    content: `For any questions regarding these Terms, please contact us at: Arvish Constructions, Hyderabad, Telangana, India. Email: info@arvishconstructions.com | Phone: +91 XXXXX XXXXX.`,
  },
];

// ================= HELPER: ICON SELECTOR =================
const getIcon = (title) => {
  switch (title) {
    case "Acceptance of Terms":
      return "✅";
    case "Services":
      return "🏗️";
    case "Project Agreements":
      return "📄";
    case "User Responsibilities":
      return "👤";
    case "Intellectual Property":
      return "©️";
    case "Limitation of Liability":
      return "⚠️";
    case "Payments":
      return "💰";
    case "Warranties":
      return "🛡️";
    case "Governing Law":
      return "⚖️";
    case "Changes to Terms":
      return "🔄";
    case "Contact":
      return "📞";
    default:
      return "📜";
  }
};

export default function TermsOfService() {
  const [activeId, setActiveId] = useState("");
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);

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
        <div
          className="absolute inset-0 opacity-5 pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cpath fill='none' stroke='%23D4A13A' stroke-width='0.5' d='M10 0 L10 100 M20 0 L20 100 M30 0 L30 100 M40 0 L40 100 M50 0 L50 100 M60 0 L60 100 M70 0 L70 100 M80 0 L80 100 M90 0 L90 100 M0 10 L100 10 M0 20 L100 20 M0 30 L100 30 M0 40 L100 40 M0 50 L100 50 M0 60 L100 60 M0 70 L100 70 M0 80 L100 80 M0 90 L100 90' /%3E%3C/svg%3E")`,
            backgroundSize: "40px 40px",
          }}
        />
        <div className="absolute top-20 left-1/4 w-64 h-64 bg-[#D4A13A] opacity-5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-[#D4A13A] opacity-5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <span className="text-xs font-bold text-[#D4A13A] uppercase tracking-widest border-b border-[#D4A13A] pb-1 inline-block">
            Legal
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-white mt-4 tracking-tight">
            Terms of Service
          </h1>
          <p className="text-gray-300 text-base md:text-lg mt-4 max-w-2xl mx-auto leading-relaxed">
            Please read these terms carefully before using the Arvish Constructions website or our services.
          </p>
          <p className="text-gray-500 text-sm mt-6 flex items-center justify-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-[#D4A13A]" />
            Last updated: March 2026
          </p>
        </div>
      </section>

      {/* ================= MAIN CONTENT (two columns) ================= */}
      <div className="flex-grow max-w-7xl mx-auto px-6 py-12 md:py-16">
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Sticky Table of Contents */}
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

          {/* Main Content */}
          <main className="lg:w-3/4">
            <div className="space-y-6">
              {sections.map((section, index) => (
                <div
                  key={index}
                  id={`section-${index}`}
                  className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 scroll-mt-24 group"
                >
                  <div className="flex items-start gap-4">
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
                  {index < sections.length - 1 && (
                    <div className="ml-6 mt-4 pl-12 border-l-2 border-dashed border-gray-200 hidden md:block" />
                  )}
                </div>
              ))}
            </div>
          </main>
        </div>
      </div>

      

      <Footer />
    </div>
  );
}