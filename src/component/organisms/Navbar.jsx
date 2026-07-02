// src/components/organisms/Navbar.jsx
import { Link, useLocation } from 'react-router-dom'
import Logo from '../atoms/Logo'

function Navbar() {
  const { pathname } = useLocation()

  const links = [
    { label: 'Home',     to: '/home' },
    { label: 'Playlist', to: '#' },
    { label: 'Genre',    to: '#' },
    { label: 'Podcast',  to: '#' },
  ]

  return (
    <header className="navbar">
      <Logo to="/home" />

      <nav className="nav-links">
        {links.map(({ label, to }) => (
          <Link
            key={label}
            to={to}
            className={pathname === to ? 'active' : ''}
          >
            {label}
          </Link>
        ))}
      </nav>

      <div className="nav-right">
        {/* Tombol Cari */}
        <button className="icon-btn" aria-label="Cari">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="7" />
            <path d="m21 21-4.3-4.3" />
          </svg>
        </button>

        {/* Tombol Notifikasi */}
        <button className="icon-btn" aria-label="Notifikasi">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9" />
            <path d="M13.7 21a2 2 0 0 1-3.4 0" />
          </svg>
          <span className="dot"></span>
        </button>

        {/* Avatar */}
        <Link to="#" className="nav-avatar" aria-label="Profil" />
      </div>
    </header>
  )
}

export default Navbar
