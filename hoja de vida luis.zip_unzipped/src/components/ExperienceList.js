import React from 'react';

const ExperienceList = ({ experiences, onEdit, onDelete }) => {
  console.log('ExperienceList received experiences:', experiences);

  return (
    <div className="experience-list">
      {experiences.length === 0 ? (
        <p className="no-experiences">No hay experiencias profesionales registradas.</p>
      ) : (
        experiences.map((experience) => {
          console.log('Rendering experience:', experience);
          return (
            <div key={experience._id} className="experience-card">
              <div className="experience-header">
                <h3>{experience.titulo}</h3>
                <div className="experience-actions">
                  <button
                    onClick={() => onEdit(experience)}
                    className="btn-edit"
                    title="Editar"
                  >
                    ✏️
                  </button>
                  <button
                    onClick={() => onDelete(experience._id)}
                    className="btn-delete"
                    title="Eliminar"
                  >
                    🗑️
                  </button>
                </div>
              </div>

              <div className="experience-company">
                <strong>{experience.empresa}</strong>
                {experience.ubicacion && <span> - {experience.ubicacion}</span>}
              </div>

              <div className="experience-period">
                <strong>Período:</strong> {experience.periodo}
              </div>

              <div className="experience-description">
                <p>{experience.descripcion}</p>
              </div>

              {experience.logros && (
                <div className="experience-achievements">
                  <strong>Logros:</strong>
                  <p>{experience.logros}</p>
                </div>
              )}

              {experience.tecnologias && (
                <div className="experience-technologies">
                  <strong>Tecnologías:</strong>
                  <p>{experience.tecnologias}</p>
                </div>
              )}
            </div>
          );
        })
      )}
    </div>
  );
};

export default ExperienceList;
