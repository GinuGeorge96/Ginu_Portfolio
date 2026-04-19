import { useEffect, useRef, useState } from 'react'

export default function Contact() {
  const sweepRef = useRef(null)
  const [form, setForm]   = useState({ name: '', email: '', message: '' })
  const [sent, setSent]   = useState(false)

  /* ── Sweep canvas ── */
  useEffect(() => {
    const canvas = sweepRef.current
    const ctx    = canvas.getContext('2d')
    const W = 220, R = 110
    let angle  = 0
    let animId

    const sparks = [
      { a: 1.1, r: 72 },
      { a: 2.4, r: 44 },
      { a: 3.9, r: 88 },
      { a: 5.2, r: 60 },
    ]

    const draw = () => {
      ctx.clearRect(0, 0, W, W)
      ctx.save()
      ctx.translate(R, R)

      /* filled sweep cone */
      const sweep = 1.1
      ctx.beginPath()
      ctx.moveTo(0, 0)
      ctx.arc(0, 0, R - 2, angle - sweep, angle, false)
      ctx.closePath()
      const g = ctx.createLinearGradient(
        Math.cos(angle - sweep) * (R - 2), Math.sin(angle - sweep) * (R - 2),
        Math.cos(angle)         * (R - 2), Math.sin(angle)         * (R - 2),
      )
      g.addColorStop(0, 'rgba(0,229,255,0)')
      g.addColorStop(1, 'rgba(0,229,255,0.11)')
      ctx.fillStyle = g
      ctx.fill()

      /* bright leading arm */
      ctx.beginPath()
      ctx.moveTo(0, 0)
      ctx.lineTo(Math.cos(angle) * (R - 2), Math.sin(angle) * (R - 2))
      ctx.strokeStyle = 'rgba(0,229,255,0.75)'
      ctx.lineWidth   = 1.5
      ctx.shadowColor = 'rgba(0,229,255,0.9)'
      ctx.shadowBlur  = 10
      ctx.stroke()
      ctx.shadowBlur  = 0

      /* sparks */
      for (const sp of sparks) {
        const diff  = ((angle - sp.a) % (Math.PI * 2) + Math.PI * 2) % (Math.PI * 2)
        const alpha = diff < sweep ? (1 - diff / sweep) * 0.85 : 0
        if (alpha > 0) {
          const sx = Math.cos(sp.a) * sp.r
          const sy = Math.sin(sp.a) * sp.r
          ctx.beginPath()
          ctx.arc(sx, sy, 3, 0, Math.PI * 2)
          ctx.fillStyle   = `rgba(0,229,255,${alpha})`
          ctx.shadowColor = `rgba(0,229,255,${alpha})`
          ctx.shadowBlur  = 10
          ctx.fill()
          ctx.shadowBlur  = 0
        }
      }

      ctx.restore()
      angle += 0.022
      animId = requestAnimationFrame(draw)
    }
    draw()
    return () => cancelAnimationFrame(animId)
  }, [])

  const handleChange = e =>
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = e => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <>
      <section id="contact">
        <div className="container">

          <div className="contact-grid">
            {/* Left — radar */}
            <div className="contact-left" data-aos="fade-right">
              <div className="radar-outer">
                <div className="r-cross h" />
                <div className="r-cross v" />
                <div className="r-ring" />
                <div className="r-ring" />
                <div className="r-ring" />
                <div className="r-ring" />
                <canvas ref={sweepRef} className="sweep-canvas" width="220" height="220" />
                <div className="r-dot d1" />
                <div className="r-dot d2" />
                <div className="r-dot d3" />
                <div className="r-dot d4" />
                <div className="r-core" />
              </div>

              <div className="sig-status">
                <div className="sig-blink" />
                <span className="sig-label">Signal Active</span>
              </div>

              <p className="sig-log">
                Listening for transmissions
              </p>

              <div className="contact-info-cards">
                <div className="contact-info-card">
                  <div className="contact-info-icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="4" width="20" height="16" rx="2"/><path d="m2 7 10 7 10-7"/>
                    </svg>
                  </div>
                  <div>
                    <div className="contact-info-label">Email</div>
                    <a href="mailto:ginugeorge96@gmail.com" className="contact-info-value">ginugeorge96@gmail.com</a>
                  </div>
                </div>

                <div className="contact-info-card">
                  <div className="contact-info-icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0z"/><circle cx="12" cy="10" r="3"/>
                    </svg>
                  </div>
                  <div>
                    <div className="contact-info-label">Location</div>
                    <div className="contact-info-value">Gothenburg, Sweden</div>
                  </div>
                </div>
              </div>

            </div>

            {/* Right — form */}
            <div className="contact-right" data-aos="fade-left">
              <h2 className="contact-heading">Let's<br /><span>Connect.</span></h2>
              <p className="contact-desc">
                Transmit a message. I respond to all signals within 24 hours.
              </p>

              {sent ? (
                <div className="contact-sent">
                  Signal received — I'll be in touch soon.
                </div>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="cf-field">
                    <label className="cf-label">IDENTIFIER (NAME)</label>
                    <input
                      className="cf-input"
                      type="text"
                      name="name"
                      placeholder="Your name"
                      value={form.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="cf-field">
                    <label className="cf-label">FREQUENCY (EMAIL)</label>
                    <input
                      className="cf-input"
                      type="email"
                      name="email"
                      placeholder="your@email.com"
                      value={form.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="cf-field">
                    <label className="cf-label">MESSAGE</label>
                    <textarea
                      className="cf-input cf-textarea"
                      name="message"
                      placeholder="Your message..."
                      rows={5}
                      value={form.message}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <button className="cf-btn" type="submit">
                    SEND SIGNAL &nbsp;→
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </section>

      <footer>
        <div className="container">
          <div className="footer-inner">

            {/* Brand */}
            <div className="footer-brand">
              <span className="footer-name">Ginu George</span>
              <p className="footer-tagline">Building thoughtful software, one commit at a time.</p>
            </div>

            {/* Nav links */}
            <nav className="footer-nav">
              {['About','Skills','Experience','Projects','Education','Hobbies','Contact'].map(s => (
                <a key={s} href={`#${s.toLowerCase()}`} className="footer-link">{s}</a>
              ))}
            </nav>

            {/* Social icons */}
            <div className="footer-socials">
              <a href="mailto:ginugeorge96@gmail.com" className="footer-icon" title="Email" aria-label="Email">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="4" width="20" height="16" rx="2"/><path d="m2 7 10 7 10-7"/>
                </svg>
              </a>
              <a href="https://github.com/GinuGeorge96" target="_blank" rel="noreferrer" className="footer-icon" title="GitHub" aria-label="GitHub">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                  <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z"/>
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/ginu-george-profile/" target="_blank" rel="noreferrer" className="footer-icon" title="LinkedIn" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>

          </div>

          <div className="footer-bottom">
            <span>© {new Date().getFullYear()} Ginu George. All rights reserved.</span>
          </div>
        </div>
      </footer>
    </>
  )
}
