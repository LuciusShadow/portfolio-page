import { useState, useEffect } from 'react';
import '../scss/App.scss';
import Navbar from '../components/layout/Navigation';

function PortfolioApp() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <>
      <Navbar theme={theme} setTheme={setTheme} />
      <h1>Aktuelles Theme: {theme} </h1>
    </>
  );
}

export default PortfolioApp;
