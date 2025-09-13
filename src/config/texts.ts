// Centralized text configuration for the portfolio
// This file contains all configurable text used throughout the application
//
// Usage Examples:
//
// 1. Basic usage in components:
//    const texts = getTexts();
//    <h1>{texts.hero.title}</h1>
//
// 2. Using specific section texts:
//    const contactTexts = getTexts().contact;
//    <h2>{contactTexts.title}</h2>
//
// 3. Future internationalization ready:
//    const texts = getTexts('en'); // or 'de', 'fr', etc.
//
// Benefits:
// - All text in one place for easy management
// - Ready for internationalization
// - Type-safe text references
// - Easy bulk text updates
// - Consistent text formatting

export interface TextConfig {
  // Navigation
  navigation: {
    menuItems: string[];
    mobileMenuAriaLabel: string;
  };

  // Theme Toggle
  themeToggle: {
    lightIcon: string;
    darkIcon: string;
    lightModeText: string;
    darkModeText: string;
  };

  // Footer
  footer: {
    imprintText: string;
    copyrightText: string;
    githubAriaLabel: string;
    linkedinAriaLabel: string;
    emailAriaLabel: string;
  };

  // Hero Section
  hero: {
    title: string;
    description: string;
    primaryButtonText: string;
    secondaryButtonText: string;
  };

  // About Section
  about: {
    title: string;
    subtitle: string;
    description: string;
    profileAlt: string;
    experienceLabel: string;
    projectsLabel: string;
    clientsLabel: string;
    features: {
      responsive: { title: string; description: string };
      performance: { title: string; description: string };
      modern: { title: string; description: string };
      accessible: { title: string; description: string };
    };
  };

  // Services Section
  services: {
    title: string;
    subtitle: string;
  };

  // Skills Section
  skills: {
    title: string;
    subtitle: string;
  };

  // Projects Section
  projects: {
    title: string;
    subtitle: string;
    codeButtonText: string;
    liveButtonText: string;
  };

  // Certifications Section
  certifications: {
    title: string;
    subtitle: string;
  };

  // Contact Section
  contact: {
    title: string;
    subtitle: string;
    connectTitle: string;
    connectDescription: string;
    buttonText: string;
    socialTitle: string;
    availabilityText: string;
    responseTimeLabel: string;
    responseTimeValue: string;
    preferredContactLabel: string;
    preferredContactValue: string;
    locationLabel: string;
    locationValue: string;
    nameLabel: string;
    emailLabel: string;
    subjectLabel: string;
    messageLabel: string;
    sendButtonText: string;
    successMessage: string;
    errorMessage: string;
    requiredFieldError: string;
    invalidEmailError: string;
    githubText: string;
    linkedinText: string;
    emailText: string;
  };

  // Imprint Page
  imprint: {
    title: string;
    subtitle: string;
    companyInfoTitle: string;
    contactTitle: string;
    responsibilityTitle: string;
    disclaimerTitle: string;
    contentLiabilityTitle: string;
    contentLiabilityText: string[];
    linksLiabilityTitle: string;
    linksLiabilityText: string[];
    copyrightTitle: string;
    copyrightText: string[];
    privacyTitle: string;
    privacyText: string;
    address: {
      street: string;
      city: string;
      country: string;
    };
    contact: {
      phone: string;
    };
  };

  // Privacy Policy Page
  privacyPolicy: {
    title: string;
    lastUpdated: string;
    dataCollectionTitle: string;
    dataCollectionText: string;
    dataCollectionList: string[];
    purposeTitle: string;
    purposeText: string;
    providerTitle: string;
    providerText: string;
    retentionTitle: string;
    retentionText: string;
    rightsTitle: string;
    rightsText: string;
    rightsList: string[];
    contactTitle: string;
    contactText: string;
    contactEmail: string;
    legalBasisTitle: string;
    legalBasisText: string;
  };
}

