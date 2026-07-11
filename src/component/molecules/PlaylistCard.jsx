// src/component/molecules/PlaylistCard.jsx
function PlaylistCard({ title, songCount, image, href = '#', onEdit, onDelete }) {
  return (
    <a href={href} className="playlist-card">
      <div className="playlist-cover">
        <img src={image} alt={title} />
        <button className="play-fab" onClick={(e) => { e.preventDefault(); e.stopPropagation() }} aria-label="Putar">
          <svg viewBox="0 0 24 24"><path d="M6 4l14 8-14 8V4z" /></svg>
        </button>

        {(onEdit || onDelete) && (
          <div className="card-manage-actions">
            {onEdit && (
              <button
                className="manage-btn manage-edit"
                onClick={(e) => { e.preventDefault(); e.stopPropagation(); onEdit() }}
                aria-label={`Edit ${title}`}
              >
                <svg viewBox="0 0 24 24"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04a1 1 0 0 0 0-1.41l-2.34-2.34a1 1 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" /></svg>
              </button>
            )}
            {onDelete && (
              <button
                className="manage-btn manage-delete"
                onClick={(e) => { e.preventDefault(); e.stopPropagation(); onDelete() }}
                aria-label={`Hapus ${title}`}
              >
                <svg viewBox="0 0 24 24"><path d="M6 7h12l-1 13H7L6 7zm3-3h6l1 2H8l1-2zM9 10v7M12 10v7M15 10v7" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" /></svg>
              </button>
            )}
          </div>
        )}
      </div>
      <div className="playlist-info">
        <div className="title">{title}</div>
        <div className="sub">{songCount} Lagu</div>
      </div>
    </a>
  )
}

export default PlaylistCard
