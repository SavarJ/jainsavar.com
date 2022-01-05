import "./custom.css";
import { SectionBody, SectionTitle } from "./Components";
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

const SkillsSection: React.FC = () => {
  return (
    <section>
      <SectionTitle>{"<Skills />"}</SectionTitle>
      <SectionBody class="flex flex-wrap">
        {languages.map((language, idx) => {
          return <Skill name={language} type={SkillType.Language} key={idx} />;
        })}
        {frameworks.map((framework, idx) => {
          return <Skill name={framework} type={SkillType.Framework} key={idx} />;
        })}
        {databases.map((database, idx) => {
          return <Skill name={database} type={SkillType.Database} key={idx} />;
        })}
        {tools.map((tool, idx) => {
          return <Skill name={tool} type={SkillType.Tool} key={idx} />;
        })}
      </SectionBody>
    </section>
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
const tools = ["Git", "GitHub", "Heroku", "Firebase", "Unix/Linux Terminal"];

export default SkillsSection;
