import React, { useState, useEffect } from 'react';
import ExperienceForm from '../components/ExperienceForm';
import ExperienceList from '../components/ExperienceList';
import { getExperiences, createExperience, updateExperience, deleteExperience } from '../services/apiService';
import '../styles/admin.css';

const Admin = () => {
  const [experiences, setExperiences] = useState([]);
  const [editingExperience, setEditingExperience] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    loadExperiences();
  }, []);

  const loadExperiences = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await getExperiences();
      setExperiences(data);
    } catch (err) {
      setError(err.message || 'Error al cargar las experiencias');
      console.error('Error loading experiences:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleCreate = async (experienceData) => {
    try {
      setError(null);
      await createExperience(experienceData);
      await loadExperiences();
    } catch (err) {
      setError(err.message || 'Error al crear la experiencia');
      console.error('Error creating experience:', err);
    }
  };

  const handleUpdate = async (id, experienceData) => {
    try {
      setError(null);
      await updateExperience(id, experienceData);
      await loadExperiences();
      setEditingExperience(null);
    } catch (err) {
      setError(err.message || 'Error al actualizar la experiencia');
      console.error('Error updating experience:', err);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('¿Estás seguro de que quieres eliminar esta experiencia?')) {
      try {
        setError(null);
        await deleteExperience(id);
        await loadExperiences();
      } catch (err) {
        setError(err.message || 'Error al eliminar la experiencia');
        console.error('Error deleting experience:', err);
      }
    }
  };

  const handleEdit = (experience) => {
    setEditingExperience(experience);
  };

  const handleCancelEdit = () => {
    setEditingExperience(null);
  };

  if (loading) return (
    <div className="admin-container">
      <div className="loading">
        <h2>Cargando experiencias...</h2>
        <p>Por favor espera mientras se cargan los datos.</p>
      </div>
    </div>
  );

  if (error) return (
    <div className="admin-container">
      <div className="error">
        <h2>Error de conexión</h2>
        <p>{error}</p>
        <p>Verifica que la API esté corriendo en el puerto correcto.</p>
        <button onClick={loadExperiences} className="btn-submit">Reintentar</button>
      </div>
    </div>
  );

  console.log('Rendering Admin component');
  console.log('Experiences:', experiences);
  console.log('Loading:', loading);
  console.log('Error:', error);

  return (
    <div className="admin-container">
      <h1>Panel Administrativo - Experiencias Profesionales</h1>

      <div className="admin-content">
        <div className="admin-form-section">
          <h2>{editingExperience ? 'Editar Experiencia' : 'Nueva Experiencia'}</h2>
          <ExperienceForm
            onSubmit={editingExperience ? (data) => handleUpdate(editingExperience.id, data) : handleCreate}
            initialData={editingExperience}
            onCancel={editingExperience ? handleCancelEdit : null}
          />
        </div>

        <div className="admin-list-section">
          <h2>Lista de Experiencias ({experiences.length})</h2>
          <ExperienceList
            experiences={experiences}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        </div>
      </div>
    </div>
  );
};

export default Admin;
