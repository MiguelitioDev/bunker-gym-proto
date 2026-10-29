import type { ReactNode } from 'react'
import { contact, faq, links } from '../data/site'
import { whatsappUrl } from '../lib/links'
import { reveal } from '../lib/reveal'

const external = { target: '_blank', rel: 'noopener noreferrer' } as const
const TOKENS = /(\{whatsapp\}|\{plans\}|\{phone\}|\{instagram\})/

/** Troca os marcadores `{whatsapp}`, `{plans}`, `{phone}` e `{instagram}` por links reais. */
function renderAnswer(text: string): ReactNode[] {
  return text.split(TOKENS).map((part, i) => {
    switch (part) {
      case '{whatsapp}':
        return (
          <a key={i} className="link" href={whatsappUrl()} {...external}>
            fale com a equipe no WhatsApp
          </a>
        )
      case '{plans}':
        return (
          <a key={i} className="link" href={links.plans} {...external}>
            sistema de vendas
          </a>
        )
      case '{phone}':
        return (
          <a key={i} className="link" href={whatsappUrl()} {...external}>
            {contact.whatsappDisplay}
          </a>
        )
      case '{instagram}':
        return (
          <a key={i} className="link" href={contact.instagramUrl} {...external}>
            {contact.instagramHandle}
          </a>
        )
      default:
        return part
    }
  })
}

export function Faq() {
  return (
    <section id="faq" data-chapter="concrete" className="faq ch-concrete" aria-labelledby="faq-title">
      <div className="faq-head">
        <h2 id="faq-title" className="display faq-title" {...reveal(0)}>
          Dúvidas{' '}
          <br />
          frequentes
        </h2>
      </div>

      <div className="faq-list">
        {faq.map((item, i) => (
          <details key={item.q} className="faq-tile" {...{ name: 'faq' }} {...reveal(Math.min(i, 3))}>
            <summary>
              <span>{item.q}</span>
              <span className="plus" aria-hidden="true" />
            </summary>
            <p className="faq-answer">{renderAnswer(item.a)}</p>
          </details>
        ))}
      </div>
    </section>
  )
}
