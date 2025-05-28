import React from "react";
import { Mail } from "lucide-react"; // Assuming Mail icon for Contact link
// No direct style import needed here, App.js handles global style.css

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="profile-image-container">
        <img
          src="https://placehold.co/128x128/6B46C1/FFFFFF?text=JD"
          alt="Your Profile"
          className="profile-image"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "https://placehold.co/128x128/6B46C1/FFFFFF?text=JD";
          }}
        />
        <div className="status-indicator"></div>
      </div>
      <h1 className="hero-title">
        Hi, I'm <span className="hero-title-highlight">John Doe</span>
      </h1>
      <p className="hero-subtitle">
        A passionate{" "}
        <span className="hero-subtitle-highlight">Full-Stack Developer</span>{" "}
        with a knack for building beautiful and functional web applications.
      </p>
      <div className="hero-buttons">
        {/* Changed to regular anchor as it links to an internal ID or potentially a form action */}
        <a
          href="/contact" // Changed to React Router path
          className="hero-button hero-button-primary"
        >
          <Mail
            className="icon"
            style={{
              display: "inline-block",
              verticalAlign: "middle",
              marginRight: "0.5rem",
            }}
          />{" "}
          Get in Touch
        </a>
        <a
          href="/your-resume.pdf" // Replace with your resume link
          download
          className="hero-button hero-button-secondary"
        >
          Download CV
        </a>
      </div>
    </section>
  );
}
