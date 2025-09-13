import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 p-6 flex flex-col items-center">
      <div className="flex gap-6 text-2xl mb-4">
        <a href="https://github.com/" target="_blank" rel="noreferrer"><FaGithub className="hover:text-purple-400" /></a>
        <a href="https://linkedin.com/" target="_blank" rel="noreferrer"><FaLinkedin className="hover:text-blue-400" /></a>
        <a href="https://twitter.com/" target="_blank" rel="noreferrer"><FaTwitter className="hover:text-sky-400" /></a>
      </div>
      <p>&copy; {new Date().getFullYear()} Bapu Portfolio. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
