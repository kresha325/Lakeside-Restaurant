import { useMemo, useState } from 'react'
import { CategoryNav, type FilterId } from './components/CategoryNav'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { MenuSection } from './components/MenuSection'
import { categories, type MenuItem } from './data/menu'
import { LocaleProvider, useLocale } from './i18n/LocaleContext'
import './App.css'

function AppContent() {
  const { t, ui } = useLocale()
  const [filter, setFilter] = useState<FilterId>('all')
  const [toast, setToast] = useState<string | null>(null)

  const visibleCategories = useMemo(() => {
    if (filter === 'all') return categories
    return categories.filter((c) => c.id === filter)
  }, [filter])

  const handleAdd = (item: MenuItem) => {
    setToast(`${t(item.name)} — ${t(ui.noted)}`)
    window.setTimeout(() => setToast(null), 1800)
  }

  return (
    <div className="app">
      <Hero />
      <CategoryNav activeId={filter} onSelect={setFilter} />

      <main className="menu-main" key={filter}>
        {visibleCategories.map((category) => (
          <MenuSection key={category.id} category={category} onAdd={handleAdd} />
        ))}
      </main>

      <Footer />

      <div className={`toast ${toast ? 'is-visible' : ''}`} role="status" aria-live="polite">
        {toast}
      </div>
    </div>
  )
}

export default function App() {
  return (
    <LocaleProvider>
      <AppContent />
    </LocaleProvider>
  )
}
