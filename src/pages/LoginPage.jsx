// src/pages/LoginPage.jsx
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import AuthHeader  from '../component/organisms/AuthHeader'
import InputField  from '../component/atoms/InputField'
import Button      from '../component/atoms/Button'

/* ---- ikon SVG ---- */
const EmailIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"
    strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m2 6 10 7 10-7" />
  </svg>
)

const LockIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"
    strokeLinecap="round" strokeLinejoin="round">
    <rect x="4" y="10" width="16" height="10" rx="2" />
    <path d="M8 10V7a4 4 0 0 1 8 0v3" />
  </svg>
)

const EyeOpenIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7Z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
)

const EyeClosedIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17.94 17.94A10.94 10.94 0 0 1 12 19c-7 0-11-7-11-7a18.4 18.4 0 0 1 4.22-5.06" />
    <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 7 11 7a18.5 18.5 0 0 1-2.16 3.19" />
    <path d="m6.72 6.72 10.56 10.56" />
  </svg>
)

const GoogleIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24">
    <path fill="#4285F4" d="M21.8 12.23c0-.68-.06-1.36-.18-2H12v3.78h5.5a4.7 4.7 0 0 1-2.04 3.08v2.5h3.3c1.93-1.78 3.04-4.4 3.04-7.36Z" />
    <path fill="#34A853" d="M12 22c2.76 0 5.08-.92 6.77-2.5l-3.3-2.5c-.92.62-2.1.98-3.47.98-2.67 0-4.93-1.8-5.74-4.22h-3.4v2.6A10 10 0 0 0 12 22Z" />
    <path fill="#FBBC05" d="M6.26 13.76A6 6 0 0 1 5.96 12c0-.61.1-1.2.3-1.76V7.64h-3.4A10 10 0 0 0 2 12c0 1.6.38 3.12 1.86 4.36l3.4-2.6Z" />
    <path fill="#EA4335" d="M12 5.98c1.5 0 2.84.52 3.9 1.52l2.92-2.92C16.84 2.86 14.6 2 12 2A10 10 0 0 0 2.86 7.64l3.4 2.6C7.07 7.8 9.33 5.98 12 5.98Z" />
  </svg>
)

