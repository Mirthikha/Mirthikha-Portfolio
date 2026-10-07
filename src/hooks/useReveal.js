import { useEffect, useRef } from 'react'

// Adds the "in" class once the element scrolls into view (CSS disables the effect for reduced-motion users).
export default function useReveal() {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el || !('IntersectionObserver' in window)) { el?.classList.add('in'); return }
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { el.classList.add('in'); io.disconnect() }
    }, { threshold: 0.1 })
    io.observe(el)
    return () => io.disconnect()
  }, [])
  return ref
}
