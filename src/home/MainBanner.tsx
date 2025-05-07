import './MainBanner.css';
import slide1 from './../assets/images/foto1.jpg';
import slide2 from './../assets/images/foto2.jpg';
import slide3 from './../assets/images/foto3.jpg';

function MainBanner() {
  return (
    <div className="main-banner">
      <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={slide1} className="d-block w-100" alt="Transformación digital"/>
            <div className="carousel-caption d-none d-md-block custom-caption">
              <h1>Transformamos Ideas en Soluciones Digitales</h1>
              <p>
                Impulsamos tu negocio con innovación tecnológica. Desde estrategias digitales 
                hasta desarrollo de software a medida, hacemos realidad tus proyectos digitales.
              </p>
              <div className="banner-buttons">
                <button className="btn btn-primary">CONOCE MÁS</button>
                <button className="btn btn-light">CONTÁCTANOS</button>
              </div>
            </div>
          </div>

          <div className="carousel-item active">
            <img src={slide2} className="d-block w-100" alt="Desarrollo tecnológico"/>
            <div className="carousel-caption d-none d-md-block custom-caption">
              <h1>Expertos en Tecnología y Creatividad</h1>
              <p>
                Combinamos diseño, tecnología y estrategia para crear experiencias digitales 
                que conectan con tus clientes y potencian tu marca.
              </p>
              <div className="banner-buttons">
                <button className="btn btn-primary">NUESTROS SERVICIOS</button>
                <button className="btn btn-outline-light">PORTAFOLIO</button>
              </div>
            </div>
          </div>

          <div className="carousel-item active">
            <img src={slide3} className="d-block w-100" alt="Innovación digital"/>
            <div className="carousel-caption d-none d-md-block custom-caption">
              <h1>Innovación a tu Alcance</h1>
              <p>
                Soluciones personalizadas que se adaptan a tus necesidades. 
                Web, móvil, e-commerce, marketing digital y más.
              </p>
              <div className="banner-buttons">
                <button className="btn btn-success">COTIZA TU PROYECTO</button>
                <button className="btn btn-outline-light">CASOS DE ÉXITO</button>
              </div>
            </div>
          </div>
        </div>

        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default MainBanner;