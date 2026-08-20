import { useEffect, useMemo, useState } from 'react'
import { hotelInfo } from '../data/menu'
import { useCart } from '../cart/CartContext'
import { useLocale } from '../i18n/LocaleContext'
import { tx, ui } from '../i18n/strings'
import type { MenuKind } from './Hero'
import './CartDrawer.css'

export type PaymentMethod = 'pos' | 'cash'

const CASH_PRESETS = [20, 50, 100, 200] as const

interface CartDrawerProps {
  kind: MenuKind
  roomNumber: string | null
}

/** Staff WhatsApp order — always Albanian, regardless of guest UI language. */
function buildWhatsAppMessage(opts: {
  roomNumber: string | null
  lines: { name: string; qty: number; price: number }[]
  total: number
  payment: PaymentMethod
  cashAmount?: number
}): string {
  const { roomNumber, lines, total, payment, cashAmount } = opts

  const header = roomNumber
    ? `*Porosi nga dhoma ${roomNumber}*`
    : `*Porosi*`

  const items = lines
    .map((l) => `• ${l.qty}x ${l.name} — €${(l.price * l.qty).toFixed(2)}`)
    .join('\n')

  const paymentLine =
    payment === 'pos'
      ? 'Pagesa: POS'
      : `Pagesa: Kesh (€${cashAmount})`

  return [
    header,
    '',
    '*Porosia*',
    items,
    '',
    `*Totali: €${total.toFixed(2)}*`,
    paymentLine,
  ].join('\n')
}

