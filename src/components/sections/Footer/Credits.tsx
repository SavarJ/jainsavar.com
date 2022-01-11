import Link from "../../shared/Link";

const Credits: React.FC = () => {
  return (
    <p className="text-blue-200 text-sm">
      Built using{" "}
      <Link link="https://reactjs.org" color="orange">
        React.js
      </Link>
      ,{" "}
      <Link link="https://typescriptlang.org" color="orange">
        Typescript
      </Link>
      , and{" "}
      <Link link="https://tailwindcss.com" color="orange">
        TailwindCSS
      </Link>
      . Inspired by{" "}
      <Link link="https://shannonlau.com" color="orange">
        Shannon Lau
      </Link>
      {" and "}
      <Link link="https://jarin.me" color="orange">
        Gazi Jarin.
      </Link>
    </p>
  );
};

export default Credits;
