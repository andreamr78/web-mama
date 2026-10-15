
import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../images/logo.png';
import '../styles/GlobalStyles.css';

function TopBar() {
  const [expanded, setExpanded] = useState(false);

  const closeMenu = () => setExpanded(false);

  return (
    <div className="menu">
      <Navbar
        expand="lg"
        expanded={expanded}
        onToggle={(nextExpanded) => setExpanded(nextExpanded)}
        className="custom-navbar"
      >
        <Container fluid className="navbar-inner">
          <Navbar.Brand href="#intro" className="navbar-logo">
            <img
              className="logo-menu"
              src={logo}
              alt="VM Travel Adventures"
            />
          </Navbar.Brand>

          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            aria-label="Toggle navigation"
          />

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#intro" onClick={closeMenu}>
                Inicio
              </Nav.Link>

              <Nav.Link href="#travels" onClick={closeMenu}>
                Destinos
              </Nav.Link>

              <Nav.Link href="#catalog" onClick={closeMenu}>
                Paquetes
              </Nav.Link>

              <Nav.Link href="#socials" onClick={closeMenu}>
                Contáctanos
              </Nav.Link>

              <Nav.Link
                href="https://viaje.ly/vm-travel-adventures"
                onClick={closeMenu}
              >
                Ofertas
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default TopBar;
