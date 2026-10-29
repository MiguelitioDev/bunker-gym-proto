import { business, hours, type HoursRule } from '../data/site'

export type OpenStatus = {
  open: boolean
  /** Linha curta e grande: "Aberto agora" ou "Fechado agora". */
  headline: string
  /** Frase de apoio: quando fecha ou quando abre de novo. */
  detail: string
  /** Regra do dia atual, para destacar a linha certa na lista de horários. */
  today: HoursRule
}

const WEEKDAY: Record<string, number> = { Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6 }
const DAY_NAME = ['domingo', 'segunda', 'terça', 'quarta', 'quinta', 'sexta', 'sábado']

/** "06:00" → minutos desde a meia-noite. */
function toMinutes(hhmm: string): number {
  const [h, m] = hhmm.split(':').map(Number)
  return h * 60 + m
}

/** "06:00" → "6h"; "13:30" → "13h30". */
export function formatHour(hhmm: string): string {
  const [h, m] = hhmm.split(':').map(Number)
  return m === 0 ? `${h}h` : `${h}h${String(m).padStart(2, '0')}` // taste-skill-ignore: minutos de um horário
}

/** Dia da semana e minutos desde a meia-noite no fuso de Maringá. */
export function localParts(now: Date, timeZone: string = business.timeZone) {
  const parts = new Intl.DateTimeFormat('en-US', {
    timeZone,
    weekday: 'short',
    hour: '2-digit',
    minute: '2-digit',
    hourCycle: 'h23',
  }).formatToParts(now)
  const get = (type: string) => parts.find((p) => p.type === type)?.value ?? ''
  return {
    day: WEEKDAY[get('weekday')],
    minutes: Number(get('hour')) * 60 + Number(get('minute')),
  }
}

function ruleFor(day: number): HoursRule {
  return hours.find((r) => r.days.includes(day)) as HoursRule
}

/** Próximo horário de abertura depois de `day`/`minutes`, em texto. */
function nextOpening(day: number, minutes: number): string {
  for (let step = 0; step < 8; step++) {
    const d = (day + step) % 7
    const rule = ruleFor(d)
    if (!rule.opens) continue
    if (step === 0 && toMinutes(rule.opens) <= minutes) continue
    const when = step === 0 ? 'hoje' : step === 1 ? 'amanhã' : DAY_NAME[d]
    return `Abre ${when} às ${formatHour(rule.opens)}.`
  }
  return ''
}

export function getOpenStatus(now: Date = new Date(), timeZone: string = business.timeZone): OpenStatus {
  const { day, minutes } = localParts(now, timeZone)
  const today = ruleFor(day)
  if (today.opens && today.closes) {
    const opens = toMinutes(today.opens)
    const closes = toMinutes(today.closes)
    if (minutes >= opens && minutes < closes) {
      return { open: true, headline: 'Aberto agora', detail: `Hoje fecha às ${formatHour(today.closes)}.`, today }
    }
  }
  return { open: false, headline: 'Fechado agora', detail: nextOpening(day, minutes), today }
}
