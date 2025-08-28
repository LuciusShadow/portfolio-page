import { useState } from 'react';
import ThemeToggle from '../ThemeToggle';
import MobileMenu from './MobileMenu';
import { personalConfig } from '../../config/personal';

type Props = {
  theme: 'light' | 'dark';
  setTheme: React.Dispatch<React.SetStateAction<'light' | 'dark'>>;
};

export default function Navbar({ theme, setTheme }: Props) {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuItems = [
    'About',
    'Services',
    'Skills',
    'Certifications',
    'Projects',
    'Contact',
  ];

  function scrollToSection(section: string): void {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
    <div className="navbar">
      <div className="navbar__name">{personalConfig.name}</div>
      <div className="navbar__container">
        {menuItems.map((item) => (
          <button
            key={item}
            onClick={() => scrollToSection(item.toLowerCase())}
            className="navbar__container__button"
          >
            {item}
          </button>
        ))}
        <ThemeToggle theme={theme} setTheme={setTheme} />
        {/* Burger Button für Mobile */}
        <div
          className={`navbar__burger-button ${menuOpen ? 'active' : ''}`}
          aria-label="Menü öffnen"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {[0, 1, 2].map(i => <span key={i} className="navbar__burger-button__item"></span>)}
        </div>

        <MobileMenu menuItems={menuItems} isOpen={menuOpen} />
      </div>
    </div>
  );
}
