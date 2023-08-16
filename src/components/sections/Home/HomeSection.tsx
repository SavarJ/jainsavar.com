import "../../../styles/Typist.css";
import FullSection from "../../shared/FullSection";
import SelfLogo from "./SelfLogo";
import SelfHeading from "./SelfHeading";
import SelfDescription from "./SelfDescription";
import SelfSubDescription from "./SelfSubDescription";
import SelfSocials from "./SelfSocials";
import { Fade, Bounce } from "react-awesome-reveal";
import Copyright from "../Footer/Copyright";

const HomeSection: React.FC = () => {
  const intialDelay = 250;
  const duration = 1000;
  return (
    <FullSection className="max-w-full px-12 py-16 flex flex-col justify-between items-center bg-gradient-to-b from-black to-myblue">
      <div>
        <Fade triggerOnce cascade damping={0.75} delay={intialDelay} duration={duration}>
          <SelfLogo />
          <SelfHeading />
          <SelfDescription />
          <SelfSubDescription />
        </Fade>
        <Bounce delay={duration * 4} duration={3000}>
          <SelfSocials />
        </Bounce>
      </div>
      {/* <div> */}
      <Fade triggerOnce delay={duration * 5 + intialDelay}>
        <Copyright />
      </Fade>
      {/* </div> */}
    </FullSection>
  );
};

export default HomeSection;
