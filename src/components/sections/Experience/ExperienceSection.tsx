import NormalSection from "../../shared/NormalSection";
import SectionTitle from "../../shared/SectionTitle";
import SectionBody from "../../shared/SectionBody";
import Experiences from "./Experiences";

const ExperienceSection: React.FC = () => {
  return (
    <NormalSection>
      <SectionTitle className="-mb-4">{"<Experience />"}</SectionTitle>
      <SectionBody className="flex flex-wrap justify-between -ml-4">
        <Experiences />
      </SectionBody>
    </NormalSection>
  );
};

export default ExperienceSection;
