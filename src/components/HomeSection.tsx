import { FullSection } from "./Components";
import Link from "./Link";
import "./custom.css";
const HomeSection: React.FC = () => {
  return (
    <FullSection class="-mb-40">
      <SelfLogo />
      <SelfHeading />
      <SelfDescription />
      <br />
      <SelfSubDescription />
      <Socials />
    </FullSection>
  );
};

const Socials: React.FC = () => {
  /* TODO: Replace font awesome with a custom svg icons */
  return (
    <div className="flex justify-between w-32 mt-4">
      <Link link="https://github.com/SavarJ">
        <i className="fa fa-github"></i>
      </Link>
      <Link link="https://linkedin.com/in/savarjain">
        <i className="fa fa-linkedin"></i>
      </Link>
      <Link link="https://twitter.com/SavarJain">
        <i className="fa fa-twitter"></i>
      </Link>
      <Link link="mailto:jainsavar@gmail.com">
        <i className="fa fa-envelope"></i>
      </Link>
    </div>
  );
};

const SelfLogo: React.FC = () => {
  return <img src="/logo.png" alt="Logo-img" className="h-40 mb-8" />;
};
const SelfHeading: React.FC = () => {
  return (
    <h1 className="text-7xl">
      hi,{" "}
      <span className="font-bold" style={{ color: "#19B5FE" }}>
        savar
      </span>{" "}
      here.
    </h1>
  );
};
const SelfDescription: React.FC = () => {
  return (
    <h2 className="mt-4 text-2xl max-w-3xl text-gray-400">
      I'm a high school senior who's passionate about Computer Science and Software Engineering.
    </h2>
  );
};
const SelfSubDescription: React.FC = () => {
  return (
    <h3 className="text-xl text-gray-400">
      Feel free to check out my{" "}
      <Link link="/assets/SavarJain-Resume" color="orange">
        resume
      </Link>{" "}
      or email me at{" "}
      <Link link="mailto:jainsavar@gmail.com" color="orange">
        jainsavar@gmail.com
      </Link>
    </h3>
  );
};

export default HomeSection;
