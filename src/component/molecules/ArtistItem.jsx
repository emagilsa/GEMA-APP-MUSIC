// src/component/molecules/ArtistItem.jsx
function ArtistItem({ name, initials, image, href = '#' }) {
  return (
    <a href={href} className="artist-item">
      <span className="artist-avatar">
        {image
          ? <img src={image} alt={name} />
          : initials
        }
      </span>
      <span className="label">{name}</span>
    </a>
  )
}

export default ArtistItem