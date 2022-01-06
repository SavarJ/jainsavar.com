import HomeSection from "./HomeSection";
import AboutSection from "./AboutSection";
import SkillsSection from "./SkillsSection";
import ProjectsSection from "./ProjectsSection";
import FooterSection from "./FooterSection";
const Fade = require("react-reveal/Fade");

const App: React.FC = () => {
  return (
    // dark mode
    <main
      className="max-w-full pt-16 pb-8 flex flex-col justify-center items-center space-y-24 bg-gradient-to-b from-black to-myblue"
      // style={{ backgroundColor: "#0a192f" }}
    >
      <Fade>
        <HomeSection />
      </Fade>
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <FooterSection />
    </main>
  );
};

export default App;
