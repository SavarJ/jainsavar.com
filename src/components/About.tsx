const About: React.FC = () => {
  return (
    <section style={{ minHeight: "100vh" }}>
      <h1 className="text-4xl">console.log("about");</h1>
      {/* !TODO: Animation of aspriring software engineer, high schooler, web developer, etc... */}
      <div className="max-w-4xl">
        <p>
          I'm currently a senior at Westhill High School. I have taken classes
          such as Data Structures & Algorithms, Cyber Security and AP CSA. I am
          currently a TA for DSA I have a passion for software engineering and I
          am currently learning more about Artificial Intelligence and Machine
          Learning.
        </p>
        <p>
          When I'm not coding, you can find me tutoring Computer Science,
          volunteering, playing the guitar, solving Rubik's Cubes, or watching a
          movie.
        </p>
      </div>
    </section>
  );
};

export default About;
