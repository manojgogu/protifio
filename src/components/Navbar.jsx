import { useEffect, useRef, useState } from 'react'
import { navLinks, profile } from '../data/portfolio'
import { IconArrowUpRight, IconClose, IconMenu, IconMoon, IconSun } from './icons'

export default function Navbar({ theme, onToggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState('#home')
  const [scrolled, setScrolled] = useState(false)
  const progressRef = useRef(null)

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll('main section[id]'))
    if (!sections.length) {
      return undefined
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible) {
          setActive(`#${visible.target.id}`)
        }
      },
      { rootMargin: '-28% 0px -55% 0px', threshold: [0.1, 0.35, 0.6] },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    let frame = 0

    const update = () => {
      const doc = document.documentElement
      const max = doc.scrollHeight - window.innerHeight
      const progress = max > 0 ? Math.min(1, window.scrollY / max) : 0
      if (progressRef.current) {
        progressRef.current.style.transform = `scaleX(${progress})`
      }
      setScrolled(window.scrollY > 24)
    }

    const handleScroll = () => {
      window.cancelAnimationFrame(frame)
      frame = window.requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleScroll)
    return () => {
      window.cancelAnimationFrame(frame)
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
    }
  }, [])

  useEffect(() => {
    document.body.classList.toggle('menu-open', menuOpen)
    return () => document.body.classList.remove('menu-open')
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`.trim()}>
      <div className="scroll-progress" ref={progressRef} />
      <nav className="navbar container" aria-label="Primary navigation">
        <a className="brand" href="#home" onClick={closeMenu} aria-label="Manoj Gogu — home">
          <span className="brand-mark">
            <span>{profile.initials}</span>
          </span>
          <span className="brand-text">
            <strong>{profile.name}</strong>
            <small>Full Stack Developer</small>
          </span>
        </a>

        <ul id="nav-menu" className={`nav-links ${menuOpen ? 'open' : ''}`.trim()}>
          {navLinks.map((link) => {
            const isActive = active === link.href
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={isActive ? 'active' : ''}
                  aria-current={isActive ? 'page' : undefined}
                  onClick={closeMenu}
                >
                  {link.label}
                </a>
              </li>
            )
          })}
        </ul>

        <div className="nav-actions">
          <button
            type="button"
            className="icon-button"
            onClick={onToggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
            title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
          >
            {theme === 'dark' ? <IconSun /> : <IconMoon />}
          </button>

          <a className="btn btn-primary btn-sm nav-cta" href="#contact">
            Let&apos;s Talk
            <IconArrowUpRight />
          </a>

          <button
            type="button"
            className="icon-button nav-toggle"
            aria-expanded={menuOpen}
            aria-controls="nav-menu"
            aria-label="Toggle navigation menu"
            onClick={() => setMenuOpen((current) => !current)}
          >
            {menuOpen ? <IconClose /> : <IconMenu />}
          </button>
        </div>
      </nav>
    </header>
  )
}
