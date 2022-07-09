import NormalSection from "../../shared/NormalSection";
import SectionTitle from "../../shared/SectionTitle";
import SectionBody from "../../shared/SectionBody";
import { SkillStore } from "./SkillStore";
import { Skill } from "./Skill";

const SkillsSection: React.FC = () => {
  return (
    <NormalSection>
      <SectionTitle>{"<Skills />"}</SectionTitle>
      <SectionBody className="flex flex-wrap justify-start">
        {Object.keys(SkillStore).map((skill, idx) => {
          const name = SkillStore[skill as keyof typeof SkillStore].value;
          const style = SkillStore[skill as keyof typeof SkillStore].style;
          return <Skill name={name} className={style} key={idx} />;
        })}
      </SectionBody>
    </NormalSection>
  );
};

export default SkillsSection;
