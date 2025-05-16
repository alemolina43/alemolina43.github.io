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

      <ul className="nav">
        <li>
          <a href="#about" className="nav-link">
            About
          </a>
        </li>
        <li>
          <a href="#projects" className="nav-link">
            Projects
          </a>
        </li>
        <li>
          <a href="#writing" className="nav-link">
            Writing
          </a>
        </li>
        <li>
          {" "}
          <a href="#contact" className="nav-link">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
