import React, { useState } from 'react'
import { Check } from 'lucide-react'

const plans = [
  {
    name: 'Starter',
    tag: null,
    monthly: 1200,
    quarterly: 3200,
    annual: 11000,
    features: [
      'Full gym floor access',
      'Cardio equipment',
      'Locker & shower',
      'Free WiFi',
      'Basic fitness assessment',
    ],
    highlight: false,
  },
  {
    name: 'Pro',
    tag: 'Most Popular',
    monthly: 1800,
    quarterly: 4800,
    annual: 16000,
    features: [
      'Everything in Starter',
      'Group classes access',
      'Monthly trainer check-in',
      'Nutrition guidance',
      'Progress tracking',
      'Guest pass (1/month)',
    ],
    highlight: true,
  },
  {
    name: 'Elite',
    tag: 'Best Value',
    monthly: 2800,
    quarterly: 7500,
    annual: 26000,
    features: [
      'Everything in Pro',
      'Personal trainer sessions (8/month)',
      'Custom workout plan',
      'Diet plan & consultation',
      'Priority class booking',
      'Unlimited guest passes',
    ],
    highlight: false,
  },
]

export default function Pricing() {
  const [period, setPeriod] = useState('monthly')

  const getPrice = (plan) => {
    if (period === 'monthly') return plan.monthly
    if (period === 'quarterly') return plan.quarterly
    return plan.annual
  }

  const periodLabel = { monthly: '/month', quarterly: '/quarter', annual: '/year' }

  return (
    <section id="pricing" style={{
      padding: '7rem 2rem',
      background: 'var(--black)',
    }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <p style={{
            fontFamily: 'var(--font-condensed)',
            fontSize: '0.85rem',
            fontWeight: 600,
            letterSpacing: '0.3em',
            textTransform: 'uppercase',
            color: 'var(--pulse)',
            marginBottom: '1rem',
          }}>
            Membership Plans
          </p>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2.5rem, 6vw, 5rem)',
            color: 'var(--white)',
            lineHeight: '1',
            marginBottom: '2rem',
          }}>
            SIMPLE<br /><span style={{ color: 'var(--pulse)' }}>PRICING</span>
          </h2>

          {/* Period toggle */}
          <div style={{
            display: 'inline-flex',
            background: 'var(--dark)',
            border: '1px solid rgba(255,255,255,0.08)',
            borderRadius: '4px',
            padding: '4px',
            gap: '4px',
          }}>
            {['monthly', 'quarterly', 'annual'].map(p => (
              <button key={p} onClick={() => setPeriod(p)} style={{
                padding: '0.5rem 1.2rem',
                fontFamily: 'var(--font-condensed)',
                fontSize: '0.85rem',
                fontWeight: 700,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                borderRadius: '2px',
                background: period === p ? 'var(--pulse)' : 'transparent',
                color: period === p ? 'var(--black)' : 'var(--grey)',
                transition: 'all 0.2s',
              }}>
                {p}
              </button>
            ))}
          </div>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.5rem',
          alignItems: 'start',
        }}>
          {plans.map(plan => (
            <div key={plan.name} style={{
              background: plan.highlight ? 'linear-gradient(135deg, #0a1020 0%, #111 100%)' : 'var(--dark)',
              border: plan.highlight ? '1px solid rgba(0,180,255,0.4)' : '1px solid rgba(255,255,255,0.06)',
              borderRadius: '4px',
              padding: '2.5rem',
              position: 'relative',
              transform: plan.highlight ? 'scale(1.03)' : 'scale(1)',
              transition: 'transform 0.2s',
            }}>
              {plan.tag && (
                <div style={{
                  position: 'absolute',
                  top: '-12px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  background: 'var(--pulse)',
                  color: 'var(--black)',
                  padding: '0.25rem 1rem',
                  fontFamily: 'var(--font-condensed)',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  borderRadius: '2px',
                  whiteSpace: 'nowrap',
                }}>
                  {plan.tag}
                </div>
              )}

              <h3 style={{
                fontFamily: 'var(--font-display)',
                fontSize: '2rem',
                color: plan.highlight ? 'var(--pulse)' : 'var(--white)',
                letterSpacing: '0.05em',
                marginBottom: '0.5rem',
              }}>{plan.name}</h3>

              <div style={{ marginBottom: '2rem' }}>
                <span style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '3rem',
                  color: 'var(--white)',
                  lineHeight: 1,
                }}>₹{getPrice(plan).toLocaleString('en-IN')}</span>
                <span style={{
                  fontFamily: 'var(--font-condensed)',
                  fontSize: '0.85rem',
                  color: 'var(--grey)',
                  marginLeft: '0.3rem',
                  letterSpacing: '0.1em',
                }}>{periodLabel[period]}</span>
              </div>

              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.8rem',
                marginBottom: '2rem',
              }}>
                {plan.features.map(f => (
                  <div key={f} style={{ display: 'flex', gap: '0.7rem', alignItems: 'flex-start' }}>
                    <Check size={16} color="#00b4ff" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <span style={{ fontSize: '0.9rem', color: 'var(--grey-light)', fontWeight: 300 }}>{f}</span>
                  </div>
                ))}
              </div>

              <a href="#contact" style={{
                display: 'block',
                textAlign: 'center',
                padding: '0.85rem',
                background: plan.highlight ? 'var(--pulse)' : 'transparent',
                border: plan.highlight ? 'none' : '1px solid rgba(0,180,255,0.3)',
                color: plan.highlight ? 'var(--black)' : 'var(--pulse)',
                fontFamily: 'var(--font-condensed)',
                fontWeight: 700,
                fontSize: '0.95rem',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                borderRadius: '2px',
                transition: 'all 0.2s',
              }}
                onMouseEnter={e => {
                  if (!plan.highlight) {
                    e.target.style.background = 'rgba(0,180,255,0.08)'
                  } else {
                    e.target.style.background = '#0090cc'
                  }
                }}
                onMouseLeave={e => {
                  e.target.style.background = plan.highlight ? 'var(--pulse)' : 'transparent'
                }}
              >
                Get Started
              </a>
            </div>
          ))}
        </div>

        <p style={{
          textAlign: 'center',
          marginTop: '2rem',
          fontSize: '0.85rem',
          color: 'var(--grey)',
          fontWeight: 300,
        }}>
          All prices are inclusive of GST. Contact us for corporate and student discounts.
        </p>
      </div>
    </section>
  )
}
