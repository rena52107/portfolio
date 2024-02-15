import React from "react";
import { projects } from "../../../public/projects";
import ProjectComponent from "./Project";

function Works() {
  return (
    <div>
      <h2>Works</h2>
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
    </div>
  );
}

export default Works;
