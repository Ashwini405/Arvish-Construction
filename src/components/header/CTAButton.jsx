const CTAButton = ({
  text = "Get Started",
  colors = "from-blue-500 to-cyan-500",
  className = "",
  onClick = null,
}) => {
  return (
    <button
      onClick={onClick}
      className={`px-6 py-2 bg-gradient-to-r ${colors} text-white rounded-lg font-medium hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 ${className}`}
    >
      {text}
    </button>
  );
};

export default CTAButton;
