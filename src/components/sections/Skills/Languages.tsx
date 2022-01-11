import { languages } from "./skillsList";
import { Skill } from "./OtherComponents";

const Languages: React.FC = () => {
  return (
    <>
      {languages.map((language, idx) => {
        return <Skill name={language} className="bg-blue-800 text-white border-blue-400" key={idx} />;
      })}
    </>
  );
};

export default Languages;
