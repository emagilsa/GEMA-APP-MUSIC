// src/component/organisms/PlayerBar.jsx
import { useState } from 'react'

const HeartIcon = ({ filled }) => (
  <svg viewBox="0 0 24 24" fill={filled ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 20s-7-4.4-9.5-8.8C.7 8 2.6 4.5 6 4c2-.3 3.7.7 6 3 2.3-2.3 4-3.3 6-3 3.4.5 5.3 4 3.5 7.2C19 15.6 12 20 12 20Z" />
  </svg>
)
const ShuffleIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="m18 4 3 3-3 3M21 7H14.5c-1 0-1.9.5-2.5 1.3L9 13" />
    <path d="m18 20 3-3-3-3M3 7h5.5c1 0 1.9.5 2.5 1.3M21 17h-6.5c-1 0-1.9-.5-2.5-1.3L3 7" />
  </svg>
)
const SkipBackIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M6 5h2v14H6zM20 5v14l-11-7z" /></svg>
)
const SkipFwdIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M16 5h2v14h-2zM4 5v14l11-7z" /></svg>
)
const PlayFillIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z" /></svg>
)
const PauseFillIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M7 5h4v14H7zM13 5h4v14h-4z" /></svg>
)
const RepeatIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="m17 2 4 4-4 4" /><path d="M3 11V9a4 4 0 0 1 4-4h14" />
    <path d="m7 22-4-4 4-4" /><path d="M21 13v2a4 4 0 0 1-4 4H3" />
  </svg>
)
const VolumeIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 9v6h4l5 5V4L8 9H4Z" /><path d="M17 8a5 5 0 0 1 0 8" />
  </svg>
)
const SlidersIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 6h10M18 6h2M4 12h2M8 12h12M4 18h14M20 18h0" />
    <circle cx="16" cy="6" r="2" /><circle cx="6" cy="12" r="2" /><circle cx="18" cy="18" r="2" />
  </svg>
)

function PlayerBar({
  track = { title: 'Midnight Drive', artist: 'Arin Ray', cover: '/auth-bg-login.jpg' },
}) {
  const [playing, setPlaying] = useState(true)
  const [liked, setLiked] = useState(true)
  const [progress, setProgress] = useState(38) // persen
  const [volume, setVolume] = useState(70)

  return (
    <footer className="player-bar">
      <div className="player-track">
        <img src={track.cover} alt={track.title} />
        <div>
          <b>{track.title}</b>
          <small>{track.artist}</small>
        </div>
        <button
          className={'player-heart' + (liked ? ' active' : '')}
          onClick={() => setLiked(!liked)}
          aria-label={liked ? 'Hapus dari favorit' : 'Tambah ke favorit'}
        >
          <HeartIcon filled={liked} />
        </button>
      </div>

      <div className="player-center">
        <div className="player-controls">
          <button aria-label="Acak"><ShuffleIcon /></button>
          <button aria-label="Sebelumnya"><SkipBackIcon /></button>
          <button
            className="player-play"
            onClick={() => setPlaying(!playing)}
            aria-label={playing ? 'Jeda' : 'Putar'}
          >
            {playing ? <PauseFillIcon /> : <PlayFillIcon />}
          </button>
          <button aria-label="Berikutnya"><SkipFwdIcon /></button>
          <button aria-label="Ulangi"><RepeatIcon /></button>
        </div>
        <div className="player-progress-row">
          <span>1:24</span>
          <input
            type="range"
            className="player-progress"
            min="0" max="100"
            value={progress}
            onChange={(e) => setProgress(Number(e.target.value))}
            aria-label="Progres lagu"
          />
          <span>3:42</span>
        </div>
      </div>

      <div className="player-right">
        <VolumeIcon />
        <input
          type="range"
          className="player-volume"
          min="0" max="100"
          value={volume}
          onChange={(e) => setVolume(Number(e.target.value))}
          aria-label="Volume"
        />
        <button aria-label="Pengaturan"><SlidersIcon /></button>
      </div>
    </footer>
  )
}

export default PlayerBar
