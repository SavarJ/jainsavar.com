import { frameworks } from "./skillsList";
import { Skill } from "./OtherComponents";

const Frameworks: React.FC = () => {
  return (
    <>
      {frameworks.map((framework, idx) => {
        return <Skill name={framework} className="bg-yellow-600 text-white border-yellow-400" key={idx} />;
      })}
    </>
  );
};

export default Frameworks;
