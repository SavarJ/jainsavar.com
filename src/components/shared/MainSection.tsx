import ComponentProps from "./ComponentProps";

const MainSection: React.FC<ComponentProps> = (props) => {
  return (
    <main className="px-12 max-w-full pt-16 pb-8 flex flex-col justify-center items-center space-y-24 bg-gradient-to-b from-black to-myblue">
      {props.children}
    </main>
  );
};

export default MainSection;
