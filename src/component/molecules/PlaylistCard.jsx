// src/component/molecules/PlaylistCard.jsx
function PlaylistCard({ title, songCount, image, href = '#' }) {
  return (
    <a href={href} className="playlist-card">
      <div className="playlist-cover">
        <img src={image} alt={title} />
        <button className="play-fab" onClick={(e) => { e.preventDefault(); e.stopPropagation() }} aria-label="Putar">
          <svg viewBox="0 0 24 24"><path d="M6 4l14 8-14 8V4z" /></svg>
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