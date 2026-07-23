import { useLocation } from 'react-router-dom'
import { ChefHat } from './Icons'
import { hotelInfo } from '../data/menu'
import { useLocale } from '../i18n/LocaleContext'
import './Footer.css'

function productionMenuUrl(pathname: string): string {
  const site = hotelInfo.menuSiteUrl.replace(/\/$/, '')
  const route = pathname.startsWith('/') ? pathname : `/${pathname}`
  return route === '/' ? `${site}/` : `${site}${route}`
}

export function Footer() {
  const { t, ui } = useLocale()
  const { pathname } = useLocation()
  // Always encode the production URL so QR works from local preview and prints correctly
  const menuUrl = productionMenuUrl(pathname)
  const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=${encodeURIComponent(menuUrl)}`

  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__panel footer__panel--fresh">
          <ChefHat className="footer__chef" />
          <h3 className="footer__panel-title">{t(ui.freshTitle)}</h3>
          <p className="footer__panel-text">{t(ui.freshText)}</p>
          <span className="footer__flourish" aria-hidden />
        </div>

        <div className="footer__qr">
          <div className="footer__qr-card">
            <div className="footer__qr-label">{t(ui.scanMenu)}</div>
            <img src={qrUrl} alt="QR" className="footer__qr-img" />
            <div className="footer__qr-footer">{t(ui.scanBrowse)}</div>
          </div>
        </div>

        <div className="footer__panel footer__panel--contact">
          <ul className="footer__contacts">
            <li>
              <span className="footer__icon" aria-hidden>
                <svg viewBox="0 0 24 24" width="18" height="18">
                  <path
                    d="M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11z"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                  />
                  <circle cx="12" cy="10" r="2.2" fill="none" stroke="currentColor" strokeWidth="1.6" />
                </svg>
              </span>
              {hotelInfo.location}
            </li>
            <li>
              <span className="footer__icon" aria-hidden>
                <svg viewBox="0 0 24 24" width="18" height="18">
                  <path
                    d="M6.5 4.5h3l1.5 4-2 1.5a12 12 0 0 0 5 5l1.5-2 4 1.5v3a2 2 0 0 1-2 2A14 14 0 0 1 4.5 6.5a2 2 0 0 1 2-2z"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <a href={`tel:${hotelInfo.phone.replace(/\s/g, '')}`}>{hotelInfo.phone}</a>
            </li>
            <li>
              <span className="footer__icon" aria-hidden>
                <svg viewBox="0 0 24 24" width="18" height="18">
                  <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="1.6" />
                  <path
                    d="M3 12h18M12 3c3 3.5 3 14.5 0 18M12 3c-3 3.5-3 14.5 0 18"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                  />
                </svg>
              </span>
              <a href={hotelInfo.websiteUrl} target="_blank" rel="noreferrer">
                {hotelInfo.website}
              </a>
            </li>
          </ul>
          <div className="footer__social">
            <a
              href={hotelInfo.mapsUrl}
              className="footer__social-btn"
              aria-label={t(ui.location)}
              target="_blank"
              rel="noreferrer"
            >
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path
                  d="M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11z"
                  strokeLinejoin="round"
                />
                <circle cx="12" cy="10" r="2.2" />
              </svg>
            </a>
            <a
              href={hotelInfo.facebook}
              className="footer__social-btn"
              aria-label="Facebook"
              target="_blank"
              rel="noreferrer"
            >
              <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                <path d="M14 9h3V6h-3c-1.7 0-3 1.3-3 3v2H9v3h2v7h3v-7h2.5l.5-3H14V9z" />
              </svg>
            </a>
            <a
              href={hotelInfo.instagram}
              className="footer__social-btn"
              aria-label="Instagram"
              target="_blank"
              rel="noreferrer"
            >
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8">
                <rect x="4" y="4" width="16" height="16" rx="4" />
                <circle cx="12" cy="12" r="3.5" />
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
              </svg>
            </a>
            <a
              href={hotelInfo.tiktok}
              className="footer__social-btn"
              aria-label="TikTok"
              target="_blank"
              rel="noreferrer"
            >
              <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden>
                <path d="M16.5 3c.4 2.2 1.8 3.8 4 4.3v2.4c-1.4-.1-2.7-.5-3.8-1.3v6.6c0 3.4-2.7 6-6.1 6S4.5 18.4 4.5 15s2.7-6 6.1-6c.3 0 .6 0 .9.1v2.5c-.3-.1-.6-.1-.9-.1-1.9 0-3.5 1.6-3.5 3.5S8.7 18.5 10.6 18.5s3.5-1.6 3.5-3.5V3h2.4z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="footer__thanks">
        <span className="footer__thanks-ornament" aria-hidden />
        <p>{t(ui.thanks)}</p>
        <span className="footer__thanks-ornament" aria-hidden />
      </div>
    </footer>
  )
}
