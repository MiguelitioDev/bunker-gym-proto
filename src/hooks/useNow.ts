import { useMemo, useSyncExternalStore } from 'react'
import { getOpenStatus, type OpenStatus } from '../lib/hours'

const TICK_MS = 30_000
const listeners = new Set<() => void>()
let timer: number | undefined

/** Um único cronômetro para a página toda, ligado só enquanto há quem escute. */
function subscribe(listener: () => void) {
  listeners.add(listener)
  if (timer === undefined) {
    timer = window.setInterval(() => listeners.forEach((l) => l()), TICK_MS)
  }
  return () => {
    listeners.delete(listener)
    if (listeners.size === 0 && timer !== undefined) {
      window.clearInterval(timer)
      timer = undefined
    }
  }
}

/** Arredondado para o bloco de 30 s: o valor só muda a cada tique, sem re-render à toa. */
const snapshot = () => Math.floor(Date.now() / TICK_MS) * TICK_MS

/** Data atual, atualizada a cada 30 s e compartilhada por todos os componentes. */
export function useNow(): Date {
  const bucket = useSyncExternalStore(subscribe, snapshot, snapshot)
  return useMemo(() => new Date(bucket), [bucket])
}

export function useOpenStatus(): OpenStatus {
  return getOpenStatus(useNow())
}
