import React from 'react'
import { Dumbbell, Heart, Flame, Layers, Wind, Scale } from 'lucide-react'

const programs = [
  {
    icon: Dumbbell,
    name: 'Strength & Conditioning',
    tag: 'All Levels',
    desc: 'Build raw power and functional strength with progressive resistance training programs tailored to your current level.',
    duration: '60 min',
    freq: '4x / week',
  },
  {
    icon: Flame,
    name: 'Fat Burn Bootcamp',
    tag: 'Intermediate',
    desc: 'High-intensity circuit training designed to torch calories, boost metabolism and improve cardiovascular endurance.',
    duration: '45 min',
    freq: '5x / week',
  },
  {
    icon: Heart,
    name: 'Cardio & Endurance',
    tag: 'Beginner Friendly',
    desc: 'Structured cardio programming that builds a strong aerobic base — ideal for beginners and those returning to fitness.',
    duration: '45 min',
    freq: '3x / week',
  },
  {
    icon: Layers,
    name: 'Body Transformation',
    tag: 'Advanced',
    desc: 'A complete 12-week transformation program combining strength, cardio, and nutrition coaching for maximum results.',
    duration: '75 min',
    freq: '6x / week',
  },
  {
    icon: Wind,
    name: 'Flexibility & Recovery',
    tag: 'All Levels',
    desc: 'Mobility work, stretching routines, and recovery techniques that keep your body injury-free and performing at its best.',
    duration: '30 min',
    freq: '2x / week',
  },
  {
    icon: Scale,
    name: 'Weight Management',
    tag: 'Personalized',
    desc: 'Science-backed weight management combining exercise programming with nutrition guidance for sustainable, long-term results.',
    duration: '60 min',
    freq: '4x / week',
  },
]

export default function Programs() {
  return (
    <section id="programs" style={{
      padding: '7rem 2rem',
      background: 'var(--black)',
      position: 'relative',
    }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
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
            What We Offer
          </p>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1rem' }}>
            <h2 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.5rem, 6vw, 5rem)',
              color: 'var(--white)',
              lineHeight: '1',
            }}>
              TRAINING<br /><span style={{ color: 'var(--pulse)' }}>PROGRAMS</span>
            </h2>
            <p style={{
              maxWidth: '360px',
              fontSize: '0.95rem',
              color: 'var(--grey)',
              lineHeight: '1.7',
              fontWeight: 300,
            }}>
              Six focused programs, one goal — get you the results you came for.
            </p>
          </div>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '1.5rem',
        }}>
          {programs.map((p, i) => {
            const Icon = p.icon
            return (
              <div key={p.name} style={{
                background: 'var(--dark)',
                border: '1px solid rgba(255,255,255,0.06)',
                borderRadius: '4px',
                padding: '2rem',
                position: 'relative',
                overflow: 'hidden',
                transition: 'all 0.25s ease',
                cursor: 'default',
              }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = 'rgba(200,245,0,0.25)'
                  e.currentTarget.style.background = 'var(--dark-2)'
                  e.currentTarget.style.transform = 'translateY(-4px)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'
                  e.currentTarget.style.background = 'var(--dark)'
                  e.currentTarget.style.transform = 'translateY(0)'
                }}
              >
                {/* Background number */}
                <div style={{
                  position: 'absolute',
                  top: '-10px',
                  right: '1rem',
                  fontFamily: 'var(--font-display)',
                  fontSize: '5rem',
                  color: 'rgba(200,245,0,0.04)',
                  lineHeight: 1,
                  userSelect: 'none',
                }}>
                  {String(i + 1).padStart(2, '0')}
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.2rem' }}>
                  <Icon size={26} color="#c8f500" />
                  <span style={{
                    fontFamily: 'var(--font-condensed)',
                    fontSize: '0.7rem',
                    fontWeight: 700,
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    color: 'var(--black)',
                    background: 'var(--pulse)',
                    padding: '0.2rem 0.6rem',
                    borderRadius: '2px',
                  }}>{p.tag}</span>
                </div>

                <h3 style={{
                  fontFamily: 'var(--font-condensed)',
                  fontSize: '1.3rem',
                  fontWeight: 700,
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase',
                  color: 'var(--white)',
                  marginBottom: '0.8rem',
                }}>{p.name}</h3>

                <p style={{
                  fontSize: '0.88rem',
                  color: 'var(--grey)',
                  lineHeight: '1.65',
                  fontWeight: 300,
                  marginBottom: '1.5rem',
                }}>{p.desc}</p>

                <div style={{
                  display: 'flex',
                  gap: '1.5rem',
                  paddingTop: '1.2rem',
                  borderTop: '1px solid rgba(255,255,255,0.06)',
                }}>
                  <div>
                    <div style={{ fontFamily: 'var(--font-condensed)', fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--grey)', marginBottom: '0.2rem' }}>Duration</div>
                    <div style={{ fontFamily: 'var(--font-condensed)', fontSize: '1rem', fontWeight: 700, color: 'var(--pulse)' }}>{p.duration}</div>
                  </div>
                  <div>
                    <div style={{ fontFamily: 'var(--font-condensed)', fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--grey)', marginBottom: '0.2rem' }}>Frequency</div>
                    <div style={{ fontFamily: 'var(--font-condensed)', fontSize: '1rem', fontWeight: 700, color: 'var(--pulse)' }}>{p.freq}</div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
