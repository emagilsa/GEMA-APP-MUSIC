// src/component/molecules/GenreItem.jsx
function GenreItem({ label, image, href = '#' }) {
  return (
    <a href={href} className="genre-item">
      <span className="genre-circle">
        <img src={image} alt={label} />
      </span>
      <span className="label">{label}</span>
    </a>
  )
}

export default GenreItem