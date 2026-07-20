import type { Category, MenuItem } from '../data/menu'
import { ChefHat } from './Icons'
import { MenuCard } from './MenuCard'
import './MenuSection.css'

interface MenuSectionProps {
  category: Category
  onAdd?: (item: MenuItem) => void
}

export function MenuSection({ category, onAdd }: MenuSectionProps) {
  return (
    <section
      id={category.id}
      className="menu-section"
      aria-labelledby={`${category.id}-title`}
    >
      <div className="menu-section__header">
        <div className="menu-section__title-row">
          <h2 id={`${category.id}-title`} className="menu-section__title">
            {category.label}
          </h2>
          {category.chefsChoice && (
            <span className="menu-section__chef">
              <ChefHat className="menu-section__chef-icon" />
              Chef’s Choice
            </span>
          )}
        </div>
        <div className="menu-section__rule" aria-hidden>
          <span className="menu-section__diamond" />
        </div>
      </div>

      {category.featuredImage && (
        <div className="menu-section__featured">
          <img
            src={category.featuredImage}
            alt={category.label}
            loading="lazy"
          />
        </div>
      )}

      <div className="menu-section__list">
        {category.items.map((menuItem, i) => (
          <MenuCard key={menuItem.id} item={menuItem} index={i} onAdd={onAdd} />
        ))}
      </div>
    </section>
  )
}
