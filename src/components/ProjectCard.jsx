import React, { useState } from 'react';
import { ExternalLink, Github, ChevronDown, AlertCircle, Wrench, CheckCircle } from 'lucide-react';

export default function ProjectCard({ project }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <article className="project-card">
      {/* Visual Preview / Screenshot */}
      <div className="project-image-wrapper">
        <img
          src={project.image}
          alt={`Screenshot preview of ${project.title}`}
          className="project-img"
          loading="lazy"
          onError={(e) => {
            // Fallback gracefully to subtle background gradient if image fails
            e.currentTarget.style.display = 'none';
          }}
        />
        {project.badge && <span className="project-badge">{project.badge}</span>}
      </div>

      {/* Card Body */}
      <div className="project-body">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.shortDescription}</p>

        {/* Tech Stack Pills */}
        <div className="project-tech-tags" aria-label="Technologies used">
          {project.techStack.map((tech) => (
            <span key={tech} className="project-tech-pill">
              {tech}
            </span>
          ))}
        </div>

        {/* Action Links */}
        <div className="project-actions">
          {project.hasLiveDemo ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="project-action-btn primary"
              aria-label={`View live demo of ${project.title}`}
            >
              <ExternalLink size={15} />
              <span>Live Demo</span>
            </a>
          ) : (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="project-action-btn primary"
              aria-label={`View project details for ${project.title}`}
            >
              <ExternalLink size={15} />
              <span>Explore Repo</span>
            </a>
          )}

          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="project-action-btn outline"
            aria-label={`View source code of ${project.title} on GitHub`}
          >
            <Github size={15} />
            <span>GitHub</span>
          </a>
        </div>

        {/* Expandable Problem → What I Built → Outcome Button */}
        {project.deepDive && (
          <>
            <button
              className={`deep-dive-toggle ${isExpanded ? 'expanded' : ''}`}
              onClick={() => setIsExpanded(!isExpanded)}
              aria-expanded={isExpanded}
              aria-label={`Toggle engineering breakdown for ${project.title}`}
            >
              <span>{isExpanded ? 'Hide Architecture Breakdown' : 'Problem → Solution → Outcome'}</span>
              <ChevronDown size={15} />
            </button>

            {isExpanded && (
              <div className="deep-dive-content" role="region" aria-label="Project details breakdown">
                <div className="deep-dive-item">
                  <span className="deep-dive-label problem">
                    <AlertCircle size={13} /> Problem
                  </span>
                  <p className="deep-dive-text">{project.deepDive.problem}</p>
                </div>

                <div className="deep-dive-item">
                  <span className="deep-dive-label solution">
                    <Wrench size={13} /> What I Built
                  </span>
                  <p className="deep-dive-text">{project.deepDive.whatIBuilt}</p>
                </div>

                <div className="deep-dive-item">
                  <span className="deep-dive-label outcome">
                    <CheckCircle size={13} /> Outcome
                  </span>
                  <p className="deep-dive-text">{project.deepDive.outcome}</p>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </article>
  );
}
