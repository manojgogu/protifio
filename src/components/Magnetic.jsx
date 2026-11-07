import { useEffect, useRef } from 'react'

export default function Magnetic({ children, strength = 0.28 }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) {
      return undefined
    }

    const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!finePointer || reduceMotion) {
      return undefined
    }

    const handleMove = (event) => {
      const rect = el.getBoundingClientRect()
      const x = (event.clientX - rect.left - rect.width / 2) * strength
      const y = (event.clientY - rect.top - rect.height / 2) * strength
      el.style.transform = `translate3d(${x}px, ${y}px, 0)`
    }

    const handleLeave = () => {
      el.style.transform = ''
    }

    el.addEventListener('mousemove', handleMove)
    el.addEventListener('mouseleave', handleLeave)

    return () => {
      el.removeEventListener('mousemove', handleMove)
      el.removeEventListener('mouseleave', handleLeave)
    }
  }, [strength])

  return (
    <span className="magnetic" ref={ref} data-cursor="magnetic">
      {children}
    </span>
  )
}
