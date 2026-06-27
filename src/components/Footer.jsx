import React from 'react'
import { Zap, Phone, Mail, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer style={{
      background: 'var(--black)',
      borderTop: '1px solid rgba(0,180,255,0.1)',
      padding: '3rem 2rem 2rem',
    }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '3rem',
          marginBottom: '3rem',
        }}>
          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
              <Zap size={20} color="#00b4ff" fill="#00b4ff" />
              <span style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.5rem',
                letterSpacing: '0.08em',
                color: 'var(--white)',
              }}>NEON<span style={{ color: 'var(--pulse)' }}>.</span></span>
            </div>
            <p style={{
              fontSize: '0.88rem',
              color: 'var(--grey)',
              lineHeight: '1.7',
              fontWeight: 300,
              maxWidth: '220px',
            }}>
              Chennai's premier fitness destination. Where champions are made.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 style={{
              fontFamily: 'var(--font-condensed)',
              fontSize: '0.8rem',
              fontWeight: 700,
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              color: 'var(--pulse)',
              marginBottom: '1rem',
            }}>Quick Links</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              {['Home', 'About', 'Programs', 'Facilities', 'Pricing', 'Contact'].map(link => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} style={{
                    fontFamily: 'var(--font-condensed)',
                    fontSize: '0.9rem',
                    color: 'var(--grey)',
                    letterSpacing: '0.05em',
                    transition: 'color 0.2s',
                  }}
                    onMouseEnter={e => e.target.style.color = '#00b4ff'}
                    onMouseLeave={e => e.target.style.color = 'var(--grey)'}
                  >{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{
              fontFamily: 'var(--font-condensed)',
              fontSize: '0.8rem',
              fontWeight: 700,
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              color: 'var(--pulse)',
              marginBottom: '1rem',
            }}>Contact</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
              <a href="tel:+919344983750" style={{
                display: 'flex', gap: '0.6rem', alignItems: 'center',
                fontSize: '0.88rem', color: 'var(--grey)', transition: 'color 0.2s',
              }}
                onMouseEnter={e => e.currentTarget.style.color = '#00b4ff'}
                onMouseLeave={e => e.currentTarget.style.color = 'var(--grey)'}
              >
                <Phone size={14} color="#00b4ff" />
                +91 93449 83750
              </a>
              <a href="mailto:mohanraja23032003@gmail.com" style={{
                display: 'flex', gap: '0.6rem', alignItems: 'center',
                fontSize: '0.88rem', color: 'var(--grey)', transition: 'color 0.2s',
              }}
                onMouseEnter={e => e.currentTarget.style.color = '#00b4ff'}
                onMouseLeave={e => e.currentTarget.style.color = 'var(--grey)'}
              >
                <Mail size={14} color="#00b4ff" />
                mohanraja23032003@gmail.com
              </a>
              <div style={{ display: 'flex', gap: '0.6rem', alignItems: 'flex-start' }}>
                <MapPin size={14} color="#00b4ff" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span style={{ fontSize: '0.88rem', color: 'var(--grey)', lineHeight: '1.5' }}>
                  No.442, Old Ambattur,<br />SIDCO Industrial Estate, Chennai – 600058
                </span>
              </div>
            </div>
          </div>

          {/* Timings */}
          <div>
            <h4 style={{
              fontFamily: 'var(--font-condensed)',
              fontSize: '0.8rem',
              fontWeight: 700,
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              color: 'var(--pulse)',
              marginBottom: '1rem',
            }}>Timings</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {[
                { day: 'Monday – Friday', time: '5:30 AM – 10:00 PM' },
                { day: 'Saturday', time: '5:30 AM – 10:00 PM' },
                { day: 'Sunday', time: '6:00 AM – 8:00 PM' },
              ].map(t => (
                <div key={t.day}>
                  <div style={{ fontFamily: 'var(--font-condensed)', fontSize: '0.78rem', color: 'var(--grey)', letterSpacing: '0.05em' }}>{t.day}</div>
                  <div style={{ fontFamily: 'var(--font-condensed)', fontSize: '0.9rem', color: 'var(--grey-light)', fontWeight: 600 }}>{t.time}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          paddingTop: '1.5rem',
          borderTop: '1px solid rgba(255,255,255,0.06)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem',
        }}>
          <p style={{
            fontFamily: 'var(--font-condensed)',
            fontSize: '0.8rem',
            color: 'var(--grey)',
            letterSpacing: '0.05em',
          }}>
            © {new Date().getFullYear()} Neon Fitness Gym. All rights reserved.
          </p>
          <p style={{
            fontFamily: 'var(--font-condensed)',
            fontSize: '0.8rem',
            color: 'var(--grey)',
            letterSpacing: '0.05em',
          }}>
            Old Ambattur, Chennai, Tamil Nadu
          </p>
        </div>
      </div>
    </footer>
  )
}
