// components/Skills/Skills.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaPython, FaDatabase, FaBootstrap } from "react-icons/fa";
import { SiFlask, SiDjango } from "react-icons/si";

const skills = [
  { name: "HTML5", icon: <FaHtml5 />, level: 95, color: "bg-red-500" },
  { name: "CSS3", icon: <FaCss3Alt />, level: 90, color: "bg-blue-500" },
  { name: "JavaScript", icon: <FaJsSquare />, level: 60, color: "bg-yellow-500" },
  { name: "React.js", icon: <FaReact />, level: 80, color: "bg-blue-400" },
  { name: "Python", icon: <FaPython />, level: 85, color: "bg-green-500" },
  { name: "Flask", icon: <SiFlask />, level: 75, color: "bg-gray-700" },
  { name: "Django", icon: <SiDjango />, level: 65, color: "bg-green-700" },
  { name: "Database", icon: <FaDatabase />, level: 80, color: "bg-purple-500" },
  {name :  "bootstrap5", icon: <FaBootstrap/>, level:85, color: "bg-yellow-800"}
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-purple-600 text-center mb-12">
          💻 My Skills
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((skill, index) => (
            <div key={index}>
              <div className="flex items-center justify-between mb-1">
                <div className="flex items-center gap-2">
                  {skill.icon}
                  <span className="font-semibold">{skill.name}</span>
                </div>
                <span>{skill.level}%</span>
              </div>
              <div className="w-full h-4 bg-gray-300 dark:bg-gray-700 rounded-full">
                <motion.div
                  className={`${skill.color} h-4 rounded-full`}
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1 + index * 0.2 }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Buttons Example */}
        <div className="flex flex-wrap gap-4 justify-center mt-10">
          <a
            href="#projects"
            className="bg-purple-600 hover:bg-purple-800 text-white px-6 py-2 rounded-lg font-semibold shadow-md"
          >
            🚀 View Projects
          </a>
       
       
        </div>
      </div>
    </section>
  );
};

export default Skills;
