import "../../../styles/Projects.css";
import { experiencesList } from "./experiencesList";
import { ExperienceCard, ExperienceCardHead, ExperienceCardBody } from "./OtherComponents";

const Experiences: React.FC = () => {
  return (
    <>
      {experiencesList.map((experience, index) => (
        <ExperienceCard key={index}>
          <ExperienceCardHead title={experience.title} description={experience.description} />
          <ExperienceCardBody experience={experience} />
        </ExperienceCard>
      ))}
    </>
  );
};

export default Experiences;
