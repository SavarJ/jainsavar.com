import Link from "../../shared/Link";
import ComponentProps from "../../shared/ComponentProps";
import { projectInterface } from "./projectsList";
import Github from "../../icons/Github";
import ExternalLink from "../../icons/ExternalLink";
import { CardBodySkills } from "../Experience/CardBodySkills";

const ProjectCard: React.FC<ComponentProps> = (props) => {
  return (
    <div className="rounded-lg p-6 shadow-xl max-w-88 md:w-88 h-68 m-4 flex flex-col justify-between hover:shadow-4xl relative project">
      {props.children}
    </div>
  );
};

const ProjectCardHead: React.FC<ProjectCardBodyProps> = ({ project }) => {
  return (
    <div>
      <h3 className="font-bold text-2xl text-blue-50">{project.title}</h3>
      <p className="text-gray-200 py-2 text-base">{project.description}</p>
    </div>
  );
};

interface ProjectCardBodyProps {
  project: projectInterface;
}

const ProjectCardBody: React.FC<ProjectCardBodyProps> = (props) => {
  return (
    <div>
      <CardBodySkills skills={props.project.skills} />
      <ProjectCardBodyLinks project={props.project} />
    </div>
  );
};
const ProjectCardBodyLinks: React.FC<ProjectCardBodyProps> = ({ project }) => {
  return (
    <div className="flex justify-evenly mt-2">
      <Link link={project.githubLink}>
        <Github className="w-5" />
      </Link>
      {project.liveLink && (
        <Link link={project.liveLink}>
          <ExternalLink className="w-5" />
        </Link>
      )}
    </div>
  );
};

export { ProjectCard, ProjectCardHead, ProjectCardBody };
