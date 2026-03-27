const HeroContent = ({ title, subtitle, children }) => {
  return (
    <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
      <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-lg tracking-tight">
        {title}
      </h1>
      {subtitle && (
        <p className="text-lg md:text-xl text-gray-200 mb-8 drop-shadow-md leading-relaxed">
          {subtitle}
        </p>
      )}
      {children}
    </div>
  );
};

export default HeroContent;
