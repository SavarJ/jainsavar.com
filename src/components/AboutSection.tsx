import Link from "./Link";
import { NormalSection, SectionTitle, SectionBody } from "./Components";
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
  return (
    <p className={`text-lg tracking-wide leading-relaxed text-gray-300 ${props.class}`}>{props.children}</p>
  );
};

const FirstParagraph: React.FC = () => {
  return (
    <>
      <img src="/coding.png" alt="img" className="pr-8 pb-4 w-36 float-left " />
      <Paragraph>
        Hello! I'm Savar Jain, currently a senior at{" "}
        <Link link="http://https://en.wikipedia.org/wiki/Westhill_High_School_(Connecticut)" color={"brown"}>
          Westhill High School (CT)
        </Link>
        . I have been programming for about <strong>3.5 years</strong> and have taken many Computer Science
        classes such as <strong>Data Structures & Algorithms</strong>, Cyber Security and AP CSA.
      </Paragraph>
      <img src="/rubiks-cube-3.gif" alt="img" className="pl-4 pt-4 w-36 float-right " />
      <br />
      <Paragraph>
        I am also a <strong> TA for DSA</strong>. I have a passion for software engineering and I am currently
        learning more about <strong>Artificial Intelligence and the Cloud</strong>.
      </Paragraph>
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
