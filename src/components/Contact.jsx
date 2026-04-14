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
                Listening for transmissions<br />
                <span className="sig-hi">// Gothenburg &nbsp;·&nbsp; Remote &nbsp;·&nbsp; Open</span>
              </p>
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
        <div className="container" />
      </footer>
    </>
  )
}
