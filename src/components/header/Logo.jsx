import arvishLogo from "../../assets/Arvish-Logo-transparent.png";

const Logo = () => {
  return (
    <div className="flex-shrink-0">
      <img
        src={arvishLogo}
        alt="Arvish Constructions"
        className="w-36 h-auto object-contain"
      />
    </div>
  );
};

export default Logo;
