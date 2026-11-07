import { achievements } from '../data/portfolio'
import { IconStar } from './icons'

export default function Achievements() {
  return (
    <section id="achievements" className="section alt-bg">
      <div className="container">
        <div className="section-heading" data-reveal>
          <p className="section-tag">Highlights</p>
          <h2>Achievements &amp; Exposure</h2>
        </div>

        <div className="achievement-grid">
          {achievements.map((item, index) => (
            <article
              key={item.title}
              className="achievement-card"
              data-reveal
              style={{ '--reveal-delay': `${index * 100}ms` }}
            >
              <span className="achievement-icon">
                <IconStar />
              </span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}