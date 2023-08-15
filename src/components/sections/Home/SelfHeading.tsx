interface SelfHeadingProps {
  setSelfHeadingDone: (value: boolean) => void;
}

const SelfHeading: React.FC<SelfHeadingProps> = (props) => {
  return (
    <h1
      className="text-7xl font-inconsolata inline-block"
      // startDelay={1000}
      // avgTypingDelay={50}
      // cursor={{ hideWhenDone: true, hideWhenDoneDelay: 100 }}
      // onTypingDone={() => props.setSelfHeadingDone(true)}
    >
      Hola, I'm{" "}
      <span className="font-bold tracking-wide" style={{ color: "#19B5FE" }}>
        Savar
      </span>
      !
    </h1>
  );
};

export default SelfHeading;
