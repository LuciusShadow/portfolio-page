// API configuration for different environments
type Environment = 'development' | 'production';

const API_CONFIG: Record<Environment, { baseURL: string }> = {
  development: {
    baseURL: 'http://localhost:3002',
  },
  production: {
    baseURL: 'https://your-backend-api.herokuapp.com', // Update with your actual backend URL
  },
};

export const getApiUrl = (): string => {
  const isDev = import.meta.env.DEV;
  const environment: Environment = isDev ? 'development' : 'production';
  return API_CONFIG[environment].baseURL;
};

export const ENDPOINTS = {
  contact: '/api/contact',
  health: '/health',
};
