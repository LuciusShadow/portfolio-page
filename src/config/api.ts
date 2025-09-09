// Note: API configuration no longer needed since we're using direct mailto links
// This file is kept for reference but can be removed

export const API_CONFIG = {
  BASE_URL: '', // No longer used
  ENDPOINTS: {
    CONTACT: '/api/contact', // No longer used
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
