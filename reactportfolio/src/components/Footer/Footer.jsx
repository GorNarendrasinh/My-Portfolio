
import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-950 via-gray-900 to-black text-gray-400 relative z-10 border-t border-gray-800/60">
      
      {/* Top Border Cyber Glow Line */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-red-500 via-pink-500 to-purple-500 shadow-[0_0_15px_rgba(239,68,68,0.5)] animate-pulse"></div>

      <div className="max-w-6xl mx-auto px-6 pt-16 pb-10 grid sm:grid-cols-2 md:grid-cols-4 gap-10 items-start">
        
        {/* Column 1: About Section */}
        <div className="space-y-4 col-span-1 sm:col-span-2 md:col-span-1">
          <h2 className="text-2xl font-extrabold font-serif bg-clip-text text-transparent bg-gradient-to-r from-red-400 via-pink-500 to-purple-500 tracking-wide">
            Full-Stack Portfolio
          </h2>
          <p className="text-sm font-normal text-gray-400 leading-relaxed">
            Specializing in{" "}
            <span className="font-semibold text-pink-400">Python Development</span>,{" "}
            <span className="font-semibold text-orange-400">JavaScript & React.js</span>, and{" "}
            <span className="font-semibold text-emerald-400">Full-Stack Architecture</span> with{" "}
            <span className="font-semibold text-blue-400">Flask & Django</span>.
          </p>
          <p className="text-xs italic text-gray-500 pt-1">
            Passionate about building scalable & intelligent web solutions 🚀
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h3 className="text-sm font-bold uppercase tracking-widest text-white mb-4 border-b border-gray-800 pb-2 w-12">
            Links
          </h3>
          <ul className="space-y-2.5 text-sm">
            {["home", "about", "projects", "blog"].map((item) => (
              <li key={item}>
                <a 
                  href={`#${item}`} 
                  className="hover:text-red-400 transition-all duration-300 transform hover:translate-x-1 inline-block capitalize"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Contact Info */}
        <div>
          <h3 className="text-sm font-bold uppercase tracking-widest text-white mb-4 border-b border-gray-800 pb-2 w-16">
            Contact
          </h3>
          <ul className="space-y-3 text-sm">
            <li>
              <a href="#contact" className="hover:text-red-400 transition-all duration-300 transform hover:translate-x-1 inline-block">
                Get In Touch
              </a>
            </li>
            <li className="flex items-center gap-2.5 text-gray-400">
              <FaEnvelope className="text-pink-500 text-xs" />
              <span className="text-xs truncate">narendrasinhgor94@gmail.com</span>
            </li>
            <li className="flex items-center gap-2.5 text-gray-400">
              <FaMapMarkerAlt className="text-purple-500 text-xs" />
              <span className="text-xs">India</span>
            </li>
          </ul>
        </div>

        {/* Column 4: Connect & Socials */}
        <div>
          <h3 className="text-sm font-bold uppercase tracking-widest text-white mb-4 border-b border-gray-800 pb-2 w-16">
            Connect
          </h3>
          <p className="text-xs text-gray-500 mb-4">Let's connect across social platforms.</p>
          
          {/* Cyber Styled Social Icons Grid */}
          <div className="flex items-center gap-3">
            {[
              { icon: <FaGithub />, url: "https://github.com/", color: "hover:bg-gray-800 hover:text-white" },
              { icon: <FaLinkedin />, url: "https://linkedin.com/", color: "hover:bg-blue-600 hover:text-white" },
              { icon: <FaTwitter />, url: "https://twitter.com/", color: "hover:bg-sky-500 hover:text-white" }
            ].map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noreferrer"
                className={`p-2.5 rounded-xl bg-gray-900 border border-gray-800 text-gray-400 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_4px_12px_rgba(239,68,68,0.2)] ${social.color}`}
              >
                <span className="text-lg">{social.icon}</span>
              </a>
            ))}
          </div>
        </div>

      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-900/60 mt-6 bg-black/40 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-500">
          <div>
            © {new Date().getFullYear()}{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-pink-500 font-bold tracking-wide">
              GorNarendrasinh
            </span>{" "}
            | All Rights Reserved
          </div>
          <div className="text-gray-600">
            Built with React & Tailwind CSS
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
