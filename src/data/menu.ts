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
  name: string
  description?: string
  /** Numeric price for sorting; display uses priceLabel when set */
  price: number
  /** Custom display e.g. "30.00 / kg" or "18.00 / 35.00" */
  priceLabel?: string
  image?: string
  chefsChoice?: boolean
}

export interface Category {
  id: CategoryId
  label: string
  /** Shorter label for sticky nav */
  navLabel?: string
  icon: string
  chefsChoice?: boolean
  featuredImage?: string
  items: MenuItem[]
}

function item(
  id: string,
  name: string,
  price: number,
  extras?: Partial<Omit<MenuItem, 'id' | 'name' | 'price'>>,
): MenuItem {
  return { id, name, price, ...extras }
}

export const categories: Category[] = [
  {
    id: 'mengjesi',
    label: 'Mëngjesi',
    icon: 'breakfast',
    items: [
      item('mg1', 'Omletë klasike', 3),
      item('mg2', 'Omletë me përshutë', 3.5),
      item('mg3', 'Omletë me perime freskuese', 3.5),
      item('mg4', 'Pancakes', 3.5),
      item('mg5', 'Llokuma', 4),
    ],
  },
  {
    id: 'supat',
    label: 'Supat',
    icon: 'soup',
    items: [
      item('su1', 'Supë Ditore', 2),
      item('su2', 'Supë Pulë', 2),
      item('su3', 'Supë Peshku', 2.5),
    ],
  },
  {
    id: 'sallata',
    label: 'Sallata',
    icon: 'salads',
    items: [
      item('sa1', 'Sallatë e Përzier', 3),
      item('sa2', 'Sallatë Shope', 3),
      item('sa3', 'Sallatë Greke', 3.5),
      item('sa4', 'Sallatë Caprese', 5),
      item('sa5', 'Sallatë Shtëpie', 5),
      item('sa6', 'Sallatë Ruse', 5),
      item('sa7', 'Sallatë Rukola', 5.5),
      item('sa8', 'Sallatë Cezar me Pulë', 7),
      item('sa9', 'Sallatë Buffalo', 7),
    ],
  },
  {
    id: 'parahaja-ftohte',
    label: 'Parahaja e Ftohtë',
    navLabel: 'Parahaja Ftohtë',
    icon: 'starters',
    items: [
      item('pf1', 'Speca me hudhër', 2.5),
      item('pf2', 'Tarator', 2.5),
      item('pf3', 'Ullinj', 2),
      item('pf4', 'Brusketa klasike', 3.5),
      item('pf5', 'Brusketa tuna', 4.5),
      item('pf6', 'Brusketa me salmon të tymosur', 5),
      item('pf7', 'Turshi e përzier', 5),
      item('pf8', 'Djathë i bardhë', 5),
      item('pf9', 'Djath Sharri', 5.5),
      item('pf10', 'Djathra mix', 6.5),
      item('pf11', 'Djathë dhie', 7),
      item('pf12', 'Parahaje e përzier (2 persona)', 12),
    ],
  },
  {
    id: 'parahaja-ngrohte',
    label: 'Parahaja e Ngrohtë',
    navLabel: 'Parahaja Ngrohtë',
    icon: 'hot',
    items: [
      item('pn1', 'Kaçkavall i fërguar (1 copë)', 2),
      item('pn2', 'Patate në furrë', 2.5),
      item('pn3', 'Pomfrit', 2.5),
      item('pn4', 'Pizza Brod', 3),
      item('pn5', 'Pomfrit me djath', 3),
      item('pn6', 'Pogaqe', 3),
      item('pn7', 'Fli', 3.5),
      item('pn8', 'Këpurdha të fërguara', 4),
      item('pn9', 'Speca me gjizë', 4),
      item('pn10', 'Perime të fërguara', 4),
      item('pn11', 'Djathë në furrë', 4.5),
      item('pn12', 'Këpurdha në furrë', 5),
    ],
  },
  {
    id: 'sofra',
    label: 'Sofra Tradicionale',
    navLabel: 'Sofra',
    icon: 'sofra',
    featuredImage: '/images/sofra.jpg',
    items: [
      item('so1', '2 persona', 12),
      item('so2', '4 persona', 24),
    ],
  },
  {
    id: 'picat',
    label: 'Picat',
    icon: 'pizza',
    items: [
      item('pi1', 'Picë Margarita', 5),
      item('pi2', 'Picë Fungi', 5),
      item('pi3', 'Picë me Përshutë', 6),
      item('pi4', 'Picë Vegjetariane', 6),
      item('pi5', 'Picë Tuna', 6.5),
      item('pi6', 'Picë Shtëpie', 7),
      item('pi7', 'Picë Fruti di Mare', 8),
    ],
  },
  {
    id: 'pastat',
    label: 'Pastat',
    icon: 'pasta',
    items: [
      item('pa1', 'Pasta Napoli', 5.5),
      item('pa2', 'Pasta Bololoneze', 6),
      item('pa3', 'Pasta Carbonara', 6),
      item('pa4', 'Pasta me karkaleca', 7),
      item('pa5', 'Pasta me katër djathrat', 7),
      item('pa6', 'Pasta me Kallamari', 7),
      item('pa7', 'Pasta me Skampi', 8),
      item('pa8', 'Pasta Frutti di Mare', 8),
      item('pa9', 'Pasta me Karkalec dhe Tartuf', 8),
    ],
  },
  {
    id: 'rizoto',
    label: 'Rizoto',
    icon: 'risotto',
    items: [
      item('ri1', 'Rizoto me Pulë & Perime', 6),
      item('ri2', 'Rizoto Champion', 6),
      item('ri3', 'Rizoto me Karkaleca', 7),
      item('ri4', 'Rizoto Fruti di Mare', 8),
    ],
  },
  {
    id: 'skara',
    label: 'Specialitete nga Skara',
    navLabel: 'Skara',
    icon: 'grill',
    chefsChoice: true,
    items: [
      item('sk1', 'Pleskavicë Sharri', 6),
      item('sk2', 'File Pule', 7),
      item('sk3', 'Kotlet viçi', 14),
      item('sk4', 'Taraget', 14),
      item('sk5', 'Ramstek', 14),
      item('sk6', 'Kombinim Mishi', 16),
      item('sk7', 'Mish Viçi', 17),
      item('sk8', 'Biftek', 18),
      item('sk9', 'Medaljon viçi', 18),
      item('sk10', 'File Mignon Estragoni', 18),
    ],
  },
  {
    id: 'furra',
    label: 'Specialitete nga Furra',
    navLabel: 'Furra',
    icon: 'oven',
    items: [
      item('fu1', 'Qofte shtëpie', 6),
      item('fu2', 'Qofte me qervish', 7),
      item('fu3', 'Muskuj viçi', 12),
      item('fu4', 'Brinje viçi', 15),
      item('fu5', 'Biftek në Furrë', 17),
      item('fu6', 'Mish Qingji', 20),
      item('fu7', 'Mish Edhi', 22),
      item('fu8', 'Pulë në tav dheu', 25),
    ],
  },
  {
    id: 'friteza',
    label: 'Specialitete nga Friteza',
    navLabel: 'Friteza',
    icon: 'fry',
    items: [
      item('fr1', 'Shnicëll pule', 7),
      item('fr2', 'Skenderbeg pule', 11),
      item('fr3', 'Skenderbeg', 13),
      item('fr4', 'Shnicëll Vieneze', 15),
    ],
  },
  {
    id: 'deti-ftohta',
    label: 'Antipasta të Ftohta Deti',
    navLabel: 'Deti Ftohtë',
    icon: 'seafood',
    items: [
      item('df1', 'Sallatë me fruta deti', 9),
      item('df2', 'Karpacio Levrek ose Koc', 15),
      item('df3', 'Krudo mix (2 persona)', 30),
    ],
  },
  {
    id: 'deti-ngrohte',
    label: 'Antipasta e Ngrohtë Deti',
    navLabel: 'Deti Ngrohtë',
    icon: 'seafood-hot',
    items: [
      item('dn1', 'Kroketa Peshku', 6),
      item('dn2', 'Midhje', 6),
      item('dn3', 'Karkaleca me sos konjaku', 11),
    ],
  },
  {
    id: 'deti',
    label: 'Specialitete nga Deti',
    navLabel: 'Deti',
    icon: 'fish',
    items: [
      item('de1', 'Troftë', 8),
      item('de2', 'Kallamari', 10),
      item('de3', 'Karkaleca', 11),
      item('de4', 'Levrek', 14),
      item('de5', 'Koc', 14),
      item('de6', 'Tuna Steak', 13),
      item('de7', 'Salmon në furrë', 15),
      item('de8', 'Salmon', 15),
      item('de9', 'Mix deti në skarë', 16),
      item('de10', 'Smuq', 30, { priceLabel: '30.00 / kg' }),
      item('de11', 'Frute deti në tavë (2–4 persona)', 18, {
        priceLabel: '18.00 / 35.00',
      }),
      item('de12', 'Peshk i egër', 45, { priceLabel: '45.00 / kg' }),
    ],
  },
  {
    id: 'embelsirat',
    label: 'Ëmbëlsirat',
    icon: 'desserts',
    items: [
      item('em1', 'Trileqe', 2.5),
      item('em2', 'Akullore', 3),
      item('em3', 'Cheesecake', 3.5),
      item('em4', 'Souffle', 3.5),
      item('em5', 'Sallatë frutash me akullore', 4),
      item('em6', 'Sallatë pemëve', 6),
    ],
  },
]

