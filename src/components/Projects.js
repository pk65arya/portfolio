import React from "react";
import Card from "./Card";
import { ExternalLink } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Asset Management System",
      description:
        "Designed and built RESTful APIs and microservices using Spring Boot to manage asset categories, placement, and audit reports.",
      type: "Professional",
      github: null,
      demo: null,
    },
    {
      title: "Checklist Recommendation Engine",
      description:
        "Developed a Spring Boot app with in-memory logic to recommend asset categories and locations based on master data.",
      type: "Professional",
      github: null,
      demo: null,
    },
    {
      title: "CI/CD Pipeline Automation",
      description:
        "Implemented Jenkins pipelines and Docker containers to streamline deployments. Integrated with Git and Rundeck.",
      type: "Professional",
      github: null,
      demo: null,
    },
    {
      title: "Personal Portfolio Website",
      description:
        "Built a fully responsive React + Tailwind portfolio showcasing skills, projects, experience, and contact form integration.",
      type: "Personal",
      github: "https://github.com/pankum-ibm/portfolio",
      demo: "https://impku-ibm.github.io/pankaj-portfolio/",
    },
  ];

  return (
    <section id="Projects" className="my-12 max-w-6xl mx-auto px-4">
      <h2 className="text-2xl font-bold mb-6">Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <Card key={index} title={project.title}>
            <p className="mb-2 text-sm">{project.description}</p>
            <div className="flex justify-between items-center text-sm text-slate-400">
              <span
                className={`px-2 py-1 rounded-full text-xs font-semibold ${
                  project.type === "Professional"
                    ? "bg-slate-800 text-white"
                    : "bg-sky-800 text-sky-300"
                }`}
              >
                {project.type}
              </span>
              <div className="flex gap-3">
                {project.github && (
                  <a
                    href={project.github}
                    className="text-blue-400 hover:underline inline-flex items-center gap-1"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink size={14} />
                    GitHub
                  </a>
                )}
                {project.demo && (
                  <a
                    href={ project.demo}
                    className="text-green-400 hover:underline inline-flex items-center gap-1"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink size={14} />
                    Demo
                  </a>
                )}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Projects;
