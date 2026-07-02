// src/components/molecules/PlaylistCard.jsx

/**
 * PlaylistCard — kartu playlist di halaman beranda
 * Props:
 *   title     : string — judul playlist
 *   songCount : number — jumlah lagu
 *   coverClass: string — class CSS cover (cover-1 s/d cover-4)
 *   icon      : JSX — ikon dekorasi cover
 *   href      : string — link tujuan (default: '#')
 */
function PlaylistCard({ title, songCount, coverClass = 'cover-1', icon, href = '#' }) {
  const handlePlayClick = (e) => {
    e.preventDefault()
    e.stopPropagation()
  }

  return (
    <a href={href} className="playlist-card">
      <div className={`playlist-cover ${coverClass}`}>
        {icon && <span className="deco-icon" style={{ color: '#fff' }}>{icon}</span>}
        <button className="play-fab" onClick={handlePlayClick} aria-label="Putar">
          <svg viewBox="0 0 24 24">
            <path d="M6 4l14 8-14 8V4z" />
          </svg>
        </button>
      </div>
      <div className="playlist-info">
        <div className="title">{title}</div>
        <div className="sub">{songCount} Lagu</div>
      </div>
    </a>
  )
}

export default PlaylistCard
