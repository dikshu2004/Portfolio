/**
 * PORTFOLIO DATA CONFIGURATION
 * ============================================================
 * All personal content, links, projects, skills, and copy are
 * centralized in this single file. You can easily update your
 * information here without modifying any React components.
 * 
 * Items marked with TODO can be customized with your own links.
 * ============================================================
 */

export const portfolioData = {
  // Personal & Header Information
  personal: {
    name: "Diksha Somwanshi",
    initials: "DS",
    title: "Frontend / React Developer",
    availability: "Available for Full-Time & Internship Roles (Batch 2026)",
    
    // One-line pitch for recruiters (punchy & scannable in under 10 seconds)
    pitch: "Passionate about building fast, accessible, and pixel-perfect web applications with React, modern JavaScript, and clean component architectures.",
    
    // Contact Information
    email: "dikshasomwanshi24@gmail.com",
    phone: "+91 9322532154", // TODO: Update or hide if you prefer not to display phone number
    location: "Maharashtra, India", // TODO: Update city if needed
    
    // Resume file path (located in public/ folder)
    resumeUrl: "/Diksha_Resume.pdf",
    resumeFilename: "Diksha_Somwanshi_Resume.pdf",
    
    // Social and Professional Profiles
    socialLinks: {
      github: "https://github.com/dikshu2004", // TODO: Update GitHub profile link if needed
      linkedin: "https://linkedin.com/in/diksha-somwanshi-097809257", // TODO: Update LinkedIn URL if needed
      medium: "https://medium.com/@dikshasomwanshi24", // TODO: Update Medium URL if needed
    },
  },

  // About Section Data
  about: {
    // 3-4 line intro tailored for recruiters
    intro: [
      "I am a Computer Engineering undergraduate (Class of 2026) with a passion for frontend engineering, design systems, and responsive user experiences.",
      "With hands-on experience building full-stack web applications and publishing reusable UI component libraries, I love bridging design and code.",
      "I prioritize clean separation of concerns, web accessibility (WCAG), and high-performance rendering in every interface I craft.",
    ],
    
    // Education details
    education: {
      degree: "B.E. in Computer Engineering",
      institution: "Sanghavi College of Engineering",
      graduationYear: "2026",
      cgpa: "8.18 / 10 (First Class with Distinction)",
      highlights: "Core coursework in Data Structures & Algorithms, Object-Oriented Programming, Database Management Systems, and Software Engineering.",
    },

    // What kind of role looking for
    targetRole: {
      title: "Looking for: Entry-level Frontend / React Developer",
      description:
        "Seeking a full-time role or software engineering internship where I can contribute immediately to production React codebases, collaborate within modern Agile teams, and help ship delightful user interfaces.",
    },

    // Quick scannable highlights for recruiters
    quickStats: [
      { label: "B.E. CGPA", value: "8.18", sub: "With Distinction" },
      { label: "Internships", value: "2+", sub: "Industry Experiences" },
      { label: "Components Built", value: "10+", sub: "Published on npm/Netlify" },
      { label: "Graduation", value: "2026", sub: "Ready to Join" },
    ],
  },

  // Skills Section Data - Grouped by category (Tags/Icons, NO percentage bars)
  skills: [
    {
      category: "Frontend",
      description: "Building responsive, accessible, and performant user interfaces",
      items: [
        { name: "React.js", level: "Primary", icon: "react" },
        { name: "JavaScript (ES6+)", level: "Primary", icon: "javascript" },
        { name: "React Router", level: "Core", icon: "route" },
        { name: "HTML5 & Semantic Web", level: "Core", icon: "html" },
        { name: "CSS3 & Modern CSS", level: "Core", icon: "css" },
        { name: "SCSS / Sass", level: "Core", icon: "sass" },
        { name: "Responsive UI Design", level: "Core", icon: "layout" },
        { name: "Bootstrap", level: "Familiar", icon: "bootstrap" },
        { name: "Vite", level: "Core", icon: "vite" },
      ],
    },
    {
      category: "Backend & Auth",
      description: "Designing RESTful services and secure authentication flows",
      items: [
        { name: "Node.js", level: "Core", icon: "node" },
        { name: "Express.js", level: "Core", icon: "express" },
        { name: "RESTful APIs", level: "Core", icon: "api" },
        { name: "JWT Authentication", level: "Core", icon: "key" },
        { name: "Passport.js", level: "Core", icon: "shield" },
        { name: "Session Auth", level: "Core", icon: "lock" },
      ],
    },
    {
      category: "Databases & ORM",
      description: "Data modeling, schema design, and persistence layers",
      items: [
        { name: "MongoDB", level: "Core", icon: "database" },
        { name: "Mongoose", level: "Core", icon: "database" },
        { name: "PostgreSQL", level: "Familiar", icon: "database" },
        { name: "Drizzle ORM", level: "Familiar", icon: "database" },
      ],
    },
    {
      category: "Tools & Workflow",
      description: "Development tooling, version control, and cloud deployment",
      items: [
        { name: "Git & GitHub", level: "Core", icon: "git" },
        { name: "Postman", level: "Core", icon: "send" },
        { name: "Docker (Basics)", level: "Familiar", icon: "docker" },
        { name: "Vercel", level: "Deployment", icon: "cloud" },
        { name: "Netlify", level: "Deployment", icon: "cloud" },
        { name: "Render", level: "Deployment", icon: "server" },
        { name: "VS Code", level: "Tool", icon: "terminal" },
      ],
    },
    {
      category: "Core CS & Fundamentals",
      description: "Computer science foundations and problem solving",
      items: [
        { name: "Data Structures & Algorithms", level: "Core", icon: "cpu" },
        { name: "Object-Oriented Programming (OOP)", level: "Core", icon: "box" },
        { name: "Database Management Systems (DBMS)", level: "Core", icon: "layers" },
        { name: "Operating Systems", level: "Core", icon: "terminal" },
        { name: "Web Accessibility (WCAG)", level: "Core", icon: "eye" },
      ],
    },
  ],

  // Projects Section Data
  // Includes screenshot/mockup, title, 2-line description, tags, live/github links,
  // AND expandable "Problem → What I built → Outcome" section
  projects: [
    {
      id: "ai-interview-coach",
      title: "AI Interview Prep Coach",
      badge: "AI & Full-Stack",
      shortDescription:
        "An adaptive technical interview engine delivering dynamic role-based questions and real-time rubric feedback powered by Google Gemini AI.",
      image: "/projects/interview-coach.svg",
      imageFallbackBg: "linear-gradient(135deg, #1e1b4b 0%, #312e81 50%, #4338ca 100%)",
      techStack: ["React.js", "Express.js", "MongoDB", "Gemini API", "JWT Auth", "Node.js"],
      liveUrl: "https://github.com/dikshu2004/AI-Interview-Coach", // TODO: Update with deployed live URL once ready
      githubUrl: "https://github.com/dikshu2004/AI-Interview-Coach",
      hasLiveDemo: false, // Set to true when live demo is hosted
      deepDive: {
        problem:
          "Fresher software candidates struggle to practice structured technical interviews with immediate, constructive, and role-specific feedback before facing real recruiters.",
        whatIBuilt:
          "Engineered an interactive interview simulation using React with dynamic difficulty scaling. Integrated Gemini API for custom prompt-driven evaluations, secured candidate sessions via JWT middleware, and built a clean progress dashboard.",
        outcome:
          "Delivered sub-second real-time answer evaluations, organized candidate response logs in MongoDB, and established a modular prompt architecture for evaluating code quality and communication clarity.",
      },
    },
    {
      id: "uiforge",
      title: "UIForge Component Library",
      badge: "Design System & npm",
      shortDescription:
        "A zero-dependency, modular UI component library and design system published with token-based styling and an interactive documentation page.",
      image: "/projects/uiforge.svg",
      imageFallbackBg: "linear-gradient(135deg, #064e3b 0%, #065f46 50%, #047857 100%)",
      techStack: ["Vanilla JS", "HTML5", "SCSS / Sass", "Vite", "Design Tokens", "npm"],
      liveUrl: "https://uiforge-library.netlify.app/",
      githubUrl: "https://github.com/dikshu2004/UIforge",
      hasLiveDemo: true,
      deepDive: {
        problem:
          "Standard web applications often rely on heavy, opinionated CSS frameworks that inflate bundle sizes, limit custom theming, and introduce unnecessary runtime dependencies.",
        whatIBuilt:
          "Designed 10+ core reusable components (Forms, Dropdowns, Tabs, Modals, Pagination) with a strict BEM architecture, tokenized SCSS variables, and a responsive 12-column grid system built on Vite.",
        outcome:
          "Achieved a lightweight zero-runtime-overhead footprint (<15KB), authored comprehensive live documentation with copy-paste code snippets, and published it on npm and Netlify.",
      },
    },
    {
      id: "sensiq",
      title: "SensiQ – Inclusive E-Learning",
      badge: "Research Paper & Accessibility",
      shortDescription:
        "An accessible e-learning ecosystem built for Deaf, Mute, and Visually Impaired learners, backed by published academic research.",
      image: "/projects/sensiq.svg",
      imageFallbackBg: "linear-gradient(135deg, #4c1d95 0%, #5b21b6 50%, #7c3aed 100%)",
      techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "Gemini AI", "Web Speech API", "Passport.js"],
      liveUrl: "https://sensiq-final.onrender.com/",
      githubUrl: "https://github.com/dikshu2004/SENSIQ-FINAL",
      hasLiveDemo: true,
      deepDive: {
        problem:
          "Traditional digital education tools lack multimodal assistive technologies, leaving visually impaired, deaf, or speech-impaired learners without equitable access to interactive courseware.",
        whatIBuilt:
          "Developed an all-inclusive web platform featuring bidirectional Speech-to-Text, Text-to-Speech synthesis via Web Speech API, Indian Sign Language (ISL) conversion pipelines, and AI-assisted tutoring powered by Google Gemini.",
        outcome:
          "Published an academic research paper on assistive pedagogical technology, validated with accessibility test suites, and architected secure authentication using Passport.js and JWT.",
      },
    },
  ],

  // Work Experience Data (from resume)
  experience: [
    {
      role: "Software Engineer Intern",
      company: "Yuga Yatra Retail (OPC) Pvt. Ltd.",
      period: "Mar 2026 – May 2026",
      location: "Remote / Hybrid",
      highlights: [
        "Developed and refined responsive product catalog and bidding interfaces for an auction marketplace using React.js and modern CSS.",
        "Collaborated in Agile sprints, performed peer code reviews, and addressed cross-browser UI bugs to ensure seamless responsive performance.",
      ],
      skills: ["React.js", "CSS3", "Agile / Sprints", "Code Reviews", "Cross-Browser UI"],
    },
    {
      role: "Full Stack Development Intern",
      company: "Sumago Infotech Pvt. Ltd.",
      period: "Dec 2024 – Feb 2025",
      location: "Nashik, India",
      highlights: [
        "Architected mobile-first frontend pages and dynamic navigation for a food delivery platform using JavaScript, HTML5, and Bootstrap.",
        "Engineered reusable UI components and optimized rendering performance across varying mobile viewport sizes.",
      ],
      skills: ["JavaScript", "HTML5", "Bootstrap", "Responsive Layouts", "UI Optimization"],
    },
  ],

  // Certifications (from resume)
  certifications: [
    {
      title: "Data Analytics Virtual Experience",
      issuer: "Deloitte Australia",
      date: "Apr 2026",
    },
    {
      title: "Data Visualisation: Empowering Business with Effective Insights",
      issuer: "Tata",
      date: "Apr 2026",
    },
    {
      title: "Top Score Band (50+)",
      issuer: "TCS iON National Qualifier Test (NQT)",
      date: "2026",
    },
  ],

  // Technical Writing & Medium Blogs
  blogs: [
    {
      id: "blog-uiforge",
      title: "What I Learned While Building a UI Library From Scratch as a Beginner",
      category: "UIForge & SCSS",
      date: "Sep 13",
      readTime: "4 min read",
      mediumUrl: "https://medium.com/@dikshasomwanshi24/what-i-learned-while-building-a-ui-library-from-scratch-as-a-beginner-7d2a378b51e2",
      excerpt:
        "Key architectural takeaways, design token strategies, responsive 12-column grid foundations, and practical lessons learned while building the UIForge component library from the ground up.",
      highlights: [
        "Architecting design tokens: colors, spacing scale, fluid typography, and elevation",
        "Building a lightweight 12-column responsive grid with zero external dependencies",
        "Engineering accessible components (modals, dropdowns, tabs) with pure Vanilla JS and ARIA standards",
      ],
    },
    {
      id: "blog-promises",
      title: "Promises in JavaScript: Demystifying Asynchronous Code",
      category: "JavaScript & Async",
      date: "Sep 23",
      readTime: "5 min read",
      mediumUrl: "https://medium.com/@dikshasomwanshi24/promises-in-javascript-7c2af71f30eb",
      excerpt:
        "A clear and practical breakdown of Promises in JavaScript—understanding states (Pending, Fulfilled, Rejected), eliminating Callback Hell, and using async/await for cleaner workflows.",
      highlights: [
        "Why Promises were introduced and how they solve the single-threaded asynchronous challenge",
        "Demystifying Promise states, executor functions, and .then()/.catch() chaining",
        "Real-world API simulations and transitioning to synchronous-looking async/await syntax",
      ],
    },
    {
      id: "blog-react-router",
      title: "What Building a Mini Job Portal Taught Me About React Router",
      category: "React & Routing",
      date: "Oct 12",
      readTime: "6 min read",
      mediumUrl: "https://medium.com/@dikshasomwanshi24/what-building-a-mini-job-portal-taught-me-about-react-router-2245d560e3c9",
      excerpt:
        "How building an interactive job portal helped me master client-side navigation: dynamic routing with useParams, search filters with useSearchParams, nested layouts with Outlet, and programmatic redirects.",
      highlights: [
        "Dynamic routing with useParams for individual job detail views",
        "Managing URL search filters and query state with useSearchParams",
        "Structured nested layouts with Outlet and error boundary handling",
      ],
    },
  ],

  // Contact Section Data
  contact: {
    heading: "Let's Connect",
    subheading: "I am actively seeking fresher Frontend / React Developer roles and software engineering opportunities. My inbox is always open!",
    quickResponseNote: "⚡ Fast response: Typically replies within 24 hours",
    formActionUrl: "", // TODO: Add your Formspree endpoint (e.g. https://formspree.io/f/xyz) if you want direct email delivery
  },
};

