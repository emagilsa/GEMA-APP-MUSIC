// src/component/organisms/Topbar.jsx
import { SearchIcon, BellIcon, ChevronDownIcon } from '../atoms/Icons'

function Topbar() {
  return (
    <header className="topbar">
      <div className="topbar-search">
        <SearchIcon />
        <input type="text" placeholder="Cari lagu, artis, atau podcast..." />
      </div>

      <div className="topbar-right">
        <button className="topbar-icon-btn" aria-label="Notifikasi">
          <BellIcon />
          <span className="topbar-dot" />
        </button>
        <button className="topbar-user">
          <span className="topbar-avatar" />
          <span className="topbar-username">Kamu</span>
          <ChevronDownIcon />
        </button>
      </div>
    </header>
  )
}

export default Topbar
