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
        <div className='row-container'>
          Paquetes de viaje 
          <br/>
          Revisa este <a href='https://www.exoticca.com/mx?advisor_token=victoria-magaly-rodriguez-sanchez-01a06366-7f1c-7377-9c58-730d1ddeddcf'>Link</a>
        </div>
      </Container>
    </div>
  )
}

export default CatalogSite