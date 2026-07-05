// src/component/organisms/Hero.jsx
import { useState } from 'react'
import Button from '../atoms/Button'

function Hero() {
  const [activeDot, setActiveDot] = useState(0)

  return (
    <section className="hero">
      <div className="hero-copy">
        <span className="eyebrow">Dengarkan Tanpa Batas</span>
        <h1>Temukan Playlist Favoritmu</h1>
        <p>Dengarkan jutaan lagu kapan saja dan di mana saja.</p>

        <Button variant="primary">
          <svg viewBox="0 0 24 24">
            <path d="M6 4l14 8-14 8V4z" />
          </svg>
          Mulai Mendengarkan
        </Button>
      </div>

      <div className="hero-art">
        <svg className="hero-waves" viewBox="0 0 400 300" aria-hidden="true">
          <path d="M0 210 C 60 180, 90 240, 150 210 S 270 170, 400 210" />
          <path d="M0 240 C 60 215, 90 265, 150 240 S 270 205, 400 240" />
        </svg>

        <div className="hero-illustration">
          <img
            className="vinyl"
            src="/hero-listening.png"
            alt="Orang mendengarkan musik dengan headphone"
          />

          <svg className="note note-1" viewBox="0 0 24 24" aria-hidden="true">
            <path fill="#ffffff" d="M12 3v10.55A4 4 0 1 0 14 17V7h4V3h-6z" />
          </svg>
          <svg className="note note-2" viewBox="0 0 24 24" aria-hidden="true">
            <path fill="#ffffff" d="M12 3v10.55A4 4 0 1 0 14 17V7h4V3h-6z" />
          </svg>
          <svg className="note note-3" viewBox="0 0 24 24" aria-hidden="true">
            <path fill="#ffffff" d="M9 3v10.55A4 4 0 1 0 11 17V6.83l7-1.4V3z" />
          </svg>

          <div className="equalizer">
            <span></span><span></span><span></span><span></span><span></span>
          </div>

          <div className="floating-card card-1">
            <img className="thumb" src="/chill.png" alt="Chill Hits" />
            <div className="card-text">
              <b>Chill Hits</b>
              <small>80 Songs</small>
            </div>
          </div>

          <div className="floating-card card-2">
            <img className="thumb" src="/fiersa.png" alt="Garis Waktu - Fiersa Besari" />
            <div className="card-text">
              <b>Garis Waktu</b>
              <small>Fiersa Besari</small>
            </div>
          </div>
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
    </section>
  )
}

export default Hero