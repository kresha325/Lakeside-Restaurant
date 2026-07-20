import { useLocale } from '../i18n/LocaleContext'
import './LangSwitch.css'

export function LangSwitch() {
  const { locale, setLocale } = useLocale()

  return (
    <div className="lang-switch" role="group" aria-label="Language">
      <button
        type="button"
        className={`lang-switch__btn ${locale === 'sq' ? 'is-active' : ''}`}
        onClick={() => setLocale('sq')}
        aria-pressed={locale === 'sq'}
      >
        SQ
      </button>
      <button
        type="button"
        className={`lang-switch__btn ${locale === 'en' ? 'is-active' : ''}`}
        onClick={() => setLocale('en')}
        aria-pressed={locale === 'en'}
      >
        EN
      </button>
    </div>
  )
}
