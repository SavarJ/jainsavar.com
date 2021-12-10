import Home from "./Home";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";
// import Footer from "./Footer";

const App: React.FC = () => {
  return (
    <main
      className="max-w-full py-16 flex flex-col justify-center items-center"
      style={{ backgroundColor: "#0a192f" }}
    >
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
      {/* <Footer /> */}
    </main>
  );
};

export default App;
