import React from 'react';
import { Link } from 'react-router-dom';
import StudyCard from '../components/StudyCard';

const About = () => {
  const studies = [
    {
      institution: "Universidad de Cartagena",
      logo: "/img/logo.jpg",
      startDate: "15/07/2023",
      status: "EN FORMACION",
      level: "PREGRADO",
      title: "INGENIERO DE SOFTWARE"
    },
    {
      institution: "Servicio nacional de aprendizaje (SENA)",
      logo: "/img/Logo-de-SENA-png-verde-300x300-1.png",
      startDate: "20/05/2024",
      status: "CERTIFICADO",
      level: "CURSO",
      title: "ENGLISH DOES WORK - LEVEL 2",
      certificateLink: "/Certificados/9539002967494CC1050276424C.pdf"
    },
    {
      institution: "Servicio nacional de aprendizaje (SENA)",
      logo: "/img/Logo-de-SENA-png-verde-300x300-1.png",
      startDate: "02/11/2023",
      status: "CERTIFICADO",
      level: "CURSO",
      title: "DESARROLLO DE HABILIDADES, PRINCIPIOS Y VALORES PARA LA VIDA Y EL TRABAJO",
      certificateLink: "/Certificados/DESARROLLO DE HABILIDADES, PRINCIPIOS Y VALORES PARA LA VIDA Y EL TRABAJO.pdf"
    },
    {
      institution: "Servicio nacional de aprendizaje (SENA)",
      logo: "/img/Logo-de-SENA-png-verde-300x300-1.png",
      startDate: "11/08/2025",
      status: "CERTIFICADO",
      level: "CURSO",
      title: "METODOLOGIA DE LA PROGRAMACION DE SISTEMAS INFORMATICOS",
      certificateLink: "/Certificados/9123003281961CC1050276424C (1).pdf"
    }
  ];

  return (
    <div className="contenedor-grid">
      <main className="main-home">
        <section className="contenido-principal-home">
          <div className="contenido-principal-home-info">
            <h3 className="contenido-principal-home-info-nombre">Hola, soy Luis Yepes <span className="manito"><i className="fa-regular fa-hand-peace"></i></span></h3>

            <p className="contenido-principal-home-info-descripcion-about">Soy estudiante y apasionado por el desarrollo web. Me gusta crear interfaces modernas,
              funcionales y fáciles de usar, siempre buscando mejorar mis habilidades en HTML, CSS y
              JavaScript.

              Mi objetivo es crecer como desarrollador y aplicar la tecnología en proyectos que generen un
              impacto positivo, especialmente en el ámbito educativo y ambiental.

              Fuera de la programación, disfruto aprender cosas nuevas, explorar ideas creativas y seguir
              perfeccionándome cada día.</p>
            <div className="contenido-principal-home-botones">
              <Link to="/proyectos" className="button-show-projects seccion-proyectos">Ver mis proyectos</Link>
              <button className="button-show-skills" onClick={() => document.getElementById('skills').scrollIntoView({ behavior: 'smooth' })}>Conoce mis Skills</button>
            </div>
          </div>
        </section>

        <section className="estudios">
          <h2>Mis estudios</h2>
          <div className="estudios-info">
            {studies.map((study, index) => (
              <StudyCard key={index} {...study} />
            ))}
          </div>
        </section>

        <section className="mi-proposito">
          <h2><span>Mi</span> proposito</h2>
          <p className="mi-proposito-descripcion">Mi propósito es seguir creciendo como <span>desarrollador</span>, explorando nuevas <span>tecnologías</span> y aplicándolas en
            proyectos que aporten <span>soluciones</span> prácticas y significativas para las personas.</p>
        </section>

        <section className="skills" id="skills">
          <div className="skills-contenido">
            <h2 className="skills-contenido-titulo">Skills</h2>

            <div className="skills-contenido-secciones">
              <div className="front-end">
                <h2>Front-end</h2>
                <ul>
                  <li><i className="fa-brands fa-js"></i></li>
                  <li><i className="fa-brands fa-html5"></i></li>
                  <li><i className="fa-brands fa-css3-alt"></i></li>
                </ul>
              </div>
              <div className="back-end">
                <h2>Back-end</h2>
                <ul>
                  <li><i className="fa-brands fa-java"></i></li>
                  <li><i className="fa-brands fa-docker"></i></li>
                  <li><i className="fa-brands fa-python"></i></li>
                </ul>
              </div>
              <div className="soft-skills">
                <h2>Soft skills</h2>
                <ul>
                  <li><i className="fa-solid fa-people-group"></i></li>
                  <li><i className="fa-solid fa-palette"></i></li>
                  <li><i className="fa-solid fa-business-time"></i></li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default About;
