// src/component/molecules/TrendRow.jsx
function TrendRow({ rank, title, artist, duration, image }) {
  return (
    <div className="trend-row">
      <span className="rank">{rank}</span>
      <span className="trend-thumb">
        {image && <img src={image} alt={title} />}
      </span>
      <div className="trend-meta">
        <div className="t-title">{title}</div>
        <div className="t-artist">{artist}</div>
      </div>
      <span className="trend-duration">{duration}</span>
      <button className="trend-play" aria-label="Putar">
        <svg viewBox="0 0 24 24"><path d="M6 4l14 8-14 8V4z" /></svg>
      </button>
    </div>
  )
}

export default TrendRow