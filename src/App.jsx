import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Landing from "./pages/Landing";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import AboutUs from "./pages/AboutUs";
import Services from "./pages/Services";
import OurProjects from "./pages/OurProjects";
import GroupCompanies from "./pages/GroupCompanies";
import Careers from "./pages/Careers";
import News from "./pages/News";
import Contact from "./pages/Contact";
import ScrollToTop from "./components/ScrollToTop";
import Residential from "./pages/Residential";
import CommercialRetail from "./pages/CommercialRetail";
import EducationalHealthcare from "./pages/EducationalHealthcare";
import Industrial from "./pages/Industrial";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import CookiePolicy from "./pages/CookiePolicy";

function AppRoutes() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // Check if landing has already been shown in this session
    const landingShown = sessionStorage.getItem("landingShown");

    // If not on landing page and landing hasn't been shown, redirect to landing
    if (location.pathname !== "/" && !landingShown) {
      navigate("/", { replace: true });
    }
  }, [location.pathname, navigate]);

  return (
    <>
    <ScrollToTop />
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/home" element={<Home />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/services" element={<Services />} />
      <Route path="/projects" element={<OurProjects />} />
      <Route path="/group-companies" element={<GroupCompanies />} />
      <Route path="/careers" element={<Careers />} />
      <Route path="/news" element={<News />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/services/residential" element={<Residential />} />
      <Route path="/services/commercial-retail" element={<CommercialRetail />} />
      <Route path="/services/educational-healthcare" element={<EducationalHealthcare />} />
      <Route path="/services/industrial" element={<Industrial />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/terms-of-service" element={<TermsOfService />} />
      <Route path="/cookie-policy" element={<CookiePolicy />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;