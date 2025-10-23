import React, { useState, useEffect } from 'react';

const ExperienceForm = ({ onSubmit, initialData, onCancel }) => {
  const [formData, setFormData] = useState({
    titulo: '',
    empresa: '',
    periodo: '',
    ubicacion: '',
    descripcion: '',
    logros: '',
    tecnologias: '',
    usuarioReferencia: '68f663330061790d3bb8b23a' // 
  });

  useEffect(() => {
    if (initialData) {
      setFormData({
        ...initialData,
        tecnologias: Array.isArray(initialData.tecnologias)
          ? initialData.tecnologias.join(', ')
          : initialData.tecnologias || '',
        logros: Array.isArray(initialData.logros)
          ? initialData.logros.join(', ')
          : initialData.logros || ''
      });
    }
  }, [initialData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const submitData = {
      ...formData,
      tecnologias: formData.tecnologias
        .split(',')
        .map(t => t.trim())
        .filter(Boolean)
        .join(', '), // 👈 backend espera string, no array
      logros: formData.logros
        .split(',')
        .map(l => l.trim())
        .filter(Boolean)
        .join(', ') // 👈 igual
    };

    onSubmit(submitData); // 🔹 Envía el objeto listo al Admin.js

    if (!initialData) {
      setFormData({
        titulo: '',
        empresa: '',
        periodo: '',
        ubicacion: '',
        descripcion: '',
        logros: '',
        tecnologias: '',
        usuarioReferencia: '68f663330061790d3bb8b23a'
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="experience-form">
      <div className="form-group">
        <label htmlFor="titulo">Título:</label>
        <input
          type="text"
          id="titulo"
          name="titulo"
          value={formData.titulo}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="empresa">Empresa:</label>
        <input
          type="text"
          id="empresa"
          name="empresa"
          value={formData.empresa}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="periodo">Período:</label>
        <input
          type="text"
          id="periodo"
          name="periodo"
          value={formData.periodo}
          onChange={handleChange}
          placeholder="Ej: Enero 2023 - Octubre 2025"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="ubicacion">Ubicación:</label>
        <input
          type="text"
          id="ubicacion"
          name="ubicacion"
          value={formData.ubicacion}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label htmlFor="descripcion">Descripción:</label>
        <textarea
          id="descripcion"
          name="descripcion"
          value={formData.descripcion}
          onChange={handleChange}
          rows="4"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="logros">Logros (separados por coma):</label>
        <textarea
          id="logros"
          name="logros"
          value={formData.logros}
          onChange={handleChange}
          rows="3"
          placeholder="Logro 1, Logro 2, Logro 3"
        />
      </div>

      <div className="form-group">
        <label htmlFor="tecnologias">Tecnologías (separadas por coma):</label>
        <input
          type="text"
          id="tecnologias"
          name="tecnologias"
          value={formData.tecnologias}
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
