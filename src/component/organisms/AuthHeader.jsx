// src/components/organisms/AuthHeader.jsx
import Logo from '../atoms/Logo'

/**
 * AuthHeader — header di atas kartu auth (login/register)
 * Props:
 *   tagline : string — teks di bawah logo (default: 'Your Music, Your Playlist')
 */
function AuthHeader({ tagline = 'Your Music, Your Playlist' }) {
  return (
    <div className="auth-header">
      <Logo to="/home" />
      <p className="tagline">{tagline}</p>
    </div>
  )
}

export default AuthHeader
