import Typist from "react-typist";
import { FullSection } from "./Components";
import Link from "./Link";
import "./custom.css";
import { useState } from "react";
const HomeSection: React.FC = () => {
  const [selfHeadingDone, setSelfHeadingDone] = useState(false);
  const [selfDescriptionDone, setSelfDescriptionDone] = useState(false);
  return (
    <FullSection class="-mb-40">
      <SelfLogo />
      <SelfHeading setSelfHeadingDone={setSelfHeadingDone} />
      <SelfDescription selfHeadingDone={selfHeadingDone} setSelfDescriptionDone={setSelfDescriptionDone} />
      <br />
      <SelfSubDescription selfDescriptionDone={selfDescriptionDone} />
      <Socials />
    </FullSection>
  );
};

const SelfLogo: React.FC = () => {
  return <img src="/logo.png" alt="Logo-img" className="h-40 mb-8" />;
};
interface SelfHeadingProps {
  setSelfHeadingDone: (value: boolean) => void;
}

const SelfHeading: React.FC<SelfHeadingProps> = ({ setSelfHeadingDone }) => {
  return (
    <Typist
      startDelay={1100}
      avgTypingDelay={120}
      cursor={{ hideWhenDone: true }}
      className="text-7xl font-inconsolata inline-block"
      onTypingDone={() => setSelfHeadingDone(true)}
    >
      Hi, I'm{" "}
      <span className="font-bold tracking-wide" style={{ color: "#19B5FE" }}>
        Savar
      </span>
      !
    </Typist>
  );
};
interface SelfDescriptionProps {
  selfHeadingDone: boolean;
  setSelfDescriptionDone: (value: boolean) => void;
}
const SelfDescription: React.FC<SelfDescriptionProps> = ({ selfHeadingDone, setSelfDescriptionDone }) => {
  return (
    <>
      {selfHeadingDone && (
        <Typist
          className="mt-4 text-2xl max-w-3xl text-gray-400 font-zb"
          onTypingDone={() => setSelfDescriptionDone(true)}
        >
          I'm a high school senior who's passionate about Computer Science and Software Engineering.
        </Typist>
      )}
    </>
  );
};
interface SelfSubDescriptionProps {
  selfDescriptionDone: boolean;
}
const SelfSubDescription: React.FC<SelfSubDescriptionProps> = ({ selfDescriptionDone }) => {
  return (
    <>
      {selfDescriptionDone && (
        <Typist className="text-xl text-gray-400 font-zb">
          Feel free to check out my{" "}
          <Link link="/assets/SavarJain-Resume" color="orange">
            resume
          </Link>{" "}
          or email me at{" "}
          <Link link="mailto:jainsavar@gmail.com" color="orange">
            jainsavar@gmail.com
          </Link>
        </Typist>
      )}
    </>
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
export default HomeSection;
