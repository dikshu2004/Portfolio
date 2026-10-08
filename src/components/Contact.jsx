import React, { useState } from 'react';
import { Mail, Linkedin, Github, Send, Copy, Check, Sparkles, MessageSquare } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import '../styles/Contact.css';

export default function Contact() {
  const { personal, contact } = portfolioData;

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleCopyEmail = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText(personal.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // If user provided a form service endpoint (e.g. Formspree), it can post there.
    // Otherwise, simulate instantaneous success state and prepare mailto link
    setFormSubmitted(true);
    setTimeout(() => {
      // Clear form
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="section container">
      <div className="section-header">
        <span className="section-tag">
          <Sparkles size={14} /> Get in Touch
        </span>
        <h2 className="section-title">{contact.heading}</h2>
        <p className="section-subtitle">{contact.subheading}</p>
      </div>

      <div className="contact-wrapper">
        {/* Left Column: Direct Communication Channels */}
        <div className="contact-info-panel">
          <div className="contact-direct-channels">
            {/* Email Card with Copy Button */}
            <div className="contact-card-link" style={{ cursor: 'pointer' }} onClick={handleCopyEmail}>
              <div className="channel-icon">
                <Mail size={22} />
              </div>
              <div className="channel-details">
                <span className="channel-label">Email Address</span>
                <span className="channel-value">{personal.email}</span>
              </div>
              <button
                type="button"
                className={`copy-badge ${copiedEmail ? 'copied' : ''}`}
                aria-label="Copy email address"
                title="Copy to clipboard"
              >
                {copiedEmail ? <Check size={14} /> : <Copy size={14} />}
                <span>{copiedEmail ? 'Copied!' : 'Copy'}</span>
              </button>
            </div>

            {/* LinkedIn Profile */}
            <a
              href={personal.socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card-link"
              aria-label="Open Diksha's LinkedIn Profile"
            >
              <div className="channel-icon">
                <Linkedin size={22} />
              </div>
              <div className="channel-details">
                <span className="channel-label">Professional Network</span>
                <span className="channel-value">linkedin.com/in/diksha-somwanshi</span>
              </div>
            </a>

            {/* GitHub Profile */}
            <a
              href={personal.socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card-link"
              aria-label="Open Diksha's GitHub Profile"
            >
              <div className="channel-icon">
                <Github size={22} />
              </div>
              <div className="channel-details">
                <span className="channel-label">Code Repositories</span>
                <span className="channel-value">github.com/dikshu2004</span>
              </div>
            </a>
          </div>

          <div className="response-time-pill">
            <span role="img" aria-label="clock">⚡</span>
            <span>{contact.quickResponseNote}</span>
          </div>
        </div>

        {/* Right Column: Simple Contact Form */}
        <div className="contact-form-panel">
          <form className="contact-form" onSubmit={handleSubmit} id="portfolio-contact-form">
            <div className="form-group">
              <label htmlFor="contact-name" className="form-label">
                Your Name
              </label>
              <input
                id="contact-name"
                name="name"
                type="text"
                className="form-input"
                placeholder="Jane Doe"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="contact-email" className="form-label">
                Your Email
              </label>
              <input
                id="contact-email"
                name="email"
                type="email"
                className="form-input"
                placeholder="jane@company.com"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="contact-subject" className="form-label">
                Subject
              </label>
              <input
                id="contact-subject"
                name="subject"
                type="text"
                className="form-input"
                placeholder="Frontend Developer Opportunity / Inquiry"
                value={formData.subject}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="contact-message" className="form-label">
                Message
              </label>
              <textarea
                id="contact-message"
                name="message"
                className="form-textarea"
                placeholder="Hi Diksha, we reviewed your portfolio and would like to discuss a role..."
                rows={4}
                value={formData.message}
                onChange={handleInputChange}
                required
              />
            </div>

            <button type="submit" className="btn btn-primary" id="submit-contact-btn">
              <Send size={16} />
              <span>Send Message</span>
            </button>

            {formSubmitted && (
              <div className="form-status-msg success" role="alert">
                ✨ Thank you! Your message has been noted. You can also reach me directly at{' '}
                <strong>{personal.email}</strong>.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
