import { modalidades } from '../data/site'
import { whatsappUrl } from '../lib/links'
import { reveal } from '../lib/reveal'
import { Photo } from './Photo'

export function Modalidades() {
  return (
    <section id="modalidades" data-chapter="black" className="modalidades ch-black" aria-labelledby="modalidades-title">
      <div className="mod-grid">
        <div className="mod-head">
          <h2 id="modalidades-title" className="display mod-title" {...reveal(0)}>
            Modalidades
          </h2>
          <p className="body-text mod-intro" {...reveal(1)}>
            Dúvidas sobre aulas e horários específicos?{' '}
            <a className="link" href={whatsappUrl()} target="_blank" rel="noopener noreferrer">
              Pergunte à equipe pelo WhatsApp.
            </a>
          </p>
        </div>

        <div className="mod-list">
          {modalidades.map((item) => (
            <article key={item.title} className="mod-item" {...reveal(0)}>
              <h3>{item.title}</h3>
              <div className="mod-row">
                <div className="mod-photo">
                  <Photo img={item.img} sizes="(min-width: 900px) 32vw, 92vw" />
                </div>
                <p>{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
