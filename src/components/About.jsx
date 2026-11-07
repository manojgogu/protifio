import { about, profile } from '../data/portfolio'
import SectionHead from './SectionHead'
import {
  IconArrowRight,
  IconCode,
  IconGraduation,
  IconLayers,
  IconRocket,
  IconSparkles,
} from './icons'

const iconMap = {
  graduation: IconGraduation,
  code: IconCode,
  layers: IconLayers,
  rocket: IconRocket,
}

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <SectionHead
          index="01"
          kicker={about.eyebrow}
          title={about.heading}
          description="I care about the details — clean structure, thoughtful interfaces, and software that is genuinely useful."
        />

        <div className="about-bento">
          <article className="bento-card about-main" data-reveal>
            <div className="about-main-top">
              <span className="about-label">
                <span className="status-dot" />
                Currently strengthening my foundations
              </span>
              <p className="about-intro">{about.intro}</p>
              <p className="about-body">{about.body}</p>
            </div>

            <ul className="about-facts">
              {about.facts.map((fact) => (
                <li key={fact.label}>
                  <span className="about-facts-label">{fact.label}</span>
                  <span className="about-facts-value">{fact.value}</span>
                </li>
              ))}
            </ul>

            <div className="about-actions">
              <a className="btn btn-primary btn-sm" href="#projects">
                View my work
                <IconArrowRight />
              </a>
              <a className="btn btn-ghost btn-sm" href="#contact">
                Get in touch
              </a>
            </div>
          </article>

          {about.cards.slice(0, 2).map((card, index) => {
            const Icon = iconMap[card.icon] ?? IconSparkles
            return (
              <article
                className="bento-card about-side"
                key={card.title}
                data-reveal
                style={{ '--reveal-delay': `${index * 70}ms` }}
              >
                <span className="bento-index">{card.index}</span>
                <span className="bento-icon">
                  <Icon />
                </span>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </article>
            )
          })}

          {about.cards.slice(2).map((card, index) => {
            const Icon = iconMap[card.icon] ?? IconSparkles
            return (
              <article
                className="bento-card about-wide"
                key={card.title}
                data-reveal
                style={{ '--reveal-delay': `${(index + 2) * 70}ms` }}
              >
                <span className="bento-index">{card.index}</span>
                <div className="about-wide-body">
                  <span className="bento-icon">
                    <Icon />
                  </span>
                  <div>
                    <h3>{card.title}</h3>
                    <p>{card.text}</p>
                  </div>
                </div>
              </article>
            )
          })}
        </div>

        <p className="about-signature" data-reveal>
          <IconSparkles />
          Based in {profile.location} · {profile.university}
        </p>
      </div>
    </section>
  )
}
