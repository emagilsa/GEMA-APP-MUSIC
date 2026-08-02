// src/pages/HomePage.jsx
import { useState } from 'react'
import Sidebar        from '../component/organisms/Sidebar'
import Hero            from '../component/organisms/Hero'
import RecentlyPlayed   from '../component/organisms/RecentlyPlayed'
import PlayerBar       from '../component/organisms/PlayerBar'
import Footer          from '../component/organisms/Footer'
import Button          from '../component/atoms/Button'
import PlaylistCard    from '../component/molecules/PlaylistCard'
import GenreItem       from '../component/molecules/GenreItem'
import ArtistItem      from '../component/molecules/ArtistItem'
import TrendRow        from '../component/molecules/TrendRow'
import { usePlaylists } from '../hooks/usePlaylists'

/* ============================================================
   DATA STATIS
   ============================================================ */

/* -- Made For You (sesuai referensi desain) -- */
const madeForYou = [
  { id: 1, title: 'Chill Mix',    subtitle: 'Relax and unwind', image: 'laut.jpg' },
  { id: 2, title: 'Focus Mix',    subtitle: 'Stay focused',     image: 'hindia.jpg' },
  { id: 3, title: 'Energy Boost', subtitle: 'High energy vibes',image: 'sialan.jpg' },
  { id: 4, title: 'Night Ride',   subtitle: 'Drive and chill',  image: 'bertaut.jpg' },
]

/* -- Popular Playlists (sesuai referensi desain) -- */
const popularPlaylistsDemo = [
  { id: 1, title: 'Top Hits',     songCount: 50, image: 'nirwana.jpg' },
  { id: 2, title: 'Viral Hits',   songCount: 50, image: 'bruno.jpg' },
  { id: 3, title: 'Relax & Chill',songCount: 50, image: 'laut.jpg' },
  { id: 4, title: 'Workout Hits', songCount: 50, image: 'pamungkas.jpg' },
]

const genres = [
  { id: 1, label: 'Pop',    image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=200&q=80' },
  { id: 2, label: 'Rock',   image: 'https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?w=200&q=80' },
  { id: 3, label: 'Hip Hop',image: 'hiphop.png' },
  { id: 4, label: 'Jazz',   image: 'https://images.unsplash.com/photo-1415201364774-f6f0bb35f28f?w=200&q=80' },
  { id: 5, label: 'K-Pop',  image: 'kpop.png' },
  { id: 6, label: 'Indie',  image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=200&q=80' },
]

const artists = [
  { id: 1, name: 'Tulus',           initials: 'T',  image: 'Tulus.jpg' },
  { id: 2, name: 'Nadin Amizah',    initials: 'NA', image: 'nadin.jpg' },
  { id: 3, name: 'Hindia',          initials: 'H',  image: 'hindia.jpg' },
  { id: 4, name: 'Pamungkas',       initials: 'P',  image: 'pamungkas.jpg' },
  { id: 5, name: 'Bilal Indrajaya', initials: 'BI', image: 'bilal.jpg' },
  { id: 6, name: 'Bruno Mars',      initials: 'BM', image: 'bruno.jpg' },
]

const trendsLeft = [
  { id: 1, rank: 1, title: 'Sialan',  artist: 'Adrian Khalif', duration: '3:45', image: 'sialan.jpg' },
  { id: 2, rank: 2, title: 'Bertaut', artist: 'Nadin Amizah',  duration: '4:15', image: 'bertaut.jpg' },
  { id: 3, rank: 3, title: 'Nirwana', artist: 'Hindia',        duration: '4:28', image: 'nirwana.jpg' },
]

const trendsRight = [
  { id: 4, rank: 4, title: 'Laut',        artist: 'Tulus',   duration: '4:07', image: 'laut.jpg' },
  { id: 5, rank: 5, title: 'Hanya Rindu', artist: 'Andmesh', duration: '4:18', image: 'hanyarindu.jpg' },
]

const emptyForm = { title: '', songCount: '', image: '' }

/* ---- Ikon topbar ---- */
const SearchIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="7" /><path d="m21 21-4.3-4.3" />
  </svg>
)
const BellIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9" />
    <path d="M13.7 21a2 2 0 0 1-3.4 0" />
  </svg>
)
const ChevronDownIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
)

/* ============================================================
   KOMPONEN
   ============================================================ */
