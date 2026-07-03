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
        <img
          src="https://images.unsplash.com/photo-1598387993441-a364f854cfbe?w=800&q=80"
          alt="Hero Gema"
          className="hero-img"
        />
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