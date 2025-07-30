import React from "react";
import SectionCard from "./SectionCard";

const About = () => (
  <section id="About" className="my-12 max-w-6xl mx-auto px-4">
    <SectionCard>
      <h2 className="text-2xl font-bold mb-4">About Me</h2>
      <p className="mb-2 text-sm">
       I am a Software Engineer with a passion for developing innovative solutions that improve user experiences. I have a strong background in full-stack development, with expertise in Java, Spring Boot, React and Node.js.
      </p>
      <p className="text-sm">
        I enjoy working in fast-paced environments where I can help drive system
        architecture, CI/CD pipelines, and cross-functional collaboration.
      </p>
    </SectionCard>
  </section>
);

export default About;
