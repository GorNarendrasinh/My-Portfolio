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
      className="bg-gradient-to-r from-blue-900 via-black to-purple-900 text-white min-h-screen flex flex-col justify-center items-center text-center p-6"
    >
      {/* Profile Image */}
      <motion.img
        src={profilePic}
        alt="Bapu"
        className="w-32 h-32 md:w-55 md:h-65 rounded-full border-4 border-purple-500 shadow-lg mb-6"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1 }}
      />

      {/* Name + Greeting */}
      <motion.h1
        className="text-4xl md:text-6xl font-bold mb-4"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        👋 Hi, I'm{" "}
        <span className="bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text">
          Gor Narendrasinh
        </span>
      </motion.h1>

      {/* Typewriter Effect */}
      <h2 className="text-xl md:text-2xl mb-6">
        <Typewriter
          words={[
            "React Developer",
            "Python Backend Developer",
            "Full Stack Learner",
            "Problem Solver",
          ]}
          loop={true}
          cursor
          cursorStyle="|"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1500}
        />
      </h2>

      {/* Short Intro */}
      <motion.p
        className="max-w-2xl text-gray-300 mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        I build scalable web apps using{" "}
        <span className="text-blue-400">React</span> &{" "}
        <span className="text-green-400">Python</span>. Passionate about AI,
        backend systems, and solving real-world problems with clean code.
      </motion.p>

      {/* CTA Buttons */}
      <motion.div
        className="flex gap-4 mb-8 flex-wrap justify-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 1 }}
      >
        <a
          href="#projects"
          className="bg-purple-600 hover:bg-purple-800 px-6 py-2 rounded-lg font-semibold"
        >
          🚀 View Projects
        </a>

        {/* Resume Button */}
        <button
          onClick={() => setOpenModal(true)}
          className="bg-blue-600 hover:bg-blue-800 px-6 py-2 rounded-lg font-semibold"
        >
          📄 View Resume
        </button>

        <a
          href="#hireme"
          className="bg-green-600 hover:bg-green-800 px-6 py-2 rounded-lg font-semibold"
        >
          📧 Hire Me
        </a>

        <a
          href="https://github.com/GorNarendrasinh"
          target="_blank"
          rel="noreferrer"
          className="bg-yellow-800 hover:bg-yellow-900 px-6 py-2 rounded-lg font-semibold flex items-center gap-2"
        >
          🐱 GitHub
        </a>
      </motion.div>

      {/* Highlights */}
      <motion.div
        className="flex gap-8 text-gray-300 mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <div>
          <h3 className="text-2xl font-bold text-purple-400">10+</h3>
          <p>Projects</p>
        </div>
        <div>
          <h3 className="text-2xl font-bold text-blue-400">5+</h3>
          <p>Certificates</p>
        </div>
        <div>
          <h3 className="text-2xl font-bold text-green-400">3+</h3>
          <p>Achievements</p>
        </div>
      </motion.div>

      {/* Social Icons */}
      <motion.div
        className="flex gap-6 text-2xl mt-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
      >
        <a href="https://github.com/" target="_blank" rel="noreferrer">
          <FaGithub className="hover:text-purple-400" />
        </a>
        <a
          href="https://www.linkedin.com/in/gor-narendrasinh-a89600270"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin className="hover:text-blue-400" />
        </a>
        <a href="mailto:narendrasinhgor94@gmail.com?subject=Hello Narendra&body=I want to connect with you!">
          <FaEnvelope className="hover:text-green-400" />
        </a>
        <a href="https://twitter.com/" target="_blank" rel="noreferrer">
          <FaTwitter className="hover:text-sky-400" />
        </a>
      </motion.div>

      {/* ===== Resume Modal Viewer ===== */}
      {openModal && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg shadow-lg w-11/12 md:w-3/4 lg:w-1/2 p-4 relative">
            {/* Close Button */}
            <button
              onClick={() => setOpenModal(false)}
              className="absolute top-2 right-2 bg-red-500 text-white px-3 py-1 rounded"
            >
              ✖
            </button>

            {/* PDF Viewer */}
            <iframe
              src="/Resume.pdf"
              title="Resume"
              className="w-full h-[500px] rounded"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;
