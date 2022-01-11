import NormalSection from "../../shared/NormalSection";
import SectionTitle from "../../shared/SectionTitle";
import SectionBody from "../../shared/SectionBody";
import Languages from "./Languages";
import Frameworks from "./Frameworks";
import Databases from "./Databases";
import Tools from "./Tools";
import MoreComingSoon from "./MoreComingSoon";

const SkillsSection: React.FC = () => {
  return (
    <NormalSection>
      <SectionTitle>{"<Skills />"}</SectionTitle>
      <SectionBody className="flex flex-wrap justify-start">
        <Languages />
        <Frameworks />
        <Databases />
        <Tools />
        <MoreComingSoon />
      </SectionBody>
    </NormalSection>
  );
};

export default SkillsSection;
