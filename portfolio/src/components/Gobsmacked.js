import React from "react";
import { LuGithub, LuArrowLeft, LuUsers, LuGamepad2, LuZap, LuExternalLink } from "react-icons/lu";
import ImageGallery from "./ImageGallery";

export default function Gobsmacked() {
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
          <h1 className="project-title">Gobsmacked!</h1>
          <p className="project-subtitle">A Chaotic Multiplayer Party Game</p>
        </div>

        <div className="project-content-centered">
          <div className="project-details">
            <div className="project-section">
              <h2 className="section-title">About the Game</h2>
              <p className="project-description">
                Gobsmacked! is a fast-paced multiplayer party game that throws players into absurd 
                challenges and unexpected scenarios. Players compete or cooperate in real-time across various 
                game modes, each designed to create hilarious and intense moments.
              </p>
              <p className="project-description">
                The game features physics-based interactions, dynamic environments, and unpredictable 
                events that keep every match fresh and entertaining. Whether you're dodging falling 
                objects, racing through obstacle courses, or competing in skill-based mini-games, 
                Gobsmacked! delivers non-stop action and laughter.
              </p>
            </div>

        
  
            <div className="project-section">
              <h2 className="section-title">My Role</h2>
              <p className="project-description">
                In this project, I have been working on the functionality of two mini games; bomb tag and roped together. 
                For bomb tag, I designed the visual effects and implemented the bomb fuse and explosion Niagara systems. 
                For roped together, I designed the rope mechanics similar methods to the procedural rope component 
                I made for my other project. I have designed two levels which contain mostly 
              </p>
    

            <iframe
    width="800"
    height="450"
    src="https://www.youtube.com/embed/U11Xwk3YYcU"
    title="Procedural Rope Demo"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
    style={{ maxWidth: "100%", borderRadius: "12px", boxShadow: "0 4px 24px rgba(0,0,0,0.15)" }}
  />
  <p className="project-description">

  </p>


    <iframe
width="800"
height="450"
src="https://www.youtube.com/embed/LaTXemeou7Q"
title="Procedural Rope Demo"
frameBorder="0"
allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
allowFullScreen
style={{ maxWidth: "100%", borderRadius: "12px", boxShadow: "0 4px 24px rgba(0,0,0,0.15)" }}
/>
<p className="project-description">
    I created the wooden platforms in this level by using blueprints to add instances to an Instanced Static Mesh.
    The actor uses spline points to decide where the platforms should be, and creates a bridge between the points using 
    my procedural rope component with a wooden plank mesh and negative offset so that there are gaps between the planks. 
    I used an Editor Utility Widget to perform a line trace from the spline points to determine the distance to the ground 
    so that the right amount of instances are created with the correct offset. I modelled a 1x1x1m support beam to be iterated and a platform 
    for the top which are instanced to create the structure. The scale of the spline points dictates the scale of the platforms
    and a bool decides whether bridges should be created. 
  </p>
  <p className="project-description">
  The video below shows the creation of walkways:
  </p>
  <iframe
width="800"
height="450"
src="https://www.youtube.com/embed/jgY6F3eTddE"
title="Procedural Rope Demo"
frameBorder="0"
allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
allowFullScreen
style={{ maxWidth: "100%", borderRadius: "12px", boxShadow: "0 4px 24px rgba(0,0,0,0.15)" }}
/>
  </div>

 

            <div className="project-section">
              <h2 className="section-title">Key Features</h2>
              <div className="features-grid">
                <div className="feature-card">
                  <LuUsers className="feature-icon" />
                  <h3>Multiplayer Madness</h3>
                  <p>Support for 2-8 players with seamless online multiplayer</p>
                </div>
                <div className="feature-card">
                  <LuGamepad2 className="feature-icon" />
                  <h3>Thrilling Mini Games</h3>
                  <p>Multiple game modes with unique challenges and scenarios</p>
                </div>
                <div className="feature-card">
                  <LuZap className="feature-icon" />
                  <h3>Cartoony Visuals</h3>
                  <p>Vibrant, fun art style with exaggerated animations and colorful characters</p>
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
                    <li>C++ for core game logic</li>
                    <li>Blueprint for rapid prototyping</li>
                  </ul>
                </div>
                <div className="tech-category">
                  <h3>Multiplayer</h3>
                  <ul>
                    <li>Modified version of Unreal's built-in networking</li>
                    <li>Accurate replication of player states</li>
                    <li>Cross-platform compatibility</li>
                  </ul>
                </div>
                <div className="tech-category">
                  <h3>Physics & Graphics</h3>
                  <ul>
                    <li>Chaos Physics Engine</li>
                    <li>Advanced particle systems</li>
                    <li>Dynamic lighting and effects</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="project-section">
              <h2 className="section-title">Development Status</h2>
              <p className="project-description">
                Currently in active development. The core multiplayer framework is implemented, 
                with several game modes in progress. The physics system and basic player 
                interactions are functional, with ongoing work on additional game modes and 
                polish features.
              </p>
            </div>

            

            <div className="project-section">
              <h2 className="section-title">Project Gallery</h2>
              <ImageGallery projectName="gobsmacked" />
            </div>

            <div className="project-links-section">
              <h2 className="section-title">Project Links</h2>
              <div className="project-links">
                <a
                  href="https://github.com/jacobvillard/RoomOne"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  <LuGithub className="icon" /> View on GitHub
                </a>
            
                <a
                  href="https://roomone.dpdns.org/index.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link live"
                >
                  <LuExternalLink className="icon" /> Visit the website
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 