import React from "react";
import {
  Github,
  Linkedin,
  Mail,
  Code,
  User,
  Briefcase,
  Award,
} from "lucide-react"; // Using lucide-react for icons

// Main App component
const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 text-gray-800 font-inter antialiased">
      {/* Header Section */}
      <header className="bg-white shadow-sm py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row justify-between items-center">
          <div className="text-center sm:text-left mb-4 sm:mb-0">
            <h1 className="text-4xl font-extrabold text-gray-900 leading-tight">
              Jane Script
            </h1>
            <p className="text-xl text-gray-600 mt-1">Full-Stack Developer</p>
          </div>
          <nav className="flex space-x-6">
            <a
              href="#about"
              className="text-gray-600 hover:text-blue-600 transition duration-300 ease-in-out font-medium"
            >
              About
            </a>
            <a
              href="#skills"
              className="text-gray-600 hover:text-blue-600 transition duration-300 ease-in-out font-medium"
            >
              Skills
            </a>
            <a
              href="#projects"
              className="text-gray-600 hover:text-blue-600 transition duration-300 ease-in-out font-medium"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="text-gray-600 hover:text-blue-600 transition duration-300 ease-in-out font-medium"
            >
              Contact
            </a>
          </nav>
        </div>
      </header>

      <main className="max-w-4xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
        {/* About Section */}
        <section
          id="about"
          className="bg-white rounded-xl shadow-lg p-8 mb-10 transform transition duration-500 hover:scale-[1.01]"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
            <User className="mr-3 text-blue-600" size={28} /> About Me
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Hello! I'm Jane Script, a passionate Full-Stack Developer with a
            knack for building robust and scalable web applications. I love
            bringing ideas to life through code and constantly learning new
            technologies.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            My journey in development has equipped me with a strong foundation
            in both front-end and back-end technologies, allowing me to tackle
            challenges holistically and deliver comprehensive solutions.
          </p>
        </section>

        {/* Skills Section */}
        <section
          id="skills"
          className="bg-white rounded-xl shadow-lg p-8 mb-10 transform transition duration-500 hover:scale-[1.01]"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
            <Code className="mr-3 text-green-600" size={28} /> My Skills
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "React",
              "JavaScript",
              "Node.js",
              "Express.js",
              "MongoDB",
              "PostgreSQL",
              "Tailwind CSS",
              "Git",
              "REST APIs",
              "Cloud Deployment",
            ].map((skill, index) => (
              <span
                key={index}
                className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-blue-100 text-blue-800 shadow-sm transition duration-300 hover:bg-blue-200"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* Projects Section (Placeholder) */}
        <section
          id="projects"
          className="bg-white rounded-xl shadow-lg p-8 mb-10 transform transition duration-500 hover:scale-[1.01]"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
            <Briefcase className="mr-3 text-purple-600" size={28} /> My Projects
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            This section will showcase my recent work. Stay tuned for exciting
            projects!
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Project Card 1 */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Project Alpha
              </h3>
              <p className="text-gray-700 text-sm">
                A brief description of Project Alpha, highlighting key
                technologies and my role.
              </p>
              <a
                href="#"
                className="text-blue-600 hover:underline mt-3 inline-block text-sm"
              >
                Learn More &rarr;
              </a>
            </div>
            {/* Project Card 2 */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Project Beta
              </h3>
              <p className="text-gray-700 text-sm">
                Details about Project Beta, focusing on challenges overcome and
                solutions implemented.
              </p>
              <a
                href="#"
                className="text-blue-600 hover:underline mt-3 inline-block text-sm"
              >
                Learn More &rarr;
              </a>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          className="bg-white rounded-xl shadow-lg p-8 transform transition duration-500 hover:scale-[1.01]"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
            <Mail className="mr-3 text-red-600" size={28} /> Get in Touch
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            I'm always open to new opportunities and collaborations. Feel free
            to reach out!
          </p>
          <div className="flex flex-wrap gap-6 justify-center sm:justify-start">
            <a
              href="mailto:your.email@example.com"
              className="flex items-center bg-blue-600 text-white px-6 py-3 rounded-full shadow-md hover:bg-blue-700 transition duration-300 ease-in-out transform hover:-translate-y-1"
            >
              <Mail className="mr-2" size={20} /> Email Me
            </a>
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center bg-gray-800 text-white px-6 py-3 rounded-full shadow-md hover:bg-gray-900 transition duration-300 ease-in-out transform hover:-translate-y-1"
            >
              <Github className="mr-2" size={20} /> GitHub
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center bg-blue-700 text-white px-6 py-3 rounded-full shadow-md hover:bg-blue-800 transition duration-300 ease-in-out transform hover:-translate-y-1"
            >
              <Linkedin className="mr-2" size={20} /> LinkedIn
            </a>
          </div>
        </section>
      </main>

      {/* Footer Section */}
      <footer className="bg-gray-800 text-white py-6 text-center mt-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p>
            &copy; {new Date().getFullYear()} Jane Script. All rights reserved.
          </p>
          <p className="text-sm mt-2">Built with React & Tailwind CSS</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
