import NormalSection from "../../shared/NormalSection";
import SectionTitle from "../../shared/SectionTitle";
import SectionBody from "../../shared/SectionBody";
import Projects from "./Projects";
import MoreOnGithub from "./MoreOnGithub";

const ProjectsSection: React.FC = () => {
  return (
    <NormalSection>
      <SectionTitle className="-mb-4">{"<Projects />"}</SectionTitle>
      <SectionBody className="flex flex-wrap justify-between -ml-4">
        <Projects />
        <MoreOnGithub />
      </SectionBody>
    </NormalSection>
  );
};

export default ProjectsSection;
