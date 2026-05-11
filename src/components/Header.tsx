import { useState, useEffect } from 'react';
import './Header.css';

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Products', href: '#products' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Contact', href: '#contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = () => setMenuOpen(false);

  return (
    <header className={`header${scrolled ? ' header--scrolled' : ''}`}>
      <div className="container header__inner">
        <a href="#home" className="header__logo">
          <span className="logo-icon">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
              <rect width="32" height="32" rx="8" fill="#f97316" />
              <path d="M8 10h6v12H8z" fill="white" rx="2" />
              <path d="M14 14h4a4 4 0 0 1 4 4v4h-4v-4h-4v-4z" fill="white" />
              <circle cx="22" cy="10" r="3" fill="white" />
            </svg>
          </span>
          <span className="logo-text">
            <span className="logo-name">Asha</span>
            <span className="logo-tag">Folding Doors</span>
          </span>
        </a>

        <nav className={`header__nav${menuOpen ? ' header__nav--open' : ''}`}>
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className="nav-link" onClick={handleNavClick}>
              {link.label}
            </a>
          ))}
          <a href="#contact" className="btn btn-primary nav-cta" onClick={handleNavClick}>
            Get a Quote
          </a>
        </nav>

        <button
          className={`hamburger${menuOpen ? ' hamburger--open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
