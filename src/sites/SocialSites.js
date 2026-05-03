import React from 'react'
import '../styles/GlobalStyles.css'
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function SocialSites() {
  return (
    <div id='socials'>
      <Container className='socials-container' fluid>
        <Row>
          <Col sm={6}>
          Contáctanos
          <br/>
          en nuestras redes
          <br/>
          sociales</Col>
          <Col className='socials-icons' sm={6}>
          <a href='https://www.facebook.com/profile.php?id=61581515318190'><i class="bi bi-facebook"></i></a>
          <a href='https://www.instagram.com/victoria_vmtravelandadventures?igsh=MTNnd2Z3eXA3YjZlaQ%3D%3D&utm_source=qr&wa_status_inline=true'> <i class="bi bi-instagram"></i></a>
          <a href='https://www.tiktok.com/@vm.travel.adventu?_r=1&_t=ZS-951DrVz6lSC'><i class="bi bi-tiktok"></i></a>
          <a href='https://wa.me/528115991769'> <i class="bi bi-whatsapp"></i></a>
          </Col>
        </Row>
        <p className='google-form'>Necesitas algo más? Llena nuestro <a href="https://forms.gle/S9tT6jngtW2wXRPa6">google form</a> para información más personalizada</p>
      </Container>
    </div>
  )
}

export default SocialSites