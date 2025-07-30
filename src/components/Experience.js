import React from "react";
import Card from "./Card";

const Experience = () => (
  <section id="Experience" className="my-12 max-w-6xl mx-auto px-4">
    <h2 className="text-2xl font-bold mb-6">Experience</h2>

    <div className="grid gap-6">
         <Card title="MERN Stack Developer Trainee" subtitle="Masai School" date="February 2025 – Present">
        <ul className="list-disc pl-5 space-y-2 text-sm">
          <li>Developing full-stack applications using the MERN stack (MongoDB, Express.js, React, Node.js).</li>
          <li>Collaborating with cross-functional teams to define and implement new features.</li>
          <li>Participating in code reviews and contributing to team knowledge sharing.</li>
          <li>Documenting development processes and creating user guides for new features.</li>
        </ul>
      </Card>
      <Card title="Junior Software Engineer" subtitle="VCS Lucknow" date="January 2024 – November 2024">
        <ul className="list-disc pl-5 space-y-2 text-sm">
          <li>Leading development of scalable Java backend systems using Spring Boot, Hibernate, and REST APIs.</li>
          <li>Designed and deployed report generation and CRUD operations.</li>
          <li>Implemented robust security and integrated with databases using JPA/Hibernate.</li>
          <li>Mentored junior interns and enforced clean coding standards.</li>
        </ul>
      </Card>

      <Card title="Intern at BridgLabz" subtitle="BridgeLabz Pvt. Ltd." date="June 2023 – November 2023">
        <ul className="list-disc pl-5 space-y-2 text-sm">
          <li>Assisted in the development of a web application using Java and JavaScript.</li>
          <li>Collaborated with cross-functional teams to define and implement new features.</li>
          <li>Participated in code reviews and contributed to team knowledge sharing.</li>
          <li>Documented development processes and created user guides for new features.</li>
        </ul>
      </Card>
    </div>
  </section>
);

export default Experience;

// import React from "react";

// const Experience = () => (
//   <section className="my-12">
//     <h2 className="text-2xl font-bold mb-6">Experience</h2>
//     <div className="bg-slate-800 p-6 rounded-2xl shadow-lg">
//       <h3 className="text-xl font-semibold">Test Job</h3>
//       <p className="text-sm text-slate-400">Company</p>
//       <p className="text-xs text-slate-500 mb-4">Jan 2020 – Present</p>
//       <p>This is a test experience card</p>
//     </div>
//   </section>
// );

// export default Experience;