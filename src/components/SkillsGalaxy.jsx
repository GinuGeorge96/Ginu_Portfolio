import { useEffect, useRef } from 'react'

/* ── Skill categories ── */
const CATS = [
  {
    label: 'Frontend',
    color: '#60a5fa',
    skills: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'Sass'],
    orbitF: 0.15, speed:  0.00038,
  },
  {
    label: 'Backend & APIs',
    color: '#34d399',
    skills: ['Node.js', 'FastAPI', 'C#', 'REST APIs', 'API Design'],
    orbitF: 0.225, speed: -0.00030,
  },
  {
    label: 'AI / Data Systems',
    color: '#f97316',
    skills: ['OpenAI API', 'RAG Systems', 'Semantic Search', 'NLP', 'LLMs'],
    orbitF: 0.305, speed:  0.00024,
  },
  {
    label: 'Databases',
    color: '#fb923c',
    skills: ['PostgreSQL', 'MySQL', 'MongoDB'],
    orbitF: 0.375, speed: -0.00020,
  },
  {
    label: 'Cloud & DevOps',
    color: '#22d3ee',
    skills: ['AWS', 'Docker', 'GitHub Actions', 'Vercel', 'CI/CD'],
    orbitF: 0.445, speed:  0.00016,
  },
  {
    label: 'Tools & Practices',
    color: '#f472b6',
    skills: ['Agile', 'JIRA', 'System Design', 'TDD', 'Git'],
    orbitF: 0.505, speed: -0.00012,
  },
]

function hexRgb(hex) {
  return [
    parseInt(hex.slice(1, 3), 16),
    parseInt(hex.slice(3, 5), 16),
    parseInt(hex.slice(5, 7), 16),
  ]
}

