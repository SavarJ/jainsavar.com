const Fade = require("react-reveal/Fade");
interface ComponentProps {
  children: React.ReactNode;
  class?: string;
}
const MainSection: React.FC<ComponentProps> = (props) => {
  return (
    <main className="max-w-full pt-16 pb-8 flex flex-col justify-center items-center space-y-24 bg-gradient-to-b from-black to-myblue">
      {props.children}
    </main>
  );
};
const FullSection: React.FC<ComponentProps> = (props) => {
  const className = `text-blue-200 h-screen ${props.class}`;
  return (
    <section className={className}>
      <Fade duration={2000} delay={100}>
        {props.children}
      </Fade>
    </section>
  );
};

const NormalSection: React.FC<ComponentProps> = (props) => {
  const className = `text-blue-200 ${props.class}`;
  return (
    <section className={className}>
      <Fade up duration={2000}>
        {props.children}
      </Fade>
    </section>
  );
};

const SectionTitle: React.FC<ComponentProps> = (props) => {
  const className = `text-5xl text-blue-200 font-bold ${props.class}`;
  return (
    <h1 className={className} style={{ color: "#19B5FE" }}>
      {props.children}
    </h1>
  );
};

const SectionBody: React.FC<ComponentProps> = (props) => {
  const className = `max-w-3xl text-gray-400 mt-8 ${props.class}`;
  return <div className={className}>{props.children}</div>;
};

export { FullSection, SectionTitle, SectionBody, NormalSection, MainSection };
