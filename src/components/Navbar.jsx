import React, { useState } from 'react';
import { Sun, Moon, Download, Menu, X } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import '../styles/Navbar.css';

export default function Navbar({ theme, toggleTheme }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { personal } = portfolioData;

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Blogs', href: '#blogs' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="header-nav">
      <div className="container nav-container">
        {/* Brand */}
        <a href="#home" className="nav-brand" aria-label="Diksha Somwanshi Home">
          <span className="brand-badge">{personal.initials}</span>
          <span className="brand-name">
            Diksha<span className="brand-dot">.dev</span>
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav aria-label="Main Navigation">
          <ul className="nav-links">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a href={link.href} className="nav-link">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Actions: Theme Toggle + Resume Download */}
        <div className="nav-actions">
          <button
            onClick={toggleTheme}
            className="theme-toggle-btn"
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            {theme === 'dark' ? <Sun size={19} /> : <Moon size={19} />}
          </button>

          <a
            href={personal.resumeUrl}
            download={personal.resumeFilename}
            className="btn btn-outline nav-resume-btn"
            title="Download Diksha Somwanshi Resume"
          >
            <Download size={16} />
            <span>Resume</span>
          </a>

          {/* Mobile Menu Toggle Button */}
          <button
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div className={`mobile-drawer ${mobileMenuOpen ? 'open' : ''}`} aria-hidden={!mobileMenuOpen}>
        <ul className="mobile-nav-links">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a href={link.href} className="mobile-nav-link" onClick={handleLinkClick}>
                {link.name}
              </a>
            </li>
          ))}
        </ul>
        <div className="mobile-actions">
          <a
            href={personal.resumeUrl}
            download={personal.resumeFilename}
            className="btn btn-primary"
            onClick={handleLinkClick}
          >
            <Download size={16} />
            <span>Download Resume</span>
          </a>
        </div>
      </div>
    </header>
  );
}
