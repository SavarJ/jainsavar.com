interface ComponentProps {
  children: React.ReactNode;
  class?: string;
}
const Paragraph: React.FC<ComponentProps> = (props) => {
  return <p className={`text-lg leading-relaxed text-gray-300 ${props.class}`}>{props.children}</p>;
};

export default Paragraph;
