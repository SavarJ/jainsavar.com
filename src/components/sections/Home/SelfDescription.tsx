import Link from "../../shared/Link";

const At = () => {
  return <span className="font-cabin">@</span>;
};

const Company: React.FC<{ name: string; icon: string; link: string; color?: string; comma?: boolean }> = ({
  name,
  icon,
  link,
  color = name.toLowerCase(),
  comma = true,
}) => {
  return (
    <>
      <Link link={link} color={color}>
        {name} {icon}
      </Link>
      {comma && ","}{" "}
    </>
  );
};

const SelfDescription: React.FC = () => {
  return (
    <h1 className="mt-4 max-w-4xl text-xl text-gray-400 font-zb">
      Software Engineer specializing in distributed systems, ml infra, c++ low level systems
      <br />
      <br />
      Prev <At /> <Company name="LinkedIn" icon="🤝" link="https://www.linkedin.com/" />
      <Company name="Instagram" icon="📷" link="https://www.instagram.com/" />
      <Company name="Datadog" icon="🐶" link="https://www.datadoghq.com/" />
      <Company name="MongoDB" icon="🌱" link="https://www.mongodb.com/" />
      <Company name="Amazon" icon="📦" link="https://www.amazon.com/" />
      <Company name="Zillow" icon="🏠" link="https://www.zillow.com/" comma={false} />
      <br />
      <Company
        name="Jane Street FTTP '23"
        icon="📈"
        link="https://www.janestreet.com/join-jane-street/programs-and-events/fttp/"
        color="js"
        comma={false}
      />
      <br />
      <br />
      Feel free to check out my{" "}
      <Link link="/resume" color="gold">
        resume template here!
      </Link>{" "}
      {":)"}
      <br />
      <br />
      <br />
    </h1>
  );
};

export default SelfDescription;
