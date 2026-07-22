import { L, type LString } from '../i18n/strings'
import type { Category, MenuItem } from './menu'

function item(
  id: string,
  name: LString,
  price: number,
  extras?: Partial<Omit<MenuItem, 'id' | 'name' | 'price'>>,
): MenuItem {
  return { id, name, price, ...extras }
}

export const roomServiceHours = L(
  'Ora e shërbimit: 07:30 – 22:30 · Çdo ditë',
  'Service hours: 07:30 – 22:30 · Daily',
)

export const roomGuestInfo = {
  title: L('Informacion për mysafirët', 'Guest information'),
  lines: [
    L(
      'Të gjitha çmimet janë në Euro (€) dhe përfshijnë TVSH-në.',
      'All prices are quoted in Euro (€) and include VAT.',
    ),
    L(
      'Minibari kontrollohet dhe rimbushet çdo ditë nga stafi i hotelit. Çdo produkt i konsumuar do të regjistrohet automatikisht dhe do të shtohet në llogarinë e dhomës suaj.',
      'Your minibar is inspected and replenished daily by our hotel staff. Any item consumed will automatically be charged to your room account.',
    ),
    L(
      'Për porosi ose asistencë, kontaktoni Reception në 100 nga telefoni i dhomës ose Viber / WhatsApp: +383 48 808 408.',
      'To place an order or request assistance, contact Reception by dialing 100 from your room phone or via Viber / WhatsApp: +383 48 808 408.',
    ),
    L(
      'Ju lutemi njoftoni stafin për çdo alergji ushqimore ose kërkesë të veçantë dietike.',
      'Please inform our staff of any food allergies or special dietary requirements.',
    ),
  ],
}

