// src/components/molecules/GenreItem.jsx

/**
 * GenreItem — item genre musik berbentuk lingkaran + label
 * Props:
 *   label : string — nama genre
 *   icon  : JSX   — ikon SVG di dalam lingkaran
 *   href  : string — link tujuan (default: '#')
 */
function GenreItem({ label, icon, href = '#' }) {
  return (
    <a href={href} className="genre-item">
      <span className="genre-circle">{icon}</span>
      <span className="label">{label}</span>
    </a>
  )
}

export default GenreItem
