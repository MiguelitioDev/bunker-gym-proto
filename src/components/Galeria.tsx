import { contact, images } from '../data/site'
import { reveal } from '../lib/reveal'
import { Photo } from './Photo'

export function Galeria() {
  return (
    <section id="galeria" data-chapter="orange" className="galeria ch-orange" aria-labelledby="galeria-title">
      <h2 id="galeria-title" className="display galeria-title" {...reveal(0)}>
        Por dentro{' '}
        <br />
        do Bunker
      </h2>

      <div className="prints">
        <figure className="print print-a" {...reveal(1)}>
          <Photo img={images.recepcao} sizes="(min-width: 900px) 25vw, 56vw" />
        </figure>
        <figure className="print print-b" {...reveal(2)}>
          <Photo img={images.apoio} sizes="(min-width: 900px) 25vw, 56vw" />
        </figure>
        <figure className="print print-c" {...reveal(3)}>
          <Photo img={images.salao} sizes="(min-width: 900px) 28vw, 44vw" />
        </figure>
      </div>

      <div className="galeria-foot" {...reveal(2)}>
        <p className="body-text">Recepção, salão e área de apoio da Bunker Gym.</p>
        <a className="btn btn-dark" href={contact.instagramUrl} target="_blank" rel="noopener noreferrer">
          Siga no Instagram
        </a>
      </div>
    </section>
  )
}
