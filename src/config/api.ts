const isDevelopment = import.meta.env.DEV;

export const API_CONFIG = {
  BASE_URL: isDevelopment
    ? 'http://localhost:3002'
    : 'https://portfolio-backend-production-39b3.up.railway.app',
  ENDPOINTS: {
    CONTACT: '/api/contact',
  },
};

// Export individual items for backward compatibility
export const ENDPOINTS = API_CONFIG.ENDPOINTS;

// Helper function to get full API URL
export const getApiUrl = (endpoint: string): string => {
  return `${API_CONFIG.BASE_URL}${endpoint}`;
};

// Default export
export default API_CONFIG;
