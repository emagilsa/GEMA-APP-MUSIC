// src/components/organisms/Hero.jsx
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
        {/* Ilustrasi headphone SVG */}
        <svg viewBox="0 0 200 200" fill="none">
          <path
            d="M100 24a68 68 0 0 0-68 68v44a18 18 0 0 0 18 18h6a12 12 0 0 0 12-12v-36a12 12 0 0 0-12-12h-9a53 53 0 0 1 106 0h-9a12 12 0 0 0-12 12v36a12 12 0 0 0 12 12h6a18 18 0 0 0 18-18V92a68 68 0 0 0-68-68Z"
            fill="#ffffff"
            fillOpacity="0.95"
          />
          <circle cx="100" cy="100" r="3" fill="#ffffff" />
        </svg>

        {/* Dots carousel */}
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
