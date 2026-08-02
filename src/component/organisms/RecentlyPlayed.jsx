// src/component/organisms/RecentlyPlayed.jsx
const PlayIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z" /></svg>
)

const tracks = [
  { id: 1, title: 'Midnight Drive', artist: 'Arin Ray',            cover: 'auth-bg-login.jpg' },
  { id: 2, title: 'Eyes Closed',    artist: 'Ed Sheeran',           cover: 'hindia.jpg' },
  { id: 3, title: 'Flowers',        artist: 'Miley Cyrus',          cover: 'nadin.jpg' },
  { id: 4, title: 'Calm Down',      artist: 'Rema & Selena Gomez',  cover: 'laut.jpg' },
  { id: 5, title: 'Die For You',    artist: 'The Weeknd',           cover: 'bruno.jpg' },
]

function RecentlyPlayed() {
  return (
    <div className="recently-played">
      <div className="recently-played-head">
        <h3>Recently Played</h3>
        <a href="#">See All</a>
      </div>

      <ul className="recently-played-list">
        {tracks.map((t) => (
          <li key={t.id}>
            <img src={`/${t.cover}`} alt={t.title} />
            <div className="recently-played-meta">
              <b>{t.title}</b>
              <small>{t.artist}</small>
            </div>
            <button className="recently-played-play" aria-label={`Putar ${t.title}`}>
              <PlayIcon />
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default RecentlyPlayed
