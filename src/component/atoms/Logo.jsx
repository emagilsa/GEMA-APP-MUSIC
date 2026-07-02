// src/components/atoms/Logo.jsx
import { Link } from 'react-router-dom'

function Logo({ to = '/home' }) {
  return (
    <Link to={to} className="logo">
      <span className="logo-icon">
        <svg viewBox="0 0 24 24">
          <path d="M9 18V5l11-2v13a3 3 0 1 1-2-2.83V6.27l-7 1.27V18a3 3 0 1 1-2-2.83V18Z" />
        </svg>
      </span>
      <span className="word">Gema</span>
    </Link>
  )
}

export default Logo
