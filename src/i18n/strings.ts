export type Locale = 'sq' | 'en'

export type LString = { sq: string; en: string }

export function L(sq: string, en: string): LString {
  return { sq, en }
}

export function tx(value: LString | string, locale: Locale): string {
  if (typeof value === 'string') return value
  return value[locale]
}

export const ui = {
  all: L('Të gjitha', 'All'),
  restaurant: L('Restorant', 'Restaurant'),
  menu: L('Menu', 'Menu'),
  chefsChoice: L('Zgjedhja e shefit', "Chef's Choice"),
  freshTitle: L('Përbërës të freskët', 'Fresh Ingredients'),
  freshText: L(
    'Përdorim produktet më të mira sezonale dhe specialitetet lokale për çdo pjatë, me kujdes dhe autenticitet.',
    'We source the finest seasonal produce and local specialties to craft every dish with care and authenticity.',
  ),
  scanMenu: L('Skano për menu', 'Scan for menu'),
  scanBrowse: L('Skano • Shfleto • Shijo', 'Scan • Browse • Enjoy'),
  thanks: L('Faleminderit që darkuat me ne!', 'Thank you for dining with us!'),
  addItem: L('Shto', 'Add'),
  noted: L('u shënua', 'noted'),
  categories: L('Kategoritë e menusë', 'Menu categories'),
  heroSlides: L('Fotot e heroit', 'Hero slides'),
  langSq: L('SQ', 'SQ'),
  langEn: L('EN', 'EN'),
} as const
