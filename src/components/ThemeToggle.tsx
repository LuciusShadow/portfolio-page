type Props = {
  theme: 'light' | 'dark';
  setTheme: React.Dispatch<React.SetStateAction<'light' | 'dark'>>;
};

export default function ThemeToggle({ theme, setTheme }: Props) {
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <button className="navbar__container__button toggle-theme" onClick={toggleTheme}>
      {theme === 'light' ? '💡' : '💤'}
    </button>
  );
}
