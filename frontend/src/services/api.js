import axios from 'axios';

const API_BASE = `${process.env.REACT_APP_BACKEND_URL}/api`;

// Create axios instance with default config
const api = axios.create({
  baseURL: API_BASE,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor for logging
api.interceptors.request.use(
  (config) => {
    console.log(`Making ${config.method.toUpperCase()} request to: ${config.url}`);
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor for error handling
api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.error('API Error:', error.response?.data || error.message);
    return Promise.reject(error);
  }
);

// API endpoints
export const portfolioAPI = {
  // Profile endpoints
  getProfile: () => api.get('/profile'),
  updateProfile: (data) => api.put('/profile', data),

  // Skills endpoints
  getSkills: () => api.get('/skills'),
  createSkillCategory: (data) => api.post('/skills/categories', data),
  updateSkillCategory: (id, data) => api.put(`/skills/categories/${id}`, data),
  deleteSkillCategory: (id) => api.delete(`/skills/categories/${id}`),

  // Projects endpoints
  getProjects: (category = null) => 
    api.get('/projects', { params: category ? { category } : {} }),
  getProject: (id) => api.get(`/projects/${id}`),
  getProjectCategories: () => api.get('/projects/categories/list'),
  createProject: (data) => api.post('/projects', data),
  updateProject: (id, data) => api.put(`/projects/${id}`, data),
  deleteProject: (id) => api.delete(`/projects/${id}`),

  // Contact endpoints
  submitContact: (data) => api.post('/contact', data),
  getContactMessages: () => api.get('/contact/messages'),
  updateMessageStatus: (id, status) => api.put(`/contact/messages/${id}`, { status }),
  deleteContactMessage: (id) => api.delete(`/contact/messages/${id}`),

  // Stats endpoints
  getStats: () => api.get('/stats'),
  createStat: (data) => api.post('/stats', data),
  updateStat: (id, data) => api.put(`/stats/${id}`, data),
  deleteStat: (id) => api.delete(`/stats/${id}`),

  // Health check
  healthCheck: () => api.get('/health'),
};

export default portfolioAPI;