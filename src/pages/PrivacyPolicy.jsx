import Footer from "../components/Footer";

const sections = [
  {
    title: "Information We Collect",
    content: `We collect information you provide directly to us when you contact us through our website, submit project inquiries, apply for careers, or subscribe to our newsletter. This includes your name, email address, phone number, company name, and project details. We also automatically collect certain technical information such as IP address, browser type, and pages visited when you use our website.`,
  },
  {
    title: "How We Use Your Information",
    content: `Arvish Construction uses the information we collect to respond to your inquiries and project requests, process career applications, send project updates and company news (only if you have opted in), improve our website and services, comply with legal obligations under UAE law, and maintain the security of our systems and facilities.`,
  },
  {
    title: "Information Sharing",
    content: `We do not sell, trade, or rent your personal information to third parties. We may share your information with trusted subcontractors and project partners solely to fulfil your construction project requirements, with professional advisors such as legal and financial consultants bound by confidentiality, and with government or regulatory authorities when required by UAE law.`,
  },
  {
    title: "Data Retention",
    content: `We retain your personal data for as long as necessary to fulfil the purposes outlined in this policy, or as required by applicable UAE regulations. Project-related records are typically retained for a minimum of 10 years in accordance with construction industry standards and UAE Commercial Transactions Law.`,
  },
  {
    title: "Cookies",
    content: `Our website uses cookies to enhance your browsing experience, analyse site traffic, and personalise content. You may disable cookies through your browser settings; however, some features of our website may not function correctly without them. Please refer to our Cookie Policy for full details.`,
  },
  {
    title: "Data Security",
    content: `We implement industry-standard technical and organisational measures to protect your personal information against unauthorised access, alteration, disclosure, or destruction. Our systems are regularly reviewed and updated to maintain the highest level of data security.`,
  },
  {
    title: "Your Rights",
    content: `You have the right to access, correct, or request deletion of your personal data held by us. To exercise these rights, please contact our Data Protection Officer at corporate@arvishgroup.me. We will respond to all requests within 30 days in accordance with applicable data protection regulations.`,
  },
  {
    title: "Contact Us",
    content: `If you have any questions about this Privacy Policy or our data practices, please contact us at: Arvish Construction Group, PO Box 91656, Dubai, UAE. Email: corporate@arvishgroup.me. Tel: +971 42207539.`,
  },
];

export default function PrivacyPolicy() {
  return (
    <div className="bg-gray-50 min-h-screen">

      {/* Hero */}
      <div className="bg-[#051614] pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <span className="text-xs font-bold text-[#D4A13A] uppercase tracking-widest">Legal</span>
          <h1 className="text-4xl font-bold text-white mt-3 mb-4">Privacy Policy</h1>
          <p className="text-gray-400 text-sm leading-relaxed max-w-2xl">
            Arvish Construction Group is committed to protecting your privacy. This policy explains how we collect, use, and safeguard your personal information.
          </p>
          <p className="text-gray-500 text-xs mt-4">Last updated: January 1, 2025</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="space-y-10">
          {sections.map((s, i) => (
            <div key={i} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#D4A13A]/10 border border-[#D4A13A]/30 flex items-center justify-center text-[10px] font-black text-[#D4A13A]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h2 className="text-lg font-bold text-[#051614]">{s.title}</h2>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">{s.content}</p>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
