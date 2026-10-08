import React from 'react';
import { BookOpen, ExternalLink, Clock, CheckCircle2, ArrowRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import '../styles/Blogs.css';

export default function Blogs() {
  const { blogs, personal } = portfolioData;

  if (!blogs || blogs.length === 0) return null;

  return (
    <section id="blogs" className="section container">
      <div className="section-header">
        <span className="section-tag">
          <BookOpen size={13} /> Technical Writing
        </span>
        <h2 className="section-title">Medium Articles & Blogs</h2>
        <p className="section-subtitle">
          Documenting lessons learned while building UI systems, demystifying asynchronous JavaScript, and architecting client-side navigation.
        </p>
      </div>

      <div className="blogs-grid">
        {blogs.map((article) => (
          <article key={article.id} className="blog-card">
            {/* Top Meta: Category + Read Time */}
            <div className="blog-meta-top">
              <span className="blog-category-tag">{article.category}</span>
              <span className="blog-reading-time">
                <Clock size={13} />
                <span>{article.date} • {article.readTime}</span>
              </span>
            </div>

            {/* Article Title */}
            <h3 className="blog-title">
              <a
                href={article.mediumUrl}
                target="_blank"
                rel="noopener noreferrer"
                title={`Read "${article.title}" on Medium`}
              >
                {article.title}
              </a>
            </h3>

            {/* Excerpt */}
            <p className="blog-excerpt">{article.excerpt}</p>

            {/* Key Takeaways Highlights */}
            {article.highlights && article.highlights.length > 0 && (
              <div className="blog-highlights" aria-label="Key article takeaways">
                {article.highlights.map((highlight, index) => (
                  <div key={index} className="blog-highlight-item">
                    <CheckCircle2 size={13} />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            )}

            {/* Card Footer: Platform + External Link */}
            <div className="blog-card-actions">
              <span className="medium-publisher-badge">
                <BookOpen size={14} />
                <span>Medium Article</span>
              </span>

              <a
                href={article.mediumUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="blog-cta-link"
                aria-label={`Read ${article.title} on Medium`}
              >
                <span>Read Full Post</span>
                <ArrowRight size={15} />
              </a>
            </div>
          </article>
        ))}
      </div>

      {/* View All on Medium Callout */}
      <div className="blogs-footer-cta">
        <a
          href={personal.socialLinks.medium}
          target="_blank"
          rel="noopener noreferrer"
          className="medium-channel-btn"
          title="Visit Diksha's Medium Profile"
        >
          <BookOpen size={17} />
          <span>Read more insights on Medium (@dikshasomwanshi24)</span>
          <ExternalLink size={15} />
        </a>
      </div>
    </section>
  );
}
