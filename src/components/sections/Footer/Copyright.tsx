import Link from "../../shared/Link";

const Copyright: React.FC = () => {
  return (
    <p className="mt-2 text-lg font-bold text-blue-200 font-zb">
      ©{" "}
      <Link link="mailto:jainsavar@gmail.com" color="gold">
        Savar Jain
      </Link>{" "}
      2021. All rights reserved.
    </p>
  );
};

export default Copyright;
