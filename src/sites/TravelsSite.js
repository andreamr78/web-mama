import React from 'react'
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import block1 from '../images/block1.png';
import block2 from '../images/block2.png';
import block3 from '../images/block3.png';
import block4 from '../images/block4.png';
import block5 from '../images/block5.png';
import block6 from '../images/block6.png';
import block7 from '../images/block7.png';
import block8 from '../images/block8.png';
import block9 from '../images/block9.png';
import DestinationBlocks from '../components/DestinationBlocks';

function TravelsSite() {
  const places = [
    {img: block1, name: 'EUROPA', text:'Europa te espera con su historia milenaria y una mezcla de culturas fascinantes: desde los castillos medievales de Alemania hasta la Torre Eiffel en París, pasando por playas del Mediterráneo y los Alpes suizos. Cada ciudad ofrece rincones dignos de Instagram, gastronomía deliciosa y tradiciones únicas. Explora todo esto con nuestros circuitos perfectos —o personalizados si prefieres— con salidas desde las principales ciudades de México y EE. UU. (con o sin vuelo incluido). ¡Viaja con VM Travel & Adventures y haz que cada foto sea inolvidable!'},
    {img: block2, name: 'SUDAMÉRICA', text:'Sudamérica es un carnaval de paisajes vibrantes y culturas milenarias: desde Machu Picchu en Perú hasta la Amazonía, las cataratas del Iguazú y las playas tropicales de Brasil. Sus colores intensos y tradiciones acogedoras te harán vibrar, y cada rincón es un espectáculo digno de tu feed de Instagram. En VM Travel & Adventures preparamos circuitos perfectos (y también a medida) con o sin vuelo desde las principales ciudades de México y EE. UU. para que vivas esta aventura latinoamericana al máximo.'},
    {img: block3, name: 'NORTEAMÉRICA', text:'Norteamérica combina ciudades futuristas con naturaleza imponente: recorre Nueva York, Los Ángeles o Chicago y maravíllate con el Gran Cañón o los Parques Nacionales. Cada lugar ofrece paisajes dignos de capturar, calles llenas de historia y experiencias que te harán decir “¡wow!”. Nuestros circuitos en Norteamérica están diseñados para tu comodidad y aventura, con itinerarios perfectos que podemos personalizar, saliendo con o sin vuelo desde México y EE. UU. Para viajar con estilo, ¡solo falta tu selfie de recuerdo!'},
    {img: block4, name: 'CENTROAMERICA', text:'Centroamérica te invita a explorar selvas misteriosas, volcanes activos y playas paradisíacas: imagina recorrer las ruinas mayas de Guatemala, surfear en las olas de Costa Rica o bucear en las aguas turquesas del Caribe hondureño. Sus culturas vibrantes y naturaleza exuberante garantizan vistas instagrameables en cada paso. En VM Travel & Adventures ofrecemos circuitos ideales —y totalmente ajustables según tus gustos— con salidas desde las principales ciudades de México y EE. UU. (con o sin vuelo) para que tu aventura centroamericana sea tal como la sueñas.'},
    {img: block5, name: 'ASIA', text:'Asia es un continente de contrastes increíbles: pasa de los templos milenarios de Kioto a los elefantes de Tailandia, del Gran Muralla China a los mercados llenos de especias en la India. Cada destino asiático mezcla modernidad con tradición, ofreciendo miles de rincones “insta-ready”. Tenemos los circuitos perfectos en Asia, y además los podemos personalizar a tu estilo, con vuelos incluidos o sin vuelo desde las principales ciudades de México y Estados Unidos. Embárcate con VM Travel & Adventures en el viaje asiático de tus sueños.'},
    {img: block6, name: 'CRUCEROS', text:'Navega los siete mares con los cruceros más emocionantes: en VM Travel & Adventures tenemos conexión con las mejores navieras del mundo, como MSC, Cunard, Virgin Voyages, Princess, Royal Caribbean, Costa, Disney Cruise Line, Norwegian, Azamara, Carnival y Celebrity. Ofrecemos rutas increíbles por el Caribe, el Mediterráneo, Alaska y más, con itinerarios perfectos y opciones personalizadas. ¡Combina diversión y relax a bordo, con paquetes flexibles que incluyen vuelo o solo crucero según tu plan!'},
    {img: block7, name: 'PARQUE TEMÁTICO', text:'¡Vive la magia en cada parque temático! Desde las montañas rusas de Orlando hasta la fantasía de Disneyland Paris o los parques acuáticos más alucinantes, cada día es una aventura. En VM Travel & Adventures armamos paquetes a tu medida, incluyendo hotel más tickets de entrada según tus gustos y necesidades. Olvídate del estrés: dinos qué buscas y te llevamos directo a la diversión, sin preocuparte por nada más'},
    {img: block8, name: 'NACIONALES', text:'Descubre lo mejor de México con circuitos diseñados para enamorarte de su cultura: playas caribeñas de Cancún, ruinas mayas de Chichén Itzá, cantinas de la CDMX y los coloridos pueblos mágicos. Nuestro país ofrece paisajes increíbles e historia en cada rincón, dignos de compartir en Instagram. Con VM Travel & Adventures podrás elegir entre circuitos perfectos o personalizados, con salidas desde cualquier ciudad principal de México o EE. UU. (con o sin vuelo), para vivir México a tu ritmo y estilo.'},
    {img: block9, name: 'VISITAS GUIADAS', text:'¿Buscas algo más flexible? Explora a pie o en tours privados con nuestros paquetes de visitas terrestres. Desde city tours en ciudades icónicas hasta excursiones guiadas por maravillas naturales, tenemos opciones que se adaptan a ti. Ya sea un tour de un día o de varios días sin vuelo, te ayudamos a elegir el itinerario ideal. ¡Solo dinos qué quieres vivir, y organizamos la aventura perfecta para ti!'},
  ];
  return (
    <div id='travels'>
      <Container className='travel-container' fluid>
        <Row>
        <p className='title text-center'>DESTINOS</p>
        <h6 className='text-center'>(Haz click en cada imagen para más información)</h6>
        <br/>
             <br/>
          {places.map(place => (
            <Col lg={4} md={8} className="mb-4">
              <DestinationBlocks props={place}/>
          </Col>
          ))}
        </Row>
      </Container>
    </div>
  )
}

export default TravelsSite