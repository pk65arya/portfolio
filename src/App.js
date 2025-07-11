import React from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

export default function App() {
  return (
   <div id="header" className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-900 to-slate-800 text-white">
  <Navbar />

  {/* Header Section */}
  <header className="text-center mt-20 mb-10 px-4 sm:px-6 md:px-8">
    <h1 className="text-3xl sm:text-4xl font-bold">Pankaj Kumar</h1>
    <p className="text-base sm:text-lg mt-2">
      Senior Software Developer - Java | Spring Boot | DevOps | Cloud
    </p>
    <a
      href="/resume.pdf"
      className="mt-4 inline-block bg-slate-700 hover:bg-slate-600 text-white font-semibold py-2 px-4 rounded"
      download
    >
      Download Resume
    </a>
  </header>

  {/* Main Sections */}
  <main className="px-4 sm:px-6 md:px-8 space-y-10">
    <About />
    <Experience />
     <Skills />
    <Projects />
    <Contact />
  </main>
</div>

  );
}
