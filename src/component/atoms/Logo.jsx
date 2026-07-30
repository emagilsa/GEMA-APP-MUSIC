// src/component/atoms/Logo.jsx
import { Link } from 'react-router-dom'

function Logo({ to = '/home' }) {
  return (
    <Link to={to} className="logo">
      <span className="logo-icon logo-icon--mark">
        <svg viewBox="0 0 100 100" aria-hidden="true">
          <defs>
            <linearGradient id="gemaMarkGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ec4899" />
              <stop offset="100%" stopColor="#8b5cf6" />
            </linearGradient>
          </defs>
          <circle
            cx="50" cy="50" r="44" fill="none"
            stroke="url(#gemaMarkGradient)" strokeWidth="7" strokeLinecap="round"
            strokeDasharray="218.85 57.61" strokeDashoffset="-28.81"
          />
          <circle
            cx="50" cy="50" r="33" fill="none"
            stroke="url(#gemaMarkGradient)" strokeWidth="7" strokeLinecap="round"
            strokeDasharray="164.14 43.21" strokeDashoffset="-21.61"
          />
          <circle
            cx="50" cy="50" r="22" fill="none"
            stroke="url(#gemaMarkGradient)" strokeWidth="7" strokeLinecap="round"
            strokeDasharray="109.42 28.81" strokeDashoffset="-14.41"
          />
          <path d="M72 50 H94" stroke="url(#gemaMarkGradient)" strokeWidth="7" strokeLinecap="round" />
          <circle cx="50" cy="50" r="5" fill="url(#gemaMarkGradient)" />
        </svg>
      </span>
      <span className="word">Gema</span>
    </Link>
  )
}

export default Logo
