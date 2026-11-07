import { achievements, certification } from '../data/portfolio'
import SectionHead from './SectionHead'
import { IconAward, IconCheck, IconSparkles, IconTrophy } from './icons'

export default function Credentials() {
  return (
    <section id="credentials" className="section section-glow">
      <div className="container">
        <SectionHead
          index="05"
          kicker="Credentials"
          title={
            <>
              Certifications &amp; <span className="gradient-text">achievements.</span>
            </>
          }
          description="Recognition and exposure that reflect consistent learning beyond the classroom."
        />

        <div className="credentials-grid">
          <article className="cert-card" data-reveal>
            <span className="cert-shine" aria-hidden="true" />

            <div className="cert-top">
              <span className="cert-medal">
                <IconAward />
              </span>
              <span className="cert-badge">
                <IconSparkles />
                {certification.badge}
              </span>
            </div>

            <p className="cert-label">{certification.label}</p>
            <h3>{certification.title}</h3>

            <div className="cert-bottom">
              <div className="cert-score">
                <span>Score</span>
                <strong>{certification.score}</strong>
              </div>
              <div className="cert-tags">
                {certification.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </div>

            <div className="cert-foot">
              <IconCheck />
              <span>Issued by {certification.issuer}</span>
            </div>
          </article>

          <div className="achievements-stack">
            {achievements.map((item) => (
              <article className="achievement-card" key={item.title} data-reveal>
                <div className="achievement-top">
                  <span className="achievement-icon">
                    <IconTrophy />
                  </span>
                  <span className="achievement-tag">{item.tag}</span>
                </div>
                <h3>{item.title}</h3>
                <p className="achievement-org">{item.organizer}</p>
                <p className="achievement-text">{item.description}</p>
              </article>
            ))}

            <div className="credentials-note" data-reveal>
              <IconSparkles />
              <span>More certifications and achievements will be added as they are completed.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
