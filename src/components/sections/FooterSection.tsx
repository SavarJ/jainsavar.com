import Link from "../shared/Link";
const LightSpeed = require("react-reveal/LightSpeed");

const FooterSection: React.FC = () => {
  return (
    <LightSpeed>
      <section className="text-center">
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
        <p className="text-blue-200 mt-2 font-bold font-zb text-lg">
          © Savar Jain 2021. All rights reserved.
        </p>
      </section>
    </LightSpeed>
  );
};

export default FooterSection;
