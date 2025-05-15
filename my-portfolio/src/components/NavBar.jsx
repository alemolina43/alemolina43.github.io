import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { LuBrainCircuit } from "react-icons/lu";
import "../../styles/NavBar.scss";

function NavBar() {
  return (
    <nav className="nav-bar">
      <div className="logo">
        <a href="#home" className="navbar-brand">
          <LuBrainCircuit />
          Ale Gutierrez
        </a>
      </div>

      <div className="nav">
        <a href="#about" className="nav-link">
          About
        </a>
        <a href="#projects" className="nav-link">
          Projects
        </a>
        <a href="#writing" className="nav-link">
          Writing
        </a>
        <a href="#contact" className="nav-link">
          Contact
        </a>
      </div>
    </nav>
  );
}

export default NavBar;
