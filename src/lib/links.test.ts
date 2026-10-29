import { describe, it, expect } from 'vitest'
import { contact } from '../data/site'
import { whatsappUrl, whatsappHolidayMessage } from './links'

describe('whatsappUrl', () => {
  it('gera a URL padrão começando com o número da academia', () => {
    const url = whatsappUrl()
    expect(url.startsWith('https://wa.me/5544998006820?text=')).toBe(true)
  })

  it('codifica exatamente a mensagem padrão do site', () => {
    const url = whatsappUrl()
    const encoded = url.split('?text=')[1]
    expect(decodeURIComponent(encoded)).toBe(contact.whatsappMessage)
  })

  it('não contém espaços literais na URL gerada', () => {
    expect(whatsappUrl()).not.toContain(' ')
  })

  it('inclui a mensagem de feriados quando informada', () => {
    const url = whatsappUrl(whatsappHolidayMessage)
    const encoded = url.split('?text=')[1]
    expect(decodeURIComponent(encoded)).toContain('feriados')
  })

  it('preserva acentos, interrogação e e-comercial após encode e decode', () => {
    const custom = 'Olá! Treino de força & aeróbica às 6h? Confirmação de matrícula.'
    const url = whatsappUrl(custom)
    const encoded = url.split('?text=')[1]
    expect(decodeURIComponent(encoded)).toBe(custom)
  })
})
