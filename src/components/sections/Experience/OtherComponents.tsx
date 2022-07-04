// import Link from "../../shared/Link";
import ComponentProps from "../../shared/ComponentProps";
import { experienceInterface } from "./experiencesList";
// import ExternalLink from "../../icons/ExternalLink";

const ExperienceCard: React.FC<ComponentProps> = (props) => {
  return (
    <div className="rounded-lg p-6 shadow-xl h-68 m-4 flex flex-col justify-between hover:shadow-4xl relative project">
      {props.children}
    </div>
  );
};

interface ExperienceCardHeadProps {
  title: string;
  description: string;
}

const ExperienceCardHead: React.FC<ExperienceCardHeadProps> = (props) => {
  return (
    <div>
      <h3 className="font-bold text-2xl text-blue-50">{props.title}</h3>
      <p className="text-gray-200 py-2 text-base">{props.description}</p>
    </div>
  );
};

interface ExperienceCardBodyProps {
  experience: experienceInterface;
}

const ExperienceCardBody: React.FC<ExperienceCardBodyProps> = (props) => {
  return (
    <div>
      <ExperienceCardBodyLanguages experience={props.experience} />
      {/* <ExperienceCardBodyLinks experience={props.experience} /> */}
    </div>
  );
};

const ExperienceCardBodyLanguages: React.FC<ExperienceCardBodyProps> = ({ experience }) => {
  return (
    <p className="text-gray-400 italic text-sm">
      {experience.languages.map((language, index) => {
        return (
          <span
            key={index}
            className="inline-block bg-gray-800 text-white rounded-full px-3 py-1 mr-2 mb-2 font-inconsolata tracking-wide"
          >
            {language}
          </span>
        );
      })}
    </p>
  );
};

// const ExperienceCardBodyLinks: React.FC<ExperienceCardBodyProps> = ({ experience }) => {
//   return (
//     <div className="flex justify-evenly mt-2">
//       <Link link={experience.githubLink}>
//         <Github className="w-5" />
//       </Link>
//       {experience.liveLink && (
//         <Link link={project.liveLink}>
//           <ExternalLink className="w-5" />
//         </Link>
//       )}
//     </div>
//   );
// };

export { ExperienceCard, ExperienceCardHead, ExperienceCardBody };
