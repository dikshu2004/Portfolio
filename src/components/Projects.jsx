import React from 'react';
import { Sparkles } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import ProjectCard from './ProjectCard';
import '../styles/Projects.css';

export default function Projects() {
  const { projects } = portfolioData;

  return (
    <section id="projects" className="section container">
      <div className="section-header">
        <span className="section-tag">
          <Sparkles size={14} /> Featured Portfolio
        </span>
        <h2 className="section-title">Projects & Products</h2>
        <p className="section-subtitle">
          Real-world applications showcasing React development, design system architecture, AI integrations, and full-stack problem solving.
        </p>
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
