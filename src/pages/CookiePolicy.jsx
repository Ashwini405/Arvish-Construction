import Header from "../components/Header";
import Footer from "../components/Footer";

const cookieTypes = [
  {
    type: "Strictly Necessary",
    purpose: "Essential for the website to function correctly. These cookies enable core features such as page navigation, secure form submissions, and access to protected areas of the site.",
    examples: "Session cookies, security tokens",
    canDisable: "No",
  },
  {
    type: "Performance & Analytics",
    purpose: "Help us understand how visitors interact with our website by collecting anonymous data on pages visited, time spent, and navigation paths. This helps us improve site performance.",
    examples: "Google Analytics, page view counters",
    canDisable: "Yes",
  },
  {
    type: "Functional",
    purpose: "Allow the website to remember your preferences such as language settings and previously viewed projects to provide a more personalised experience.",
    examples: "Language preference, form auto-fill",
    canDisable: "Yes",
  },
  {
    type: "Marketing",
    purpose: "Used to deliver relevant advertisements and track the effectiveness of our marketing campaigns. These cookies may be set by our advertising partners.",
    examples: "Retargeting pixels, ad tracking",
    canDisable: "Yes",
  },
];

const sections = [
  {
    title: "What Are Cookies",
    content: `Cookies are small text files placed on your device when you visit a website. They are widely used to make websites work efficiently and to provide information to website owners. Arvish Construction Group uses cookies to enhance your experience on our website and to help us understand how our site is being used.`,
  },
  {
    title: "How We Use Cookies",
    content: `We use cookies to remember your preferences and settings, analyse website traffic and usage patterns, improve the performance and functionality of our website, and deliver relevant content about our construction services and projects. We do not use cookies to collect sensitive personal information or to track your activity across unrelated third-party websites.`,
  },
  {
    title: "Third-Party Cookies",
    content: `Some cookies on our website are set by third-party services such as Google Analytics for traffic analysis and social media platforms for sharing functionality. These third parties have their own privacy policies and cookie practices. We recommend reviewing their policies for full details on how they use cookies.`,
  },
  {
    title: "Managing Your Cookie Preferences",
    content: `You can control and manage cookies through your browser settings. Most browsers allow you to refuse cookies, delete existing cookies, or be notified when a new cookie is set. Please note that disabling certain cookies may affect the functionality of our website. Instructions for managing cookies can be found in your browser's help documentation.`,
  },
  {
    title: "Cookie Retention",
    content: `Session cookies are temporary and are deleted when you close your browser. Persistent cookies remain on your device for a set period or until you delete them. The retention period for each cookie type is detailed in the table above. We regularly review our cookie usage to ensure we only retain cookies for as long as necessary.`,
  },
  {
    title: "Updates to This Policy",
    content: `We may update this Cookie Policy from time to time to reflect changes in technology, legislation, or our business practices. Any changes will be posted on this page with an updated revision date. We encourage you to review this policy periodically to stay informed about how we use cookies.`,
  },
  {
    title: "Contact Us",
    content: `If you have any questions about our use of cookies or this Cookie Policy, please contact us at: Arvish Construction Group, PO Box 91656, Dubai, UAE. Email: corporate@arvishgroup.me. Tel: +971 42207539.`,
  },
];

export default function CookiePolicy() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Header />

      {/* Hero */}
      <div className="bg-[#051614] pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <span className="text-xs font-bold text-[#D4A13A] uppercase tracking-widest">Legal</span>
          <h1 className="text-4xl font-bold text-white mt-3 mb-4">Cookie Policy</h1>
          <p className="text-gray-400 text-sm leading-relaxed max-w-2xl">
            This policy explains how Arvish Construction Group uses cookies and similar technologies on our website.
          </p>
          <p className="text-gray-500 text-xs mt-4">Last updated: January 1, 2025</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-16">

        {/* Cookie types table */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden mb-10">
          <div className="bg-[#051614] px-8 py-5">
            <h2 className="text-base font-bold text-white">Types of Cookies We Use</h2>
          </div>
          <div className="divide-y divide-gray-100">
            {cookieTypes.map((c, i) => (
              <div key={i} className="px-8 py-6 grid grid-cols-1 md:grid-cols-4 gap-4">
                <div>
                  <p className="text-xs font-black text-[#D4A13A] uppercase tracking-widest mb-1">Type</p>
                  <p className="text-sm font-bold text-[#051614]">{c.type}</p>
                </div>
                <div className="md:col-span-2">
                  <p className="text-xs font-black text-[#D4A13A] uppercase tracking-widest mb-1">Purpose</p>
                  <p className="text-sm text-gray-600 leading-relaxed">{c.purpose}</p>
                </div>
                <div>
                  <p className="text-xs font-black text-[#D4A13A] uppercase tracking-widest mb-1">Can Disable</p>
                  <span className={`inline-block text-xs font-bold px-3 py-1 rounded-full ${c.canDisable === "Yes" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}>
                    {c.canDisable}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sections */}
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
