import Home from "./Home";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Footer from "./Footer";

const App: React.FC = () => {
  return (
    // dark mode
    <main
      className="max-w-full pt-16 pb-8 flex flex-col justify-center items-center bg-gradient-to-b from-black to-myblue"
      // style={{ backgroundColor: "#0a192f" }}
    >
      <Home />
      <About />
      <Skills />
      <Projects />
      <Footer />
    </main>
  );
};

export default App;
