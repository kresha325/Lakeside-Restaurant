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
  roomService: L('Room Menu', 'Room Menu'),
  restaurantMenu: L('Menu Restoranti', 'Restaurant Menu'),
  menu: L('Menu', 'Menu'),
  roomTagline: L(
    'Menu e shërbimit në dhomë · 07:30 – 22:30',
    'Room service menu · 07:30 – 22:30',
  ),
  chefsChoice: L('Zgjedhja e shefit', "Chef's Choice"),
  freshTitle: L('Përbërës të freskët', 'Fresh Ingredients'),
  freshText: L(
    'Përdorim produktet më të mira sezonale dhe specialitetet lokale për çdo pjatë, me kujdes dhe autenticitet.',
    'We source the finest seasonal produce and local specialties to craft every dish with care and authenticity.',
  ),
  scanMenu: L('Skano për menu', 'Scan for menu'),
  scanBrowse: L('Skano • Shfleto • Shijo', 'Scan • Browse • Enjoy'),
  thanks: L('Faleminderit që na besuat!', 'Thank you for trusting us!'),
  addItem: L('Shto', 'Add'),
  categories: L('Kategoritë e menusë', 'Menu categories'),
  heroSlides: L('Fotot e heroit', 'Hero slides'),
  language: L('Gjuha', 'Language'),
  location: L('Lokacioni', 'Location'),
  langSq: L('SQ', 'SQ'),
  langEn: L('EN', 'EN'),
  emptyRoom: L(
    'Produktet e Room Menu do të shtohen së shpejti.',
    'Room Menu items will be added soon.',
  ),
  roomOnboardTitle: L('Mirë se vini', 'Welcome'),
  roomOnboardSubtitle: L(
    'Shëno numrin e dhomës për të vazhduar te Room Menu.',
    'Enter your room number to continue to the Room Menu.',
  ),
  roomNumberLabel: L('Numri i dhomës', 'Room number'),
  roomNumberPlaceholder: L('p.sh. 204', 'e.g. 204'),
  roomContinue: L('Vazhdo te menuja', 'Continue to menu'),
  roomInvalid: L('Shëno një numër dhome të vlefshëm.', 'Please enter a valid room number.'),
  roomBadge: L('Dhoma', 'Room'),
  roomChange: L('Ndrysho', 'Change'),
  cart: L('Shporta', 'Cart'),
  cartEmpty: L('Shporta është bosh.', 'Your cart is empty.'),
  cartTotal: L('Totali', 'Total'),
  cartCheckout: L('Porosit në WhatsApp', 'Order on WhatsApp'),
  presentToWaiter: L('Prezanto kamarierit', 'Show to waiter'),
  presentHint: L(
    'Trego këtë ekran kamarierit për të bërë porosinë.',
    'Show this screen to your waiter to place the order.',
  ),
  presentDone: L('Mbaro', 'Done'),
  presentBack: L('Kthehu', 'Back'),
  cartAdded: L('u shtua në shportë', 'added to cart'),
  paymentMethod: L('Mënyra e pagesës', 'Payment method'),
  paymentLabel: L('Pagesa', 'Payment'),
  paymentPos: L('POS', 'Card (POS)'),
  paymentCash: L('Kesh', 'Cash'),
  cashDenomination: L('Monedha e pagesës', 'Cash denomination'),
  cashOther: L('Tjetër', 'Other'),
  cashOtherPlaceholder: L('Shëno shumën (€)', 'Enter amount (€)'),
  cashHint: L(
    'Shëno monedhën për të kryer pagesën më lehtë.',
    'Select or enter the bill denomination for easier payment.',
  ),
  order: L('Porosi', 'Order'),
  orderFromRoom: L('Porosi nga dhoma', 'Order from room'),
  orderHeader: L('Porosia', 'Order'),
  qtyDecrease: L('Ul sasinë', 'Decrease quantity'),
  qtyIncrease: L('Rrit sasinë', 'Increase quantity'),
  remove: L('Hiq', 'Remove'),
  close: L('Mbyll', 'Close'),
  selectPayment: L('Zgjidh mënyrën e pagesës.', 'Select a payment method.'),
  selectCash: L('Zgjidh ose shëno monedhën e pagesës.', 'Select or enter a cash denomination.'),
  cashInvalid: L('Shëno një shumë të vlefshme.', 'Enter a valid amount.'),
} as const
