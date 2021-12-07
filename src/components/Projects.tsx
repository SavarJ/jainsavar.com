const Projects: React.FC = () => {
  return (
    <section>
      <h1 className="text-5xl text-blue-200 font-bold mt-4" style={{ color: "#19B5FE" }}>
        {"<Projects />"}
      </h1>
      <div className="max-w-3xl text-gray-400 mt-4 flex flex-wrap">
        {/* <Project /> */}
        {projectsList.map((project, index) => (
          <Project key={index} project={project} />
        ))}
      </div>
    </section>
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

const Project: React.FC<ProjectProps> = ({ project }) => {
  return (
    <div className="bg-red-800 rounded-lg p-6 shadow-2xl w-80">
      <h3 className="font-bold text-2xl text-red-50">{project.title}</h3>
      <p className="text-gray-200 py-2">{project.description}</p>
      <p className="text-gray-400 italic text-sm">
        {project.languages.map((language, index) => {
          return language + " ";
        })}
      </p>
      <a href={project.githubLink}>
        <i className="fa fa-github"></i>
      </a>
      {project.liveLink && (
        <a href={project.liveLink}>
          <i className="fas fa-external-link-alt"></i>
        </a>
      )}
    </div>
  );
};

export default Projects;

const projectsList: projectInterface[] = [
  {
    title: "TheCSAutograder",
    description:
      "esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    githubLink: "github.com",
    liveLink: "https://thecsautograder.herokuapp.com/",
    languages: ["Node.js", "Express.js", "MongoDB", "EJS", "CSS", "Bootstrap", "JavaScript"],
  },
];
