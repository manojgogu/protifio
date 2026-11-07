import { useState } from 'react'
import { skillGroups } from '../data/portfolio'
import SectionHead from './SectionHead'
import {
  IconCode,
  IconDatabase,
  IconLayout,
  IconMind,
  IconServer,
  IconSparkles,
  IconTool,
} from './icons'

const iconMap = {
  code: IconCode,
  layout: IconLayout,
  server: IconServer,
  database: IconDatabase,
  tool: IconTool,
  mind: IconMind,
}

const palettes = [
  ['#5b8cff', '#8b5cf6'],
  ['#8b5cf6', '#c084fc'],
  ['#4fe3ff', '#5b8cff'],
  ['#c084fc', '#f472b6'],
  ['#34d399', '#4fe3ff'],
  ['#f6c453', '#f97316'],
]

function getMark(name) {
  const words = name.replace(/[^a-zA-Z0-9 .]/g, '').split(' ').filter(Boolean)
  if (words.length > 1) {
    return words
      .slice(0, 2)
      .map((word) => word[0])
      .join('')
      .toUpperCase()
  }
  return name.slice(0, 2)
}

export default function Skills() {
  const [activeId, setActiveId] = useState(skillGroups[0].id)
  const activeGroup = skillGroups.find((group) => group.id === activeId) ?? skillGroups[0]
  const ActiveIcon = iconMap[activeGroup.icon] ?? IconCode

  return (
    <section id="skills" className="section section-glow">
      <div className="container">
        <SectionHead
          index="02"
          kicker="Tech stack"
          title={
            <>
              Technical <span className="gradient-text">Skills</span>
            </>
          }
          description="A closer look at the languages, frameworks, and fundamentals I use to build software."
        />

        <div className="skills-shell">
          <div className="skills-rail" role="tablist" aria-label="Skill categories">
            {skillGroups.map((group) => {
              const Icon = iconMap[group.icon] ?? IconCode
              const isActive = group.id === activeGroup.id
              return (
                <button
                  type="button"
                  key={group.id}
                  role="tab"
                  aria-selected={isActive}
                  className={`skill-tab ${isActive ? 'active' : ''}`.trim()}
                  onClick={() => setActiveId(group.id)}
                >
                  <span className="tab-icon">
                    <Icon />
                  </span>
                  <span className="tab-text">
                    <strong>{group.title}</strong>
                    <small>{group.items.length} items</small>
                  </span>
                  <span className="tab-arrow" aria-hidden="true">
                    →
                  </span>
                </button>
              )
            })}
          </div>

          <div
            className="skills-panel"
            key={activeGroup.id}
            role="tabpanel"
            aria-label={activeGroup.title}
          >
            <span className="panel-watermark" aria-hidden="true">
              <ActiveIcon />
            </span>

            <div className="skills-panel-head">
              <div>
                <h3>{activeGroup.title}</h3>
                <p>{activeGroup.blurb}</p>
              </div>
              <span className="skills-count">{activeGroup.items.length} tools</span>
            </div>

            <div className="skill-tiles">
              {activeGroup.items.map((item, index) => {
                const [c1, c2] = palettes[index % palettes.length]
                return (
                  <div
                    className="skill-tile"
                    key={item}
                    style={{ '--i': index, '--c1': c1, '--c2': c2 }}
                  >
                    <span className="tile-mark">{getMark(item)}</span>
                    <span className="tile-name">{item}</span>
                    <span className="tile-dot" aria-hidden="true" />
                  </div>
                )
              })}
            </div>

            <div className="skills-panel-foot">
              <IconSparkles />
              <span>No fake percentages — just the tools I build with.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
