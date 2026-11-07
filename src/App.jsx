import { useEffect, useState } from 'react'
import CustomCursor from './components/CustomCursor'
import Loader from './components/Loader'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Education from './components/Education'
import Credentials from './components/Credentials'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'
import useReveal from './hooks/useReveal'

function saveTheme(theme) {
  try {
    window.localStorage.setItem('theme', theme)
    return true
  } catch {
    return false
  }
}

function getInitialTheme() {
  try {
    const stored = window.localStorage.getItem('theme')
    if (stored === 'dark' || stored === 'light') {
      return stored
    }
  } catch {
    return 'dark'
  }
  return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark'
}

export default function App() {
  const [theme, setTheme] = useState(getInitialTheme)
  const [loading, setLoading] = useState(true)

  useReveal()

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    saveTheme(theme)
    const meta = document.querySelector('meta[name="theme-color"]')
    if (meta) {
      meta.setAttribute('content', theme === 'dark' ? '#05060b' : '#f3f5fc')
    }
  }, [theme])

  useEffect(() => {
    const timer = window.setTimeout(() => setLoading(false), 1400)
    return () => window.clearTimeout(timer)
  }, [])

  useEffect(() => {
    document.body.classList.toggle('is-loading', loading)
    return () => document.body.classList.remove('is-loading')
  }, [loading])

  const toggleTheme = () => {
    setTheme((current) => (current === 'dark' ? 'light' : 'dark'))
  }

  return (
    <>
      <a className="skip-link" href="#home">
        Skip to content
      </a>

      <Loader done={!loading} />
      <CustomCursor />

      <div className="bg-fx" aria-hidden="true">
        <div className="bg-grid" />
        <div className="bg-orb orb-a" />
        <div className="bg-orb orb-b" />
        <div className="bg-orb orb-c" />
        <div className="cursor-spotlight" />
        <div className="bg-noise" />
      </div>

      <Navbar theme={theme} onToggleTheme={toggleTheme} />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Credentials />
        <Experience />
        <Contact />
      </main>

      <Footer />
    </>
  )
}