export const hotelInfo = {
  name: 'Lakeside Hotel',
  subtitle: 'Spa & Conference',
  tagline: 'Taste. Relax. Enjoy.',
  location: 'Vërnicë, Prizren',
  phone: '+383 48 808 408',
  website: 'lakesideks.com',
  websiteUrl: 'https://lakesideks.com',
  facebook: 'https://facebook.com',
  instagram: 'https://instagram.com',
}

export interface BestSeller {
  id: string
  name: string
  price: number
  priceLabel?: string
  image: string
  categoryId: CategoryId
}

export const bestsellers: BestSeller[] = [
  {
    id: 'bs1',
    name: 'Oktapod',
    price: 30,
    priceLabel: '30.00 / kg',
    image: '/images/bestsellers/1.jpg',
    categoryId: 'deti',
  },
  {
    id: 'bs2',
    name: 'Sallatë me fruta deti',
    price: 9,
    image: '/images/bestsellers/2.jpg',
    categoryId: 'deti-ftohta',
  },
  {
    id: 'bs3',
    name: 'Karkaleca me sos konjaku',
    price: 11,
    image: '/images/bestsellers/3.jpg',
    categoryId: 'deti-ngrohte',
  },
  {
    id: 'bs4',
    name: 'File Mignon Estragoni',
    price: 18,
    image: '/images/bestsellers/4.jpg',
    categoryId: 'skara',
  },
  {
    id: 'bs5',
    name: 'Biftek',
    price: 18,
    image: '/images/bestsellers/5.jpg',
    categoryId: 'skara',
  },
]

