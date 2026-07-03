// src/pages/HomePage.jsx
import Navbar       from '../component/organisms/Navbar'
import Hero         from '../component/organisms/Hero'
import Footer       from '../component/organisms/Footer'
import PlaylistCard from '../component/molecules/PlaylistCard'
import GenreItem    from '../component/molecules/GenreItem'
import ArtistItem   from '../component/molecules/ArtistItem'
import TrendRow     from '../component/molecules/TrendRow'

/* ============================================================
   DATA
   ============================================================ */

const playlists = [
  {
    id: 1,
    title: "Today's Hits",
    songCount: 50,
    image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400&q=80',
  },
  {
    id: 2,
    title: 'Chill Vibes',
    songCount: 40,
    image: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=400&q=80',
  },
  {
    id: 3,
    title: 'Workout Mix',
    songCount: 35,
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&q=80',
  },
  {
    id: 4,
    title: 'Happy Mood',
    songCount: 45,
    image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&q=80',
  },
]

const genres = [
  { id: 1, label: 'Pop',    image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=200&q=80' },
  { id: 2, label: 'Rock',   image: 'https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?w=200&q=80' },
  { id: 3, label: 'Hip Hop',image: 'https://images.unsplash.com/photo-1547355253-ff0740f859b4?w=200&q=80' },
  { id: 4, label: 'Jazz',   image: 'https://images.unsplash.com/photo-1415201364774-f6f0bb35f28f?w=200&q=80' },
  { id: 5, label: 'K-Pop',  image: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=200&q=80' },
  { id: 6, label: 'Indie',  image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=200&q=80' },
]

const artists = [
  { id: 1, name: 'Tulus',           initials: 'T',  image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80' },
  { id: 2, name: 'Nadin Amizah',    initials: 'NA', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80' },
  { id: 3, name: 'Hindia',          initials: 'H',  image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80' },
  { id: 4, name: 'Pamungkas',       initials: 'P',  image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&q=80' },
  { id: 5, name: 'Bilal Indrajaya', initials: 'BI', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80' },
  { id: 6, name: 'Bruno Mars',      initials: 'BM', image: 'https://images.unsplash.com/photo-1463453091185-61582044d556?w=200&q=80' },
]

const trendsLeft = [
  { id: 1, rank: 1, title: 'Sialan',  artist: 'Adrian Khalif', duration: '3:45', image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=100&q=80' },
  { id: 2, rank: 2, title: 'Bertaut', artist: 'Nadin Amizah',  duration: '4:15', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80' },
  { id: 3, rank: 3, title: 'Nirwana', artist: 'Hindia',        duration: '4:28', image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=100&q=80' },
]

const trendsRight = [
  { id: 4, rank: 4, title: 'Laut',        artist: 'Tulus',   duration: '4:07', image: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=100&q=80' },
  { id: 5, rank: 5, title: 'Hanya Rindu', artist: 'Andmesh', duration: '4:18', image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=100&q=80' },
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
            {playlists.map(({ id, title, songCount, image }) => (
              <PlaylistCard
                key={id}
                title={title}
                songCount={songCount}
                image={image}
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
            {genres.map(({ id, label, image }) => (
              <GenreItem key={id} label={label} image={image} />
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
            {artists.map(({ id, name, initials, image }) => (
              <ArtistItem
                key={id}
                name={name}
                initials={initials}
                image={image}
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
              {trendsLeft.map(({ id, rank, title, artist, duration, image }) => (
                <TrendRow key={id} rank={rank} title={title}
                  artist={artist} duration={duration} image={image} />
              ))}
            </div>
            <div>
              {trendsRight.map(({ id, rank, title, artist, duration, image }) => (
                <TrendRow key={id} rank={rank} title={title}
                  artist={artist} duration={duration} image={image} />
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