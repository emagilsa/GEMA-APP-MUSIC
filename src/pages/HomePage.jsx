// src/pages/HomePage.jsx
import Navbar       from '../component/organisms/Navbar'
import Hero         from '../component/organisms/Hero'
import Footer       from '../component/organisms/Footer'
import PlaylistCard from '../component/molecules/PlaylistCard'
import GenreItem    from '../component/molecules/GenreItem'
import ArtistItem   from '../component/molecules/ArtistItem'
import TrendRow     from '../component/molecules/TrendRow'

/* ============================================================
   DATA — dipisah dari JSX agar komponen tetap bersih
   ============================================================ */

const playlists = [
  {
    id: 1,
    title: "Today's Hits",
    songCount: 50,
    coverClass: 'cover-1',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2c1 3-3 4-3 7a3 3 0 0 0 6 0c0-1-1-2-1-2 2 1 3 3 3 5a5 5 0 0 1-10 0c0-4 3-5 3-8 0-1 .5-1.5 2-2Z" />
      </svg>
    ),
  },
  {
    id: 2,
    title: 'Chill Vibes',
    songCount: 40,
    coverClass: 'cover-2',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <path d="M3 12c2-3 4-3 6 0s4 3 6 0 4-3 6 0" />
      </svg>
    ),
  },
  {
    id: 3,
    title: 'Workout Mix',
    songCount: 35,
    coverClass: 'cover-3',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <rect x="1" y="9" width="3" height="6" rx="1" />
        <rect x="20" y="9" width="3" height="6" rx="1" />
        <rect x="4" y="7" width="2" height="10" rx="1" />
        <rect x="18" y="7" width="2" height="10" rx="1" />
        <rect x="6" y="11" width="12" height="2" />
      </svg>
    ),
  },
  {
    id: 4,
    title: 'Happy Mood',
    songCount: 45,
    coverClass: 'cover-4',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M4 12H2M22 12h-2M5 5l1.5 1.5M17.5 17.5 19 19M5 19l1.5-1.5M17.5 6.5 19 5" />
      </svg>
    ),
  },
]

const genres = [
  {
    id: 1,
    label: 'Pop',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"
        strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3Z" />
        <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
        <path d="M12 19v4" /><path d="M8 23h8" />
      </svg>
    ),
  },
  {
    id: 2,
    label: 'Rock',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"
        strokeLinecap="round" strokeLinejoin="round">
        <circle cx="7" cy="17" r="4" />
        <path d="M9.5 14.5 18 6" /><path d="M16 4l4 4" /><path d="M14.5 6.5l3 3" />
      </svg>
    ),
  },
  {
    id: 3,
    label: 'Hip Hop',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"
        strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 14v-2a8 8 0 0 1 16 0v2" />
        <rect x="2" y="14" width="5" height="7" rx="2" />
        <rect x="17" y="14" width="5" height="7" rx="2" />
      </svg>
    ),
  },
  {
    id: 4,
    label: 'Jazz',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"
        strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 2v8a6 6 0 0 0 6 6 3 3 0 1 1-3 3" />
        <circle cx="9" cy="2" r="1.4" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    id: 5,
    label: 'K-Pop',
    icon: (
      <svg className="filled" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2l2.9 6.26L22 9.27l-5 4.87L18.18 21 12 17.27 5.82 21 7 14.14l-5-4.87 7.1-1.01L12 2Z" />
      </svg>
    ),
  },
  {
    id: 6,
    label: 'Indie',
    icon: (
      <svg className="filled" viewBox="0 0 24 24" fill="currentColor">
        <path d="M9 18V5l11-2v13a3 3 0 1 1-2-2.83V6.27l-7 1.27V18a3 3 0 1 1-2-2.83V18Z" />
      </svg>
    ),
  },
]

const artists = [
  { id: 1, name: 'Tulus',         initials: 'T',  avatarClass: 'av-1' },
  { id: 2, name: 'Nadin Amizah',  initials: 'NA', avatarClass: 'av-2' },
  { id: 3, name: 'Hindia',        initials: 'H',  avatarClass: 'av-3' },
  { id: 4, name: 'Pamungkas',     initials: 'P',  avatarClass: 'av-4' },
  { id: 5, name: 'Bilal Indrajaya', initials: 'BI', avatarClass: 'av-5' },
  { id: 6, name: 'Bruno Mars',    initials: 'BM', avatarClass: 'av-6' },
]

const trendsLeft = [
  { id: 1, rank: 1, title: 'Sialan',  artist: 'Adrian Khalif', duration: '3:45', thumbClass: 'cover-4' },
  { id: 2, rank: 2, title: 'Bertaut', artist: 'Nadin Amizah',  duration: '4:15', thumbClass: 'cover-1' },
  { id: 3, rank: 3, title: 'Nirwana', artist: 'Hindia',        duration: '4:28', thumbClass: 'cover-3' },
]

const trendsRight = [
  { id: 4, rank: 4, title: 'Laut',        artist: 'Tulus',   duration: '4:07', thumbClass: 'cover-2' },
  { id: 5, rank: 5, title: 'Hanya Rindu', artist: 'Andmesh', duration: '4:18', thumbClass: 'cover-1' },
]

/* ============================================================
   KOMPONEN
   ============================================================ */
function HomePage() {
  return (
    <>
      <Navbar />

      <div className="page-content">

        {/* ---- Hero ---- */}
        <Hero />

        {/* ---- Playlist Populer ---- */}
        <section className="section">
          <div className="section-head">
            <h2>Playlist Populer</h2>
            <a href="#">Lihat Semua</a>
          </div>
          <div className="playlist-grid">
            {playlists.map(({ id, title, songCount, coverClass, icon }) => (
              <PlaylistCard
                key={id}
                title={title}
                songCount={songCount}
                coverClass={coverClass}
                icon={icon}
              />
            ))}
          </div>
        </section>

        {/* ---- Genre Musik ---- */}
        <section className="section">
          <div className="section-head">
            <h2>Genre Musik</h2>
            <a href="#">Lihat Semua</a>
          </div>
          <div className="genre-row">
            {genres.map(({ id, label, icon }) => (
              <GenreItem key={id} label={label} icon={icon} />
            ))}
          </div>
        </section>

        {/* ---- Artis Favorit ---- */}
        <section className="section">
          <div className="section-head">
            <h2>Artis Favorit</h2>
            <a href="#">Lihat Semua</a>
          </div>
          <div className="artist-row">
            {artists.map(({ id, name, initials, avatarClass }) => (
              <ArtistItem
                key={id}
                name={name}
                initials={initials}
                avatarClass={avatarClass}
              />
            ))}
          </div>
        </section>

        {/* ---- Trending Minggu Ini ---- */}
        <section className="section">
          <div className="section-head">
            <h2>Trending Minggu Ini</h2>
            <a href="#">Lihat Semua</a>
          </div>
          <div className="trending-grid">
            <div>
              {trendsLeft.map(({ id, rank, title, artist, duration, thumbClass }) => (
                <TrendRow
                  key={id}
                  rank={rank}
                  title={title}
                  artist={artist}
                  duration={duration}
                  thumbClass={thumbClass}
                />
              ))}
            </div>
            <div>
              {trendsRight.map(({ id, rank, title, artist, duration, thumbClass }) => (
                <TrendRow
                  key={id}
                  rank={rank}
                  title={title}
                  artist={artist}
                  duration={duration}
                  thumbClass={thumbClass}
                />
              ))}
            </div>
          </div>
        </section>

      </div>

      <Footer />
    </>
  )
}

export default HomePage
