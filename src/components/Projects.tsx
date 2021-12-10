const Projects: React.FC = () => {
  return (
    <section>
      <h1 className="text-5xl text-blue-200 font-bold mt-4" style={{ color: "#19B5FE" }}>
        {"<Projects />"}
      </h1>
      <div className="max-w-3xl text-gray-400 mt-4 flex flex-wrap justify-between">
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
    <div className="bg-red-800 rounded-lg p-6 shadow-2xl w-88 h-68 m-4">
      <h3 className="font-bold text-2xl text-red-50">{project.title}</h3>
      <p className="text-gray-200 py-2">{project.description}</p>
      <p className="text-gray-400 italic text-sm">
        {project.languages.map((language, index) => {
          return (
            <span
              key={index}
              className="inline-block bg-gray-800 text-white rounded-full px-3 py-1 mr-2 mb-2"
            >
              {language}
            </span>
          );
        })}
      </p>
      <div className="flex justify-evenly mt-2">
        <a href={project.githubLink} className="">
          <i className="fa fa-github text-xl"></i>
        </a>
        {project.liveLink && (
          <a href={project.liveLink}>
            <i className="fas fa-external-link-alt text-xl"></i>
          </a>
        )}
      </div>
    </div>
  );
};

export default Projects;

const projectsList: projectInterface[] = [
  {
    title: "TheCSAutograder",
    description:
      "esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    githubLink: "https://github.com/SavarJ/TheCSAutograder",
    liveLink: "https://thecsautograder.herokuapp.com/",
    languages: ["Node.js", "Express.js", "MongoDB", "CSS", "Bootstrap", "JavaScript"],
  },
  {
    title: "TodoList",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    githubLink: "https://github.com/SavarJ/Autoemailer",
    liveLink: "https://thecsautograder.herokuapp.com/",
    languages: ["HTML", "CSS", "Node.js", "Express.js", "MongoDB"],
  },
  {
    title: "Simon's Game",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    githubLink: "https://github.com/SavarJ/Autoemailer",
    liveLink: "https://thecsautograder.herokuapp.com/",
    languages: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Emailer",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    githubLink: "https://github.com/SavarJ/Autoemailer",
    languages: ["Python"],
  },
];
