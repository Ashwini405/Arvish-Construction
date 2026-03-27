const HeroBackground = ({ videoSrc, overlayOpacity = "0.4" }) => {
  return (
    <>
      {/* Background Video */}
      <video
        src={videoSrc}
        autoPlay
        loop
        muted
        className="absolute w-full h-full object-cover"
      />

      {/* Dark overlay */}
      <div className={`absolute inset-0 bg-black/${overlayOpacity}`} />
    </>
  );
};

export default HeroBackground;
