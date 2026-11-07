import { useEffect } from 'react'

export default function useTilt(ref, options = {}) {
  const { max = 7, scale = 1.012 } = options

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

    let frame = 0

    const handleMove = (event) => {
      const rect = el.getBoundingClientRect()
      const px = (event.clientX - rect.left) / rect.width
      const py = (event.clientY - rect.top) / rect.height
      const rotateX = (0.5 - py) * max * 2
      const rotateY = (px - 0.5) * max * 2

      window.cancelAnimationFrame(frame)
      frame = window.requestAnimationFrame(() => {
        el.style.transform = `perspective(1100px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${scale})`
        el.style.setProperty('--glare-x', `${px * 100}%`)
        el.style.setProperty('--glare-y', `${py * 100}%`)
        el.style.setProperty('--glare', '1')
      })
    }

    const handleLeave = () => {
      window.cancelAnimationFrame(frame)
      el.style.transform = ''
      el.style.setProperty('--glare', '0')
    }

    el.addEventListener('mousemove', handleMove)
    el.addEventListener('mouseleave', handleLeave)

    return () => {
      window.cancelAnimationFrame(frame)
      el.removeEventListener('mousemove', handleMove)
      el.removeEventListener('mouseleave', handleLeave)
    }
  }, [max, ref, scale])
}
