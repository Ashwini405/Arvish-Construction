
import Header from "../components/Header";
import Hero from "../components/Hero";
import AboutSection from "../components/AboutSection";
import ServicesSection from "../components/ServicesSection";
import WhyChooseUs from "../components/WhyChooseUs";
import Projects from "../components/Projects";
import Clients from "../components/Clients";
import Footer from "../components/Footer";

const Home = () => {
  return (
<div className="bg-gray-100">
      <Header />
     
      <Hero />
      <AboutSection />
      <ServicesSection />
      <WhyChooseUs />
      <Projects />
      <Clients />
      <Footer />

    </div>
  );
};

export default Home;