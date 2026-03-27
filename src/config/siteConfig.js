// Site configuration for easy customization
export const siteConfig = {
  // Header Configuration
  header: {
    logo: {
      text: "CityHub",
      colors: "from-blue-400 to-cyan-300",
    },
    navigation: [
      { name: "Home", href: "#home" },
      { name: "About", href: "#about" },
      { name: "Team", href: "#team" },
      { name: "Contact", href: "#contact" },
    ],
    cta: {
      text: "Get Started",
      colors: "from-blue-500 to-cyan-500",
    },
  },

  // Hero Configuration
  hero: {
    title: "Building the Future",
    subtitle: "Transforming cities with innovative construction and sustainable development",
    buttons: [
      {
        id: "explore",
        label: "Explore Projects",
        primary: true,
        icon: "ArrowRight",
      },
      {
        id: "learn",
        label: "Learn More",
        primary: false,
      },
    ],
    overlayOpacity: "0.4", // 0.4 = 40% (black/40)
  },

  // Brand Colors
  colors: {
    primary: "blue",
    secondary: "cyan",
    dark: "gray-900",
  },
};
