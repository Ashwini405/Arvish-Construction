import React from "react";
import video from "../assets/download.mp4";
import HeroBackground from "./hero/HeroBackground";
import HeroContent from "./hero/HeroContent";
import HeroButtonGroup from "./hero/HeroButtonGroup";
import { siteConfig } from "../config/siteConfig";

const Hero = ({
  title = siteConfig.hero.title,
  subtitle = siteConfig.hero.subtitle,
  buttons = siteConfig.hero.buttons,
  backgroundVideo = video,
  overlayOpacity = siteConfig.hero.overlayOpacity,
}) => {
  return (
    <div className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <HeroBackground
        videoSrc={backgroundVideo}
        overlayOpacity={overlayOpacity}
      />

      {/* Content */}
      <HeroContent title={title} subtitle={subtitle}>
        <HeroButtonGroup buttons={buttons} />
      </HeroContent>
    </div>
  );
};

export default Hero;
