import React from "react";
import Navbar from "./Navbar";
import About from "./About";
import Projects from "./Projects";
import Skills from "./Skills";
// import Contact from "./Contact";
// import Footer from "./Footer";

const App: React.FC = () => {
  return (
    <main>
      <Navbar />
          <About />
      <Projects />
      <Skills />
      {/* <Contact /> */}
      {/* <Footer /> */}
    </main>
  );
};

export default App;
