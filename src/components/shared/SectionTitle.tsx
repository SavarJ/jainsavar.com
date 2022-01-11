import ComponentProps from "./ComponentProps";

const SectionTitle: React.FC<ComponentProps> = (props) => {
  const className = `text-5xl text-blue-200 font-bold font-zb ${props.className}`;
  return (
    <h1 className={className} style={{ color: "#19B5FE" }}>
      {props.children}
    </h1>
  );
};

export default SectionTitle;
