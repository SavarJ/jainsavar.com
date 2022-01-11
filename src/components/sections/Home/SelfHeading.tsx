import Typist from "react-typist";

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

export default SelfHeading;
