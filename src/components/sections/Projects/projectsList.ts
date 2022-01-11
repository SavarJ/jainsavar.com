interface projectInterface {
  title: string;
  description: string;
  githubLink: string;
  liveLink?: string;
  languages: string[];
}

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

export { projectsList, projectInterface };
