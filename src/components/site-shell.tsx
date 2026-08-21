import { Link } from '@tanstack/react-router'
import { Menu, X } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const menuButtonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!open) return
    const close = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false)
        menuButtonRef.current?.focus()
      }
    }
    window.addEventListener('keydown', close)
    return () => window.removeEventListener('keydown', close)
  }, [open])

  return (
    <header className="site-header">
      <Link className="brand-lockup" to="/" aria-label="YK, Yuvraj Kunwar, home">
        <span className="brand-mark">YK</span>
        <span className="brand-name">Yuvraj Kunwar</span>
      </Link>

      <div className="header-status" aria-label="Current role and location">
        <span className="status-light" aria-hidden="true" />
        <span>AI Engineer / Melbourne</span>
      </div>

      <button
        ref={menuButtonRef}
        className="mobile-menu-button"
        type="button"
        aria-controls="site-navigation"
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
      >
        <span>Menu</span>
        {open ? <X size={18} aria-hidden="true" /> : <Menu size={18} aria-hidden="true" />}
      </button>

      <nav
        className="site-navigation"
        id="site-navigation"
        aria-label="Primary navigation"
        data-open={open}
      >
        <Link to="/" hash="work" onClick={() => setOpen(false)}>
          Work
        </Link>
        <Link to="/about" onClick={() => setOpen(false)}>
          About
        </Link>
        <a href="https://github.com/yuvkun10" target="_blank" rel="noreferrer" onClick={() => setOpen(false)}>
          GitHub
        </a>
        <Link className="header-contact" to="/contact" onClick={() => setOpen(false)}>
          Get in touch
        </Link>
      </nav>
    </header>
  )
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div>
        <p className="footer-title">Yuvraj Kunwar</p>
        <p>AI Engineer · Melbourne</p>
      </div>
      <nav aria-label="Footer navigation">
        <Link to="/" hash="work">Work</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <a href="https://www.linkedin.com/in/yuvraj-kunwar/" target="_blank" rel="noreferrer">LinkedIn</a>
        <a href="https://github.com/yuvkun10" target="_blank" rel="noreferrer">GitHub</a>
      </nav>
      <div className="footer-meta">
        <p>Melbourne, Australia</p>
        <p>© 2026</p>
      </div>
    </footer>
  )
}


