import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';
import { en, type TextConfig } from '../config/locales/en';
import { de } from '../config/locales/de';

type Language = 'en' | 'de';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  texts: TextConfig;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const LANGUAGE_KEY = 'preferred-language';

function getBrowserLanguage(): Language {
  const browserLang = navigator.language.toLowerCase();
  if (browserLang.startsWith('de')) {
    return 'de';
  }
  return 'en'; // Default to English for all other languages
}

function getSavedLanguage(): Language | null {
  const saved = localStorage.getItem(LANGUAGE_KEY);
  if (saved === 'en' || saved === 'de') {
    return saved;
  }
  return null;
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    // First check localStorage, then browser language, then default to English
    return getSavedLanguage() || getBrowserLanguage();
  });

  const texts = language === 'de' ? de : en;

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem(LANGUAGE_KEY, lang);
    // Update HTML lang attribute for accessibility and SEO
    document.documentElement.lang = lang;
  };

  useEffect(() => {
    // Set initial lang attribute
    document.documentElement.lang = language;
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, texts }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
