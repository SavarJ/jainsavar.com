import HomeSection from "./HomeSection";
import AboutSection from "./AboutSection";
import SkillsSection from "./SkillsSection";
import ProjectsSection from "./ProjectsSection";
import FooterSection from "./FooterSection";
import { MainSection } from "./Components";

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
