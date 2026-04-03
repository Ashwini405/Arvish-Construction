import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Landing from "./pages/Landing";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import AboutUs from "./pages/AboutUs";
import Services from "./pages/Services";
import OurProjects from "./pages/OurProjects";
import OurStoryAbout from "./pages/OurStoryAbout";
import OurStoryManagement from "./pages/OurStoryManagement";
import OurStorySustainability from "./pages/OurStorySustainability";
import OurStoryDesign from "./pages/OurStoryDesign";
import PreConstruction from "./pages/PreConstruction";
import Construction from "./pages/Construction";
import PostConstruction from "./pages/PostConstruction";
import SmartIntegration from "./pages/SmartIntegration";
import MaintenanceSupport from "./pages/MaintenanceSupport";
import OurStory from "./pages/OurStory";
import DiyasExplorations from "./pages/DiyasExplorations";
import Investors from "./pages/Investors";
import MediaCenter from "./pages/MediaCenter";
import NriCorner from "./pages/NriCorner";
import GodrejAmbassador from "./pages/GodrejAmbassador";
import Enquire from "./pages/Enquire";
import ScheduleSiteVisit from "./pages/ScheduleSiteVisit";
import WorkWithUs from "./pages/WorkWithUs";
import ReachUs from "./pages/ReachUs";

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

    // Only force landing for first visits to non-home paths, so /home can still be reached.
    if (location.pathname !== "/" && location.pathname !== "/home" && !landingShown) {
      navigate("/", { replace: true });
    }
  }, [location.pathname, navigate]);

  return (
    <>
    <ScrollToTop />
    <Routes>
      <Route path="/" element={<Navigate to="/home" replace />} />
      <Route path="/home" element={<Home />} />
      <Route path="/landing" element={<Landing />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/services" element={<Services />} />
      <Route path="/services/pre-construction" element={<PreConstruction />} />
      <Route path="/services/construction" element={<Construction />} />
      <Route path="/services/post-construction" element={<PostConstruction />} />
      <Route path="/services/smart-integration" element={<SmartIntegration />} />
      <Route path="/services/maintenance-support" element={<MaintenanceSupport />} />
      <Route path="/projects" element={<OurProjects />} />
      <Route path="/our-story" element={<OurStory />} />
      <Route path="/our-story/about" element={<OurStoryAbout />} />
      <Route path="/our-story/management" element={<OurStoryManagement />} />
      <Route path="/our-story/sustainability" element={<OurStorySustainability />} />
      <Route path="/our-story/design" element={<OurStoryDesign />} />
      <Route path="/diyas-explorations" element={<DiyasExplorations />} />
      <Route path="/investors" element={<Investors />} />
      <Route path="/media-center" element={<MediaCenter />} />
      <Route path="/nri-corner" element={<NriCorner />} />
      <Route path="/godrej-ambassador" element={<GodrejAmbassador />} />
      <Route path="/enquire" element={<Enquire />} />
      <Route path="/schedule-site-visit" element={<ScheduleSiteVisit />} />
      <Route path="/work-with-us" element={<WorkWithUs />} />
      <Route path="/reach-us" element={<ReachUs />} />
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