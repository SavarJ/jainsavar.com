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
          className="mt-4 text-2xl max-w-3xl text-gray-400 font-zb"
          avgTypingDelay={20}
          cursor={{ hideWhenDone: true, hideWhenDoneDelay: 100 }}
          onTypingDone={() => props.setSelfDescriptionDone(true)}
        >
          I'm a high school senior who's passionate about Computer Science and Software Engineering.
        </Typist>
      )}
    </>
  );
};

export default SelfDescription;
