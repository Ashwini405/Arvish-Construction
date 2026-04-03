
import { useEffect } from "react";
import Hero from "../components/Hero";
import AboutSection from "../components/AboutSection";
import ServicesSection from "../components/ServicesSection";
import WhyChooseUs from "../components/WhyChooseUs";
import Projects from "../components/Projects";
// import Clients from "../components/Clients";
import Footer from "../components/Footer";

const Home = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
<div className="bg-gray-100 section-padding">
      <Hero />
      <AboutSection />
      <ServicesSection />
      <WhyChooseUs />
      <Projects />
      {/* <Clients /> */}
      <Footer />
    </div>
  );
};

export default Home;