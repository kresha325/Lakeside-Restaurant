import { L, type LString } from '../i18n/strings'

export type CategoryId =
  | 'mengjesi'
  | 'supat'
  | 'sallata'
  | 'parahaja-ftohte'
  | 'parahaja-ngrohte'
  | 'sofra'
  | 'picat'
  | 'pastat'
  | 'rizoto'
  | 'skara'
  | 'furra'
  | 'friteza'
  | 'deti-ftohta'
  | 'deti-ngrohte'
  | 'deti'
  | 'embelsirat'

export interface MenuItem {
  id: string
  name: LString
  description?: LString
  price: number
  priceLabel?: LString
  image?: string
  chefsChoice?: boolean
}

export interface Category {
  id: string
  label: LString
  navLabel?: LString
  note?: LString
  icon: string
  chefsChoice?: boolean
  featuredImage?: string
  items: MenuItem[]
}

function item(
  id: string,
  name: LString,
  price: number,
  extras?: Partial<Omit<MenuItem, 'id' | 'name' | 'price'>>,
): MenuItem {
  return { id, name, price, ...extras }
}

export const categories: Category[] = [
  {
    id: 'mengjesi',
    label: L('Mëngjesi', 'Breakfast'),
    icon: 'breakfast',
    items: [
      item('mg1', L('Omletë klasike', 'Classic omelette'), 3),
      item('mg2', L('Omletë me përshutë', 'Ham omelette'), 3.5),
      item('mg3', L('Omletë me perime të freskëta', 'Fresh vegetable omelette'), 3.5),
      item('mg4', L('Pancakes', 'Pancakes'), 3.5),
      item('mg5', L('Llokuma', 'Llokuma (fried dough)'), 4),
    ],
  },
  {
    id: 'supat',
    label: L('Supat', 'Soups'),
    icon: 'soup',
    items: [
      item('su1', L('Supë Ditore', 'Soup of the day'), 2),
      item('su2', L('Supë Pulë', 'Chicken soup'), 2),
      item('su3', L('Supë Peshku', 'Fish soup'), 2.5),
    ],
  },
  {
    id: 'sallata',
    label: L('Sallata', 'Salads'),
    icon: 'salads',
    items: [
      item('sa1', L('Sallatë e Përzier', 'Mixed salad'), 3),
      item('sa2', L('Sallatë Shope', 'Shopska salad'), 3),
      item('sa3', L('Sallatë Greke', 'Greek salad'), 3.5),
      item('sa4', L('Sallatë Caprese', 'Caprese salad'), 5),
      item('sa5', L('Sallatë Shtëpie', 'House salad'), 5),
      item('sa6', L('Sallatë Ruse', 'Russian salad'), 5),
      item('sa7', L('Sallatë Rukola', 'Arugula salad'), 5.5),
      item('sa8', L('Sallatë Cezar me Pulë', 'Chicken Caesar salad'), 7),
      item('sa9', L('Sallatë Buffalo', 'Buffalo salad'), 7),
    ],
  },
  {
    id: 'parahaja-ftohte',
    label: L('Parahaja e Ftohtë', 'Cold appetizers'),
    navLabel: L('Parahaja Ftohtë', 'Cold starters'),
    icon: 'starters',
    items: [
      item('pf1', L('Speca me hudhër', 'Peppers with garlic'), 2.5),
      item('pf2', L('Tarator', 'Tzatziki'), 2.5),
      item('pf3', L('Ullinj', 'Olives'), 2),
      item('pf4', L('Brusketa klasike', 'Classic bruschetta'), 3.5),
      item('pf5', L('Brusketa tuna', 'Tuna bruschetta'), 4.5),
      item('pf6', L('Brusketa me salmon të tymosur', 'Smoked salmon bruschetta'), 5),
      item('pf7', L('Turshi e përzier', 'Mixed pickles'), 5),
      item('pf8', L('Djathë i bardhë', 'White cheese'), 5),
      item('pf9', L('Djath Sharri', 'Sharri cheese'), 5.5),
      item('pf10', L('Djathra mix', 'Mixed cheeses'), 6.5),
      item('pf11', L('Djathë dhie', 'Goat cheese'), 7),
      item('pf12', L('Parahaje e përzier (2 persona)', 'Mixed appetizer (2 people)'), 12),
    ],
  },
  {
    id: 'parahaja-ngrohte',
    label: L('Parahaja e Ngrohtë', 'Hot appetizers'),
    navLabel: L('Parahaja Ngrohtë', 'Hot starters'),
    icon: 'hot',
    items: [
      item('pn1', L('Kaçkavall i fërguar (1 copë)', 'Fried kashkaval (1 pc)'), 2),
      item('pn2', L('Patate në furrë', 'Baked potatoes'), 2.5),
      item('pn3', L('Pomfrit', 'French fries'), 2.5),
      item('pn4', L('Pizza Brod', 'Bread pizza'), 3),
      item('pn5', L('Pomfrit me djath', 'Cheese fries'), 3),
      item('pn6', L('Pogaqe', 'Pogacha'), 3),
      item('pn7', L('Fli', 'Flija'), 3.5),
      item('pn8', L('Këpurdha të fërguara', 'Fried mushrooms'), 4),
      item('pn9', L('Speca me gjizë', 'Peppers with curd cheese'), 4),
      item('pn10', L('Perime të fërguara', 'Fried vegetables'), 4),
      item('pn11', L('Djathë në furrë', 'Baked cheese'), 4.5),
      item('pn12', L('Këpurdha në furrë', 'Baked mushrooms'), 5),
    ],
  },
  {
    id: 'sofra',
    label: L('Sofra Tradicionale', 'Traditional Sofra'),
    navLabel: L('Sofra', 'Sofra'),
    icon: 'sofra',
    featuredImage: '/images/sofra.jpg',
    items: [
      item('so1', L('2 persona', '2 people'), 12),
      item('so2', L('4 persona', '4 people'), 24),
    ],
  },
  {
    id: 'picat',
    label: L('Picat', 'Pizzas'),
    icon: 'pizza',
    items: [
      item('pi1', L('Picë Margarita', 'Margherita pizza'), 5),
      item('pi2', L('Picë Fungi', 'Fungi pizza'), 5),
      item('pi3', L('Picë me Përshutë', 'Ham pizza'), 6),
      item('pi4', L('Picë Vegjetariane', 'Vegetarian pizza'), 6),
      item('pi5', L('Picë Tuna', 'Tuna pizza'), 6.5),
      item('pi6', L('Picë Shtëpie', 'House pizza'), 7),
      item('pi7', L('Picë Fruti di Mare', 'Frutti di Mare pizza'), 8),
    ],
  },
  {
    id: 'pastat',
    label: L('Pastat', 'Pasta'),
    icon: 'pasta',
    items: [
      item('pa1', L('Pasta Napoli', 'Pasta Napoli'), 5.5),
      item('pa2', L('Pasta Bololoneze', 'Pasta Bolognese'), 6),
      item('pa3', L('Pasta Carbonara', 'Pasta Carbonara'), 6),
      item('pa4', L('Pasta me karkaleca', 'Pasta with prawns'), 7),
      item('pa5', L('Pasta me katër djathrat', 'Four-cheese pasta'), 7),
      item('pa6', L('Pasta me Kallamari', 'Pasta with calamari'), 7),
      item('pa7', L('Pasta me Skampi', 'Pasta with scampi'), 8),
      item('pa8', L('Pasta Frutti di Mare', 'Pasta Frutti di Mare'), 8),
      item('pa9', L('Pasta me Karkalec dhe Tartuf', 'Prawn & truffle pasta'), 8),
    ],
  },
  {
    id: 'rizoto',
    label: L('Rizoto', 'Risotto'),
    icon: 'risotto',
    items: [
      item('ri1', L('Rizoto me Pulë & Perime', 'Chicken & vegetable risotto'), 6),
      item('ri2', L('Rizoto Champion', 'Mushroom risotto'), 6),
      item('ri3', L('Rizoto me Karkaleca', 'Prawn risotto'), 7),
      item('ri4', L('Rizoto Fruti di Mare', 'Frutti di Mare risotto'), 8),
    ],
  },
  {
    id: 'skara',
    label: L('Specialitete nga Skara', 'Grill specialties'),
    navLabel: L('Skara', 'Grill'),
    icon: 'grill',
    chefsChoice: true,
    items: [
      item('sk1', L('Pleskavicë Sharri', 'Sharri pljeskavica'), 6),
      item('sk2', L('File Pule', 'Chicken fillet'), 7),
      item('sk3', L('Kotlet viçi', 'Veal chop'), 14),
      item('sk4', L('Taraget', 'Prime Ribeye'), 14),
      item('sk5', L('Ramstek', 'New York strip'), 14),
      item('sk6', L('Kombinim Mishi', 'Meat combination'), 16),
      item('sk7', L('Mish Viçi', 'Veal meat'), 17),
      item('sk8', L('Biftek', 'Filet mignon'), 18),
      item('sk9', L('Medaljon viçi', 'Veal medallions'), 18),
      item('sk10', L('File Mignon Estragoni', 'Filet mignon with tarragon'), 18),
    ],
  },
  {
    id: 'furra',
    label: L('Specialitete nga Furra', 'Oven specialties'),
    navLabel: L('Furra', 'Oven'),
    icon: 'oven',
    items: [
      item('fu1', L('Qofte shtëpie', 'House meatballs'), 6),
      item('fu2', L('Qofte me qervish', 'Meatballs with gravy'), 7),
      item('fu3', L('Muskuj viçi', 'Veal muscles'), 12),
      item('fu4', L('Brinje viçi', 'Veal ribs'), 15),
      item('fu5', L('Biftek në Furrë', 'Oven beef steak'), 17),
      item('fu6', L('Mish Qingji', 'Lamb meat'), 20),
      item('fu7', L('Mish Edhi', 'Kid goat meat'), 22),
      item('fu8', L('Pulë në tav dheu', 'Clay-pot chicken'), 25),
    ],
  },
  {
    id: 'friteza',
    label: L('Specialitete nga Friteza', 'Fried specialties'),
    navLabel: L('Friteza', 'Fried'),
    icon: 'fry',
    items: [
      item('fr1', L('Shnicëll pule', 'Chicken schnitzel'), 7),
      item('fr2', L('Skenderbeg pule', 'Chicken Skenderbeg'), 11),
      item('fr3', L('Skenderbeg', 'Skenderbeg'), 13),
      item('fr4', L('Shnicëll Vieneze', 'Wiener schnitzel'), 15),
    ],
  },
  {
    id: 'deti-ftohta',
    label: L('Antipasta të Ftohta Deti', 'Cold seafood appetizers'),
    navLabel: L('Deti Ftohtë', 'Cold seafood'),
    icon: 'seafood',
    items: [
      item('df1', L('Sallatë me fruta deti', 'Seafood salad'), 9),
      item('df2', L('Karpacio Levrek ose Koc', 'Sea bass or sea bream carpaccio'), 15),
      item('df3', L('Krudo mix (2 persona)', 'Crudo mix (2 people)'), 30),
    ],
  },
  {
    id: 'deti-ngrohte',
    label: L('Antipasta e Ngrohtë Deti', 'Hot seafood appetizers'),
    navLabel: L('Deti Ngrohtë', 'Hot seafood'),
    icon: 'seafood-hot',
    items: [
      item('dn1', L('Kroketa Peshku', 'Fish croquettes'), 6),
      item('dn2', L('Midhje', 'Mussels'), 6),
      item('dn3', L('Karkaleca me sos konjaku', 'Prawns in cognac sauce'), 11),
    ],
  },
  {
    id: 'deti',
    label: L('Specialitete nga Deti', 'Seafood specialties'),
    navLabel: L('Deti', 'Seafood'),
    icon: 'fish',
    items: [
      item('de1', L('Troftë', 'Trout'), 8),
      item('de2', L('Kallamari', 'Calamari'), 10),
      item('de3', L('Karkaleca', 'Prawns'), 11),
      item('de4', L('Levrek', 'Sea bass'), 14),
      item('de5', L('Koc', 'Sea bream'), 14),
      item('de6', L('Tuna Steak', 'Tuna steak'), 13),
      item('de7', L('Salmon në furrë', 'Baked salmon'), 15),
      item('de8', L('Salmon', 'Salmon'), 15),
      item('de9', L('Mix deti në skarë', 'Grilled seafood mix'), 16),
      item('de10', L('Smuq', 'Cuttlefish'), 30, {
        priceLabel: L('30.00 / kg', '30.00 / kg'),
      }),
      item('de11', L('Frute deti në tavë (2–4 persona)', 'Seafood casserole (2–4 people)'), 18, {
        priceLabel: L('18.00 / 35.00', '18.00 / 35.00'),
      }),
      item('de12', L('Peshk i egër', 'Wild fish'), 45, {
        priceLabel: L('45.00 / kg', '45.00 / kg'),
      }),
    ],
  },
  {
    id: 'embelsirat',
    label: L('Ëmbëlsirat', 'Desserts'),
    icon: 'desserts',
    items: [
      item('em1', L('Trileqe', 'Tres leches'), 2.5),
      item('em2', L('Akullore', 'Ice cream'), 3),
      item('em3', L('Cheesecake', 'Cheesecake'), 3.5),
      item('em4', L('Souffle', 'Soufflé'), 3.5),
      item('em5', L('Sallatë frutash me akullore', 'Fruit salad with ice cream'), 4),
      item('em6', L('Sallatë pemëve', 'Fruit salad'), 6),
    ],
  },
]

