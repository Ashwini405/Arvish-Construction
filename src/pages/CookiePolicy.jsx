import React, { useState, useEffect } from "react";
import Footer from "../components/Footer";

// ================= INDIA‑COMPLIANT SECTIONS (paragraph style) =================
const sections = [
  {
    title: "What Are Cookies",
    content: `Cookies are small text files that are stored on your device when you visit a website. They help websites function properly and improve user experience by remembering preferences and providing useful insights to website owners. Arvish Constructions uses cookies to enhance your browsing experience and understand how our website is used.`,
  },
  {
    title: "How We Use Cookies",
    content: `We use cookies to ensure smooth website functionality, remember user preferences, analyse website traffic, and improve overall performance. These cookies help us provide better services, optimize content, and make navigation easier for our users. We do not use cookies to collect sensitive personal information.`,
  },
  {
    title: "Types of Cookies We Use",
    content: `We use different types of cookies including essential cookies required for basic functionality, performance cookies to analyse website usage, functional cookies to remember user preferences, and optional marketing cookies to improve content relevance. Each type of cookie serves a specific purpose in enhancing the user experience.`,
  },
  {
    title: "Third-Party Cookies",
    content: `Some cookies may be placed by third-party services such as analytics providers to help us understand website traffic and performance. These third parties operate under their own privacy policies, and we recommend reviewing their policies for more information.`,
  },
  {
    title: "Managing Cookies",
    content: `You can control or disable cookies through your browser settings at any time. Most browsers allow you to block or delete cookies; however, disabling certain cookies may affect the functionality and performance of the website.`,
  },
  {
    title: "Cookie Retention",
    content: `Some cookies are temporary and are deleted when you close your browser, while others may remain on your device for a longer period to remember your preferences. We only retain cookies for as long as necessary to improve user experience and website performance.`,
  },
  {
    title: "Updates to This Policy",
    content: `We may update this Cookie Policy from time to time to reflect changes in technology, legal requirements, or our business practices. Any updates will be posted on this page with a revised date.`,
  },
  {
    title: "Contact Us",
    content: `If you have any questions about this Cookie Policy, please contact us at: Arvish Constructions, Hyderabad, Telangana, India. Email: info@arvishconstructions.com | Phone: +91 XXXXX XXXXX.`,
  },
];

export default function CookiePolicy() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <span className="text-xs font-bold text-[#D4A13A] uppercase tracking-widest border-b border-[#D4A13A] pb-1 inline-block">
            Legal
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-white mt-4 tracking-tight">
            Cookie Policy
          </h1>
          <p className="text-gray-300 text-base md:text-lg mt-4 max-w-2xl mx-auto leading-relaxed">
            This policy explains how Arvish Constructions uses cookies and similar technologies on our website.
          </p>
          <p className="text-gray-500 text-sm mt-6 flex items-center justify-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-[#D4A13A]" />
            Last updated: March 2026
          </p>
        </div>
      </section>

      {/* ================= PARAGRAPH‑STYLE CONTENT ================= */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="space-y-12">
          {sections.map((section, index) => (
            <div key={index} className="border-b border-gray-200 pb-8 last:border-0">
              <h2 className="text-xl md:text-2xl font-semibold text-[#051614] mb-3">
                {String(index + 1).padStart(2, "0")}. {section.title}
              </h2>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                {section.content}
              </p>
            </div>
          ))}
        </div>
      </div>

     

      <Footer />
    </div>
  );
}