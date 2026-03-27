import { ArrowRight } from "lucide-react";

const HeroButton = ({
  label,
  primary = true,
  icon = null,
  onClick = null,
}) => {
  const baseStyles =
    "px-8 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 justify-center";
  
  const primaryStyles =
    "bg-gradient-to-r from-blue-500 to-cyan-500 text-white hover:shadow-lg hover:shadow-blue-500/50";
  
  const secondaryStyles =
    "bg-white/10 backdrop-blur-sm text-white border border-white/20 hover:bg-white/20";

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${primary ? primaryStyles : secondaryStyles}`}
    >
      {label}
      {icon === "ArrowRight" && <ArrowRight className="w-5 h-5" />}
    </button>
  );
};

export default HeroButton;
