import { useEffect, useMemo, useState } from 'react'
import { useCart } from '../cart/CartContext'
import { CartDrawer } from '../components/CartDrawer'
import { CartFab } from '../components/CartFab'
import { CategoryNav } from '../components/CategoryNav'
import { Footer } from '../components/Footer'
import { Hero, type MenuKind } from '../components/Hero'
import { MenuSection } from '../components/MenuSection'
import { RoomGuestInfo } from '../components/RoomGuestInfo'
import { RoomOnboard } from '../components/RoomOnboard'
import type { Category, MenuItem } from '../data/menu'
import { useLocale } from '../i18n/LocaleContext'
import {
  clearStoredRoomNumber,
  getStoredRoomNumber,
} from '../lib/roomSession'
import '../App.css'

interface MenuPageProps {
  kind: MenuKind
  categories: Category[]
}

export function MenuPage({ kind, categories }: MenuPageProps) {
  const { t, ui } = useLocale()
  const { addItem, clear, setOpen } = useCart()
  const [filter, setFilter] = useState('all')
  const [toast, setToast] = useState<string | null>(null)
  const [roomNumber, setRoomNumber] = useState<string | null>(() =>
    kind === 'room' ? getStoredRoomNumber() : null,
  )

  useEffect(() => {
    clear()
    setOpen(false)
    setFilter('all')
  }, [kind, clear, setOpen])

  const visibleCategories = useMemo(() => {
    if (filter === 'all') return categories
    return categories.filter((c) => c.id === filter)
  }, [filter, categories])

  const hasAnyItems = categories.some((c) => c.items.length > 0)

  const handleAdd = (item: MenuItem) => {
    addItem(item)
    setToast(`${t(item.name)} — ${t(ui.cartAdded)}`)
    window.setTimeout(() => setToast(null), 1600)
  }

  if (kind === 'room' && !roomNumber) {
    return <RoomOnboard onContinue={setRoomNumber} />
  }

  return (
    <div className="app">
      <Hero kind={kind} />

      {kind === 'room' && roomNumber && (
        <div className="room-badge-bar">
          <span>
            {t(ui.roomBadge)} <strong>{roomNumber}</strong>
          </span>
          <button
            type="button"
            className="room-badge-bar__change"
            onClick={() => {
              clearStoredRoomNumber()
              setRoomNumber(null)
            }}
          >
            {t(ui.roomChange)}
          </button>
        </div>
      )}

      {hasAnyItems && (
        <CategoryNav
          categories={categories}
          activeId={filter}
          onSelect={setFilter}
        />
      )}

      <main className="menu-main" key={`${kind}-${filter}`}>
        {!hasAnyItems ? (
          <p className="menu-empty">{t(ui.emptyRoom)}</p>
        ) : (
          visibleCategories.map((category) =>
            category.items.length > 0 || filter !== 'all' ? (
              <MenuSection
                key={category.id}
                category={category}
                onAdd={handleAdd}
              />
            ) : null,
          )
        )}
      </main>

      {kind === 'room' && <RoomGuestInfo />}

      <Footer />

      <CartFab />
      <CartDrawer kind={kind} roomNumber={kind === 'room' ? roomNumber : null} />

      <div className={`toast ${toast ? 'is-visible' : ''}`} role="status" aria-live="polite">
        {toast}
      </div>
    </div>
  )
}
