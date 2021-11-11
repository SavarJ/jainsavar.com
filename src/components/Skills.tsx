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

const Skills: React.FC = () => {
  return (
    <section>
      <h1 className="text-5xl text-blue-200 font-bold mt-4" style={{ color: "#19B5FE" }}>
        {"<Skills />"}
      </h1>
      <div className="max-w-3xl text-gray-400 mt-4 flex flex-wrap">
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
      </div>
    </section>
  );
};
const Skill: React.FC<SkillProps> = ({ name, type }) => {
  const colorStyles = new Map();
  colorStyles.set(SkillType.Language, "bg-blue-800 text-white border-blue-400");
  colorStyles.set(SkillType.Database, "bg-green-800 text-white border-green-400");
  colorStyles.set(SkillType.Framework, "bg-yellow-600 text-white border-yellow-400");
  colorStyles.set(SkillType.Tool, "bg-pink-800 text-white border-pink-400");

  const colorStyle = colorStyles.get(type) + "border-2 shadow-2xl px-5 py-2 rounded-lg m-2";
  return (
    <div className={colorStyle}>
      <h1>{name}</h1>
    </div>
  );
};
const languages = ["Javascript", "Typescript", "Java", "Python", "HTML", "CSS"];
const frameworks = ["React.js", "Node.js", "Express.js", "EJS", "Flask", "Bootstrap", "TailwindCSS"];
const databases = ["MongoDB", "Google Cloud Datastore"];
const tools = ["Git", "GitHub", "Heroku", "Firebase"];

export default Skills;
