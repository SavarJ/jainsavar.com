import Link from "../../shared/Link";

interface SelfDescriptionProps {
  // selfHeadingDone: boolean;
  // setSelfDescriptionDone: (value: boolean) => void;
}

const SelfDescription: React.FC<SelfDescriptionProps> = (props) => {
  return (
    <>
      <h1
        className="mt-4 text-xl max-w-3xl text-gray-400 font-zb"
        // avgTypingDelay={10}
        // cursor={{ hideWhenDone: true, hideWhenDoneDelay: 100 }}
        // onTypingDone={() => props.setSelfDescriptionDone(true)}
      >
        SWE Intern @{" "}
        <Link link="https://www.amazon.com/" color="color-1">
          Amazon
        </Link>{" "}
        | Prev @{" "}
        <Link link="https://www.zillow.com/" color="color-2">
          Zillow
        </Link>{" "}
        ,{" "}
        <Link link="https://www.synchrony.com/" color="color-3">
          Synchrony Financial
        </Link>{" "}
        |{" "}
        <Link link="https://www.janestreet.com/join-jane-street/programs-and-events/fttp/" color="color-4">
          Jane Street FTTP '23
        </Link>{" "}
        <br />
        Graduating May 2025!
      </h1>
    </>
  );
};

export default SelfDescription;
