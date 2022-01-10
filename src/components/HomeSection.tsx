import React, { Suspense } from "react";
import Typist from "react-typist";
import { FullSection } from "./Components";
import Link from "./Link";
import "./custom.css";
// import Logo from "./Logo";
import { useState } from "react";
const Zoom = require("react-reveal/Zoom");
const Logo = React.lazy(() => import("./Logo"));

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
      <Socials selfSubDescriptionDone={selfSubDescriptionDone} />
    </FullSection>
  );
};

const SelfLogo: React.FC = () => {
  return (
    <Suspense fallback={<div className="text-gray-400">Loading...</div>}>
      <Logo />
    </Suspense>
  );
};
interface SelfHeadingProps {
  setSelfHeadingDone: (value: boolean) => void;
}

const SelfHeading: React.FC<SelfHeadingProps> = (props) => {
  return (
    <Typist
      className="text-7xl font-inconsolata inline-block"
      startDelay={1100}
      avgTypingDelay={120}
      cursor={{ hideWhenDone: true, hideWhenDoneDelay: 100 }}
      onTypingDone={() => props.setSelfHeadingDone(true)}
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
const SelfDescription: React.FC<SelfDescriptionProps> = (props) => {
  return (
    <>
      {props.selfHeadingDone && (
        <Typist
          className="mt-4 text-2xl max-w-3xl text-gray-400 font-zb"
          avgTypingDelay={50}
          cursor={{ hideWhenDone: true, hideWhenDoneDelay: 100 }}
          onTypingDone={() => props.setSelfDescriptionDone(true)}
        >
          I'm a high school senior who's passionate about Computer Science and Software Engineering.
        </Typist>
      )}
    </>
  );
};
interface SelfSubDescriptionProps {
  selfDescriptionDone: boolean;
  setSelfSubDescription: (value: boolean) => void;
}
const SelfSubDescription: React.FC<SelfSubDescriptionProps> = (props) => {
  return (
    <>
      {props.selfDescriptionDone && (
        <Typist
          className="text-xl text-gray-400 font-zb"
          avgTypingDelay={30}
          onTypingDone={() => props.setSelfSubDescription(true)}
        >
          Feel free to check out my{" "}
          <Link link="/assets/SavarJain-Resume" color="orange">
            resume
          </Link>{" "}
          or email me at{" "}
          <Link link="mailto:jainsavar@gmail.com" color="orange">
            jainsavar@gmail.com
          </Link>
          .
        </Typist>
      )}
    </>
  );
};

interface SocialsProps {
  selfSubDescriptionDone: boolean;
}

const Socials: React.FC<SocialsProps> = (props) => {
  /* TODO: Replace font awesome with a custom svg icons */
  return (
    <Zoom top when={props.selfSubDescriptionDone}>
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
    </Zoom>
  );
};
export default HomeSection;
