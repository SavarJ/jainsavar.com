import ComponentProps from "../../shared/ComponentProps";

const Paragraph: React.FC<ComponentProps> = (props) => {
  return <p className={`text-lg leading-relaxed text-gray-300 ${props.className}`}>{props.children}</p>;
};

export default Paragraph;
