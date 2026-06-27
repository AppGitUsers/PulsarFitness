import React from 'react'
import { Target, Users, Award, Clock } from 'lucide-react'

const values = [
  { icon: Target, title: 'Goal-Driven', desc: 'Every program is built around your personal goals — not a one-size-fits-all approach.' },
  { icon: Users, title: 'Community First', desc: 'A tight-knit community where members push each other to be better every single day.' },
  { icon: Award, title: 'Expert Guidance', desc: 'Certified trainers who bring years of real-world experience to every session.' },
  { icon: Clock, title: 'Flexible Timing', desc: 'Early morning to late evening — we work around your schedule, not the other way.' },
]

export default function About() {
  return (
    <section id="about" style={{
      padding: '7rem 2rem',
      background: 'var(--dark)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Accent line */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '1px',
        background: 'linear-gradient(90deg, transparent, var(--pulse), transparent)',
      }} />

      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ marginBottom: '4rem' }}>
          <p style={{
            fontFamily: 'var(--font-condensed)',
            fontSize: '0.85rem',
            fontWeight: 600,
            letterSpacing: '0.3em',
            textTransform: 'uppercase',
            color: 'var(--pulse)',
            marginBottom: '1rem',
          }}>
            Who We Are
          </p>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2.5rem, 6vw, 5rem)',
            color: 'var(--white)',
            lineHeight: '1',
            maxWidth: '600px',
          }}>
            BUILT FOR THOSE WHO NEVER SETTLE
          </h2>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '4rem',
          alignItems: 'center',
          marginBottom: '5rem',
        }} className="about-grid">
          {/* Left text */}
          <div>
            <p style={{
              fontSize: '1.05rem',
              color: 'var(--grey-light)',
              lineHeight: '1.8',
              marginBottom: '1.5rem',
              fontWeight: 300,
            }}>
              Neon Fitness Gym was founded with one belief — that the right environment can unlock extraordinary results. Located in Old Ambattur, SIDCO Industrial Estate, Chennai, we've built a space where serious training meets genuine community.
            </p>
            <p style={{
              fontSize: '1.05rem',
              color: 'var(--grey-light)',
              lineHeight: '1.8',
              fontWeight: 300,
            }}>
              Under the guidance of <strong style={{ color: 'var(--white)', fontWeight: 600 }}>Mohanraj A</strong>, our team brings a disciplined, results-focused approach to every program we offer — from strength and conditioning to weight management and beyond.
            </p>

            <div style={{
              marginTop: '2.5rem',
              paddingLeft: '1.5rem',
              borderLeft: '3px solid var(--pulse)',
            }}>
              <p style={{
                fontFamily: 'var(--font-condensed)',
                fontSize: '1.2rem',
                color: 'var(--white)',
                fontStyle: 'italic',
                letterSpacing: '0.02em',
              }}>
                "Consistency is what transforms average into extraordinary."
              </p>
              <p style={{
                fontFamily: 'var(--font-condensed)',
                fontSize: '0.85rem',
                color: 'var(--pulse)',
                marginTop: '0.5rem',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
              }}>
                — Mohanraj A, Founder
              </p>
            </div>
          </div>

          {/* Right visual */}
          <div style={{
            background: 'var(--dark-2)',
            border: '1px solid rgba(0,180,255,0.1)',
            borderRadius: '4px',
            padding: '3rem',
            position: 'relative',
            overflow: 'hidden',
          }}>
            <div style={{
              position: 'absolute',
              top: '-20px',
              right: '-20px',
              width: '150px',
              height: '150px',
              background: 'radial-gradient(circle, rgba(0,180,255,0.1) 0%, transparent 70%)',
            }} />
            <div style={{
              fontFamily: 'var(--font-display)',
              fontSize: '5rem',
              color: 'rgba(0,180,255,0.08)',
              lineHeight: 1,
              marginBottom: '1rem',
            }}>PULSE</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {[
                { label: 'Strength Training', pct: 95 },
                { label: 'Cardio & Endurance', pct: 88 },
                { label: 'Nutrition Coaching', pct: 82 },
                { label: 'Weight Management', pct: 90 },
              ].map(item => (
                <div key={item.label}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.4rem' }}>
                    <span style={{ fontFamily: 'var(--font-condensed)', fontSize: '0.9rem', letterSpacing: '0.05em', color: 'var(--grey-light)' }}>{item.label}</span>
                    <span style={{ fontFamily: 'var(--font-condensed)', fontSize: '0.9rem', color: 'var(--pulse)' }}>{item.pct}%</span>
                  </div>
                  <div style={{ background: 'var(--dark-3)', height: '3px', borderRadius: '2px' }}>
                    <div style={{ width: `${item.pct}%`, height: '100%', background: 'var(--pulse)', borderRadius: '2px' }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Values grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '1.5rem',
        }}>
          {values.map(({ icon: Icon, title, desc }) => (
            <div key={title} style={{
              background: 'var(--dark-2)',
              border: '1px solid rgba(255,255,255,0.06)',
              borderRadius: '4px',
              padding: '2rem',
              transition: 'border-color 0.2s, transform 0.2s',
            }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(0,180,255,0.3)'; e.currentTarget.style.transform = 'translateY(-4px)' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'; e.currentTarget.style.transform = 'translateY(0)' }}
            >
              <Icon size={28} color="#00b4ff" style={{ marginBottom: '1rem' }} />
              <h3 style={{
                fontFamily: 'var(--font-condensed)',
                fontSize: '1.1rem',
                fontWeight: 700,
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
                color: 'var(--white)',
                marginBottom: '0.5rem',
              }}>{title}</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--grey)', lineHeight: '1.6', fontWeight: 300 }}>{desc}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 2rem !important; }
        }
      `}</style>
    </section>
  )
}
