import React from 'react';

const ProjectCard = ({ image, title, description, repoLink, demoLink }) => {
  return (
    <div className="proyectos-contenido-card">
      <img src={image} alt={title} />
      <div className="proyectos-contenido-card-descripcion">
        <h4>{title}</h4>
        <p>{description}</p>
      </div>

      <div className="proyectos-contenido-card-btns">
        <button className="btn-repositorio-encriptador" onClick={() => window.open(repoLink, "_blank")}>Repositorio</button>
        <button className="btn-demo-encriptador" onClick={() => window.open(demoLink, "_blank")}>Ver demo</button>
      </div>
    </div>
  );
};

export default ProjectCard;
