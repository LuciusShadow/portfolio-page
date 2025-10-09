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
    imprintText: 'Impressum und Datenschutz',
    copyrightText: 'All rights reserved.',
    githubAriaLabel: 'GitHub Profile',
    linkedinAriaLabel: 'LinkedIn Profile',
    emailAriaLabel: 'Send Email',
  },

  hero: {
    title: 'Everyone deserves a smooth online experience',
    description:
      'I help you build accessible websites that make every visitor feel included, in line with the Accessibility Act.',
    primaryButtonText: 'View Projects',
    secondaryButtonText: 'Download CV',
    tertiaryButtonText: 'Get in Touch',
    statItems: [
      { label: 'Years of Experience', value: '10+' },
      { label: 'Responsive Design', value: '100%' },
      { label: 'Technologies Used', value: '10+' },
      { label: 'Frameworks', value: '3+' },
    ],
  },

  about: {
    title: 'About Me',
    subtitle:
      'Passionate developer with a focus on clean code and innovative solutions.',
    name: 'Sascha Bach',
    bio: [
      'I studied Computer Science at the Technical University of Darmstadt and graduated in 2016 with my bachelor thesis on Motion Sickness in Virtual Reality. Since then I have been working as a Software and Web Developer with a focus on Angular and React.',
      'In my work I have seen that every company is different, but many face the same challenge: keeping their digital presence accessible, modern and future proof. A lot of businesses already know that accessibility is required by law, but in practice what matters most is that a website works for all users in a simple and enjoyable way.',
      'My specialization is Web Accessibility (WCAG 2.1, BFSG, European Accessibility Act). I help companies update their websites and applications so they are compliant and at the same time easy to use for everyone. What my clients value is that I combine technical expertise in Angular, React and TypeScript with a human centered approach. Because accessibility is not just about code, it is about people.',
      'If you are wondering whether your website already meets accessibility standards, or if you feel it is time to make your online presence more inclusive and legally compliant, I would be glad to support you. Often just a few clear steps can make a big difference, helping your website reach more people and stand out from the competition.',
      "Let's connect and see how we can make your website barrier free, modern and ready for the future.",
    ],
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
  },

  imprint: {
    title: 'Impressum und Datenschutz',
    subtitle: 'Legal Information',
    companyInfoTitle: 'Angaben gemäß § 5 DDG',
    contactTitle: 'Kontakt',
    responsibilityTitle: 'Vertretungsberechtigt',
    disclaimerTitle: 'Haftungsausschluss',
    contentLiabilityTitle: 'Haftung für Inhalte',
    contentLiabilityText: [
      'Als Diensteanbieter sind wir gemäß § 7 Abs.1 DDG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht unter der Verpflichtung, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.',
      'Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.',
    ],
    copyrightTitle: 'Urheberrecht',
    copyrightText: [
      'Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.',
      'Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.',
    ],
    privacyTitle: 'Datenschutz',
    privacyText:
      'Die Nutzung unserer Webseite ist in der Regel ohne Angabe personenbezogener Daten möglich. Soweit auf unseren Seiten personenbezogene Daten (beispielsweise Name, Anschrift oder E-Mail-Adressen) erhoben werden, erfolgt dies, soweit möglich, stets auf freiwilliger Basis. Diese Daten werden ohne Ihre ausdrückliche Zustimmung nicht an Dritte weitergegeben.',
    detailedPrivacyPolicy: {
      title: 'Datenschutzerklärung',
      introduction:
        'Mit dieser Datenschutzerklärung möchten wir Sie über Art, Umfang und Zweck der Verarbeitung von personenbezogenen Daten (im Folgenden auch nur als "Daten" bezeichnet) aufklären. Personenbezogene Daten sind alle Daten, die einen persönlichen Bezug zu Ihnen aufweisen, z. B. Name, Adresse, E-Mail-Adresse oder Ihr Nutzerverhalten. Die Datenschutzerklärung gilt für alle von uns vorgenommene Daten-Verarbeitungsvorgänge sowohl im Rahmen unserer Kerntätigkeit als auch für die von uns vorgehaltenen Online-Medien.',
      responsibleTitle:
        'Wer bei uns für die Datenverarbeitung verantwortlich ist',
      responsibleText: 'Verantwortlich für die Datenverarbeitung ist:',
      responsibleContact:
        'Sascha Bach\nAlt-Tempelhof 15\n12099 Berlin\nDE\n01799364867\ninfo@sascha-bach.de',
      dataProtectionOfficerTitle:
        'Kontaktdaten unseres Datenschutzbeauftragten',
      dataProtectionOfficerText:
        'Unseren Datenschutzbeauftragten können Sie per E-Mail unter info [at] sascha-bach.de oder unter unserer Postadresse mit dem Zusatz „an den Datenschutzbeauftragten" erreichen.',
      rightsTitle: 'Ihre Rechte nach der DSGVO',
      rightsIntro:
        'Nach der DSGVO stehen Ihnen die nachfolgend aufgeführten Rechte zu, die Sie jederzeit bei dem in Ziffer 1. dieser Datenschutzerklärung genannten Verantwortlichen geltend machen können:',
      rights: [
        {
          title: 'Recht auf Auskunft',
          text: 'Sie haben das Recht, von uns Auskunft darüber zu verlangen, ob und welche Daten wir von Ihnen verarbeiten.',
        },
        {
          title: 'Recht auf Berichtigung',
          text: 'Sie haben das Recht, die Berichtigung unrichtiger oder Vervollständigung unvollständiger Daten zu verlangen.',
        },
        {
          title: 'Recht auf Löschung',
          text: 'Sie haben das Recht, die Löschung Ihrer Daten zu verlangen.',
        },
        {
          title: 'Recht auf Einschränkung',
          text: 'Sie haben in bestimmten Fällen das Recht zu verlangen, dass wir Ihre Daten nur noch eingeschränkt bearbeiten.',
        },
        {
          title: 'Recht auf Datenübertragbarkeit',
          text: 'Sie haben das Recht zu verlangen, dass wir Ihnen oder einem anderen Verantwortlichen Ihre Daten in einem strukturierten, gängigen und maschinenlesebaren Format übermitteln.',
        },
        {
          title: 'Beschwerderecht',
          text: 'Sie haben das Recht, sich bei einer Aufsichtsbehörde zu beschweren. Zuständig ist die Aufsichtsbehörde Ihres üblichen Aufenthaltsortes, Ihres Arbeitsplatzes oder unseres Firmensitzes.',
        },
      ],
      revocationTitle: 'Widerrufsrecht',
      revocationText:
        'Sie haben das Recht, die von Ihnen erteilte Einwilligung zur Datenverarbeitung jederzeit zu widerrufen.',
      objectionTitle: 'Widerspruchsrecht',
      objectionText:
        'Sie haben das Recht, jederzeit gegen die Verarbeitung Ihrer Daten, die wir auf unser berechtigtes Interesse nach Art. 6 Abs. 1 lit. f DSGVO stützen, Widerspruch einzulegen. Sofern Sie von Ihrem Widerspruchsrecht Gebrauch machen, bitten wir Sie um die Darlegung der Gründe. Wir werden Ihre personenbezogenen Daten dann nicht mehr verarbeiten, es sei denn, wir können Ihnen gegenüber nachweisen, dass zwingende schutzwürdige Gründe an der Datenverarbeitung Ihre Interessen und Rechte überwiegen.',
      objectionHighlight:
        'Unabhängig vom vorstehend Gesagten, haben Sie das jederzeitige Recht, der Verarbeitung Ihrer personenbezogenen Daten für Zwecke der Werbung und Datenanalyse zu widersprechen.',
      objectionContact:
        'Ihren Widerspruch richten Sie bitte an die oben angegebene Kontaktadresse des Verantwortlichen.',
      dataDeletionTitle: 'Wann löschen wir Ihre Daten?',
      dataDeletionIntro:
        'Wir löschen Ihre Daten dann, wenn wir diese nicht mehr brauchen oder Sie uns dies vorgeben. Das bedeutet, dass - sofern sich aus den einzelnen Datenschutzhinweisen dieser Datenschutzerklärung nichts anderes ergibt - wir Ihre Daten löschen,',
      dataDeletionReasons: [
        'wenn der Zweck der Datenverarbeitung weggefallen ist und damit die jeweilige in den einzelnen Datenschutzhinweisen genannte Rechtsgrundlage nicht mehr besteht, also bspw.',
        'nach Beendigung der zwischen uns bestehenden vertraglichen oder mitgliedschaftlichen Beziehungen (Art. 6 Abs. 1 lit. a DSGVO) oder',
        'nach Wegfall unseres berechtigten Interesses an der weiteren Verarbeitung oder Speicherung Ihrer Daten (Art. 6 Abs. 1 lit. f DSGVO),',
        'wenn Sie von Ihrem Widerrufsrecht Gebrauch machen und keine anderweitige gesetzliche Rechtsgrundlage für die Verarbeitung im Sinne von Art. 6 Abs. 1 lit. b-f DSGVO eingreift,',
        'wenn Sie vom Ihrem Widerspruchsrecht Gebrauch machen und der Löschung keine zwingenden schutzwürdigen Gründe entgegenstehen.',
      ],
      retentionText:
        'Sofern wir (bestimmte Teile) Ihre(r) Daten jedoch noch für andere Zwecke vorhalten müssen, weil dies etwa steuerliche Aufbewahrungsfristen (in der Regel 6 Jahre für Geschäftskorrespondenz bzw. 10 Jahre für Buchungsbelege) oder die Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen aus vertraglichen Beziehungen (bis zu vier Jahren) erforderlich machen oder die Daten zum Schutz der Rechte einer anderen natürlichen oder juristischen Person gebraucht werden, löschen wir (den Teil) Ihre(r) Daten erst nach Ablauf dieser Fristen. Bis zum Ablauf dieser Fristen beschränken wir die Verarbeitung dieser Daten jedoch auf diese Zwecke (Erfüllung der Aufbewahrungspflichten).',
      webhostingTitle: 'Webhosting',
      webhostingText:
        'Wir bedienen uns zum Vorhalten unserer Internetseiten eines Anbieters, auf dessen Server unsere Internetseiten gespeichert und für den Abruf im Internet verfügbar gemacht werden (Hosting). Hierbei können von dem Anbieter all diejenigen über den von Ihnen genutzten Browser übertragenen Daten verarbeitet werden, die bei der Nutzung unserer Internetseiten anfallen. Hierzu gehören insbesondere Ihre IP-Adresse, die der Anbieter benötigt, um unser Online-Angebot an den von Ihnen genutzten Browser ausliefern zu können sowie sämtliche von Ihnen über unsere Internetseite getätigten Eingaben. Daneben kann der von uns genutzte Anbieter',
      webhostingDataTypes: [
        'das Datum und die Uhrzeit des Zugriffs auf unsere Internetseite',
        'Zeitzonendifferenz zur Greenwich Mean Time (GMT)',
        'Zugriffsstatus (HTTP-Status)',
        'die übertragene Datenmenge',
        'der Internet-Service-Provider des zugreifenden Systems',
        'der von Ihnen verwendete Browsertyp und dessen Version',
        'das von Ihnen verwendete Betriebssystem',
        'die Internetseite, von welcher Sie gegebenenfalls auf unsere Internetseite gelangt sind',
        'die Seiten bzw. Unterseiten, welche Sie auf unserer Internetseite besuchen.',
      ],
      webhostingPurpose:
        'erheben. Die vorgenannten Daten werden als Logfiles auf den Servern unseres Anbieters gespeichert. Dies ist erforderlich, um die Stabilität und Sicherheit des Betriebs unserer Internetseite zu gewährleisten.',
      webhostingDataCategories: {
        affectedData: 'Betroffene Daten:',
        affectedDataList: [
          'Inhaltsdaten (bspw. Posts, Fotos, Videos)',
          'Nutzungsdaten (bspw. Zugriffszeiten, angeklickte Webseiten)',
          'Kommunikationsdaten (bspw. Informationen über das genutzte Gerät, IP-Adresse)',
        ],
        affectedPersons: 'Betroffene Personen: Nutzer unserer Internetpräsenz',
        processingPurpose:
          'Verarbeitungszweck: Ausspielen unserer Internetseiten, Gewährleistung des Betriebs unserer Internetseiten',
        legalBasis:
          'Rechtsgrundlage: Berechtigtes Interesse, Art. 6 Abs. 1 lit. f DSGVO',
        provider: 'Von uns beauftragte(r) Webhoster:',
      },
      hostingProvider: {
        name: 'Bitpalast GmbH',
        address: 'Postfach 19 15 64, D-14005 Berlin, Deutschland',
        website: 'https://preiswerter-webserver-de.bitpalast.net/',
      },
      contactTitle: 'Kontaktaufnahme',
      contactText:
        'Soweit Sie uns über E-Mail, Soziale Medien, Telefon, Fax, Post, unser Kontaktformular oder sonstwie ansprechen und uns hierbei personenbezogene Daten wie Ihren Namen, Ihre Telefonnummer oder Ihre E-Mail-Adresse zur Verfügung stellen oder weitere Angaben zur Ihrer Person oder Ihrem Anliegen machen, verarbeiten wir diese Daten zur Beantwortung Ihrer Anfrage im Rahmen des zwischen uns bestehenden vorvertraglichen oder vertraglichen Beziehungen.',
      contactDataCategories: {
        affectedData: [
          'Bestandsdaten (bspw. Namen, Adressen)',
          'Kontakdaten (bspw. E-Mail-Adresse, Telefonnummer, Postanschrift)',
          'Inhaltsdaten (Texte, Fotos, Videos)',
          'Vertragsdaten (bspw. Vertragsgegenstand, Vertragsdauer)',
        ],
        affectedPersons:
          'Interessenten, Kunden, Geschäfts- und Vertragspartner',
        processingPurpose:
          'Kommunikation sowie Beantwortung von Kontaktanfragen, Büro und Organisationsverfahren',
        legalBasis:
          'Vertragserfüllung und vorvertragliche Anfragen, Art. 6 Abs. 1 lit. b DSGVO, berechtigtes Interesse, Art. 6 Abs. 1 lit. f DSGVO',
      },
      securityTitle: 'Sicherheitsmaßnahmen',
      securityText:
        'Wir treffen im Übrigen technische und organisatorische Sicherheitsmaßnahmen nach dem Stand der Technik, um die Vorschriften der Datenschutzgesetze einzuhalten und Ihre Daten gegen zufällige oder vorsätzliche Manipulationen, teilweisen oder vollständigen Verlust, Zerstörung oder gegen den unbefugten Zugriff Dritter zu schützen.',
      changesTitle: 'Aktualität und Änderung dieser Datenschutzerklärung',
      changesText:
        'Diese Datenschutzerklärung ist aktuell gültig und hat den Stand September 2025. Aufgrund geänderter gesetzlicher bzw. behördlicher Vorgaben kann es notwendig werden, diese Datenschutzerklärung anzupassen.',
      disclaimer:
        'Diese Datenschutzerklärung wurde mit Hilfe des Datenschutz-Generators von SOS Recht erstellt. SOS Recht ist ein Angebot der Mueller.legal Rechtsanwälte Partnerschaft mit Sitz in Berlin.',
    },
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
    contactEmail: 'info [at] sascha-bach.de',
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