/** Room service + minibar menu */
export const roomCategories: Category[] = [
  {
    id: 'room-mengjesi',
    label: L('Mëngjesi', 'Breakfast'),
    note: L('Shërbehet 07:30 – 11:00', 'Served 07:30 – 11:00'),
    icon: 'breakfast',
    items: [
      item('rm1', L('Mëngjesi Lakeside', 'Lakeside Breakfast'), 10, {
        description: L(
          'Dy vezë të gatuara sipas dëshirës, të shoqëruara me salsiçe, proshutë, domate, tranguj, djathë, lëng ose kafe.',
          'Two eggs cooked to your preference, served with sausages, ham, tomatoes, cucumbers, cheese, juice or coffee.',
        ),
      }),
      item('rm2', L('Pancakes', 'Pancakes'), 5),
      item('rm3', L('Pjatë me Fruta të Freskëta', 'Fresh Fruit Platter'), 7, {
        description: L(
          'Përzgjedhje frutash të stinës.',
          'Selection of seasonal fresh fruits.',
        ),
      }),
    ],
  },
  {
    id: 'room-dreka-darka',
    label: L('Dreka & Darka', 'Lunch & Dinner'),
    navLabel: L('Dreka & Darka', 'Lunch & Dinner'),
    note: L('Shërbehet 11:00 – 22:30', 'Served 11:00 – 22:30'),
    icon: 'grill',
    items: [
      item('rd1', L('Supë Shtëpie', 'Homemade Soup'), 5),
      item('rd2', L('Sallatë Mixe', 'Mixed Salad'), 5),
      item('rd3', L('Sallatë Caesar', 'Caesar Salad'), 9),
      item('rd4', L('Sallatë Greke', 'Greek Salad'), 5),
      item('rd5', L('Sallatë Rukolla', 'Rocket Salad'), 7),
      item('rd6', L('Parahaje e Ftohtë e Përzier', 'Mixed Cold Appetizer'), 15),
      item('rd7', L('Djathra Mix', 'Cheese Selection'), 8),
      item('rd8', L('Pasta Fruti di Mare', 'Pasta Frutti di Mare'), 10),
      item('rd9', L('Rizoto Fruti di Mare', 'Risotto Frutti di Mare'), 10),
      item('rd10', L('Pica Margarita', 'Pizza Margherita'), 7),
      item('rd11', L('Pica me Proshutë', 'Ham Pizza'), 10),
      item('rd12', L('Salmon', 'Salmon'), 18),
      item('rd13', L('Karkaleca', 'Shrimps'), 15),
      item('rd14', L('Steak Tuna', 'Tuna Steak'), 18),
      item('rd15', L('Biftek', 'Beef Steak'), 25),
      item('rd16', L('Gjoks Pule', 'Chicken Breast'), 10),
      item('rd17', L('Kombinim mishi', 'Mixed Meat'), 20),
      item('rd18', L('Burger për Fëmijë', 'Kids Burger'), 6),
    ],
  },
  {
    id: 'room-embelsira',
    label: L('Ëmbëlsira', 'Desserts'),
    icon: 'desserts',
    items: [
      item('re1', L('Cheesecake', 'Cheesecake'), 5),
      item('re2', L('Akullore', 'Ice Cream'), 5),
    ],
  },
  {
    id: 'room-kafe',
    label: L('Kafe & Pije të Ngrohta', 'Coffee & Hot Beverages'),
    navLabel: L('Kafe', 'Coffee'),
    icon: 'hot',
    items: [
      item('rk1', L('Espresso', 'Espresso'), 3),
      item('rk2', L('Macchiato', 'Macchiato'), 3),
      item('rk3', L('Dopio Espresso', 'Double Espresso'), 4),
      item('rk4', L('Dopio Macchiato', 'Double Macchiato'), 4),
      item('rk5', L('Americano', 'Americano'), 4),
      item('rk6', L('Cappuccino', 'Cappuccino'), 4),
      item('rk7', L('Përzgjedhje Çajrash', 'Selection of Teas'), 3),
      item('rk8', L('Ice Caffe', 'Iced Coffee'), 5),
    ],
  },
  {
    id: 'room-gazuara',
    label: L('Pije të Gazuara', 'Soft Drinks'),
    navLabel: L('Gazuara', 'Soft drinks'),
    icon: 'sides',
    items: [
      item('rg1', L('Coca Cola', 'Coca Cola'), 3),
      item('rg2', L('Coca Cola Zero', 'Coca Cola Zero'), 3),
      item('rg3', L('Fanta', 'Fanta'), 3),
      item('rg4', L('Sprite', 'Sprite'), 3),
      item('rg5', L('Schweppes', 'Schweppes'), 3),
      item('rg6', L('Lemon Soda', 'Lemon Soda'), 3),
      item('rg7', L('Red Bull', 'Red Bull'), 5),
    ],
  },
  {
    id: 'room-lengje',
    label: L('Lëngje Frutash', 'Fruit Juices'),
    navLabel: L('Lëngje', 'Juices'),
    icon: 'salads',
    items: [
      item('rl1', L('Portokall', 'Orange'), 3),
      item('rl2', L('Mollë', 'Apple'), 3),
      item('rl3', L('Vishnje', 'Sour Cherry'), 3),
      item('rl4', L('Pjeshkë', 'Peach'), 3),
      item('rl5', L('Dredhëz', 'Strawberry'), 3),
      item('rl6', L('Fresh Juice', 'Fresh Juice'), 5),
    ],
  },
  {
    id: 'room-uje',
    label: L('Ujë', 'Water'),
    icon: 'soup',
    items: [
      item('ru1', L('Ujë pa Gaz i Vogël', 'Still Water Small'), 2),
      item('ru2', L('Ujë pa Gaz i Madh', 'Still Water Large'), 4),
      item('ru3', L('Ujë me Gaz i Vogël', 'Sparkling Water Small'), 2),
      item('ru4', L('Ujë me Gaz i Madh', 'Sparkling Water Large'), 4),
    ],
  },
  {
    id: 'room-birra',
    label: L('Birra', 'Beer'),
    icon: 'starters',
    items: [
      item('rb1', L('Birra Peja', 'Peja Beer'), 3),
      item('rb2', L('Heineken', 'Heineken'), 5),
      item('rb3', L('Corona', 'Corona'), 6),
    ],
  },
  {
    id: 'room-vera',
    label: L('Verëra', 'Wines'),
    icon: 'pasta',
    items: [
      item('rv1', L('Verë e Bardhë (0.175 L)', 'White Wine (0.175 L)'), 6),
      item('rv2', L('Verë e Kuqe (0.175 L)', 'Red Wine (0.175 L)'), 6),
      item(
        'rv3',
        L('Stone Castle Verë e Bardhë (0.75 L)', 'Stone Castle White Wine (0.75 L)'),
        40,
      ),
      item(
        'rv4',
        L('Stone Castle Verë e Kuqe (0.75 L)', 'Stone Castle Red Wine (0.75 L)'),
        40,
      ),
    ],
  },
  {
    id: 'room-minibar',
    label: L('Minibar', 'Minibar'),
    icon: 'sofra',
    items: [
      item('mb1', L('Coca Cola (0.33 L)', 'Coca Cola (0.33 L)'), 3),
      item('mb2', L('Coca Cola Zero (0.33 L)', 'Coca Cola Zero (0.33 L)'), 3),
      item('mb3', L('Schweppes (0.33 L)', 'Schweppes (0.33 L)'), 3),
      item('mb4', L('Lëng Portokalli (0.33 L)', 'Orange Juice (0.33 L)'), 3),
      item('mb5', L('Verë e Kuqe (0.187 L)', 'Red Wine (0.187 L)'), 5),
      item('mb6', L('Verë e Bardhë (0.187 L)', 'White Wine (0.187 L)'), 5),
      item('mb7', L('Heineken Beer (0.20 L)', 'Heineken Beer (0.20 L)'), 5),
      item('mb8', L('Birrë Peja (0.33 L)', 'Peja Beer (0.33 L)'), 3),
      item('mb9', L('Red Bull (0.25 L)', 'Red Bull (0.25 L)'), 5),
      item('mb10', L("Jack Daniel's Whiskey (0.05 L)", "Jack Daniel's Whiskey (0.05 L)"), 5),
      item('mb11', L('Vodka (0.05 L)', 'Vodka (0.05 L)'), 4),
      item('mb12', L('Jägermeister (0.02 L)', 'Jägermeister (0.02 L)'), 4),
    ],
  },
]
