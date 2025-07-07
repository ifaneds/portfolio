import React from "react";
import { FaArtstation, FaLinkedin, FaGithub } from "react-icons/fa";

// No direct style import needed here, App.js handles global style.css

function toggleTheme() {
  const isLight = document.body.classList.contains('light-theme');
  document.body.classList.toggle('light-theme', !isLight);
  document.body.classList.toggle('dark-theme', isLight);
  localStorage.setItem('theme', isLight ? 'dark' : 'light');
}

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <p>
          &copy; {new Date().getFullYear()} Ifan Edwards. All rights reserved.
        </p>
        <div className="footer-social-links">
          <a
            href="https://linkedin.com/in/ifanedwards"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-social-link"
            aria-label="LinkedIn Profile"
          >
            <FaLinkedin className="icon" />
          </a>
          <a
            href="https://github.com/ifaneds"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-social-link"
            aria-label="GitHub Profile"
          >
            <FaGithub className="icon" />
          </a>
          <a
            href="https://www.artstation.com/ifanedwards"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-social-link"
            aria-label="ArtStation Profile"
          >
            <FaArtstation className="icon" />{" "}
          </a>
        </div>
        <button onClick={toggleTheme} className="theme-toggle-button">
          Switch Theme
        </button>
      </div>
    </footer>
  );
}
