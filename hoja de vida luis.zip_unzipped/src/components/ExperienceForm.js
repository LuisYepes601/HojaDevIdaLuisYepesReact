import React, { useState, useEffect } from 'react';

const ExperienceForm = ({ onSubmit, initialData, onCancel }) => {
  const [formData, setFormData] = useState({
    title: '',
    company: '',
    period: '',
    location: '',
    description: '',
    achievements: '',
    technologies: '',
    current: false
  });

  useEffect(() => {
    if (initialData) {
      setFormData({
        ...initialData,
        technologies: Array.isArray(initialData.technologies)
          ? initialData.technologies.join(', ')
          : initialData.technologies || '',
        achievements: Array.isArray(initialData.achievements)
          ? initialData.achievements.join(', ')
          : initialData.achievements || ''
      });
    }
  }, [initialData]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const submitData = {
      ...formData,
      technologies: formData.technologies.split(',').map(tech => tech.trim()).filter(tech => tech),
      achievements: formData.achievements.split(',').map(achievement => achievement.trim()).filter(achievement => achievement)
    };
    onSubmit(submitData);
    if (!initialData) {
      setFormData({
        title: '',
        company: '',
        period: '',
        location: '',
        description: '',
        achievements: '',
        technologies: '',
        current: false
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="experience-form">
      <div className="form-group">
        <label htmlFor="title">Título:</label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="company">Empresa:</label>
        <input
          type="text"
          id="company"
          name="company"
          value={formData.company}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="period">Período:</label>
        <input
          type="text"
          id="period"
          name="period"
          value={formData.period}
          onChange={handleChange}
          placeholder="Ej: 2020 - 2023"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="location">Ubicación:</label>
        <input
          type="text"
          id="location"
          name="location"
          value={formData.location}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label htmlFor="description">Descripción:</label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          rows="4"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="achievements">Logros (separados por coma):</label>
        <textarea
          id="achievements"
          name="achievements"
          value={formData.achievements}
          onChange={handleChange}
          rows="3"
          placeholder="Logro 1, Logro 2, Logro 3"
        />
      </div>

      <div className="form-group">
        <label htmlFor="technologies">Tecnologías (separadas por coma):</label>
        <input
          type="text"
          id="technologies"
          name="technologies"
          value={formData.technologies}
          onChange={handleChange}
          placeholder="React, Node.js, MongoDB"
        />
      </div>

      <div className="form-actions">
        <button type="submit" className="btn-submit">
          {initialData ? 'Actualizar' : 'Crear'} Experiencia
        </button>
        {onCancel && (
          <button type="button" onClick={onCancel} className="btn-cancel">
            Cancelar
          </button>
        )}
      </div>
    </form>
  );
};

export default ExperienceForm;
