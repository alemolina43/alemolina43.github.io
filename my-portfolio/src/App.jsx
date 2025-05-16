import "../styles/App.scss";
import NavBar from "./components/NavBar";
import LandinPage from "./components/LandingPage";
import About from "./components/About";
import ProjectList from "./components/ProjectList";
import Articles from "./components/Articles";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <NavBar />
      <LandinPage />
      <About />
      <ProjectList />
      <Articles />
      <Contact />
    </>
  );
}

export default App;
