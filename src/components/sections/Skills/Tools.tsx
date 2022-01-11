import { tools } from "./skillsList";
import { Skill } from "./OtherComponents";

const Tools: React.FC = () => {
  return (
    <>
      {tools.map((tool, idx) => {
        return <Skill name={tool} className="bg-pink-800 text-white border-pink-400" key={idx} />;
      })}
    </>
  );
};

export default Tools;
