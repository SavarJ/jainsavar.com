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
      "Implement payment processing system by leveraging Stripe’s API and integrate with the platform",
      "Improve site-wide performanceby 60% by migrating the old codebase",
      "Redesign backend architecture to reduce monthly costs by 80% by shifting to AWS Lambda",
      "Develop AWS services (Cognito, CDK, DynamoDB) by working alongside the Tech Lead",
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
      "Implemented an API to store and retrieve events using Microsoft PostgreSQL Database",
      "Developed a newsletter signup page using Mailchimp’s API to increase traffic by 27%",
      "Engineered build/release pipelines in Microsoft Azure DevOps to automate deployments",
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
      "Helped professor teach 45+ students by evaluating exams, answering questions, and occasionally instructing lectures",
    ],
    skills: [SkillStore.Java, SkillStore.GitGithub],
  },
  {
    company: "University of Connecticut",
    title: "Software Developer Intern",
    startDate: new Date("2021-06-02"),
    endDate: new Date("2021-08-25"),
    description: [
      "Built a full stack web application that translated classroom emails to the selected language and sent them to students as part of a 6-week summer program",
    ],
    skills: [SkillStore.Python, SkillStore.Flask, SkillStore.GitGithub, SkillStore.Datastore, SkillStore.GCP],
  },
];

export { experiencesList };
export type { experienceInterface };
