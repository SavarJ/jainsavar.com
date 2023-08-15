import ComponentProps from "./ComponentProps";

const MainWrapper: React.FC<ComponentProps> = (props) => {
  return (
    <main className="px-12 max-w-full pt-16 pb-24 flex flex-col justify-center items-center bg-gradient-to-b from-black to-myblue">
      {props.children}
    </main>
  );
};

export default MainWrapper;
