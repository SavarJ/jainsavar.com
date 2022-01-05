import Link from "./Link";
const FooterSection: React.FC = () => {
  return (
    <section className="text-center">
      <p className="text-blue-700">
        Built using{" "}
        <Link link="https://reactjs.org" color="green">
          React.js
        </Link>
        ,{" "}
        <Link link="https://typescriptlang.org" color="green">
          Typescript
        </Link>
        , and{" "}
        <Link link="https://tailwindcss.com" color="green">
          TailwindCSS
        </Link>
        .
      </p>
      <p className="text-blue-200">© Savar Jain 2021. All rights reserved.</p>
    </section>
  );
};

export default FooterSection;
