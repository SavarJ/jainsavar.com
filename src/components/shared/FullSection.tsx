import ComponentProps from "./ComponentProps";

const FullSection: React.FC<ComponentProps> = (props) => {
  const className = `text-blue-200 min-h-screen -mb-20 ${props.className}`;
  return <section className={className}>{props.children}</section>;
};

export default FullSection;
