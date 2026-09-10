import { useEffect, useState } from 'react'
import './App.css'

const navItems = [
  'Home',
  'About',
  'Skills',
  'Projects',
  'Education',
  'Certification',
  'Achievements',
  'Contact',
]

const skillGroups = [
  {
    title: 'Programming Languages',
    items: ['Java', 'Python', 'C', 'SQL'],
    icon: '💻',
  },
  {
    title: 'Frontend',
    items: ['HTML5', 'CSS3', 'JavaScript', 'React.js'],
    icon: '🎨',
  },
  {
    title: 'Backend',
    items: ['Node.js', 'Spring Boot'],
    icon: '⚙️',
  },
  {
    title: 'Databases',
    items: ['MySQL', 'MongoDB'],
    icon: '🗄️',
  },
  {
    title: 'Tools',
    items: ['Git', 'GitHub', 'VS Code'],
    icon: '🛠️',
  },
  {
    title: 'Core Concepts',
    items: ['Data Structures', 'OOP', 'DBMS', 'Operating Systems', 'REST APIs'],
    icon: '🧠',
  },
]

const educationItems = [
  {
    title: 'Anurag University, Hyderabad',
    subtitle: 'Bachelor of Technology — Computer Science Engineering',
    period: '2024 – 2028',
    details: 'CGPA: 8.1 / 10',
  },
  {
    title: 'Loyola Junior College, Karimnagar',
    subtitle: 'Intermediate — MPC',
    period: '2022 – 2024',
    details: 'Score: 838 / 1000',
  },
  {
    title: 'St. Ann’s High School, Mariyapuram',
    subtitle: 'Secondary School Certificate',
    period: '2022',
    details: 'GPA: 9.3 / 10',
  },
]

const achievements = [
  {
    title: 'East India Blockchain Summit 2.0',
    description:
      'Participated in the East India Blockchain Summit 2.0 at IIT Kharagpur, gaining exposure to blockchain technologies and industry practices.',
  },
  {
    title: 'Software Projects',
    description:
      'Developed multiple software projects using Java and modern web technologies.',
  },
]

const projectOneFeatures = [
  'Implemented decentralized transaction validation to improve data integrity.',
  'Achieved approximately 92% prediction accuracy.',
  'Average execution time of 1.2 seconds.',
  'Integrated Blockchain concepts with AI/ML techniques.',
]

const projectTwoFeatures = [
  'Product listing',
  'Shopping cart',
  'Search functionality',
  'Mobile responsiveness',
  'Cross-browser compatibility',
]

