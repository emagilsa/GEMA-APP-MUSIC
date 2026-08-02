// src/component/organisms/Hero.jsx
import { useState } from 'react'
import Button from '../atoms/Button'

const HeartIcon = ({ filled }) => (
  <svg viewBox="0 0 24 24" fill={filled ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 20s-7-4.4-9.5-8.8C.7 8 2.6 4.5 6 4c2-.3 3.7.7 6 3 2.3-2.3 4-3.3 6-3 3.4.5 5.3 4 3.5 7.2C19 15.6 12 20 12 20Z" />
  </svg>
)
const PlayIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z" /></svg>
)

function Hero() {
  const [activeDot, setActiveDot] = useState(1)
  const [liked, setLiked] = useState(false)

  return (
    <section className="hero">
      <img className="hero-photo" src="/auth-bg-login.jpg" alt="" />
      <div className="hero-scrim" />

      <div className="hero-copy">
        <span className="eyebrow">Weekly Mix</span>
        <h1>
          Let the <span className="accent-grad">music</span><br />
          heal your soul.
        </h1>

        <div className="hero-actions">
          <Button variant="primary">
            <PlayIcon />
            Play Now
          </Button>
          <button
            className={'hero-heart' + (liked ? ' active' : '')}
            onClick={() => setLiked(!liked)}
            aria-label={liked ? 'Hapus dari favorit' : 'Tambah ke favorit'}
          >
            <HeartIcon filled={liked} />
          </button>
        </div>

        <div className="hero-dots">
          {[0, 1, 2, 3].map((i) => (
            <span
              key={i}
              className={activeDot === i ? 'active' : ''}
              onClick={() => setActiveDot(i)}
            />
          ))}
        </div>
      </div>

      <a href="#" className="hero-nowplaying">
        <img src="/auth-bg-login.jpg" alt="" />
        <div>
          <b>Midnight Drive</b>
          <small>Arin Ray</small>
        </div>
        <span className="hero-nowplaying-play"><PlayIcon /></span>
      </a>
    </section>
  )
}

export default Hero
