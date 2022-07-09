import "../../../styles/Projects.css";
import { experiencesList } from "./experiencesList";
import { ExperienceCard, ExperienceCardHead, ExperienceCardBody } from "./OtherComponents";

const Experiences: React.FC = () => {
  return (
    <>
      {experiencesList.map((experience, index) => (
        <ExperienceCard key={index}>
          <ExperienceCardHead experience={experience} />
          <ExperienceCardBody experience={experience} />
        </ExperienceCard>
      ))}
    </>
  );
};

export default Experiences;
