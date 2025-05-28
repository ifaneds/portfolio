import React, { useState } from 'react';
import { Home, User, Code, Briefcase, Mail, Linkedin, Github, Twitter, ExternalLink } from 'lucide-react';

// IMPORTANT: This line now imports your new style.css file
import './style.css'; 

// Main App Component
export default function App() {
  // State to manage the current active section for navigation
  const [activeSection, setActiveSection] = useState('home');

  // Function to render the active section based on state
  const renderSection = () => {
    switch (activeSection) {
      case 'home':
        return <Hero />;
      case 'about':
        return <About />;
      case 'skills':
        return <Skills />;
      case 'projects':
        return <Projects />;
      case 'contact':
        return <Contact />;
      default:
        return <Hero />;
    }
  };

  return (
    <div className="app-container"> {/* Replaced min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-gray-100 font-inter antialiased */}
      {/* Header/Navigation */}
      <Header setActiveSection={setActiveSection} activeSection={activeSection} />

      {/* Main content area */}
      <main className="container main-content"> {/* Replaced container mx-auto px-4 py-8 md:py-12 */}
        {renderSection()}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

// Header Component
function Header({ setActiveSection, activeSection }) {
  const navItems = [
    { name: 'Home', icon: Home, id: 'home' },
    { name: 'About', icon: User, id: 'about' },
    { name: 'Skills', icon: Code, id: 'skills' },
    { name: 'Projects', icon: Briefcase, id: 'projects' },
    { name: 'Contact', icon: Mail, id: 'contact' },
  ];

  return (
    <header className="header"> {/* Replaced tailwind classes */}
      <nav className="navbar"> {/* Replaced tailwind classes */}
        {/* Logo/Name */}
        <div className="navbar-brand"> {/* Replaced tailwind classes */}
          <span className="navbar-brand-name">John Doe</span>
        </div>

        {/* Desktop Navigation */}
        <div className="navbar-desktop-menu"> {/* Replaced tailwind classes */}
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveSection(item.id)}
              className={`navbar-button ${activeSection === item.id ? 'active' : ''}`}
            >
              <item.icon className="icon" /> {/* Added a generic icon class if needed for specific icon styling */}
              {item.name}
            </button>
          ))}
        </div>

        {/* Mobile Navigation */}
        <div className="navbar-mobile-menu"> {/* Replaced tailwind classes */}
          <select
            onChange={(e) => setActiveSection(e.target.value)}
            value={activeSection}
            className="navbar-mobile-select"
          >
            {navItems.map((item) => (
              <option key={item.id} value={item.id}>
                {item.name}
              </option>
            ))}
          </select>
        </div>
      </nav>
    </header>
  );
}

// Hero Section
function Hero() {
  return (
    <section id="home" className="hero-section"> {/* Replaced tailwind classes */}
      <div className="profile-image-container"> {/* Replaced tailwind classes */}
        <img
          src="https://placehold.co/128x128/6B46C1/FFFFFF?text=JD"
          alt="Your Profile"
          className="profile-image" {/* Replaced tailwind classes */}
          onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/128x128/6B46C1/FFFFFF?text=JD"; }}
        />
        <div className="status-indicator"></div> {/* Replaced tailwind classes */}
      </div>
      <h1 className="hero-title"> {/* Replaced tailwind classes */}
        Hi, I'm <span className="hero-title-highlight">John Doe</span>
      </h1>
      <p className="hero-subtitle"> {/* Replaced tailwind classes */}
        A passionate <span className="hero-subtitle-highlight">Full-Stack Developer</span> with a knack for building
        beautiful and functional web applications.
      </p>
      <div className="hero-buttons"> {/* Replaced tailwind classes */}
        <a
          href="#contact"
          className="hero-button hero-button-primary" {/* Replaced tailwind classes */}
        >
          Get in Touch
        </a>
        <a
          href="/your-resume.pdf" // Replace with your resume link
          download
          className="hero-button hero-button-secondary" {/* Replaced tailwind classes */}
        >
          Download CV
        </a>
      </div>
    </section>
  );
}

