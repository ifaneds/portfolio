import React from "react";
import { LuGithub, LuExternalLink, LuArrowRight, LuVideo } from "react-icons/lu";
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
          live: "https://store.steampowered.com/app/3830220/GOBSMACKED/",
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
        "New project for a fighting game in UE5. Very early stages. Aiming for reactive combat that feels good to use. Learning a lot during the process.",
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
        video: "https://www.youtube.com/watch?v=5g2FevneFnE", // No additional page for this project
        internal: "fighting-game" // Now links to the internal page
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
    {
      title: "Game Jam - It's not what it seems",
      description:
        "A game developed for a game jam as part of the Unreal Engine - Games Developer Bootcamp. Click the video link to see a short demo",
      technologies: [
        "Unreal Engine",
        "Blueprints",
        "Game Jam",
        "Game Development"
      ],
      links: {
        github: null,
        live: null,
        video: "https://www.youtube.com/watch?v=WM_G8nnBiLw",
        internal: null
      },
      imageUrl: process.env.PUBLIC_URL + "/game_jam_project_image.png"
    },
    {
      title: "Save the Party",
      description:
        "A short game made in Unity as part of my degree. Players must navigate a dark night club and get the party back up and running.",
      technologies: [
        "Unity",
        "C#",
        "Level Design",
        "Game Development"
      ],
      links: {
        github: "https://github.com/ifaneds/save-the-party",
        live: null,
        video: "https://www.youtube.com/watch?v=jQDdHifcgaA",
        internal: null
      },
      imageUrl: process.env.PUBLIC_URL + "/save_the_party_project_image.PNG"
    },
    {
      title: "Property Tycoon",
      description:
        "Reacreation of the classic game 'Monopoly' made with Python and Pygame. The game is a simple simulation of the real world where players buy and sell properties, and collect rent from other players. Made for a university assignment.",
      technologies: [
        "Python",
        "Pygame",
        "Adobe Illustrator",
        "Game Development"
      ],
      links: {
        github: "https://github.com/ifaneds/property-tycoon",
        live: null,
        video: "https://www.youtube.com/watch?v=fUyp6XDiUk4",
        internal: null
      },
      imageUrl: process.env.PUBLIC_URL + "/property_tycoon_project_image.PNG"
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
