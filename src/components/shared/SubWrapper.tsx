import ComponentProps from "./ComponentProps";

const SubWrapper: React.FC<ComponentProps> = (props) => {
  return <section className="flex flex-col justify-center items-center space-y-24">{props.children}</section>;
};

export default SubWrapper;
