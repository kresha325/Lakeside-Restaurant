interface CategoryIconProps {
  name: string
  active?: boolean
  className?: string
}

const stroke = (active?: boolean) => (active ? '#FFFFFF' : '#6B6B6B')

export function CategoryIcon({ name, active, className }: CategoryIconProps) {
  const s = stroke(active)
  const common = {
    fill: 'none' as const,
    stroke: s,
    strokeWidth: 1.6,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
  }

  switch (name) {
    case 'breakfast':
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden>
          <circle cx="12" cy="12" r="7" {...common} />
          <path {...common} d="M12 9v3l2 1.5" />
          <path {...common} d="M5 5l1.5 1.5M19 5l-1.5 1.5" />
        </svg>
      )
    case 'soup':
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden>
          <path {...common} d="M4 11h16v2a6 6 0 0 1-6 6h-4a6 6 0 0 1-6-6v-2z" />
          <path {...common} d="M8 11c0-2 1.5-4 4-4s4 2 4 4" />
          <path {...common} d="M9 7c0-1 .8-2 2-2M13 5.5c.5-.8 1.2-1.2 2-1" />
        </svg>
      )
    case 'salads':
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden>
          <path {...common} d="M12 20c-4 0-7-2.5-7-6 0-4 3-7 7-8 4 1 7 4 7 8 0 3.5-3 6-7 6z" />
          <path {...common} d="M12 6c1.5-2 3.5-3 5-3-1 2-1.5 3.5-1.5 5" />
          <path {...common} d="M9 11c1 1 2 1.5 3 1.5S14 12 15 11" />
        </svg>
      )
    case 'starters':
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden>
          <path {...common} d="M4 14c2-1 4-1 6 0s4 1 6 0 4-1 6 0" />
          <path {...common} d="M4 18c2-1 4-1 6 0s4 1 6 0 4-1 6 0" />
          <path {...common} d="M12 4v6M9 7h6" />
        </svg>
      )
    case 'hot':
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden>
          <path {...common} d="M12 20c-3 0-5-2-5-5 0-2.5 1.5-4 3-5.5C11 8 11.5 6.5 12 4c.5 2.5 1 4 2 5.5 1.5 1.5 3 3 3 5.5 0 3-2 5-5 5z" />
        </svg>
      )
    case 'sofra':
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden>
          <ellipse cx="12" cy="14" rx="8" ry="4" {...common} />
          <path {...common} d="M4 14v2c0 2.2 3.6 4 8 4s8-1.8 8-4v-2" />
          <circle cx="9" cy="13" r="1.2" fill={s} stroke="none" />
          <circle cx="14" cy="12.5" r="1.5" fill={s} stroke="none" />
        </svg>
      )
    case 'pizza':
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden>
          <path {...common} d="M12 3c5 2 8 6 9 10-3 1-6 1.5-9 1.5S6 14 3 13C4 9 7 5 12 3z" />
          <circle cx="10" cy="10" r="1" fill={s} stroke="none" />
          <circle cx="14" cy="9" r="1" fill={s} stroke="none" />
          <circle cx="12" cy="12.5" r="1" fill={s} stroke="none" />
        </svg>
      )
    case 'pasta':
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden>
          <path {...common} d="M6 8c2 2 4 2 6 0s4-2 6 0" />
          <path {...common} d="M6 12c2 2 4 2 6 0s4-2 6 0" />
          <path {...common} d="M6 16c2 2 4 2 6 0s4-2 6 0" />
          <path {...common} d="M4 20h16" />
        </svg>
      )
    case 'risotto':
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden>
          <path {...common} d="M5 14c0-3 3-5 7-5s7 2 7 5v2H5v-2z" />
          <path {...common} d="M8 9c0-2 1.5-4 4-4s4 2 4 4" />
          <path {...common} d="M4 18h16" />
        </svg>
      )
    case 'grill':
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden>
          <path {...common} d="M5 8h14v10H5z" />
          <path {...common} d="M8 8V5M12 8V4M16 8V5" />
          <path {...common} d="M7 12h10M7 15h10" />
        </svg>
      )
    case 'oven':
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden>
          <rect x="4" y="5" width="16" height="14" rx="1.5" {...common} />
          <path {...common} d="M4 10h16" />
          <circle cx="8" cy="7.5" r="0.8" fill={s} stroke="none" />
          <circle cx="11" cy="7.5" r="0.8" fill={s} stroke="none" />
        </svg>
      )
    case 'fry':
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden>
          <path {...common} d="M6 10h12v7a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-7z" />
          <path {...common} d="M9 10V8a3 3 0 0 1 6 0v2" />
          <path {...common} d="M9 14h.01M12 14h.01M15 14h.01" />
        </svg>
      )
    case 'seafood':
    case 'seafood-hot':
    case 'fish':
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden>
          <path {...common} d="M4 12c4-5 8-6 12-4 1.5 3 1.5 7 0 10-4 2-8 1-12-4z" />
          <circle cx="8" cy="11" r="1" fill={s} stroke="none" />
          <path {...common} d="M16 12h4" />
        </svg>
      )
    case 'desserts':
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden>
          <path {...common} d="M6 14h12l-1 6H7l-1-6z" />
          <path {...common} d="M5 14c0-3 3-5 7-5s7 2 7 5" />
          <path {...common} d="M12 5v4M10 6h4" />
        </svg>
      )
    default:
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden>
          <circle cx="12" cy="12" r="7" {...common} />
        </svg>
      )
  }
}

/** Lakeside mark — pointed top, sharp sides, rounded base */
export function DiamondLogo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 56 40"
      className={className}
      aria-hidden
      fill="none"
    >
      <path
        d="M28 4.4 L44.5 21.5 A17.5 14 0 0 1 11.5 21.5 Z"
        stroke="currentColor"
        strokeWidth="3.5"
        strokeLinejoin="miter"
        strokeMiterlimit="10"
      />
    </svg>
  )
}

export function ChefHat({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <path
        d="M6 14h12v5a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-5z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M6 14c-2 0-3.5-1.5-3.5-3.5S4 7 6 7c.5-2 2-3.5 4-3.5S13.5 5 14 7c2 0 3.5 1.5 3.5 3.5S15.5 14 13.5 14"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  )
}

export function Stars({ className }: { className?: string }) {
  return (
    <div className={className} aria-label="5 star rating">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 12 12" width="12" height="12">
          <path
            d="M6 1l1.5 3.2 3.5.5-2.5 2.5.6 3.5L6 9.2 2.9 10.7l.6-3.5L1 4.7l3.5-.5L6 1z"
            fill="currentColor"
          />
        </svg>
      ))}
    </div>
  )
}