export default function SkillsGalaxy() {
  const canvasRef  = useRef(null)
  const wrapRef    = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const wrap   = wrapRef.current
    const ctx    = canvas.getContext('2d')
    let animId
    let W = 800, H = 460

    // Stable per-category initial angle offsets
    const angles = CATS.map((_, i) => (i * Math.PI * 2) / CATS.length)

    let bgStars = []
    const genStars = () => {
      bgStars = Array.from({ length: 90 }, () => ({
        x: Math.random() * W,
        y: Math.random() * H,
        r: Math.random() * 1.0 + 0.2,
        a: Math.random() * 0.25 + 0.08,
      }))
    }

    const setup = () => {
      W = wrap.clientWidth
      H = 460
      canvas.width  = W
      canvas.height = H
      genStars()
    }
    setup()

    const ro = new ResizeObserver(setup)
    ro.observe(wrap)

    let corePhase = 0

    const drawFrame = () => {
      const cx = W / 2
      const cy = H / 2

      ctx.clearRect(0, 0, W, H)

      // ── Background ──────────────────────────────────
      ctx.fillStyle = '#02020e'
      ctx.fillRect(0, 0, W, H)

      // Central nebula glow
      const nb = ctx.createRadialGradient(cx, cy, 0, cx, cy, Math.min(W, H) * 0.7)
      nb.addColorStop(0,   'rgba(75,20,150,0.22)')
      nb.addColorStop(0.45,'rgba(40,10,80,0.06)')
      nb.addColorStop(1,   'rgba(0,0,0,0)')
      ctx.fillStyle = nb; ctx.fillRect(0, 0, W, H)

      // Static background stars
      for (const s of bgStars) {
        ctx.beginPath()
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255,255,255,${s.a})`
        ctx.fill()
      }

      // ── Orbits + skill nodes ─────────────────────────
      CATS.forEach((cat, idx) => {
        angles[idx] += cat.speed
        const r  = cat.orbitF * W * 0.90   // X radius (full width)
        const ry = cat.orbitF * H * 0.72   // Y radius (compressed for height)
        const [rc, gc, bc] = hexRgb(cat.color)

        // Draw orbit ellipse
        ctx.beginPath()
        ctx.ellipse(cx, cy, r, ry, 0, 0, Math.PI * 2)
        ctx.strokeStyle = `rgba(${rc},${gc},${bc},0.10)`
        ctx.lineWidth = 1
        ctx.stroke()

        // Build skill positions for this frame, then sort by Y (painter's algo)
        const nodes = cat.skills.map((skill, j) => {
          const a   = angles[idx] + (Math.PI * 2 / cat.skills.length) * j
          const sx  = cx + Math.cos(a) * r
          const sy  = cy + Math.sin(a) * ry
          const sinA = Math.sin(a)
          const depth = (sinA + 1) / 2  // 0 = far (top), 1 = near (bottom)
          return { skill, sx, sy, depth }
        })
        // Render back-to-front so near nodes appear on top
        nodes.sort((a, b) => a.depth - b.depth)

        for (const { skill, sx, sy, depth } of nodes) {
          const nodeR    = 2.5 + depth * 4.5
          const txtAlpha = 1
          const fSize    = 13

          // Glow halo (only for nearer nodes to keep things clean)
          if (depth > 0.25) {
            const gl = ctx.createRadialGradient(sx, sy, 0, sx, sy, nodeR * 5.5)
            gl.addColorStop(0, `rgba(${rc},${gc},${bc},${0.28 * depth})`)
            gl.addColorStop(1, 'rgba(0,0,0,0)')
            ctx.fillStyle = gl
            ctx.beginPath(); ctx.arc(sx, sy, nodeR * 5.5, 0, Math.PI * 2); ctx.fill()
          }

          // Node dot
          ctx.beginPath(); ctx.arc(sx, sy, nodeR, 0, Math.PI * 2)
          ctx.fillStyle   = cat.color
          ctx.shadowColor = cat.color
          ctx.shadowBlur  = depth > 0.55 ? 10 : 0
          ctx.fill()
          ctx.shadowBlur  = 0

          // Skill label
          ctx.font      = `500 ${fSize}px 'Space Grotesk', sans-serif`
          ctx.fillStyle = `rgba(255,255,255,${txtAlpha})`
          ctx.textAlign = 'center'
          ctx.fillText(skill, sx, sy + nodeR + fSize + 1)
        }
      })

      // ── Core ────────────────────────────────────────
      corePhase += 0.018
      const pulse   = (Math.sin(corePhase) + 1) / 2
      const minDim  = Math.min(W, H)
      const coreR   = minDim * 0.05 + pulse * minDim * 0.01

      // Outer glow
      const cg = ctx.createRadialGradient(cx, cy, 0, cx, cy, coreR * 5.5)
      cg.addColorStop(0,   `rgba(190,150,255,${0.28 + pulse * 0.18})`)
      cg.addColorStop(0.45,`rgba(130,70,220,0.08)`)
      cg.addColorStop(1,   'rgba(0,0,0,0)')
      ctx.fillStyle = cg; ctx.beginPath(); ctx.arc(cx, cy, coreR * 5.5, 0, Math.PI * 2); ctx.fill()

      // Inner bright disc
      const ci = ctx.createRadialGradient(cx, cy, 0, cx, cy, coreR * 2.2)
      ci.addColorStop(0, 'rgba(220,200,255,0.95)')
      ci.addColorStop(1, 'rgba(110,60,200,0)')
      ctx.fillStyle  = ci; ctx.beginPath(); ctx.arc(cx, cy, coreR * 2.2, 0, Math.PI * 2); ctx.fill()

      // Solid core
      ctx.beginPath(); ctx.arc(cx, cy, coreR, 0, Math.PI * 2)
      ctx.fillStyle   = '#bfdbfe'
      ctx.shadowColor = '#60a5fa'
      ctx.shadowBlur  = 22
      ctx.fill(); ctx.shadowBlur = 0

      // Core text
      const cfs = Math.max(9, minDim * 0.025)
      ctx.font          = `bold ${cfs}px 'Space Grotesk', sans-serif`
      ctx.fillStyle     = '#1e1040'
      ctx.textAlign     = 'center'
      ctx.textBaseline  = 'middle'
      ctx.fillText('AI',  cx, cy - cfs * 0.5)
      ctx.fillText('DEV', cx, cy + cfs * 0.65)
      ctx.textBaseline  = 'alphabetic'

      animId = requestAnimationFrame(drawFrame)
    }
    drawFrame()

    return () => {
      cancelAnimationFrame(animId)
      ro.disconnect()
    }
  }, [])

  return (
    <section id="skills">
      <div className="container">
        <div className="text-center mb-5" data-aos="fade-up">
          <h2 className="section-title">Skills <span>Galaxy</span></h2>
          <p className="section-sub">Technologies orbiting around my core expertise</p>
        </div>
      </div>

      <div ref={wrapRef} className="galaxy-wrap" data-aos="zoom-in" data-aos-duration="1000">
        <canvas ref={canvasRef} />
      </div>

      <div className="container">
        <div className="legend" data-aos="fade-up" data-aos-delay="200">
          {CATS.map(c => (
            <div key={c.label} className="legend-item">
              <div className="legend-dot" style={{ background: c.color, boxShadow: `0 0 7px ${c.color}` }} />
              <span>{c.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
