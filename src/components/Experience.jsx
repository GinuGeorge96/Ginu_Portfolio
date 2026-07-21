import { useEffect, useRef } from 'react'
import AOS from 'aos'

const JOBS = [
  {
    company: 'Pink Bytes',
    url:     'https://www.pinkbytes.se/',
    role:    'Founder & Full Stack Developer - Self-Employed',
    period:  '2026 – Present',
    location:'Sweden',
    bullets: [
      'Building full-stack web applications and AI-powered solutions, from backend APIs and frontend experiences to AI-enabled features and deployment.',
      'Managing projects independently across requirements, solution design, development, and delivery.',
    ],
  },
  {
    company: 'Grantigo',
    url:     'https://grantigo.com/en/',
    role:    'Software Engineer - Full Stack & AI',
    period:  'Jan – June 2026',
    location:'Linköping, Sweden',
    bullets: [
      'Built AI-powered profile matching and semantic search capabilities using embeddings and vector search.',
      'Developed scalable backend services and REST APIs using C# and PostgreSQL.',
      'Integrated OpenAI and Firecrawl APIs to enable AI-driven features and automated data workflows.',
      'Built data processing pipelines to transform raw external data into structured information for AI-powered applications.',
      'Created OpenAPI documentation and developer guides to improve API usability and developer experience.',
    ],
  },
  {
    company: 'GKN Aerospace',
    url:     'https://www.gknaerospace.com/se/',
    role:    'Master Thesis - Full Stack & Data Engineering',
    period:  'Jan 2025 – Jun 2025',
    location:'Trollhättan, Sweden',
    bullets: [
      'Built a full-stack industrial data platform using Next.js, FastAPI, and PostgreSQL to make manufacturing and sustainability data easier to explore.',
      'Designed data models and processing workflows for structured and semi-structured machine data.',
      'Developed MQTT-based pipelines to ingest and transform real-time sensor data for analysis.',
      'Created interactive data visualization dashboards that turned complex industrial data into accessible insights.',
      'Containerized the end-to-end application using Docker for reproducible deployment.',
    ],
  },
  {
    company: 'Gopush',
    url:     'https://gopush.se/',
    role:    'Full Stack Engineer - Volunteer',
    period:  'Oct 2025 – Jan 2026',
    location:'Sweden',
    bullets: [
      'Built the MVP using React and TypeScript, helping turn an early-stage product concept into a working application.',
      'Developed reusable UI components and integrated real-time frontend functionality.',
      'Designed a scalable frontend architecture with maintainability and future product growth in mind.',
    ],
  },
  {
    company: 'Tata Consultancy Services (TCS)',
    url:     'https://www.tcs.com/',
    role:    'Software Engineer - Automation & Integrations',
    period:  'Jan 2020 – Aug 2023',
    location:'India',
    bullets: [
      'Built enterprise automation solutions using SAP IRPA, Python, and JavaScript, streamlining repetitive business processes.',
      'Developed and maintained API integrations connecting SAP ERP with enterprise platforms and internal systems.',
      'Worked with large-scale enterprise applications in production environments, contributing to reliable and maintainable solutions.',
      'Collaborated within Agile teams to deliver and support production-grade software across the development lifecycle.',
    ],
  },
]

const DOT_OFFSET = 10

