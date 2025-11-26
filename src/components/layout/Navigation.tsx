import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import ThemeToggle from '../ThemeToggle';
import LanguageToggle from '../LanguageToggle';
import MobileMenu from './MobileMenu';
import { personalConfig } from '../../config/personal';
import { useLanguage } from '../../contexts/LanguageContext';
import { scrollToSection } from '../../utils/scrollUtils';

type Props = {
  theme: 'light' | 'dark';
  setTheme: React.Dispatch<React.SetStateAction<'light' | 'dark'>>;
};

export default function Navbar({
  theme,
  setTheme
}: Readonly<Props>) {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { texts } = useLanguage();

  const menuItems = texts.navigation.menuItems;

  function handleNavigation(section: string): void {
    const sectionId = section.toLowerCase();
    scrollToSection(sectionId, location.pathname, navigate);

    // Close mobile menu if open
    setMenuOpen(false);
  }

  return (
    <div className="navbar">
      <Link to="/" className="navbar__name">{personalConfig.name}</Link>
      <div className="navbar__container">
        {menuItems.map((item) => (
          <button
            key={item}
            onClick={() => handleNavigation(item)}
            className="navbar__container__button"
          >
            {item}
          </button>
        ))}
        <LanguageToggle />
        <ThemeToggle theme={theme} setTheme={setTheme} />
        {/* Burger Button für Mobile */}
        <button
          type="button"
          className={`navbar__burger-button ${menuOpen ? 'active' : ''}`}
          aria-label={texts.navigation.mobileMenuAriaLabel}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {[0, 1, 2].map(i => <span key={i} className="navbar__burger-button__item"></span>)}
        </button>

        <MobileMenu
          menuItems={menuItems}
          isOpen={menuOpen}
          onItemClick={handleNavigation}
        />
      </div>
    </div>
  );
}
