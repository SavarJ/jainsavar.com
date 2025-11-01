import Link from "../../shared/Link";
import Linkedin from "../../icons/Linkedin";
import Twitter from "../../icons/Twitter";
import Github from "../../icons/Github";
import Email from "../../icons/Email";

const SelfSocials: React.FC = () => {
  /* TODO: Replace font awesome with a custom svg icons */
  return (
    <>
      <div className="flex justify-between items-center mt-2 w-52">
        <Link link="/linkedin" className="icon-1">
          <Linkedin className="pb-1 w-5 border-b-2 border-blue-200 border-dotted icon-1" />
        </Link>
        <Link link="/twitter" className="icon-2">
          <Twitter className="pb-1 w-5 border-b-2 border-blue-200 border-dotted icon-2" />
        </Link>
        <Link link="/github" className="icon-3">
          <Github className="pb-1 w-5 border-b-2 border-blue-200 border-dotted icon-3" />
        </Link>
        <Link link="/email" className="icon-4">
          <Email className="pb-1 w-5 border-b-2 border-blue-200 border-dotted icon-4" />
        </Link>
      </div>
    </>
  );
};

export default SelfSocials;
