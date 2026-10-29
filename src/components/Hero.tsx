import { images, links } from '../data/site'
import { useOpenStatus } from '../hooks/useNow'
import { whatsappUrl } from '../lib/links'
import { reveal } from '../lib/reveal'
import { Photo } from './Photo'

export function Hero() {
  const status = useOpenStatus()

  return (
    <section id="inicio" data-chapter="black" className="hero ch-black" aria-labelledby="hero-title">
      <h1 id="hero-title" className="display hero-title" {...reveal(0)}>
        <span>Seu próximo nível</span>
        <span className="accent">começa aqui.</span>
      </h1>

      <div className="hero-body">
        <div className="hero-copy">
          <p className="lead" {...reveal(1)}>
            Musculação e condicionamento no Jardim Império do Sol, em Maringá. De segunda a sexta, a Bunker Gym abre
            às 6h e fecha às 22h.
          </p>

          <div className="hero-foot">
            <div className="hero-actions" {...reveal(2)}>
              <a className="btn btn-orange" href={links.plans} target="_blank" rel="noopener noreferrer">
                Conheça os planos
              </a>
              <a className="btn btn-line" href={whatsappUrl()} target="_blank" rel="noopener noreferrer">
                Fale com a equipe
              </a>
            </div>

            <p className="status" data-open={status.open} {...reveal(3)}>
              <span className="status-dot" aria-hidden="true" />
              <strong>{status.headline}.</strong>
              <span>{status.detail}</span>
            </p>
          </div>
        </div>

        <div className="hero-photo" {...reveal(2)}>
          <Photo img={images.hero} eager sizes="(min-width: 900px) 56vw, 100vw" />
        </div>
      </div>
    </section>
  )
}
