import { useState } from "react";
import { useLocation, useNavigate, Navigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function CareerApplication() {
  const navigate = useNavigate();
  const location = useLocation();
  const job = location.state?.job;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    resume: null,
    linkedin: "",
    coverLetter: "",
  });

  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <main className="relative pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-10">
            <button
              onClick={() => navigate(-1)}
              className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-800 transition-colors"
            >
              ← Back to Careers
            </button>
          </div>

          <div className="bg-white border border-blue-100 shadow-2xl rounded-3xl p-8 lg:p-12">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-8">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-blue-600 font-semibold">Job Application</p>
                <h1 className="text-4xl font-bold text-gray-900 mt-4">
                  {job ? `Apply for ${job.title}` : "Submit Your Resume"}
                </h1>
                {job ? (
                  <p className="text-sm text-gray-500 mt-3">{job.location} • {job.dept} • {job.type}</p>
                ) : (
                  <p className="text-sm text-gray-500 mt-3">Send us your details and resume. We will contact you when a suitable role is available.</p>
                )}
              </div>
              {job && (
                <div className="rounded-3xl bg-blue-50 p-6">
                  <p className="text-xs uppercase tracking-[0.3em] text-blue-600 font-semibold">Job Role</p>
                  <p className="mt-3 text-sm text-gray-700 leading-7">{job.jd}</p>
                </div>
              )}
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert(job ? `Application sent for ${job.title}.` : "Resume submitted successfully.");
                navigate("/careers");
              }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8"
            >
              <div className="space-y-4">
                <label className="block text-sm text-gray-700">
                  Full Name <span className="text-red-500">*</span>
                  <input
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="mt-2 w-full rounded-2xl border border-gray-200 px-4 py-3 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100"
                    placeholder="Your full name"
                  />
                </label>
                <label className="block text-sm text-gray-700">
                  Email Address <span className="text-red-500">*</span>
                  <input
                    required
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="mt-2 w-full rounded-2xl border border-gray-200 px-4 py-3 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100"
                    placeholder="you@example.com"
                  />
                </label>
                <label className="block text-sm text-gray-700">
                  Phone Number <span className="text-red-500">*</span>
                  <input
                    required
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="mt-2 w-full rounded-2xl border border-gray-200 px-4 py-3 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100"
                    placeholder="+91 98765 43210"
                  />
                </label>
                <label className="block text-sm text-gray-700">
                  Upload Resume <span className="text-red-500">*</span>
                  <input
                    required
                    type="file"
                    accept=".pdf,.doc,.docx"
                    onChange={(e) => setFormData({ ...formData, resume: e.target.files[0] })}
                    className="mt-2 w-full text-sm text-gray-700"
                  />
                </label>
              </div>

              <div className="space-y-4">
                <label className="block text-sm text-gray-700">
                  LinkedIn / Portfolio
                  <input
                    value={formData.linkedin}
                    onChange={(e) => setFormData({ ...formData, linkedin: e.target.value })}
                    className="mt-2 w-full rounded-2xl border border-gray-200 px-4 py-3 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100"
                    placeholder="LinkedIn profile or portfolio link"
                  />
                </label>
                <label className="block text-sm text-gray-700">
                  Cover Letter
                  <textarea
                    value={formData.coverLetter}
                    onChange={(e) => setFormData({ ...formData, coverLetter: e.target.value })}
                    className="mt-2 w-full min-h-[220px] rounded-2xl border border-gray-200 px-4 py-3 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100"
                    placeholder="Tell us about your experience and interest in this role"
                  />
                </label>
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition-all duration-300"
                >
                  Submit Application
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
