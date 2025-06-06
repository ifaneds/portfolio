// src/components/Skills.js
import React from "react";

// Import icons from various react-icons libraries
// You might need to install some of these if you haven't yet (e.g., npm install react-icons)
import {
  FaUnity,
  FaReact,
  FaDocker,
  FaJava,
  FaCogs, // For OOP/Systems
  FaProjectDiagram, // For Data Structures
  FaPalette, // For Texturing
  FaFilm, // For Animation
} from "react-icons/fa"; // Font Awesome
import {
  SiUnrealengine,
  SiPostgresql,
  SiSpringboot,
  SiBlender,
  SiAdobeaftereffects,
  SiAdobepremierepro, // For Video Editing
  SiRender,
} from "react-icons/si"; // Simple Icons
import { IoGameControllerOutline } from "react-icons/io5"; // Ionicons
import { RiCodeBoxLine, RiJavascriptFill } from "react-icons/ri"; // Remix Icon
import { PiFileCSharp } from "react-icons/pi"; // Phosphor Icons
import { CiCamera } from "react-icons/ci"; // For Compositing/Camera work
import { BsFillMenuButtonFill } from "react-icons/bs";
import { MdAnimation } from "react-icons/md";

export default function Skills() {
  // Define skills for each new category with an associated icon
  const gameDevSkills = [
    { name: "Unity", icon: FaUnity },
    { name: "Unreal Engine", icon: SiUnrealengine },
    { name: "Gameplay Systems", icon: IoGameControllerOutline }, // Generic game controller
    { name: "Scripting", icon: RiCodeBoxLine }, // Generic code box
    { name: "UI", icon: BsFillMenuButtonFill }, // Generic button/menu icon for UI
  ];
  const programmingSkills = [
    { name: "Java", icon: FaJava },
    { name: "C#", icon: PiFileCSharp }, // Using the PiFileCSharp icon you provided
    { name: "JavaScript", icon: RiJavascriptFill }, // More specific JS icon
    { name: "Object-Oriented Programming (OOP)", icon: FaCogs }, // Represents systems/mechanisms
    { name: "Data Structures & Algorithms", icon: FaProjectDiagram }, // Represents connections/structure
  ];
  const webDevSkills = [
    { name: "React", icon: FaReact },
    { name: "PostgreSQL", icon: SiPostgresql },
    { name: "Spring Boot", icon: SiSpringboot },
    { name: "Docker (Basics)", icon: FaDocker },
    { name: "Render", icon: SiRender },
  ];
  const artAndAnimationSkills = [
    { name: "3D Modeling (Blender, Cinema 4D)", icon: SiBlender }, // Blender icon, covers general 3D modeling
    { name: "Texturing & UV Mapping", icon: FaPalette }, // Represents color/texture work
    { name: "Character Animation", icon: MdAnimation }, // Generic animation icon
    { name: "Prop Animation", icon: FaFilm }, // Consistent with film/animation icon
  ];
  const vfxSkills = [
    { name: "Adobe After Effects", icon: SiAdobeaftereffects },
    { name: "Blender (Simulations & Pre-rendered VFX)", icon: SiBlender }, // Reusing Blender icon as it's the tool
    { name: "Video Compositing", icon: CiCamera }, // For compositing/camera work
    { name: "Video Editing", icon: SiAdobepremierepro }, // Specific icon for Premiere Pro
  ];

  // Modified SkillCategory to render icon
  const SkillCategory = ({ title, skills }) => (
    <div className="skill-category-card">
      <h3 className="skill-category-title">{title}</h3>
      <div className="skill-tags-container">
        {skills.map((skill, index) => (
          <span key={index} className="skill-tag">
            {/* Render icon if it exists */}
            {skill.icon && <skill.icon className="skill-icon" />}
            {skill.name}
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
