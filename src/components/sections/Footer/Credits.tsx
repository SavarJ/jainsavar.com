import Link from "../../shared/Link";

const Credits: React.FC = () => {
  return (
    <p className="text-blue-200 text-sm">
      Built using{" "}
      <Link link="https://reactjs.org" color="gold">
        React.js
      </Link>
      ,{" "}
      <Link link="https://typescriptlang.org" color="gold">
        Typescript
      </Link>
      , and{" "}
      <Link link="https://tailwindcss.com" color="gold">
        TailwindCSS
      </Link>
      . Inspired by{" "}
      <Link link="https://shannonlau.com" color="gold">
        Shannon Lau
      </Link>
      {" and "}
      <Link link="https://jarin.me" color="gold">
        Gazi Jarin.
      </Link>
    </p>
  );
};

export default Credits;
