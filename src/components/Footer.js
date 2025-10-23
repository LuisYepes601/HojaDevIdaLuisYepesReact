import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
      <footer className="footer" id="footer">
        <div className="footer-contenido">
          <div className="footer-about">
            <h3>Sobre mí</h3>
            <p>Soy Luis Yepes, un apasionado por el desarrollo de software y la creación de soluciones digitales
              que impacten positivamente en la vida de las personas. Siempre en constante aprendizaje 🚀.</p>
          </div>

          <div className="footer-links">
            <h3>Enlaces rápidos</h3>
            <ul>
              <li><a href="#home"><i className="fa-solid fa-house"></i> Inicio</a></li>
              <li><a href="#proyectos" className="seccion-proyectos"><i className="fa-solid fa-code"></i> Proyectos</a></li>
              <li><a href="#about" className="btn-sobre-mi"><i className="fa-solid fa-user"></i> Sobre mí</a></li>
            </ul>
          </div>

          <div className="footer-contacto">
            <h3>Contacto</h3>
            <p><i className="fa-solid fa-envelope"></i> <a
                href="mailto:yepesluis006@gmail.com">yepesluis006@gmail.com</a></p>
            <p><i className="fa-solid fa-phone"></i> <a href="https://wa.me/573008998311" target="_blank">+57
                3008998311</a></p>
            <div className="footer-redes">
              <a href="https://www.linkedin.com/in/luis-yepes-mel%C3%A9ndez-064b25230/" target="_blank"><i
                  className="fa-brands fa-linkedin"></i></a>
              <a href="https://github.com/LuisYepes601" target="_blank"><i
                  className="fa-brands fa-github"></i></a>
              <a href="https://www.instagram.com/yepesmelendez/" target="_blank"><i
                  className="fa-brands fa-instagram"></i></a>
            </div>
          </div>
        </div>

        <div className="footer-copy">
          <p>&copy; 2025 Luis Yepes - Todos los derechos reservados.</p>
        </div>
      </footer>

      <div className="wpp-flotante">
        <div className="wpp-flotante-contenido">
          <a href="https://wa.me/573008998311"><i className="fa-brands fa-whatsapp"></i></a>
        </div>
      </div>
    </>
  );
};

export default Footer;
