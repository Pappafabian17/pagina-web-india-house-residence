import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import NavDropdown from "react-bootstrap/NavDropdown";

export default function NavBar() {
  return (
    <Navbar expand="lg" className="custom-bg-color navbar-dark">
      <Container fluid>
        <img
          src="../../assets/img/india-house-logo.png"
          alt="Logo"
          width="300"
          height="120"
          className="d-inline-block align-top"
        />
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto my-2 my-lg-0"
            style={{ maxHeight: "100%" }}
            navbarScroll
          >
            <Nav.Link href="#action1" className="text-white fs-4 me-3">
              Musica
            </Nav.Link>
            <Nav.Link href="#action2" className="text-white fs-4 me-3">
              Eventos
            </Nav.Link>
            <Nav.Link href="#action3" className="text-white fs-4 me-3">
              Colaboradores
            </Nav.Link>
            <Nav.Link href="#action4" className="text-white fs-4 me-3">
              Contacto
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
