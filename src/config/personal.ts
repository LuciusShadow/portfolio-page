export const personalConfig = {
  // Basic Information
  name: 'Sascha Bach',
  title: 'Freelance Software Developer',

  // Contact Information
  email: {
    user: 'freelancer',
    domain: 'sascha-bach.de',
    full: 'freelancer [at] sascha-bach.de',
  },

  // Social Links
  social: {
    github: {
      url: 'https://github.com/LuciusShadow',
      username: 'LuciusShadow',
    },
    linkedin: {
      url: 'https://www.linkedin.com/in/saschabach/',
      username: 'saschabach',
    },
  },

  // Professional Details
  location: 'Germany',
  timezone: 'CET/CEST',
} as const;

// Helper functions
export const getObfuscatedEmail = () => {
  return personalConfig.email.full
    .replace('@', ' [at] ')
    .replace('.', ' [dot] ');
};

export const createEmailLink = () => {
  return `mailto:${personalConfig.email.user}@${personalConfig.email.domain}`;
};
