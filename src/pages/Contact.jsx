import { useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Phone, Mail, Send, CheckCircle, Building2, MapPin, Clock } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: "", email: "", phone: "", message: "" });
      setTimeout(() => setSubmitted(false), 4000);
    }, 1500);
  };

  // Your exact Google Maps embed iframe
  const mapEmbedUrl =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7012.127925934586!2d78.39503956699822!3d17.44233422717238!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91c40d552785%3A0x87716a7a2a18b5e7!2sARVISH%20CONSULTING!5e1!3m2!1sen!2sin!4v1774940732995!5m2!1sen!2sin";

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      {/* Main two‑column layout */}
      <div className="max-w-6xl mx-auto px-4 xs:px-6 section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14">
          {/* LEFT COLUMN: Contact Form (Name, Email, Phone, Message) */}
          <div className="bg-white rounded-3xl shadow-xl p-6 md:p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-full bg-[#D4A13A]/10 flex items-center justify-center">
                <Send size={16} className="text-[#D4A13A]" />
              </div>
              <h2 className="text-2xl font-bold text-[#051614]">Send Us a Message</h2>
            </div>

            {submitted && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl flex items-center gap-3 animate-fadeIn">
                <CheckCircle size={18} className="text-green-600" />
                <span className="text-green-700 text-sm">Thank you! We'll get back to you soon.</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="text-xs font-bold text-gray-500 uppercase tracking-wider block mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#D4A13A] focus:ring-1 focus:ring-[#D4A13A] transition"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="text-xs font-bold text-gray-500 uppercase tracking-wider block mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#D4A13A] focus:ring-1 focus:ring-[#D4A13A] transition"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label className="text-xs font-bold text-gray-500 uppercase tracking-wider block mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#D4A13A] focus:ring-1 focus:ring-[#D4A13A] transition"
                  placeholder="+91 12345 67890"
                />
              </div>
              <div>
                <label className="text-xs font-bold text-gray-500 uppercase tracking-wider block mb-2">
                  Message *
                </label>
                <textarea
                  rows={5}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#D4A13A] focus:ring-1 focus:ring-[#D4A13A] transition resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#051614] text-white font-bold py-4 rounded-xl hover:bg-[#0a2e2a] transition-all duration-300 transform hover:scale-[1.01] disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    Sending...
                  </>
                ) : (
                  "Send Message"
                )}
              </button>
            </form>
          </div>

          {/* RIGHT COLUMN: Address Block + Embedded Map + Office Hours */}
          <div className="space-y-6">
            {/* Address Card (now includes email) */}
            <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#D4A13A]/10 flex items-center justify-center">
                  <Building2 size={18} className="text-[#D4A13A]" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-[#051614]">ARVISH CONSULTING</h3>
                  <div className="space-y-2 mt-3 text-sm text-gray-600">
                    <p className="flex items-start gap-2">
                      <MapPin size={14} className="text-gray-400 mt-0.5 flex-shrink-0" />
                      <span>Madhapur, Hyderabad - 500081, Telangana, India</span>
                    </p>
                    <p className="flex items-center gap-2">
                      <Phone size={14} className="text-gray-400" />
                      Tel: +91 40 1234 5678
                    </p>
                    <p className="flex items-center gap-2">
                      <Mail size={14} className="text-gray-400" />
                      Fax: +91 40 1234 5679
                    </p>
                    <p className="flex items-center gap-2">
                      <Mail size={14} className="text-[#D4A13A]" />
                      <span className="font-medium">Email:</span> corporate@arvishgroup.me
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Map Embed – placed directly under the address card */}
            <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-200">
              <iframe
                src={mapEmbedUrl}
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="ARVISH CONSULTING Location Map"
                className="w-full h-[300px] md:h-[400px]"
              />
            </div>

            {/* Office Hours Card */}
            <div className="bg-white rounded-2xl p-5 shadow-md">
              <div className="flex items-center gap-3 mb-2">
                <Clock size={18} className="text-[#D4A13A]" />
                <h3 className="text-md font-bold text-[#051614]">Office Hours</h3>
              </div>
              <div className="space-y-1 text-sm text-gray-500">
                <p>Monday – Friday: 9:00 AM – 6:00 PM</p>
                <p>Saturday: 10:00 AM – 2:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  );
}