export function CartDrawer({ kind, roomNumber }: CartDrawerProps) {
  const { t, ui, locale } = useLocale()
  const { lines, total, open, setOpen, setQty, removeItem, clear } = useCart()
  const [payment, setPayment] = useState<PaymentMethod | null>(null)
  const [cashAmount, setCashAmount] = useState<number | null>(null)
  const [customCash, setCustomCash] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [presenting, setPresenting] = useState(false)

  const isRoom = kind === 'room'

  const lineRows = useMemo(
    () =>
      lines.map((l) => ({
        id: l.item.id,
        name: tx(l.item.name, locale),
        qty: l.qty,
        price: l.item.price,
      })),
    [lines, locale],
  )

  /** Waiter presentation always in Albanian */
  const presentRows = useMemo(
    () =>
      lines.map((l) => ({
        id: l.item.id,
        name: tx(l.item.name, 'sq'),
        qty: l.qty,
        price: l.item.price,
      })),
    [lines],
  )

  useEffect(() => {
    if (!open) setPresenting(false)
  }, [open])

  if (!open) return null

  const resolveCashAmount = (): number | null => {
    if (customCash.trim()) {
      const n = Number(customCash.replace(',', '.'))
      if (!Number.isFinite(n) || n <= 0) return null
      return n
    }
    return cashAmount
  }

  const resetPayment = () => {
    setPayment(null)
    setCashAmount(null)
    setCustomCash('')
    setError(null)
  }

  const handleOrder = () => {
    if (!payment) {
      setError(t(ui.selectPayment))
      return
    }
    if (payment === 'cash') {
      const amount = resolveCashAmount()
      if (amount == null) {
        setError(customCash.trim() ? t(ui.cashInvalid) : t(ui.selectCash))
        return
      }
    }
    if (lines.length === 0) return

    const amount = payment === 'cash' ? resolveCashAmount()! : undefined

    const waLines = lines.map((l) => ({
      name:
        typeof l.item.name === 'string'
          ? l.item.name
          : l.item.name.sq || l.item.name.en,
      qty: l.qty,
      price: l.item.price,
    }))

    const message = buildWhatsAppMessage({
      roomNumber,
      lines: waLines,
      total,
      payment,
      cashAmount: amount,
    })

    const phone = hotelInfo.phone.replace(/\D/g, '')
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`
    window.open(url, '_blank', 'noopener,noreferrer')
    clear()
    setOpen(false)
    resetPayment()
  }

  const handlePresentDone = () => {
    clear()
    setPresenting(false)
    setOpen(false)
  }

  const tSq = (value: Parameters<typeof tx>[0]) => tx(value, 'sq')

  if (presenting) {
    return (
      <div
        className="cart-drawer cart-drawer--present"
        role="dialog"
        aria-modal="true"
        aria-label={tSq(ui.presentToWaiter)}
        lang="sq"
      >
        <div className="cart-present">
          <header className="cart-present__header">
            <p className="cart-present__brand">{hotelInfo.name}</p>
            <h2>{tSq(ui.orderHeader)}</h2>
            <p className="cart-present__hint">{tSq(ui.presentHint)}</p>
          </header>

          <ul className="cart-present__list">
            {presentRows.map((l) => (
              <li key={l.id} className="cart-present__line">
                <span className="cart-present__qty">{l.qty}×</span>
                <span className="cart-present__name">{l.name}</span>
                <span className="cart-present__price">
                  €{(l.price * l.qty).toFixed(2)}
                </span>
              </li>
            ))}
          </ul>

          <div className="cart-present__total">
            <span>{tSq(ui.cartTotal)}</span>
            <strong>€{total.toFixed(2)}</strong>
          </div>

          <div className="cart-present__actions">
            <button
              type="button"
              className="cart-present__back"
              onClick={() => setPresenting(false)}
            >
              {tSq(ui.presentBack)}
            </button>
            <button
              type="button"
              className="cart-present__done"
              onClick={handlePresentDone}
            >
              {tSq(ui.presentDone)}
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="cart-drawer" role="dialog" aria-modal="true" aria-label={t(ui.cart)}>
      <button
        type="button"
        className="cart-drawer__backdrop"
        aria-label={t(ui.close)}
        onClick={() => setOpen(false)}
      />
      <div className="cart-drawer__panel">
        <header className="cart-drawer__header">
          <h2>{t(ui.cart)}</h2>
          <button type="button" className="cart-drawer__close" onClick={() => setOpen(false)}>
            ×
          </button>
        </header>

        {isRoom && roomNumber && (
          <p className="cart-drawer__room">
            {t(ui.orderFromRoom)} <strong>{roomNumber}</strong>
          </p>
        )}

        <div className="cart-drawer__body">
          {lines.length === 0 ? (
            <p className="cart-drawer__empty">{t(ui.cartEmpty)}</p>
          ) : (
            <ul className="cart-drawer__list">
              {lineRows.map((l) => (
                <li key={l.id} className="cart-drawer__line">
                  <div className="cart-drawer__line-main">
                    <span className="cart-drawer__name">{l.name}</span>
                    <span className="cart-drawer__line-price">
                      €{(l.price * l.qty).toFixed(2)}
                    </span>
                  </div>
                  <div className="cart-drawer__line-actions">
                    <div className="cart-drawer__qty">
                      <button
                        type="button"
                        aria-label={t(ui.qtyDecrease)}
                        onClick={() => setQty(l.id, l.qty - 1)}
                      >
                        −
                      </button>
                      <span>{l.qty}</span>
                      <button
                        type="button"
                        aria-label={t(ui.qtyIncrease)}
                        onClick={() => setQty(l.id, l.qty + 1)}
                      >
                        +
                      </button>
                    </div>
                    <button
                      type="button"
                      className="cart-drawer__remove"
                      onClick={() => removeItem(l.id)}
                    >
                      {t(ui.remove)}
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}

          {lines.length > 0 && (
            <>
              {isRoom && (
                <div className="cart-drawer__payment">
                  <p className="cart-drawer__label">{t(ui.paymentMethod)}</p>
                  <div className="cart-drawer__pay-options">
                    <button
                      type="button"
                      className={`cart-drawer__pay-btn ${payment === 'pos' ? 'is-active' : ''}`}
                      onClick={() => {
                        setPayment('pos')
                        setCashAmount(null)
                        setCustomCash('')
                        setError(null)
                      }}
                    >
                      {t(ui.paymentPos)}
                    </button>
                    <button
                      type="button"
                      className={`cart-drawer__pay-btn ${payment === 'cash' ? 'is-active' : ''}`}
                      onClick={() => {
                        setPayment('cash')
                        setError(null)
                      }}
                    >
                      {t(ui.paymentCash)}
                    </button>
                  </div>

                  {payment === 'cash' && (
                    <div className="cart-drawer__cash">
                      <p className="cart-drawer__label">{t(ui.cashDenomination)}</p>
                      <div className="cart-drawer__cash-options">
                        {CASH_PRESETS.map((note) => (
                          <button
                            key={note}
                            type="button"
                            className={`cart-drawer__cash-btn ${
                              cashAmount === note && !customCash ? 'is-active' : ''
                            }`}
                            onClick={() => {
                              setCashAmount(note)
                              setCustomCash('')
                              setError(null)
                            }}
                          >
                            €{note}
                          </button>
                        ))}
                      </div>
                      <label className="cart-drawer__other-label" htmlFor="cash-other">
                        {t(ui.cashOther)}
                      </label>
                      <input
                        id="cash-other"
                        className="cart-drawer__other-input"
                        type="number"
                        inputMode="decimal"
                        min={1}
                        step={1}
                        placeholder={t(ui.cashOtherPlaceholder)}
                        value={customCash}
                        onChange={(e) => {
                          setCustomCash(e.target.value)
                          setCashAmount(null)
                          setError(null)
                        }}
                      />
                      <p className="cart-drawer__hint">{t(ui.cashHint)}</p>
                    </div>
                  )}
                </div>
              )}

              {error && <p className="cart-drawer__error">{error}</p>}

              <div className="cart-drawer__footer">
                <div className="cart-drawer__total">
                  <span>{t(ui.cartTotal)}</span>
                  <strong>€{total.toFixed(2)}</strong>
                </div>
                {isRoom ? (
                  <button type="button" className="cart-drawer__checkout" onClick={handleOrder}>
                    {t(ui.cartCheckout)}
                  </button>
                ) : (
                  <button
                    type="button"
                    className="cart-drawer__checkout cart-drawer__checkout--waiter"
                    onClick={() => setPresenting(true)}
                  >
                    {t(ui.presentToWaiter)}
                  </button>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
