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

/** Pool Bar / Menu Pishina */
export const poolCategories: Category[] = [
  {
    id: 'pool-pijet',
    label: L('Pijet', 'Drinks'),
    icon: 'drinks',
    items: [
      item('pp1', L('Ujë i thjeshtë', 'Still water'), 1.5),
      item('pp2', L('Ujë mineral', 'Sparkling water'), 1.5),
      item('pp3', L('Kafe', 'Coffee'), 2),
      item('pp4', L('Pije të gazuara', 'Soft drinks'), 2),
      item('pp5', L('Lëngje', 'Juices'), 2),
      item('pp6', L('Birra Peja', 'Peja Beer'), 2.5),
      item('pp7', L('Krigell', 'Draft beer'), 2.5),
      item('pp8', L('Heineken', 'Heineken'), 3.5),
      item('pp9', L('Tuborg', 'Tuborg'), 3.5),
      item('pp10', L('Redbull', 'Red Bull'), 4),
      item('pp11', L('Corona', 'Corona'), 5),
    ],
  },
  {
    id: 'pool-fastfood',
    label: L('Fast Food', 'Fast Food'),
    icon: 'fastfood',
    items: [
      item('pf1', L('Pomfrit', 'French fries'), 3),
      item('pf2', L('Pomfrit me djath', 'Cheese fries'), 3.5),
      item('pf3', L('Hamburger Classic', 'Classic hamburger'), 4.5),
      item('pf4', L('Sandwich pule', 'Chicken sandwich'), 4.5),
      item('pf5', L('Sandwich me proshutë', 'Ham sandwich'), 4.5),
      item('pf6', L('Chicken Burger', 'Chicken burger'), 5),
      item('pf7', L('Wrap pule', 'Chicken wrap'), 5),
      item('pf8', L('Fruta mix', 'Mixed fruit'), 6),
      item('pf9', L('Hamburger Lakeside', 'Lakeside hamburger'), 7),
    ],
  },
  {
    id: 'pool-pizza',
    label: L('Pizza', 'Pizza'),
    icon: 'pizza',
    items: [
      item('pz1', L('Pizza margarita', 'Margherita pizza'), 6),
      item('pz2', L('Pizza proshutë', 'Ham pizza'), 8),
      item('pz3', L('Pizza tuna', 'Tuna pizza'), 8),
      item('pz4', L('Pizza e shtëpisë', 'House pizza'), 9),
    ],
  },
  {
    id: 'pool-akullore',
    label: L('Akullore', 'Ice Cream'),
    icon: 'desserts',
    items: [
      item('pa1', L('Akullore Cornet', 'Cornet ice cream'), 2),
      item('pa2', L('Akullore Magnum', 'Magnum ice cream'), 3),
    ],
  },
  {
    id: 'pool-cocktails',
    label: L('Cocktails', 'Cocktails'),
    icon: 'cocktails',
    items: [
      item('pc1', L('Classic Mojito', 'Classic Mojito'), 6),
      item('pc2', L('Pina Colada', 'Piña Colada'), 6),
      item('pc3', L('Sex on the Beach', 'Sex on the Beach'), 6),
      item('pc4', L('Aperol Spritz', 'Aperol Spritz'), 6),
      item('pc5', L('Campari Spritz', 'Campari Spritz'), 6),
      item('pc6', L('Vodka Sour', 'Vodka Sour'), 6),
      item('pc7', L('Blue Lagoon', 'Blue Lagoon'), 6),
      item('pc8', L('Tequila Sunrise', 'Tequila Sunrise'), 6),
      item('pc9', L('Lakeside Cocktail', 'Lakeside Cocktail'), 7),
    ],
  },
  {
    id: 'pool-mocktails',
    label: L('Cocktails pa alkool', 'Non Alcoholic Cocktails'),
    navLabel: L('Pa alkool', 'Mocktails'),
    icon: 'mocktails',
    items: [
      item('pm1', L('Sour Cocktail', 'Sour Cocktail'), 5),
      item('pm2', L('Blue Lemonade', 'Blue Lemonade'), 5),
      item('pm3', L('Red Lemonade', 'Red Lemonade'), 5),
      item('pm4', L('Virgin Mojito', 'Virgin Mojito'), 5),
      item('pm5', L('Lakeside Non Alcohol', 'Lakeside Non Alcohol'), 6),
    ],
  },
  {
    id: 'pool-lemonades',
    label: L('Limonada', 'Lemonades'),
    icon: 'lemonades',
    items: [
      item('pl1', L('Mango Lemonade', 'Mango Lemonade'), 3),
      item('pl2', L('Passion Lemonade', 'Passion Lemonade'), 3),
      item('pl3', L('Blue Berry Lemonade', 'Blueberry Lemonade'), 3),
      item('pl4', L('Strawberry Lemonade', 'Strawberry Lemonade'), 3),
      item('pl5', L('Banana Lemonade', 'Banana Lemonade'), 3),
    ],
  },
]
