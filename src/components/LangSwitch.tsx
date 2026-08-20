import { useEffect, useId, useRef, useState } from 'react'
import { useLocale } from '../i18n/LocaleContext'
import {
  LOCALES,
  LOCALE_FLAGS,
  LOCALE_LABELS,
  type Locale,
} from '../i18n/locale'
import './LangSwitch.css'

export function LangSwitch() {
  const { locale, setLocale, t, ui } = useLocale()
  const [open, setOpen] = useState(false)
  const rootRef = useRef<HTMLDivElement>(null)
  const listId = useId()

  useEffect(() => {
    if (!open) return
    const onPointer = (e: MouseEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false)
    }
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('mousedown', onPointer)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('mousedown', onPointer)
      document.removeEventListener('keydown', onKey)
    }
  }, [open])

  const pick = (code: Locale) => {
    setLocale(code)
    setOpen(false)
  }

  return (
    <div className={`lang-switch ${open ? 'is-open' : ''}`} ref={rootRef}>
      <button
        type="button"
        className="lang-switch__trigger"
        aria-label={t(ui.language)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={listId}
        onClick={() => setOpen((v) => !v)}
      >
        <span className="lang-switch__flag" aria-hidden>
          {LOCALE_FLAGS[locale]}
        </span>
        <span className="lang-switch__code">{LOCALE_LABELS[locale]}</span>
        <span className="lang-switch__caret" aria-hidden />
      </button>

      {open && (
        <ul
          id={listId}
          className="lang-switch__menu"
          role="listbox"
          aria-label={t(ui.language)}
        >
          {LOCALES.map((code) => (
            <li key={code} role="option" aria-selected={code === locale}>
              <button
                type="button"
                className={`lang-switch__option ${code === locale ? 'is-active' : ''}`}
                onClick={() => pick(code)}
              >
                <span className="lang-switch__flag" aria-hidden>
                  {LOCALE_FLAGS[code]}
                </span>
                <span className="lang-switch__code">{LOCALE_LABELS[code]}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
