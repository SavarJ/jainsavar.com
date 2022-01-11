import { useState } from "react";
import "../../../styles/Typist.css";
import FullSection from "../../shared/FullSection";
import SelfLogo from "./SelfLogo";
import SelfHeading from "./SelfHeading";
import SelfDescription from "./SelfDescription";
import SelfSubDescription from "./SelfSubDescription";
import SelfSocials from "./SelfSocials";
import MoreArrow from "./MoreArrow";

const HomeSection: React.FC = () => {
  const [selfHeadingDone, setSelfHeadingDone] = useState(false);
  const [selfDescriptionDone, setSelfDescriptionDone] = useState(false);
  const [selfSubDescriptionDone, setSelfSubDescriptionDone] = useState(false);
  const [selfSocialsDone, setSelfSocialsDone] = useState(false);
  return (
    // Since there is a padding at the top of the page and
    // full section has a height of 100vh negative margin is needed
    // so the other sections below are close enough.
    <FullSection className="-mb-20">
      <SelfLogo />
      <SelfHeading setSelfHeadingDone={setSelfHeadingDone} />
      <SelfDescription selfHeadingDone={selfHeadingDone} setSelfDescriptionDone={setSelfDescriptionDone} />
      <br />
      <SelfSubDescription
        selfDescriptionDone={selfDescriptionDone}
        setSelfSubDescription={setSelfSubDescriptionDone}
      />
      <SelfSocials selfSubDescriptionDone={selfSubDescriptionDone} setSelfSocialsDone={setSelfSocialsDone} />
      <MoreArrow selfSocialsDone={selfSocialsDone} />
    </FullSection>
  );
};

export default HomeSection;
