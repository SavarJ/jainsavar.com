import { useState } from "react";
import { FullSection } from "../../shared/Components";
import SelfLogo from "./SelfLogo";
import SelfHeading from "./SelfHeading";
import SelfDescription from "./SelfDescription";
import SelfSubDescription from "./SelfSubDescription";
import SelfSocials from "./SelfSocials";
import "./custom.css";

const HomeSection: React.FC = () => {
  const [selfHeadingDone, setSelfHeadingDone] = useState(false);
  const [selfDescriptionDone, setSelfDescriptionDone] = useState(false);
  const [selfSubDescriptionDone, setSelfSubDescriptionDone] = useState(false);
  return (
    <FullSection class="full-section">
      <SelfLogo />
      <SelfHeading setSelfHeadingDone={setSelfHeadingDone} />
      <SelfDescription selfHeadingDone={selfHeadingDone} setSelfDescriptionDone={setSelfDescriptionDone} />
      <br />
      <SelfSubDescription
        selfDescriptionDone={selfDescriptionDone}
        setSelfSubDescription={setSelfSubDescriptionDone}
      />
      <SelfSocials selfSubDescriptionDone={selfSubDescriptionDone} />
    </FullSection>
  );
};

export default HomeSection;
