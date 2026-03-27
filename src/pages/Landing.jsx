import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Landing.css";

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
          {/* Construction Icon/Logo */}
          <svg
            className="construction-logo"
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Building outline */}
            <g stroke="currentColor" strokeWidth="2" fill="none">
              {/* Crane */}
              <line x1="100" y1="40" x2="140" y2="40" strokeWidth="3" />
              <line x1="140" y1="40" x2="140" y2="80" strokeWidth="3" />
              <line x1="100" y1="40" x2="100" y2="160" strokeWidth="3" />

              {/* Building */}
              <rect x="60" y="90" width="80" height="80" />

              {/* Windows */}
              <rect x="70" y="100" width="12" height="12" />
              <rect x="90" y="100" width="12" height="12" />
              <rect x="110" y="100" width="12" height="12" />
              <rect x="70" y="120" width="12" height="12" />
              <rect x="90" y="120" width="12" height="12" />
              <rect x="110" y="120" width="12" height="12" />
              <rect x="70" y="140" width="12" height="12" />
              <rect x="90" y="140" width="12" height="12" />
              <rect x="110" y="140" width="12" height="12" />

              {/* Shield */}
              <path d="M 40 120 L 40 100 Q 40 80 60 70 L 60 140 Q 40 135 40 120" />
            </g>
          </svg>
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
