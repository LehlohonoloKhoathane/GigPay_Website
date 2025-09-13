import { useState } from 'react';
import './header.css';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <header className="site-header">
      <div className="header-top">
        <div className="logo">GigPay</div>

        {/* Desktop nav */}
        <nav className="nav-links desktop-nav">
          <a href="#about">About</a>
          <a href="#products">Products</a>
          <a href="#whyUs">Why Us</a>
          <a href="#testimonials">Testimonials</a>
          <a href="#help">Help</a>
          <a href="#signUp" className="signup">Sign Up</a>
        </nav>

        {/* Hamburger icon */}
        <button className="hamburger" onClick={toggleMenu} aria-label="Menu Toggle">
          {menuOpen ? (
            <span className="close-icon">✖</span>
          ) : (
            <>
              <span className="bar" />
              <span className="bar" />
              <span className="bar" />
            </>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      <nav className={`nav-links mobile-nav ${menuOpen ? 'open' : ''}`}>
        <a href="#about" onClick={handleLinkClick}>About</a>
        <a href="#products" onClick={handleLinkClick}>Products</a>
        <a href="#whyUs" onClick={handleLinkClick}>Why Us</a>
        <a href="#testimonials" onClick={handleLinkClick}>Testimonials</a>
        <a href="#help" onClick={handleLinkClick}>Help</a>
        <a href="#signUp" onClick={handleLinkClick} className="signup">Sign Up</a>
      </nav>
    </header>
  );
}

export default Header;


