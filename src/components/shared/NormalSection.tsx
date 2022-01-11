import ComponentProps from "./ComponentProps";
const Fade = require("react-reveal/Fade");

const NormalSection: React.FC<ComponentProps> = (props) => {
  const className = `text-blue-200 ${props.className}`;
  return (
    <section className={className}>
      <Fade up duration={2000}>
        {props.children}
      </Fade>
    </section>
  );
};

export default NormalSection;
