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
        <p>{tag}</p>
        <p>{description}</p>
        {/* Todo: Add comma after each element except for the last one */}
        <ul>
          {techStack.map((tech: string) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
        {githubUrl && (
          <a
            href={githubUrl}
            target="_blank"
            className="tooltip tooltip-bottom"
            data-tip="Github repo"
            aria-label="Check Github repository"
          >
            <GithubIcon width={40} height={40} color="pink" />
          </a>
        )}
        {mediumUrl && (
          <a
            href={mediumUrl}
            target="_blank"
            className="tooltip tooltip-bottom"
            data-tip="Related articles"
            aria-label="Check related articles on Medium"
          >
            <MediumIcon width={40} height={40} color="pink" />
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
