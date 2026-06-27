import React, { useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import { FaGithub, FaLinkedin, FaEnvelope, FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion";
import profilePic from "../../assets/profile1.jpg";

const Hero = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <section
      id="hero"
      className="bg-gradient-to-r from-blue-900 via-black to-purple-900 text-white min-h-screen flex flex-col justify-center items-center text-center p-6 relative overflow-hidden"
    >
      {/* AI / Availability Badge */}
      <motion.div
        className="mb-5 z-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <span className="px-4 py-2 rounded-full bg-green-500/10 border border-green-500/30 text-green-400 text-xs md:text-sm font-semibold tracking-wide backdrop-blur-md shadow-[0_0_15px_rgba(34,197,94,0.2)] inline-flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          Available for Internship & Freelance
        </span>
      </motion.div>
{/* Profile Image with Cyber Glow */}
<div className="relative mb-7 group">
  {/* Glow Effect */}
  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 blur-xl opacity-40 group-hover:opacity-70 transition-opacity duration-500 animate-pulse" />
  
  <motion.img
    src={profilePic}
    alt="Bapu"
    
    className="relative w-32 h-32 md:w-44 md:h-55 rounded-full border-7 border-purple-800/50 shadow-2xl object-contain bg-zinc-100 z-10 backdrop-blur-sm"
    initial={{ scale: 0, rotate: -45 }}
    animate={{ scale: 1, rotate: 0 }}
    transition={{ type: "spring", stiffness: 100, damping: 15, duration: 1 }}
  />
</div>

      {/* Name + Greeting */}
      <motion.h1
        className="text-4xl md:text-6xl font-bold mb-4 tracking-tight z-10"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        👋 Hi, I'm{" "}
        <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 text-transparent bg-clip-text drop-shadow-[0_2px_10px_rgba(168,85,247,0.2)]">
          Gor Narendrasinh
        </span>
      </motion.h1>

      {/* Typewriter Effect */}
      <h2 className="text-xl md:text-2xl mb-6 min-h-[35px] font-mono text-purple-300 z-10 tracking-wide">
        <Typewriter
          words={[
            "software development",
            "React Developer",
            "Python Backend Developer",
            "Full Stack Learner",
            
          ]}
          loop={true}
          cursor
          cursorStyle="_"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1500}
        />
      </h2>

      {/* Short Intro */}
      <motion.p
        className="max-w-2xl text-gray-300 mb-8 text-sm md:text-base leading-relaxed z-10 px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        I build scalable web apps using{" "}
        <span className="text-blue-400 font-medium drop-shadow-[0_0_8px_rgba(96,165,250,0.3)]">React</span> &{" "}
        <span className="text-green-400 font-medium drop-shadow-[0_0_8px_rgba(74,222,128,0.3)]">Python</span>. 
        Passionate about AI, backend systems, and solving real-world problems with clean code.
      </motion.p>

      {/* CTA Buttons */}
      <motion.div
        className="grid grid-cols-2 sm:flex gap-3 md:gap-4 mb-10 w-full max-w-sm sm:max-w-none justify-center z-10 px-4"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.8 }}
      >
        <motion.a
          whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(147,51,234,0.5)" }}
          whileTap={{ scale: 0.95 }}
          href="#projects"
          className="bg-purple-600 hover:bg-purple-700 px-5 md:px-6 py-2.5 rounded-xl font-semibold text-sm md:text-base text-center transition-colors shadow-lg shadow-purple-900/40"
        >
          🚀 Projects
        </motion.a>

        <motion.button
          whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(37,99,235,0.5)" }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setOpenModal(true)}
          className="bg-blue-600 hover:bg-blue-700 px-5 md:px-6 py-2.5 rounded-xl font-semibold text-sm md:text-base text-center transition-colors shadow-lg shadow-blue-900/40"
        >
          📄 Resume
        </motion.button>

        <motion.a
          whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(22,163,74,0.5)" }}
          whileTap={{ scale: 0.95 }}
          href="#hireme"
          className="bg-green-600 hover:bg-green-700 px-5 md:px-6 py-2.5 rounded-xl font-semibold text-sm md:text-base text-center transition-colors col-span-2 sm:col-span-1 shadow-lg shadow-green-900/40"
        >
          📧 Hire Me
        </motion.a>

        <motion.a
          whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(146,64,14,0.5)" }}
          whileTap={{ scale: 0.95 }}
          href="https://github.com/GorNarendrasinh"
          target="_blank"
          rel="noreferrer"
          className="bg-yellow-800 hover:bg-yellow-900 px-5 md:px-6 py-2.5 rounded-xl font-semibold text-sm md:text-base flex items-center justify-center gap-2 col-span-2 sm:col-span-1 transition-colors shadow-lg shadow-amber-900/40"
        >
          🐱 GitHub
        </motion.a>
      </motion.div>

      {/* Highlights - Modern Tech Counters */}
      <motion.div
        className="flex gap-8 md:gap-12 text-gray-300 mb-8 text-center z-10 bg-white/5 px-6 py-4 rounded-2xl border border-white/10 backdrop-blur-md shadow-xl"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.9, duration: 0.8 }}
      >
        <div>
          <h3 className="text-2xl md:text-3xl font-extrabold text-purple-400 drop-shadow-[0_0_10px_rgba(168,85,247,0.4)]">10+</h3>
          <p className="text-xs font-medium uppercase tracking-wider text-gray-400 mt-1">Projects</p>
        </div>
        <div className="w-[1px] bg-white/10 my-1" />
        <div>
          <h3 className="text-2xl md:text-3xl font-extrabold text-blue-400 drop-shadow-[0_0_10px_rgba(59,130,246,0.4)]">5+</h3>
          <p className="text-xs font-medium uppercase tracking-wider text-gray-400 mt-1">Certificates</p>
        </div>
        <div className="w-[1px] bg-white/10 my-1" />
        <div>
          <h3 className="text-2xl md:text-3xl font-extrabold text-green-400 drop-shadow-[0_0_10px_rgba(34,197,94,0.4)]">3+</h3>
          <p className="text-xs font-medium uppercase tracking-wider text-gray-400 mt-1">Achievements</p>
        </div>
      </motion.div>

      {/* Social Icons */}
      <motion.div
        className="flex gap-7 text-2xl mt-2 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 1 }}
      >
        <motion.a whileHover={{ scale: 1.2, y: -3 }} whileTap={{ scale: 0.9 }} href="https://github.com/" target="_blank" rel="noreferrer">
          <FaGithub className="hover:text-purple-400 transition-colors drop-shadow-[0_0_8px_rgba(168,85,247,0.5)]" />
        </motion.a>
        <motion.a whileHover={{ scale: 1.2, y: -3 }} whileTap={{ scale: 0.9 }} href="https://www.linkedin.com/in/gor-narendrasinh-a89600270" target="_blank" rel="noreferrer">
          <FaLinkedin className="hover:text-blue-400 transition-colors drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]" />
        </motion.a>
        <motion.a whileHover={{ scale: 1.2, y: -3 }} whileTap={{ scale: 0.9 }} href="mailto:narendrasinhgor94@gmail.com?subject=Hello Narendra&body=I want to connect with you!">
          <FaEnvelope className="hover:text-green-400 transition-colors drop-shadow-[0_0_8px_rgba(34,197,94,0.5)]" />
        </motion.a>
        <motion.a whileHover={{ scale: 1.2, y: -3 }} whileTap={{ scale: 0.9 }} href="https://twitter.com/" target="_blank" rel="noreferrer">
          <FaTwitter className="hover:text-sky-400 transition-colors drop-shadow-[0_0_8px_rgba(56,189,248,0.5)]" />
        </motion.a>
      </motion.div>

      {/* ===== Resume Modal Viewer ===== */}
      {openModal && (
        <div className="fixed inset-0 bg-black/80 flex justify-center items-center z-50 p-4 backdrop-blur-sm">
          <div className="bg-zinc-900 border border-white/10 rounded-2xl shadow-2xl w-full md:w-3/4 lg:w-1/2 p-4 relative animate-in fade-in zoom-in-95 duration-200">
            {/* Close Button */}
            <button
              onClick={() => setOpenModal(false)}
              className="absolute -top-3 -right-3 bg-red-500 hover:bg-red-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold shadow-lg transition-colors z-50"
            >
              ✕
            </button>

            {/* PDF Viewer */}
            <iframe
              src="/Gor_Narendrasinh_.pdf"
              title="Resume"
              className="w-full h-[60vh] md:h-[500px] rounded-xl border border-white/5 shadow-inner"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;
