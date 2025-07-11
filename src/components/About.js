import React from "react";
import SectionCard from "./SectionCard";

const About = () => (
  <section id="about" className="my-12 max-w-6xl mx-auto px-4">
    <SectionCard>
      <h2 className="text-2xl font-bold mb-4">About Me</h2>
      <p className="mb-2">
        I'm a Software Developer with over 7 years of experience, currently
        working with Java, Spring Boot, and DevOps tools. I graduated from NIT
        Agartala and am passionate about clean code, automation, and building
        scalable backend systems.
      </p>
      <p>
        I enjoy working in fast-paced environments where I can help drive system
        architecture, CI/CD pipelines, and cross-functional collaboration.
      </p>
    </SectionCard>
  </section>
);

export default About;
