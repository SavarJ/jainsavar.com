import NormalSection from "../../shared/NormalSection";
import SectionTitle from "../../shared/SectionTitle";
import SectionBody from "../../shared/SectionBody";
import FirstParagraph from "./FirstParagraph";
import SecondParagraph from "./SecondParagraph";

const AboutSection: React.FC = () => {
  return (
    <NormalSection id="about" className="pt-8">
      <SectionTitle>{"<About />"}</SectionTitle>
      <SectionBody>
        <FirstParagraph />
        <br />
        <SecondParagraph />
      </SectionBody>
    </NormalSection>
  );
};

export default AboutSection;
