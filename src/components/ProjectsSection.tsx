import "./custom.css";
import Link from "./Link";
import { NormalSection, SectionBody, SectionTitle } from "./Components";
const ProjectsSection: React.FC = () => {
  return (
    <NormalSection>
      <SectionTitle class="-mb-4">{"<Projects />"}</SectionTitle>
      <SectionBody class="flex flex-wrap justify-between -ml-2">
        <Projects />
      </SectionBody>
    </NormalSection>
  );
};

const Projects: React.FC = () => {
  return (
    <>
      {projectsList.map((project, index) => (
        <Project key={index} project={project} />
      ))}
    </>
  );
};

const Project: React.FC<ProjectProps> = ({ project }) => {
  return (
    <ProjectCard>
      <ProjectCardHead>
        <ProjectCardHeadTitle>{project.title}</ProjectCardHeadTitle>
        <ProjectCardHeadDescription>{project.description}</ProjectCardHeadDescription>
      </ProjectCardHead>
      <ProjectCardBody>
        <ProjectCardBodyLanguages project={project} />
        <ProjectCardBodyLinks project={project} />
      </ProjectCardBody>
    </ProjectCard>
  );
};
interface projectInterface {
  title: string;
  description: string;
  githubLink: string;
  liveLink?: string;
  languages: string[];
}
interface ProjectProps {
  project: projectInterface;
}

interface ComponentProps {
  children: React.ReactNode;
  class?: string;
}

const ProjectCard: React.FC<ComponentProps> = (props) => {
  return (
    <div className="rounded-lg p-6 shadow-xl w-88 h-68 m-4 flex flex-col justify-between hover:shadow-4xl relative project">
      {props.children}
    </div>
  );
};

const ProjectCardHead: React.FC<ComponentProps> = (props) => {
  return <div>{props.children}</div>;
};
const ProjectCardHeadTitle: React.FC<ComponentProps> = (props) => {
  return <h3 className="font-bold text-2xl text-blue-50">{props.children}</h3>;
};
const ProjectCardHeadDescription: React.FC<ComponentProps> = (props) => {
  return <p className="text-gray-200 py-2 text-base">{props.children}</p>;
};

const ProjectCardBody: React.FC<ComponentProps> = (props) => {
  return <div>{props.children}</div>;
};

interface ProjectCardBodyProps {
  project: projectInterface;
}
const ProjectCardBodyLanguages: React.FC<ProjectCardBodyProps> = ({ project }) => {
  return (
    <p className="text-gray-400 italic text-sm">
      {project.languages.map((language, index) => {
        return (
          <span key={index} className="inline-block bg-gray-800 text-white rounded-full px-3 py-1 mr-2 mb-2">
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

export default ProjectsSection;

const projectsList: projectInterface[] = [
  {
    title: "TheCSAutograder",
    description:
      "A full stack web application that auto grades programming labs that are assigned to students and displays extensive submission details to the teachers.",
    githubLink: "https://github.com/SavarJ/TheCSAutograder",
    liveLink: "https://thecsautograder.herokuapp.com/",
    languages: ["Node.js", "Express.js", "MongoDB", "CSS", "Bootstrap", "JavaScript"],
  },
  {
    title: "TodoList",
    description:
      "A fully responsive todolist web application with CRUD (Create, read, update, delete) functionalities. You can also create multiple todolists and add tasks to them.",
    githubLink: "https://github.com/SavarJ/todolist",
    liveLink: "https://savarj-todolist.herokuapp.com/",
    languages: ["HTML", "CSS", "Node.js", "Express.js", "MongoDB"],
  },
  {
    title: "Simon's Game",
    description:
      "Implemented my version of the popular Simons game in which users can play using keyboard arrows or by clicking the sqaures.",
    githubLink: "https://github.com/SavarJ/simons-game",
    liveLink: "https://savarj.github.io/simons-game/",
    languages: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Emailer",
    description:
      "Programmed a script that will read recipients’ email addresses from a csv file and send emails to them.",
    githubLink: "https://github.com/SavarJ/autoemailer",
    languages: ["Python"],
  },
];
