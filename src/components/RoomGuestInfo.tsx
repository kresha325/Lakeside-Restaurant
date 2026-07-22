import { roomGuestInfo, roomServiceHours } from '../data/roomMenu'
import { useLocale } from '../i18n/LocaleContext'
import './RoomGuestInfo.css'

export function RoomGuestInfo() {
  const { t } = useLocale()

  return (
    <aside className="room-info" aria-labelledby="room-info-title">
      <p className="room-info__hours">{t(roomServiceHours)}</p>
      <h2 id="room-info-title" className="room-info__title">
        {t(roomGuestInfo.title)}
      </h2>
      <ul className="room-info__list">
        {roomGuestInfo.lines.map((line, i) => (
          <li key={i}>{t(line)}</li>
        ))}
      </ul>
    </aside>
  )
}
