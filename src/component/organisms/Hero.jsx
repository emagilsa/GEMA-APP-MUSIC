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
        <div className="hero-illustration">
          <img
            className="vinyl"
            src="/hero.jpg"
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
        </div>

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