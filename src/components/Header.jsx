import React, { useState } from "react";
import Logo from "./header/Logo";
import NavLinks from "./header/NavLinks";
import CTAButton from "./header/CTAButton";
import MobileMenu from "./header/MobileMenu";

const defaultNavigation = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Team", href: "#team" },
  { name: "Contact", href: "#contact" },
];

const Header = ({
  logo = { text: "Arvish", colors: "from-blue-400 to-cyan-300" },
  navigation = defaultNavigation,
  cta = { text: "Get Started", colors: "from-blue-500 to-cyan-500" },
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed w-full top-0 z-50 bg-gradient-to-b from-gray-900 to-transparent backdrop-blur-sm border-b border-gray-800/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Logo text={logo.text} colors={logo.colors} />

          {/* Desktop Navigation */}
          <NavLinks
            links={navigation}
            className="hidden md:flex space-x-8"
          />

          {/* Desktop CTA Button */}
          <div className="hidden md:block">
            <CTAButton
              text={cta.text}
              colors={cta.colors}
            />
          </div>

          {/* Mobile Menu */}
          <MobileMenu
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            navLinks={navigation}
            ctaText={cta.text}
            ctaColors={cta.colors}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
