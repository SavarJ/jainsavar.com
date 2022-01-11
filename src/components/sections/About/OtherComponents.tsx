import ComponentProps from "../../shared/ComponentProps";

const Paragraph: React.FC<ComponentProps> = (props) => {
  return (
    <p className={`text-lg leading-relaxed text-gray-300 sm:text-justify ${props.className}`}>
      {props.children}
    </p>
  );
};

export default Paragraph;
