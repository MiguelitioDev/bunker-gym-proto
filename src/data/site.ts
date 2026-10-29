/**
 * Tudo o que é específico da Bunker Gym fica aqui: contatos, links, horários,
 * textos que dependem de confirmação do dono e caminhos das imagens.
 * Para atualizar o protótipo depois do feedback do cliente, edite só este arquivo.
 */

export const business = {
  name: 'Bunker Gym',
  neighborhood: 'Jardim Império do Sol',
  city: 'Maringá',
  state: 'PR',
  stateName: 'Paraná',
  /** Fuso usado para o status "aberto agora". */
  timeZone: 'America/Sao_Paulo',
} as const

export const contact = {
  whatsappDigits: '5544998006820',
  whatsappDisplay: '(44) 99800-6820',
  whatsappMessage:
    'Olá! Vi o site da Bunker Gym e gostaria de saber mais sobre os planos e como posso conhecer a academia.',
  instagramHandle: '@bunkergymacademia',
  instagramUrl: 'https://www.instagram.com/bunkergymacademia/',
} as const

export const links = {
  /** Sistema de vendas atual (Next Fit). Todo CTA de plano aponta para cá. */
  plans: 'https://venda.nextfit.com.br/6d61bc39-6618-4f20-ab22-822f5090df28/contratos',
  linktree: 'https://linktr.ee/bunkergymacademia',
  wellhub:
    'https://wellhub.com/pt-br/search/partners/bunker-gym-f5a0bbcc-becf-411f-8d55-f7ac87a7c225/',
  /** Busca no Google Maps. O endereço completo ainda não foi confirmado pelo dono. */
  maps: 'https://www.google.com/maps/search/?api=1&query=Bunker%20Gym%20Jardim%20Imp%C3%A9rio%20do%20Sol%20Maring%C3%A1',
  mapsEmbed: 'https://www.google.com/maps?q=Bunker+Gym+Jardim+Imp%C3%A9rio+do+Sol+Maring%C3%A1&output=embed',
} as const

/**
 * Nota pública no Wellhub, conferida na página do perfil em 29/10/2026.
 * Atenção: o briefing citava 4,92 e 189 avaliações; a página mostrava 4,91 e 181.
 * Atualize aqui se o número mudar.
 */
export const wellhubRating = {
  value: '4,91',
  reviews: 181,
  checkedOn: '29/10/2026',
} as const

export type HoursRule = {
  /** 0 = domingo … 6 = sábado, como em Date#getDay. */
  days: readonly number[]
  label: string
  short: string
  /** null = fechado o dia todo. */
  opens: string | null
  closes: string | null
}

export const hours: readonly HoursRule[] = [
  { days: [1, 2, 3, 4, 5], label: 'Segunda a sexta', short: 'Seg–Sex', opens: '06:00', closes: '22:00' },
  { days: [6], label: 'Sábado', short: 'Sáb', opens: '08:00', closes: '13:00' },
  { days: [0], label: 'Domingo', short: 'Dom', opens: null, closes: null },
]

export const nav = [
  { href: '#inicio', label: 'Início' },
  { href: '#estrutura', label: 'Estrutura' },
  { href: '#modalidades', label: 'Modalidades' },
  { href: '#horarios', label: 'Horários' },
  { href: '#localizacao', label: 'Localização' },
] as const

/** Palavras da faixa em movimento. Vêm das modalidades e do local, no perfil público. */
export const proofWords = ['Musculação', 'Fisiculturismo', 'Aeróbica', 'Abdominal', 'Maringá'] as const

export type Img = {
  /** Nome-base em /images (sem extensão). Existe `nome.webp` e `nome@2x.webp`. */
  name: string
  w: number
  h: number
  alt: string
}

/** Fotos reais da academia (perfil público no Wellhub). Troque pelas do dono quando chegarem. */
export const images = {
  hero: {
    name: 'hero-pista',
    w: 639,
    h: 359,
    alt: 'Pista laranja com faixa tracejada cruzando o salão da Bunker Gym, com bicicletas pretas à direita e máquinas à esquerda.',
  },
  salao: {
    name: 'salao-musculacao',
    w: 639,
    h: 426,
    alt: 'Salão de musculação da Bunker Gym, com paredes pretas, máquinas, bancos e anilhas.',
  },
  salaoAmplo: {
    name: 'salao-amplo',
    w: 568,
    h: 426,
    alt: 'Vista ampla do salão de musculação com televisores nas paredes e pontos de luz no teto.',
  },
  bike: {
    name: 'bike-detalhe',
    w: 639,
    h: 359,
    alt: 'Detalhe de uma bicicleta com a marca Bunker Gym ao lado do piso laranja.',
  },
  recepcao: {
    name: 'recepcao',
    w: 639,
    h: 359,
    alt: 'Recepção da Bunker Gym, com a parede laranja e a marca na entrada do salão.',
  },
  funcional: {
    name: 'area-funcional',
    w: 639,
    h: 359,
    alt: 'Área com colchonetes e bolas de exercício, sob a marca Bunker Gym na parede laranja.',
  },
  apoio: {
    name: 'apoio',
    w: 639,
    h: 359,
    alt: 'Prateleiras pretas e bebedouro em uma área de apoio do salão.',
  },
} as const satisfies Record<string, Img>

export const logo = {
  src: '/images/logo-bunker-gym.webp',
  w: 1222,
  h: 230,
  alt: 'Bunker Gym',
} as const

export const modalidades = [
  {
    title: 'Musculação e fisiculturismo',
    text: 'Treino de força com máquinas, anilhas e bancos distribuídos pelo salão principal.',
    img: images.salaoAmplo,
  },
  {
    title: 'Aeróbica',
    text: 'Bicicletas com a marca da casa alinhadas ao longo da pista laranja.',
    img: images.bike,
  },
  {
    title: 'Abdominal',
    text: 'Espaço com colchonetes e bolas de exercício para o trabalho de abdômen.',
    img: images.funcional,
  },
] as const

export type FaqItem = {
  q: string
  /** `{whatsapp}` vira link para a conversa; `{plans}` vira link para os planos. */
  a: string
}

export const faq: readonly FaqItem[] = [
  {
    q: 'Onde fica a Bunker Gym?',
    a: 'No bairro Jardim Império do Sol, em Maringá (PR). Use o botão “Como chegar” na seção de localização para abrir a busca no Google Maps.',
  },
  {
    q: 'Qual é o horário de funcionamento?',
    a: 'De segunda a sexta, das 6h às 22h. Aos sábados, das 8h às 13h. Aos domingos a academia fica fechada.',
  },
  {
    q: 'Como posso conhecer os planos?',
    a: 'Pelo botão “Conheça os planos”, que abre o sistema de vendas da Bunker Gym com os planos disponíveis. Se preferir, {whatsapp}.',
  },
  {
    q: 'Quanto custa e quais são as condições?',
    a: 'Valores e condições aparecem no {plans}. Para qualquer dúvida sobre eles, {whatsapp}.',
  },
  {
    q: 'Posso fazer uma visita ou aula experimental?',
    a: 'Para saber sobre visitas e aulas experimentais, {whatsapp}. A equipe responde com as condições atuais.',
  },
  {
    q: 'Como entro em contato com a equipe?',
    a: 'Pelo WhatsApp, no número {phone}, ou pelo Instagram {instagram}.',
  },
  {
    q: 'Como confirmo os horários em feriados?',
    a: 'Os horários podem mudar em feriados. Antes de ir, {whatsapp} e confirme.',
  },
]
