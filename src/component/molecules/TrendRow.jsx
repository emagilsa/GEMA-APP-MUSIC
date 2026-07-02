// src/components/molecules/TrendRow.jsx

/**
 * TrendRow — baris lagu trending
 * Props:
 *   rank       : number — nomor urut
 *   title      : string — judul lagu
 *   artist     : string — nama artis
 *   duration   : string — durasi lagu (contoh: '3:45')
 *   thumbClass : string — class CSS thumbnail (cover-1 s/d cover-4)
 */
function TrendRow({ rank, title, artist, duration, thumbClass = 'cover-1' }) {
  return (
    <div className="trend-row">
      <span className="rank">{rank}</span>
      <span className={`trend-thumb ${thumbClass}`}></span>
      <div className="trend-meta">
        <div className="t-title">{title}</div>
        <div className="t-artist">{artist}</div>
      </div>
      <span className="trend-duration">{duration}</span>
      <button className="trend-play" aria-label="Putar">
        <svg viewBox="0 0 24 24">
          <path d="M6 4l14 8-14 8V4z" />
        </svg>
      </button>
    </div>
  )
}

export default TrendRow
