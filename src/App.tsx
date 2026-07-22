import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { CartProvider } from './cart/CartContext'
import { categories } from './data/menu'
import { roomCategories } from './data/roomMenu'
import { LocaleProvider } from './i18n/LocaleContext'
import { MenuPage } from './pages/MenuPage'
import './App.css'

const basename = import.meta.env.BASE_URL.replace(/\/$/, '') || '/'

export default function App() {
  return (
    <LocaleProvider>
      <CartProvider>
        <BrowserRouter basename={basename}>
          <Routes>
            <Route
              path="/"
              element={<MenuPage kind="restaurant" categories={categories} />}
            />
            <Route
              path="/room"
              element={<MenuPage kind="room" categories={roomCategories} />}
            />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </LocaleProvider>
  )
}
