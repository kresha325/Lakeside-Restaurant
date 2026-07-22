import { useLocale } from '../i18n/LocaleContext'
import './LangSwitch.css'

export function LangSwitch() {
  const { locale, setLocale, t, ui } = useLocale()

  return (
    <div className="lang-switch" role="group" aria-label={t(ui.language)}>
      <button
        type="button"
        className={`lang-switch__btn ${locale === 'sq' ? 'is-active' : ''}`}
        onClick={() => setLocale('sq')}
        aria-pressed={locale === 'sq'}
      >
        {t(ui.langSq)}
      </button>
      <button
        type="button"
        className={`lang-switch__btn ${locale === 'en' ? 'is-active' : ''}`}
        onClick={() => setLocale('en')}
        aria-pressed={locale === 'en'}
      >
        {t(ui.langEn)}
      </button>
    </div>
  )
}
