import React from 'react'
import { Zap, Phone, Mail, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer style={{
      background: 'var(--black)',
      borderTop: '1px solid rgba(200,245,0,0.1)',
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
              <Zap size={20} color="#c8f500" fill="#c8f500" />
              <span style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.5rem',
                letterSpacing: '0.08em',
                color: 'var(--white)',
              }}>PULSAR<span style={{ color: 'var(--pulse)' }}>.</span></span>
            </div>
            <p style={{
              fontSize: '0.88rem',
              color: 'var(--grey)',
              lineHeight: '1.7',
              fontWeight: 300,
              maxWidth: '220px',
            }}>
              Bengaluru's premier fitness destination. Where champions are made.
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
                    onMouseEnter={e => e.target.style.color = '#c8f500'}
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
              <a href="tel:+919980588044" style={{
                display: 'flex', gap: '0.6rem', alignItems: 'center',
                fontSize: '0.88rem', color: 'var(--grey)', transition: 'color 0.2s',
              }}
                onMouseEnter={e => e.currentTarget.style.color = '#c8f500'}
                onMouseLeave={e => e.currentTarget.style.color = 'var(--grey)'}
              >
                <Phone size={14} color="#c8f500" />
                +91 99805 88044
              </a>
              <a href="mailto:gopi.orafly@gmail.com" style={{
                display: 'flex', gap: '0.6rem', alignItems: 'center',
                fontSize: '0.88rem', color: 'var(--grey)', transition: 'color 0.2s',
              }}
                onMouseEnter={e => e.currentTarget.style.color = '#c8f500'}
                onMouseLeave={e => e.currentTarget.style.color = 'var(--grey)'}
              >
                <Mail size={14} color="#c8f500" />
                gopi.orafly@gmail.com
              </a>
              <div style={{ display: 'flex', gap: '0.6rem', alignItems: 'flex-start' }}>
                <MapPin size={14} color="#c8f500" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span style={{ fontSize: '0.88rem', color: 'var(--grey)', lineHeight: '1.5' }}>
                  Door No. 304, Heritage Estate,<br />Yelahanka, Bengaluru – 560064
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
            © {new Date().getFullYear()} Pulsar Fitness Centre. All rights reserved.
          </p>
          <p style={{
            fontFamily: 'var(--font-condensed)',
            fontSize: '0.8rem',
            color: 'var(--grey)',
            letterSpacing: '0.05em',
          }}>
            Yelahanka, Bengaluru, Karnataka
          </p>
        </div>
      </div>
    </footer>
  )
}
