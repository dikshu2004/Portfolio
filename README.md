# Diksha Somwanshi — Frontend & React Developer Portfolio

[![React](https://img.shields.io/badge/React-18-61DAFB?style=flat-square&logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-6.x-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev/)
[![CSS3](https://img.shields.io/badge/CSS3-Vanilla_Custom_Tokens-1572B6?style=flat-square&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![Vercel](https://img.shields.io/badge/Deployed-Vercel-000000?style=flat-square&logo=vercel&logoColor=white)](https://vercel.com/)
[![Medium](https://img.shields.io/badge/Technical_Writing-Medium-12100E?style=flat-square&logo=medium&logoColor=white)](https://medium.com/@dikshasomwanshi24)

A modern, sober, single-page developer portfolio website built with **React + Vite** and clean **Vanilla CSS**. Specially engineered for technical recruiters and hiring managers who review candidate profiles in under 60 seconds with crisp typography, scannable case studies, and technical writing.

---

## 🚀 Live Demo & Links

- **Live Website:** [View Portfolio](https://dikshu2004.github.io/Portfolio/) *(or your custom Vercel domain)*
- **Technical Articles:** [Medium Blog (@dikshasomwanshi24)](https://medium.com/@dikshasomwanshi24)
- **GitHub Profile:** [github.com/dikshu2004](https://github.com/dikshu2004)
- **LinkedIn Profile:** [linkedin.com/in/diksha-somwanshi-097809257](https://linkedin.com/in/diksha-somwanshi-097809257)

---

## 🎨 Design Philosophy & Color System

- **Aesthetic:** Minimalist, sober, whitespace-driven Scandinavian engineering style. No loud neon gradients or distracting animations.
- **Color System:**
  - **Dark Mode:** Deep Slate Obsidian (`#0b0f14`), refined surface (`#131a24`), mineral sage accent (`#14b8a6`).
  - **Light Mode:** Warm Alabaster canvas (`#fcfbf9`), crisp slate text (`#1c1917`), deep spruce accent (`#0f766e`).
- **Typography:**
  - **Headings:** [Plus Jakarta Sans](https://fonts.google.com/specimen/Plus+Jakarta+Sans)
  - **Body:** [Inter](https://fonts.google.com/specimen/Inter)
  - **Code & Badges:** [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono)
- **Accessibility:** WCAG AA contrast compliant, keyboard focus visible outlines (`:focus-visible`), and semantic HTML5 landmarks throughout.

---

## ✨ Features

- **⚡ Fast Loading & Lightweight:** Bundled with Vite (<60KB total gzipped footprint) with lazy loading and zero heavy third-party UI libraries.
- **🌓 Dark / Light Mode Toggle:** Smooth transition with persistent theme preference saved in `localStorage`.
- **📱 Fully Responsive:** Mobile-first architecture that seamlessly adapts across mobile, tablet, and widescreen desktop monitors.
- **🔍 Clickable Case Studies:** Each project features an interactive **"Problem → What I Built → Outcome"** architecture breakdown.
- **✍️ Technical Writing Showcase:** Integrated Medium blog articles with reading times, key takeaways, and direct links.
- **📋 One-Click Email Copy:** Copy email to clipboard with instant visual feedback in addition to standard `mailto:`.
- **📥 Direct Resume Access:** 1-click resume download button directly accessible in the sticky navbar and hero.
- **🌐 SEO & Social Ready:** Complete Open Graph (`og:*`), Twitter Cards, meta description, and SVG favicon.

---

## 🛠️ Built With

| Layer | Technology | Purpose |
|---|---|---|
| **Core Framework** | [React 18](https://react.dev/) | Component-driven UI architecture and state management |
| **Build Tooling** | [Vite 6](https://vitejs.dev/) | Ultra-fast HMR and optimized production bundling |
| **Styling** | Vanilla CSS3 (Custom Tokens) | Zero-dependency styling with native CSS variables for theming |
| **Icons** | [Lucide React](https://lucide.dev/) | Clean, lightweight, tree-shakeable SVG icons |
| **Typography** | Google Fonts | Plus Jakarta Sans, Inter, and JetBrains Mono |
| **Deployment** | [Vercel](https://vercel.com/) / [GitHub Pages](https://pages.github.com/) | Global edge delivery and continuous integration |

---

## 🧭 Sections Overview

1. **Sticky Navbar:** Brand initials (`DS`), section links (`Home`, `About`, `Skills`, `Projects`, `Blogs`, `Contact`), Dark/Light mode toggle, and download "Resume" button.
2. **Hero:** Name, title (*Frontend / React Developer*), recruiter pitch, availability status pill, action buttons (*View Projects*, *Download Resume*, *GitHub*, *LinkedIn*), and a sober code terminal visual.
3. **About:** 3-line intro, education (*B.E. Computer Engineering, 2026, Sanghavi College of Engineering, CGPA 8.18 Distinction*), target role, and scannable stats.
4. **Skills:** Grouped by category (*Frontend*, *Backend & Auth*, *Databases & ORM*, *Tools & Workflow*, *Core CS Fundamentals*) using icons and tag pills (**zero percentage bars**).
5. **Projects:** Card layout featuring:
   - **AI Interview Prep Coach** (React, Express, MongoDB, Gemini API) — adaptive technical interview engine.
   - **UIForge Component Library** (SCSS, Vanilla JS, Vite, npm) — modular design system & component library published on npm and Netlify.
   - **SensiQ Inclusive E-Learning Platform** (React, Node.js, Express, MongoDB, Gemini AI, Web Speech API) — accessible platform with a published research paper.
   - Expandable **"Problem → What I Built → Outcome"** breakdown on each card.
6. **Technical Writing / Medium Blogs:**
   - *What I Learned While Building a UI Library From Scratch as a Beginner* (UIForge & SCSS)
   - *Promises in JavaScript: Demystifying Asynchronous Code* (JavaScript & Async)
   - *What Building a Mini Job Portal Taught Me About React Router* (React & Routing)
   - Direct link to all articles on Medium ([@dikshasomwanshi24](https://medium.com/@dikshasomwanshi24)).
7. **Contact:** Simple message form, direct email with 1-click clipboard copy (`dikshasomwanshi24@gmail.com`), LinkedIn, GitHub, and 24h response guarantee.
8. **Footer:** Copyright notice, social profile icons, and smooth back-to-top button.

---

## ⚙️ Easy Customization (Single Data File)

All personal content, links, projects, skills, education, and articles are centralized in a single file:
```
src/data/portfolioData.js
```
To update any detail (such as changing a URL, adding a new project, or updating work history), simply edit `portfolioData.js`. All UI components will update automatically without needing to edit any JSX code.

---

## 💻 How to Run Locally

### Prerequisites
- Node.js (v18.x or v20.x+ recommended)
- npm or yarn

### 1. Clone the repository
```bash
git clone https://github.com/dikshu2004/Portfolio.git
cd Portfolio
```

### 2. Install dependencies
```bash
npm install
```

### 3. Start development server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Build for production
```bash
npm run build
```
The optimized production bundle will be generated in the `dist/` directory.

### 5. Preview production build locally
```bash
npm run preview
```

---

## 🚢 Deploy to Vercel

### Method 1: Via Vercel Dashboard (Recommended)
1. Push your code to GitHub:
   ```bash
   git add .
   git commit -m "feat: complete React Vite portfolio"
   git push origin main
   ```
2. Navigate to [vercel.com](https://vercel.com) and sign in.
3. Click **"Add New..."** → **"Project"**.
4. Select and import your **`Portfolio`** repository.
5. Vercel automatically detects the Vite preset:
   - **Framework Preset:** `Vite`
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
6. Click **Deploy**. Your portfolio will be live in seconds with automatic SSL and global CDN!

### Method 2: Via Vercel CLI
```bash
npm install -g vercel
vercel
```

---

## 📁 Project Directory Structure

```
Portfolio/
├── public/
│   ├── Diksha_Resume.pdf          # Official Resume PDF
│   ├── favicon.svg                # Mineral Sage SVG Favicon
│   └── projects/                  # Project SVG preview mockups
│       ├── interview-coach.svg
│       ├── uiforge.svg
│       └── sensiq.svg
├── src/
│   ├── components/
│   │   ├── Navbar.jsx             # Sticky navigation & Dark/Light mode toggle
│   │   ├── Hero.jsx               # Hero section & developer code snippet
│   │   ├── About.jsx              # Intro, education & scannable stats
│   │   ├── Skills.jsx             # Categorized skill tags (no percentage bars)
│   │   ├── Projects.jsx           # Case studies with deep-dive accordion
│   │   ├── ProjectCard.jsx        # Individual project card
│   │   ├── Blogs.jsx              # Medium technical articles
│   │   ├── Contact.jsx            # Form & 1-click email copy
│   │   └── Footer.jsx             # Minimal footer & back-to-top button
│   ├── data/
│   │   └── portfolioData.js       # Centralized personal data
│   ├── styles/
│   │   ├── index.css              # Sober design tokens & dark/light theme
│   │   ├── Navbar.css
│   │   ├── Hero.css
│   │   ├── About.css
│   │   ├── Skills.css
│   │   ├── Projects.css
│   │   ├── Blogs.css
│   │   ├── Contact.css
│   │   └── Footer.css
│   ├── App.jsx                    # Root app orchestrating all sections
│   └── main.jsx                   # React DOM mount point
├── assets/                        # Asset storage (Resume PDF)
├── index.html                     # SEO & Open Graph meta tags
├── package.json                   # Dependencies and scripts
├── README.md                      # Project documentation
└── vite.config.js                 # Vite build configuration
```

---

## 📬 Contact & Connect

- **Email:** [dikshasomwanshi24@gmail.com](mailto:dikshasomwanshi24@gmail.com)
- **LinkedIn:** [linkedin.com/in/diksha-somwanshi-097809257](https://linkedin.com/in/diksha-somwanshi-097809257)
- **GitHub:** [github.com/dikshu2004](https://github.com/dikshu2004)
- **Medium:** [@dikshasomwanshi24](https://medium.com/@dikshasomwanshi24)

---

## 📄 License & Credits
Designed and developed by **Diksha Somwanshi** (B.E. Computer Engineering, 2026).  
Licensed under the [MIT License](LICENSE).
