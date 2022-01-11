import HomeSection from "./sections/Home/HomeSection";
import AboutSection from "./sections/About/AboutSection";
import SkillsSection from "./sections/Skills/SkillsSection";
import ProjectsSection from "./sections/Projects/ProjectsSection";
import FooterSection from "./sections/Footer/FooterSection";
import MainSection from "./shared/MainSection";
import "../styles/custom.css";

const App: React.FC = () => {
  return (
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
