import React from "react";
import Card from "./Card";

const Experience = () => (
  <section id="Experience" className="my-12 max-w-6xl mx-auto px-4">
    <h2 className="text-2xl font-bold mb-6">Experience</h2>

    <div className="grid gap-6">
         <Card title="Senior Software Engineer" subtitle="Unifocus" date="March 2025 – Present">
        <ul className="list-disc pl-5 space-y-2 text-sm">
          <li>Leading development of scalable Java backend systems using Spring Boot, Hibernate, and REST APIs.</li>
          <li>Designed and deployed microservices improving report generation and CRUD operations.</li>
          <li>Implemented robust security and integrated with databases using JPA/Hibernate.</li>
          <li>Mentored junior developers and enforced clean coding standards.</li>
        </ul>
      </Card>
      <Card title="Senior Software Engineer" subtitle="Jio Platforms Limited" date="April 2020 – March 2025">
        <ul className="list-disc pl-5 space-y-2 text-sm">
          <li>Leading development of scalable Java backend systems using Spring Boot, Hibernate, and REST APIs.</li>
          <li>Designed and deployed microservices improving report generation and CRUD operations.</li>
          <li>Implemented robust security and integrated with databases using JPA/Hibernate.</li>
          <li>Mentored junior developers and enforced clean coding standards.</li>
        </ul>
      </Card>

      <Card title="Associate System Engineer" subtitle="IBM India Pvt. Ltd." date="June 2018 – April 2020">
        <ul className="list-disc pl-5 space-y-2 text-sm">
          <li>Worked closely with stakeholders to gather and translate requirements into production-ready APIs.</li>
          <li>Contributed to multiple large-scale system implementations, increasing team productivity.</li>
          <li>Utilized Oracle, Spring Boot, and Apache POI for backend integration and automation.</li>
          <li>Resolved legacy system issues, improved test coverage, and maintained technical documentation.</li>
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