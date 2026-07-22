import { useEffect, useRef, useState } from 'react'
import { useLocale } from '../i18n/LocaleContext'
import type { Category } from '../data/menu'
import './CategoryNav.css'

export type FilterId = string

interface CategoryNavProps {
  categories: Category[]
  activeId: FilterId
  onSelect: (id: FilterId) => void
}

export function CategoryNav({ categories, activeId, onSelect }: CategoryNavProps) {
  const { t, ui } = useLocale()
  const [stuck, setStuck] = useState(false)
  const sentinelRef = useRef<HTMLDivElement>(null)
  const listRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = sentinelRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => setStuck(!entry.isIntersecting),
      { threshold: 0 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const btn = listRef.current?.querySelector<HTMLElement>(
      `[data-cat="${activeId}"]`,
    )
    btn?.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' })
  }, [activeId])

  return (
    <>
      <div ref={sentinelRef} className="nav-sentinel" aria-hidden />
      <nav className={`category-nav ${stuck ? 'is-stuck' : ''}`} aria-label={t(ui.categories)}>
        <div className="category-nav__track" ref={listRef}>
          <button
            type="button"
            data-cat="all"
            className={`category-nav__item ${activeId === 'all' ? 'is-active' : ''}`}
            onClick={() => onSelect('all')}
            aria-current={activeId === 'all' ? 'true' : undefined}
          >
            {t(ui.all)}
          </button>
          {categories.map((cat) => {
            const active = cat.id === activeId
            return (
              <button
                key={cat.id}
                type="button"
                data-cat={cat.id}
                className={`category-nav__item ${active ? 'is-active' : ''}`}
                onClick={() => onSelect(cat.id)}
                aria-current={active ? 'true' : undefined}
              >
                {t(cat.navLabel ?? cat.label)}
              </button>
            )
          })}
        </div>
      </nav>
    </>
  )
}
