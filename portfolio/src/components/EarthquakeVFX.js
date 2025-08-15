import React, { useState } from "react";
import { LuGithub, LuArrowLeft, LuGamepad2, LuSettings, LuZap, LuVideo } from "react-icons/lu";
import ImageGallery from "./ImageGallery";

export default function EarthquakeVFX() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  const handleBackClick = () => {
    window.history.back();
  };

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

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
          <h1 className="project-title">Earthquake VFX</h1>
          <p className="project-subtitle">Blender and After Effects Earthquake VFX</p>
        </div>

        <div className="project-content-centered">
          <div className="project-details">
            <div className="project-section">
              <h2 className="section-title">About the Project</h2>
              <p className="project-description">
                This is a project I did for my university final project. The goal was to create a realistic earthquake VFX using Blender and After Effects. You may read the report below.
              </p>
            </div>

            <div className="project-section">
              <p className="project-description">
               Here is the final shot I created:
                </p>
              <iframe
        width="800"
        height="450"
        src="https://www.youtube.com/embed/pAI_l4xIOQY"
        title="VFX Video"
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
                  <LuGamepad2 className="feature-icon" />
                  <h3>Realistic Physics</h3>
                  <p>Simulated earthquake effects with realistic building destruction and debris physics.</p>
                </div>
                <div className="feature-card">
                  <LuSettings className="feature-icon" />
                  <h3>Blender Animation</h3>
                  <p>Created detailed 3D models and for the pylon and environmental elements.</p>
                </div>
                <div className="feature-card">
                  <LuZap className="feature-icon" />
                  <h3>After Effects Compositing</h3>
                  <p>Seamless integration of 3D elements with live-action footage using advanced compositing techniques.</p>
                </div>
              </div>
            </div>

            <div className="project-section">
              <h2 className="section-title">Technical Details</h2>
              <div className="tech-stack">
                <div className="tech-category">
                  <h3>3D Software</h3>
                  <ul>
                    <li>Blender for 3D modeling and animation</li>
                    <li>Rigid body physics simulation</li>
                    <li>Particle systems for debris</li>
                  </ul>
                </div>
                <div className="tech-category">
                  <h3>Compositing</h3>
                  <ul>
                    <li>Adobe After Effects</li>
                    <li>Camera tracking and match moving</li>
                    <li>Color grading and final compositing</li>
                  </ul>
                </div>
                <div className="tech-category">
                  <h3>VFX Pipeline</h3>
                  <ul>
                    <li>Pre-visualization and storyboarding</li>
                    <li>3D asset creation and animation</li>
                    <li>Final compositing and color correction</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="project-section">
              <h2 className="section-title">Development Process</h2>
              <p className="project-description">
                The project began with extensive research into real earthquake footage, as well as existing VFX footage.
                I created detailed 3D models and used Blender's physics engine to simulate realistic 
                destruction. The final compositing in After Effects involved careful camera tracking and seamless 
                integration of the 3D elements with the live-action background.
              </p>
            </div>

            <div className="project-section">
              <h2 className="section-title">My Role</h2>
              <p className="project-description">
                I was responsible for the entire VFX pipeline from concept to final delivery. This included 
                3D modeling and animation in Blender, physics simulation, camera tracking, and final compositing 
                in After Effects. The project demonstrated my ability to create realistic visual effects using 
                industry-standard software.
              </p>
            </div>

                         <div className="project-section">
               <h2 className="section-title">Project Report</h2>
   
                 <iframe 
                   src={process.env.PUBLIC_URL + "/projects/earthquake-vfx/earthquake_vfx_report.pdf#toolbar=0&navpanes=0&scrollbar=0"}
                   width="100%" 
                   height="600px"
                   style={{ 
                     border: "1px solid #ddd", 
                     borderRadius: "12px", 
                     boxShadow: "0 4px 24px rgba(0,0,0,0.15)"
                   }}
                   title="Project Report PDF"
                 />
             </div>





            <div className="project-section">
              <h2 className="section-title">Project Gallery</h2>
              <ImageGallery projectName="earthquake-vfx" />
            </div>

            <div className="project-links-section">
              <h2 className="section-title">Project Links</h2>
              <div className="project-links">
                <a
                  href="https://www.youtube.com/watch?v=pAI_l4xIOQY"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link video"
                >
                  <LuVideo className="icon" /> Final VFX Shot
                </a>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
  );
} 
