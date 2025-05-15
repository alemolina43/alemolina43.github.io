import "../styles/App.scss";
import NavBar from "./components/NavBar";
import About from "./components/About";
import Projects from "./components/Projects";
import Articles from "./components/Articles";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <NavBar />
      <div className="phrase-container">
        <h1>
          Building websites that won’t crash—
          <span className="bolded-phrase">
            unless you&apos;re trying to break them!
          </span>
        </h1>
      </div>
      <About />
      <Projects />
      <Articles />
      <Contact />
    </>
  );
}

export default App;
