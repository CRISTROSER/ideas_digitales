import React from 'react';
import './Nosotros.css';

const Nosotros: React.FC = () => {
  return (
    <section className="nosotros-container">
      <div className="nosotros-overlay">
        <div className="nosotros-left">
          <h2 className="nosotros-title">SOLICITA UNA LLAMADA</h2>
          <p className="nosotros-description">
            Para una consulta en vivo o una asesoría, solicita una llamada telefónica.
            Déjanos tus datos y uno de nuestros expertos te contactará en menos de 24 horas
            o si lo prefieres, envíanos un correo electrónico.
          </p>
        </div>
        <form className="nosotros-form">
          <div className="nosotros-form-group">
            <input type="text" name="name" placeholder="Nombre" className="nosotros-input" />
            <input type="text" name="phone" placeholder="Número de contacto" className="nosotros-input" />
          </div>

          <div className="nosotros-select-group">
            <div className="nosotros-select-container">
              <label htmlFor="topic" className="nosotros-label">Me gustaría hablar sobre:</label>
              <select id="topic" name="topic" className="nosotros-select">
                <option>Planes de desarrollo</option>
                <option>Marketing digital</option>
                <option>Sitios web</option>
              </select>
            </div>
            <button type="submit" className="nosotros-button">ENVIAR</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Nosotros;