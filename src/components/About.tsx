import Link from "./Link";

const About: React.FC = () => {
  return (
    <section>
      <h1
        className="text-5xl text-blue-200 font-bold"
        style={{ color: "#19B5FE" }}
      >
        {"<About />"}
      </h1>
      <div className="max-w-3xl text-gray-400 mt-4">
        <p>
          Hello! I'm Savar Jain, currently a senior at{" "}
          <Link link="http://https://en.wikipedia.org/wiki/Westhill_High_School_(Connecticut)">
            {" "}
            Westhill High School (CT)
          </Link>
          . I have taken many CS classes such as Data Structures & Algorithms,
          Cyber Security and AP CSA. I am currently a TA for DSA I have a
          passion for software engineering and I am currently learning more
          about Artificial Intelligence and Machine Learning.
        </p>
        <br />
        <p>
          When I'm not coding, you can find me tutoring Computer Science,
          playing the guitar, solving Rubik's Cubes, or watching a movie.
        </p>
      </div>
    </section>
  );
};

export default About;
