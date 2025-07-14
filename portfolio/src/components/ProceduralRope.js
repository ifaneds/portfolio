import React from "react";
import { LuGithub, LuArrowLeft, LuCode, LuSettings, LuZap } from "react-icons/lu";
import ImageGallery from "./ImageGallery";

export default function ProceduralRope() {
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
          <h1 className="project-title">Procedural Rope Component</h1>
          <p className="project-subtitle">Unreal Engine Plugin for Dynamic Rope Generation</p>
        </div>
        <div className="project-video-container" style={{ textAlign: "center", margin: "2rem 0" }}>
  
</div>
        <div className="project-content-centered">
          <div className="project-details">
            <div className="project-section">
              <h2 className="section-title">About the Component</h2>
              <p className="project-description">
                A custom C++ scene component for Unreal Engine that enables the creation of 
                procedural ropes with highly customizable parameters. This plugin provides 
                developers with a powerful and flexible tool for generating dynamic rope 
                systems in real-time.
              </p>
              <p className="project-description">
                The component handles complex 3D vector mathematics to create realistic rope 
                physics and behavior, making it suitable for various game development scenarios 
                including climbing mechanics, grappling hooks, suspension systems, and more.
              </p>
            </div>
            <iframe
    width="800"
    height="450"
    src="https://www.youtube.com/embed/eeggjZnDIcE"
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
                  <LuCode className="feature-icon" />
                  <h3>Customizable Parameters</h3>
                  <p>Adjustable rope length, segment count, physics properties, and visual appearance</p>
                </div>
                <div className="feature-card">
                  <LuSettings className="feature-icon" />
                  <h3>Real-time Generation</h3>
                  <p>Dynamic rope creation and modification during gameplay with smooth performance</p>
                </div>
                <div className="feature-card">
                  <LuZap className="feature-icon" />
                  <h3>Vector Mathematics</h3>
                  <p>Advanced 3D vector calculations for realistic rope behavior and smooth interpolation</p>
                </div>
              </div>
            </div>

            <div className="project-section">
              <h2 className="section-title">Technical Details</h2>
              <div className="tech-stack">
                <div className="tech-category">
                  <h3>Core Architecture</h3>
                  <ul>
                    <li>Custom C++ Scene Component</li>
                    <li>Inherits from USceneComponent</li>
                    <li>Blueprint-exposed functions</li>
                    <li>Editor integration</li>
                  </ul>
                </div>
                <div className="tech-category">
                  <h3>3D Mathematics</h3>
                  <ul>
                    <li>Vector calculations</li>
                    <li>Bezier curve interpolation</li>
                    <li>Segment-based generation</li>
                    <li>Collision detection</li>
                  </ul>
                </div>
                <div className="tech-category">
                  <h3>Performance Features</h3>
                  <ul>
                    <li>Efficient memory management</li>
                    <li>Optimized segment generation</li>
                    <li>Thread-safe operations</li>
                    <li>Real-time physics calculations</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="project-section">
              <h2 className="section-title">Usage Examples</h2>
              <div className="usage-examples">
                <div className="example-item">
                  <h3>Climbing Systems</h3>
                  <p>Create dynamic climbing ropes that respond to player movement and environmental changes.</p>
                </div>
                <div className="example-item">
                  <h3>Grappling Hooks</h3>
                  <p>Implement swinging mechanics with realistic rope physics and tension simulation.</p>
                </div>
                <div className="example-item">
                  <h3>Suspension Bridges</h3>
                  <p>Generate complex rope networks for architectural elements and environmental storytelling.</p>
                </div>
              </div>
            </div>

            <div className="project-section">
              <h2 className="section-title">Development Process</h2>
              <p className="project-description">
                This component was developed through extensive research into rope physics and 
                3D mathematics. I was inspired by the short section of <a href="https://www.youtube.com/watch?v=y9BOz2dFZzs&t=1997s" className="inline-link">this video</a>{" "}  
                 from the creators of sea of thieves where they explain how the ropes in their game work.
                I enjoyed the challenge of trying learn from their implementation while making adaptations for what I wanted to have the component do.
              </p>
              <p className="project-description">
                The plugin is designed to be user-friendly for designers while providing 
                advanced customization options for programmers, making it accessible for 
                various skill levels within a development team.
              </p>
            </div>

            <div className="project-section">
              <h2 className="section-title">Project Gallery</h2>
              <ImageGallery projectName="procedural-rope" />
            </div>

            <div className="project-links-section">
              <h2 className="section-title">Project Links</h2>
              <div className="project-links">
                <a
                  href="https://github.com/ifaneds/ProceduralRopePlugin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  <LuGithub className="icon" /> View on GitHub
                </a>
                <a
                  href="https://youtu.be/eeggjZnDIcE?si=fD-ArX5B8IojRLa7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link video"
                >
                  <LuZap className="icon" /> Watch Demo
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 