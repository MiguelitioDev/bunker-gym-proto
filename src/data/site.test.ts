import { describe, it, expect } from 'vitest'
import { contact, faq, hours, images, links, modalidades } from './site'

describe('links e contact', () => {
  it('mantém a URL oficial de planos do Next Fit', () => {
    expect(links.plans).toBe(
      'https://venda.nextfit.com.br/6d61bc39-6618-4f20-ab22-822f5090df28/contratos',
    )
  })

  it('mantém os dígitos do WhatsApp da academia', () => {
    expect(contact.whatsappDigits).toBe('5544998006820')
  })
})

describe('hours', () => {
  it('cobre todos os dias da semana de 0 a 6 exatamente uma vez', () => {
    const allDays = hours.flatMap((rule) => rule.days).slice().sort((a, b) => a - b)
    expect(allDays).toEqual([0, 1, 2, 3, 4, 5, 6])
  })

  it('garante que regras com opens nulo também têm closes nulo e vice-versa', () => {
    for (const rule of hours) {
      expect(rule.opens === null).toBe(rule.closes === null)
    }
  })
})

describe('images e modalidades', () => {
  it('valida que todas as imagens possuem alt descritivo e dimensões positivas', () => {
    const allImages = [
      ...Object.values(images),
      ...modalidades.map((m) => m.img),
    ]
    for (const img of allImages) {
      expect(img.alt.trim().length).toBeGreaterThanOrEqual(20)
      expect(img.w).toBeGreaterThan(0)
      expect(img.h).toBeGreaterThan(0)
    }
  })
})

describe('faq', () => {
  it('possui pelo menos 5 perguntas e usa apenas marcadores válidos nas respostas', () => {
    expect(faq.length).toBeGreaterThanOrEqual(5)
    const allowedTokens = new Set(['{whatsapp}', '{plans}', '{phone}', '{instagram}'])

    for (const item of faq) {
      const stripped = item.a.replace(/\{(whatsapp|plans|phone|instagram)\}/g, '')
      expect(stripped).not.toContain('{')
      const matches = item.a.match(/\{[^}]*\}/g) ?? []
      for (const token of matches) {
        expect(allowedTokens.has(token)).toBe(true)
      }
    }
  })
})
