import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-gray-300 relative z-10">
      {/* Top Border Glow */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-red-500 via-pink-500 to-purple-500 animate-pulse"></div>

      <div className="max-w-6xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-8 items-start">
        {/* About Section */}
        <div className="space-y-3">
          <h2 className="text-2xl font-extrabold font-serif text-red-400">
            Full-Stack Portfolio
          </h2>
          <p className="text-sm font-normal font-sans text-gray-300 leading-relaxed tracking-wide">
            Specializing in{" "}
            <span className="font-semibold bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-red-500">
              Python Development
            </span>
            ,{" "}
            <span className="font-semibold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-500">
              JavaScript & React.js
            </span>
            , and{" "}
            <span className="font-semibold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-emerald-500">
              Full-Stack Development
            </span>{" "}
            with{" "}
            <span className="font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-500">
              Python, Flask & Django
            </span>
            .  
            <span className="block mt-2 text-gray-400 italic">
              Passionate about scalable & intelligent web solutions 🚀
            </span>
          </p>
        </div>

        {/* Links Section */}
        <div>
          <h2 className="text-lg font-semibold text-white mb-3">Links</h2>
          <ul className="space-y-2 text-sm">
            <li><a href="#home" className="hover:text-red-400">Home</a></li>
            <li><a href="#about" className="hover:text-red-400">About</a></li>
            <li><a href="#projects" className="hover:text-red-400">Projects</a></li>
            <li><a href="#blog" className="hover:text-red-400">Blog</a></li>
          </ul>
        </div>

        {/* Connect Section */}
        <div>
          <h2 className="text-lg font-semibold text-white mb-3">Connect</h2>
          <ul className="space-y-2 text-sm">
            <li><a href="#contact" className="hover:text-red-400">Contact</a></li>
            <li>
              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 hover:text-red-400"
              >
                <FaGithub /> GitHub
              </a>
            </li>
            <li>
              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 hover:text-red-400"
              >
                <FaLinkedin /> LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 hover:text-red-400"
              >
                <FaTwitter /> Twitter
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-700 py-4 text-center text-xs text-gray-500">
        © {new Date().getFullYear()}{" "}
        <span className="text-red-400 font-semibold">GorNarendrasinh</span> | All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
