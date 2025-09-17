import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaReact, FaPython, FaNodeJs, FaDatabase } from "react-icons/fa";
import { SiFlask, SiDjango } from "react-icons/si";
import profilePic from "../../assets/profile1.jpg"; 

const About = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <section id="about" className="py-20 bg-gray-100 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6 md:flex md:items-center md:gap-12">
        {/* Profile Image */}
        <motion.div
          className="flex justify-center md:w-1/3 mb-8 md:mb-0"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <img
            src={profilePic}
            alt="Bapu"
            className="w-55 h-60 object-cover rounded-2xl shadow-lg border-4 border-purple-500"
          />
        </motion.div>

        {/* About Content */}
        <motion.div
          className="md:w-2/3 text-center md:text-left"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-purple-600 mb-4">About Me</h2>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            Hello! I'm <span className="font-semibold text-purple-500">Gor Narendrasinh</span>, 
            a passionate Full-Stack Developer skilled in 
            <span className="text-blue-500"> React.js</span> and 
            <span className="text-green-500"> Python</span>.  
            I enjoy creating <span className="text-yellow-500">dynamic</span> and 
            <span className="text-teal-400">scalable</span> web applications, 
            integrating modern backend frameworks like 
            <span className="text-orange-400"> Flask</span> and 
            <span className="text-indigo-500"> Django</span>, 
            and managing efficient <span className="text-purple-600">databases</span>.  
            Beyond coding, I love exploring AI, enhancing user experiences, and 
            building projects that solve real-world problems.
          </p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-4 justify-center md:justify-start mb-6">
            <span className="flex items-center gap-2 bg-yellow-200 text-yellow-800 px-3 py-1 rounded-full">
              <FaNodeJs /> Javascripts
            </span>
            <span className="flex items-center gap-2 bg-blue-200 text-blue-800 px-3 py-1 rounded-full">
              <FaReact /> React.js
            </span>
            <span className="flex items-center gap-2 bg-green-200 text-green-800 px-3 py-1 rounded-full">
              <FaPython /> Python
            </span>
            <span className="flex items-center gap-2 bg-indigo-200 text-indigo-800 px-3 py-1 rounded-full">
              <SiFlask /> Flask
            </span>
            <span className="flex items-center gap-2 bg-purple-200 text-purple-800 px-3 py-1 rounded-full">
              <SiDjango /> Django
            </span>
            <span className="flex items-center gap-2 bg-gray-200 text-gray-800 px-3 py-1 rounded-full">
              <FaDatabase /> SQL/MongoDB
            </span>
          </div>

          {/* Buttons */}
          <div className="flex gap-4 justify-center md:justify-start">
            <button
              onClick={() => setShowModal(true)}
              className="bg-purple-600 hover:bg-purple-800 text-white px-6 py-2 rounded-lg font-semibold shadow-md"
            >
              👀 View CV
            </button>
            <a
              href="#hireme"
              className="bg-green-600 hover:bg-green-800 text-white px-6 py-2 rounded-lg font-semibold shadow-md"
            >
              🤝 Hire Me
            </a>
          </div>
        </motion.div>
      </div>

      {/* Modal for CV */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg w-11/12 md:w-3/4 lg:w-1/2 p-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold text-purple-600">My Resume</h3>
              <button
                onClick={() => setShowModal(false)}
                className="text-red-600 font-bold text-lg"
              >
                ✖
              </button>
            </div>
            {/* PDF Viewer */}
            <iframe
              src="public/resume.pdf"
              className="w-full h-[500px] border"
              title="Resume"
              
            />
             {/* Download Button */}
            <div className="mt-4 text-center">
              <a
                href="/resume.pdf"
                download
                className="bg-purple-600 hover:bg-purple-800 text-white px-6 py-2 rounded-lg font-semibold shadow-md"
              >
                ⬇ Download CV
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default About;
