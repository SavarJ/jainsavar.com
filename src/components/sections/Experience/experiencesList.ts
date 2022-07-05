import { SkillStore, SkillStoreItem } from "../Skills/SkillStore";
interface experienceInterface {
  company: string;
  title: string;
  startDate: Date;
  endDate: Date;
  location?: string;
  description: string[];
  skills: SkillStoreItem[];
}

const experiencesList: experienceInterface[] = [
  {
    company: "The Headstarter",
    title: "Software Engineer Intern",
    startDate: new Date("2022-06-02"),
    endDate: new Date("2022-08-25"),
    description: [
      "A full stack web application that auto grades programming labs that are assigned to students and displays extensive submission details to the teachers.",
    ],
    skills: [
      SkillStore.Typescript,
      SkillStore.Javascript,
      SkillStore.Python,
      SkillStore.Next,
      SkillStore.Redux,
      SkillStore.React,
      SkillStore.Node,
      SkillStore.GitGithub,
      SkillStore.AWS,
    ],
  },
  {
    company: "Student Career Studio",
    title: "Software Engineer Intern",
    startDate: new Date("2022-05-02"),
    endDate: new Date("2022-06-25"),
    description: [
      "A fully responsive todolist web application with CRUD (Create, read, update, delete) functionalities. You can also create multiple todolists and add tasks to them.",
    ],
    skills: [
      SkillStore.Typescript,
      SkillStore.React,
      SkillStore.Node,
      SkillStore.Express,
      SkillStore.Postgres,
      SkillStore.GitGithub,
      SkillStore.Azure,
    ],
  },
  {
    company: "Computer Science Academy of Westhill",
    title: "Teaching Assistant - Data Structures",
    startDate: new Date("2021-08-02"),
    endDate: new Date("2022-05-25"),
    description: [
      "Implemented my version of the popular Simons game in which users can play using keyboard arrows or by clicking the sqaures.",
    ],
    skills: [SkillStore.Java, SkillStore.GitGithub],
  },
  {
    company: "University of Connecticut",
    title: "Software Developer Intern",
    startDate: new Date("2021-06-02"),
    endDate: new Date("2021-08-25"),
    description: [
      "Programmed a script that will read recipients’ email addresses from a csv file and send emails to them.",
    ],
    skills: [SkillStore.Python, SkillStore.Flask, SkillStore.GitGithub, SkillStore.Datastore, SkillStore.GCP],
  },
];

export { experiencesList };
export type { experienceInterface };
