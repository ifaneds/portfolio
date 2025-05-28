import React from "react";
import { Mail } from "lucide-react";

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="profile-image-container">
        <img
          src="/icon1k.png" // Replace with your actual profile image URL
          alt="Your Profile"
          className="profile-image"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "/logo512.png"; // Fallback image if the original fails to load
          }}
        />
        <div className="status-indicator"></div>
      </div>
      <h1 className="hero-title">
        Hi, I'm <span className="hero-title-highlight">Ifan Edwards</span>
      </h1>
      <p className="hero-subtitle">
        A passionate{" "}
        <span className="hero-subtitle-highlight">Game Developer</span> with a
        knack for creating immersive experiences.
      </p>
      <div className="hero-buttons">
        <a href="/contact" className="hero-button hero-button-primary">
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
          href="/cv_ifan_edwards.pdf" // download link for my CV
          download
          className="hero-button hero-button-secondary"
        >
          Download CV
        </a>
      </div>
    </section>
  );
}