/* ---- Komponen ---- */
function LoginPage() {
  const navigate = useNavigate()

  const [form, setForm]     = useState({ email: '', password: '' })
  const [errors, setErrors] = useState({ email: '', password: '' })
  const [showPass, setShowPass] = useState(false)
  const [remember, setRemember] = useState(true)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
    setErrors({ ...errors, [e.target.name]: '' })
  }

  const validate = () => {
    const newErrors = { email: '', password: '' }
    let valid = true

    if (!form.email || !/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = 'Masukkan alamat email yang valid.'
      valid = false
    }
    if (form.password.length < 8) {
      newErrors.password = 'Password minimal 8 karakter.'
      valid = false
    }
    setErrors(newErrors)
    return valid
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (validate()) {
      // TODO: hubungkan ke endpoint backend
      navigate('/home')
    }
  }

  return (
  <div className="auth-page">

    {/* Catatan musik mengambang */}
    <div className="auth-note note-1">
      <svg viewBox="0 0 24 24"><path d="M9 18V5l11-2v13a3 3 0 1 1-2-2.83V6.27l-7 1.27V18a3 3 0 1 1-2-2.83V18Z"/></svg>
    </div>
    <div className="auth-note note-2">
      <svg viewBox="0 0 24 24"><path d="M9 18V5l11-2v13a3 3 0 1 1-2-2.83V6.27l-7 1.27V18a3 3 0 1 1-2-2.83V18Z"/></svg>
    </div>
    <div className="auth-note note-3">
      <svg viewBox="0 0 24 24"><path d="M9 18V5l11-2v13a3 3 0 1 1-2-2.83V6.27l-7 1.27V18a3 3 0 1 1-2-2.83V18Z"/></svg>
    </div>
    <div className="auth-note note-4">
      <svg viewBox="0 0 24 24"><path d="M9 18V5l11-2v13a3 3 0 1 1-2-2.83V6.27l-7 1.27V18a3 3 0 1 1-2-2.83V18Z"/></svg>
    </div>
    <div className="auth-note note-5">
      <svg viewBox="0 0 24 24"><path d="M9 18V5l11-2v13a3 3 0 1 1-2-2.83V6.27l-7 1.27V18a3 3 0 1 1-2-2.83V18Z"/></svg>
    </div>

    {/* Equalizer bars */}
    <div className="eq-decor" aria-hidden="true">
      <span style={{height:'30%'}}></span><span style={{height:'55%'}}></span>
      <span style={{height:'25%'}}></span><span style={{height:'70%'}}></span>
      <span style={{height:'40%'}}></span><span style={{height:'60%'}}></span>
      <span style={{height:'20%'}}></span><span style={{height:'50%'}}></span>
      <span style={{height:'35%'}}></span><span style={{height:'65%'}}></span>
      <span style={{height:'45%'}}></span><span style={{height:'25%'}}></span>
      <span style={{height:'55%'}}></span><span style={{height:'30%'}}></span>
      <span style={{height:'70%'}}></span>
    </div>

    <div className="auth-card-wrap">
      <div className="auth-header">
        {/* Logo dengan catatan musik di kiri kanan */}
        <div className="flank-notes">
          <svg viewBox="0 0 24 24"><path d="M9 18V5l11-2v13a3 3 0 1 1-2-2.83V6.27l-7 1.27V18a3 3 0 1 1-2-2.83V18Z"/></svg>
          <Logo to="/home" />
          <svg viewBox="0 0 24 24"><path d="M9 18V5l11-2v13a3 3 0 1 1-2-2.83V6.27l-7 1.27V18a3 3 0 1 1-2-2.83V18Z"/></svg>
        </div>
        <p className="tagline">Your Music, Your Playlist</p>
      </div>

      <div className="auth-card">
        <div className="auth-card-title">
          <h2>Selamat Datang Kembali!</h2>
          <p>Masuk untuk melanjutkan ke Playlist favoritmu</p>
        </div>

        <form onSubmit={handleSubmit} noValidate>
          <InputField
            label="Email"
            id="email"
            type="email"
            placeholder="Masukkan email kamu"
            icon={<EmailIcon />}
            value={form.email}
            onChange={handleChange}
            hint={errors.email}
            isError={!!errors.email}
            autoComplete="email"
            required
          />
          <InputField
            label="Password"
            id="password"
            type={showPass ? 'text' : 'password'}
            placeholder="Masukkan password kamu"
            icon={<LockIcon />}
            value={form.password}
            onChange={handleChange}
            hint={errors.password}
            isError={!!errors.password}
            autoComplete="current-password"
            required
            trailingIcon={
              <button type="button" className="input-toggle"
                onClick={() => setShowPass(!showPass)}
                aria-label={showPass ? 'Sembunyikan password' : 'Tampilkan password'}>
                {showPass ? <EyeClosedIcon /> : <EyeOpenIcon />}
              </button>
            }
          />
          <div className="form-foot-row">
            <label className="checkbox-row">
              <input type="checkbox" checked={remember}
                onChange={(e) => setRemember(e.target.checked)} />
              Remember Me
            </label>
            <a href="#" className="link-accent">Lupa Password?</a>
          </div>
          <Button type="submit" block>Login</Button>
        </form>

        <div className="divider-row">ATAU</div>
        <Button variant="white" block><GoogleIcon />Login dengan Google</Button>
        <p className="switch-line">
          Belum punya akun?{' '}
          <Link to="/register" className="link-accent">Daftar sekarang</Link>
        </p>
      </div>
    </div>
  </div>
)
}

export default LoginPage