export default function Experience() {
  const timelineRef = useRef(null)
  const flowDotRef  = useRef(null)
  const segmentRef  = useRef(null)
  const lastHitRef  = useRef(-1)

  useEffect(() => {
    const section  = document.getElementById('experience')
    const timeline = timelineRef.current
    const flowDot  = flowDotRef.current
    const segment  = segmentRef.current
    if (!section || !timeline || !flowDot || !segment) return

    const TRIGGER_RATIO = 0.45
    let rafId = 0

    const dotYInWrap = (item) => {
      const wrapTop = timeline.getBoundingClientRect().top
      return item.getBoundingClientRect().top - wrapTop + DOT_OFFSET
    }

    const dotViewportY = (item) => item.getBoundingClientRect().top + DOT_OFFSET

    const triggerHit = (index) => {
      if (index === lastHitRef.current) return
      lastHitRef.current = index
      const dots = timeline.querySelectorAll('.tl-dot')
      const target = dots[index]
      if (!target) return
      target.classList.remove('tl-dot-hit')
      void target.offsetWidth
      target.classList.add('tl-dot-hit')
    }

    const update = () => {
      const items = [...timeline.querySelectorAll('.tl-item')]
      if (items.length < 2) return

      const sectionRect = section.getBoundingClientRect()
      const vh = window.innerHeight
      const inView = sectionRect.bottom > 0 && sectionRect.top < vh

      if (!inView) {
        flowDot.classList.remove('is-flowing')
        segment.style.height = '0px'
        return
      }

      const trigger = vh * TRIGGER_RATIO
      let seg = 0
      let p = 0

      if (dotViewportY(items[0]) > trigger) {
        seg = 0
        p = 0
      } else {
        for (let i = 0; i < items.length - 1; i++) {
          const y0 = dotViewportY(items[i])
          const y1 = dotViewportY(items[i + 1])

          if (y0 <= trigger && y1 > trigger) {
            seg = i
            p = (trigger - y0) / (y1 - y0)
            break
          }

          if (y1 <= trigger) {
            seg = i
            p = 1
          }
        }
      }

      p = Math.min(1, Math.max(0, p))

      const fromY = dotYInWrap(items[seg])
      const toY   = dotYInWrap(items[Math.min(seg + 1, items.length - 1)])
      const flowY = fromY + (toY - fromY) * p

      flowDot.style.top = `${flowY}px`
      segment.style.top = `${fromY}px`
      segment.style.height = `${Math.max(0, flowY - fromY)}px`

      const moving = p > 0.01 && p < 0.99
      flowDot.classList.toggle('is-flowing', moving)

      if (p >= 0.99 && seg < items.length - 1) {
        triggerHit(seg + 1)
      }

      if (p < 0.02) {
        lastHitRef.current = -1
      }
    }

    const tick = () => {
      update()
      const sectionRect = section.getBoundingClientRect()
      const inView = sectionRect.bottom > 0 && sectionRect.top < window.innerHeight
      if (inView) {
        rafId = requestAnimationFrame(tick)
      } else {
        rafId = 0
      }
    }

    const kick = () => {
      if (rafId) return
      rafId = requestAnimationFrame(tick)
    }

    kick()
    window.addEventListener('scroll', kick, { passive: true })
    window.addEventListener('resize', kick)

    const t1 = setTimeout(kick, 400)
    const t2 = setTimeout(() => {
      AOS.refresh()
      kick()
    }, 1200)

    return () => {
      clearTimeout(t1)
      clearTimeout(t2)
      if (rafId) cancelAnimationFrame(rafId)
      window.removeEventListener('scroll', kick)
      window.removeEventListener('resize', kick)
    }
  }, [])

  return (
    <section id="experience">
      <div className="container">

        <div className="text-center mb-5" data-aos="fade-up">
          <h2 className="section-title">Work <span>Experience</span></h2>
          <p className="section-sub">My professional journey across industries and countries</p>
        </div>

        <div className="timeline-wrap" ref={timelineRef}>
          <div className="tl-segment-progress" ref={segmentRef} aria-hidden="true" />
          <div className="tl-flow-dot" ref={flowDotRef} aria-hidden="true" />

          <ul className="timeline">
          {JOBS.map((job, i) => (
            <li
              key={i}
              className="tl-item"
              data-aos="fade-right"
              data-aos-delay={i * 80}
            >
              <div className="tl-dot" />
              <div className="tl-card">
                <div className="tl-company">
                  <a href={job.url} target="_blank" rel="noreferrer">{job.company}</a>
                </div>
                <div className="tl-role">{job.role}</div>
                <div className="tl-meta">
                  <span>📅 {job.period}</span>
                  <span>📍 {job.location}</span>
                </div>
                <ul className="tl-bullets">
                  {job.bullets.map((b, j) => <li key={j}>{b}</li>)}
                </ul>
              </div>
            </li>
          ))}
          </ul>
        </div>

      </div>
    </section>
  )
}
