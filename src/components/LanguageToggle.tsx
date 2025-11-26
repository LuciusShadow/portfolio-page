import { useLanguage } from '../contexts/LanguageContext';
import '../scss/language-toggle.scss';

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  const handleLanguageChange = (newLang: 'en' | 'de') => {
    if (newLang !== language) {
      setLanguage(newLang);
      // Announce language change to screen readers
      const announcement = document.createElement('div');
      announcement.setAttribute('role', 'status');
      announcement.setAttribute('aria-live', 'polite');
      announcement.setAttribute('class', 'sr-only');
      announcement.textContent = `Language changed to ${newLang === 'en' ? 'English' : 'Deutsch'}`;
      document.body.appendChild(announcement);
      setTimeout(() => announcement.remove(), 1000);
    }
  };

  return (
    <div className="language-toggle" role="group" aria-label="Language selection">
      <button
        className={`language-toggle__button ${language === 'en' ? 'language-toggle__button--active' : ''}`}
        onClick={() => handleLanguageChange('en')}
        aria-label="Switch to English"
        aria-pressed={language === 'en'}
        type="button"
      >
        EN
      </button>
      <button
        className={`language-toggle__button ${language === 'de' ? 'language-toggle__button--active' : ''}`}
        onClick={() => handleLanguageChange('de')}
        aria-label="Zu Deutsch wechseln"
        aria-pressed={language === 'de'}
        type="button"
      >
        DE
      </button>
    </div>
  );
}
