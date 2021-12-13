import Link from "./Link";
const Footer: React.FC = () => {
  return (
    <section className="mt-12 text-center">
      <p className="text-blue-800">
        Built using <Link link="https://reactjs.org">React.js</Link>,{" "}
        <Link link="https://typescriptlang.org">Typescript</Link>, and{" "}
        <Link link="https://tailwindcss.com">TailwindCSS</Link>.
      </p>
      <p className="text-blue-200">© Savar Jain 2021. All rights reserved.</p>
    </section>
  );
};

export default Footer;
