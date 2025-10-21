import React from 'react';

const ExperienceList = ({ experiences, onEdit, onDelete }) => {
  console.log('ExperienceList received experiences:', experiences);

  const formatDate = (dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('es-ES', { year: 'numeric', month: 'long' });
  };

  return (
    <div className="experience-list">
      {experiences.length === 0 ? (
        <p className="no-experiences">No hay experiencias profesionales registradas.</p>
      ) : (
        experiences.map((experience) => {
          console.log('Rendering experience:', experience);
          return (
          <div key={experience.id} className="experience-card">
            <div className="experience-header">
              <h3>{experience.title}</h3>
              <div className="experience-actions">
                <button
                  onClick={() => onEdit(experience)}
                  className="btn-edit"
                  title="Editar"
                >
                  ✏️
                </button>
                <button
                  onClick={() => onDelete(experience.id)}
                  className="btn-delete"
                  title="Eliminar"
                >
                  🗑️
                </button>
              </div>
            </div>

            <div className="experience-company">
              <strong>{experience.company}</strong>
              {experience.location && <span> - {experience.location}</span>}
            </div>

            <div className="experience-period">
              <strong>Período:</strong> {experience.period}
            </div>

            <div className="experience-description">
              <p>{experience.description}</p>
            </div>

            {experience.achievements && experience.achievements.length > 0 && (
              <div className="experience-achievements">
                <strong>Logros:</strong>
                <ul>
                  {experience.achievements.map((achievement, index) => (
                    <li key={index}>{achievement}</li>
                  ))}
                </ul>
              </div>
            )}

            {experience.technologies && experience.technologies.length > 0 && (
              <div className="experience-technologies">
                <strong>Tecnologías:</strong>
                <div className="technologies-list">
                  {experience.technologies.map((tech, index) => (
                    <span key={index} className="technology-tag">
                      {tech}
                    </span>
                  ))}
                </div>
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
