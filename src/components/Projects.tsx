const Projects: React.FC = () => {
  return (
    <section>
      <h1 className="text-5xl text-blue-200 font-bold mt-4" style={{ color: "#19B5FE" }}>
        {"<Projects />"}
      </h1>
      <div className="max-w-3xl text-gray-400 mt-4 flex flex-wrap justify-between -ml-2">
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
    <div className="rounded-lg p-6 shadow-xl w-88 h-68 m-4 flex flex-col justify-between hover:shadow-4xl ">
      <div>
        <h3 className="font-bold text-2xl text-blue-50">{project.title}</h3>
        <p className="text-gray-200 py-2 text-base">{project.description}</p>
      </div>
      <div>
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
          <a href={project.githubLink}>
            <i className="fa fa-github text-xl"></i>
          </a>
          {project.liveLink && (
            <a href={project.liveLink}>
              <i className="fas fa-external-link-alt text-xl"></i>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Projects;

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
