import { useState, type FormEvent } from 'react'
import { DiamondLogo } from './Icons'
import { hotelInfo } from '../data/menu'
import { useLocale } from '../i18n/LocaleContext'
import { LangSwitch } from './LangSwitch'
import { setStoredRoomNumber } from '../lib/roomSession'
import './RoomOnboard.css'

interface RoomOnboardProps {
  onContinue: (roomNumber: string) => void
}

export function RoomOnboard({ onContinue }: RoomOnboardProps) {
  const { t, ui } = useLocale()
  const [room, setRoom] = useState('')
  const [error, setError] = useState(false)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    const value = room.trim()
    if (!value || !/^[0-9A-Za-z-]{1,8}$/.test(value)) {
      setError(true)
      return
    }
    setStoredRoomNumber(value)
    onContinue(value)
  }

  return (
    <div className="room-onboard">
      <div className="room-onboard__bg" aria-hidden />
      <div className="room-onboard__lang">
        <LangSwitch />
      </div>

      <div className="room-onboard__card">
        <DiamondLogo className="room-onboard__logo" />
        <p className="room-onboard__hotel">{hotelInfo.name}</p>
        <h1 className="room-onboard__title">{t(ui.roomOnboardTitle)}</h1>
        <p className="room-onboard__subtitle">{t(ui.roomOnboardSubtitle)}</p>

        <form className="room-onboard__form" onSubmit={handleSubmit}>
          <label className="room-onboard__label" htmlFor="room-number">
            {t(ui.roomNumberLabel)}
          </label>
          <input
            id="room-number"
            className={`room-onboard__input ${error ? 'is-invalid' : ''}`}
            type="text"
            inputMode="numeric"
            autoComplete="off"
            autoFocus
            maxLength={8}
            placeholder={t(ui.roomNumberPlaceholder)}
            value={room}
            onChange={(e) => {
              setRoom(e.target.value)
              setError(false)
            }}
            aria-invalid={error}
          />
          {error && <p className="room-onboard__error">{t(ui.roomInvalid)}</p>}
          <button type="submit" className="room-onboard__submit">
            {t(ui.roomContinue)}
          </button>
        </form>
      </div>
    </div>
  )
}
