type Props = { className?: string }

/** Seta para cima e à direita, traço grosso, herda a cor do texto. */
export function ArrowUpRight({ className }: Props) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" aria-hidden="true" focusable="false">
      <path d="M12 36 36 12M16 12h20v20" stroke="currentColor" strokeWidth="4" strokeLinecap="square" />
    </svg>
  )
}
