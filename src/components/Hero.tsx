import { useEffect, useState } from 'react'
import { DiamondLogo, Stars } from './Icons'
import { bestsellers, hotelInfo } from '../data/menu'
import './Hero.css'

const SLIDE_MS = 1500

const slides = [
  { src: '/images/hero.jpg', alt: 'Lakeside Hotel', position: 'center 55%' },
  ...bestsellers.map((item) => ({
    src: item.image,
    alt: item.name,
    position: 'center',
  })),
]

export function Hero() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const id = window.setInterval(() => {
      setActive((i) => (i + 1) % slides.length)
    }, SLIDE_MS)
    return () => window.clearInterval(id)
  }, [])

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

      <div className="hero__content">
        <div className="hero__brand">
          <DiamondLogo className="hero__logo" />
          <h1 className="hero__name">{hotelInfo.name}</h1>
          <p className="hero__subtitle">{hotelInfo.subtitle}</p>
          <Stars className="hero__stars" />
        </div>

        <div className="hero__title-block">
          <p className="hero__restaurant">Restaurant</p>
          <h2 className="hero__menu">Menu</h2>
          <p className="hero__tagline">{hotelInfo.tagline}</p>
          <span className="hero__flourish" aria-hidden />
        </div>
      </div>

      <div className="hero__dots" role="tablist" aria-label="Hero slides">
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
    </header>
  )
}
