import Link from "../../shared/Link";

const SelfDescription: React.FC = () => {
  return (
    <>
      <h1 className="mt-4 text-xl max-w-3xl text-gray-400 font-zb">
        Prev SWE Intern <span className="font-cabin">@</span>{" "}
        <Link link="https://github.com/mongodb/mongo/commits/master/?author=savarjjj" color="mongo">
          MongoDB
        </Link>
        ,{" "}
        <Link link="https://www.amazon.com/" color="amazon">
          Amazon
        </Link>
        ,{" "}
        <Link link="https://www.zillow.com/" color="zillow">
          Zillow
        </Link>
        ,{" "}
        <Link link="https://www.synchrony.com/" color="synchrony">
          Synchrony
        </Link>{" "}
        |{" "}
        <Link link="https://www.janestreet.com/join-jane-street/programs-and-events/fttp/" color="color-3">
          Jane Street FTTP '23
        </Link>{" "}
        <br />
        Graduating May 2026!
      </h1>
    </>
  );
};

export default SelfDescription;
