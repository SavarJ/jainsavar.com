interface experienceInterface {
  company: string;
  title: string;
  description: string;
  languages: string[];
}

const experiencesList: experienceInterface[] = [
  {
    company: "The Headstarter",
    title: "Software Engineer Intern",
    description:
      "A full stack web application that auto grades programming labs that are assigned to students and displays extensive submission details to the teachers.",
    languages: [
      "Next.js",
      "React.js",
      "Redux",
      "TypeScript",
      "JavaScript",
      "Python",
      "Amazon Web Services (AWS)",
      "Amazon DynamoDB",
      "Amazon Cognito",
      "Amazon ...",
    ],
  },
  {
    company: "Student Career Studio",
    title: "Software Engineer Intern",
    description:
      "A fully responsive todolist web application with CRUD (Create, read, update, delete) functionalities. You can also create multiple todolists and add tasks to them.",
    languages: ["React.js", "TypeScript", "Node.js", "Express.js", "PostgreSQL", "Microsoft Azure"],
  },
  {
    company: "Computer Science Academy of Westhill",
    title: "Teaching Assistant - Data Structures",
    description:
      "Implemented my version of the popular Simons game in which users can play using keyboard arrows or by clicking the sqaures.",
    languages: ["Java"],
  },
  {
    company: "University of Connecticut",
    title: "Software Developer Intern",
    description:
      "Programmed a script that will read recipients’ email addresses from a csv file and send emails to them.",
    languages: ["Python", "Flask", "Google Cloud Platform (GCP)"],
  },
];

export { experiencesList };
export type { experienceInterface };
