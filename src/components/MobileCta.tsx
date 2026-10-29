import { useEffect, useState } from 'react'
import { links } from '../data/site'
import { whatsappUrl } from '../lib/links'

/**
 * Barra fixa só no celular. Aparece depois da primeira dobra e some quando a faixa
 * final ou o rodapé entram na tela, para nunca cobrir esses conteúdos.
 */
export function MobileCta() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const hero = document.getElementById('inicio')
    const end = [document.getElementById('final'), document.querySelector('footer')].filter(Boolean) as Element[]
    if (!hero || !('IntersectionObserver' in window)) return

    let heroIn = true
    const endIn = new Set<Element>()
    const sync = () => setVisible(!heroIn && endIn.size === 0)

    const io = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.target === hero) heroIn = entry.isIntersecting
        else if (entry.isIntersecting) endIn.add(entry.target)
        else endIn.delete(entry.target)
      }
      sync()
    }, { threshold: 0.05 })

    io.observe(hero)
    end.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])

  return (
    <div className="mobile-cta" data-visible={visible} aria-hidden={!visible || undefined}>
      <a
        className="btn btn-orange"
        href={links.plans}
        target="_blank"
        rel="noopener noreferrer"
        tabIndex={visible ? 0 : -1}
      >
        Conheça os planos
      </a>
      <a
        className="btn btn-dark"
        href={whatsappUrl()}
        target="_blank"
        rel="noopener noreferrer"
        tabIndex={visible ? 0 : -1}
      >
        WhatsApp
      </a>
    </div>
  )
}
