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
     className={`fixed top-0 left-1/2 -translate-x-1/2 w-fit z-100 transition-all duration-200 rounded-full px-8 py-0.7 ${
  isScrolled ? "bg-slate-600 shadow-lg" : "bg-white"
}`}    >
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center rounded-2x1">
        {/* <div className="text-xl font-bold text-black cursor-pointer" onClick={() => scrollToSection("header")}>
          Pankaj Kumar
        </div> */}
        {/* <div className={`hidden md:flex space-x-6  ${isScrolled?"text-white":"text-black"}`}>
          {["About", "Experience", "Skills", "Projects", "Contact"].map((section) => (
    
    <button
              key={section}
              onClick={() => scrollToSection(section)}
            className="capitalize transition-all transition-transform duration-200 hover:bg-blue-300 hover:text-white hover:rounded-full hover:px-4 hover:py-1 hover:scale-105"
            >
              {section}
            </button>
          ))}
        </div> */}
        <div className="hidden md:flex space-x-6">
  {["About", "Experience", "Skills", "Projects", "Contact"].map((section) => (
    <button
      key={section}
      onClick={() => scrollToSection(section)}
      className={`capitalize transition-all transition-transform duration-200
        ${isScrolled ? "text-white" : "text-black"}
        hover:bg-blue-300 hover:text-white hover:rounded-full hover:px-4 hover:py-1 hover:scale-105`}
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
          {["About", "Experience", "Skills", "Projects", "Contact"].map((section) => (
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
