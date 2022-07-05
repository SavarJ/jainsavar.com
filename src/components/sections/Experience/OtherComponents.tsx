import ComponentProps from "../../shared/ComponentProps";
import { CardBodySkills } from "./CardBodySkills";
import { experienceInterface } from "./experiencesList";

const ExperienceCard: React.FC<ComponentProps> = (props) => {
  return (
    <div className="rounded-lg p-6 shadow-xl w-full h-68 m-4 flex flex-col justify-between hover:shadow-4xl relative project">
      {props.children}
    </div>
  );
};

interface ExperienceCardBodyProps {
  experience: experienceInterface;
}

const ExperienceCardHead: React.FC<ExperienceCardBodyProps> = ({ experience }) => {
  return (
    <>
      <div className="flex justify-between">
        <h3 className="font-bold text-xl text-blue-50">{experience.title}</h3>
        <h2>
          {experience.startDate.toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
          })}{" "}
          -{" "}
          {experience.endDate >= new Date()
            ? "Present"
            : experience.endDate.toLocaleDateString("en-US", {
                year: "numeric",
                month: "short",
              })}
        </h2>
      </div>
      <div>
        <h3 className="font-medium text-lg text-blue-200">{experience.company}</h3>
      </div>
      <ul className="list-disc">
        {experience.description.map((line) => (
          <li className="text-gray-200 ml-4 py-2 text-sm">{line}</li>
        ))}
      </ul>
    </>
  );
};

const ExperienceCardBody: React.FC<ExperienceCardBodyProps> = ({ experience }) => {
  return (
    <div>
      <CardBodySkills skills={experience.skills} />
    </div>
  );
};

export { ExperienceCard, ExperienceCardHead, ExperienceCardBody };

export type { ExperienceCardBodyProps };
