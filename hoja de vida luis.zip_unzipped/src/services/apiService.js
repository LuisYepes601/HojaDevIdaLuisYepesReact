// API service for professional experiences CRUD operations
const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:3001/api';

// For development/testing, you can use mock data if no API is available
const USE_MOCK_DATA = process.env.REACT_APP_USE_MOCK_DATA === 'true';

console.log('API Base URL:', API_BASE_URL);
console.log('Using mock data:', USE_MOCK_DATA);

// Mock data for development
const mockExperiences = [
  {
    id: 1,
    title: 'Desarrollador Full Stack',
    company: 'Empresa Ejemplo',
    period: '2023 - Presente',
    location: 'Bogotá, Colombia',
    description: 'Desarrollo de aplicaciones web modernas utilizando React, Node.js y bases de datos NoSQL.',
    achievements: ['Implementé sistema de autenticación JWT', 'Optimizé consultas de base de datos', 'Colaboré en equipo Scrum'],
    technologies: ['React', 'Node.js', 'MongoDB', 'Express']
  },
  {
    id: 2,
    title: 'Desarrollador Frontend',
    company: 'Tech Solutions',
    period: '2022 - 2022',
    location: 'Medellín, Colombia',
    description: 'Creación de interfaces de usuario responsivas y optimizadas para rendimiento.',
    achievements: ['Reduje tiempo de carga en 50%', 'Implementé diseño responsive', 'Trabajé con metodologías ágiles'],
    technologies: ['HTML', 'CSS', 'JavaScript', 'Vue.js']
  }
];

export const getExperiences = async () => {
  if (USE_MOCK_DATA) {
    console.log('Using mock data for experiences');
    return new Promise((resolve) => {
      setTimeout(() => resolve(mockExperiences), 500); // Simulate API delay
    });
  }

  console.log('Fetching experiences from:', `${API_BASE_URL}/experiences`);
  const response = await fetch(`${API_BASE_URL}/experiences`);
  console.log('Response status:', response.status);
  if (!response.ok) {
    throw new Error(`Error al obtener experiencias: ${response.status} ${response.statusText}`);
  }
  const data = await response.json();
  console.log('Fetched experiences:', data);
  return data;
};

export const createExperience = async (experienceData) => {
  if (USE_MOCK_DATA) {
    console.log('Mock creating experience:', experienceData);
    return new Promise((resolve) => {
      setTimeout(() => resolve({ ...experienceData, id: Date.now() }), 500);
    });
  }

  const response = await fetch(`${API_BASE_URL}/experiences`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(experienceData),
  });
  if (!response.ok) {
    throw new Error('Error al crear experiencia');
  }
  return response.json();
};

export const updateExperience = async (id, experienceData) => {
  if (USE_MOCK_DATA) {
    console.log('Mock updating experience:', id, experienceData);
    return new Promise((resolve) => {
      setTimeout(() => resolve({ ...experienceData, id }), 500);
    });
  }

  const response = await fetch(`${API_BASE_URL}/experiences/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(experienceData),
  });
  if (!response.ok) {
    throw new Error('Error al actualizar experiencia');
  }
  return response.json();
};

export const deleteExperience = async (id) => {
  if (USE_MOCK_DATA) {
    console.log('Mock deleting experience:', id);
    return new Promise((resolve) => {
      setTimeout(() => resolve({ success: true }), 500);
    });
  }

  const response = await fetch(`${API_BASE_URL}/experiences/${id}`, {
    method: 'DELETE',
  });
  if (!response.ok) {
    throw new Error('Error al eliminar experiencia');
  }
  return response.json();
};
