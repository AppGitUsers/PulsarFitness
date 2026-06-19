import React from 'react'
import { Wifi, Droplets, ParkingCircle, Tv, Thermometer, ShieldCheck } from 'lucide-react'

const facilities = [
  { icon: Droplets, label: 'Shower & Changing Rooms', desc: 'Clean, spacious shower facilities and lockers for members.' },
  { icon: Wifi, label: 'Free High-Speed WiFi', desc: 'Stay connected while you train.' },
  { icon: Tv, label: 'Entertainment Screens', desc: 'Large screens across the gym floor to keep you motivated.' },
  { icon: ParkingCircle, label: 'Free Parking', desc: 'Ample parking space available for all members.' },
  { icon: Thermometer, label: 'AC Training Floor', desc: 'Fully air-conditioned training area for year-round comfort.' },
  { icon: ShieldCheck, label: '24/7 CCTV Security', desc: 'Your safety is our priority — monitored round the clock.' },
]

const equipment = [
  'Olympic Barbells & Plates', 'Power Racks & Squat Stands', 'Dumbbells (2kg – 60kg)',
  'Cable & Pulley Machines', 'Treadmills & Ellipticals', 'Rowing Machines',
  'Battle Ropes & Kettlebells', 'Resistance Bands', 'Pull-up & Dip Stations',
  'Leg Press & Hack Squat', 'Smith Machine', 'Functional Trainer',
]

export default function Facilities() {
  return (
    <section id="facilities" style={{
      padding: '7rem 2rem',
      background: 'var(--dark)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute',
        bottom: 0,
        right: 0,
        width: '400px',
        height: '400px',
        background: 'radial-gradient(circle, rgba(200,245,0,0.05) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

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
            Our Space
          </p>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2.5rem, 6vw, 5rem)',
            color: 'var(--white)',
            lineHeight: '1',
          }}>
            WORLD-CLASS<br /><span style={{ color: 'var(--pulse)' }}>FACILITIES</span>
          </h2>
        </div>

        {/* Amenities */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1rem',
          marginBottom: '4rem',
        }}>
          {facilities.map(({ icon: Icon, label, desc }) => (
            <div key={label} style={{
              display: 'flex',
              gap: '1rem',
              alignItems: 'flex-start',
              padding: '1.5rem',
              background: 'var(--dark-2)',
              border: '1px solid rgba(255,255,255,0.05)',
              borderRadius: '4px',
              transition: 'border-color 0.2s',
            }}
              onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(200,245,0,0.2)'}
              onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)'}
            >
              <div style={{
                flexShrink: 0,
                width: '42px',
                height: '42px',
                background: 'rgba(200,245,0,0.1)',
                borderRadius: '4px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <Icon size={20} color="#c8f500" />
              </div>
              <div>
                <div style={{
                  fontFamily: 'var(--font-condensed)',
                  fontSize: '1rem',
                  fontWeight: 700,
                  letterSpacing: '0.05em',
                  color: 'var(--white)',
                  marginBottom: '0.3rem',
                }}>{label}</div>
                <div style={{ fontSize: '0.85rem', color: 'var(--grey)', fontWeight: 300 }}>{desc}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Equipment list */}
        <div style={{
          background: 'var(--dark-2)',
          border: '1px solid rgba(200,245,0,0.1)',
          borderRadius: '4px',
          padding: '2.5rem',
        }}>
          <h3 style={{
            fontFamily: 'var(--font-display)',
            fontSize: '1.8rem',
            color: 'var(--white)',
            marginBottom: '1.5rem',
            letterSpacing: '0.05em',
          }}>
            EQUIPMENT
          </h3>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
            gap: '0.8rem',
          }}>
            {equipment.map(item => (
              <div key={item} style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.6rem',
                fontFamily: 'var(--font-condensed)',
                fontSize: '0.95rem',
                color: 'var(--grey-light)',
                letterSpacing: '0.02em',
              }}>
                <span style={{ color: 'var(--pulse)', fontSize: '1.2rem', lineHeight: 1 }}>—</span>
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
