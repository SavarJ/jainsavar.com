import { databases } from "./skillsList";
import { Skill } from "./OtherComponents";

const Databases: React.FC = () => {
  return (
    <>
      {databases.map((database, idx) => {
        return <Skill name={database} className="bg-green-800 text-white border-green-400" key={idx} />;
      })}
    </>
  );
};

export default Databases;
