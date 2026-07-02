// src/components/organisms/Footer.jsx
import Logo from '../atoms/Logo'

// Data kolom footer
const footerCols = [
  {
    heading: 'Company',
    links: ['FAQ', 'Kontak Kami'],
  },
  {
    heading: 'Legal',
    links: ['Privasi', 'Syarat & Ketentuan'],
  },
  {
    heading: 'Support',
    links: ['Bantuan', 'Pusat Bantuan'],
  },
]

// Ikon sosmed
const socials = [
  {
    label: 'Facebook',
    path: 'M22 12a10 10 0 1 0-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.4h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.4v7A10 10 0 0 0 22 12Z',
  },
  {
    label: 'Instagram',
    path: 'M12 2c2.7 0 3.1 0 4.1.1 1.1 0 1.8.2 2.5.5.7.3 1.2.6 1.8 1.2.6.6.9 1.1 1.2 1.8.3.7.5 1.4.5 2.5.1 1 .1 1.4.1 4.1s0 3.1-.1 4.1c0 1.1-.2 1.8-.5 2.5-.3.7-.6 1.2-1.2 1.8-.6.6-1.1.9-1.8 1.2-.7.3-1.4.5-2.5.5-1 .1-1.4.1-4.1.1s-3.1 0-4.1-.1c-1.1 0-1.8-.2-2.5-.5-.7-.3-1.2-.6-1.8-1.2-.6-.6-.9-1.1-1.2-1.8-.3-.7-.5-1.4-.5-2.5C2 15.1 2 14.7 2 12s0-3.1.1-4.1c0-1.1.2-1.8.5-2.5.3-.7.6-1.2 1.2-1.8.6-.6 1.1-.9 1.8-1.2.7-.3 1.4-.5 2.5-.5C8.9 2 9.3 2 12 2Z',
  },
  {
    label: 'Twitter',
    path: 'M18.9 3H22l-7 8 8.2 10h-6.4l-5-6.5L5.7 21H2.6l7.5-8.6L2.3 3h6.5l4.5 5.9Zm-1.1 16.2h1.7L7.3 4.7H5.5Z',
  },
  {
    label: 'YouTube',
    path: 'M22 12s0-3.2-.4-4.7a3 3 0 0 0-2.1-2.1C18 4.8 12 4.8 12 4.8s-6 0-7.5.4A3 3 0 0 0 2.4 7.3C2 8.8 2 12 2 12s0 3.2.4 4.7a3 3 0 0 0 2.1 2.1c1.5.4 7.5.4 7.5.4s6 0 7.5-.4a3 3 0 0 0 2.1-2.1c.4-1.5.4-4.7.4-4.7ZM10 15.3V8.7l6 3.3-6 3.3Z',
  },
]

function Footer() {
  return (
    <footer className="site-footer">
      {/* Brand */}
      <div className="footer-brand">
        <Logo to="/home" />
        <p className="tagline">Your Music, Your Playlist</p>
      </div>

      {/* Kolom link */}
      <div className="footer-cols">
        {footerCols.map(({ heading, links }) => (
          <div className="footer-col" key={heading}>
            <h4>{heading}</h4>
            {links.map((link) => (
              <a href="#" key={link}>{link}</a>
            ))}
          </div>
        ))}
      </div>

      {/* Meta & sosmed */}
      <div className="footer-meta">
        <div className="copyright">© 2026 Gema.<br />All rights reserved.</div>
        <div className="footer-socials">
          {socials.map(({ label, path }) => (
            <a href="#" aria-label={label} key={label}>
              <svg viewBox="0 0 24 24">
                <path d={path} />
              </svg>
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer
