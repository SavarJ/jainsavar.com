import { NormalSection, SectionTitle, SectionBody } from "./Components";
import "./custom.css";
const AboutSection: React.FC = () => {
  return (
    <NormalSection>
      <SectionTitle>{"<About />"}</SectionTitle>
      <SectionBody>
        <FirstParagraph />
        <br />
        <SecondParagraph />
      </SectionBody>
    </NormalSection>
  );
};
interface ComponentProps {
  children: React.ReactNode;
  class?: string;
}
const Paragraph: React.FC<ComponentProps> = (props) => {
  return <p className={`text-lg leading-relaxed text-gray-300 ${props.class}`}>{props.children}</p>;
};

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
        <Paragraph class="order-2">
          I am also a <strong> TA for DSA</strong>. I have a passion for Software Engineering and I am
          currently learning more about <strong>Artificial Intelligence and the Cloud</strong>.
        </Paragraph>
      </div>
    </>
  );
};

const SecondParagraph: React.FC = () => {
  return (
    <>
      <Paragraph>
        When I'm not coding, you can find me tutoring Computer Science, playing the guitar, solving Rubik's
        Cubes, or watching a movie.
      </Paragraph>
    </>
  );
};

export default AboutSection;
