import { useState, useEffect } from 'react';
import '../scss/App.scss';
import Navbar from '../components/layout/Navigation';
import HeroSection from '../components/sections/HeroSection';
import AboutSection from '../components/sections/AboutSection';
import ServicesSection from '../components/sections/ServicesSection';

function PortfolioApp() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <>
      <Navbar theme={theme} setTheme={setTheme} />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
    </>
  );
}

export default PortfolioApp;
