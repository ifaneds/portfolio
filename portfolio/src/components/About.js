import React from "react";
// No direct style import needed here, App.js handles global style.css

export default function About() {
  return (
    <section id="about" className="about-section">
      <h2 className="section-heading">About Me</h2>
      <div className="about-content">
        <p className="about-paragraph">
          Hello! I'm Ifan Edwards, a BSc Games and Multimedia Environments
          graduate, living in Hove. I am currently enrolled in an Unreal Engine
          Game Developer Bootcamp with SkillsCity, where I am honing my skills
          in game development using the Unreal Engine 5 platform. My journey in
          game development has been fueled by a lifelong passion for technology,
          creativity and gaming.
        </p>
        <p className="about-paragraph">
          I have a strong foundation in programming languages such as C# and
          Java, and my degree taught me the principles of computer science, game
          design, and multimedia environments. I am an aspiring Technical
          Artist, with a keen interest in the intersection of art and technology
          in game development. I have experience with software such as Blender
          for 3D modeling and animation and want to combine my technical skills
          with artistic creativity to create visually stunning and immersive
          game experiences.
        </p>
        <p className="about-paragraph">
          Outside of coding and game development, I enjoy swimming, playing
          games, photography and birding. I'm always looking for new challenges
          and opportunities to grow in my career and as an individual.
        </p>
      </div>
    </section>
  );
}
