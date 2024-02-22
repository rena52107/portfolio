import Image from "next/image";
import MediumIcon from "../../../public/svgs/medium.svg";
import GithubIcon from "../../../public/svgs/github.svg";
import OpenInNew from "../../../public/svgs/open_in_new.svg";

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
    <div className="flex gap-3 flex-col md:flex-row md:items-start items-center">
      <div className="md:w-[420px] md:h-[300px] w-full h-[280px] relative flex justify-center shrink-0 bg-white/25 rounded-2xl">
        <video autoPlay loop muted playsInline className="object-contain">
          <source src={`/images/projects/${imageUrl}`} type="video/webm" />
        </video>
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex gap-2 items-center">
          <h3 className="md:text-2xl text-heading4 font-medium">{title}</h3>
          <span className="inline-flex items-center rounded-md bg-secondary-light px-2 py-1 text-xs font-medium  ring-1 ring-inset ring-secondary-light/10 shrink-0">
            #{tag}
          </span>
        </div>{" "}
        <p className="md:text-body1 font-light">{description}</p>
        <ul className="flex md:text-body1 flex-wrap">
          {techStack.map((tech: string, index: number) => (
            <li key={tech}>
              {tech}
              {index < techStack.length - 1 && ","}&nbsp;
            </li>
          ))}
        </ul>
        <div className="flex gap-2 items-center">
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              className="icon-light-mode tooltip tooltip-bottom"
              data-tip="Github"
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
              <button className="inline-flex items-center gap-2 rounded-full px-4 py-2 border border-[#79747E] text-primary-medium hover:bg-primary-medium/10 focus:border-primary-medium focus:bg-primary-medium/15 duration-300 text-sm">
                <OpenInNew className="size-[18px]" />
                {buttonInfo.title}
              </button>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectComponent;
