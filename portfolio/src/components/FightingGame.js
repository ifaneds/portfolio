import React from "react";
import { LuGithub, LuArrowLeft, LuGamepad2, LuSettings, LuZap, LuExternalLink, LuVideo, LuUser } from "react-icons/lu";
import ImageGallery from "./ImageGallery";

export default function FightingGame() {
  const handleBackClick = () => {
    window.history.back();
  };

  return (
    <div className="project-page">
      <div className="project-page-header">
        <button onClick={handleBackClick} className="back-button">
          <LuArrowLeft className="icon" />
          Back to Projects
        </button>
      </div>

      <div className="project-page-content">
        <div className="project-hero">
          <h1 className="project-title">WIP Fighting Game</h1>
          <p className="project-subtitle">Unreal Engine 5 Martial Arts Fighting Game (Work in Progress)</p>
        </div>

        <div className="project-content-centered">
          <div className="project-details">
            <div className="project-section">
              <h2 className="section-title">About the Game</h2>
              <p className="project-description">
                This is an early-stage martial arts fighting game project being developed in Unreal Engine 5. The goal is to create a dynamic and engaging 3D fighting experience with a focus on fluid animation, responsive controls, and visually striking effects. The project is currently in the prototyping phase, with core gameplay systems and character mechanics under active development.
              </p>
              <p className="project-description">
                The game will feature a blend of hand-crafted and procedural animation, AI-driven opponents, and a flexible combat system. The project is a solo effort.
              </p>
            </div>
            <iframe
    width="800"
    height="450"
    src="https://www.youtube.com/embed/5g2FevneFnE"
    title="Procedural Rope Demo"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
    style={{ maxWidth: "100%", borderRadius: "12px", boxShadow: "0 4px 24px rgba(0,0,0,0.15)" }}
  />
            <div className="project-section">
              <h2 className="section-title">Key Features</h2>
              <div className="features-grid">
                <div className="feature-card">
                  <LuGamepad2 className="feature-icon" />
                  <h3>Responsive Combat</h3>
                  <p>Prototype combat system with light, heavy, and special attacks, as well as blocking and dodging mechanics.</p>
                </div>
                <div className="feature-card">
                  <LuSettings className="feature-icon" />
                  <h3>Animation Blueprint</h3>
                  <p>Custom animation blueprint for smooth transitions and dynamic movement, including hit reactions and combos.</p>
                </div>
                <div className="feature-card">
                  <LuZap className="feature-icon" />
                  <h3>AI Opponents</h3>
                  <p>Early-stage enemy AI using Unreal's Behavior Tree system for basic attack and defense logic.</p>
                </div>
              </div>
            </div>

            <div className="project-section">
              <h2 className="section-title">Technical Details</h2>
              <div className="tech-stack">
                <div className="tech-category">
                  <h3>Game Engine</h3>
                  <ul>
                    <li>Unreal Engine 5</li>
                    <li>C++ for core gameplay logic</li>
                    <li>Blueprints for rapid prototyping and animation</li>
                  </ul>
                </div>
                <div className="tech-category">
                  <h3>Animation</h3>
                  <ul>
                    <li>Custom Animation Blueprint</li>
                    <li>State machines for attack, idle, and movement</li>
                    <li>Procedural animation blending</li>
                  </ul>
                </div>
                <div className="tech-category">
                  <h3>AI & Systems</h3>
                  <ul>
                    <li>Behavior Tree for enemy logic</li>
                    <li>Health and UI systems</li>
                    <li>Basic hit detection and feedback</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="project-section">
              <h2 className="section-title">Development Status</h2>
              <p className="project-description">
                This project is in the early prototyping phase. The main character's movement and attack systems are functional, and the first pass of enemy AI is underway. Next steps include refining combat, expanding the animation set, and improving visual feedback.
              </p>
            </div>

            <div className="project-section">
              <h2 className="section-title">My Role</h2>
              <p className="project-description">
                I am responsible for all aspects of this project, including gameplay programming, animation blueprint design, AI logic, and asset creation. This project is a learning experience in advanced animation systems and Unreal Engine's gameplay framework.
              </p>
            </div>

            <div className="project-section">
              <h2 className="section-title">Project Gallery</h2>
              <ImageGallery projectName="fighting-game" />
            </div>

            <div className="project-links-section">
              <h2 className="section-title">Project Links</h2>
              <div className="project-links">
                <a
                  href="https://github.com/ifaneds/martial-arts-game"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  <LuGithub className="icon" /> View on GitHub
                </a>
                <a
                  href="https://www.youtube.com/watch?v=JelK4N2fZos"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link video"
                >
                  <LuVideo className="icon" /> Early Stages
                </a>
                <a
                  href="https://www.youtube.com/watch?v=5g2FevneFnE"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link video"
                >
                  <LuVideo className="icon" /> Recent Development
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 