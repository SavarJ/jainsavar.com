import Link from "./Link";
const FooterSection: React.FC = () => {
  return (
    <section className="text-center">
      <p className="text-blue-200">
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
        .
      </p>
      <p className="text-blue-200 mt-2 font-bold">© Savar Jain 2021. All rights reserved.</p>
    </section>
  );
};

export default FooterSection;
