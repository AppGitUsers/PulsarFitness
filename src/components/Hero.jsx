import React, { useEffect, useRef } from 'react'
import { ChevronDown } from 'lucide-react'

export default function Hero() {
  const textRef = useRef(null)

  useEffect(() => {
    const el = textRef.current
    if (!el) return
    el.style.opacity = '0'
    el.style.transform = 'translateY(40px)'
    setTimeout(() => {
      el.style.transition = 'opacity 0.9s ease, transform 0.9s ease'
      el.style.opacity = '1'
      el.style.transform = 'translateY(0)'
    }, 100)
  }, [])

  return (
    <section id="home" style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      overflow: 'hidden',
      background: 'var(--black)',
    }}>
      {/* Animated background grid */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: `
          linear-gradient(rgba(200,245,0,0.04) 1px, transparent 1px),
          linear-gradient(90deg, rgba(200,245,0,0.04) 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px',
        zIndex: 0,
      }} />

      {/* Glow orb */}
      <div style={{
        position: 'absolute',
        top: '30%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '600px',
        height: '600px',
        background: 'radial-gradient(circle, rgba(200,245,0,0.08) 0%, transparent 70%)',
        zIndex: 0,
        pointerEvents: 'none',
      }} />

      {/* Content */}
      <div ref={textRef} style={{
        position: 'relative',
        zIndex: 1,
        textAlign: 'center',
        padding: '0 1.5rem',
        maxWidth: '900px',
      }}>
        <p style={{
          fontFamily: 'var(--font-condensed)',
          fontSize: '0.9rem',
          fontWeight: 600,
          letterSpacing: '0.35em',
          textTransform: 'uppercase',
          color: 'var(--pulse)',
          marginBottom: '1.5rem',
        }}>
          ⚡ Bengaluru's Premier Fitness Destination
        </p>

        <h1 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(4rem, 12vw, 10rem)',
          lineHeight: '0.9',
          letterSpacing: '0.02em',
          color: 'var(--white)',
          marginBottom: '0.3rem',
        }}>
          PULSAR
        </h1>
        <h1 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(4rem, 12vw, 10rem)',
          lineHeight: '0.9',
          letterSpacing: '0.02em',
          color: 'var(--pulse)',
          marginBottom: '2rem',
        }}>
          FITNESS
        </h1>
        <h1 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(2rem, 6vw, 5rem)',
          lineHeight: '1',
          letterSpacing: '0.15em',
          color: 'rgba(255,255,255,0.3)',
          marginBottom: '2.5rem',
        }}>
          CENTRE
        </h1>

        <p style={{
          fontSize: '1.1rem',
          color: 'var(--grey-light)',
          maxWidth: '500px',
          margin: '0 auto 3rem',
          lineHeight: '1.7',
          fontWeight: 300,
        }}>
          Transform your body. Elevate your mind. Where every rep counts and every session matters.
        </p>

        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="#programs" style={{
            background: 'var(--pulse)',
            color: 'var(--black)',
            padding: '1rem 2.5rem',
            fontFamily: 'var(--font-condensed)',
            fontWeight: 700,
            fontSize: '1rem',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            borderRadius: '2px',
            transition: 'all 0.2s',
            display: 'inline-block',
          }}
            onMouseEnter={e => { e.target.style.background = '#a8d000'; e.target.style.transform = 'translateY(-2px)' }}
            onMouseLeave={e => { e.target.style.background = 'var(--pulse)'; e.target.style.transform = 'translateY(0)' }}
          >
            Explore Programs
          </a>
          <a href="#contact" style={{
            border: '1px solid rgba(200,245,0,0.4)',
            color: 'var(--pulse)',
            padding: '1rem 2.5rem',
            fontFamily: 'var(--font-condensed)',
            fontWeight: 700,
            fontSize: '1rem',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            borderRadius: '2px',
            transition: 'all 0.2s',
            display: 'inline-block',
          }}
            onMouseEnter={e => { e.target.style.background = 'rgba(200,245,0,0.08)'; e.target.style.transform = 'translateY(-2px)' }}
            onMouseLeave={e => { e.target.style.background = 'transparent'; e.target.style.transform = 'translateY(0)' }}
          >
            Get in Touch
          </a>
        </div>

        {/* Stats */}
        <div style={{
          display: 'flex',
          gap: '3rem',
          justifyContent: 'center',
          marginTop: '5rem',
          flexWrap: 'wrap',
        }}>
          {[
            { num: '500+', label: 'Active Members' },
            { num: '10+', label: 'Expert Trainers' },
            { num: '5+', label: 'Years Strong' },
          ].map(stat => (
            <div key={stat.label} style={{ textAlign: 'center' }}>
              <div style={{
                fontFamily: 'var(--font-display)',
                fontSize: '2.5rem',
                color: 'var(--pulse)',
                lineHeight: 1,
              }}>{stat.num}</div>
              <div style={{
                fontFamily: 'var(--font-condensed)',
                fontSize: '0.8rem',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: 'var(--grey)',
                marginTop: '0.3rem',
              }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <a href="#about" style={{
        position: 'absolute',
        bottom: '2rem',
        left: '50%',
        transform: 'translateX(-50%)',
        color: 'var(--pulse)',
        animation: 'bounce 2s infinite',
        zIndex: 1,
      }}>
        <ChevronDown size={28} />
      </a>

      <style>{`
        @keyframes bounce {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50% { transform: translateX(-50%) translateY(8px); }
        }
      `}</style>
    </section>
  )
}
