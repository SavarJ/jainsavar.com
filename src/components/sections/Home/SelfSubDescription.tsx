import Link from "../../shared/Link";

interface SelfSubDescriptionProps {
  // selfDescriptionDone: boolean;
  // setSelfSubDescription: (value: boolean) => void;
}
const SelfSubDescription: React.FC<SelfSubDescriptionProps> = (props) => {
  return (
    <>
      <br />
      <h1
        className="text-xl text-gray-400 font-zb"
        // avgTypingDelay={10}
        // onTypingDone={() => props.setSelfSubDescription(true)}
      >
        I'm actively seeking new opportunities - I specialize in Backend/ML/Data.
        <br />
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
      </h1>
    </>
  );
};

export default SelfSubDescription;
