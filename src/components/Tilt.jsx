import { useRef } from 'react'
import useTilt from '../hooks/useTilt'

export default function Tilt({ children, className = '', max = 7, scale = 1.012 }) {
  const ref = useRef(null)
  useTilt(ref, { max, scale })

  return (
    <div className={`tilt ${className}`.trim()} ref={ref}>
      {children}
    </div>
  )
}
