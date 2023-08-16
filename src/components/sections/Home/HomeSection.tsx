import { useState } from "react";
import "../../../styles/Typist.css";
import FullSection from "../../shared/FullSection";
import SelfLogo from "./SelfLogo";
import SelfHeading from "./SelfHeading";
import SelfDescription from "./SelfDescription";
import SelfSubDescription from "./SelfSubDescription";
import SelfSocials from "./SelfSocials";
import MoreArrow from "./MoreArrow";
import FooterSection from "../Footer/FooterSection";
import { Fade, Bounce, AttentionSeeker } from "react-awesome-reveal";

const HomeSection: React.FC = () => {
  const intialDelay = 250;
  const duration = 1000;
  return (
    // Since there is a padding at the top of the page and
    // full section has a height of 100vh negative margin is needed
    // so the other sections below are close enough.
    <FullSection className="-mb-20">
      <Fade cascade damping={0.75} delay={intialDelay} duration={duration}>
        <SelfLogo />
        <SelfHeading />
        <SelfDescription />
        <SelfSubDescription />
      </Fade>
      <Bounce delay={duration * 4} duration={3000}>
        <SelfSocials />
      </Bounce>
      <Fade delay={duration * 5 + intialDelay}>
        <FooterSection />
      </Fade>
    </FullSection>
  );
};

export default HomeSection;
