import { useEffect, useState } from 'react'

const TYPED_WORD = 'Developer'

export default function Hero() {
  const [displayed, setDisplayed] = useState('')

  useEffect(() => {
    let i = 0
    let forward = true
    let timeout

    const tick = () => {
      if (forward) {
        i++
        setDisplayed(TYPED_WORD.slice(0, i))
        if (i === TYPED_WORD.length) {
          forward = false
          timeout = setTimeout(tick, 1800) // pause before erasing
          return
        }
      } else {
        i--
        setDisplayed(TYPED_WORD.slice(0, i))
        if (i === 0) {
          forward = true
          timeout = setTimeout(tick, 400) // pause before retyping
          return
        }
      }
      timeout = setTimeout(tick, forward ? 90 : 55)
    }

    timeout = setTimeout(tick, 600)
    return () => clearTimeout(timeout)
  }, [])

  return (
    <section id="hero">
      <div className="container">
        <div className="row align-items-center g-5">

          {/* ── Left: text ── */}
          <div className="col-lg-7" data-aos="fade-right" data-aos-duration="900">
            <div className="hero-badge">✦ Open to opportunities</div>

            <h1 className="hero-name">
              Hi, I'm{' '}
              <span className="grad">Ginu George</span>
            </h1>

            <div className="hero-role">
              Full-Stack{' '}
              <span className="typed-word">
                {displayed}
                <span className="typed-cursor">|</span>
              </span>
            </div>

            <p className="hero-tagline">
              Building AI systems that transform complex data into actionable insights.
            </p>

            <div className="d-flex flex-wrap gap-3">
              <a href="#contact"  className="btn-pri">Get In Touch</a>
              <a href="#projects" className="btn-out">View Projects</a>
            </div>

            <div className="social-row">
              {/* TODO: Update href values with your real email / profiles */}
              <a href="mailto:ginugeorge96@gmail.com" className="soc-btn" title="Email">✉</a>
              <a href="https://github.com/GinuGeorge96" className="soc-btn" title="GitHub" target="_blank" rel="noreferrer">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/ginu-george-profile/" className="soc-btn" title="LinkedIn" target="_blank" rel="noreferrer">in</a>
            </div>
          </div>

          {/* ── Right: avatar ── */}
          <div className="col-lg-5 text-center" data-aos="fade-left" data-aos-duration="900">
            <div className="avatar-wrap">
              <div className="avatar-ring">
                <div className="avatar-inner">
                  <img src="/avatar.jpg" alt="Profile" />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
