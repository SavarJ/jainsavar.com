import React from "react";
// import Navbar from "./Navbar";
// import About from "./About";
// import Projects from "./Projects";
// import Skills from "./Skills;
// import Contact from "./Contact";
// import Footer from "./Footer";

const App: React.FC = () => {
  return (
    <main className="max-w-full">
      {/* Under construction page */}
      <div className="min-h-screen flex items-center justify-center flex-col p-5 text-center">
        <h1 className="font-bold text-5xl p-3 text-blue-700">Savar Jain</h1>
        <h1>
          I am still in the process of building this personal portfolio site.
        </h1>
        <hr className="border-2 h-1 w-full my-3" />
        <h2>In the mean time, check out:</h2>
        <div className="flex w-48 justify-evenly text-blue-800 pt-2">
          <a href="https://github.com/SavarJ">
            <i className="fa fa-github"></i>
          </a>
          <a href="https://linkedin.com/in/savarjain">
            <i className="fa fa-linkedin"></i>
          </a>
          <a href="mailto:jainsavar@gmail.com">
            <i className="fa fa-envelope"></i>
          </a>
        </div>
      </div>

      {/* <Navbar /> */}
      {/* <About /> */}
      {/* <Projects /> */}
      {/* <Skills /> */}
      {/* <Contact /> */}
      {/* <Footer /> */}
    </main>
  );
};

export default App;
