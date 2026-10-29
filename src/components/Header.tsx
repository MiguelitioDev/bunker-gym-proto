import { useEffect, useRef, useState } from 'react'
import { links, logo, nav } from '../data/site'
import { whatsappUrl } from '../lib/links'

type Theme = 'black' | 'orange' | 'concrete'

/** Descobre qual capítulo (seção com data-chapter) está sob o cabeçalho. */
function useChapterTheme(): Theme {
  const [theme, setTheme] = useState<Theme>('black')
  useEffect(() => {
    let frame = 0
    const update = () => {
      frame = 0
      const probe = 28
      const sections = document.querySelectorAll<HTMLElement>('[data-chapter]')
      for (const el of sections) {
        const r = el.getBoundingClientRect()
        if (r.top <= probe && r.bottom > probe) {
          setTheme(el.dataset.chapter as Theme)
          return
        }
      }
    }
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [])
  return theme
}

export function Header() {
  const theme = useChapterTheme()
  const [open, setOpen] = useState(false)
  const toggleRef = useRef<HTMLButtonElement>(null)
  const firstLinkRef = useRef<HTMLAnchorElement>(null)

  useEffect(() => {
    if (!open) return
    document.body.style.overflow = 'hidden'
    firstLinkRef.current?.focus()
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false)
        toggleRef.current?.focus()
      }
    }
    const onResize = () => {
      if (window.innerWidth >= 1100) setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    window.addEventListener('resize', onResize)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
      window.removeEventListener('resize', onResize)
    }
  }, [open])

  return (
    <header className="site-header" data-theme={theme} data-menu={open ? 'open' : 'closed'}>
      <div className="header-inner">
        <a href="#inicio" className="header-logo" aria-label="Bunker Gym, ir ao início" onClick={() => setOpen(false)}>
          <img src={logo.src} width={logo.w} height={logo.h} alt="" />
        </a>

        <nav className="header-nav" aria-label="Principal">
          {nav.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a className="btn btn-orange header-cta" href={links.plans} target="_blank" rel="noopener noreferrer">
            Conheça os planos
          </a>
          <button
            ref={toggleRef}
            type="button"
            className="menu-toggle"
            aria-expanded={open}
            aria-controls="menu-mobile"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? 'Fechar' : 'Menu'}
          </button>
        </div>
      </div>

      <nav id="menu-mobile" className="mobile-menu" aria-label="Menu" hidden={!open}>
        <div>
          {nav.map((item, i) => (
            <a
              key={item.href}
              ref={i === 0 ? firstLinkRef : undefined}
              href={item.href}
              className="menu-link"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </div>
        <div className="flex flex-col gap-3">
          <a className="btn btn-orange" href={links.plans} target="_blank" rel="noopener noreferrer">
            Conheça os planos
          </a>
          <a className="btn btn-line" href={whatsappUrl()} target="_blank" rel="noopener noreferrer">
            Fale com a equipe
          </a>
        </div>
      </nav>
    </header>
  )
}
