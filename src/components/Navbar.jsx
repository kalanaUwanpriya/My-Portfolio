import React, { useState } from 'react';
import './Navbar.css';

const Navbar = ({ currentPage, onNavigate }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = (e, page, targetId = null) => {
    e.preventDefault();
    setMenuOpen(false);

    if (onNavigate) {
      onNavigate(page, targetId);
    }
  };

  return (
    <nav className="navbar" id="navbar">
      <button
        type="button"
        className="navbar__brand"
        onClick={(e) => handleNavClick(e, 'home', 'home')}
        aria-label="Go to Home"
      >
        <span className="navbar__brand-text">Kalana</span>
      </button>

      <button
        className={`navbar__hamburger ${menuOpen ? 'active' : ''}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <ul className={`navbar__links ${menuOpen ? 'open' : ''}`}>
        <li><a href="#home" className={currentPage === 'home' ? 'is-active' : ''} onClick={(e) => handleNavClick(e, 'home', 'home')}>Home</a></li>
        <li><a href="#about-page" className={currentPage === 'about' ? 'is-active' : ''} onClick={(e) => handleNavClick(e, 'about')}>About</a></li>
        <li><a href="#skills-page" className={currentPage === 'skills' ? 'is-active' : ''} onClick={(e) => handleNavClick(e, 'skills')}>Skills</a></li>
        <li><a href="#projects" className={currentPage === 'projects' ? 'is-active' : ''} onClick={(e) => handleNavClick(e, 'projects')}>Projects</a></li>
        <li><a href="#contact-page" className={currentPage === 'contact' ? 'is-active' : ''} onClick={(e) => handleNavClick(e, 'contact')}>Contacts</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
