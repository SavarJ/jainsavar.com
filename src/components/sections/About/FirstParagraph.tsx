import { useState } from "react";
import Paragraph from "./OtherComponents";

const FirstParagraph: React.FC = () => {
  return (
    <>
      <img src="/coding.png" alt="Coding-img" className="pr-8 pb-4 w-36 sm:float-left" />
      <Paragraph>
        Hello! I'm Savar Jain, currently an undergraduate student majoring in Computer Science @ University of
        Connecticut. I have been programming for about <NumberOfYearsOfProgramming />. Currently I am
        interning at Headstarter, where I'm working full stack engineer.
        {/* Last year, I was a TA for{" "}
        <strong>Data Structures & Algorithms</strong>. */}
      </Paragraph>
      <div className="flex flex-col sm:block">
        <img
          src="/rubiks-cube.gif"
          alt="Rubiks-cube-img2"
          className="sm:pl-4 pt-4 w-36 sm:float-right order-3"
        />
        <br className="order-1" />
        <Paragraph className="order-2">
          I have a passion for Software Engineering and I am currently learning more about{" "}
          <strong>Artificial Intelligence and Cloud Computing</strong>.
        </Paragraph>
      </div>
    </>
  );
};

const NumberOfYearsOfProgramming: React.FC = () => {
  const [years, setYears] = useState(() => {
    const startDate = new Date("2018-05-01");
    const currentDate = new Date();
    const diff = currentDate.getTime() - startDate.getTime();
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const years = days / 365;
    return Math.round(years);
  });

  return (
    <span>
      <strong>{years} years</strong>
    </span>
  );
};

export default FirstParagraph;
