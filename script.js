// ==========================================================================
// Diksha Somwanshi - Portfolio & Resume Interactive Scripts
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
    // 1. Current Year in Footer
    const currentYearEl = document.getElementById('currentYear');
    if (currentYearEl) {
        currentYearEl.textContent = new Date().getFullYear();
    }

    // 2. Dark / Light Theme Toggle
    const themeToggleBtn = document.getElementById('themeToggle');
    const htmlElement = document.documentElement;

    function applyTheme(theme) {
        htmlElement.setAttribute('data-theme', theme);
        document.body.setAttribute('data-theme', theme);
        localStorage.setItem('diksha_portfolio_theme', theme);
        if (themeToggleBtn) {
            themeToggleBtn.setAttribute('title', theme === 'dark' ? 'Switch to Light Theme' : 'Switch to Dark Theme');
            themeToggleBtn.setAttribute('aria-label', theme === 'dark' ? 'Switch to Light Theme' : 'Switch to Dark Theme');
        }
    }

    const savedTheme = localStorage.getItem('diksha_portfolio_theme');
    if (savedTheme) {
        applyTheme(savedTheme);
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
        applyTheme('light');
    } else {
        applyTheme('dark');
    }

    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            const currentTheme = htmlElement.getAttribute('data-theme') || 'dark';
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            applyTheme(newTheme);
        });
    }

    // 3. Mobile Navigation Menu Toggle
    const mobileToggle = document.getElementById('mobileToggle');
    const navMenu = document.getElementById('navMenu');

    if (mobileToggle && navMenu) {
        mobileToggle.addEventListener('click', () => {
            navMenu.classList.toggle('open');
            const icon = mobileToggle.querySelector('i');
            if (icon) {
                icon.classList.toggle('fa-bars');
                icon.classList.toggle('fa-xmark');
            }
        });

        const navLinks = navMenu.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('open');
                const icon = mobileToggle.querySelector('i');
                if (icon) {
                    icon.classList.add('fa-bars');
                    icon.classList.remove('fa-xmark');
                }
            });
        });
    }

    // 4. Dynamic Typing Effect for Hero Subtitle
    const typingElement = document.querySelector('.typing-text');
    if (typingElement) {
        const words = [
            'Full Stack Developer',
            'React.js Specialist',
            'Node.js & Express Engineer',
            'UI Library Architect',
            'Computer Engineering Graduate'
        ];
        let wordIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        let typingSpeed = 100;

        function typeLoop() {
            const currentWord = words[wordIndex];
            if (isDeleting) {
                typingElement.textContent = currentWord.substring(0, charIndex - 1);
                charIndex--;
                typingSpeed = 50;
            } else {
                typingElement.textContent = currentWord.substring(0, charIndex + 1);
                charIndex++;
                typingSpeed = 100;
            }

            if (!isDeleting && charIndex === currentWord.length) {
                isDeleting = true;
                typingSpeed = 1800;
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                wordIndex = (wordIndex + 1) % words.length;
                typingSpeed = 400;
            }

            setTimeout(typeLoop, typingSpeed);
        }

        typeLoop();
    }

    // 5. Active Navigation Link on Scroll (ScrollSpy)
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    function highlightActiveLink() {
        const scrollY = window.pageYOffset;
        sections.forEach(current => {
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop - 120;
            const sectionId = current.getAttribute('id');

            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }
    window.addEventListener('scroll', highlightActiveLink);

    // 6. Print / Save Resume Handler
    const printResumeBtn = document.getElementById('printResumeBtn');
    if (printResumeBtn) {
        printResumeBtn.addEventListener('click', () => {
            window.print();
        });
    }

    // 7. Interactive Contact Form & Let's Talk CTA Handling
    const navCtaBtn = document.querySelector('.nav-cta');
    const nameInput = document.getElementById('name');
    if (navCtaBtn) {
        navCtaBtn.addEventListener('click', (e) => {
            const targetSection = document.getElementById('contact');
            if (targetSection) {
                e.preventDefault();
                targetSection.scrollIntoView({ behavior: 'smooth' });
                setTimeout(() => {
                    if (nameInput) nameInput.focus();
                }, 600);
            }
        });
    }

    const contactForm = document.getElementById('contactForm');
    const formFeedback = document.getElementById('formFeedback');

    if (contactForm && formFeedback) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalBtnText = submitBtn ? submitBtn.innerHTML : 'Send Message';

            if (submitBtn) {
                submitBtn.disabled = true;
                submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Sending...';
            }

            setTimeout(() => {
                formFeedback.innerHTML = `
                    <div style="padding: 12px 16px; background: rgba(16, 185, 129, 0.15); border: 1px solid #10b981; border-radius: 8px; color: #10b981; font-weight: 500; margin-top: 15px; display: flex; align-items: center; gap: 8px;">
                        <i class="fa-solid fa-circle-check"></i> Thank you! Your message has been sent successfully.
                    </div>
                `;
                contactForm.reset();
                if (submitBtn) {
                    submitBtn.disabled = false;
                    submitBtn.innerHTML = originalBtnText;
                }

                setTimeout(() => {
                    formFeedback.innerHTML = '';
                }, 5000);
            }, 1000);
        });
    }

    // ==========================================================================
    // 8. Full In-Portfolio Blog Article Reader Modal
    // ==========================================================================
    const articlesData = {
        'article-1': {
            title: "What I Learned While Building a UI Library From Scratch as a Beginner",
            category: "UIForge & SCSS",
            date: "Sep 13",
            readTime: "4 min read",
            mediumUrl: "https://medium.com/@dikshasomwanshi24/what-i-learned-while-building-a-ui-library-from-scratch-as-a-beginner-7d2a378b51e2",
            content: `
                <h1>What I Learned While Building a UI Library From Scratch as a Beginner 🎨</h1>
                
                <blockquote>
                    "Building a UI library from scratch is one of the most rewarding ways to master HTML semantics, modular SCSS architecture, accessible components, and pure JavaScript."
                </blockquote>

                <h2>1. The Motivation: Why Build UIForge?</h2>
                <p>
                    As developers, we often reach for ready-made component libraries like Bootstrap, Tailwind, or Material UI. While they speed up development, relying on them too early can prevent us from understanding how layout systems, cascade rules, and accessible component behaviors work underneath.
                </p>
                <p>
                    I decided to challenge myself by building <strong>UIForge</strong>—a token-based, reusable UI component library engineered from ground zero using <strong>Vanilla JavaScript, HTML5, SCSS</strong>, and bundled with <strong>Vite</strong>.
                </p>

                <h2>2. Structuring Design Tokens & CSS Architecture</h2>
                <p>
                    The foundation of any maintainable UI system is its <em>design tokens</em>. Before writing a single component, I established a global token hierarchy:
                </p>
                <ul>
                    <li><strong>Color Palettes:</strong> Primary, Neutral, Accent, and Semantic feedback colors (Success, Warning, Error).</li>
                    <li><strong>Typography Scales:</strong> Font families, fluid modular scale font sizes, and consistent line heights.</li>
                    <li><strong>Spacing System:</strong> 4px/8px incremental grid for margins, paddings, and layout gaps.</li>
                    <li><strong>Elevation & Shadows:</strong> Consistent elevation layers using z-index and box-shadow variables.</li>
                </ul>

                <pre><code>// SCSS Design Token Architecture
$primary-500: #6366f1;
$primary-600: #4f46e5;
$neutral-100: #f8fafc;
$neutral-900: #0f172a;

$space-1: 0.25rem; // 4px
$space-2: 0.5rem;  // 8px
$space-4: 1rem;    // 16px
$space-6: 1.5rem;  // 24px</code></pre>

                <h2>3. Building the 12-Column Responsive Grid</h2>
                <p>
                    One of the most valuable learning experiences was crafting the responsive 12-column grid layout. By leveraging CSS Flexbox and modern CSS Grid with responsive media query mixins (<code>sm</code>, <code>md</code>, <code>lg</code>, <code>xl</code>), I created a lightweight utility system that adapts seamlessly across all devices.
                </p>

                <h2>4. Crafting Interactive Components with Vanilla JS</h2>
                <p>
                    I built 10+ core reusable components, including:
                </p>
                <ul>
                    <li><strong>Form Controls:</strong> Inputs, floating labels, select dropdowns, and validation states.</li>
                    <li><strong>Navigation:</strong> Responsive navbars, tabs, and pagination systems.</li>
                    <li><strong>Overlays:</strong> Accessible dialog modals, tooltips, and toast notifications.</li>
                </ul>
                <p>
                    Key focus was placed on <strong>accessibility (a11y)</strong>—ensuring proper ARIA roles (<code>aria-expanded</code>, <code>aria-hidden</code>, <code>role="dialog"</code>) and full keyboard navigation (e.g., closing modals with the <code>Escape</code> key and trapping focus).
                </p>

                <h2>5. Key Takeaways & Advice for Beginners</h2>
                <ul>
                    <li><strong>Modularity is King:</strong> Keep your SCSS separated into partials (<code>_variables.scss</code>, <code>_buttons.scss</code>, <code>_grid.scss</code>) and combine them via a main manifest.</li>
                    <li><strong>Don't Fear Plain JavaScript:</strong> Vanilla JS is blazing fast and gives you complete control over the DOM lifecycle without framework overhead.</li>
                    <li><strong>Documentation Matters:</strong> A component library is only as good as its documentation. Building interactive documentation with live code snippets was essential.</li>
                </ul>

                <h2>Conclusion</h2>
                <p>
                    Building UIForge transformed the way I think about frontend architecture. Whether you're a student or an experienced developer, I highly encourage creating your own UI library to deepen your core engineering skills!
                </p>
            `
        },
        'article-2': {
            title: "Promises in JavaScript: Demystifying Asynchronous Code",
            category: "JavaScript & Async",
            date: "Sep 23",
            readTime: "5 min read",
            mediumUrl: "https://medium.com/@dikshasomwanshi24/promises-in-javascript-7c2af71f30eb",
            content: `
                <h1>Promises in JavaScript ⚡</h1>
                
                <p>Hello everyone,</p>
                <p>I hope you are doing well.</p>
                <p>
                    This is my first blog, so if I make any mistakes, feel free to correct me. I'm currently learning JavaScript, and while learning, I came across one topic that confused me a lot at first: <strong>Promises</strong>.
                </p>
                <p>
                    When I first heard the word <em>Promise</em>, I thought, <em>"What does a promise have to do with JavaScript?"</em> But after spending some time understanding it, I realized that Promises are one of the most important concepts in JavaScript.
                </p>
                <p>
                    Before learning Promises, I would recommend that you understand the basics of <strong>functions</strong> and <strong>callbacks</strong>, because Promises are built on those concepts.
                </p>
                <p>
                    In this article, we'll understand why Promises were introduced, what problem they solve, how they work using simple examples, and finally how <code>async/await</code> makes working with Promises even easier.
                </p>

                <hr>

                <h2>Why Do We Need Promises?</h2>
                <p>
                    JavaScript is a <strong>single-threaded</strong> language, which means it can execute only one task at a time.
                </p>
                <p>However, some tasks take time to complete, such as:</p>
                <ul>
                    <li>Fetching data from an API</li>
                    <li>Reading a file</li>
                    <li>Uploading an image</li>
                    <li>Connecting to a database</li>
                </ul>
                <p>These are called <strong>asynchronous operations</strong>.</p>

                <blockquote>
                    🍕 <strong>The Pizza Analogy:</strong><br>
                    Imagine you order a pizza. After placing the order, you don't stand outside the restaurant waiting. Instead, you continue doing other work. Later, the restaurant either delivers the pizza or informs you that the order couldn't be completed.<br><br>
                    JavaScript behaves in a similar way. It continues executing other code while waiting for an asynchronous task to finish.
                </blockquote>

                <p>
                    Before Promises, developers used <strong>callbacks</strong> to handle asynchronous operations. But when multiple callbacks depended on each other, the code became deeply nested, making it difficult to read and maintain. This problem is known as <strong>Callback Hell</strong>.
                </p>

                <pre><code>downloadFile(function () {
    processFile(function () {
        saveFile(function () {
            console.log("All tasks completed.");
        });
    });
});</code></pre>

                <p>
                    As projects grow, this nesting becomes harder to understand and debug. Promises solve this problem by making asynchronous code cleaner, more readable, and easier to manage.
                </p>

                <hr>

                <h2>What is a Promise?</h2>
                <p>
                    A <strong>Promise</strong> is a JavaScript object that represents the <strong>future result of an asynchronous operation</strong>.
                </p>
                <p>
                    When a Promise is created, the executor function inside it starts running immediately. The Promise object itself is returned right away in a pending state, while the actual task continues running in the background. Once that task finishes, the Promise either succeeds or fails.
                </p>
                <p>
                    You can think of a Promise as a guarantee that you'll receive a result <strong>later</strong>, not immediately.
                </p>

                <hr>

                <h2>Promise States</h2>
                <p>Every Promise has three possible states:</p>
                <ul>
                    <li><strong>Pending</strong> – The operation is still running.</li>
                    <li><strong>Fulfilled (Resolved)</strong> – The operation completed successfully.</li>
                    <li><strong>Rejected</strong> – The operation failed.</li>
                </ul>
                <p><em>Note: A Promise can change its state only once.</em></p>

                <hr>

                <h2>Understanding Promises with <code>setTimeout()</code></h2>
                <p>
                    Now that we know the different states of a Promise, let's see one in action. We'll use <code>setTimeout()</code> to simulate an operation that takes a few seconds to complete.
                </p>

                <pre><code>const orderPromise = new Promise((resolve, reject) => {
    console.log("Preparing your order...");
    setTimeout(() => {
        const orderReady = true;
        if (orderReady) {
            resolve("Your pizza has been delivered!");
        } else {
            reject("Sorry, your order was cancelled.");
        }
    }, 3000);
});

orderPromise
    .then((message) => {
        console.log(message);
    })
    .catch((error) => {
        console.log(error);
    });</code></pre>

                <h3>Output</h3>
                <pre><code>Preparing your order...
(After 3 seconds)
Your pizza has been delivered!</code></pre>

                <h3>What's happening here?</h3>
                <ol>
                    <li>The Promise starts executing immediately.</li>
                    <li><code>setTimeout()</code> simulates a task that takes 3 seconds.</li>
                    <li>During those 3 seconds, the Promise remains in the <strong>Pending</strong> state.</li>
                    <li>If the task succeeds, <code>resolve()</code> is called.</li>
                    <li>If the task fails, <code>reject()</code> is called.</li>
                    <li><code>.then()</code> handles the success, while <code>.catch()</code> handles any errors.</li>
                </ol>

                <hr>

                <h2>Simulating a Real API Request</h2>
                <p>
                    In real-world applications, Promises are commonly used while making API requests. Since we don't have a real server in this example, we'll use <code>setTimeout()</code> to simulate the time a server takes to process a request and send a response.
                </p>

                <pre><code>function fetchUser() {
    return new Promise((resolve, reject) => {
        console.log("Sending request to the server...");
        setTimeout(() => {
            const success = true;
            if (success) {
                resolve({ id: 1, name: "Diksha", role: "Frontend Developer" });
            } else {
                reject("Unable to fetch user data.");
            }
        }, 2000);
    });
}

fetchUser()
    .then((user) => {
        console.log("Response received:");
        console.log(user);
    })
    .catch((error) => {
        console.log(error);
    });</code></pre>

                <h3>Output</h3>
                <pre><code>Sending request to the server...
(After 2 seconds)
Response received:
{ id: 1, name: "Diksha", role: "Frontend Developer" }</code></pre>

                <h3>What's happening behind the scenes?</h3>
                <pre><code>Client
  │
  │  Sends Request
  ▼
Server
  │
  │  Processes Request
  ▼
Database
  │
  │  Returns Data
  ▲
Server
  │
  │  Sends Response
  ▼
Promise is Resolved
  │
  ▼
.then() executes</code></pre>

                <p>
                    If something goes wrong while processing the request, the Promise is <strong>Rejected</strong>, and <code>.catch()</code> executes instead. This is the same concept used when working with APIs using <code>fetch()</code> or libraries like Axios.
                </p>

                <hr>

                <h2>Handling a Promise with <code>.then()</code> and <code>.catch()</code></h2>
                <p>
                    When a Promise is <strong>fulfilled</strong>, we use <code>.then()</code> to receive the result.<br>
                    When a Promise is <strong>rejected</strong>, we use <code>.catch()</code> to handle the error.
                </p>

                <pre><code>orderPromise
    .then((message) => {
        console.log(message);
    })
    .catch((error) => {
        console.log(error);
    });</code></pre>

                <hr>

                <h2>Chaining Promises</h2>
                <p>
                    Remember the callback hell example from earlier? Promises solve that exact problem through <strong>chaining</strong>. Instead of nesting callbacks inside each other, we can return a Promise from each <code>.then()</code> and chain the next step onto it.
                </p>

                <pre><code>function downloadFile() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("File downloaded.");
            resolve("file.txt");
        }, 1000);
    });
}

function processFile(file) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(\`Processing \${file}...\`);
            resolve("processedFile.txt");
        }, 1000);
    });
}

function saveFile(file) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(\`\${file} saved.\`);
            resolve();
        }, 1000);
    });
}

downloadFile()
    .then((file) => processFile(file))
    .then((processedFile) => saveFile(processedFile))
    .then(() => {
        console.log("All tasks completed.");
    })
    .catch((error) => {
        console.log("Something went wrong:", error);
    });</code></pre>

                <p>
                    Notice how this reads top to bottom instead of nesting further and further to the right. Each step waits for the previous one to finish before running, and a single <code>.catch()</code> at the end handles errors from <em>any</em> step in the chain.
                </p>

                <hr>

                <h2>Real-World Example: Authentication</h2>
                <pre><code>const isLoggedIn = true;

const loginPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (isLoggedIn) {
            resolve("Login Successful");
        } else {
            reject("Invalid Email or Password");
        }
    }, 2000);
});

loginPromise
    .then((message) => {
        console.log(message);
    })
    .catch((error) => {
        console.log(error);
    });</code></pre>

                <p>The same concept is used in:</p>
                <ul>
                    <li>User login & authentication</li>
                    <li>Online payment gateways</li>
                    <li>Fetching data from REST APIs</li>
                    <li>Uploading files and media</li>
                    <li>Database operations</li>
                </ul>

                <hr>

                <h2>Making It Even Cleaner with <code>async/await</code></h2>
                <p>
                    Once you're comfortable with <code>.then()</code> and <code>.catch()</code>, you'll usually see <code>async/await</code> used in real projects instead. It doesn't replace Promises — it's built directly on top of them. It just gives us a way to write asynchronous code that <em>looks</em> synchronous, which makes it much easier to read.
                </p>
                <p><strong>Two rules to remember:</strong></p>
                <ul>
                    <li>The <code>async</code> keyword goes before a function, and makes that function always return a Promise.</li>
                    <li>The <code>await</code> keyword can only be used inside an <code>async</code> function. It pauses execution until the Promise settles, then gives you the resolved value directly — no <code>.then()</code> needed.</li>
                </ul>

                <h3>Rewriting <code>fetchUser()</code> with <code>async/await</code></h3>
                <pre><code>function fetchUser() {
    return new Promise((resolve, reject) => {
        console.log("Sending request to the server...");
        setTimeout(() => {
            const success = true;
            if (success) {
                resolve({ id: 1, name: "Diksha", role: "Frontend Developer" });
            } else {
                reject("Unable to fetch user data.");
            }
        }, 2000);
    });
}

async function getUser() {
    try {
        const user = await fetchUser();
        console.log("Response received:");
        console.log(user);
    } catch (error) {
        console.log(error);
    }
}

getUser();</code></pre>

                <h3>Rewriting the Chained Example with <code>async/await</code></h3>
                <pre><code>async function processAllFiles() {
    try {
        const file = await downloadFile();
        const processedFile = await processFile(file);
        await saveFile(processedFile);
        console.log("All tasks completed.");
    } catch (error) {
        console.log("Something went wrong:", error);
    }
}

processAllFiles();</code></pre>

                <h3><code>.then() / .catch()</code> vs <code>async / await</code></h3>
                <table>
                    <thead>
                        <tr>
                            <th>Feature</th>
                            <th><code>.then()</code> / <code>.catch()</code></th>
                            <th><code>async</code> / <code>await</code></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><strong>Style</strong></td>
                            <td>Chained methods</td>
                            <td>Looks like synchronous code</td>
                        </tr>
                        <tr>
                            <td><strong>Error Handling</strong></td>
                            <td><code>.catch()</code></td>
                            <td><code>try...catch</code> block</td>
                        </tr>
                        <tr>
                            <td><strong>Readability for Long Chains</strong></td>
                            <td>Can get harder to follow</td>
                            <td>Generally cleaner & easier to read</td>
                        </tr>
                        <tr>
                            <td><strong>Underlying Mechanism</strong></td>
                            <td>Promises</td>
                            <td>Also Promises (syntactic sugar)</td>
                        </tr>
                    </tbody>
                </table>

                <hr>

                <h2>Conclusion</h2>
                <p>
                    Promises are one of the most important concepts in JavaScript because they make asynchronous code much cleaner and easier to understand.
                </p>
                <p>In this article, we learned:</p>
                <ul>
                    <li>Why Promises were introduced & what problems they solve</li>
                    <li>What a Promise is and the three Promise states</li>
                    <li>How to create and use a Promise with <code>setTimeout()</code></li>
                    <li>How Promises mimic real API request/response flow</li>
                    <li>How to handle success and errors using <code>.then()</code> and <code>.catch()</code></li>
                    <li>How to chain Promises to avoid callback hell</li>
                    <li>How <code>async/await</code> builds on top of Promises to make asynchronous code even more readable</li>
                </ul>

                <p><strong>Thank you for reading! Happy Coding! 🚀</strong></p>
            `
        },
        'article-3': {
            title: "What Building a Mini Job Portal Taught Me About React Router",
            category: "React & Routing",
            date: "Oct 12",
            readTime: "6 min read",
            mediumUrl: "https://medium.com/@dikshasomwanshi24/what-building-a-mini-job-portal-taught-me-about-react-router-2245d560e3c9",
            content: `
                <h1>What Building a Mini Job Portal Taught Me About React Router 🚀</h1>
                
                <blockquote>
                    "Building a multi-view Single Page Application like a Job Portal is one of the most effective ways to master client-side navigation, dynamic parameters, query filters, and nested layout architectures in React."
                </blockquote>

                <p>Hello developers!</p>
                <p>
                    When learning React, creating simple counter apps or static component dashboards is fun, but moving to real-world applications requires one crucial piece of architecture: <strong>declarative client-side routing</strong>.
                </p>
                <p>
                    Recently, I built a <strong>Mini Job Portal</strong> web application where users can browse job listings, search and filter by tech stacks or role types, view detailed job descriptions, and submit applications. Building this project helped me transition from basic React concepts to mastering <strong>React Router (v6+)</strong>.
                </p>
                <p>
                    In this article, I'll share the key architectural concepts and practical patterns I learned along the way.
                </p>

                <hr>

                <h2>1. The Problem: SPAs vs. Traditional Multi-Page Navigation</h2>
                <p>
                    In traditional web development, clicking a link sends a fresh HTTP request to the server, resulting in a full-page reload and flashing screens.
                </p>
                <p>
                    In a React <strong>Single Page Application (SPA)</strong>, we want to update what the user sees instantly without reloading the entire page or losing in-memory application state. <strong>React Router</strong> intercepts browser navigation and renders the appropriate component tree dynamically based on the current URL path.
                </p>

                <hr>

                <h2>2. Setting Up the Route Hierarchy</h2>
                <p>
                    To organize the job portal, I structured the primary navigation routes:
                </p>
                <ul>
                    <li><code>/</code> – Home & Featured Jobs</li>
                    <li><code>/jobs</code> – Searchable Job Listings with live filters</li>
                    <li><code>/jobs/:id</code> – Dynamic Job Details & Requirements</li>
                    <li><code>/jobs/:id/apply</code> – Candidate Application Form</li>
                    <li><code>/dashboard</code> – Saved Applications & Employer Postings</li>
                    <li><code>*</code> – 404 Catch-All Not Found Page</li>
                </ul>

                <pre><code>// AppRoutes.jsx - Clean Route Hierarchy
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import JobsPage from './pages/JobsPage';
import JobDetailsPage from './pages/JobDetailsPage';
import ApplyPage from './pages/ApplyPage';
import NotFoundPage from './pages/NotFoundPage';

export default function App() {
  return (
    &lt;BrowserRouter&gt;
      &lt;Routes&gt;
        &lt;Route path="/" element={&lt;MainLayout /&gt;}&gt;
          &lt;Route index element={&lt;HomePage /&gt;} /&gt;
          &lt;Route path="jobs" element={&lt;JobsPage /&gt;} /&gt;
          &lt;Route path="jobs/:id" element={&lt;JobDetailsPage /&gt;} /&gt;
          &lt;Route path="jobs/:id/apply" element={&lt;ApplyPage /&gt;} /&gt;
          &lt;Route path="*" element={&lt;NotFoundPage /&gt;} /&gt;
        &lt;/Route&gt;
      &lt;/Routes&gt;
    &lt;/BrowserRouter&gt;
  );
}</code></pre>

                <hr>

                <h2>3. Dynamic Routes with <code>useParams()</code></h2>
                <p>
                    A job portal has hundreds of different job listings, but we shouldn't create hundreds of separate page components! Instead, we define a single dynamic route pattern: <code>/jobs/:id</code>.
                </p>
                <p>
                    Inside the <code>JobDetailsPage</code> component, React Router's <code>useParams()</code> hook extracts the dynamic parameter directly from the active URL:
                </p>

                <pre><code>// JobDetailsPage.jsx
import { useParams, Link } from 'react-router-dom';
import { getJobById } from '../data/jobsData';

export default function JobDetailsPage() {
  const { id } = useParams();
  const job = getJobById(id);

  if (!job) {
    return (
      &lt;div className="job-not-found"&gt;
        &lt;h2&gt;Job Listing Not Found&lt;/h2&gt;
        &lt;Link to="/jobs" className="btn-back"&gt;Back to all listings&lt;/Link&gt;
      &lt;/div&gt;
    );
  }

  return (
    &lt;div className="job-details-container"&gt;
      &lt;h1&gt;{job.title}&lt;/h1&gt;
      &lt;p className="company"&gt;{job.company} • {job.location}&lt;/p&gt;
      &lt;div className="description"&gt;{job.description}&lt;/div&gt;
      &lt;Link to={\`/jobs/\${job.id}/apply\`} className="btn-apply"&gt;
        Apply Now 🚀
      &lt;/Link&gt;
    &lt;/div&gt;
  );
}</code></pre>

                <hr>

                <h2>4. Filterable Search with <code>useSearchParams()</code></h2>
                <p>
                    One of the biggest breakthroughs for me was learning that <strong>URL state is better than local component state for filters</strong>.
                </p>
                <p>
                    If a user filters by <em>"Frontend"</em> and <em>"Remote"</em>, storing this in the URL query string (e.g. <code>/jobs?role=frontend&type=remote</code>) allows users to bookmark search results or share them with friends!
                </p>

                <pre><code>// JobsPage.jsx - URL Query Filtering
import { useSearchParams } from 'react-router-dom';

export default function JobsPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  const filterType = searchParams.get('type') || 'all';

  const handleFilterChange = (newType) => {
    setSearchParams({ q: query, type: newType });
  };

  return (
    &lt;div className="jobs-list"&gt;
      &lt;input 
        type="text" 
        value={query} 
        placeholder="Search jobs..." 
        onChange={(e) => setSearchParams({ q: e.target.value, type: filterType })}
      /&gt;
      {/* Render matching listings */}
    &lt;/div&gt;
  );
}</code></pre>

                <hr>

                <h2>5. Nested Layouts with <code>&lt;Outlet /&gt;</code> & Active NavLinks</h2>
                <p>
                    Rather than repeating the navigation header and footer across every page, React Router provides <strong>Layout Routes</strong> paired with the <code>&lt;Outlet /&gt;</code> component.
                </p>
                <p>
                    Using <code>&lt;NavLink&gt;</code> instead of plain <code>&lt;Link&gt;</code> gives us an <code>isActive</code> state out of the box, allowing automatic styling for the current active page.
                </p>

                <pre><code>// MainLayout.jsx
import { NavLink, Outlet } from 'react-router-dom';

export default function MainLayout() {
  return (
    &lt;div className="app-shell"&gt;
      &lt;header className="navbar"&gt;
        &lt;span className="brand"&gt;JobPortal&lt;/span&gt;
        &lt;nav&gt;
          &lt;NavLink to="/" className={({ isActive }) =&gt; isActive ? 'active-link' : ''}&gt;Home&lt;/NavLink&gt;
          &lt;NavLink to="/jobs" className={({ isActive }) =&gt; isActive ? 'active-link' : ''}&gt;Browse Jobs&lt;/NavLink&gt;
        &lt;/nav&gt;
      &lt;/header&gt;

      &lt;main className="main-content"&gt;
        &lt;Outlet /&gt; {/* Child route views render here */}
      &lt;/main&gt;
    &lt;/div&gt;
  );
}</code></pre>

                <hr>

                <h2>6. Programmatic Navigation with <code>useNavigate()</code></h2>
                <p>
                    When a user successfully submits their job application form, we don't want them clicking an anchor tag. We need to validate the input, submit the form payload, and then programmatically navigate them to the confirmation page:
                </p>

                <pre><code>// ApplyPage.jsx
import { useNavigate, useParams } from 'react-router-dom';

export default function ApplyPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // 1. Process candidate application
    // 2. Redirect to dashboard or success screen
    navigate('/dashboard', { replace: true, state: { appliedJobId: id } });
  };

  return (
    &lt;form onSubmit={handleSubmit}&gt;
      &lt;h2&gt;Submit Application&lt;/h2&gt;
      &lt;button type="submit" className="btn-primary"&gt;Complete Application&lt;/button&gt;
    &lt;/form&gt;
  );
}</code></pre>

                <hr>

                <h2>Key Takeaways & Lessons Learned</h2>
                <ul>
                    <li><strong>URL is State:</strong> Keeping filters and page IDs in the URL creates an intuitive, shareable, and resilient user experience.</li>
                    <li><strong>Declarative Routing:</strong> Grouping routes and utilizing nested layouts with <code>&lt;Outlet /&gt;</code> drastically reduces code duplication.</li>
                    <li><strong>Hooks Simplify Logic:</strong> Modern hooks like <code>useParams</code>, <code>useSearchParams</code>, and <code>useNavigate</code> make complex routing workflows straightforward and expressive.</li>
                    <li><strong>Always Handle Edge Cases:</strong> Providing proper 404 fallbacks and empty state views ensures users never get stuck on a broken route.</li>
                </ul>

                <hr>

                <h2>Conclusion</h2>
                <p>
                    Building the Mini Job Portal solidified my confidence with React Router and single-page navigation architectures. If you're looking to level up your React skills, building a project with multi-view dynamic routing is one of the best exercises you can tackle!
                </p>
                <p><strong>Thank you for reading! Happy Coding! 🚀</strong></p>
            `
        }
    };

    const articleModal = document.getElementById('articleModal');
    const modalOverlay = document.getElementById('modalOverlay');
    const modalCloseBtn = document.getElementById('modalCloseBtn');
    const modalBottomCloseBtn = document.getElementById('modalBottomCloseBtn');
    const modalArticleBody = document.getElementById('modalArticleBody');
    const modalCategory = document.getElementById('modalCategory');
    const modalDate = document.getElementById('modalDate');
    const modalReadTime = document.getElementById('modalReadTime');
    const modalMediumLink = document.getElementById('modalMediumLink');

    function openArticle(articleId) {
        const data = articlesData[articleId];
        if (!data || !articleModal) return;

        modalCategory.innerHTML = `<i class="fa-solid fa-tag"></i> ${data.category}`;
        modalDate.innerHTML = `<i class="fa-regular fa-calendar"></i> ${data.date}`;
        modalReadTime.innerHTML = `<i class="fa-regular fa-clock"></i> ${data.readTime}`;
        modalArticleBody.innerHTML = data.content;
        modalMediumLink.setAttribute('href', data.mediumUrl);

        articleModal.classList.add('active');
        articleModal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
    }

    function closeArticle() {
        if (!articleModal) return;
        articleModal.classList.remove('active');
        articleModal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
    }

    document.querySelectorAll('.open-article-btn, .open-article-trigger').forEach(el => {
        el.addEventListener('click', (e) => {
            e.preventDefault();
            const articleId = el.getAttribute('data-article-id');
            if (articleId) openArticle(articleId);
        });
    });

    if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeArticle);
    if (modalBottomCloseBtn) modalBottomCloseBtn.addEventListener('click', closeArticle);
    if (modalOverlay) modalOverlay.addEventListener('click', closeArticle);

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && articleModal && articleModal.classList.contains('active')) {
            closeArticle();
        }
    });
});
