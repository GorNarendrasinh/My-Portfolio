
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaReact, FaPython, FaDatabase, FaTimes, FaDownload, FaBriefcase, FaUser } from "react-icons/fa";
import { SiFlask, SiDjango, SiJavascript } from "react-icons/si";
import profilePic from "../../assets/profile1.jpg"; 

const About = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <section id="about" className="relative py-20 md:py-28 bg-[#fafafa] overflow-hidden text-zinc-800">
      {/* Premium Studio Light Ambient Glows */}
      <div className="absolute top-1/4 left-1/3 w-80 md:w-[550px] h-80 md:h-[550px] bg-violet-100/50 rounded-full blur-[110px] pointer-events-none" />
      <div className="absolute bottom-12 right-1/4 w-72 md:w-[450px] h-72 md:h-[450px] bg-emerald-50/40 rounded-full blur-[90px] pointer-events-none" />
      
      {/* Light Clean Tech Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)] bg-[size:3rem_3rem] md:bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-16">
          
          {/* Left Side: Premium Framed Profile Image */}
          <motion.div
            className="flex justify-center w-full md:w-5/12 relative"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 80, damping: 20 }}
          >
            {/* Spinning Abstract Background Border */}
            <div className="absolute inset-0 bg-gradient-to-tr from-violet-500 via-indigo-500 to-emerald-400 rounded-3xl blur-[2px] opacity-70 transform rotate-3 scale-105 group-hover:rotate-6 transition-transform duration-500" />
            
            <div className="relative bg-white p-3 rounded-3xl shadow-xl border border-zinc-200/50">
              <img
                src={profilePic}
                alt="Bapu"
                className="w-64 h-72 md:w-72 md:h-80 object-cover rounded-2xl grayscale-[20%] hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </motion.div>

          {/* Right Side: Luxury Typography About Content */}
          <motion.div
            className="w-full md:w-7/12 text-center md:text-left"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {/* Minimalist Pill Badge */}
            <span className="px-4 py-1.5 rounded-full border border-zinc-200 bg-white text-violet-600 text-xs font-bold tracking-widest uppercase mb-4 inline-flex items-center gap-1.5 shadow-sm">
              <FaUser size={10} /> About Me
            </span>
            
            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-zinc-900 mb-6">
              Crafting Digital Solutions <br />
              <span className="bg-gradient-to-r from-violet-600 via-indigo-600 to-emerald-500 text-transparent bg-clip-text">With Code & Design</span>
            </h2>

            <p className="text-zinc-500 text-sm md:text-base font-light leading-relaxed mb-6 max-w-xl">
              Hello! I'm <span className="font-semibold text-zinc-800">Gor Narendrasinh</span>, a developer dedicated to building scalable architectures. I specialize in designing pixel-perfect frontends with <span className="text-indigo-600 font-medium">React.js</span> and strong ecosystems using <span className="text-emerald-600 font-medium">Python</span>.
            </p>
            <p className="text-zinc-500 text-sm md:text-base font-light leading-relaxed mb-8 max-w-xl">
              From utilizing fast micro-frameworks like <span className="text-zinc-800 font-medium">Flask</span> and enterprise-ready <span className="text-zinc-800 font-medium">Django</span>, to structured database modeling—I construct production-grade web systems optimized for real-world impact.
            </p>

            {/* Clean Structured Minimalist Badges */}
            <div className="flex flex-wrap gap-2 justify-center md:justify-start mb-8">
              {[
                { name: "JavaScript", icon: <SiJavascript />, color: "text-amber-500 border-amber-200 bg-amber-50/50" },
                { name: "React.js", icon: <FaReact />, color: "text-sky-500 border-sky-200 bg-sky-50/50" },
                { name: "Python", icon: <FaPython />, color: "text-emerald-600 border-emerald-200 bg-emerald-50/50" },
                { name: "Flask", icon: <SiFlask />, color: "text-zinc-700 border-zinc-200 bg-zinc-50" },
                { name: "Django", icon: <SiDjango />, color: "text-emerald-800 border-emerald-200 bg-emerald-50/30" },
                { name: "Mysql / MongoDB", icon: <FaDatabase />, color: "text-indigo-600 border-indigo-200 bg-indigo-50/50" },
              ].map((tech, i) => (
                <span key={i} className={`flex items-center gap-2 border px-3 py-1.5 rounded-xl text-xs font-semibold shadow-2xs ${tech.color}`}>
                  {tech.icon} {tech.name}
                </span>
              ))}
            </div>

            {/* Premium Button Controls */}
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <button
                onClick={() => setShowModal(true)}
                className="bg-zinc-950 hover:bg-violet-600 text-white font-semibold text-sm px-6 py-3 rounded-xl transition-all shadow-sm active:scale-95"
              >
                👀 View Curriculum Vitae
              </button>
              <a
                href="#hireme"
                className="flex items-center gap-2 border border-zinc-200 bg-white hover:bg-zinc-50 text-zinc-800 font-semibold text-sm px-6 py-3 rounded-xl transition-all shadow-xs active:scale-95"
              >
                <FaBriefcase size={12} className="text-zinc-400" />
                <span>Hire Me</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* LUXURY INTERACTIVE RESUME POPUP MODAL */}
      <AnimatePresence>
        {showModal && (
          <div className="fixed inset-0 bg-zinc-950/40 backdrop-blur-md flex items-center justify-center z-50 p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="bg-white border border-zinc-200 rounded-2xl max-w-3xl w-full p-5 shadow-2xl relative flex flex-col max-h-[92vh]"
            >
              {/* Modal Header */}
              <div className="flex justify-between items-center pb-4 mb-4 border-b border-zinc-100 pr-8">
                <div>
                  <h3 className="text-xl font-bold text-zinc-900">Professional Profile</h3>
                  <p className="text-xs text-zinc-400 font-medium mt-0.5">Verified Document • Resume.pdf</p>
                </div>
                <button
                  onClick={() => setShowModal(false)}
                  className="absolute top-4 right-4 bg-zinc-100 hover:bg-zinc-200 text-zinc-500 w-8 h-8 rounded-full flex items-center justify-center transition-colors"
                >
                  <FaTimes size={13} />
                </button>
              </div>

              {/* PDF Secure Sandboxed Display Frame */}
              <div className="w-full bg-zinc-50 rounded-xl border border-zinc-200/80 overflow-hidden flex-grow h-[55vh]">
                <iframe
                  src="/Gor_Narendrasinh_.pdf"
                  className="w-full h-full object-cover"
                  title="Resume Document View"
                />
              </div>

              {/* Action Downloader Row */}
              <div className="mt-4 flex items-center justify-between bg-zinc-50 p-3 rounded-xl border border-zinc-200/60">
                <span className="text-xs font-mono font-medium text-emerald-600 bg-emerald-50 border border-emerald-100/70 px-2.5 py-1 rounded-md">
                  ✓ Ready for Offline Storage
                </span>
                <a
                  href="/Gor_Narendrasinh_.pdf"
                  download
                  className="flex items-center gap-2 bg-violet-600 hover:bg-violet-700 text-white font-bold text-xs px-4 py-2.5 rounded-lg shadow-sm transition-all active:scale-95"
                >
                  <FaDownload size={11} />
                  <span>Download CV</span>
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default About;
