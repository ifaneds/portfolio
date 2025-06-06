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
      githubLink: "https://github.com/ifaneds/side-hustle", // Replace with your GitHub link
      liveLink: "https://ifaneds.github.io/side-hustle/", // Replace with your live demo link
      imageUrl: process.env.PUBLIC_URL + "/side_hustle_project_image.png", // Placeholder image
    },
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
