// src/components/molecules/ArtistItem.jsx

/**
 * ArtistItem — avatar artis + nama
 * Props:
 *   name       : string — nama artis
 *   initials   : string — inisial untuk avatar (maks 2 huruf)
 *   avatarClass: string — class CSS gradient avatar (av-1 s/d av-6)
 *   href       : string — link tujuan (default: '#')
 */
function ArtistItem({ name, initials, avatarClass = 'av-1', href = '#' }) {
  return (
    <a href={href} className="artist-item">
      <span className={`artist-avatar ${avatarClass}`}>{initials}</span>
      <span className="label">{name}</span>
    </a>
  )
}

export default ArtistItem
