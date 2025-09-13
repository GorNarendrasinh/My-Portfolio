import React, { useState } from "react";
import { FaGithub } from "react-icons/fa";
import ecommerceImg from "../../assets/e-commerce.jpg/"
import portfolioImg from "../../assets/portfolio.png";
import todoImg from "../../assets/todo.png";
import weatherImg from "../../assets/weather.jpg";
import restorentImg from  "../../assets/restorent.png";


const projects = [
  {
    title: "E-Commerce Website",
    description: "Full-stack e-commerce platform with authentication, cart, and order management.",
    tech: ["HTML5 & CSS3", "Javacripts", "PYTHON" ,"FLASK","DATABASE(MYSQL)"],
    github: "https://github.com/GorNarendrasinh/E-commerce-Website/tree/new-branch",
    image: ecommerceImg
  },
  {
    title: "Portfolio Website",
    description: "Modern React portfolio with TailwindCSS.",
    tech: ["React", "Tailwind CSS"],
    github: "https://github.com/yourusername/portfolio",
    image: portfolioImg
  },
  {
    title: "Todo App",
    description: "React & Django based Todo app with CRUD operations and responsive UI.",
    tech: ["React", "Django", "Tailwind CSS"],
    github: "https://github.com/yourusername/todo-app",
    image: todoImg
  },
  {
    title: "Weather App",
    description: "A simple weather app fetching live data from OpenWeather API.",
    tech: ["HTML5", "CSS3", "JAVASCRIPTS"],
    github: "https://github.com/GorNarendrasinh/Whether-Application-",
    image: weatherImg
  },
  {
    title: "Responsive-Restaurant",
    description: "Real-time chat application using Socket.io and Node.js.",
    tech: ["React", "Node.js", "Socket.io"],
    github: "https://github.com/yourusername/chat-app",
    image: restorentImg
  },
  {
    title: "Blog Platform",
    description: "A full-stack blogging platform with Markdown support and authentication.",
    tech: ["React", "Node.js", "MongoDB"],
    github: "https://github.com/yourusername/blog-platform",
    image: "/projects/blog.png",
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-950">
      <h2 className="text-4xl font-bold text-center text-purple-600 mb-12">
        🚀 My Projects
      </h2>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto px-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-900 shadow-lg rounded-xl p-6 cursor-pointer hover:shadow-2xl transition"
            onClick={() => setSelectedProject(project)}
          >
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-700 dark:text-gray-300">
              {project.description.substring(0, 60)}...
            </p>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-900 rounded-xl p-6 max-w-lg w-full relative">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 dark:hover:text-white text-2xl font-bold"
            >
              &times;
            </button>

            <h3 className="text-2xl font-bold mb-4 text-purple-500">
              {selectedProject.title}
            </h3>
            <img
              src={selectedProject.image}
              alt={selectedProject.title}
              className="w-full object-cover rounded mb-4"
            />
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              {selectedProject.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-4">
              {selectedProject.tech.map((tech, i) => (
                <span
                  key={i}
                  className="bg-purple-200 text-purple-800 px-3 py-1 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>

            <a
              href={selectedProject.github}
              target="_blank"
              rel="noreferrer"
              className="inline-block bg-gray-800 hover:bg-black text-white px-4 py-2 rounded-lg font-semibold"
            >
              <FaGithub className="inline mr-2" /> View Code
            </a>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;