// Default text configuration (English/German mix as currently used)
export const defaultTexts: TextConfig = {
  navigation: {
    menuItems: [
      'About',
      'Services',
      'Skills',
      'Certifications',
      'Projects',
      'Contact',
    ],
    mobileMenuAriaLabel: 'Menü öffnen',
  },

  themeToggle: {
    lightIcon: '🌙',
    darkIcon: '☀️',
    lightModeText: 'dark',
    darkModeText: 'light',
  },

  footer: {
    imprintText: 'Impressum',
    copyrightText: 'All rights reserved.',
    githubAriaLabel: 'GitHub Profile',
    linkedinAriaLabel: 'LinkedIn Profile',
    emailAriaLabel: 'Send Email',
  },

  hero: {
    title: 'Building Digital Experiences',
    description:
      'Full-Stack Developer specializing in modern web technologies and user-centered design.',
    primaryButtonText: 'View Projects',
    secondaryButtonText: 'Get in Touch',
  },

  about: {
    title: 'About Me',
    subtitle:
      'Passionate developer with a focus on clean code and innovative solutions',
    description:
      'With years of experience in web development, I create robust and scalable applications using modern technologies. My approach combines technical expertise with user-centered design principles.',
    profileAlt: 'Sascha Bach Profile',
    experienceLabel: 'Years Experience',
    projectsLabel: 'Projects Completed',
    clientsLabel: 'Happy Clients',
    features: {
      responsive: {
        title: 'Responsive Design',
        description:
          'Mobile-first approach ensuring optimal experience across all devices',
      },
      performance: {
        title: 'Performance Optimized',
        description:
          'Fast loading times and smooth interactions for better user experience',
      },
      modern: {
        title: 'Modern Technologies',
        description:
          'Latest frameworks and tools for cutting-edge web applications',
      },
      accessible: {
        title: 'Accessibility Focused',
        description:
          'Inclusive design principles ensuring usability for everyone',
      },
    },
  },

  services: {
    title: 'Services',
    subtitle: 'Comprehensive web development solutions tailored to your needs',
  },

  skills: {
    title: 'Skills & Technologies',
    subtitle: 'Technical expertise across the full development stack',
  },

  projects: {
    title: 'Featured Projects',
    subtitle: 'A showcase of my recent work and personal projects',
    codeButtonText: 'Code',
    liveButtonText: 'Live',
  },

  certifications: {
    title: 'Certifications & Achievements',
    subtitle: 'My professional qualifications and continuous learning',
  },

  contact: {
    title: 'Get In Touch',
    subtitle: "Let's discuss your project and bring your ideas to life",
    connectTitle: "Let's Connect",
    connectDescription:
      "I'm always interested in new opportunities and exciting projects. Whether you have a question or just want to say hi, feel free to reach out!",
    buttonText: 'Contact via Email',
    socialTitle: 'Other ways to connect',
    availabilityText: 'Available for projects',
    responseTimeLabel: 'Response time',
    responseTimeValue: 'Within 24 hours',
    preferredContactLabel: 'Preferred contact',
    preferredContactValue: 'Email',
    locationLabel: 'Location',
    locationValue: 'Germany',
    nameLabel: 'Your Name',
    emailLabel: 'Your Email',
    subjectLabel: 'Subject',
    messageLabel: 'Your Message',
    sendButtonText: 'Send Message',
    successMessage: "Message sent successfully! I'll get back to you soon.",
    errorMessage:
      'Failed to send message. Please try again or contact me directly.',
    requiredFieldError: 'This field is required',
    invalidEmailError: 'Please enter a valid email address',
    githubText: 'Follow my work and contribute to open source projects',
    linkedinText:
      'Connect with me for professional networking and opportunities',
    emailText: 'Send me a direct message for inquiries and collaborations',
  },

  imprint: {
    title: 'Impressum',
    subtitle: 'Legal Information',
    companyInfoTitle: 'Angaben gemäß § 5 TMG',
    contactTitle: 'Kontakt',
    responsibilityTitle: 'Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV',
    disclaimerTitle: 'Haftungsausschluss',
    contentLiabilityTitle: 'Haftung für Inhalte',
    contentLiabilityText: [
      'Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht unter der Verpflichtung, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.',
      'Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.',
    ],
    linksLiabilityTitle: 'Haftung für Links',
    linksLiabilityText: [
      'Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.',
      'Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.',
    ],
    copyrightTitle: 'Urheberrecht',
    copyrightText: [
      'Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.',
      'Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.',
    ],
    privacyTitle: 'Datenschutz',
    privacyText:
      'Die Nutzung unserer Webseite ist in der Regel ohne Angabe personenbezogener Daten möglich. Soweit auf unseren Seiten personenbezogene Daten (beispielsweise Name, Anschrift oder E-Mail-Adressen) erhoben werden, erfolgt dies, soweit möglich, stets auf freiwilliger Basis. Diese Daten werden ohne Ihre ausdrückliche Zustimmung nicht an Dritte weitergegeben.',
    address: {
      street: 'Alt-Tempelhof 15',
      city: '12099 Berlin',
      country: 'Deutschland',
    },
    contact: {
      phone: '+49 (0) 179 9364867',
    },
  },

  privacyPolicy: {
    title: 'Privacy Policy (GDPR/DSGVO)',
    lastUpdated: 'Last updated:',
    dataCollectionTitle: 'Data Collection',
    dataCollectionText:
      'We collect only the information you provide through our contact form:',
    dataCollectionList: [
      'Name (first and last)',
      'Email address',
      'Subject and message content',
    ],
    purposeTitle: 'Purpose of Data Processing',
    purposeText:
      'Your data is used solely to respond to your inquiry and establish contact.',
    providerTitle: 'Email Service Provider',
    providerText:
      'We use Resend (resend.com) to send emails from our contact form. Resend is GDPR compliant and processes data according to their privacy policy.',
    retentionTitle: 'Data Retention',
    retentionText:
      'Contact form data is processed immediately and not stored permanently on our servers. Your message is sent via email and then discarded from our systems.',
    rightsTitle: 'Your Rights Under GDPR',
    rightsText: 'You have the right to:',
    rightsList: [
      'Request access to your personal data',
      'Request rectification of your personal data',
      'Request deletion of your personal data',
      'Data portability',
      'Object to processing',
    ],
    contactTitle: 'Contact',
    contactText:
      'For any privacy-related questions or to exercise your rights, contact:',
    contactEmail: 'info@sascha-bach.de',
    legalBasisTitle: 'Legal Basis',
    legalBasisText:
      'Processing is based on your explicit consent (Art. 6(1)(a) GDPR).',
  },
};

// Export a function to get texts (can be extended for internationalization)
export const getTexts = (): TextConfig => {
  // For now, return default texts
  // In the future, this can be extended to support multiple languages
  return defaultTexts;
};
