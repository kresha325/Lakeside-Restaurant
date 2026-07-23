import { useEffect, useMemo, useState } from 'react'
import { useCart } from '../cart/CartContext'
import { CartDrawer } from '../components/CartDrawer'
import { CartFab } from '../components/CartFab'
import { Footer } from '../components/Footer'
import { DiamondLogo, Stars } from '../components/Icons'
import { LangSwitch } from '../components/LangSwitch'
import { assetUrl, hotelInfo } from '../data/menu'
import { poolCategories } from '../data/poolMenu'
import type { MenuItem } from '../data/menu'
import { useLocale } from '../i18n/LocaleContext'
import './PoolMenuPage.css'

export function PoolMenuPage() {
  const { t, ui } = useLocale()
  const { addItem, clear, setOpen } = useCart()
  const [filter, setFilter] = useState('all')
  const [toast, setToast] = useState<string | null>(null)

  useEffect(() => {
    clear()
    setOpen(false)
  }, [clear, setOpen])

  const visible = useMemo(() => {
    if (filter === 'all') return poolCategories
    return poolCategories.filter((c) => c.id === filter)
  }, [filter])

  const handleAdd = (item: MenuItem) => {
    addItem(item)
    setToast(`${t(item.name)} — ${t(ui.cartAdded)}`)
    window.setTimeout(() => setToast(null), 1600)
  }

  return (
    <div className="pool-app">
      <header className="pool-hero">
        <h1 className="pool-sr-only">{t(ui.poolMenuTitle)}</h1>
        <div className="pool-hero__media" aria-hidden>
          <img
            className="pool-hero__img"
            src={assetUrl('/images/hero-pool.jpg')}
            alt=""
            loading="eager"
          />
          <div className="pool-hero__overlay" />
        </div>
        <svg className="pool-hero__wave" viewBox="0 0 1440 120" preserveAspectRatio="none" aria-hidden>
          <path
            className="pool-hero__wave-path pool-hero__wave-path--a"
            d="M0,64 C240,120 480,0 720,48 C960,96 1200,80 1440,40 L1440,120 L0,120 Z"
          />
          <path
            className="pool-hero__wave-path pool-hero__wave-path--b"
            d="M0,80 C320,20 560,100 800,60 C1040,20 1240,70 1440,50 L1440,120 L0,120 Z"
          />
        </svg>

        <div className="pool-hero__top">
          <span className="pool-hero__badge">{t(ui.poolMenu)}</span>
          <LangSwitch />
        </div>

        <div className="pool-hero__content">
          <div className="pool-hero__brand">
            <DiamondLogo className="pool-hero__logo" />
            <p className="pool-hero__hotel">{hotelInfo.name}</p>
            <p className="pool-hero__subtitle">{hotelInfo.subtitle}</p>
            <Stars className="pool-hero__stars" />
          </div>
          <p className="pool-hero__tagline">{t(ui.poolTagline)}</p>
        </div>
      </header>

      <nav className="pool-nav" aria-label={t(ui.categories)}>
        <div className="pool-nav__track">
          <button
            type="button"
            className={`pool-nav__chip ${filter === 'all' ? 'is-active' : ''}`}
            onClick={() => setFilter('all')}
          >
            {t(ui.all)}
          </button>
          {poolCategories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              className={`pool-nav__chip ${filter === cat.id ? 'is-active' : ''}`}
              onClick={() => setFilter(cat.id)}
            >
              {t(cat.navLabel ?? cat.label)}
            </button>
          ))}
        </div>
      </nav>

      <main className="pool-main" key={filter}>
        {visible.map((category) => {
          const isCocktail = category.id === 'pool-cocktails'
          return (
            <section key={category.id} className="pool-section" id={category.id}>
              <header className="pool-section__head">
                <h2
                  className={`pool-section__title ${
                    isCocktail ? 'pool-section__title--script' : ''
                  }`}
                >
                  {t(category.label)}
                </h2>
                <span className="pool-section__line" aria-hidden />
              </header>
              <ul className="pool-list">
                {category.items.map((item, i) => (
                  <li
                    key={item.id}
                    className="pool-item"
                    style={{ animationDelay: `${Math.min(i, 10) * 40}ms` }}
                  >
                    <div className="pool-item__text">
                      <h3>{t(item.name)}</h3>
                    </div>
                    <span className="pool-item__price">€{item.price.toFixed(2)}</span>
                    <button
                      type="button"
                      className="pool-item__add"
                      aria-label={`${t(ui.addItem)} ${t(item.name)}`}
                      onClick={() => handleAdd(item)}
                    >
                      +
                    </button>
                  </li>
                ))}
              </ul>
            </section>
          )
        })}
      </main>

      <Footer />

      <CartFab />
      <CartDrawer kind="pool" roomNumber={null} />

      <div
        className={`pool-toast ${toast ? 'is-visible' : ''}`}
        role="status"
        aria-live="polite"
      >
        {toast}
      </div>
    </div>
  )
}
