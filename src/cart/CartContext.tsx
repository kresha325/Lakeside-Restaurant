import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import type { MenuItem } from '../data/menu'

export interface CartLine {
  item: MenuItem
  qty: number
}

interface CartContextValue {
  lines: CartLine[]
  count: number
  total: number
  addItem: (item: MenuItem) => void
  removeItem: (id: string) => void
  setQty: (id: string, qty: number) => void
  clear: () => void
  open: boolean
  setOpen: (open: boolean) => void
}

const CartContext = createContext<CartContextValue | null>(null)

function linePrice(item: MenuItem): number {
  return item.price
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [lines, setLines] = useState<CartLine[]>([])
  const [open, setOpen] = useState(false)

  const addItem = useCallback((item: MenuItem) => {
    setLines((prev) => {
      const existing = prev.find((l) => l.item.id === item.id)
      if (existing) {
        return prev.map((l) =>
          l.item.id === item.id ? { ...l, qty: l.qty + 1 } : l,
        )
      }
      return [...prev, { item, qty: 1 }]
    })
  }, [])

  const removeItem = useCallback((id: string) => {
    setLines((prev) => prev.filter((l) => l.item.id !== id))
  }, [])

  const setQty = useCallback((id: string, qty: number) => {
    setLines((prev) => {
      if (qty <= 0) return prev.filter((l) => l.item.id !== id)
      return prev.map((l) => (l.item.id === id ? { ...l, qty } : l))
    })
  }, [])

  const clear = useCallback(() => setLines([]), [])

  const count = useMemo(
    () => lines.reduce((sum, l) => sum + l.qty, 0),
    [lines],
  )

  const total = useMemo(
    () => lines.reduce((sum, l) => sum + linePrice(l.item) * l.qty, 0),
    [lines],
  )

  const value = useMemo(
    () => ({
      lines,
      count,
      total,
      addItem,
      removeItem,
      setQty,
      clear,
      open,
      setOpen,
    }),
    [lines, count, total, addItem, removeItem, setQty, clear, open],
  )

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used within CartProvider')
  return ctx
}
