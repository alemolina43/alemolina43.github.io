import { useState, useEffect } from "react";
import Alert from "react-bootstrap/Alert";
import useLoading from "./hooks/useLoading";
import Loading from "./components/Loading";
import NavBar from "./components/NavBar";
import LandinPage from "./components/LandingPage";
import About from "./components/About";
import ProjectList from "./components/ProjectList";
import ArticlesList from "./components/ArticlesList";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/App.scss";

function App() {
  const isLoading = useLoading();
  const [showAlert, setShowAlert] = useState(true);

  useEffect((duration = 7000) => {
    const alert = setTimeout(() => {
      setShowAlert(false);
    }, duration);

    return () => {
      clearTimeout(alert);
    };
  }, []);

  if (isLoading) {
    return <Loading />; // Show the spinner while isLoading is true
  }

  return (
    <>
      <NavBar />
      {showAlert && (
        <Alert key="primary" variant="primary">
          This is my digital playground where I&apos;m constantly experimenting
          and building new things. Expect to see fresh projects and updates
          regularly
        </Alert>
      )}
      <LandinPage />
      <About />
      <ProjectList />
      <ArticlesList />
    </>
  );
}

export default App;
