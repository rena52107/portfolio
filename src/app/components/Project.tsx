import Image from "next/image";
import MediumIcon from "../../../public/svgs/medium.svg";
import GithubIcon from "../../../public/svgs/github.svg";

type Project = {
  id: number;
  title: string;
  tag: string;
  description: string;
  techStack: string[];
  imageUrl: string;
  githubUrl: string;
  mediumUrl: string;
  buttonInfo: { url: string; title: string };
};

const ProjectComponent: React.FC<Project> = ({
  id,
  title,
  tag,
  description,
  techStack,
  imageUrl,
  githubUrl,
  mediumUrl,
  buttonInfo,
}) => {
  return (
    <div>
      <Image
        src={`/images/projects/${imageUrl}`}
        alt={title}
        width={300}
        height={200}
      />
      <div>
        <h3>{title}</h3>
        <span className="inline-flex items-center rounded-md bg-secondary-light px-2 py-1 text-xs font-medium">
          #{tag}
        </span>
        <p>{description}</p>
        <ul className="flex">
          {techStack.map((tech: string, index: number) => (
            <li key={tech}>
              {tech}
              {index < techStack.length - 1 && ","}&nbsp;
            </li>
          ))}
        </ul>
        {githubUrl && (
          <a
            href={githubUrl}
            target="_blank"
            className="icon-light-mode tooltip tooltip-bottom"
            data-tip="Github repo"
            aria-label="Check Github repository"
          >
            <GithubIcon width={40} height={40} />
          </a>
        )}
        {mediumUrl && (
          <a
            href={mediumUrl}
            target="_blank"
            className="icon-light-mode tooltip tooltip-bottom"
            data-tip="Related articles"
            aria-label="Check related articles on Medium"
          >
            <MediumIcon width={40} height={40} />
          </a>
        )}
        {buttonInfo && (
          <a href={buttonInfo.url} target="_blank">
            {buttonInfo.title}
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectComponent;
