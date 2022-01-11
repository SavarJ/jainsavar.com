import Languages from "./Languages";
import Frameworks from "./Frameworks";
import Databases from "./Databases";
import Tools from "./Tools";
import { NormalSection, SectionBody, SectionTitle } from "../../shared/Components";
import "./custom.css";

const SkillsSection: React.FC = () => {
  return (
    <NormalSection>
      <SectionTitle>{"<Skills />"}</SectionTitle>
      <SectionBody className="flex flex-wrap">
        <Languages />
        <Frameworks />
        <Databases />
        <Tools />
      </SectionBody>
    </NormalSection>
  );
};

export default SkillsSection;