// About Section
function About() {
  return (
    <section id="about" className="about-section"> {/* Replaced tailwind classes */}
      <h2 className="section-heading">About Me</h2>
      <div className="about-content"> {/* Replaced tailwind classes */}
        <p className="about-paragraph"> {/* Replaced tailwind classes */}
          Hello! I'm John Doe, a dedicated Full-Stack Developer with 5+ years of experience in crafting robust and scalable web solutions.
          My journey in technology began with a fascination for how things work, leading me to dive deep into programming and web development.
        </p>
        <p className="about-paragraph"> {/* Replaced tailwind classes */}
          I specialize in modern JavaScript frameworks like React, alongside backend technologies such as Node.js and Python.
          I'm passionate about clean code, user-centric design, and continuous learning. I thrive in collaborative environments
          and enjoy tackling complex problems to deliver high-quality products.
        </p>
        <p className="about-paragraph"> {/* Replaced tailwind classes */}
          Outside of coding, I enjoy hiking, playing guitar, and exploring new technologies. I'm always looking for new challenges
          and opportunities to grow as a developer and as an individual.
        </p>
      </div>
    </section>
  );
}

// Skills Section
function Skills() {
  const frontendSkills = ['React', 'Next.js', 'JavaScript (ES6+)', 'TypeScript', 'HTML5', 'CSS3', 'Redux', 'Zustand'];
  const backendSkills = ['Node.js', 'Express.js', 'Python', 'Django', 'Flask', 'REST APIs', 'GraphQL'];
  const databaseSkills = ['MongoDB', 'PostgreSQL', 'MySQL', 'Firebase', 'Firestore'];
  const devopsTools = ['Git', 'Docker', 'AWS', 'Netlify', 'Vercel'];

  const SkillCategory = ({ title, skills }) => (
    <div className="skill-category-card"> {/* Replaced tailwind classes */}
      <h3 className="skill-category-title">{title}</h3> {/* Replaced tailwind classes */}
      <div className="skill-tags-container"> {/* Replaced tailwind classes */}
        {skills.map((skill, index) => (
          <span
            key={index}
            className="skill-tag" {/* Replaced tailwind classes */}
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );

  return (
    <section id="skills" className="skills-section"> {/* Replaced tailwind classes */}
      <h2 className="section-heading">My Skills</h2>
      <div className="skills-grid"> {/* Replaced tailwind classes */}
        <SkillCategory title="Frontend Development" skills={frontendSkills} />
        <SkillCategory title="Backend Development" skills={backendSkills} />
        <SkillCategory title="Databases" skills={databaseSkills} />
        <SkillCategory title="Tools & DevOps" skills={devopsTools} />
      </div>
    </section>
  );
}

// Projects Section
function Projects() {
  const projects = [
    {
      title: 'E-commerce Platform',
      description: 'A full-stack e-commerce application with user authentication, product listings, shopping cart, and payment integration.',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Stripe'],
      githubLink: 'https://github.com/yourusername/ecommerce-platform', // Replace with your GitHub link
      liveLink: 'https://ecommerce-demo.com', // Replace with your live demo link
      imageUrl: 'https://placehold.co/400x250/374151/D1D5DB?text=Project+1', // Placeholder image
    },
    {
      title: 'Task Management App',
      description: 'A responsive task management application with drag-and-drop functionality, real-time updates, and user collaboration.',
      technologies: ['React', 'Firebase', 'Redux'],
      githubLink: 'https://github.com/yourusername/task-app',
      liveLink: 'https://task-app-demo.com',
      imageUrl: 'https://placehold.co/400x250/374151/D1D5DB?text=Project+2',
    },
    {
      title: 'Personal Blog',
      description: 'A minimalist blog platform built with a modern static site generator, featuring markdown support and SEO optimization.',
      technologies: ['Next.js', 'Markdown', 'GraphQL', 'Vercel'],
      githubLink: 'https://github.com/yourusername/personal-blog',
      liveLink: 'https://your-blog-demo.com',
      imageUrl: 'https://placehold.co/400x250/374151/D1D5DB?text=Project+3',
    },
  ];

  const ProjectCard = ({ project }) => (
    <div className="project-card"> {/* Replaced tailwind classes */}
      <img
        src={project.imageUrl}
        alt={project.title}
        className="project-image" {/* Replaced tailwind classes */}
        onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/400x250/374151/D1D5DB?text=Image+Error"; }}
      />
      <div className="project-content"> {/* Replaced tailwind classes */}
        <h3 className="project-title">{project.title}</h3> {/* Replaced tailwind classes */}
        <p className="project-description">{project.description}</p> {/* Replaced tailwind classes */}
        <div className="project-tech-tags"> {/* Replaced tailwind classes */}
          {project.technologies.map((tech, index) => (
            <span key={index} className="project-tech-tag"> {/* Replaced tailwind classes */}
              {tech}
            </span>
          ))}
        </div>
        <div className="project-links"> {/* Replaced tailwind classes */}
          {project.githubLink && (
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link" {/* Replaced tailwind classes */}
            >
              <Github className="icon" /> GitHub
            </a>
          )}
          {project.liveLink && (
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link live" {/* Replaced tailwind classes */}
            >
              <ExternalLink className="icon" /> Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <section id="projects" className="projects-section"> {/* Replaced tailwind classes */}
      <h2 className="section-heading">My Projects</h2>
      <div className="projects-grid"> {/* Replaced tailwind classes */}
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
}

// Contact Section
function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    // In a real application, you would send this data to a backend server
    // For demonstration, we'll just simulate a successful send
    console.log('Form Data:', formData);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      setStatus('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' }); // Clear form
    } catch (error) {
      console.error('Error sending message:', error);
      setStatus('Failed to send message. Please try again.');
    }
  };

  return (
    <section id="contact" className="contact-section"> {/* Replaced tailwind classes */}
      <h2 className="section-heading">Get in Touch</h2>
      <div className="contact-form-container"> {/* Replaced tailwind classes */}
        <p className="contact-intro-text">
          Have a question or want to work together? Feel free to reach out!
        </p>
        <form onSubmit={handleSubmit} className="contact-form"> {/* Replaced tailwind classes */}
          <div className="form-group">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="form-input" {/* Replaced tailwind classes */}
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="form-input" {/* Replaced tailwind classes */}
              placeholder="your.email@example.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message" className="form-label">
              Message
            </label>
            <textarea
              id="message"
              rows="6"
              className="form-textarea" {/* Replaced tailwind classes */}
              placeholder="Your message here..."
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="submit-button" {/* Replaced tailwind classes */}
          >
            Send Message
          </button>
          {status && (
            <p className={`status-message ${status.includes('success') ? 'success' : 'error'}`}>
              {status}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

// Footer Component
function Footer() {
  return (
    <footer className="footer"> {/* Replaced tailwind classes */}
      <div className="container footer-content"> {/* Replaced tailwind classes */}
        <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
        <div className="footer-social-links"> {/* Replaced tailwind classes */}
          <a
            href="https://linkedin.com/in/yourprofile" // Replace with your LinkedIn profile
            target="_blank"
            rel="noopener noreferrer"
            className="footer-social-link" {/* Replaced tailwind classes */}
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="icon" />
          </a>
          <a
            href="https://github.com/yourusername" // Replace with your GitHub profile
            target="_blank"
            rel="noopener noreferrer"
            className="footer-social-link" {/* Replaced tailwind classes */}
            aria-label="GitHub Profile"
          >
            <Github className="icon" />
          </a>
          <a
            href="https://twitter.com/yourusername" // Replace with your Twitter profile
            target="_blank"
            rel="noopener noreferrer"
            className="footer-social-link" {/* Replaced tailwind classes */}
            aria-label="Twitter Profile"
          >
            <Twitter className="icon" />
          </a>
        </div>
      </div>
    </footer>
  );
}