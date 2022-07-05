import { SkillStoreItem } from "../Skills/SkillStore";

interface CardBodySkillsInterface {
  skills: SkillStoreItem[];
}

const CardBodySkills: React.FC<CardBodySkillsInterface> = ({ skills }) => {
  return (
    <p className="text-gray-400 italic text-sm">
      {skills.map((skill, index) => {
        return (
          <span
            key={index}
            className={`inline-block bg-gray-800 text-white rounded-full px-3 py-1 mr-2 mb-2 font-inconsolata tracking-wide ${skill.style} uppercase`}
          >
            {skill.value}
          </span>
        );
      })}
    </p>
  );
};

export { CardBodySkills };