export const hotelInfo = {
  name: 'Lakeside Hotel',
  subtitle: 'Spa & Conference',
  tagline: 'Taste. Relax. Enjoy.',
  location: 'Vërmicë, Prizren',
  phone: '+383 48 808 408',
  website: 'lakesideks.com',
  websiteUrl: 'https://lakesideks.com',
  /** Public menu app (GitHub Pages) — used for QR codes */
  menuSiteUrl: 'https://kresha325.github.io/Lakeside-Restaurant',
  facebook: 'https://www.facebook.com/Lakesidehotel2022',
  instagram: 'https://www.instagram.com/lakesideks/',
  tiktok: 'https://www.tiktok.com/@lakesideks',
  mapsUrl:
    'https://www.google.com/maps?q=Lakeside+Hotel/@42.16407887121178,20.562387275533684,17z&ll=42.16407887121178,20.562387275533684',
}

export interface BestSeller {
  id: string
  name: LString
  price: number
  priceLabel?: LString
  image: string
  categoryId: CategoryId
}

export const bestsellers: BestSeller[] = [
  {
    id: 'bs1',
    name: L('Oktapod', 'Octopus'),
    price: 30,
    priceLabel: L('30.00 / kg', '30.00 / kg'),
    image: '/images/bestsellers/1.jpg',
    categoryId: 'deti',
  },
  {
    id: 'bs2',
    name: L('Sallatë me fruta deti', 'Seafood salad'),
    price: 9,
    image: '/images/bestsellers/2.jpg',
    categoryId: 'deti-ftohta',
  },
  {
    id: 'bs3',
    name: L('Karkaleca me sos konjaku', 'Prawns in cognac sauce'),
    price: 11,
    image: '/images/bestsellers/3.jpg',
    categoryId: 'deti-ngrohte',
  },
  {
    id: 'bs4',
    name: L('File Mignon Estragoni', 'Filet mignon with tarragon'),
    price: 18,
    image: '/images/bestsellers/4.jpg',
    categoryId: 'skara',
  },
  {
    id: 'bs5',
    name: L('Biftek', 'Filet mignon'),
    price: 18,
    image: '/images/bestsellers/5.jpg',
    categoryId: 'skara',
  },
]

/** Resolve asset paths for Vite base (GitHub Pages) */
export function assetUrl(path: string): string {
  const base = import.meta.env.BASE_URL
  const clean = path.replace(/^\//, '')
  return `${base}${clean}`
}
