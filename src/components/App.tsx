import HomeSection from "./sections/Home/HomeSection";
import AboutSection from "./sections/About/AboutSection";
import SkillsSection from "./sections/Skills/SkillsSection";
import ProjectsSection from "./sections/Projects/ProjectsSection";
import FooterSection from "./sections/Footer/FooterSection";
import MainWrapper from "./shared/MainWrapper";
import SubWrapper from "./shared/SubWrapper";
import "../styles/custom.css";

const App: React.FC = () => {
  return (
    <MainWrapper>
      <HomeSection />
      <SubWrapper>
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <FooterSection />
      </SubWrapper>
    </MainWrapper>
  );
};

export default App;
