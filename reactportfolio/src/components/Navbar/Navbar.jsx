import React, { useState, useEffect } from "react";

function Navbar() {
  const [darkMode, setDarkMode] = useState(false);
  const [sticky, setSticky] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Sticky Navbar
  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Dark Mode toggle
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <nav
      className={`fixed w-full z-50 transition-all ${
        sticky ? "bg-white shadow-md dark:bg-gray-900" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <h1 className="flex items-center text-2xl font-bold text-blue-600 dark:text-blue-400">
          <span className="mr-2">💻</span>CodeWithNarendra
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 text-gray-700 dark:text-gray-300">
          <li><a href="#hero" className="hover:text-blue-500">Home</a></li>
          <li><a href="#about" className="hover:text-blue-500">About</a></li>
          <li><a href="#skills" className="hover:text-blue-500">Skills</a></li>
          <li><a href="#projects" className="hover:text-blue-500">Projects</a></li>
          <li><a href="#certifications" className="hover:text-blue-500">Certificates</a></li>
          <li><a href="#achievements" className="hover:text-blue-500">Achievements</a></li>
          <li><a href="#contact" className="hover:text-blue-500">Contact</a></li>
        </ul>

        {/* Buttons */}
        <div className="flex items-center gap-3">
          {/* Dark Mode Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 bg-gray-200 dark:bg-gray-700 rounded-full transition-colors"
          >
            {darkMode ? "☀️" : "🌙"}
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 text-gray-700 dark:text-gray-300"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="md:hidden flex flex-col items-center bg-white dark:bg-gray-900 py-4 text-gray-700 dark:text-gray-300">
          <li className="py-2"><a href="#hero">Home</a></li>
          <li className="py-2"><a href="#about">About</a></li>
          <li className="py-2"><a href="#skills">Skills</a></li>
          <li className="py-2"><a href="#projects">Projects</a></li>
          <li className="py-2"><a href="#certificates">Certificates</a></li>
          <li className="py-2"><a href="#achievements">Achievements</a></li>
          <li className="py-2"><a href="#contact">Contact</a></li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
