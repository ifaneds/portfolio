import React from "react";
// No direct style import needed here, App.js handles global style.css

export default function Skills() {
  const frontendSkills = [
    "React",
    "Next.js",
    "JavaScript (ES6+)",
    "TypeScript",
    "HTML5",
    "CSS3",
    "Redux",
    "Zustand",
  ];
  const backendSkills = [
    "Node.js",
    "Express.js",
    "Python",
    "Django",
    "Flask",
    "REST APIs",
    "GraphQL",
  ];
  const databaseSkills = [
    "MongoDB",
    "PostgreSQL",
    "MySQL",
    "Firebase",
    "Firestore",
  ];
  const devopsTools = ["Git", "Docker", "AWS", "Netlify", "Vercel"];

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
        <SkillCategory title="Frontend Development" skills={frontendSkills} />
        <SkillCategory title="Backend Development" skills={backendSkills} />
        <SkillCategory title="Databases" skills={databaseSkills} />
        <SkillCategory title="Tools & DevOps" skills={devopsTools} />
      </div>
    </section>
  );
}
