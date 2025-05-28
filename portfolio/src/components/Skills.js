import React from "react";

export default function Skills() {
  // Define skills for each new category
  const gameDevSkills = [
    "Unity",
    "Unreal Engine",
    "Gameplay Systems",
    "Scripting",
    "UI",
  ]; // Adjust based on your actual engine experience and learning
  const programmingSkills = [
    "Java",
    "C#",
    "JavaScript",
    "Object-Oriented Programming (OOP)",
    "Data Structures & Algorithms",
  ]; // Add C#/C++ if applicable
  const artAndAnimationSkills = [
    "3D Modeling (Blender, Cinema 4D)",
    "Texturing & UV Mapping",
    "Character Animation",
    "Prop Animation",
  ]; // Specify software you use
  const vfxSkills = [
    "Adobe After Effects",
    "Blender (Simulations & Pre-rendered VFX)",
    "Video Compositing",
    "Video Editing",
  ]; // Specific to your clarification

  const webDevSkills = ["React", "PostgreSQL", "Spring Boot"]; // Keep your strong web skills

  const SkillCategory = ({ title, skills }) => (
    <div className="skill-category-card">
      <h3 className="skill-category-title">{title}</h3>
      <div className="skill-tags-container">
        {skills.map((skill, index) => (
          <span key={index} className="skill-tag">
            {skill}
          </span>
        ))}
      </div>
    </div>
  );

  return (
    <section id="skills" className="skills-section">
      <h2 className="section-heading">My Skills</h2>
      <div className="skills-grid">
        <SkillCategory
          title="Game Development & Engines"
          skills={gameDevSkills}
        />
        <SkillCategory
          title="Programming Languages & Scripting"
          skills={programmingSkills}
        />
        <SkillCategory title="Web Development" skills={webDevSkills} />
        <SkillCategory
          title="3D Art & Animation"
          skills={artAndAnimationSkills}
        />
        <SkillCategory
          title="Visual Effects & Compositing (Pre-rendered)"
          skills={vfxSkills}
        />
      </div>
    </section>
  );
}
