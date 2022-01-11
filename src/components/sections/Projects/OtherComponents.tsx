import Link from "../../shared/Link";
import ComponentProps from "../../shared/ComponentProps";
import { projectInterface } from "./projectsList";

const ProjectCard: React.FC<ComponentProps> = (props) => {
  return (
    <div className="rounded-lg p-6 shadow-xl max-w-88 md:w-88 h-68 m-4 flex flex-col justify-between hover:shadow-4xl relative project">
      {props.children}
    </div>
  );
};

interface ProjectCardHeadProps {
  title: string;
  description: string;
}

const ProjectCardHead: React.FC<ProjectCardHeadProps> = (props) => {
  return (
    <div>
      <h3 className="font-bold text-2xl text-blue-50">{props.title}</h3>
      <p className="text-gray-200 py-2 text-base">{props.description}</p>;
    </div>
  );
};

interface ProjectCardBodyProps {
  project: projectInterface;
}

const ProjectCardBody: React.FC<ProjectCardBodyProps> = (props) => {
  return (
    <div>
      <ProjectCardBodyLanguages project={props.project} />
      <ProjectCardBodyLinks project={props.project} />
    </div>
  );
};

const ProjectCardBodyLanguages: React.FC<ProjectCardBodyProps> = ({ project }) => {
  return (
    <p className="text-gray-400 italic text-sm">
      {project.languages.map((language, index) => {
        return (
          <span
            key={index}
            className="inline-block bg-gray-800 text-white rounded-full px-3 py-1 mr-2 mb-2 font-inconsolata tracking-wide"
          >
            {language}
          </span>
        );
      })}
    </p>
  );
};

const ProjectCardBodyLinks: React.FC<ProjectCardBodyProps> = ({ project }) => {
  return (
    <div className="flex justify-evenly mt-2">
      <Link link={project.githubLink}>
        <i className="fa fa-github text-xl"></i>
      </Link>
      {project.liveLink && (
        <Link link={project.liveLink}>
          <i className="fas fa-external-link-alt text-xl "></i>
        </Link>
      )}
    </div>
  );
};

export { ProjectCard, ProjectCardHead, ProjectCardBody };
