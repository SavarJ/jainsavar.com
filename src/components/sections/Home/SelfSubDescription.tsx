import Typist from "react-typist";
import Link from "../../shared/Link";

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
          avgTypingDelay={20}
          onTypingDone={() => props.setSelfSubDescription(true)}
        >
          Feel free to
          {/* check out my{" "}
          <Link link="/assets/SavarJain-Resume" color="gold">
            resume
          </Link>{" "}
          or */}{" "}
          email me at{" "}
          <Link link="mailto:jainsavar@gmail.com" color="gold">
            jainsavar@gmail.com
          </Link>
          .
        </Typist>
      )}
    </>
  );
};

export default SelfSubDescription;