function HomePage() {
  const {
    playlists,
    loading,
    error,
    createPlaylist,
    editPlaylist,
    removePlaylist,
  } = usePlaylists()

  const [form, setForm] = useState(emptyForm)
  const [editingId, setEditingId] = useState(null)
  const [formError, setFormError] = useState('')
  const [submitting, setSubmitting] = useState(false)

  const isEditing = editingId !== null

  function handleFormChange(e) {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  function resetForm() {
    setForm(emptyForm)
    setEditingId(null)
    setFormError('')
  }

  async function handleSubmit(e) {
    e.preventDefault()

    if (!form.title.trim() || !form.songCount || !form.image.trim()) {
      setFormError('Semua kolom wajib diisi.')
      return
    }

    setSubmitting(true)
    setFormError('')
    try {
      const payload = {
        title: form.title,
        songCount: Number(form.songCount),
        image: form.image,
      }

      if (isEditing) {
        await editPlaylist(editingId, payload)
      } else {
        await createPlaylist(payload)
      }
      resetForm()
    } catch (err) {
      setFormError('Gagal menyimpan ke server. Coba lagi.')
    } finally {
      setSubmitting(false)
    }
  }

  function handleEdit(playlist) {
    setEditingId(playlist.id)
    setForm({
      title: playlist.title,
      songCount: String(playlist.songCount),
      image: playlist.image,
    })
    setFormError('')
  }

  async function handleDelete(id) {
    try {
      await removePlaylist(id)
      if (editingId === id) resetForm()
    } catch (err) {
      setFormError('Gagal menghapus di server. Coba lagi.')
    }
  }

  return (
    <div className="app-shell">
      <Sidebar />

      <div className="app-main">

        {/* ---- Topbar ---- */}
        <header className="topbar">
          <div className="topbar-search">
            <SearchIcon />
            <input type="text" placeholder="Search songs, artists, podcasts..." />
          </div>
          <div className="topbar-right">
            <button className="icon-btn" aria-label="Notifikasi">
              <BellIcon />
              <span className="dot"></span>
            </button>
            <button className="topbar-profile">
              <span className="topbar-avatar" />
              Agil
              <ChevronDownIcon />
            </button>
          </div>
        </header>

        <div className="app-content">

          {/* ---- Hero + Recently Played ---- */}
          <div className="hero-row">
            <Hero />
            <RecentlyPlayed />
          </div>

          {/* ---- Made For You + Popular Playlists (berdampingan, sesuai referensi) ---- */}
          <div className="section-pair">
            <section className="section section-flex-main">
              <div className="section-head">
                <h2>Made For You</h2>
                <a href="#">See All</a>
              </div>
              <div className="mini-grid">
                {madeForYou.map((p) => (
                  <PlaylistCard key={p.id} title={p.title} subtitle={p.subtitle} image={p.image} />
                ))}
              </div>
            </section>

            <section className="section section-flex-side">
              <div className="section-head">
                <h2>Popular Playlists</h2>
              </div>
              <div className="mini-grid mini-grid-sm">
                {popularPlaylistsDemo.map((p) => (
                  <PlaylistCard key={p.id} title={p.title} songCount={p.songCount} image={p.image} />
                ))}
              </div>
            </section>
          </div>

          {/* ---- Playlist Populer (fitur CRUD — tambahan) ---- */}
          <section className="section">
            <div className="section-head">
              <h2>Playlist Populer</h2>
              <a href="#">Lihat Semua</a>
            </div>

            <form className="playlist-manager" onSubmit={handleSubmit}>
              <div className="playlist-manager-fields">
                <div className="field-inline">
                  <label htmlFor="pl-title">Judul Playlist</label>
                  <input
                    id="pl-title"
                    name="title"
                    type="text"
                    placeholder="Misal: Lagu Santai"
                    value={form.title}
                    onChange={handleFormChange}
                    disabled={submitting}
                  />
                </div>
                <div className="field-inline field-inline-sm">
                  <label htmlFor="pl-count">Jumlah Lagu</label>
                  <input
                    id="pl-count"
                    name="songCount"
                    type="number"
                    min="0"
                    placeholder="0"
                    value={form.songCount}
                    onChange={handleFormChange}
                    disabled={submitting}
                  />
                </div>
                <div className="field-inline">
                  <label htmlFor="pl-image">URL Gambar Cover</label>
                  <input
                    id="pl-image"
                    name="image"
                    type="text"
                    placeholder="https://..."
                    value={form.image}
                    onChange={handleFormChange}
                    disabled={submitting}
                  />
                </div>
              </div>

              {formError && <p className="field-hint error">{formError}</p>}

              <div className="playlist-manager-actions">
                <Button type="submit" variant="primary">
                  {submitting ? 'Menyimpan...' : isEditing ? 'Update Playlist' : 'Tambah Playlist'}
                </Button>
                {isEditing && (
                  <Button type="button" variant="white" onClick={resetForm}>
                    Batal
                  </Button>
                )}
              </div>
            </form>

            {loading && <p className="playlist-empty">Memuat data playlist...</p>}
            {!loading && error && <p className="field-hint error">{error}</p>}

            {!loading && !error && (
              <div className="playlist-grid">
                {playlists.map((p) => (
                  <PlaylistCard
                    key={p.id}
                    title={p.title}
                    songCount={p.songCount}
                    image={p.image}
                    onEdit={() => handleEdit(p)}
                    onDelete={() => handleDelete(p.id)}
                  />
                ))}
                {playlists.length === 0 && (
                  <p className="playlist-empty">Belum ada playlist. Tambahkan lewat form di atas.</p>
                )}
              </div>
            )}
          </section>

          {/* ---- Genre Musik (tambahan) ---- */}
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

          {/* ---- Trending Now + Popular Artists (berdampingan, sesuai referensi) ---- */}
          <div className="section-pair">
            <section className="section section-flex-main">
              <div className="section-head">
                <h2>Trending Now</h2>
                <a href="#">See All</a>
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

            <section className="section section-flex-side">
              <div className="section-head">
                <h2>Popular Artists</h2>
              </div>
              <div className="artist-row artist-row-compact">
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
          </div>

          <Footer />
        </div>
      </div>

      <PlayerBar />
    </div>
  )
}

export default HomePage
