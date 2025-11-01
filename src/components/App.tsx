import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import HomeSection from "./sections/Home/HomeSection";
import AboutSection from "./sections/About/AboutSection";
import SkillsSection from "./sections/Skills/SkillsSection";
import ProjectsSection from "./sections/Projects/ProjectsSection";
import FooterSection from "./sections/Footer/FooterSection";
import MainWrapper from "./shared/MainWrapper";
import SubWrapper from "./shared/SubWrapper";
import "../styles/main.css";
import ExperienceSection from "./sections/Experience/ExperienceSection";

// Redirect component for external URLs
const ExternalRedirect: React.FC<{ to: string }> = ({ to }) => {
  window.location.href = to;
  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeSection />} />
        {/* Social links */}
        <Route path="/github" element={<ExternalRedirect to="https://grabify.link/AKW8IC" />} />
        <Route path="/linkedin" element={<ExternalRedirect to="https://grabify.link/1CRW3P" />} />
        <Route path="/twitter" element={<ExternalRedirect to="https://grabify.link/EYRNGR" />} />
        <Route path="/email" element={<ExternalRedirect to="mailto:jainsavar@gmail.com" />} />
        {/* Resume */}
        <Route path="/resume" element={<ExternalRedirect to="https://grabify.link/GH3YRT" />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
};

export default App;
