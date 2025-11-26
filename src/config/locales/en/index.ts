import { navigation } from './navigation';
import { themeToggle } from '../../theme-toggle';
import { footer } from './footer';
import { hero } from './hero';
import { about } from './about';
import { services } from './services';
import { skills } from './skills';
import { projects } from './projects';
import { certifications } from './certifications';
import { contact } from './contact';
import { imprint } from './imprint';
import { privacyPolicy } from './privacy-policy';
import { accessibility } from './accessibility';

// TypeScript interfaces for type safety
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
    tertiaryButtonText: string;
    statItems: Array<{
      label: string;
      value: string;
    }>;
  };

  // About Section
  about: {
    title: string;
    subtitle: string;
    name: string;
    bio: string[];
    featureCards: Array<{
      title: string;
      description: string;
    }>;
  };

  // Services Section
  services: {
    title: string;
    subtitle: string;
    serviceItems: Array<{
      title: string;
      description: string;
    }>;
  };

  // Skills Section
  skills: {
    title: string;
    subtitle: string;
    skillCategories: Array<{
      title: string;
      skills: Array<{
        skill: string;
        value: number;
      }>;
    }>;
  };

  // Projects Section
  projects: {
    title: string;
    subtitle: string;
    codeButtonText: string;
    liveButtonText: string;
    projectItems: Array<{
      id: number;
      title: string;
      description: string;
    }>;
  };

  // Certifications Section
  certifications: {
    title: string;
    subtitle: string;
    certificationItems: Array<{
      name: string;
      issuer: string;
    }>;
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
    emailSubject: string;
    emailBody: string;
    emailAnnouncement: string;
    socialAnnouncement: string;
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
    copyrightTitle: string;
    copyrightText: string[];
    privacyTitle: string;
    privacyText: string;
    detailedPrivacyPolicy: {
      title: string;
      introduction: string;
      responsibleTitle: string;
      responsibleText: string;
      responsibleContact: string;
      dataProtectionOfficerTitle: string;
      dataProtectionOfficerText: string;
      rightsTitle: string;
      rightsIntro: string;
      rights: Array<{ title: string; text: string }>;
      revocationTitle: string;
      revocationText: string;
      objectionTitle: string;
      objectionText: string;
      objectionHighlight: string;
      objectionContact: string;
      dataDeletionTitle: string;
      dataDeletionIntro: string;
      dataDeletionReasons: string[];
      retentionText: string;
      webhostingTitle: string;
      webhostingText: string;
      webhostingDataTypes: string[];
      webhostingPurpose: string;
      webhostingDataCategories: {
        affectedData: string;
        affectedDataList: string[];
        affectedPersons: string;
        processingPurpose: string;
        legalBasis: string;
        provider: string;
      };
      hostingProvider: {
        name: string;
        address: string;
        website: string;
      };
      contactTitle: string;
      contactText: string;
      contactDataCategories: {
        affectedData: string[];
        affectedPersons: string;
        processingPurpose: string;
        legalBasis: string;
      };
      securityTitle: string;
      securityText: string;
      changesTitle: string;
      changesText: string;
      disclaimer: string;
    };
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

  // Accessibility and Navigation
  accessibility: {
    skipLinks: {
      skipToHero: string;
      skipToAbout: string;
      skipToServices: string;
      skipToSkills: string;
      skipToProjects: string;
      skipToCertifications: string;
      skipToContact: string;
    };
    navigation: {
      keyboardHelp: string;
      keyboardHelpExpanded: string[];
      useTabToNavigate: string;
      useTabToNavigateCards: string;
      useTabToNavigateOptions: string;
      closeKeyboardHelp: string;
    };
    screenReader: {
      professionalStatistics: string;
      projectCard: string;
      viewSourceCode: string;
      viewLiveDemo: string;
      downloadResume: string;
      downloadResumeDescription: string;
      keyboardNavigationHelp: string;
      themeSwitchButton: string;
      switchToTheme: string;
      certificationCard: string;
      serviceCard: string;
      skillBadge: string;
    };
    ariaLabels: {
      mainNavigation: string;
      socialLinks: string;
      themeToggle: string;
      mobileMenuToggle: string;
      contactForm: string;
      projectsGrid: string;
      skillsGrid: string;
      certificationsGrid: string;
      servicesGrid: string;
    };
  };
}

// English text configuration
export const en: TextConfig = {
  navigation,
  themeToggle,
  footer,
  hero,
  about,
  services,
  skills,
  projects,
  certifications,
  contact,
  imprint,
  privacyPolicy,
  accessibility,
};
