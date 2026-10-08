import React from 'react';
import { GraduationCap, Award, Compass, Sparkles } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import '../styles/About.css';

export default function About() {
  const { about } = portfolioData;

  return (
    <section id="about" className="section container">
      <div className="section-header">
        <span className="section-tag">
          <Sparkles size={14} /> Background & Focus
        </span>
        <h2 className="section-title">About Me</h2>
        <p className="section-subtitle">
          Engineering student passionate about translating ideas into accessible, responsive digital products.
        </p>
      </div>

      <div className="about-grid">
        {/* Left Column: 3-4 Line Narrative + Education Details */}
        <div className="about-narrative">
          <div className="intro-text-block">
            {about.intro.map((paragraph, index) => (
              <p key={index} className="intro-paragraph">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Education Card */}
          <div className="education-card">
            <div className="card-top-label">
              <GraduationCap size={16} />
              <span>Education</span>
            </div>

            <h3 className="degree-title">{about.education.degree}</h3>
            <p className="institution-name">{about.education.institution}</p>

            <div className="edu-meta-row">
              <span className="cgpa-badge">
                <Award size={14} /> CGPA: {about.education.cgpa}
              </span>
              <span className="year-badge">Class of {about.education.graduationYear}</span>
            </div>

            <p className="edu-coursework">{about.education.highlights}</p>
          </div>
        </div>

        {/* Right Column: Target Role + Quick Scannable Stats */}
        <div className="about-sidebar">
          {/* Target Role Card */}
          <div className="target-role-card">
            <div className="target-role-header">
              <Compass size={20} />
              <h4>{about.targetRole.title}</h4>
            </div>
            <p className="target-role-desc">{about.targetRole.description}</p>
          </div>

          {/* Scannable Stats Grid */}
          <div className="stats-grid">
            {about.quickStats.map((stat, idx) => (
              <div key={idx} className="stat-box">
                <span className="stat-value">{stat.value}</span>
                <span className="stat-label">{stat.label}</span>
                <span className="stat-sub">{stat.sub}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
