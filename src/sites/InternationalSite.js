import React from 'react';
import Container from 'react-bootstrap/Container';

function InternationalSite() {
  return (
    <div id="internacionales" style={{ marginTop: '3rem', marginBottom: '3rem' }}>
      <Container fluid style={{ padding: '0 2rem' }}>
        <p className="title text-center">INTERNACIONALES</p>
        <div style={{ width: '100%', maxWidth: '100%', borderRadius: '25px', overflow: 'hidden', backgroundColor: '#EBD0B9' }}>
          <iframe
            title="Viajes Internacionales"
            src="https://iframe.nefertaritravel.com.mx/?cp=76543B&cs=ECD1BA&cf=EBD0B9"
            style={{ width: '100%', height: '900px', border: 0, display: 'block', backgroundColor: '#EBD0B9' }}
            loading="lazy"
          ></iframe>
        </div>
      </Container>
    </div>
  );
}

export default InternationalSite;
