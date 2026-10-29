import { contact } from '../data/site'

/** Link de conversa no WhatsApp com a mensagem em português já preenchida. */
export function whatsappUrl(message: string = contact.whatsappMessage): string {
  return `https://wa.me/${contact.whatsappDigits}?text=${encodeURIComponent(message)}`
}

export const whatsappHolidayMessage =
  'Olá! Vi o site da Bunker Gym e gostaria de confirmar o horário de funcionamento em feriados.'
