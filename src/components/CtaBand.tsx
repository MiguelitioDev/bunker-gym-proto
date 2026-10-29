import { links } from '../data/site'
import { ArrowUpRight } from './ArrowUpRight'

/** Faixa final: a palavra inteira é o botão e leva ao sistema de vendas. */
export function CtaBand() {
  return (
    <a
      id="final"
      data-chapter="orange"
      className="cta-band"
      href={links.plans}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Planos: abrir o sistema de vendas da Bunker Gym em uma nova aba"
    >
      <span className="cta-top">
        <p>Escolha seu plano e veja as condições no sistema de vendas da Bunker Gym.</p>
        <ArrowUpRight className="cta-arrow" />
      </span>
      <span className="display cta-word" aria-hidden="true">
        Planos
      </span>
    </a>
  )
}
