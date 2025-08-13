import { useState } from 'react';
import ThemeToggle from '../ThemeToggle';

type Props = {
  theme: 'light' | 'dark';
  setTheme: React.Dispatch<React.SetStateAction<'light' | 'dark'>>;
};

export default function Navbar({ theme, setTheme }: Props) {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    // TODO Centralize strings, create buttons via loops
    <div className="navbar">
      <div className="navbar__name">Sascha Bach</div>
      <div className="navbar__container">
        <button
          /*onClick={() => scrollToSection('about')}*/ className="navbar__container__button"
        >
          About
        </button>
        <button
          /*onClick={() => scrollToSection('about')}*/ className="navbar__container__button"
        >
          Services
        </button>
        <button
          /*onClick={() => scrollToSection('about')}*/ className="navbar__container__button"
        >
          Skills
        </button>
        <button
          /*onClick={() => scrollToSection('about')}*/ className="navbar__container__button"
        >
          Certifications
        </button>
        <button
          /*onClick={() => scrollToSection('about')}*/ className="navbar__container__button"
        >
          Projects
        </button>
        <button
          /*onClick={() => scrollToSection('about')}*/ className="navbar__container__button"
        >
          Contact
        </button>
        <ThemeToggle theme={theme} setTheme={setTheme} />
        {/* Burger Button für Mobile */}
        <div
          className={`navbar__burger-button ${menuOpen ? 'active' : ''}`}
          aria-label="Menü öffnen"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="navbar__burger-button__item"> </span>
          <span className="navbar__burger-button__item"> </span>
          <span className="navbar__burger-button__item"> </span>
        </div>

        {/* Optional: Mobile Menu Dropdown */}
        {menuOpen && (
          <div className="navbar__mobile-menu">
            <button>About</button>
            <button>Services</button>
            <button>Skills</button>
            <button>Certifications</button>
            <button>Projects</button>
            <button>Contact</button>
          </div>
        )}
      </div>
    </div>
  );
}
/*<span className="navbar__container__burger-button__item">About</span>
          <span className="navbar__container__burger-button__item">
            Services
          </span>
          <span className="navbar__container__burger-button__item">Skills</span>
          <span className="navbar__container__burger-button__item">
            Certifications
          </span>
          <span className="navbar__container__burger-button__item">
            Projects
          </span>
          <span className="navbar__container__burger-button__item">
            Contact
          </span>*/
