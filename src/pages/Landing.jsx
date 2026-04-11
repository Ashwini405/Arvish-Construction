import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Landing.css";
import arvishLogo from "../assets/Arvish-Logo-transparent.svg";

const Landing = () => {
  const navigate = useNavigate();
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    // Mark that landing has been shown
    sessionStorage.setItem("landingShown", "true");

    // Auto-redirect after 2.5 seconds
    const timer = setTimeout(() => {
      setIsAnimating(false);
      setTimeout(() => navigate("/home"), 300); // Wait for exit animation
    }, 2500);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className={`landing-container ${isAnimating ? "animate" : "exit"}`}>
      {/* Left expanding panel */}
      <div className="panel panel-left"></div>

      {/* Right expanding panel */}
      <div className="panel panel-right"></div>

      {/* Center content */}
      <div className="landing-content">
        <div className="logo-container">
          <img
            src={arvishLogo}
            alt="Arvish Constructions"
            className="construction-logo"
          />
        </div>

        <div className="loading-text">
          <span>L</span>
          <span>O</span>
          <span>A</span>
          <span>D</span>
          <span>I</span>
          <span>N</span>
          <span>G</span>
        </div>
      </div>
    </div>
  );
};

export default Landing;
