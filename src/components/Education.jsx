import { education } from '../data/portfolio'
import SectionHead from './SectionHead'
import { IconBook, IconGraduation } from './icons'

const iconMap = {
  graduation: IconGraduation,
  book: IconBook,
}

export default function Education() {
  return (
    <section id="education" className="section">
      <div className="container">
        <SectionHead
          index="04"
          kicker="Background"
          title={
            <>
              Education &amp; <span className="gradient-text">foundation.</span>
            </>
          }
          description="The academic path that continues to shape how I think about technology and problem solving."
        />

        <div className="timeline">
          {education.map((item, index) => {
            const Icon = iconMap[item.icon] ?? IconGraduation
            return (
              <div
                className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
                key={`${item.place}-${item.period}`}
                data-reveal
                style={{ '--reveal-delay': `${index * 90}ms` }}
              >
                <span className="timeline-dot" aria-hidden="true" />
                <article className="timeline-card">
                  <div className="timeline-top">
                    <span className="timeline-icon">
                      <Icon />
                    </span>
                    <span className="timeline-period">{item.period}</span>
                    {item.current ? <span className="timeline-current">In progress</span> : null}
                  </div>
                  <h3>{item.place}</h3>
                  <p className="timeline-degree">{item.degree}</p>
                  <span className="timeline-score">{item.score}</span>
                </article>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
