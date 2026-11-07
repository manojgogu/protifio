import { certification } from '../data/portfolio'

export default function Certification() {
  return (
    <section id="certification" className="section">
      <div className="container">
        <div className="section-heading" data-reveal>
          <p className="section-tag">Credentials</p>
          <h2>{certification.heading}</h2>
        </div>

        <div className="certificate-wrap" data-reveal>
          <article className="certificate-card">
            <div className="cert-glow" aria-hidden="true" />
            <div className="cert-header">
              <span className="cert-medallion" aria-hidden="true">
                ☕
              </span>
              <div className="cert-titles">
                <p className="cert-label">{certification.label}</p>
                <h3>{certification.title}</h3>
              </div>
              <span className="cert-badge">🎖 {certification.badge}</span>
            </div>

            <div className="cert-body">
              <div className="cert-score">
                <span>{certification.scoreLabel}</span>
                <strong>{certification.score}</strong>
              </div>
              <div className="cert-tags">
                {certification.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}