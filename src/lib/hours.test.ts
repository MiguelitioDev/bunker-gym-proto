import { describe, it, expect } from 'vitest'
import { formatHour, localParts, getOpenStatus } from './hours'

describe('formatHour', () => {
  it('formata horas cheias e horários com minutos', () => {
    expect(formatHour('06:00')).toBe('6h')
    expect(formatHour('13:30')).toBe('13h30')
    expect(formatHour('22:00')).toBe('22h')
  })
})

describe('localParts', () => {
  it('extrai dia da semana e minutos no fuso de Maringá', () => {
    expect(localParts(new Date('2026-11-02T13:00:00Z'))).toEqual({
      day: 1,
      minutes: 600,
    })
  })
})

describe('getOpenStatus', () => {
  it('indica aberto na segunda-feira às 10:00 locais', () => {
    const status = getOpenStatus(new Date('2026-11-02T13:00:00Z'))
    expect(status.open).toBe(true)
    expect(status.headline).toBe('Aberto agora')
    expect(status.detail).toBe('Hoje fecha às 22h.')
    expect(status.today.label).toBe('Segunda a sexta')
  })

  it('indica fechado na segunda-feira às 05:59 locais (antes de abrir)', () => {
    const status = getOpenStatus(new Date('2026-11-02T08:59:00Z'))
    expect(status.open).toBe(false)
    expect(status.headline).toBe('Fechado agora')
    expect(status.detail).toBe('Abre hoje às 6h.')
  })

  it('indica fechado na segunda-feira exatamente às 22:00 locais (fechamento exclusivo)', () => {
    const status = getOpenStatus(new Date('2026-11-03T01:00:00Z'))
    expect(status.open).toBe(false)
    expect(status.detail).toBe('Abre amanhã às 6h.')
  })

  it('indica abertura no sábado às 8h quando consultado na sexta-feira às 22:30 locais', () => {
    const status = getOpenStatus(new Date('2026-11-07T01:30:00Z'))
    expect(status.open).toBe(false)
    expect(status.detail).toBe('Abre amanhã às 8h.')
  })

  it('indica aberto no sábado às 12:59 locais', () => {
    const status = getOpenStatus(new Date('2026-11-07T15:59:00Z'))
    expect(status.open).toBe(true)
    expect(status.detail).toBe('Hoje fecha às 13h.')
  })

  it('indica abertura na segunda às 6h quando consultado no sábado às 13:00 locais', () => {
    const status = getOpenStatus(new Date('2026-11-07T16:00:00Z'))
    expect(status.open).toBe(false)
    expect(status.detail).toBe('Abre segunda às 6h.')
  })

  it('indica fechado no domingo às 10:00 locais com abertura amanhã às 6h', () => {
    const status = getOpenStatus(new Date('2026-11-01T13:00:00Z'))
    expect(status.open).toBe(false)
    expect(status.detail).toBe('Abre amanhã às 6h.')
  })

  it('respeita o fuso de Maringá quando em UTC já é segunda-feira mas localmente ainda é domingo 22:30', () => {
    const status = getOpenStatus(new Date('2026-11-02T01:30:00Z'))
    expect(status.open).toBe(false)
    expect(status.detail).toBe('Abre amanhã às 6h.')
    expect(status.today.label).toBe('Domingo')
  })
})
