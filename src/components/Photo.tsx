import type { Img } from '../data/site'

type Props = {
  img: Img
  /** Atributo `sizes`: largura que a imagem ocupa em cada faixa de tela. */
  sizes: string
  /** Só a imagem da primeira dobra é carregada de imediato. */
  eager?: boolean
  className?: string
}

/** Foto da academia com versão 1× e 2× (retina), proporção reservada e carga preguiçosa. */
export function Photo({ img, sizes, eager = false, className }: Props) {
  const base = `/images/${img.name}`
  return (
    <img
      src={`${base}.webp`}
      srcSet={`${base}.webp ${img.w}w, ${base}@2x.webp ${img.w * 2}w`}
      sizes={sizes}
      width={img.w}
      height={img.h}
      alt={img.alt}
      loading={eager ? 'eager' : 'lazy'}
      decoding="async"
      fetchPriority={eager ? 'high' : undefined}
      className={className}
    />
  )
}
