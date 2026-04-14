import { useState, useEffect } from 'react'

const LINKS = [
  { href: '#hero',       label: 'Home'       },
  { href: '#about',      label: 'About'      },
  { href: '#skills',     label: 'Skills'     },
  { href: '#experience', label: 'Experience' },
  { href: '#projects',   label: 'Projects'   },
  { href: '#education',  label: 'Education'  },
  { href: '#contact',    label: 'Contact'    },
]

export default function Navbar() {
  const [active, setActive]   = useState('#hero')
  const [open,   setOpen]     = useState(false)

  useEffect(() => {
    const onScroll = () => {
      for (let i = LINKS.length - 1; i >= 0; i--) {
        const el = document.querySelector(LINKS[i].href)
        if (el && el.getBoundingClientRect().top <= 120) {
          setActive(LINKS[i].href)
          return
        }
      }
      setActive('#hero')
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className="nav-wrap">
      <div className="container-xl d-flex align-items-center justify-content-between">
        <a href="#hero" className="nav-brand">
          <svg className="brand-logo" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="16" cy="16" r="14" stroke="url(#gGrad)" strokeWidth="2"/>
            <path d="M24 16h-6v4h3.5A6 6 0 1 1 16 10a6 6 0 0 1 4.24 1.76" stroke="url(#gGrad)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <defs>
              <linearGradient id="gGrad" x1="2" y1="2" x2="30" y2="30" gradientUnits="userSpaceOnUse">
                <stop stopColor="#a78bfa"/>
                <stop offset="1" stopColor="#60a5fa"/>
              </linearGradient>
            </defs>
          </svg>
          Ginu
        </a>

        {/* Desktop links */}
        <div className="d-none d-lg-flex gap-1">
          {LINKS.map(l => (
            <a key={l.href} href={l.href} className={`nav-lnk ${active === l.href ? 'active' : ''}`}>
              {l.label}
            </a>
          ))}
        </div>

        {/* Mobile toggle */}
        <button className="nav-toggle d-lg-none" onClick={() => setOpen(o => !o)}>
          {open ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="container-xl nav-mobile d-lg-none">
          {LINKS.map(l => (
            <a
              key={l.href}
              href={l.href}
              className={`nav-lnk d-block mb-1 ${active === l.href ? 'active' : ''}`}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}
