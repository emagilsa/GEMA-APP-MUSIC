// src/pages/HomePage.jsx
import { useState } from 'react'
import Navbar       from '../component/organisms/Navbar'
import Hero         from '../component/organisms/Hero'
import Footer       from '../component/organisms/Footer'
import Button       from '../component/atoms/Button'
import PlaylistCard from '../component/molecules/PlaylistCard'
import GenreItem    from '../component/molecules/GenreItem'
import ArtistItem   from '../component/molecules/ArtistItem'
import TrendRow     from '../component/molecules/TrendRow'

/* ============================================================
   DATA AWAL (playlist sekarang dikelola lewat useState di bawah)
   ============================================================ */

const initialPlaylists = [
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
  { id: 3, label: 'Hip Hop',image: 'hiphop.png' },
  { id: 4, label: 'Jazz',   image: 'https://images.unsplash.com/photo-1415201364774-f6f0bb35f28f?w=200&q=80' },
  { id: 5, label: 'K-Pop',  image: 'kpop.png' },
  { id: 6, label: 'Indie',  image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=200&q=80' },
]

const artists = [
  { id: 1, name: 'Tulus',           initials: 'T',  image: 'Tulus.jpg' },
  { id: 2, name: 'Nadin Amizah',    initials: 'NA', image: 'nadin.jpg' },
  { id: 3, name: 'Hindia',          initials: 'H',  image: 'baskara.png' },
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

/* ============================================================
   KOMPONEN
   ============================================================ */
function HomePage() {
  // ---- State: array of objects untuk playlist (CRUD) ----
  const [playlists, setPlaylists] = useState(initialPlaylists)
  const [form, setForm] = useState(emptyForm)
  const [editingId, setEditingId] = useState(null)
  const [formError, setFormError] = useState('')

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

  // ---- CREATE & UPDATE (form yang sama dipakai untuk keduanya) ----
  function handleSubmit(e) {
    e.preventDefault()

    if (!form.title.trim() || !form.songCount || !form.image.trim()) {
      setFormError('Semua kolom wajib diisi.')
      return
    }

    if (isEditing) {
      // UPDATE: ganti playlist yang id-nya cocok
      setPlaylists((prev) =>
        prev.map((p) =>
          p.id === editingId
            ? { ...p, title: form.title, songCount: Number(form.songCount), image: form.image }
            : p
        )
      )
    } else {
      // CREATE: tambah playlist baru ke array
      const newPlaylist = {
        id: Date.now(),
        title: form.title,
        songCount: Number(form.songCount),
        image: form.image,
      }
      setPlaylists((prev) => [...prev, newPlaylist])
    }

    resetForm()
  }

  // ---- READ (untuk isi form saat edit) ----
  function handleEdit(playlist) {
    setEditingId(playlist.id)
    setForm({
      title: playlist.title,
      songCount: String(playlist.songCount),
      image: playlist.image,
    })
    setFormError('')
  }

  // ---- DELETE ----
  function handleDelete(id) {
    setPlaylists((prev) => prev.filter((p) => p.id !== id))
    if (editingId === id) resetForm()
  }

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

          {/* ---- Form Kelola Playlist (Create / Update) ---- */}
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
                />
              </div>
            </div>

            {formError && <p className="field-hint error">{formError}</p>}

            <div className="playlist-manager-actions">
              <Button type="submit" variant="primary">
                {isEditing ? 'Update Playlist' : 'Tambah Playlist'}
              </Button>
              {isEditing && (
                <Button type="button" variant="white" onClick={resetForm}>
                  Batal
                </Button>
              )}
            </div>
          </form>

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
