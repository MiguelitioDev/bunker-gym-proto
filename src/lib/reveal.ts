import type { CSSProperties } from 'react'

/**
 * Marca um elemento para entrar com fade + subida quando chegar à tela.
 * `order` escalona as partes de uma mesma seção (título, texto, imagem).
 */
export function reveal(order = 0) {
  return { 'data-reveal': '', style: { '--i': order } as CSSProperties }
}
