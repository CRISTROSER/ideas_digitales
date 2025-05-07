import { useState } from 'react';
import { FaGlobe, FaFileInvoiceDollar, FaBookmark } from 'react-icons/fa';
import './Servicios.css';
import './Solutions.css';
import './IdeasDigitalesSection.css';



interface FormData {
  name: string;
  email: string;
  phone: string;
  employees: string;
  vat: string;
  outgoing: string;
  incoming: string;
}

const Servicios = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    employees: '',
    vat: 'Cumplimiento de IVA',
    outgoing: '',
    incoming: ''
  });
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};
    if (!formData.name.trim()) newErrors.name = 'Este campo es requerido';
    if (!formData.email.trim()) {
      newErrors.email = 'Este campo es requerido';
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'Ingrese un email válido';
    }
    if (!formData.phone.trim()) newErrors.phone = 'Este campo es requerido';
    if (!formData.employees.trim()) newErrors.employees = 'Este campo es requerido';
    if (!formData.outgoing.trim()) newErrors.outgoing = 'Este campo es requerido';
    if (!formData.incoming.trim()) newErrors.incoming = 'Este campo es requerido';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      console.log(formData);
      alert('Formulario enviado con éxito. Nos pondremos en contacto pronto.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const services = [
    {
      icon: <FaGlobe />,
      title: 'Desarrollo Web',
      description: 'En Ideas Digitales creamos sitios web a medida que reflejan la esencia de tu marca. Nuestros diseños son responsivos, modernos y optimizados para SEO.'
    },
    {
      icon: <FaFileInvoiceDollar />,
      title: 'Marketing Digital',
      description: 'Potenciamos tu presencia online con estrategias personalizadas de redes sociales, Google Ads y contenido de valor que conecta con tu audiencia.'
    },
    {
      icon: <FaBookmark />,
      title: 'Consultoría Tecnológica',
      description: 'Te ayudamos a digitalizar tu negocio con soluciones tecnológicas adaptadas a tus necesidades, mejorando procesos y aumentando tu productividad.'
    }
  ];

  return (
    <>
      <div className="servicios-container">
        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card" key={`service-${index}`}>
              <div className="service-icon">
                {service.icon}
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>


        <section className="solutions-section">
  <div className="solutions-overlay"></div>
  <div className="solutions-container">
    <p className="solutions-subtitle">Te ayudamos a resolver tus desafíos digitales</p>
    <h2 className="solutions-title">
      Las mejores soluciones para impulsar tu negocio
    </h2>

    <div className="solutions-grid">
      <div className="solution-card">
        <h3 className="solution-card-title">
          Transformación digital a tu medida
        </h3>
        <p className="solution-card-text">
          En Ideas Digitales desarrollamos estrategias personalizadas para llevar tu negocio al siguiente nivel. 
          Nuestros expertos analizan tus necesidades y crean soluciones tecnológicas que se adaptan perfectamente a tus objetivos.
          <br />
          <br />
          Desde sitios web profesionales hasta sistemas de automatización, te acompañamos en cada paso de tu evolución digital.
        </p>
      </div>

      <div className="solution-card">
        <h3 className="solution-card-title">
          Maximiza tu presencia online
        </h3>
        <p className="solution-card-text">
          Potenciamos tu visibilidad en internet con estrategias de marketing digital efectivas. 
          Creamos campañas segmentadas que conectan con tu público objetivo y generan resultados medibles.
          <br />
          <br />
          Nuestro equipo combina creatividad y análisis de datos para ofrecerte la mejor relación costo-beneficio en tus inversiones digitales.
        </p>
      </div>
    </div>
  </div>
</section>

<section className="ideas-container">
      <div className="ideas-content">
        {/* Imagen desde internet */}
        <div className="ideas-imagen">
          <img
            src="https://anpsthemes.com/accounting-demo-9/wp-content/uploads/2014/11/p1-9.jpg"
            alt="Equipo Ideas Digitales"
          />
        </div>

        {/* Texto */}
        <div className="ideas-texto">
          <h2 className="ideas-titulo">Obtén una Cotización Gratuita</h2>
          <p className="ideas-subtitulo">¡Te responderemos lo antes posible!</p>

          <div className="ideas-items">
            <div className="ideas-item">
              <h3 className="ideas-item-titulo">Gestión de Proyectos Web</h3>
              <p className="ideas-item-descripcion">
                En Ideas Digitales desarrollamos sitios web personalizados, optimizados y escalables que impulsan la presencia en línea de tu negocio. Adaptamos cada proyecto a tus necesidades.
              </p>
            </div>
            <div className="ideas-item">
              <h3 className="ideas-item-titulo">Automatización y Marketing Digital</h3>
              <p className="ideas-item-descripcion">
                Automatizamos tus procesos y diseñamos campañas de marketing digital efectivas. Mejora tu alcance, fideliza clientes y aumenta conversiones con nuestras estrategias digitales.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>



        <div className="form-container">
          <form onSubmit={handleSubmit} className="get-a-quote-horizontal">
            <h2 className="form-title">
              Solicita un presupuesto personalizado
            </h2>
            
            <div className="form-wrap">
              <div className="form-group">
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Nombre / Nombre de empresa"
                  className={`wpcf7-form-control ${errors.name ? 'error-border' : ''}`}
                />
                {errors.name && <span className="error-message">{errors.name}</span>}
              </div>
              
              <div className="form-group">
                <input
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Correo electrónico"
                  className={`wpcf7-form-control ${errors.email ? 'error-border' : ''}`}
                  type="email"
                />
                {errors.email && <span className="error-message">{errors.email}</span>}
              </div>
              
              <div className="form-group">
                <input
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Número de contacto"
                  className={`wpcf7-form-control ${errors.phone ? 'error-border' : ''}`}
                  type="tel"
                />
                {errors.phone && <span className="error-message">{errors.phone}</span>}
              </div>
              
              <div className="form-group">
                <input
                  name="employees"
                  value={formData.employees}
                  onChange={handleChange}
                  placeholder="Tamaño de tu empresa"
                  className={`wpcf7-form-control ${errors.employees ? 'error-border' : ''}`}
                />
                {errors.employees && <span className="error-message">{errors.employees}</span>}
              </div>
              
              <div className="form-group">
                <select
                  name="vat"
                  value={formData.vat}
                  onChange={handleChange}
                  className="wpcf7-form-control"
                  aria-label="Tipo de servicio requerido"
                >
                  <option value="Cumplimiento de IVA">Tipo de servicio</option>
                  <option value="Desarrollo Web">Desarrollo Web</option>
                  <option value="Marketing Digital">Marketing Digital</option>
                  <option value="Consultoría">Consultoría</option>
                  <option value="Otro">Otro</option>
                </select>
              </div>
              
              <div className="form-group">
                <input
                  name="outgoing"
                  value={formData.outgoing}
                  onChange={handleChange}
                  placeholder="Presupuesto estimado (USD)"
                  className={`wpcf7-form-control ${errors.outgoing ? 'error-border' : ''}`}
                />
                {errors.outgoing && <span className="error-message">{errors.outgoing}</span>}
              </div>
              
              <div className="form-group">
                <input
                  name="incoming"
                  value={formData.incoming}
                  onChange={handleChange}
                  placeholder="Plazo de entrega deseado"
                  className={`wpcf7-form-control ${errors.incoming ? 'error-border' : ''}`}
                />
                {errors.incoming && <span className="error-message">{errors.incoming}</span>}
              </div>
              
              <div className="form-group submit-group">
                <button type="submit" className="wpcf7-submit get-quote">
                  Enviar solicitud
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>


    </>
  );
};

export default Servicios;