import { useEffect, useRef } from 'react'

export default function CustomCursor() {
  const dotRef = useRef(null)
  const ringRef = useRef(null)
  const glowRef = useRef(null)

  useEffect(() => {
    const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!finePointer || reduceMotion) {
      return undefined
    }

    const root = document.documentElement
    const dot = dotRef.current
    const ring = ringRef.current
    const glow = glowRef.current
    if (!dot || !ring || !glow) {
      return undefined
    }

    root.classList.add('has-cursor')

    let mouseX = window.innerWidth / 2
    let mouseY = window.innerHeight / 2
    let ringX = mouseX
    let ringY = mouseY
    let glowX = mouseX
    let glowY = mouseY
    let frame = 0
    let visible = false

    const show = () => {
      visible = true
      root.classList.add('cursor-visible')
    }

    const hide = () => {
      visible = false
      root.classList.remove('cursor-visible')
    }

    const handleMove = (event) => {
      mouseX = event.clientX
      mouseY = event.clientY
      if (!visible) {
        show()
      }
      dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`
      root.style.setProperty('--mx', `${mouseX}px`)
      root.style.setProperty('--my', `${mouseY}px`)
    }

    const loop = () => {
      ringX += (mouseX - ringX) * 0.18
      ringY += (mouseY - ringY) * 0.18
      glowX += (mouseX - glowX) * 0.08
      glowY += (mouseY - glowY) * 0.08
      ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%)`
      glow.style.transform = `translate3d(${glowX}px, ${glowY}px, 0) translate(-50%, -50%)`
      frame = window.requestAnimationFrame(loop)
    }

    const handleOver = (event) => {
      const target = event.target
      if (!(target instanceof Element)) {
        return
      }
      const interactive = target.closest(
        'a, button, [role="button"], input, textarea, select, [data-cursor]',
      )
      const card = target.closest('[data-cursor="card"]')
      const magnetic = target.closest('[data-cursor="magnetic"]')
      root.classList.toggle('cursor-hover', Boolean(interactive))
      root.classList.toggle('cursor-card', Boolean(card))
      root.classList.toggle('cursor-magnetic', Boolean(magnetic))
    }

    frame = window.requestAnimationFrame(loop)
    window.addEventListener('mousemove', handleMove, { passive: true })
    window.addEventListener('mouseover', handleOver, { passive: true })
    document.addEventListener('mouseleave', hide)
    window.addEventListener('blur', hide)

    return () => {
      window.cancelAnimationFrame(frame)
      root.classList.remove(
        'has-cursor',
        'cursor-visible',
        'cursor-hover',
        'cursor-card',
        'cursor-magnetic',
      )
      window.removeEventListener('mousemove', handleMove)
      window.removeEventListener('mouseover', handleOver)
      document.removeEventListener('mouseleave', hide)
      window.removeEventListener('blur', hide)
    }
  }, [])

  return (
    <div className="cursor-layer" aria-hidden="true">
      <div className="cursor-glow" ref={glowRef} />
      <div className="cursor-ring" ref={ringRef} />
      <div className="cursor-dot" ref={dotRef} />
    </div>
  )
}
