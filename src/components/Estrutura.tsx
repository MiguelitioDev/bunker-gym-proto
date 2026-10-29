import { images } from '../data/site'
import { reveal } from '../lib/reveal'
import { Photo } from './Photo'

const amenities = ['Armários', 'Chuveiros', 'Vestiários', 'Wi-Fi'] as const

export function Estrutura() {
  return (
    <section id="estrutura" data-chapter="concrete" className="estrutura ch-concrete" aria-labelledby="estrutura-title">
      <div className="panel">
        <div className="panel-left">
          <h2 id="estrutura-title" className="display panel-title" {...reveal(0)}>
            Salão escuro,{' '}
            <br />
            pista laranja.
          </h2>
          <div className="panel-photo" {...reveal(1)}>
            <Photo img={images.salao} sizes="(min-width: 1024px) 52vw, 92vw" />
          </div>
        </div>

        <div className="panel-right">
          <div {...reveal(1)}>
            <h3>Salão principal</h3>
            <p className="body-text">
              Máquinas, anilhas e bancos distribuídos pelo salão, com televisores nas paredes e uma pista tracejada
              cruzando o piso laranja.
            </p>
          </div>

          <div {...reveal(2)}>
            <h3>Apoio ao treino</h3>
            <ul className="amenities">
              {amenities.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="amenities-note">Conforme o perfil da Bunker Gym no Wellhub.</p>
          </div>

          <a className="btn btn-orange self-start" href="#galeria" {...reveal(3)}>
            Ver mais fotos
          </a>
        </div>
      </div>
    </section>
  )
}
