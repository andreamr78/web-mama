import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import logo from '../images/logo.png';
import '../styles/topSiteStyles.css'
import TopBar from '../components/TopBar';

function TopSite() {
  return (
    <div className='main'>
      <TopBar/>
          <div className='texts'>
            <Row>
              <Col className='top-text'>VIAJA</Col>
            </Row>
            <Row>
              <Col className='bottom-text'>A TU GUSTO</Col>
            </Row>
             <Row className='bottom-columns'>
              <Col className='hashtag'>#TuInterpreteViajera</Col>
            </Row>
          </div>
        <Row className='logo-col'><img className='logo' src={logo}/></Row>
    </div>
  )
}

export default TopSite