import React, { useState, useEffect } from "react";

function Navbar() {
  const [sticky, setSticky] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Sticky Navbar on scroll
  useEffect(() => {
    const handleScroll = () => setSticky(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Menu links
  const links = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Certificates", href: "#certifications" },
    { name: "Achievements", href: "#achievements" },
    { name: "Contact", href: "#Contact" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all ${
        sticky ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <h1 className="flex items-center text-2xl font-bold text-blue-600">
          <span className="mr-2">💻</span>CodeWithNarendra
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 text-gray-700">
          {links.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="hover:text-blue-500 transition-colors duration-300"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 text-gray-700 text-2xl"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white overflow-hidden transition-max-height duration-300 ease-in-out ${
          menuOpen ? "max-h-[500px]" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col items-center py-4 text-gray-700">
          {links.map((link) => (
            <li key={link.name} className="py-2">
              <a
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="hover:text-blue-500 transition-colors duration-300"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
