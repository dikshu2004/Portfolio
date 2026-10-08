import React from 'react';
import { Github, Linkedin, Mail, ArrowUp, BookOpen } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import '../styles/Footer.css';

export default function Footer() {
  const { personal } = portfolioData;
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-wrapper">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <span className="footer-brand-title">
              {personal.name} <span style={{ color: 'var(--accent)' }}>•</span> Frontend Developer
            </span>
            <p className="footer-tagline">
              Crafting accessible, pixel-perfect user interfaces with React and modern web standards.
            </p>
          </div>

          <div className="footer-social-links" aria-label="Social media profiles">
            <a
              href={personal.socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-icon"
              aria-label="GitHub Profile"
              title="GitHub"
            >
              <Github size={18} />
            </a>

            <a
              href={personal.socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-icon"
              aria-label="LinkedIn Profile"
              title="LinkedIn"
            >
              <Linkedin size={18} />
            </a>

            <a
              href={personal.socialLinks.medium}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-icon"
              aria-label="Medium Articles"
              title="Medium Articles"
            >
              <BookOpen size={18} />
            </a>

            <a
              href={`mailto:${personal.email}`}
              className="footer-social-icon"
              aria-label="Email Diksha"
              title="Send Direct Email"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {currentYear} {personal.name}. All rights reserved.</p>

          <button
            onClick={scrollToTop}
            className="back-to-top-btn"
            aria-label="Scroll back to top of the page"
          >
            <span>Back to top</span>
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}
