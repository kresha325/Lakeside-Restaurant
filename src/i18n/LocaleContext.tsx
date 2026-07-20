import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import { tx, ui, type Locale, type LString } from './strings'

const STORAGE_KEY = 'lakeside-locale'

interface LocaleContextValue {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: (value: LString | string) => string
  ui: typeof ui
}

const LocaleContext = createContext<LocaleContextValue | null>(null)

function readStoredLocale(): Locale {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored === 'en' || stored === 'sq') return stored
  } catch {
    /* ignore */
  }
  return 'sq'
}

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(() =>
    typeof window !== 'undefined' ? readStoredLocale() : 'sq',
  )

  useEffect(() => {
    document.documentElement.lang = locale === 'sq' ? 'sq' : 'en'
    try {
      localStorage.setItem(STORAGE_KEY, locale)
    } catch {
      /* ignore */
    }
  }, [locale])

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next)
  }, [])

  const t = useCallback((value: LString | string) => tx(value, locale), [locale])

  const value = useMemo(
    () => ({ locale, setLocale, t, ui }),
    [locale, setLocale, t],
  )

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
}

export function useLocale() {
  const ctx = useContext(LocaleContext)
  if (!ctx) throw new Error('useLocale must be used within LocaleProvider')
  return ctx
}
