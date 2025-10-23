// Servicio API real para CRUD de experiencias profesionales

// 🔹 URL base de la API
const API_BASE_URL = 'https://hojadevidaapi.onrender.com/api';

// 🔹 Obtener todas las experiencias
export const getExperiences = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/experiencias`);
    if (!response.ok) {
      throw new Error(`Error al obtener experiencias: ${response.status} ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    console.error("❌ Error en getExperiences:", error);
    throw error;
  }
};

// 🔹 Obtener experiencias por usuario
export const getExperiencesByUser = async (usuarioReferencia) => {
  try {
    const response = await fetch(`${API_BASE_URL}/experiencias/usuario/${usuarioReferencia}`);
    if (!response.ok) throw new Error('Error al obtener las experiencias del usuario');
    return await response.json();
  } catch (error) {
    console.error('❌ Error en getExperiencesByUser:', error);
    throw error;
  }
};

// 🔹 Crear una nueva experiencia
export const createExperience = async (experienceData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/experiencias/crear`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(experienceData),
    });
    if (!response.ok) {
      throw new Error(`Error al crear experiencia: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error("❌ Error en createExperience:", error);
    throw error;
  }
};

// 🔹 Actualizar una experiencia existente
export const updateExperience = async (_id, experienceData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/experiencias/actualizar/${_id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(experienceData),
    });
    if (!response.ok) {
      throw new Error(`Error al actualizar experiencia: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error("❌ Error en updateExperience:", error);
    throw error;
  }
};


// 🔹 Eliminar una experiencia
export const deleteExperience = async (_id) => {
  try {
    const response = await fetch(`${API_BASE_URL}/experiencias/eliminar/${_id}`, {
      method: 'DELETE',
    });
    if (!response.ok) {
      throw new Error(`Error al eliminar experiencia: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error("❌ Error en deleteExperience:", error);
    throw error;
  }
};
