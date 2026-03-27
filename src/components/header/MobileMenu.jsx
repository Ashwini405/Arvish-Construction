import { Menu, X } from "lucide-react";
import NavLinks from "./NavLinks";
import CTAButton from "./CTAButton";

const MobileMenu = ({ isOpen, setIsOpen, navLinks, ctaText, ctaColors }) => {
  return (
    <>
      {/* Mobile menu button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden p-2 rounded-lg text-gray-300 hover:text-white hover:bg-gray-800/50 transition-colors"
      >
        {isOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <Menu className="w-6 h-6" />
        )}
      </button>

      {/* Mobile Navigation Dropdown */}
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-gray-900/95 backdrop-blur-sm border-b border-gray-800/30 pb-4 px-4 space-y-2 z-40">
          <NavLinks
            links={navLinks}
            className="flex flex-col space-y-2"
            onClick={() => setIsOpen(false)}
          />
          <CTAButton
            text={ctaText}
            colors={ctaColors}
            className="w-full mt-4"
          />
        </div>
      )}
    </>
  );
};

export default MobileMenu;
