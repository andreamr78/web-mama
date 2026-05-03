import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../styles/introStyles.css'
import img1 from '../images/intro-img-1.png'
import img2 from '../images/intro-img-2.png'

function IntroSite() {
  return (
    <div id='intro'>
      <div className='intro-container'>
        <Row>
          <Col id='col-1' >
            <img id='img1' src={img1}/>
            <img id='img2' src={img2}/>
          </Col>
          <Col id='col-2' >
            <p className='title'>QUIENES SOMOS?</p>
            <p className='text'>
              Quienes somos? VM Travel & Adventures es una agencia de viajes regiomontana que nace con una visión clara: transformar cada viaje en una experiencia significativa, segura y memorable. Somos una agencia profesional, joven y confiable, respaldada por diversas certificaciones que avalan nuestro compromiso con la calidad y la excelencia en el servicio. Contamos con Registro Nacional de Turismo (RNT) y certificaciones por parte del CONOCER, lo que garantiza que operamos bajo estándares formales y actualizados de la industria.
              <br/>  <br/>
              Nos distinguimos por mantenernos en constante capacitación, lo que nos permite ofrecer asesoría especializada y soluciones personalizadas para cada viajero. Atendemos en español, inglés y lengua de señas mexicana, promoviendo una comunicación inclusiva y accesible. Además, brindamos el servicio de tramitación de visas de viajero a Estados Unidos (B1/B2), así como acompañamiento y preparación para la entrevista consular.
              <br/>  <br/>
              En VM Travel & Adventures no solo organizamos viajes: diseñamos experiencias con profesionalismo, cercanía y el orgullo de ser una agencia orgullosamente regiomontana.
            </p>
          </Col>
        </Row>
    </div>
    </div>
  )
}

export default IntroSite