import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../images/logo.png'
import '../styles/GlobalStyles.css'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function TopBar() {
  const [expanded, setExpanded] = useState(false);
  return (
    <div className='menu'>
        <Navbar expand="lg" 
         expanded={expanded}
         onToggle={next => setExpanded(next)} 
        >
          <Container fluid>
          <Row className={`${expanded ? 'collapsed-navbar' : ' menu-row'}`} >
            <Col className='col-1'>
            <Navbar.Brand><img className='logo-menu' src={logo}/></Navbar.Brand>            
            </Col>
            <Col className='col-2'>
              <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#intro">Inicio</Nav.Link>
                <Nav.Link href="#travels">Destinos</Nav.Link>
                <Nav.Link href="#catalog">Paquetes</Nav.Link>
                <Nav.Link href="#socials">Contactanos</Nav.Link>
              </Nav>
            </Navbar.Collapse>
            </Col>
          </Row>
          </Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className='float-right'/>
        </Navbar>
    </div>
  );
}

export default TopBar