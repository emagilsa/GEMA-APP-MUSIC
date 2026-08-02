// src/component/organisms/Sidebar.jsx
import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Logo from '../atoms/Logo'

/* ---- Ikon navigasi ---- */
const HomeIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="m3 11 9-8 9 8" /><path d="M5 10v10h14V10" />
  </svg>
)
const DiscoverIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="9" /><path d="m15 9-2 6-6 2 2-6 6-2Z" />
  </svg>
)
const PlaylistIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 6h11M4 12h11M4 18h6" /><circle cx="19" cy="16" r="2.4" /><path d="M21.4 16V7l-3 1" />
  </svg>
)
const PodcastIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="9" y="2" width="6" height="12" rx="3" /><path d="M5 11a7 7 0 0 0 14 0" /><path d="M12 18v4" />
  </svg>
)
const FavIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 20s-7-4.4-9.5-8.8C.7 8 2.6 4.5 6 4c2-.3 3.7.7 6 3 2.3-2.3 4-3.3 6-3 3.4.5 5.3 4 3.5 7.2C19 15.6 12 20 12 20Z" />
  </svg>
)
const ClockIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="9" /><path d="M12 7v5l3.5 2" />
  </svg>
)
const HeartOutlineIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 20s-7-4.4-9.5-8.8C.7 8 2.6 4.5 6 4c2-.3 3.7.7 6 3 2.3-2.3 4-3.3 6-3 3.4.5 5.3 4 3.5 7.2C19 15.6 12 20 12 20Z" />
  </svg>
)
const AlbumIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="2.4" />
  </svg>
)
const ArtistsIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="9" cy="8" r="3" /><path d="M2 20c0-3.3 3.1-5.5 7-5.5s7 2.2 7 5.5" />
    <path d="M16 7.5a3 3 0 1 1 3.4 4.5M20.5 20c0-2.6-2-4.5-4.8-5.2" />
  </svg>
)
const PlusIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M12 5v14M5 12h14" /></svg>
)
const ChevronDownIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
)
const PlayFillIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z" /></svg>
)
const PauseFillIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M7 5h4v14H7zM13 5h4v14h-4z" /></svg>
)
const SkipBackIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M6 5h2v14H6zM20 5v14l-11-7z" /></svg>
)
const SkipFwdIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M16 5h2v14h-2zM4 5v14l11-7z" /></svg>
)

const navItems = [
  { label: 'Home',     to: '/home', icon: <HomeIcon /> },
  { label: 'Discover', to: '#',     icon: <DiscoverIcon /> },
  { label: 'Playlist', to: '#',     icon: <PlaylistIcon /> },
  { label: 'Podcasts', to: '#',     icon: <PodcastIcon /> },
  { label: 'Favorites',to: '#',     icon: <FavIcon /> },
]

const libraryItems = [
  { label: 'Recently Played', icon: <ClockIcon /> },
  { label: 'Liked Songs',     icon: <HeartOutlineIcon /> },
  { label: 'Albums',          icon: <AlbumIcon /> },
  { label: 'Artists',         icon: <ArtistsIcon /> },
]

const sidebarPlaylists = [
  { id: 1, name: 'Chill Vibes',  count: 25, cover: 'auth-bg-login.jpg' },
  { id: 2, name: 'Focus Mode',   count: 32, cover: 'bruno.jpg' },
  { id: 3, name: 'Morning Boost',count: 18, cover: 'laut.jpg' },
  { id: 4, name: 'Night Drive',  count: 28, cover: 'hindia.jpg' },
]

function Sidebar() {
  const { pathname } = useLocation()
  const [showAll, setShowAll] = useState(false)
  const [playing, setPlaying] = useState(true)

  const visiblePlaylists = showAll ? sidebarPlaylists : sidebarPlaylists

  return (
    <aside className="sidebar">
      <Logo to="/home" />

      <nav className="sidebar-nav">
        {navItems.map(({ label, to, icon }) => (
          <Link
            key={label}
            to={to}
            className={'sidebar-link' + (pathname === to ? ' active' : '')}
          >
            <span className="sidebar-link-icon">{icon}</span>
            {label}
          </Link>
        ))}
      </nav>

      <div className="sidebar-section">
        <span className="sidebar-section-title">Your Library</span>
        {libraryItems.map(({ label, icon }) => (
          <a href="#" key={label} className="sidebar-link sidebar-link-sm">
            <span className="sidebar-link-icon">{icon}</span>
            {label}
          </a>
        ))}
      </div>

      <div className="sidebar-section">
        <div className="sidebar-section-head">
          <span className="sidebar-section-title">Playlists</span>
          <button className="sidebar-add-btn" aria-label="Buat playlist baru">
            <PlusIcon />
          </button>
        </div>

        {visiblePlaylists.map((p) => (
          <a href="#" key={p.id} className="sidebar-playlist-item">
            <img src={`/${p.cover}`} alt={p.name} />
            <div>
              <b>{p.name}</b>
              <small>{p.count} songs</small>
            </div>
          </a>
        ))}

        <button className="sidebar-seemore" onClick={() => setShowAll(!showAll)}>
          {showAll ? 'See Less' : 'See More'}
          <ChevronDownIcon />
        </button>
      </div>

      <div className="sidebar-nowplaying">
        <img src="/auth-bg-login.jpg" alt="Midnight Drive" />
        <div className="sidebar-nowplaying-info">
          <b>Midnight Drive</b>
          <small>Arin Ray</small>
        </div>
        <div className="sidebar-nowplaying-controls">
          <button aria-label="Sebelumnya"><SkipBackIcon /></button>
          <button
            className="sidebar-nowplaying-play"
            onClick={() => setPlaying(!playing)}
            aria-label={playing ? 'Jeda' : 'Putar'}
          >
            {playing ? <PauseFillIcon /> : <PlayFillIcon />}
          </button>
          <button aria-label="Berikutnya"><SkipFwdIcon /></button>
        </div>
      </div>
    </aside>
  )
}

export default Sidebar
