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
      SkillStore.Heroku,
      // SkillStore.EJS,
      SkillStore.Mongo,
      SkillStore.Tailwind,
      // SkillStore.Javascript,
    ],
  },
  {
    title: "Keeper",
    description: "A simple note taking web application to organize your thoughts with CRUD functionalities.",
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
  {
    title: "Crypto Trading Bot",
    description: "A bot that trades Bitcoin/Ethereum automatically using the RSI strategy and Coinbase API.",
    githubLink: "https://github.com/SavarJ/trading-bot",
    skills: [SkillStore.Python],
  },
];

export { projectsList };
export type { projectInterface };
