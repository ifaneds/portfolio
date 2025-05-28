import React from "react";
import { Github, ExternalLink } from "lucide-react";
// No direct style import needed here, App.js handles global style.css

export default function Projects() {
  const projects = [
    {
      title: "E-commerce Platform",
      description:
        "A full-stack e-commerce application with user authentication, product listings, shopping cart, and payment integration.",
      technologies: ["React", "Node.js", "Express", "MongoDB", "Stripe"],
      githubLink: "https://github.com/yourusername/ecommerce-platform", // Replace with your GitHub link
      liveLink: "https://ecommerce-demo.com", // Replace with your live demo link
      imageUrl: "https://placehold.co/400x250/374151/D1D5DB?text=Project+1", // Placeholder image
    },
    {
      title: "Task Management App",
      description:
        "A responsive task management application with drag-and-drop functionality, real-time updates, and user collaboration.",
      technologies: ["React", "Firebase", "Redux"],
      githubLink: "https://github.com/yourusername/task-app",
      liveLink: "https://task-app-demo.com",
      imageUrl: "https://placehold.co/400x250/374151/D1D5DB?text=Project+2",
    },
    {
      title: "Personal Blog",
      description:
        "A minimalist blog platform built with a modern static site generator, featuring markdown support and SEO optimization.",
      technologies: ["Next.js", "Markdown", "GraphQL", "Vercel"],
      githubLink: "https://github.com/yourusername/personal-blog",
      liveLink: "https://your-blog-demo.com",
      imageUrl: "https://placehold.co/400x250/374151/D1D5DB?text=Project+3",
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
              <Github className="icon" /> GitHub
            </a>
          )}
          {project.liveLink && (
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link live"
            >
              <ExternalLink className="icon" /> Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <section id="projects" className="projects-section">
      <h2 className="section-heading">My Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
}
