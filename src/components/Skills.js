import React from "react";
import SectionCard from "./SectionCard";

const Skills = () => (
  <section id="Skills" className="my-12 max-w-6xl mx-auto px-4">
    <SectionCard>
      <h2 className="text-2xl font-bold mb-4">Skills</h2>
      <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 text-sm">
        <li>Java</li>
        <li>Spring Boot</li>
        <li>Hibernate</li>
        <li>REST APIs</li>
        <li>Docker</li>
        <li>Jenkins</li>
        <li>PostgreSQL</li>
        <li>Git/GitHub</li>
        <li>Microservices</li>
        <li>CI/CD</li>
        <li>AWS (Basics)</li>
      </ul>
    </SectionCard>
  </section>
);

export default Skills;
