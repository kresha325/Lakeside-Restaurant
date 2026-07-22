import { useCart } from '../cart/CartContext'
import { useLocale } from '../i18n/LocaleContext'
import './CartFab.css'

export function CartFab() {
  const { t, ui } = useLocale()
  const { count, setOpen } = useCart()

  if (count === 0) return null

  return (
    <button
      type="button"
      className="cart-fab"
      onClick={() => setOpen(true)}
      aria-label={`${t(ui.cart)} (${count})`}
    >
      <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden>
        <path
          d="M6 6h15l-1.5 9h-12z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
        <path d="M6 6L5 3H2" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <circle cx="9" cy="20" r="1.4" fill="currentColor" />
        <circle cx="17" cy="20" r="1.4" fill="currentColor" />
      </svg>
      <span className="cart-fab__count">{count}</span>
    </button>
  )
}
