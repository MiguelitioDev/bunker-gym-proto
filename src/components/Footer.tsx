import { business, contact, hours, links, logo, nav } from '../data/site'
import { useNow } from '../hooks/useNow'
import { formatHour } from '../lib/hours'
import { whatsappUrl } from '../lib/links'
import { ArrowUpRight } from './ArrowUpRight'

const external = { target: '_blank', rel: 'noopener noreferrer' } as const
const clock = new Intl.DateTimeFormat('pt-BR', { timeZone: business.timeZone, hour: '2-digit', minute: '2-digit' })

export function Footer() {
  const now = useNow()
  const localTime = clock.format(now)

  return (
    <footer className="footer ch-black" data-chapter="black">
      <div className="tile tile-statement">
        <p>Bunker Gym. Musculação e condicionamento em Maringá.</p>
        <p className="tile-small">
          Fotos do perfil da Bunker Gym no Wellhub. Protótipo de site por MJStudios.
        </p>
      </div>

      <nav className="tile tile-nav" aria-label="Rodapé">
        <ul>
          {nav.map((item) => (
            <li key={item.href}>
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
          <li>
            <a href={links.plans} {...external}>
              Planos (sistema de vendas)
            </a>
          </li>
        </ul>
      </nav>

      <div className="tile tile-hours">
        <ul>
          {hours.map((rule) => (
            <li key={rule.label}>
              {rule.short}{' '}
              {rule.opens && rule.closes ? `${formatHour(rule.opens)}–${formatHour(rule.closes)}` : 'fechado'}
            </li>
          ))}
        </ul>
        <p className="tile-small">
          {business.city}, agora {localTime}
        </p>
      </div>

      <div className="tile tile-contact">
        <p>
          {business.neighborhood}
          <br />
          {business.city}, {business.state}
        </p>
        <ul>
          <li>
            <a href={whatsappUrl()} {...external}>
              WhatsApp {contact.whatsappDisplay}
            </a>
          </li>
          <li>
            <a href={contact.instagramUrl} {...external}>
              Instagram {contact.instagramHandle}
            </a>
          </li>
        </ul>
      </div>

      <div className="tile tile-mark">
        <img src={logo.src} width={logo.w} height={logo.h} alt={logo.alt} loading="lazy" decoding="async" />
      </div>

      <a className="tile tile-cta" href={whatsappUrl()} {...external}>
        <span>Fale com a equipe no WhatsApp</span>
        <ArrowUpRight />
      </a>
    </footer>
  )
}
