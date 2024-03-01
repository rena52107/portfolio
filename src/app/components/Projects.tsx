import React from "react";
import { projects } from "../../../public/projects";
import ProjectComponent from "./Project";

function Projects() {
  return (
    <div className="wrapper bg-primary-light md:py-40 py-32 md:px-0 px-4">
      <section
        id="projects"
        className="flex flex-col md:mx-auto md:max-w-130 gap-6"
      >
        <h2 className="md:text-heading2 text-heading3 md:font-bold font-medium">Projects</h2>
        {projects.map((project: any) => (
          <ProjectComponent
            key={project.id}
            id={project.id}
            title={project.title}
            tag={project.tag}
            description={project.description}
            techStack={project.techStack}
            imageUrl={project.imageUrl}
            githubUrl={project.githubUrl}
            mediumUrl={project.mediumUrl}
            buttonInfo={project.buttonInfo}
          />
        ))}
      </section>
    </div>
  );
}

export default Projects;
