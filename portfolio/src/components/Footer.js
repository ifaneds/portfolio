import React from "react";
import { Linkedin, Github, Twitter } from "lucide-react";
// No direct style import needed here, App.js handles global style.css

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
        <div className="footer-social-links">
          <a
            href="https://linkedin.com/in/yourprofile" // Replace with your LinkedIn profile
            target="_blank"
            rel="noopener noreferrer"
            className="footer-social-link"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="icon" />
          </a>
          <a
            href="https://github.com/yourusername" // Replace with your GitHub profile
            target="_blank"
            rel="noopener noreferrer"
            className="footer-social-link"
            aria-label="GitHub Profile"
          >
            <Github className="icon" />
          </a>
          <a
            href="https://twitter.com/yourusername" // Replace with your Twitter profile
            target="_blank"
            rel="noopener noreferrer"
            className="footer-social-link"
            aria-label="Twitter Profile"
          >
            <Twitter className="icon" />
          </a>
        </div>
      </div>
    </footer>
  );
}
