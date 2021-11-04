const Home: React.FC = () => {
  return (
    <section className="text-blue-200" style={{ minHeight: "100vh" }}>
      <img src="/logo192.png" alt="Logo-img" className="py-2" />
      <h1 className="text-7xl">
        hi,{" "}
        <span className="font-bold" style={{ color: "#19B5FE" }}>
          savar
        </span>{" "}
        here.
      </h1>
      <h2 className="mt-4 text-2xl max-w-3xl text-gray-400">
        I'm a high school senior who's passionate about Web Development,
        Artificial Intelligence, and Machine Learning.
      </h2>
      <br />
      <h3 className="text-xl text-gray-400">
        Feel free to check out my{" "}
        <a
          className="text-blue-500"
          href="/assets/SavarJain-Resume"
          target="_blank"
          rel="noopener noreferrer"
        >
          resume
        </a>{" "}
        or email me at{" "}
        <a
          className="text-blue-500"
          target="_blank"
          rel="noopener noreferrer"
          href="mailto:jainsavar@gmail.com"
        >
          jainsavar@gmail.com
        </a>
      </h3>
      {/* TODO: Replace font awesome with a custom svg icons */}

      <div className="flex justify-between w-32 mt-4">
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
