
import React, { useState } from "react";
import { FaGithub, FaExternalLinkAlt, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

import ecommerceImg from "../../assets/e-commerce.jpg";
import portfolioImg from "../../assets/portfolio.png";
import todoImg from "../../assets/todo.png";
import weatherImg from "../../assets/weather.jpg";
import restorentImg from "../../assets/restorent.png";
import smartapp from "../../assets/smart_app.jpg"

const projects = [
    {
    title: "smart focus study app",
    description:
      "React & Django based Todo app with CRUD operations and responsive UI.",
    tech: ["React", "Django", "Tailwind CSS"],
    github: "https://github.com/yourusername/todo-app",
    demo: "https://smart-focus-study-app-1.onrender.com/registartion/",
    image: smartapp,
  },
  {
    title: "E-Commerce Website",
    description:
      "Full-stack e-commerce platform with authentication, cart, and order management.",
    tech: ["HTML5", "CSS3", "JavaScript", "Python", "Flask", "MySQL"],
    github: "https://github.com/GorNarendrasinh/E-commerce-Website/tree/new-branch",
    demo: "https://e-commerce-website-1ryb.onrender.com",
    image: ecommerceImg,
  },
  {
    title: "Portfolio Website",
    description: "Modern React portfolio with TailwindCSS and animations.",
    tech: ["React", "Tailwind CSS"],
    github: "https://github.com/GorNarendrasinh/My-Portfolio",
    demo: "https://gornarendrasinh.vercel.app/",
    image: portfolioImg,
  },
   
  {
    title: "Todo App",
    description:
      "React & Django based Todo app with CRUD operations and responsive UI.",
    tech: ["React", "Django", "Tailwind CSS"],
    github: "https://github.com/yourusername/todo-app",
    demo: "#",
    image: todoImg,
  },
  {
    title: "Weather App",
    description: "Live weather app using OpenWeather API.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/GorNarendrasinh/Whether-Application-",
    demo: "https://github.com/GorNarendrasinh/Whether-Application-",
    image: weatherImg,
  },
  {
    title: "Responsive Restaurant",
    description: "Modern responsive restaurant UI design.",
    tech: ["React", "Tailwind CSS"],
    github: "https://github.com/GorNarendrasinh/Responsive-Restaurant",
    demo: "#",
    image: restorentImg,
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section
      id="projects"
      className="py-20 md:py-28 bg-[#fafafa] relative overflow-hidden text-zinc-800"
    >
      {/* Background Subtle Luxury Gradients & Grid Pattern */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-purple-200/30 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-blue-200/20 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-40 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 md:px-6 relative z-10">
        {/* Heading */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="px-4 py-1.5 rounded-full border border-zinc-200 bg-white text-purple-600 text-xs font-semibold tracking-widest uppercase mb-3 inline-block shadow-sm"
          >
            💼 My Work
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black tracking-tight text-zinc-900"
          >
            🚀 Featured <span className="bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-500 text-transparent bg-clip-text">Projects</span>
          </motion.h2>
          <p className="text-zinc-500 mt-4 text-sm md:text-base font-light max-w-xl mx-auto">
            AI-era modern full-stack development showcase built with clean scalable code architectures.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 w-full">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ y: -6 }}
              className="flex flex-col bg-white/80 backdrop-blur-md border border-zinc-200/80 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 group"
            >
              {/* Image Area - Clicking image opens the clean info modal */}
              <div 
                className="overflow-hidden h-48 w-full relative cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white font-medium text-xs backdrop-blur-[2px]">
                  Click to Expand details
                </div>
              </div>

              {/* Card Contents */}
              <div className="p-5 flex flex-col flex-grow">
                <h3 
                  className="text-lg font-bold mb-2 text-zinc-900 group-hover:text-purple-600 transition-colors cursor-pointer"
                  onClick={() => setSelectedProject(project)}
                >
                  {project.title}
                </h3>

                <p className="text-zinc-500 text-xs md:text-sm mb-4 flex-grow line-clamp-2">
                  {project.description}
                </p>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.tech.slice(0, 3).map((t, i) => (
                    <span
                      key={i}
                      className="text-[10px] font-medium px-2.5 py-0.5 bg-zinc-100 text-zinc-600 rounded-md border border-zinc-200/60"
                    >
                      {t}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="text-[10px] font-bold px-1.5 py-0.5 text-purple-600">
                      +{project.tech.length - 3}
                    </span>
                  )}
                </div>

                {/* Direct Links Footer (Left side GitHub, Right side Live Demo Button) */}
                <div className="flex items-center justify-between border-t border-zinc-100 pt-4 mt-auto">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 text-zinc-600 hover:text-black font-semibold text-xs transition-colors p-1"
                    title="View Source Code"
                  >
                    <FaGithub className="text-xl" />
                    <span>Code</span>
                  </a>

                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 bg-zinc-900 hover:bg-purple-600 text-white font-medium text-xs px-3.5 py-2 rounded-lg transition-all shadow-sm active:scale-95"
                  >
                    <span>Live Demo</span>
                    <FaExternalLinkAlt className="text-[10px]" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* LIGHT COMPACT DETAILS MODAL */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 bg-zinc-950/40 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="bg-white border border-zinc-200 rounded-2xl max-w-lg w-full p-5 relative shadow-2xl flex flex-col max-h-[90vh]"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-3 right-3 bg-zinc-100 hover:bg-zinc-200 text-zinc-600 w-8 h-8 rounded-full flex items-center justify-center transition-colors"
              >
                <FaTimes size={14} />
              </button>

              {/* Image */}
              <img
                src={selectedProject.image}
                className="w-full h-48 md:h-52 object-cover rounded-xl mb-4 shadow-inner"
                alt=""
              />

              {/* Title */}
              <h3 className="text-xl font-bold text-zinc-900 mb-2">
                {selectedProject.title}
              </h3>

              {/* Description */}
              <p className="text-zinc-600 text-sm mb-4 overflow-y-auto pr-1">
                {selectedProject.description}
              </p>

              {/* Full Tech Specifications */}
              <div className="flex flex-wrap gap-1.5 mb-6">
                {selectedProject.tech.map((t, i) => (
                  <span
                    key={i}
                    className="text-xs px-2.5 py-1 bg-purple-50 text-purple-600 border border-purple-100 font-medium rounded-md"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Balanced Modal Actions */}
              <div className="flex gap-3 mt-auto w-full">
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 bg-zinc-100 hover:bg-zinc-200 text-zinc-800 font-semibold text-sm py-2.5 rounded-xl transition-colors border border-zinc-300/60"
                >
                  <FaGithub size={16} /> Code
                </a>

                <a
                  href={selectedProject.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-700 text-white font-semibold text-sm py-2.5 rounded-xl transition-all shadow-md shadow-purple-600/10"
                >
                  <FaExternalLinkAlt size={12} /> Live Demo
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;

