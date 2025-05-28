import React from "react";
// No direct style import needed here, App.js handles global style.css

export default function About() {
  return (
    <section id="about" className="about-section">
      <h2 className="section-heading">About Me</h2>
      <div className="about-content">
        <p className="about-paragraph">
          Hello! I'm John Doe, a dedicated Full-Stack Developer with 5+ years of
          experience in crafting robust and scalable web solutions. My journey
          in technology began with a fascination for how things work, leading me
          to dive deep into programming and web development.
        </p>
        <p className="about-paragraph">
          I specialize in modern JavaScript frameworks like React, alongside
          backend technologies such as Node.js and Python. I'm passionate about
          clean code, user-centric design, and continuous learning. I thrive in
          collaborative environments and enjoy tackling complex problems to
          deliver high-quality products.
        </p>
        <p className="about-paragraph">
          Outside of coding, I enjoy hiking, playing guitar, and exploring new
          technologies. I'm always looking for new challenges and opportunities
          to grow as a developer and as an individual.
        </p>
      </div>
    </section>
  );
}
