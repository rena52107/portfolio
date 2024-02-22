import React from "react";
import { projects } from "../../../public/projects";
import ProjectComponent from "./Project";

function Works() {
  return (
    <div className="wrapper bg-primary-light md:py-40 py-32 md:px-0 px-8">
      <section
        id="works"
        className="flex flex-col md:mx-auto md:max-w-130 gap-6"
      >
        <h2 className="md:text-heading2 text-heading3 font-bold">Works</h2>
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

export default Works;
