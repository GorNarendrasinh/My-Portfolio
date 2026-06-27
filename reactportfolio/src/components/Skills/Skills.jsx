
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaPython,
  FaNodeJs,
  FaGithub, // Tools icons added
  FaGitAlt
} from "react-icons/fa";
import { SiDjango, SiTailwindcss, SiMongodb, SiMysql } from "react-icons/si";
import { VscCode } from "react-icons/vsc"; // VS Code error-free icon imported

const skills = [
  // --- FRONTEND ---
  { name: "HTML5", icon: <FaHtml5 />, level: 95, color: "from-orange-400 to-red-500", lightGlow: "bg-orange-500/10", iconColor: "text-orange-500", category: "Frontend" },
  { name: "CSS3", icon: <FaCss3Alt />, level: 90, color: "from-blue-400 to-indigo-500", lightGlow: "bg-blue-500/10", iconColor: "text-blue-500", category: "Frontend" },
  { name: "JavaScript", icon: <FaJsSquare />, level: 85, color: "from-amber-400 to-orange-500", lightGlow: "bg-amber-500/10", iconColor: "text-amber-500", category: "Frontend" },
  { name: "React.js", icon: <FaReact />, level: 88, color: "from-cyan-400 to-blue-500", lightGlow: "bg-cyan-500/10", iconColor: "text-cyan-500", category: "Frontend" },
  { name: "Tailwind", icon: <SiTailwindcss />, level: 90, color: "from-teal-400 to-cyan-500", lightGlow: "bg-teal-500/10", iconColor: "text-teal-500", category: "Frontend" },
  
  // --- BACKEND ---
  { name: "Python", icon: <FaPython />, level: 85, color: "from-blue-500 to-cyan-600", lightGlow: "bg-blue-500/10", iconColor: "text-sky-600", category: "Backend" },
  { name: "Django", icon: <SiDjango />, level: 80, color: "from-emerald-500 to-green-700", lightGlow: "bg-emerald-500/10", iconColor: "text-emerald-600", category: "Backend" },
  { name: "Node.js", icon: <FaNodeJs />, level: 78, color: "from-green-400 to-emerald-600", lightGlow: "bg-green-500/10", iconColor: "text-green-600", category: "Backend" },
  { name: "MongoDB", icon: <SiMongodb />, level: 82, color: "from-green-500 to-lime-500", lightGlow: "bg-lime-500/10", iconColor: "text-emerald-500", category: "Backend" },
  { name: "MySQL", icon: <SiMysql />, level: 85, color: "from-blue-600 to-cyan-500", lightGlow: "bg-blue-500/10", iconColor: "text-blue-500", category: "Backend" },
  
  // --- TOOLS (Integrated Seamlessly) ---
  { name: "Git", icon: <FaGitAlt />, level: 85, color: "from-orange-500 to-red-600", lightGlow: "bg-orange-500/10", iconColor: "text-orange-600", category: "Tools" },
  { name: "GitHub", icon: <FaGithub />, level: 90, color: "from-zinc-700 to-zinc-900", lightGlow: "bg-zinc-100", iconColor: "text-zinc-800", category: "Tools" },
  { name: "VS Code", icon: <VscCode />, level: 92, color: "from-blue-500 to-sky-600", lightGlow: "bg-blue-500/10", iconColor: "text-blue-600", category: "Tools" }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05 }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 100, damping: 15 } }
};

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "All" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="relative py-20 md:py-28 bg-[#fafafa] overflow-hidden text-zinc-800">
      {/* Background Micro Glows */}
      <div className="absolute top-0 left-1/4 w-72 md:w-[500px] h-72 md:h-[500px] bg-violet-200/40 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-80 md:w-[600px] h-80 md:h-[600px] bg-cyan-200/30 rounded-full blur-[120px] pointer-events-none" />
      
      {/* Clean Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)] bg-[size:3rem_3rem] md:bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-16 md:mb-20">
          <motion.span 
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="px-4 py-1.5 rounded-full border border-zinc-200 bg-white text-violet-600 text-xs font-semibold tracking-widest uppercase mb-4 inline-block shadow-sm"
          >
            🚀 My Expertise
          </motion.span>
          <motion.h2 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-6xl font-black tracking-tight text-zinc-900"
          >
            Tech <span className="bg-gradient-to-r from-violet-600 via-indigo-600 to-cyan-500 text-transparent bg-clip-text">Stack & Skills</span>
          </motion.h2>
          <p className="text-zinc-500 mt-4 max-w-2xl mx-auto text-sm md:text-lg font-light leading-relaxed px-2">
            A specialized look into the technologies and developer tools I use to design high-performance software.
          </p>
        </div>

        {/* Category Tabs (Now dynamically supports Frontend, Backend, Tools) */}
        <div className="flex justify-center gap-1 mb-12 max-w-md mx-auto bg-zinc-200/50 p-1.5 rounded-xl border border-zinc-200/80 backdrop-blur-md shadow-inner">
          {["All", "Frontend", "Backend", "Tools"].map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`relative flex-1 py-2 text-xs md:text-sm font-bold rounded-lg transition-colors z-10 ${
                activeCategory === cat ? "text-zinc-900" : "text-zinc-500 hover:text-zinc-800"
              }`}
            >
              {activeCategory === cat && (
                <motion.div
                  layoutId="activeTabLight"
                  className="absolute inset-0 bg-white rounded-lg -z-10 shadow-sm border border-zinc-200"
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                />
              )}
              {cat}
            </button>
          ))}
        </div>

        {/* Grid Animation Container */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill) => (
              <motion.div
                key={skill.name}
                variants={itemVariants}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
                whileHover={{ y: -5 }}
                className="group relative"
              >
                <div className={`absolute -inset-1 rounded-2xl bg-gradient-to-r ${skill.color} opacity-0 group-hover:opacity-10 blur-md transition-opacity duration-500`} />

                {/* White Premium Card structure */}
                <div className="relative p-5 md:p-6 bg-white/70 backdrop-blur-xl border border-zinc-200 rounded-2xl overflow-hidden shadow-sm transition-all duration-300 group-hover:border-zinc-300/80 group-hover:bg-white group-hover:shadow-md">
                  <div className="relative z-10">
                    <div className="flex justify-between items-center mb-5">
                      <div className={`p-3 ${skill.lightGlow} ${skill.iconColor} rounded-xl text-3xl group-hover:scale-110 transition-transform duration-300 shadow-sm`}>
                        {skill.icon}
                      </div>
                      <div className="text-right">
                        <span className="block text-lg md:text-xl font-extrabold text-zinc-900 tracking-tight">{skill.level}%</span>
                        <span className="text-[9px] md:text-[10px] uppercase tracking-wider text-zinc-400 font-bold">
                          {skill.category}
                        </span>
                      </div>
                    </div>

                    <h3 className="text-base md:text-lg font-bold mb-3 tracking-wide text-zinc-800 group-hover:text-zinc-900 transition-colors">{skill.name}</h3>

                    {/* Clean Progress Track */}
                    <div className="h-1.5 w-full bg-zinc-200/70 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, ease: "easeInOut", delay: 0.1 }}
                        className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Footer Stats Grid */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 md:mt-24 grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-12 py-6 border-t border-zinc-200 text-center text-zinc-500 font-medium"
        >
          <div className="text-xs md:text-sm tracking-wide">
            🚀 <span className="text-zinc-900 font-extrabold text-sm md:text-base ml-1">12+</span> Total Tech Utilities
          </div>
          <div className="text-xs md:text-sm tracking-wide border-y sm:border-y-0 sm:border-x border-zinc-200 py-3 sm:py-0">
            ⚡ <span className="text-zinc-900 font-extrabold text-sm md:text-base ml-1">Git Workflow</span> Production Ready
          </div>
          <div className="text-xs md:text-sm tracking-wide">
            📱 <span className="text-zinc-900 font-extrabold text-sm md:text-base ml-1">Clean Code</span> Architecture
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
