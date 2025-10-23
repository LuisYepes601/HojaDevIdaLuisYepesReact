import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <section className="contenido-principal-home">
      <div className="contenido-principal-home-info">
        <h3 className="contenido-principal-home-info-nombre">Hola, soy Luis Yepes <span className="manito"><i className="fa-regular fa-hand-peace"></i></span></h3>

        <h2 className="contenido-principal-home-info-carrera"><span>Ingeniero</span> de Software en formación</h2>

        <p className="contenido-principal-home-info-descripcion">Soy estudiante y apasionado por el desarrollo web. Me gusta crear interfaces modernas,
          funcionales y fáciles de usar, siempre buscando mejorar mis habilidades en HTML, CSS y
          JavaScript.</p>

        <div className="contenido-principal-home-botones">
          <button className="button-show-skills" onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}>Ver mis habilidades</button>
          <Link to="/proyectos" className="button-show-projects">Ver mis proyectos</Link>
        </div>
      </div>
      <div className="contenido-principal-home-foto">
        <img src="/img/circulo_recortado_original.png" alt="Foto personal de Luis Yepes" className="foto-personal" />
      </div>
    </section>
  );
};

export default Home;
