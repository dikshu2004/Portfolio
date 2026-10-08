import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Blogs from './components/Blogs';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  // Theme state: default to 'dark', persist in localStorage
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('portfolio-theme');
    if (saved) return saved;
    return 'dark';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  // Subtle IntersectionObserver to trigger smooth fade-in on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      {
        threshold: 0.08,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    const elements = document.querySelectorAll('.fade-in-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="portfolio-app">
      {/* 1. Sticky Navbar */}
      <Navbar theme={theme} toggleTheme={toggleTheme} />

      <main id="main-content">
        {/* 2. Hero Section */}
        <div className="fade-in-on-scroll is-visible">
          <Hero />
        </div>

        {/* 3. About Section */}
        <div className="fade-in-on-scroll">
          <About />
        </div>

        {/* 4. Skills Section */}
        <div className="fade-in-on-scroll">
          <Skills />
        </div>

        {/* 5. Projects Section */}
        <div className="fade-in-on-scroll">
          <Projects />
        </div>

        {/* 6. Technical Writing / Blogs Section */}
        <div className="fade-in-on-scroll">
          <Blogs />
        </div>

        {/* 7. Contact Section */}
        <div className="fade-in-on-scroll">
          <Contact />
        </div>
      </main>

      {/* 8. Footer */}
      <Footer />
    </div>
  );
}
