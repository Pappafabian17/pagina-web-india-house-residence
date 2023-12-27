import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import NavDropdown from "react-bootstrap/NavDropdown";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <Navbar expand="lg" className="custom-bg-color navbar-dark">
      <Container fluid>
        <Nav.Link href="/#">
          <img
            src="../../assets/img/india-house-logo.png"
            alt="Logo"
            width="300"
            height="120"
            className="d-inline-block align-top"
          />
        </Nav.Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto my-2 my-lg-0"
            style={{ maxHeight: "100%" }}
            navbarScroll
          >
            <Nav.Link href="/#" className="text-white fs-4 me-3">
              Inicio
            </Nav.Link>
            <Nav.Link href="/eventos" className="text-white fs-4 me-3">
              Eventos
            </Nav.Link>
            <Nav.Link href="/colaboradores" className="text-white fs-4 me-3">
              Colaboradores
            </Nav.Link>
            <Nav.Link href="/about" className="text-white fs-4 me-3">
              Sobre Nosotros
            </Nav.Link>
            <Nav.Link href="https://us21.list-manage.com/contact-form?u=8f6c801822838c236cbb87dfa&form_id=1e07e3ab04bd06831bc5764a1a4db716" className="text-white fs-4 me-3">
              Contacto
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
