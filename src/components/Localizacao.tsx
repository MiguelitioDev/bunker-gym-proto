import { business, contact, links } from '../data/site'
import { whatsappUrl } from '../lib/links'
import { reveal } from '../lib/reveal'

export function Localizacao() {
  return (
    <section
      id="localizacao"
      data-chapter="orange"
      className="localizacao ch-orange"
      aria-labelledby="localizacao-title"
    >
      <div className="addr">
        <ul className="addr-rows">
          <li {...reveal(0)}>
            <h2 id="localizacao-title" className="display addr-row">
              Localização
            </h2>
          </li>
          <li className="display addr-row" {...reveal(1)}>
            {business.neighborhood}
          </li>
          <li className="display addr-row" {...reveal(2)}>
            {business.city}, {business.stateName}
          </li>
          <li className="display addr-row" {...reveal(3)}>
            Seg–sex, 6h às 22h
          </li>
          <li className="display addr-row" {...reveal(4)}>
            Sáb, 8h às 13h
          </li>
          <li {...reveal(5)}>
            <a className="display addr-row" href={whatsappUrl()} target="_blank" rel="noopener noreferrer">
              {contact.whatsappDisplay}
            </a>
          </li>
        </ul>

        <div className="addr-actions" {...reveal(2)}>
          <a className="btn btn-dark" href={links.maps} target="_blank" rel="noopener noreferrer">
            Como chegar
          </a>
          <a className="btn btn-line" href={whatsappUrl()} target="_blank" rel="noopener noreferrer">
            Fale com a equipe
          </a>
        </div>
      </div>

      <div className="map-wrap" {...reveal(2)}>
        <iframe
          title="Mapa da região da Bunker Gym, em Maringá"
          src={links.mapsEmbed}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </section>
  )
}
