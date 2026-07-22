const STORAGE_KEY = 'lakeside-room-number'

export function getStoredRoomNumber(): string | null {
  try {
    const value = sessionStorage.getItem(STORAGE_KEY)?.trim()
    return value || null
  } catch {
    return null
  }
}

export function setStoredRoomNumber(room: string) {
  sessionStorage.setItem(STORAGE_KEY, room.trim())
}

export function clearStoredRoomNumber() {
  try {
    sessionStorage.removeItem(STORAGE_KEY)
  } catch {
    /* ignore */
  }
}
