import { useEffect } from 'react'

/** Observa todo `[data-reveal]` da página e marca `.is-in` na primeira vez que aparece. */
export function useReveal() {
  useEffect(() => {
    const items = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'))
    if (!('IntersectionObserver' in window)) {
      items.forEach((el) => el.classList.add('is-in'))
      return
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-in')
            io.unobserve(entry.target)
          }
        }
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.12 },
    )
    items.forEach((el) => io.observe(el))

    // O que já está na primeira tela entra logo, sem esperar rolagem.
    const frame = requestAnimationFrame(() =>
      requestAnimationFrame(() => {
        for (const el of items) {
          const r = el.getBoundingClientRect()
          if (r.top < window.innerHeight && r.bottom > 0) {
            el.classList.add('is-in')
            io.unobserve(el)
          }
        }
      }),
    )
    return () => {
      cancelAnimationFrame(frame)
      io.disconnect()
    }
  }, [])
}
