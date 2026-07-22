import { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { DiamondLogo, Stars } from './Icons'
import { assetUrl, bestsellers, hotelInfo } from '../data/menu'
import { useLocale } from '../i18n/LocaleContext'
import { LangSwitch } from './LangSwitch'
import './Hero.css'

const SLIDE_MS = 1500

export type MenuKind = 'restaurant' | 'room'

interface HeroProps {
  kind: MenuKind
}

export function Hero({ kind }: HeroProps) {
  const { t, ui } = useLocale()
  const [active, setActive] = useState(0)
  const isRoom = kind === 'room'

  const slides = useMemo(
    () => [
      {
        src: assetUrl('/images/hero.jpg'),
        alt: hotelInfo.name,
        position: 'center 55%',
      },
      ...(isRoom
        ? []
        : bestsellers.map((item) => ({
            src: assetUrl(item.image),
            alt: t(item.name),
            position: 'center',
          }))),
    ],
    [t, isRoom],
  )

  useEffect(() => {
    if (slides.length <= 1) return
    const id = window.setInterval(() => {
      setActive((i) => (i + 1) % slides.length)
    }, SLIDE_MS)
    return () => window.clearInterval(id)
  }, [slides.length])

  return (
    <header className="hero">
      <div className="hero__media" aria-hidden>
        {slides.map((slide, i) => (
          <img
            key={slide.src}
            src={slide.src}
            alt=""
            className={`hero__img ${i === active ? 'is-active' : ''}`}
            style={{ objectPosition: slide.position }}
            loading={i === 0 ? 'eager' : 'lazy'}
          />
        ))}
        <div className="hero__overlay" />
      </div>

      <div className="hero__lang">
        <LangSwitch />
      </div>

      <nav className="hero__menus" aria-label={t(ui.menusNav)}>
        <Link
          to="/"
          className={`hero__menu-link ${!isRoom ? 'is-active' : ''}`}
        >
          {t(ui.restaurantMenu)}
        </Link>
        <Link
          to="/room"
          className={`hero__menu-link ${isRoom ? 'is-active' : ''}`}
        >
          {t(ui.roomService)}
        </Link>
      </nav>

      <div className="hero__content">
        <div className="hero__brand">
          <DiamondLogo className="hero__logo" />
          <h1 className="hero__name">{hotelInfo.name}</h1>
          <p className="hero__subtitle">{hotelInfo.subtitle}</p>
          <Stars className="hero__stars" />
        </div>

        <div className="hero__title-block">
          <p className="hero__restaurant">
            {isRoom ? t(ui.roomService) : t(ui.restaurant)}
          </p>
          <h2 className="hero__menu">{t(ui.menu)}</h2>
          <p className="hero__tagline">
            {isRoom ? t(ui.roomTagline) : hotelInfo.tagline}
          </p>
          <span className="hero__flourish" aria-hidden />
        </div>
      </div>

      {slides.length > 1 && (
        <div className="hero__dots" role="tablist" aria-label={t(ui.heroSlides)}>
          {slides.map((slide, i) => (
            <button
              key={slide.src}
              type="button"
              role="tab"
              aria-selected={i === active}
              aria-label={slide.alt}
              className={`hero__dot ${i === active ? 'is-active' : ''}`}
              onClick={() => setActive(i)}
            />
          ))}
        </div>
      )}
    </header>
  )
}
