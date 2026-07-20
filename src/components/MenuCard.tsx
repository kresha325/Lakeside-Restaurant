import type { MenuItem } from '../data/menu'
import { useLocale } from '../i18n/LocaleContext'
import './MenuCard.css'

interface MenuCardProps {
  item: MenuItem
  index: number
  onAdd?: (item: MenuItem) => void
}

export function MenuCard({ item, index, onAdd }: MenuCardProps) {
  const { t, ui } = useLocale()
  const name = t(item.name)
  const displayPrice = item.priceLabel
    ? `€${t(item.priceLabel)}`
    : `€${item.price.toFixed(2)}`

  return (
    <article
      className="menu-row"
      style={{ animationDelay: `${Math.min(index, 12) * 35}ms` }}
    >
      <div className="menu-row__text">
        <h3 className="menu-row__title">{name}</h3>
        {item.description && (
          <p className="menu-row__desc">{t(item.description)}</p>
        )}
      </div>
      <div className="menu-row__dots" aria-hidden />
      <span className="menu-row__price">{displayPrice}</span>
      <button
        type="button"
        className="menu-row__add"
        aria-label={`${t(ui.addItem)} ${name}`}
        onClick={() => onAdd?.(item)}
      >
        <svg viewBox="0 0 16 16" width="12" height="12" aria-hidden>
          <path
            d="M8 3v10M3 8h10"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </button>
    </article>
  )
}
