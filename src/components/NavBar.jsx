import React from 'react'
import CartWidget from './CartWidget'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const NavBar = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Hurlingaming</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features">Conocenos</Nav.Link>
              <Nav.Link href="#pricing">Locales</Nav.Link>
              <NavDropdown title="Productos" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Procesadores</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                 Placas de Video
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Memorias Ram</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link eventKey={2} href="#memes">
                <CartWidget />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default NavBar