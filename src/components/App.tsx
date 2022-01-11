import HomeSection from "./sections/Home/HomeSection";
import AboutSection from "./sections/About/AboutSection";
import SkillsSection from "./sections/Skills/SkillsSection";
import ProjectsSection from "./sections/Projects/ProjectsSection";
import FooterSection from "./sections/Footer/FooterSection";
import { MainSection } from "./shared/Components";

const App: React.FC = () => {
  return (
    // dark mode
    // style={{ backgroundColor: "#0a192f" }}
    <MainSection>
      <HomeSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <FooterSection />
    </MainSection>
  );
};

export default App;
