import { Navbar, Nav, Container } from "react-bootstrap";
import Logo from "../assets/logo.png";
import "../../styles/NavBar.scss";

function NavBar() {
  return (
    <Navbar expand="lg" variant="light" sticky="top">
      <Container>
        <Navbar.Brand href="#home">
          <img className="logo" src={Logo} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="main-navbar-nav" />
        <Navbar.Collapse id="main-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#writing">Writing</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
