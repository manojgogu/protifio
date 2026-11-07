import { useEffect, useState } from 'react'

export default function useTyping(words, options = {}) {
  const { typeSpeed = 72, deleteSpeed = 38, hold = 1600 } = options
  const [index, setIndex] = useState(0)
  const [text, setText] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduceMotion) {
      setText(words[0] ?? '')
      return undefined
    }

    const word = words[index % words.length] ?? ''
    let delay = deleting ? deleteSpeed : typeSpeed

    if (!deleting && text === word) {
      delay = hold
    } else if (deleting && text === '') {
      delay = 240
    }

    const timer = window.setTimeout(() => {
      if (!deleting && text === word) {
        setDeleting(true)
        return
      }

      if (deleting && text === '') {
        setDeleting(false)
        setIndex((current) => (current + 1) % words.length)
        return
      }

      setText(deleting ? word.slice(0, text.length - 1) : word.slice(0, text.length + 1))
    }, delay)

    return () => window.clearTimeout(timer)
  }, [deleting, deleteSpeed, hold, index, text, typeSpeed, words])

  return text
}
