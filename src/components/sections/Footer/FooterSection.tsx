import Credits from "./Credits";
import Copyright from "./Copyright";
const LightSpeed = require("react-reveal/LightSpeed");

const FooterSection: React.FC = () => {
  return (
    <LightSpeed>
      <section className="text-center absolute bottom-2">
        {/* <Credits /> */}
        <Copyright />
      </section>
    </LightSpeed>
  );
};

export default FooterSection;
