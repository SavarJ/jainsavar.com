import Paragraph from "./OtherComponents";

const FirstParagraph: React.FC = () => {
  return (
    <>
      <img src="/coding.png" alt="Coding-img" className="pr-8 pb-4 w-36 sm:float-left" />
      <Paragraph>
        Hello! I'm Savar Jain, currently a senior at Westhill High School (CT) . I have been programming for
        about <strong>3.5 years</strong> and have taken many Computer Science classes such as{" "}
        <strong>Data Structures & Algorithms</strong>, Cyber Security and AP CSA.
      </Paragraph>
      <div className="flex flex-col sm:block">
        <img
          src="/rubiks-cube.gif"
          alt="Rubiks-cube-img2"
          className="sm:pl-4 pt-4 w-36 sm:float-right order-3"
        />
        <br className="order-1" />
        <Paragraph className="order-2">
          I am also a <strong> TA for DSA</strong>. I have a passion for Software Engineering and I am
          currently learning more about <strong>Artificial Intelligence and the Cloud</strong>.
        </Paragraph>
      </div>
    </>
  );
};

export default FirstParagraph;
