import "../styles/App.scss";
import NavBar from "./components/NavBar";
import LandinPage from "./components/LandingPage";
import About from "./components/About";
import ProjectList from "./components/ProjectList";
import ArticlesList from "./components/ArticlesList";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <NavBar />
      <LandinPage />
      <About />
      <ProjectList />
      <ArticlesList />
      <Contact />
    </>
  );
}

export default App;
