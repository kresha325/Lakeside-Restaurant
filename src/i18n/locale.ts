export type Locale =
  | 'sq'
  | 'en'
  | 'fr'
  | 'de'
  | 'hr'
  | 'ar'
  | 'ja'
  | 'zh'
  | 'es'
  | 'it'
  | 'tr'

export const LOCALES: readonly Locale[] = [
  'sq',
  'en',
  'fr',
  'de',
  'hr',
  'ar',
  'ja',
  'zh',
  'es',
  'it',
  'tr',
] as const

export const LOCALE_LABELS: Record<Locale, string> = {
  sq: 'SQ',
  en: 'EN',
  fr: 'FR',
  de: 'DE',
  hr: 'HR',
  ar: 'AR',
  ja: 'JA',
  zh: '中文',
  es: 'ES',
  it: 'IT',
  tr: 'TR',
}

export const LOCALE_FLAGS: Record<Locale, string> = {
  sq: '🇦🇱',
  en: '🇬🇧',
  fr: '🇫🇷',
  de: '🇩🇪',
  hr: '🇭🇷',
  ar: '🇸🇦',
  ja: '🇯🇵',
  zh: '🇨🇳',
  es: '🇪🇸',
  it: '🇮🇹',
  tr: '🇹🇷',
}

export const LOCALE_HTML: Record<Locale, string> = {
  sq: 'sq',
  en: 'en',
  fr: 'fr',
  de: 'de',
  hr: 'hr',
  ar: 'ar',
  ja: 'ja',
  zh: 'zh-Hans',
  es: 'es',
  it: 'it',
  tr: 'tr',
}

export const RTL_LOCALES: ReadonlySet<Locale> = new Set(['ar'])

export type LString = { sq: string; en: string } & Partial<
  Record<Exclude<Locale, 'sq' | 'en'>, string>
>

export function L(
  sq: string,
  en: string,
  more?: Partial<Record<Exclude<Locale, 'sq' | 'en'>, string>>,
): LString {
  return more ? { sq, en, ...more } : { sq, en }
}

export function isLocale(value: string): value is Locale {
  return (LOCALES as readonly string[]).includes(value)
}
