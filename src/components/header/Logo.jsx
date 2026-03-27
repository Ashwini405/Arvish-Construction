const Logo = ({ text = "CityHub", colors = "from-blue-400 to-cyan-300" }) => {
  return (
    <div className="flex-shrink-0">
      <h1 className={`text-2xl font-bold bg-gradient-to-r ${colors} bg-clip-text text-transparent`}>
        {text}
      </h1>
    </div>
  );
};

export default Logo;
