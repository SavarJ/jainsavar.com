import Link from "../../shared/Link";
import Linkedin from "../../../icons/Linkedin";
import Github from "../../../icons/Github";
import Twitter from "../../../icons/Twitter";
import Email from "../../../icons/Email";
const Zoom = require("react-reveal/Zoom");

interface SelfSocialsProps {
  selfSubDescriptionDone: boolean;
  setSelfSocialsDone: (value: boolean) => void;
}

const SelfSocials: React.FC<SelfSocialsProps> = (props) => {
  /* TODO: Replace font awesome with a custom svg icons */
  return (
    <Zoom top when={props.selfSubDescriptionDone} onReveal={() => props.setSelfSocialsDone(true)}>
      <div className="flex justify-between items-center w-40 mt-4">
        <Link link="https://github.com/SavarJ">
          <Github className="w-5" />
        </Link>
        <Link link="https://linkedin.com/in/savarjain">
          <Linkedin className="w-5" />
        </Link>
        <Link link="https://twitter.com/SavarJain">
          <Twitter className="w-5" />
        </Link>
        <Link link="mailto:jainsavar@gmail.com">
          <Email className="w-5" />
        </Link>
      </div>
    </Zoom>
  );
};

export default SelfSocials;
