import React from 'react';

type Props = {
  theme: 'light' | 'dark';
  setTheme: React.Dispatch<React.SetStateAction<'light' | 'dark'>>;
};

export default function ThemeToggle({ theme, setTheme }: Props) {
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <button 
      className="navbar__container__button toggle-theme" 
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      <span className="toggle-theme__icon">
        {theme === 'light' ? '🌙' : '☀️'}
      </span>
    </button>
  );
}
