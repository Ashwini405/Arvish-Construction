import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Contact() {
  const offices = [
    { city: "Dubai", phone: "+971 42207539", fax: "+971 42207529", po: "PO Box 91656" },
    { city: "Sharjah", phone: "+971 67451389", fax: "+971 67451388", po: "PO Box 60839" },
    { city: "Ajman", phone: "+971 67451389", fax: "+971 67451388", po: "PO Box 18490" },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      <Header />
      <div className="max-w-6xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <span className="text-xs font-bold text-[#D4A13A] uppercase tracking-widest">Get In Touch</span>
          <h1 className="text-4xl font-bold text-[#051614] mt-3">Contact Us</h1>
          <p className="text-gray-500 mt-4 max-w-xl mx-auto">We'd love to hear from you. Reach out to our team for project inquiries, partnerships, or general information.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Form */}
          <div className="bg-white rounded-3xl p-10 shadow-sm">
            <h2 className="text-2xl font-bold text-[#051614] mb-8">Send Us a Message</h2>
            <div className="space-y-5">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-wider block mb-2">First Name</label>
                  <input type="text" placeholder="John" className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#D4A13A]" />
                </div>
                <div>
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-wider block mb-2">Last Name</label>
                  <input type="text" placeholder="Doe" className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#D4A13A]" />
                </div>
              </div>
              <div>
                <label className="text-xs font-bold text-gray-500 uppercase tracking-wider block mb-2">Email</label>
                <input type="email" placeholder="john@example.com" className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#D4A13A]" />
              </div>
              <div>
                <label className="text-xs font-bold text-gray-500 uppercase tracking-wider block mb-2">Subject</label>
                <input type="text" placeholder="Project Inquiry" className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#D4A13A]" />
              </div>
              <div>
                <label className="text-xs font-bold text-gray-500 uppercase tracking-wider block mb-2">Message</label>
                <textarea rows={5} placeholder="Tell us about your project..." className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#D4A13A] resize-none" />
              </div>
              <button className="w-full bg-[#051614] text-white font-bold py-4 rounded-xl hover:bg-[#0a2e2a] transition-colors">Send Message</button>
            </div>
          </div>

          {/* Office Info */}
          <div className="space-y-6">
            {offices.map((o, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 shadow-sm">
                <h3 className="text-lg font-bold text-[#051614] mb-4">{o.city}</h3>
                <div className="space-y-2 text-sm text-gray-500">
                  <p>{o.po}</p>
                  <p>Tel: {o.phone}</p>
                  <p>Fax: {o.fax}</p>
                </div>
              </div>
            ))}
            <div className="bg-[#051614] rounded-2xl p-8 text-white">
              <h3 className="text-lg font-bold mb-2">Email Us</h3>
              <p className="text-[#D4A13A] font-semibold">corporate@prestigegroup.me</p>
              <p className="text-gray-400 text-sm mt-2">We typically respond within 24 hours.</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