function App() {
  const [theme, setTheme] = useState('dark')
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [formState, setFormState] = useState('idle')

  useEffect(() => {
    document.body.dataset.theme = theme
  }, [theme])

  useEffect(() => {
    const sections = document.querySelectorAll('main section[id]')
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]

        if (visibleEntry) {
          setActiveSection(visibleEntry.target.id)
        }
      },
      { rootMargin: '-20% 0px -55% 0px', threshold: [0.2, 0.4, 0.6] },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const trimmedName = formData.name.trim()
    const trimmedEmail = formData.email.trim().toLowerCase()
    const trimmedMessage = formData.message.trim()
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (!trimmedName || !trimmedEmail || !trimmedMessage) {
      setFormState('error')
      return
    }

    if (!emailPattern.test(trimmedEmail)) {
      setFormState('error')
      return
    }

    setFormState('success')
    setFormData({ name: '', email: '', message: '' })
  }

  const handlePlaceholderClick = (event) => {
    event.preventDefault()
  }

  return (
    <div className="app-shell">
      <header className="site-header">
        <nav className="navbar container" aria-label="Primary navigation">
          <a className="brand" href="#home" aria-label="Go to home section">
            <span className="brand-mark">GM</span>
            <span>Gogu Manoj</span>
          </a>

          <button
            type="button"
            className="nav-toggle"
            aria-expanded={menuOpen}
            aria-controls="nav-menu"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            <span />
            <span />
            <span />
          </button>

          <div id="nav-menu" className={`nav-links ${menuOpen ? 'open' : ''}`}>
            {navItems.map((item) => {
              const targetId = item === 'Home' ? 'home' : item.toLowerCase()
              const isActive = activeSection === targetId

              return (
                <a
                  key={item}
                  href={`#${targetId}`}
                  onClick={() => setMenuOpen(false)}
                  className={isActive ? 'active' : ''}
                >
                  {item}
                </a>
              )
            })}
          </div>

          <div className="nav-actions">
            <button
              type="button"
              className="theme-toggle"
              aria-label="Toggle dark and light mode"
              onClick={() => setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))}
            >
              {theme === 'dark' ? '☀️' : '🌙'}
            </button>
            <a className="button small primary" href="#resume" onClick={handlePlaceholderClick}>
              Resume
            </a>
          </div>
        </nav>
      </header>

      <main>
        <section id="home" className="hero section">
          <div className="container hero-grid">
            <div className="hero-copy reveal">
              <p className="eyebrow">Hi, I&apos;m Gogu Manoj</p>
              <h1>B.Tech CSE Student | Aspiring Software Engineer</h1>
              <p className="intro">
                Motivated Computer Science Engineering student with a strong foundation in Java,
                Python, C, Web Development, and Data Structures. Passionate about developing
                scalable software solutions and continuously learning modern technologies.
              </p>

              <div className="hero-actions">
                <a className="button primary" href="#projects">
                  View Projects
                </a>
                <a className="button secondary" href="#resume" onClick={handlePlaceholderClick}>
                  Download Resume
                </a>
                <a className="button secondary" href="#contact">
                  Contact Me
                </a>
              </div>

              <div className="hero-tags" aria-label="Core technologies">
                <span>Java</span>
                <span>Python</span>
                <span>C</span>
                <span>React</span>
                <span>Node.js</span>
              </div>
            </div>

            <div className="hero-visual reveal" aria-label="Developer workspace illustration">
              <div className="visual-panel">
                <div className="panel-header">
                  <span className="dot red"></span>
                  <span className="dot yellow"></span>
                  <span className="dot green"></span>
                </div>

                <div className="code-block">
                  <div className="code-line">
                    <span className="token key">const</span> student = <span className="token val">&apos;Gogu Manoj&apos;</span>;
                  </div>
                  <div className="code-line">
                    <span className="token key">const</span> skills = [<span className="token val">&apos;Java&apos;</span>, <span className="token val">&apos;React&apos;</span>];
                  </div>
                  <div className="code-line">
                    <span className="token key">const</span> goal = <span className="token val">&apos;Build impactful software&apos;</span>;
                  </div>
                  <div className="code-line empty"></div>
                  <div className="code-line">
                    <span className="token key">function</span> solve() {'{'}
                  </div>
                  <div className="code-line indent">return <span className="token val">&apos;Keep learning&apos;</span>;</div>
                  <div className="code-line">{' }'}</div>
                </div>

                <div className="floating-badges">
                  <span>Java</span>
                  <span>Python</span>
                  <span>React</span>
                  <span>Node.js</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="section">
          <div className="container">
            <div className="section-heading reveal">
              <p className="section-tag">About Me</p>
              <h2>Building solutions with curiosity, consistency, and code.</h2>
            </div>

            <div className="about-grid reveal">
              <div className="about-copy">
                <p>
                  I am a motivated B.Tech Computer Science Engineering student at Anurag University
                  with a strong interest in software development. I enjoy solving programming
                  problems, building web applications, and exploring modern technologies. My
                  technical foundation includes programming, web development, databases, data
                  structures, object-oriented programming, and REST APIs.
                </p>
                <p className="location-line">Based in Jangaon, Telangana, India.</p>
              </div>

              <div className="highlight-grid">
                {[
                  ['🎓', 'B.Tech CSE', 'Anurag University'],
                  ['💻', 'Software Development', 'Java • Python • C'],
                  ['🌐', 'Full-Stack Technologies', 'React • Node.js • Spring Boot'],
                  ['🚀', 'Continuous Learner', 'Building practical projects'],
                ].map(([icon, title, subtitle]) => (
                  <div key={title} className="highlight-card">
                    <span className="highlight-icon">{icon}</span>
                    <h3>{title}</h3>
                    <p>{subtitle}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="section alt-bg">
          <div className="container">
            <div className="section-heading reveal">
              <p className="section-tag">Technical Skills</p>
              <h2>Technologies I actively work with.</h2>
            </div>

            <div className="skills-grid">
              {skillGroups.map((group) => (
                <article key={group.title} className="skill-card reveal">
                  <div className="skill-header">
                    <span className="skill-icon">{group.icon}</span>
                    <h3>{group.title}</h3>
                  </div>
                  <div className="skill-pill-group">
                    {group.items.map((item) => (
                      <span key={item} className="skill-pill">
                        {item}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="section">
          <div className="container">
            <div className="section-heading reveal">
              <p className="section-tag">Projects</p>
              <h2>Prototype work and practical application of core technologies.</h2>
            </div>

            <div className="projects-grid">
              <article className="project-card feature reveal">
                <div className="project-topline">
                  <span className="project-date">January 2026</span>
                  <span className="project-tag">Prototype</span>
                </div>

                <h3>Blockchain AI Integration System</h3>
                <p>
                  Developed a prototype integrating Blockchain technology with AI models for secure
                  and transparent data validation.
                </p>

                <div className="project-metrics">
                  <div>
                    <strong>92%</strong>
                    <span>Prediction Accuracy</span>
                  </div>
                  <div>
                    <strong>1.2s</strong>
                    <span>Average Execution Time</span>
                  </div>
                </div>

                <div className="flow-diagram" aria-label="System architecture illustration">
                  <span>AI Model</span>
                  <span className="arrow">→</span>
                  <span>Validation</span>
                  <span className="arrow">→</span>
                  <span>Blockchain</span>
                  <span className="arrow">→</span>
                  <span>Secure Data</span>
                </div>

                <ul className="feature-list">
                  {projectOneFeatures.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>

                <div className="tech-stack">
                  {['React.js', 'Node.js', 'Blockchain', 'AI/ML'].map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>

                <div className="project-actions">
                  <button type="button" className="button project-button" onClick={handlePlaceholderClick}>
                    GitHub
                  </button>
                  <button type="button" className="button secondary project-button" onClick={handlePlaceholderClick}>
                    View Project
                  </button>
                </div>
              </article>

              <article className="project-card secondary reveal">
                <span className="project-tag">Web App</span>
                <h3>E-Commerce Website</h3>
                <p>
                  Built a responsive e-commerce website with a clean and modern user interface.
                </p>

                <ul className="feature-list compact">
                  {projectTwoFeatures.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>

                <div className="tech-stack">
                  {['HTML', 'CSS', 'JavaScript'].map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>

                <div className="project-actions">
                  <button type="button" className="button project-button" onClick={handlePlaceholderClick}>
                    GitHub
                  </button>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section id="education" className="section alt-bg">
          <div className="container">
            <div className="section-heading reveal">
              <p className="section-tag">Education</p>
              <h2>Academic journey and learning foundation.</h2>
            </div>

            <div className="timeline reveal">
              {educationItems.map((item, index) => (
                <div key={`${item.title}-${index}`} className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="timeline-card">
                    <p className="timeline-period">{item.period}</p>
                    <h3>{item.title}</h3>
                    <p className="timeline-subtitle">{item.subtitle}</p>
                    <p className="timeline-details">{item.details}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="certification" className="section">
          <div className="container">
            <div className="section-heading reveal">
              <p className="section-tag">Certification</p>
              <h2>Recognized learning milestones.</h2>
            </div>

            <div className="certificate-wrapper reveal">
              <div className="certificate-card">
                <div className="certificate-header">
                  <div className="certificate-title-wrap">
                    <span className="java-icon">☕</span>
                    <div>
                      <p className="certificate-label">NPTEL Programming in Java</p>
                      <h3>Elite + Gold Certification</h3>
                    </div>
                  </div>
                  <span className="certificate-badge">Gold</span>
                </div>

                <div className="certificate-body">
                  <div className="score-box">
                    <span>Score</span>
                    <strong>92%</strong>
                  </div>
                  <div className="certificate-tag-list">
                    <span>Java</span>
                    <span>Certification</span>
                    <span>92%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="achievements" className="section alt-bg">
          <div className="container">
            <div className="section-heading reveal">
              <p className="section-tag">Achievements</p>
              <h2>Participation and project-driven growth.</h2>
            </div>

            <div className="achievement-grid reveal">
              {achievements.map((achievement) => (
                <article key={achievement.title} className="achievement-card">
                  <span className="achievement-icon">★</span>
                  <h3>{achievement.title}</h3>
                  <p>{achievement.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="coding" className="section">
          <div className="container coding-box reveal">
            <div>
              <p className="section-tag">Explore My Code</p>
              <h2>Check out my GitHub repositories to explore my projects, experiments, and continuous learning.</h2>
            </div>
            <a
              className="button primary"
              href="https://github.com/manojgogu"
              target="_blank"
              rel="noreferrer"
            >
              Visit GitHub
            </a>
          </div>
        </section>

        <section id="resume" className="section alt-bg">
          <div className="container resume-box reveal">
            <div>
              <p className="section-tag">Interested in my profile?</p>
              <h2>
                Download my resume to learn more about my education, technical skills, projects,
                certifications, and achievements.
              </h2>
            </div>
            <a className="button primary" href="#" onClick={handlePlaceholderClick}>
              Download Resume
            </a>
          </div>
        </section>

        <section id="contact" className="section">
          <div className="container contact-wrap">
            <div className="contact-info reveal">
              <p className="section-tag">Contact</p>
              <h2>Let&apos;s Connect</h2>
              <p>
                I&apos;m always interested in learning, building, and exploring new software
                development opportunities.
              </p>

              <div className="contact-list">
                <a href="mailto:manojgogu275@gmail.com">manojgogu275@gmail.com</a>
                <a href="tel:+918688677175">+91-8688677175</a>
                <a href="https://www.linkedin.com/in/gogu-manoj-bb7018369" target="_blank" rel="noreferrer">LinkedIn</a>
                <a href="https://github.com/manojgogu" target="_blank" rel="noreferrer">GitHub</a>
              </div>
            </div>

            <form className="contact-form reveal" onSubmit={handleSubmit} noValidate>
              <label>
                Name
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your name"
                />
              </label>

              <label>
                Email
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Your email"
                />
              </label>

              <label>
                Message
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Write your message here..."
                  rows="5"
                />
              </label>

              {formState === 'error' && (
                <p className="form-message error">
                  Please fill in all fields with a valid email before sending.
                </p>
              )}

              {formState === 'success' && (
                <p className="form-message success">
                  Thank you! Your message has been sent successfully.
                </p>
              )}

              <button type="submit" className="button primary submit-button">
                Send Message
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <div>
            <h3>Gogu Manoj</h3>
            <p>B.Tech CSE Student | Aspiring Software Engineer</p>
          </div>

          <div className="footer-links">
            <a href="https://github.com/manojgogu" target="_blank" rel="noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/in/gogu-manoj-bb7018369" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="mailto:manojgogu275@gmail.com">Email</a>
          </div>
        </div>

        <div className="container footer-bottom">
          <p>© 2026 Gogu Manoj. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
