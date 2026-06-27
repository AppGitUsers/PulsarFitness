import React, { useState } from 'react'
import { Phone, Mail, MapPin, MessageCircle, Clock, Send } from 'lucide-react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = e => {
    e.preventDefault()
    setSent(true)
    setTimeout(() => setSent(false), 4000)
    setForm({ name: '', phone: '', email: '', message: '' })
  }

  const contactItems = [
    {
      icon: Phone,
      label: 'Call Us',
      value: '+91 93449 83750',
      link: 'tel:+919344983750',
    },
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      value: '+91 93449 83750',
      link: 'https://wa.me/919344983750',
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'mohanraja23032003@gmail.com',
      link: 'mailto:mohanraja23032003@gmail.com',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'No.442, Old Ambattur, SIDCO Industrial Estate, Chennai - 600058',
      link: 'https://maps.google.com/?q=No.442,Old+Ambattur,SIDCO+Industrial+Estate,Chennai+600058',
    },
    {
      icon: Clock,
      label: 'Timings',
      value: 'Mon – Sat: 5:30 AM – 10:00 PM\nSunday: 6:00 AM – 8:00 PM',
      link: null,
    },
  ]

  return (
    <section id="contact" style={{
      padding: '7rem 2rem',
      background: 'var(--dark)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '1px',
        background: 'linear-gradient(90deg, transparent, var(--pulse), transparent)',
      }} />

      <div style={{
        position: 'absolute',
        top: '50%',
        left: '-100px',
        width: '400px',
        height: '400px',
        background: 'radial-gradient(circle, rgba(0,180,255,0.05) 0%, transparent 70%)',
        transform: 'translateY(-50%)',
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
            Reach Out
          </p>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2.5rem, 6vw, 5rem)',
            color: 'var(--white)',
            lineHeight: '1',
          }}>
            LET'S GET<br /><span style={{ color: 'var(--pulse)' }}>STARTED</span>
          </h2>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '4rem',
          alignItems: 'start',
        }} className="contact-grid">

          {/* Left — Contact info */}
          <div>
            <p style={{
              fontSize: '1rem',
              color: 'var(--grey-light)',
              lineHeight: '1.7',
              fontWeight: 300,
              marginBottom: '2.5rem',
            }}>
              Ready to start your fitness journey? Reach out to us directly or fill the form and our team will get back to you within 24 hours.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
              {contactItems.map(({ icon: Icon, label, value, link }) => (
                <div key={label} style={{
                  display: 'flex',
                  gap: '1rem',
                  alignItems: 'flex-start',
                }}>
                  <div style={{
                    flexShrink: 0,
                    width: '40px',
                    height: '40px',
                    background: 'rgba(0,180,255,0.08)',
                    border: '1px solid rgba(0,180,255,0.15)',
                    borderRadius: '4px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                    <Icon size={18} color="#00b4ff" />
                  </div>
                  <div>
                    <div style={{
                      fontFamily: 'var(--font-condensed)',
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      letterSpacing: '0.2em',
                      textTransform: 'uppercase',
                      color: 'var(--grey)',
                      marginBottom: '0.2rem',
                    }}>{label}</div>
                    {link ? (
                      <a href={link} target={link.startsWith('http') ? '_blank' : '_self'} rel="noreferrer" style={{
                        fontSize: '0.95rem',
                        color: 'var(--grey-light)',
                        fontWeight: 400,
                        transition: 'color 0.2s',
                        whiteSpace: 'pre-line',
                      }}
                        onMouseEnter={e => e.target.style.color = '#00b4ff'}
                        onMouseLeave={e => e.target.style.color = 'var(--grey-light)'}
                      >{value}</a>
                    ) : (
                      <span style={{ fontSize: '0.95rem', color: 'var(--grey-light)', whiteSpace: 'pre-line' }}>{value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Manager badge */}
            <div style={{
              marginTop: '2.5rem',
              padding: '1.5rem',
              background: 'var(--dark-2)',
              border: '1px solid rgba(0,180,255,0.15)',
              borderRadius: '4px',
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
            }}>
              <div style={{
                width: '50px',
                height: '50px',
                background: 'var(--pulse)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontFamily: 'var(--font-display)',
                fontSize: '1.4rem',
                color: 'var(--black)',
                flexShrink: 0,
              }}>M</div>
              <div>
                <div style={{
                  fontFamily: 'var(--font-condensed)',
                  fontSize: '1rem',
                  fontWeight: 700,
                  color: 'var(--white)',
                  letterSpacing: '0.05em',
                }}>Mohanraj A</div>
                <div style={{
                  fontFamily: 'var(--font-condensed)',
                  fontSize: '0.78rem',
                  color: 'var(--pulse)',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                }}>Founder & Head Trainer</div>
              </div>
            </div>
          </div>

          {/* Right — Form */}
          <div style={{
            background: 'var(--dark-2)',
            border: '1px solid rgba(255,255,255,0.06)',
            borderRadius: '4px',
            padding: '2.5rem',
          }}>
            <h3 style={{
              fontFamily: 'var(--font-display)',
              fontSize: '1.8rem',
              color: 'var(--white)',
              letterSpacing: '0.05em',
              marginBottom: '1.5rem',
            }}>
              SEND A MESSAGE
            </h3>

            {sent && (
              <div style={{
                background: 'rgba(0,180,255,0.1)',
                border: '1px solid rgba(0,180,255,0.3)',
                borderRadius: '4px',
                padding: '1rem',
                marginBottom: '1.5rem',
                fontFamily: 'var(--font-condensed)',
                color: 'var(--pulse)',
                fontSize: '0.95rem',
                letterSpacing: '0.05em',
              }}>
                ✓ Message sent! We'll get back to you soon.
              </div>
            )}

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {[
                { name: 'name', label: 'Full Name', type: 'text', placeholder: 'Your name' },
                { name: 'phone', label: 'Phone Number', type: 'tel', placeholder: '+91 XXXXX XXXXX' },
                { name: 'email', label: 'Email Address', type: 'email', placeholder: 'your@email.com' },
              ].map(field => (
                <div key={field.name}>
                  <label style={{
                    display: 'block',
                    fontFamily: 'var(--font-condensed)',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                    color: 'var(--grey)',
                    marginBottom: '0.4rem',
                  }}>{field.label}</label>
                  <input
                    type={field.type}
                    name={field.name}
                    value={form[field.name]}
                    onChange={handleChange}
                    placeholder={field.placeholder}
                    required
                    style={{
                      width: '100%',
                      background: 'var(--dark-3)',
                      border: '1px solid rgba(255,255,255,0.08)',
                      borderRadius: '2px',
                      padding: '0.75rem 1rem',
                      color: 'var(--white)',
                      fontSize: '0.95rem',
                      fontFamily: 'var(--font-body)',
                      outline: 'none',
                      transition: 'border-color 0.2s',
                    }}
                    onFocus={e => e.target.style.borderColor = 'rgba(0,180,255,0.4)'}
                    onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.08)'}
                  />
                </div>
              ))}

              <div>
                <label style={{
                  display: 'block',
                  fontFamily: 'var(--font-condensed)',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: 'var(--grey)',
                  marginBottom: '0.4rem',
                }}>Message</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell us about your fitness goals..."
                  rows={4}
                  style={{
                    width: '100%',
                    background: 'var(--dark-3)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    borderRadius: '2px',
                    padding: '0.75rem 1rem',
                    color: 'var(--white)',
                    fontSize: '0.95rem',
                    fontFamily: 'var(--font-body)',
                    outline: 'none',
                    resize: 'vertical',
                    transition: 'border-color 0.2s',
                  }}
                  onFocus={e => e.target.style.borderColor = 'rgba(0,180,255,0.4)'}
                  onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.08)'}
                />
              </div>

              <button type="submit" style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.6rem',
                background: 'var(--pulse)',
                color: 'var(--black)',
                padding: '1rem',
                fontFamily: 'var(--font-condensed)',
                fontWeight: 700,
                fontSize: '1rem',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                borderRadius: '2px',
                transition: 'all 0.2s',
                marginTop: '0.5rem',
              }}
                onMouseEnter={e => e.currentTarget.style.background = '#0090cc'}
                onMouseLeave={e => e.currentTarget.style.background = 'var(--pulse)'}
              >
                <Send size={16} />
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Map embed area */}
        <div style={{
          marginTop: '4rem',
          borderRadius: '4px',
          overflow: 'hidden',
          border: '1px solid rgba(0,180,255,0.1)',
          height: '300px',
          background: 'var(--dark-2)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          gap: '1rem',
        }}>
          <MapPin size={32} color="#00b4ff" />
          <p style={{
            fontFamily: 'var(--font-condensed)',
            fontSize: '1rem',
            color: 'var(--grey)',
            letterSpacing: '0.05em',
            textAlign: 'center',
            padding: '0 2rem',
          }}>
            No.442, Old Ambattur, SIDCO Industrial Estate, Chennai - 600058, Tamil Nadu
          </p>
          <a
            href="https://maps.google.com/?q=No.442,Old+Ambattur,SIDCO+Industrial+Estate,Chennai+600058"
            target="_blank"
            rel="noreferrer"
            style={{
              fontFamily: 'var(--font-condensed)',
              fontSize: '0.85rem',
              fontWeight: 700,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: 'var(--pulse)',
              border: '1px solid rgba(0,180,255,0.3)',
              padding: '0.5rem 1.5rem',
              borderRadius: '2px',
              transition: 'all 0.2s',
            }}
            onMouseEnter={e => e.target.style.background = 'rgba(0,180,255,0.08)'}
            onMouseLeave={e => e.target.style.background = 'transparent'}
          >
            Open in Google Maps
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; gap: 2.5rem !important; }
        }
      `}</style>
    </section>
  )
}
