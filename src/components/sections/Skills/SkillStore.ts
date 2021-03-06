const LanguageStyle: string = "bg-blue-800 text-white border-blue-400";
const FrameworkStyle = "bg-yellow-800 text-white border-yellow-400";
const DatabaseStyle = "bg-green-800 text-white border-green-400";
const ToolStyle = "bg-pink-800 text-white border-pink-400";
const OtherStyle = "bg-gray-400 text-white border-blue-400";

interface SkillStoreItem {
  value: string;
  style: string;
}

const SkillStore = {
  Typescript: {
    value: "TypeScript",
    style: LanguageStyle,
  },
  Javascript: {
    value: "JavaScript",
    style: LanguageStyle,
  },
  Python: {
    value: "Python",
    style: LanguageStyle,
  },
  Java: {
    value: "Java",
    style: LanguageStyle,
  },
  HTMLCSS: {
    value: "HTML/CSS",
    style: LanguageStyle,
  },
  React: {
    value: "React.js",
    style: FrameworkStyle,
  },
  Node: {
    value: "Node.js",
    style: FrameworkStyle,
  },
  Express: {
    value: "Express.js",
    style: FrameworkStyle,
  },
  Next: {
    value: "Next.js",
    style: FrameworkStyle,
  },
  Redux: {
    value: "Redux.js",
    style: FrameworkStyle,
  },
  EJS: {
    value: "EJS",
    style: FrameworkStyle,
  },
  Flask: {
    value: "Flask",
    style: FrameworkStyle,
  },
  Bootstrap: {
    value: "Bootstrap",
    style: FrameworkStyle,
  },
  Tailwind: {
    value: "Tailwind CSS",
    style: FrameworkStyle,
  },
  Mongo: {
    value: "MongoDB (NoSQL)",
    style: DatabaseStyle,
  },
  Postgres: {
    value: "Postgres SQL",
    style: DatabaseStyle,
  },
  Dynamo: {
    value: "Amazon DynamoDB",
    style: DatabaseStyle,
  },
  Datastore: {
    value: "Google Cloud Datastore",
    style: DatabaseStyle,
  },
  AWS: {
    value: "Amazon Web Services (AWS)",
    style: ToolStyle,
  },
  Azure: {
    value: "Microsoft Azure",
    style: ToolStyle,
  },
  GCP: {
    value: "Google Cloud Platform (GCP)",
    style: ToolStyle,
  },
  Heroku: {
    value: "Heroku",
    style: ToolStyle,
  },
  Firebase: {
    value: "Google Firebase",
    style: ToolStyle,
  },
  Atlas: {
    value: "MongoDB Atlas",
    style: ToolStyle,
  },
  GitGithub: {
    value: "Git/GitHub",
    style: ToolStyle,
  },
  Terminal: {
    value: "Unix/Linux Terminal",
    style: ToolStyle,
  },
  More: {
    value: "More coming soon...",
    style: OtherStyle,
  },
};

export { SkillStore };
export type { SkillStoreItem };
