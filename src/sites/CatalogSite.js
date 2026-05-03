import React from 'react'
import '../styles/GlobalStyles.css'
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import catalogo from '../pdf/catalogo.pdf'

function CatalogSite() {
  return (
    <div id='catalog'>
      <Container className='catalog-container' fluid>
        <Row className='row-container'>
          <Col>REVISA     <br/> NUESTROS      <br/>PAQUETES</Col>
          <Col className="downloads">
          <a href={catalogo}>  <i class="bi bi-download"></i></a>
          <br/>
          Descarga nuestro catálogo</Col>
        </Row>
      </Container>
    </div>
  )
}

export default CatalogSite