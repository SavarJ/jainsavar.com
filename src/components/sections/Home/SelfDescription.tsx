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
          SWE Intern @ Amazon | Prev @ Zillow, Synchrony Financial | Jane Street FTTP '23
          <br />
          Graduating May 2025!
        </Typist>
      )}
    </>
  );
};

export default SelfDescription;
