import "./custom.css";
import { SectionBody, SectionTitle } from "./Components";

const SkillsSection: React.FC = () => {
  return (
    <section>
      <SectionTitle>{"<Skills />"}</SectionTitle>
      <SectionBody class="flex flex-wrap">
        <Languages />
        <Frameworks />
        <Databases />
        <Tools />
      </SectionBody>
    </section>
  );
};
interface SkillProps {
  name: string;
  type: SkillType;
}
enum SkillType {
  Language,
  Framework,
  Database,
  Tool,
}
const Languages: React.FC = () => {
  return (
    <>
      {languages.map((language, idx) => {
        return <Skill name={language} type={SkillType.Language} key={idx} />;
      })}
    </>
  );
};

const Frameworks: React.FC = () => {
  return (
    <>
      {frameworks.map((framework, idx) => {
        return <Skill name={framework} type={SkillType.Framework} key={idx} />;
      })}
    </>
  );
};
const Databases: React.FC = () => {
  return (
    <>
      {databases.map((database, idx) => {
        return <Skill name={database} type={SkillType.Database} key={idx} />;
      })}
    </>
  );
};
const Tools: React.FC = () => {
  return (
    <>
      {tools.map((tool, idx) => {
        return <Skill name={tool} type={SkillType.Tool} key={idx} />;
      })}
    </>
  );
};
const Skill: React.FC<SkillProps> = ({ name, type }) => {
  const colorStyles = new Map();
  colorStyles.set(SkillType.Language, "bg-blue-800 text-white border-blue-400");
  colorStyles.set(SkillType.Database, "bg-green-800 text-white border-green-400");
  colorStyles.set(SkillType.Framework, "bg-yellow-600 text-white border-yellow-400");
  colorStyles.set(SkillType.Tool, "bg-pink-800 text-white border-pink-400");

  const colorStyle = `${colorStyles.get(
    type
  )} border shadow-2xl px-5 py-2 rounded-lg m-2 hover:shadow-4xl skill`;
  return (
    <div className={colorStyle}>
      <h1>{name}</h1>
    </div>
  );
};
const languages = ["Javascript", "Typescript", "Java", "Python", "HTML", "CSS"];
const frameworks = ["React.js", "Node.js", "Express.js", "EJS", "Flask", "Bootstrap", "TailwindCSS"];
const databases = ["MongoDB", "Google Cloud Datastore"];
const tools = ["Git", "GitHub", "Heroku", "Firebase", "MongoDB Atlas", "Unix/Linux Terminal"];

export default SkillsSection;
