import React from "react";
import { LuGithub, LuExternalLink } from "react-icons/lu";

export default function Projects() {
  const projects = [
    {
      title: "Job Search Platform",
      description:
        "A full-stack job search application with user authentication, job listings, and calendar management. Hosted on Render. Please be patient as any calls to the backend may take a few seconds.",
      technologies: [
        "React",
        "Docker",
        "Java",
        "SpringBoot",
        "PostgreSQL",
        "Render",
      ],
      githubLink: "https://github.com/ifaneds/side-hustle", 
      liveLink: "https://ifaneds.github.io/side-hustle/", 
      imageUrl: process.env.PUBLIC_URL + "/side_hustle_project_image.png",
      },
      {
          title: "Procedural Rope Component",
          description:
              "A custom c++ scene compoonent made for Unreal Engine. It allows for the creation of procedural ropes with customizable parameters.The component is designed to be efficient and flexible, making it suitable for various game development scenarios.", 
          technologies: [
              "C++",
              "Unreal Engine",
              "Procedural Generation",
              "Game Development",
              "3D Vector Maths",
          ], 
          githubLink: "https://github.com/ifaneds/unreal-bootcamp/tree/master/Source",
          liveLink: "https://youtu.be/eeggjZnDIcE?si=fD-ArX5B8IojRLa7",
          imageUrl: process.env.PUBLIC_URL + "/rope_project_image.jpg",
      }
  ];

  const ProjectCard = ({ project }) => (
    <div className="project-card">
      <img
        src={project.imageUrl}
        alt={project.title}
        className="project-image"
        onError={(e) => {
          e.target.onerror = null;
          e.target.src =
            "https://placehold.co/400x250/374151/D1D5DB?text=Image+Error";
        }}
      />
      <div className="project-content">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>
        <div className="project-tech-tags">
          {project.technologies.map((tech, index) => (
            <span key={index} className="project-tech-tag">
              {tech}
            </span>
          ))}
        </div>
        <div className="project-links">
          {project.githubLink && (
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              <LuGithub className="icon" /> GitHub
            </a>
          )}
          {project.liveLink && (
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link live"
            >
              <LuExternalLink className="icon" /> Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <section id="projects" className="projects-section">
      <h2 className="section-heading">My Projects</h2>
      <div className="projects-content">
        <p className="projects-introduction">
          Here are some of the projects I've worked on. Click on the links to
          view the code or see a live demo.
        </p>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
