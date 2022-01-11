import ComponentProps from "./ComponentProps";

const SectionBody: React.FC<ComponentProps> = (props) => {
  const className = `max-w-3xl text-gray-400 mt-8 font-rubik ${props.className}`;
  return <div className={className}>{props.children}</div>;
};

export default SectionBody;
