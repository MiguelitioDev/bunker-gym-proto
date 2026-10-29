import { hours } from '../data/site'
import { useOpenStatus } from '../hooks/useNow'
import { whatsappHolidayMessage, whatsappUrl } from '../lib/links'
import { reveal } from '../lib/reveal'

export function Horarios() {
  const status = useOpenStatus()

  return (
    <section id="horarios" data-chapter="black" className="horarios ch-black" aria-labelledby="horarios-title">
      <div className="horarios-left">
        <h2 id="horarios-title" className="display giant" {...reveal(0)}>
          Horários
        </h2>
        <ul className="bars" {...reveal(1)}>
          {hours.map((rule) => (
            <li key={rule.label} className="bar-row" data-today={rule === status.today}>
              <span>{rule.label}</span>
              <b>{rule.opens && rule.closes ? `${rule.opens}–${rule.closes}` : 'Fechado'}</b>
            </li>
          ))}
        </ul>
      </div>

      <div className="horarios-right" {...reveal(1)}>
        <div>
          <p className="display live-word" role="status">
            {status.headline}
          </p>
          <p className="live-detail">
            {status.detail} Horário de Maringá, conforme a tabela ao lado.
          </p>
        </div>
        <div className="lane" aria-hidden="true" />
        <div className="flex flex-col items-start gap-5">
          <p className="body-text">Em feriados os horários podem mudar. Confirme com a equipe antes de ir.</p>
          <a
            className="btn btn-dark"
            href={whatsappUrl(whatsappHolidayMessage)}
            target="_blank"
            rel="noopener noreferrer"
          >
            Confirmar horário no WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}
