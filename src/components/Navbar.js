import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false); // Close menu on mobile
    }
  };

  return (
    <nav
     className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
  isScrolled ? "bg-slate-900 shadow-lg" : "bg-slate-900"
}`}    >
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-xl font-bold text-white cursor-pointer" onClick={() => scrollToSection("header")}>
          Pankaj Kumar
        </div>
        <div className="hidden md:flex space-x-6 text-white">
          {["about", "skills", "projects", "experience", "contact"].map((section) => (
            <button
              key={section}
              onClick={() => scrollToSection(section)}
              className="hover:text-blue-300 capitalize"
            >
              {section}
            </button>
          ))}
        </div>
        {/* Hamburger menu */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white text-2xl">
            ☰
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-slate-900 px-4 pb-4 text-white space-y-2">
          {["about", "skills", "projects", "experience", "contact"].map((section) => (
            <button
              key={section}
              onClick={() => scrollToSection(section)}
              className="block w-full text-left py-1"
            >
              {section}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
