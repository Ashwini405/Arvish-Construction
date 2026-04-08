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
    <div className="bg-white min-h-screen">
      <Navbar />
      
      {/* Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 -left-20 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float"></div>
        <div className="absolute bottom-20 -right-20 w-96 h-96 bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float-delayed"></div>
      </div>

      {/* Main two‑column layout */}
      <div className="relative max-w-6xl mx-auto px-4 xs:px-6 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14">
          {/* LEFT COLUMN: Contact Form */}
          <div className="bg-white rounded-3xl shadow-xl p-6 md:p-8 border border-blue-100 animate-fade-in-up">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                <Send size={16} className="text-blue-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Send Us a Message</h2>
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
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition"
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
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition"
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
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition"
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
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 text-white font-bold py-4 rounded-xl hover:bg-blue-700 transition-all duration-300 transform hover:scale-[1.01] disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
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
          <div className="space-y-6 animate-fade-in-up animation-delay-200">
            {/* Address Card */}
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-blue-100 group">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-blue-100 flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300 flex-shrink-0">
                  <Building2 size={20} className="text-blue-600 group-hover:text-white transition-colors" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg md:text-xl font-bold text-gray-900">ARVISH CONSULTING</h3>
                  <div className="space-y-3 mt-4 text-sm md:text-base text-gray-600">
                    <p className="flex items-start gap-3">
                      <MapPin size={16} className="text-gray-400 mt-1 flex-shrink-0" />
                      <span className="font-medium leading-relaxed">4 th Floor, CPR Galaxy, Kavuri Hills Rd, beside Orchids, Kakatiya Hills, Kavuri Hills Phase 3, Kavuri Hills, Madhapur, Hyderabad, Telangana 500033</span>
                    </p>
                    <p className="flex items-center gap-3">
                      <Phone size={16} className="text-gray-400 flex-shrink-0" />
                      <span className="font-semibold">+91 99665 56804</span>
                    </p>
                    
                    <a href="mailto:arvishconstructions.interiors@gmail.com" className="flex items-start gap-3 text-slate-600 hover:text-slate-900 transition-colors duration-200 group">
                      <Mail size={16} className="text-blue-600 mt-1 flex-shrink-0" />
                      <div>
                        <span className="font-semibold block">Email:</span>
                        <span className="break-all">arvishconstructions.interiors@gmail.com</span>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Map Embed */}
            <div className="rounded-2xl overflow-hidden shadow-lg border border-blue-100 transform hover:scale-[1.01] transition-all duration-500">
              <iframe
                src={mapEmbedUrl}
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="ARVISH CONSULTING Location Map"
                className="w-full h-[250px] md:h-[400px]"
              />
            </div>

            {/* Office Hours Card */}
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-md hover:shadow-lg transition-all duration-300 border border-blue-100">
              <div className="flex items-center gap-3 mb-4">
                <Clock size={20} className="text-blue-600" />
                <h3 className="text-lg md:text-md font-bold text-gray-900">Office Hours</h3>
              </div>
              <div className="space-y-2 text-sm md:text-base text-gray-600 font-medium">
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
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 10s ease-in-out infinite;
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
          opacity: 0;
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
        }
        .animation-delay-200 {
          animation-delay: 0.2s;
        }
      `}</style>
    </div>
  );
}