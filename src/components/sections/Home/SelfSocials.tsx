import Link from "../../shared/Link";
import Linkedin from "../../icons/Linkedin";
import Github from "../../icons/Github";
import Twitter from "../../icons/Twitter";
import Email from "../../icons/Email";

interface SelfSocialsProps {
  selfSubDescriptionDone: boolean;
  setSelfSocialsDone: (value: boolean) => void;
}

const SelfSocials: React.FC<SelfSocialsProps> = (props) => {
  /* TODO: Replace font awesome with a custom svg icons */
  return (
    // <Zoom top when={props.selfSubDescriptionDone} onReveal={() => props.setSelfSocialsDone(true)}>
    <>
      <br />
      <div className="flex justify-between items-center w-40 mt-4">
        <Link link="https://github.com/SavarJ" className="icon-1">
          <Github className="w-5 pb-1 border-b-2 border-blue-200 border-dotted icon-1" />
        </Link>
        <Link link="https://linkedin.com/in/savarjain" className="icon-2">
          <Linkedin className="w-5 pb-1 border-b-2 border-blue-200 border-dotted icon-2" />
        </Link>
        <Link link="mailto:jainsavar@gmail.com" className="icon-3">
          <Email className="w-5 pb-1 border-b-2 border-blue-200 border-dotted icon-3" />
        </Link>
      </div>
    </>
    // </Zoom>
  );
};

export default SelfSocials;
