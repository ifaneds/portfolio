import React from "react";
import { LuGithub, LuExternalLink, LuFileText, LuArrowRight, LuVideo } from "react-icons/lu";
import { Link, Outlet } from "react-router-dom";

export default function Projects() {
  const projects = [
   
    {
      title: "Gobsmacked!",
      description:
        "A chaotic multiplayer party game where players compete in absurd challenges and unexpected scenarios. Features real-time multiplayer, dynamic game modes, and hilarious physics-based interactions.",
      technologies: [
        "C++",
        "Unreal Engine",
        "Multiplayer",
        "Game Development",
        "Networking",
        "Physics",
      ],
              links: {
          github: "https://github.com/jacobvillard/RoomOne",
          live: "https://roomone.dpdns.org/index.html",
          video: null,
          internal: "gobsmacked" // Internal page for this project
        },
      imageUrl: process.env.PUBLIC_URL + "/gobsmacked_project_image.png",
    }, 
    {
      title: "Procedural Rope",
      description:
        "A custom C++ scene component made for Unreal Engine. It allows for the creation of procedural ropes with customizable parameters.The component is designed to be efficient and flexible, making it suitable for various game development scenarios.",
      technologies: [
        "C++",
        "Unreal Engine",
        "Procedural Generation",
        "Game Development",
        "3D Vector Maths",
      ],
      links: {
        github: "https://github.com/ifaneds/ProceduralRopePlugin",
        live: null,
        video: "https://youtu.be/eeggjZnDIcE?si=fD-ArX5B8IojRLa7", // Video demo link
        internal: "procedural-rope" // Internal page for this project
      },
      imageUrl: process.env.PUBLIC_URL + "/rope_project_image.jpg",
    },
    {
      title: "WIP Fighting game",
      description:
        "New project for a fighting game in UE5. Very early stages.",
      technologies: [
        "C++",
        "Unreal Engine",
        "Animation",
        "Game Development",
        "Blueprinting",
      ],
      links: {
        github: "https://github.com/ifaneds/martial-arts-game",
        live: null,
        video: "https://www.youtube.com/watch?v=JelK4N2fZos", // No additional page for this project
        internal: null // No internal page for this project
      },
      imageUrl: process.env.PUBLIC_URL + "/fighting_game_project_image.png",
    },
    {
      title: "Job Search Platform",
      description:
        "A full-stack job search application with user authentication, job listings, and calendar management. Hosted on Render. Please be patient as any calls to the backend may take a few seconds. (Database currently offline)",
      technologies: [
        "React",
        "Docker",
        "Java",
        "SpringBoot",
        "PostgreSQL",
        "Render",
      ],
      links: {
        github: "https://github.com/ifaneds/side-hustle",
        live: "https://ifaneds.github.io/side-hustle/",
        video: null, // No additional page for this project
        internal: null // No internal page for this project
      },
      imageUrl: process.env.PUBLIC_URL + "/side_hustle_project_image.png",
    },
  ];

  const ProjectCard = ({ project }) => {
    const cardContent = (
      <div className={`project-card ${project.links.internal ? 'clickable' : ''}`}
        style={{ cursor: project.links.internal ? 'pointer' : 'default' }}
      >
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
          <div className="project-header">
            <h3 className="project-title">{project.title}</h3>
            {project.links.internal && (
              <span className="internal-link-arrow" title="View project details">
                <LuArrowRight className="internal-link-icon" />
              </span>
            )}
          </div>
          <p className="project-description">{project.description}</p>
          <div className="project-tech-tags">
            {project.technologies.map((tech, index) => (
              <span key={index} className="project-tech-tag">
                {tech}
              </span>
            ))}
          </div>
          <div className="project-links">
            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
                onClick={(e) => e.stopPropagation()}
              >
                <LuGithub className="icon" /> GitHub
              </a>
            )}
            {project.links.live && (
              <a
                href={project.links.live}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link live"
                onClick={(e) => e.stopPropagation()}
              >
                <LuExternalLink className="icon" /> Site
              </a>
            )}
            {project.links.video && (
              <a
                href={project.links.video}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link video"
                onClick={(e) => e.stopPropagation()}
              >
                <LuVideo className="icon" /> Video
              </a>
            )}
          </div>
        </div>
      </div>
    );

    // If internal link, wrap the card in a Link for full-card navigation
    return project.links.internal ? (
      <Link
        to={`/projects/${project.links.internal}`}
        style={{ textDecoration: 'none', color: 'inherit' }}
      >
        {cardContent}
      </Link>
    ) : cardContent;
  };

  return (
    <section id="projects" className="projects-section">
      <h2 className="section-heading">My Projects</h2>
      <div className="projects-content">
        <p className="projects-introduction">
          Here are some of the projects I've worked on. Click on the links to
          view the code or see a demo.
        </p>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
      <Outlet />
    </section>
  );
}
