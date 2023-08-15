import Typist from "react-typist";

interface SelfDescriptionProps {
  selfHeadingDone: boolean;
  setSelfDescriptionDone: (value: boolean) => void;
}

const SelfDescription: React.FC<SelfDescriptionProps> = (props) => {
  return (
    <>
      {props.selfHeadingDone && (
        <Typist
          className="mt-4 text-xl max-w-3xl text-gray-400 font-zb"
          avgTypingDelay={10}
          cursor={{ hideWhenDone: true, hideWhenDoneDelay: 100 }}
          onTypingDone={() => props.setSelfDescriptionDone(true)}
        >
          I'm a undergraduate student who's passionate about Computer Science.
          <br />
          Graduating in 2025 (or possibly earlier!)
        </Typist>
      )}
    </>
  );
};

export default SelfDescription;
