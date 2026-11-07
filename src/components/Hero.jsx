import { useEffect, useRef, useState } from 'react'
import { hero, profile } from '../data/portfolio'
import useTyping from '../hooks/useTyping'
import Magnetic from './Magnetic'
import {
  IconArrowRight,
  IconAward,
  IconDownload,
  IconGraduation,
  IconMail,
  IconMapPin,
  IconSparkles,
} from './icons'

export default function Hero() {
  const typed = useTyping(hero.roles)
  const [photoFailed, setPhotoFailed] = useState(false)
  const sectionRef = useRef(null)
  const stageRef = useRef(null)

  useEffect(() => {
    const section = sectionRef.current
    const stage = stageRef.current
    if (!section || !stage) {
      return undefined
    }

    const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!finePointer || reduceMotion) {
      return undefined
    }

    let frame = 0

    const handleMove = (event) => {
      const rect = section.getBoundingClientRect()
      const x = (event.clientX - rect.left) / rect.width - 0.5
      const y = (event.clientY - rect.top) / rect.height - 0.5
      window.cancelAnimationFrame(frame)
      frame = window.requestAnimationFrame(() => {
        stage.style.setProperty('--px', `${x * 20}px`)
        stage.style.setProperty('--py', `${y * 20}px`)
        stage.style.setProperty('--rx', `${x * 4}deg`)
        stage.style.setProperty('--ry', `${y * -4}deg`)
      })
    }

    const handleLeave = () => {
      window.cancelAnimationFrame(frame)
      stage.style.setProperty('--px', '0px')
      stage.style.setProperty('--py', '0px')
      stage.style.setProperty('--rx', '0deg')
      stage.style.setProperty('--ry', '0deg')
    }

    section.addEventListener('mousemove', handleMove)
    section.addEventListener('mouseleave', handleLeave)

    return () => {
      window.cancelAnimationFrame(frame)
      section.removeEventListener('mousemove', handleMove)
      section.removeEventListener('mouseleave', handleLeave)
    }
  }, [])

  return (
    <section id="home" className="hero" ref={sectionRef}>
      <div className="container hero-grid">
        <div className="hero-copy">
          <div className="status-pill reveal-in">
            <span className="status-dot" />
            {profile.availability}
          </div>

          <p className="eyebrow reveal-in delay-1">
            <span className="eyebrow-line" />
            {hero.hello}
          </p>

          <h1 className="reveal-in delay-2">
            <span>{profile.firstName}</span>
            <span className="gradient-text">{profile.lastName}.</span>
          </h1>

          <p className="hero-subtitle reveal-in delay-3">{hero.subtitle}</p>

          <p className="hero-typing reveal-in delay-3">
            <span className="typing-label">I&apos;m a</span>
            <span className="typed-text">{typed}</span>
            <span className="caret" aria-hidden="true" />
          </p>

          <p className="hero-description reveal-in delay-4">{hero.description}</p>

          <div className="hero-actions reveal-in delay-5">
            <Magnetic strength={0.22}>
              <a className="btn btn-primary" href="#projects">
                Explore My Work
                <IconArrowRight />
              </a>
            </Magnetic>

            <Magnetic strength={0.22}>
              {profile.resume ? (
                <a className="btn btn-glass" href={profile.resume} download>
                  <IconDownload />
                  Download Resume
                </a>
              ) : (
                <button
                  type="button"
                  className="btn btn-glass is-disabled"
                  disabled
                  title="Place your resume at public/resume.pdf, then set profile.resume in src/data/portfolio.js"
                >
                  <IconDownload />
                  Download Resume
                </button>
              )}
            </Magnetic>

            <a className="btn btn-ghost" href="#contact">
              Contact Me
              <IconMail />
            </a>
          </div>

          <div className="hero-stats reveal-in delay-5">
            {hero.stats.map((stat) => (
              <div className="hero-stat" key={stat.label}>
                <strong>
                  {stat.value}
                  {stat.suffix ? <span className="suffix">{stat.suffix}</span> : null}
                </strong>
                <span>{stat.label}</span>
              </div>
            ))}
            <div className="hero-stat hero-stat-location">
              <strong>
                <IconMapPin />
              </strong>
              <span>{profile.location}</span>
            </div>
          </div>
        </div>

        <div className="hero-visual reveal-in delay-3">
          <div
            className="portrait-stage"
            ref={stageRef}
            data-cursor="card"
            aria-label={`Portrait of ${profile.name}`}
          >
            <div className="portrait-glow" aria-hidden="true" />
            <div className="portrait-orbit orbit-one" aria-hidden="true" />
            <div className="portrait-orbit orbit-two" aria-hidden="true" />

            {hero.floatingTech.map((tech, index) => (
              <span className={`floating-tech tech-${index + 1}`} key={tech} aria-hidden="true">
                {tech}
              </span>
            ))}

            <div className="glass-float card-degree" aria-hidden="true">
              <span className="float-icon">
                <IconGraduation />
              </span>
              <span>
                <strong>B.Tech CSE</strong>
                <small>Anurag University</small>
              </span>
            </div>

            <div className="glass-float card-cgpa" aria-hidden="true">
              <span className="float-icon">
                <IconAward />
              </span>
              <span>
                <strong>{profile.cgpa}</strong>
                <small>Current CGPA</small>
              </span>
            </div>

            <div className="portrait-frame">
              <div className="portrait-inner">
                {photoFailed ? (
                  <div className="portrait-fallback">{profile.initials}</div>
                ) : (
                  <img
                    src={profile.photo}
                    alt={profile.photoAlt}
                    fetchPriority="high"
                    onError={() => setPhotoFailed(true)}
                  />
                )}
                <span className="portrait-tint" aria-hidden="true" />
                <div className="portrait-name">
                  <span className="portrait-name-dot" />
                  <div>
                    <strong>{profile.name}</strong>
                    <small>{profile.role}</small>
                  </div>
                </div>
              </div>
            </div>

            <div className="portrait-badge" aria-hidden="true">
              <IconSparkles />
              Building with curiosity
            </div>
          </div>
        </div>
      </div>

      <a className="hero-scroll" href="#about">
        Scroll to explore
      </a>
    </section>
  )
}
