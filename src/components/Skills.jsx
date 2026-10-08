import React from 'react';
import {
  Code,
  Server,
  Database,
  Wrench,
  Binary,
  Layers,
  Sparkles,
  GitBranch,
  Terminal,
  Cloud,
  ShieldCheck,
  Send,
  Eye,
  Key,
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import '../styles/Skills.css';

// Map icon string or category to Lucide icon
function getCategoryIcon(category) {
  switch (category) {
    case 'Frontend':
      return <Layers size={20} />;
    case 'Backend & Auth':
      return <Server size={20} />;
    case 'Databases & ORM':
      return <Database size={20} />;
    case 'Tools & Workflow':
      return <Wrench size={20} />;
    case 'Core CS & Fundamentals':
      return <Binary size={20} />;
    default:
      return <Code size={20} />;
  }
}

function getItemIcon(iconName) {
  switch (iconName) {
    case 'react':
    case 'javascript':
    case 'html':
    case 'css':
    case 'sass':
    case 'bootstrap':
    case 'vite':
    case 'layout':
      return <Code size={14} />;
    case 'node':
    case 'express':
    case 'server':
      return <Server size={14} />;
    case 'database':
      return <Database size={14} />;
    case 'key':
    case 'lock':
      return <Key size={14} />;
    case 'shield':
      return <ShieldCheck size={14} />;
    case 'git':
      return <GitBranch size={14} />;
    case 'cloud':
      return <Cloud size={14} />;
    case 'send':
      return <Send size={14} />;
    case 'terminal':
      return <Terminal size={14} />;
    case 'eye':
      return <Eye size={14} />;
    case 'cpu':
      return <Binary size={14} />;
    default:
      return <Sparkles size={14} />;
  }
}

export default function Skills() {
  const { skills } = portfolioData;

  return (
    <section id="skills" className="section container">
      <div className="section-header">
        <span className="section-tag">
          <Sparkles size={14} /> Technical Stack
        </span>
        <h2 className="section-title">Skills & Technologies</h2>
        <p className="section-subtitle">
          Curated set of technologies and tools I leverage to build robust frontend architectures and responsive web apps.
        </p>
      </div>

      <div className="skills-grid">
        {skills.map((cat, idx) => (
          <div
            key={cat.category}
            className={`skills-category-card ${cat.category === 'Frontend' ? 'featured' : ''}`}
          >
            <div className="category-header">
              <div className="category-icon-box">{getCategoryIcon(cat.category)}</div>
              <div>
                <h3 className="category-title">{cat.category}</h3>
                <p className="category-desc">{cat.description}</p>
              </div>
            </div>

            <div className="skills-tag-cloud">
              {cat.items.map((skill) => {
                const isPrimary = skill.level === 'Primary';
                return (
                  <span
                    key={skill.name}
                    className={`skill-tag ${isPrimary ? 'primary-skill' : ''}`}
                    title={`${skill.name} (${skill.level})`}
                  >
                    <span className="skill-tag-icon">{getItemIcon(skill.icon)}</span>
                    <span>{skill.name}</span>
                  </span>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
