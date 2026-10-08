import React from 'react';
import { ArrowRight, Download, Github, Linkedin, ExternalLink } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import '../styles/Hero.css';

export default function Hero() {
  const { personal } = portfolioData;

  return (
    <section id="home" className="hero-section container">
      <div className="hero-grid">
        {/* Left: Content */}
        <div className="hero-content">
          {/* Recruiter Status Pill */}
          <div className="availability-pill" role="status">
            <span className="pulse-dot" aria-hidden="true"></span>
            <span>{personal.availability}</span>
          </div>

          <p className="hero-greeting">Hello, I'm</p>
          <h1 className="hero-name">
            Diksha <span className="accent-text">Somwanshi</span>
          </h1>

          <div className="hero-title-badge">
            <span className="highlight">{personal.title}</span>
          </div>

          <p className="hero-pitch">{personal.pitch}</p>

          {/* Action Buttons: View Projects + Download Resume */}
          <div className="hero-cta-group">
            <a href="#projects" className="btn btn-primary" id="hero-view-projects-btn">
              <span>View Projects</span>
              <ArrowRight size={17} />
            </a>

            <a
              href={personal.resumeUrl}
              download={personal.resumeFilename}
              className="btn btn-secondary"
              id="hero-download-resume-btn"
              title="Download Diksha Somwanshi Resume PDF"
            >
              <Download size={17} />
              <span>Download Resume</span>
            </a>
          </div>

          {/* Social Links: GitHub & LinkedIn */}
          <div className="hero-socials">
            <a
              href={personal.socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="social-btn"
              aria-label="Visit Diksha's GitHub profile"
              id="hero-github-link"
            >
              <Github size={18} />
              <span>GitHub</span>
            </a>

            <a
              href={personal.socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="social-btn"
              aria-label="Visit Diksha's LinkedIn profile"
              id="hero-linkedin-link"
            >
              <Linkedin size={18} />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>

        {/* Right: Modern Code Card Visual */}
        <div className="hero-visual" aria-hidden="true">
          <div className="hero-visual-card">
            <div className="code-header">
              <div className="code-controls">
                <span className="ctrl-dot red"></span>
                <span className="ctrl-dot yellow"></span>
                <span className="ctrl-dot green"></span>
              </div>
              <span className="code-file-name">diksha-developer.ts</span>
              <span className="code-badge">React 18</span>
            </div>
            <div className="code-body">
              <pre>
                <code>
                  <span className="syn-keyword">const</span> <span className="syn-var">frontendEngineer</span> = &#123;{'\n'}
                  {'  '}<span className="syn-prop">name</span>: <span className="syn-string">"{personal.name}"</span>,{'\n'}
                  {'  '}<span className="syn-prop">role</span>: <span className="syn-string">"Frontend / React Developer"</span>,{'\n'}
                  {'  '}<span className="syn-prop">degree</span>: <span className="syn-string">"B.E. Computer Engineering"</span>,{'\n'}
                  {'  '}<span className="syn-prop">batch</span>: <span className="syn-number">2026</span>,{'\n'}
                  {'  '}<span className="syn-prop">cgpa</span>: <span className="syn-number">8.18</span>, <span className="syn-comment">// First Class with Distinction</span>{'\n'}
                  {'  '}<span className="syn-prop">coreSkills</span>: [<span className="syn-string">"React.js"</span>, <span className="syn-string">"JavaScript"</span>, <span className="syn-string">"CSS/SCSS"</span>],{'\n'}
                  {'  '}<span className="syn-prop">seekingRole</span>: <span className="syn-string">"Fresher Frontend / SDE"</span>,{'\n'}
                  {'  '}<span className="syn-prop">immediateJoiner</span>: <span className="syn-keyword">true</span>{'\n'}
                  &#125;;
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
