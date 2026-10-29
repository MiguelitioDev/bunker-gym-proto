import { images, links } from '../data/site'
import { whatsappUrl } from '../lib/links'
import { reveal } from '../lib/reveal'
import { Photo } from './Photo'

export function Planos() {
  return (
    <section id="planos" data-chapter="concrete" className="planos ch-concrete" aria-labelledby="planos-title">
      <h2 id="planos-title" className="display planos-title" {...reveal(0)}>
        Encontre o plano{' '}
        <br />
        ideal para você.
      </h2>

      <div className="planos-row">
        <div className="planos-copy">
          <p className="lead" {...reveal(1)}>
            Consulte os planos disponíveis e veja as condições diretamente no sistema de vendas da Bunker Gym.
          </p>
          <div className="planos-actions" {...reveal(2)}>
            <a className="btn btn-orange" href={links.plans} target="_blank" rel="noopener noreferrer">
              Conheça os planos
            </a>
            <a className="link" href={whatsappUrl()} target="_blank" rel="noopener noreferrer">
              Prefere conversar? Fale pelo WhatsApp
            </a>
          </div>
        </div>

        <div className="planos-photo" {...reveal(2)}>
          <Photo img={images.salaoAmplo} sizes="(min-width: 900px) 40vw, 92vw" />
        </div>
      </div>
    </section>
  )
}
