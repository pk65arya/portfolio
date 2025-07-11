import React from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

export default function App() {
  return (
   <div id="header" className="min-h-screen bg-white text-black">
  <Navbar />

  {/* Header Section */}
  <header className="text-center mt-20 mb-10 px-4 sm:px-6 md:px-8">
    <h1 className="text-3xl sm:text-4xl font-bold">Pankaj Kumar</h1>
    <p className="text-base sm:text-lg mt-2">
      <p>
        Senior Software Engineer | Backend Developer
      </p>
      Java | Spring Boot | Microservices | DevOps | Cloud
    </p>
    <a
      href="/PankajKumar.pdf"
      className="mt-4 inline-block bg-white hover:bg-cyan-600 text-black font-semibold py-2 px-4 rounded"
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
