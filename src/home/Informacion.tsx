import './Informacion.css';

const Informacion = () => {
  return (
    <div className="informacion-container">
      <div className="vc_row wpb_row vc_row-fluid vc_custom_row">
        {/* Columna 1 - Diseño Web */}
        <div className="wpb_column vc_column_container vc_col-sm-4">
          <div className="vc_column-inner">
            <div className="wpb_wrapper">
              <div className="wpb_single_image wpb_content_element vc_align_left">
                <figure className="wpb_wrapper vc_figure">
                  <div className="vc_single_image-wrapper vc_box_border_grey">
                    <img 
                      decoding="async" 
                      src="https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-1.2.1&auto=format&fit=crop&w=737&h=461" 
                      className="vc_single_image-img" 
                      alt="Diseño Web Profesional" 
                    />
                  </div>
                </figure>
              </div>
              
              <h4 className="heading-content style-1">
                <span>DISEÑO WEB PROFESIONAL</span>
              </h4>
              
              <div className="vc_empty_space">
                <span className="vc_empty_space_inner"></span>
              </div>
              
              <div className="wpb_text_column wpb_content_element">
                <div className="wpb_wrapper">
                  <p>Creamos sitios web impactantes que convierten visitantes en clientes. Diseños responsivos, optimizados para SEO y con la mejor experiencia de usuario.</p>
                </div>
              </div>
              
              <div className="vc_empty_space">
                <span className="vc_empty_space_inner"></span>
              </div>
              
              <button className="btn btn-sm style-4">
                Ver portafolio
              </button>
            </div>
          </div>
        </div>
        
        {/* Columna 2 - Marketing Digital */}
        <div className="wpb_column vc_column_container vc_col-sm-4">
          <div className="vc_column-inner">
            <div className="wpb_wrapper">
              <div className="wpb_single_image wpb_content_element vc_align_left">
                <figure className="wpb_wrapper vc_figure">
                  <div className="vc_single_image-wrapper vc_box_border_grey">
                    <img 
                      decoding="async" 
                      src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=737&h=461" 
                      className="vc_single_image-img" 
                      alt="Marketing Digital" 
                    />
                  </div>
                </figure>
              </div>
              
              <h4 className="heading-content style-1">
                <span>MARKETING DIGITAL</span>
              </h4>
              
              <div className="vc_empty_space">
                <span className="vc_empty_space_inner"></span>
              </div>
              
              <div className="wpb_text_column wpb_content_element">
                <div className="wpb_wrapper">
                  <p>Estrategias digitales personalizadas para aumentar tu presencia online. SEO, publicidad en redes sociales, email marketing y análisis de datos.</p>
                </div>
              </div>
              
              <div className="vc_empty_space">
                <span className="vc_empty_space_inner"></span>
              </div>
              
              <button className="btn btn-sm style-4">
                Conocer más
              </button>
            </div>
          </div>
        </div>
        
        {/* Columna 3 - Desarrollo a Medida */}
        <div className="wpb_column vc_column_container vc_col-sm-4">
          <div className="vc_column-inner">
            <div className="wpb_wrapper">
              <div className="vc_row wpb_row vc_inner vc_row-fluid vc_custom_inner_row">
                <div className="text-center wpb_column vc_column_container vc_col-sm-12">
                  <div className="vc_column-inner vc_custom_inner_column">
                    <div className="wpb_wrapper">
                      <h2 className="vc_custom_heading">
                        SOLUCIONES A MEDIDA
                      </h2>
                      <p className="vc_custom_heading subtitle">
                        Software empresarial personalizado
                      </p>
                      <div className="vc_empty_space custom-space-20"></div>
                      <img 
                        src="https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=200" 
                        className="custom-image" 
                        alt="Desarrollo a medida" 
                      />
                      <p>Desarrollamos software empresarial adaptado a tus procesos específicos para optimizar tu operación.</p>
                      <div className="vc_empty_space custom-space-15"></div>
                      <button className="btn btn-sm style-4">
                        Solicitar demo
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sección Parallax con contenido centrado */}
      <div className="parallax-section">
        <div className="parallax-content">
          <h3 className="parallax-title">
            ALCANZA TU MÁXIMO POTENCIAL
          </h3>
          <p className="parallax-text">
            Nos encargaremos de tus necesidades digitales para que puedas enfocarte en tu negocio.
          </p>
          <a href="#contacto" className="btn btn-md style-1 parallax-button">
            Contáctanos
          </a>
        </div>
        <div className="parallax-bg"></div>
      </div>
    </div>
  );
};

export default Informacion;