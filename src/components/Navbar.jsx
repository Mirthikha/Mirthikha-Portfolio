import { useState } from 'react'
import { nav, profile } from '../data.js'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)
  return (
    <header className="nav">
      <div className="wrap nav-inner">
        <a href="#home" className="brand" onClick={close}>{profile.name}</a>
        <button className="burger" aria-label="Toggle menu" aria-expanded={open} aria-controls="menu" onClick={() => setOpen(!open)}>
          <span /><span /><span />
        </button>
        <nav id="menu" className={open ? 'menu open' : 'menu'} aria-label="Primary">
          {nav.map((n) => (
            <a key={n} href={`#${n.toLowerCase()}`} onClick={close}>{n}</a>
          ))}
        </nav>
      </div>
    </header>
  )
}
