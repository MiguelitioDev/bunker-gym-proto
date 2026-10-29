import { useEffect, useState } from 'react'
import { links, proofWords, wellhubRating } from '../data/site'
import { reveal } from '../lib/reveal'

function Words({ hidden = false }: { hidden?: boolean }) {
  return (
    <div className="marquee-group display" aria-hidden={hidden || undefined}>
      {proofWords.map((word) => (
        <span key={word} className="flex items-center">
          {word}
          <i className="marquee-dot" />
        </span>
      ))}
    </div>
  )
}

/** Faixa de palavras cortada pelas bordas, com a nota pública do Wellhub logo abaixo. */
export function Proof() {
  const [paused, setPaused] = useState(false)

  // Um só controle pausa todo movimento automático da página (faixa e foto do início).
  useEffect(() => {
    document.documentElement.dataset.motion = paused ? 'paused' : 'play'
  }, [paused])

  return (
    <section data-chapter="orange" className="proof ch-orange" aria-label="Modalidades e avaliação">
      <div className="marquee" {...reveal(0)}>
        <div className="marquee-track">
          <Words />
          <Words hidden />
        </div>
      </div>

      <div className="proof-note shell" {...reveal(1)}>
        <div>
          <p>
            Modalidades conforme o perfil público da Bunker Gym. No Wellhub, a nota é {wellhubRating.value}/5, em{' '}
            {wellhubRating.reviews} avaliações.
          </p>
          <button type="button" className="motion-toggle link" aria-pressed={paused} onClick={() => setPaused((v) => !v)}>
            {paused ? 'Retomar os movimentos da página' : 'Pausar os movimentos da página'}
          </button>
        </div>
        <a className="btn btn-dark" href={links.wellhub} target="_blank" rel="noopener noreferrer">
          Ver o perfil no Wellhub
        </a>
      </div>
    </section>
  )
}
