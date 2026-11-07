import { projects } from '../data/portfolio'
import ProjectVisual from './ProjectVisual'
import SectionHead from './SectionHead'
import Tilt from './Tilt'
import { IconExternalLink, IconGithub } from './icons'

function ProjectLink({ href, label, icon: Icon, note }) {
  if (href) {
    return (
      <a className="btn btn-glass btn-sm" href={href} target="_blank" rel="noreferrer">
        <Icon />
        {label}
      </a>
    )
  }

  return (
    <button type="button" className="btn btn-glass btn-sm is-disabled" disabled title={note}>
      <Icon />
      {label}
    </button>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <SectionHead
          index="03"
          kicker="Selected work"
          title={
            <>
              Projects with <span className="gradient-text">purpose.</span>
            </>
          }
          description="A collection of ideas in motion — built around campus safety, intelligent recovery, fitness operations, and smarter campus services."
        />

        <div className="projects-list">
          {projects.map((project, index) => (
            <article
              key={project.id}
              className={`project-card ${index % 2 === 1 ? 'reverse' : ''}`.trim()}
              data-reveal
            >
              <div className="project-visual-wrap" aria-hidden="true">
                <Tilt className="project-tilt">
                  <div className="project-visual" data-cursor="card">
                    <ProjectVisual variant={project.visual} />
                    <span className="project-glare" />
                  </div>
                </Tilt>
              </div>

              <div className="project-content">
                <div className="project-topline">
                  <span className="project-index">{project.index}</span>
                  <span className="project-tag">{project.tag}</span>
                </div>

                <h3 className="project-title">{project.title}</h3>
                <p className="project-subtitle">{project.subtitle}</p>
                <p className="project-desc">{project.description}</p>

                {project.features.length > 0 ? (
                  <ul className="project-features">
                    {project.features.map((feature) => (
                      <li key={feature}>{feature}</li>
                    ))}
                  </ul>
                ) : null}

                {project.tech.length > 0 ? (
                  <div className="project-tech" aria-label="Technology stack">
                    {project.tech.map((tech) => (
                      <span key={tech}>{tech}</span>
                    ))}
                  </div>
                ) : null}

                <div className="project-actions">
                  <ProjectLink
                    href={project.githubUrl}
                    label="GitHub"
                    icon={IconGithub}
                    note="Add your repository URL in src/data/portfolio.js"
                  />
                  <ProjectLink
                    href={project.demoUrl}
                    label="Live Demo"
                    icon={IconExternalLink}
                    note="Add your deployed URL in src/data/portfolio.js"
                  />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
