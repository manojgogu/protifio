import { experience } from '../data/portfolio'
import SectionHead from './SectionHead'
import { IconBriefcase, IconCalendar, IconCode, IconSparkles } from './icons'

const iconMap = {
  briefcase: IconBriefcase,
  sparkles: IconSparkles,
  code: IconCode,
  calendar: IconCalendar,
}

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <SectionHead
          index="06"
          kicker="Journey"
          title={
            <>
              Experience &amp; <span className="gradient-text">activities.</span>
            </>
          }
          description={experience.text}
        />

        <div className="experience-grid">
          {experience.items.map((item, index) => {
            const Icon = iconMap[item.icon] ?? IconSparkles
            return (
              <article
                className="exp-card"
                key={item.title}
                data-reveal
                style={{ '--reveal-delay': `${index * 70}ms` }}
              >
                <span className="exp-index">0{index + 1}</span>
                <span className="exp-icon">
                  <Icon />
                </span>
                <h3>{item.title}</h3>
                <p>{item.note}</p>
                <span className="exp-tag">Space reserved</span>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
