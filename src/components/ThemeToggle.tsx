import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

type Props = Readonly<{
  theme: 'light' | 'dark';
  setTheme: React.Dispatch<React.SetStateAction<'light' | 'dark'>>;
}>;

export default function ThemeToggle({
  theme,
  setTheme
}: Props) {
  const { texts } = useLanguage();

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <button
      className="navbar__container__button toggle-theme"
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === 'light' ? texts.themeToggle.lightModeText : texts.themeToggle.darkModeText} mode`}
    >
      <span className="toggle-theme__icon">
        {theme === 'light' ? texts.themeToggle.lightIcon : texts.themeToggle.darkIcon}
      </span>
    </button>
  );
}
