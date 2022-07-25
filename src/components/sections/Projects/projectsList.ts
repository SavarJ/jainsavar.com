import { SkillStore, SkillStoreItem } from "../Skills/SkillStore";

interface projectInterface {
  title: string;
  description: string;
  githubLink?: string;
  liveLink?: string;
  skills: SkillStoreItem[];
}

const projectsList: projectInterface[] = [
  {
    title: "TheCSAutograder",
    description:
      "A platform to automate grading in high school Computer Science classes with over 300+ total active users.",
    liveLink: "https://www.thecsautograder.com/",
    skills: [
      SkillStore.Node,
      SkillStore.Express,
      SkillStore.Mongo,
      SkillStore.EJS,
      SkillStore.Tailwind,
      SkillStore.Javascript,
      SkillStore.Heroku,
    ],
  },
  {
    title: "Crypto Trading Bot",
    description: "A bot that trades Bitcoin/Ethereum automatically using the RSI strategy and Coinbase API.",
    githubLink: "https://github.com/SavarJ/trading-bot",
    skills: [SkillStore.Python],
  },
  {
    title: "Keeper",
    description: "A fully responsive note taking web application with CRUD functionalities.",
    githubLink: "https://github.com/SavarJ/keeper",
    liveLink: "https://savarj.github.io/keeper/",
    skills: [SkillStore.Mongo, SkillStore.Express, SkillStore.React, SkillStore.Node],
  },
  {
    title: "Simon's Game",
    description:
      "Implemented my version of the popular Simons game in which users can play using keyboard arrows or by clicking the sqaures.",
    githubLink: "https://github.com/SavarJ/simons-game",
    liveLink: "https://savarj.github.io/simons-game/",
    skills: [SkillStore.HTMLCSS, SkillStore.Javascript],
  },
];

export { projectsList };
export type { projectInterface };
