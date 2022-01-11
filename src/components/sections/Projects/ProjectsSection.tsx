import Projects from "./Projects";
import MoreOnGithub from "./MoreOnGithub";
import "./custom.css";
import { NormalSection, SectionBody, SectionTitle } from "../../shared/Components";
const ProjectsSection: React.FC = () => {
  return (
    <NormalSection>
      <SectionTitle class="-mb-4">{"<Projects />"}</SectionTitle>
      <SectionBody class="flex flex-wrap justify-between -ml-4">
        <Projects />
        <MoreOnGithub />
      </SectionBody>
    </NormalSection>
  );
};

export default ProjectsSection;
