import React, { useState, useEffect } from 'react'
import { Menu, X, Zap } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Programs', href: '#programs' },
  { label: 'Facilities', href: '#facilities' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 100,
      padding: '0 2rem',
      height: '70px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      background: scrolled ? 'rgba(10,10,10,0.97)' : 'transparent',
      borderBottom: scrolled ? '1px solid rgba(0,180,255,0.15)' : 'none',
      backdropFilter: scrolled ? 'blur(12px)' : 'none',
      transition: 'all 0.3s ease',
    }}>
      {/* Logo */}
      <a href="#home" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <Zap size={22} color="#00b4ff" fill="#00b4ff" />
        <span style={{
          fontFamily: 'var(--font-display)',
          fontSize: '1.6rem',
          letterSpacing: '0.08em',
          color: 'var(--white)',
        }}>
          NEON<span style={{ color: 'var(--pulse)' }}>.</span>
        </span>
      </a>

      {/* Desktop Links */}
      <ul style={{
        display: 'flex',
        gap: '2rem',
        listStyle: 'none',
        alignItems: 'center',
      }} className="desktop-nav">
        {navLinks.map(link => (
          <li key={link.label}>
            <a href={link.href} style={{
              fontFamily: 'var(--font-condensed)',
              fontSize: '0.95rem',
              fontWeight: 600,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: 'var(--grey-light)',
              transition: 'color 0.2s',
            }}
              onMouseEnter={e => e.target.style.color = '#00b4ff'}
              onMouseLeave={e => e.target.style.color = 'var(--grey-light)'}
            >
              {link.label}
            </a>
          </li>
        ))}
        <li>
          <a href="#contact" style={{
            background: 'var(--pulse)',
            color: 'var(--black)',
            padding: '0.5rem 1.4rem',
            borderRadius: '2px',
            fontFamily: 'var(--font-condensed)',
            fontWeight: 700,
            fontSize: '0.9rem',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            transition: 'background 0.2s',
          }}
            onMouseEnter={e => e.target.style.background = '#0090cc'}
            onMouseLeave={e => e.target.style.background = 'var(--pulse)'}
          >
            Join Now
          </a>
        </li>
      </ul>

      {/* Mobile Hamburger */}
      <button
        onClick={() => setOpen(!open)}
        style={{ background: 'none', color: 'var(--white)', display: 'none' }}
        className="mobile-menu-btn"
        aria-label="Toggle menu"
      >
        {open ? <X size={26} /> : <Menu size={26} />}
      </button>

      {/* Mobile Menu */}
      {open && (
        <div style={{
          position: 'fixed',
          top: '70px',
          left: 0,
          right: 0,
          background: 'rgba(10,10,10,0.98)',
          padding: '2rem',
          borderTop: '1px solid rgba(0,180,255,0.2)',
          backdropFilter: 'blur(12px)',
        }}>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {navLinks.map(link => (
              <li key={link.label}>
                <a href={link.href}
                  onClick={() => setOpen(false)}
                  style={{
                    fontFamily: 'var(--font-condensed)',
                    fontSize: '1.4rem',
                    fontWeight: 600,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: 'var(--white)',
                  }}>
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a href="#contact" onClick={() => setOpen(false)} style={{
                display: 'inline-block',
                background: 'var(--pulse)',
                color: 'var(--black)',
                padding: '0.7rem 2rem',
                fontFamily: 'var(--font-condensed)',
                fontWeight: 700,
                fontSize: '1rem',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
              }}>
                Join Now
              </a>
            </li>
          </ul>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>
    </nav>
  )
}
