import Header from "../components/Header";
import Footer from "../components/Footer";

const sections = [
  {
    title: "Acceptance of Terms",
    content: `By accessing and using the Arvish Construction Group website, you accept and agree to be bound by these Terms of Service and our Privacy Policy. If you do not agree to these terms, please do not use our website. These terms apply to all visitors, clients, subcontractors, and others who access or use our services.`,
  },
  {
    title: "Services Description",
    content: `Arvish Construction Group provides construction, project management, interior fit-out, and related services across residential, commercial, educational, healthcare, and industrial sectors in the UAE and internationally. The information on this website is provided for general informational purposes and does not constitute a binding contract or offer of services unless confirmed in a formal written agreement.`,
  },
  {
    title: "Project Agreements",
    content: `All construction projects undertaken by Arvish Construction Group are governed by separate written contracts agreed upon between the client and Arvish Construction Group. These contracts will specify scope of work, timelines, payment terms, warranties, and dispute resolution procedures. No verbal agreement or website content shall override a signed project contract.`,
  },
  {
    title: "Intellectual Property",
    content: `All content on this website including text, images, project photographs, logos, architectural renderings, and design materials are the intellectual property of Arvish Construction Group or its licensed partners. You may not reproduce, distribute, or use any content without prior written permission from Arvish Construction Group.`,
  },
  {
    title: "Limitation of Liability",
    content: `Arvish Construction Group shall not be liable for any indirect, incidental, or consequential damages arising from the use of this website or reliance on information contained herein. Our total liability for any claim arising from the use of this website shall not exceed AED 1,000. This limitation does not apply to liabilities arising from signed project contracts.`,
  },
  {
    title: "Payment Terms",
    content: `Payment terms for all construction projects are specified in individual project contracts. Generally, payments are structured as milestone-based instalments. Late payments may attract interest charges as specified in the project contract and in accordance with UAE Commercial Transactions Law (Federal Law No. 18 of 1993).`,
  },
  {
    title: "Warranties",
    content: `Arvish Construction Group provides structural warranties on completed projects as specified in individual project contracts and in accordance with UAE Federal Law No. 5 of 1985 (Civil Transactions Law). Warranty periods and coverage vary by project type and are detailed in the relevant project contract.`,
  },
  {
    title: "Governing Law",
    content: `These Terms of Service are governed by and construed in accordance with the laws of the United Arab Emirates. Any disputes arising from these terms or the use of our website shall be subject to the exclusive jurisdiction of the courts of Dubai, UAE.`,
  },
  {
    title: "Changes to Terms",
    content: `Arvish Construction Group reserves the right to modify these Terms of Service at any time. Changes will be effective immediately upon posting to the website. Your continued use of the website after any changes constitutes your acceptance of the new terms. We recommend reviewing these terms periodically.`,
  },
  {
    title: "Contact",
    content: `For any questions regarding these Terms of Service, please contact our legal team at: Arvish Construction Group, PO Box 91656, Dubai, UAE. Email: corporate@arvishgroup.me. Tel: +971 42207539.`,
  },
];

export default function TermsOfService() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Header />

      {/* Hero */}
      <div className="bg-[#051614] pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <span className="text-xs font-bold text-[#D4A13A] uppercase tracking-widest">Legal</span>
          <h1 className="text-4xl font-bold text-white mt-3 mb-4">Terms of Service</h1>
          <p className="text-gray-400 text-sm leading-relaxed max-w-2xl">
            Please read these terms carefully before using the Arvish Construction Group website or engaging our services.
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
