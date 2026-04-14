import { useEffect, useRef } from 'react'

const TRAIL_LEN = 28

export default function CursorComet() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx    = canvas.getContext('2d')
    let animId
    let trail  = []
    let mouseX = -999, mouseY = -999

    const resize = () => {
      canvas.width  = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const onMouseMove = (e) => {
      // Suppress trail while over the skills section
      const el = document.getElementById('skills')
      if (el) {
        const r = el.getBoundingClientRect()
        if (e.clientY >= r.top && e.clientY <= r.bottom) {
          trail = []
          return
        }
      }
      mouseX = e.clientX
      mouseY = e.clientY
      trail.push({ x: mouseX, y: mouseY })
      if (trail.length > TRAIL_LEN) trail.shift()
    }

    window.addEventListener('mousemove', onMouseMove)

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      if (trail.length > 1) {
        for (let i = 1; i < trail.length; i++) {
          const t     = i / trail.length
          const alpha = t * 0.8
          const width = t * 3.5
          ctx.beginPath()
          ctx.moveTo(trail[i - 1].x, trail[i - 1].y)
          ctx.lineTo(trail[i].x, trail[i].y)
          ctx.strokeStyle = `rgba(200,180,255,${alpha})`
          ctx.lineWidth   = width
          ctx.lineCap     = 'round'
          ctx.stroke()
        }
        const head = trail[trail.length - 1]
        const hg   = ctx.createRadialGradient(head.x, head.y, 0, head.x, head.y, 10)
        hg.addColorStop(0, 'rgba(230,210,255,0.9)')
        hg.addColorStop(1, 'rgba(140,80,255,0)')
        ctx.fillStyle = hg
        ctx.beginPath(); ctx.arc(head.x, head.y, 10, 0, Math.PI * 2); ctx.fill()
      }

      animId = requestAnimationFrame(draw)
    }
    draw()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position:      'fixed',
        top:           0,
        left:          0,
        pointerEvents: 'none',
        zIndex:        9999,
      }}
    />
  )
}
