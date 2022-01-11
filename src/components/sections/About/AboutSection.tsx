import { NormalSection, SectionTitle, SectionBody } from "../../shared/Components";
import FirstParagraph from "./FirstParagraph";
import SecondParagraph from "./SecondParagraph";
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

export default AboutSection;
