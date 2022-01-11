import Link from "../../shared/Link";
import Linkedin from "../../../icons/Linkedin";
const Zoom = require("react-reveal/Zoom");

interface SelfSocialsProps {
  selfSubDescriptionDone: boolean;
}

const SelfSocials: React.FC<SelfSocialsProps> = (props) => {
  /* TODO: Replace font awesome with a custom svg icons */
  return (
    <Zoom top when={props.selfSubDescriptionDone}>
      <div className="flex justify-between w-32 mt-4">
        <Link link="https://github.com/SavarJ">
          <i className="fa fa-github"></i>
        </Link>
        <Link link="https://linkedin.com/in/savarjain">
          <Linkedin />
        </Link>
        <Link link="https://twitter.com/SavarJain">
          <i className="fa fa-twitter"></i>
        </Link>
        <Link link="mailto:jainsavar@gmail.com">
          <i className="fa fa-envelope"></i>
        </Link>
      </div>
    </Zoom>
  );
};

export default SelfSocials;
