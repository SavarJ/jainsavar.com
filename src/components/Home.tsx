const Home: React.FC = () => {
  return (
    <section className="" style={{ color: "#19B5FE" }}>
      <h1>hi, savar here.</h1>
      <h2>
        I'm a high school senior who's passionate about Computer Science and
        Software Engineering.
      </h2>
      <br />
      <h3>
        Feel free to check out my{" "}
        <a
          href="/assets/SavarJain-Resume"
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume
        </a>{" "}
        or email me at{" "}
        <a href="mailto:jainsavar@gmail.com">jainsavar@gmail.com</a>
      </h3>

      {/* TODO: Replace font awesome with a custom svg icons */}

      <div className="">
        <a href="https://github.com/SavarJ">
          <i className="fa fa-github"></i>
        </a>
        <a href="https://linkedin.com/in/savarjain">
          <i className="fa fa-linkedin"></i>
        </a>
        <a href="https://twitter.com/SavarJain">
          <i className="fa fa-twitter"></i>
        </a>
        <a href="mailto:jainsavar@gmail.com">
          <i className="fa fa-envelope"></i>
        </a>
      </div>
    </section>
  );
};

export default Home;
