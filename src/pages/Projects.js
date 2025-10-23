import React from 'react';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
  const projects = [
    {
      image: "/img/encriptador.png",
      title: "Encriptador",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis delectus ad eos quam ex enim non adipisci magni cum, quod",
      repoLink: "https://github.com/LuisYepes601/Proyecto-alura.git",
      demoLink: "https://luisyepes601.github.io/Proyecto-alura/"
    },
    {
      image: "/img/Captura de pantalla 2025-08-20 145355.png",
      title: "YouTube Azul",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab quam dolorem quod itaque quis libero perspiciatis id nesciunt a magni nisi corporis vitae, accusantium fuga molestias amet architecto expedita sint.",
      repoLink: "https://github.com/LuisYepes601/youtube-azul",
      demoLink: "https://luisyepes601.github.io/youtube-azul/"
    }
  ];

  return (
    <main className="main-home">
      <section className="proyectos-contenido">
        <div className="proyectos-contenido-header">
          <h2>Lo que He Construido</h2>
          <p>Aquí comparto algunos de los proyectos que he desarrollado. Son parte de mi camino de aprendizaje y de mi pasión por la tecnología, buscando siempre mejorar mis habilidades y aportar ideas que generen un impacto positivo.</p>
        </div>
        <div className="proyectos-contenido-cards">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default Projects;
