import { useEffect, useRef } from 'react'

const STAR_LERP  = 0.22
const CURSOR_GAP = 24

function drawStarPath(ctx, cx, cy, spikes, outerR, innerR, rotation = 0) {
  let angle = rotation - Math.PI / 2
  const step = Math.PI / spikes
  ctx.beginPath()
  for (let i = 0; i < spikes; i++) {
    ctx.lineTo(cx + Math.cos(angle) * outerR, cy + Math.sin(angle) * outerR)
    angle += step
    ctx.lineTo(cx + Math.cos(angle) * innerR, cy + Math.sin(angle) * innerR)
    angle += step
  }
  ctx.closePath()
}

export default function CursorComet() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx    = canvas.getContext('2d')
    let animId

    let cursorX = -999, cursorY = -999
    let prevCursorX = -999, prevCursorY = -999
    let starX   = -999, starY   = -999
    let lastAngle  = 0
    let overSkills = false
    let t = 0

    const resize = () => {
      canvas.width  = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const onMouseMove = (e) => {
      const el = document.getElementById('skills')
      if (el) {
        const r = el.getBoundingClientRect()
        overSkills = e.clientY >= r.top && e.clientY <= r.bottom
      } else {
        overSkills = false
      }
      cursorX = e.clientX
      cursorY = e.clientY

      const mdx = cursorX - prevCursorX
      const mdy = cursorY - prevCursorY
      if (mdx * mdx + mdy * mdy > 0.5) {
        lastAngle = Math.atan2(mdy, mdx)
      }
      prevCursorX = cursorX
      prevCursorY = cursorY
    }

    window.addEventListener('mousemove', onMouseMove)

    const drawGlowingStar = (x, y, pulse) => {
      const outerR = 7 + pulse * 1.5
      const innerR = outerR * 0.42
      const rotation = t * 0.015

      const glow = ctx.createRadialGradient(x, y, 0, x, y, 28 + pulse * 6)
      glow.addColorStop(0, 'rgba(255,245,255,0.55)')
      glow.addColorStop(0.35, 'rgba(190,160,255,0.22)')
      glow.addColorStop(1, 'rgba(120,80,255,0)')
      ctx.fillStyle = glow
      ctx.beginPath()
      ctx.arc(x, y, 28 + pulse * 6, 0, Math.PI * 2)
      ctx.fill()

      drawStarPath(ctx, x, y, 4, outerR + 4, innerR + 2, rotation)
      ctx.fillStyle = 'rgba(180,150,255,0.25)'
      ctx.fill()

      drawStarPath(ctx, x, y, 4, outerR, innerR, rotation)
      ctx.fillStyle = 'rgba(245,240,255,0.95)'
      ctx.fill()

      ctx.beginPath()
      ctx.arc(x, y, 2.2, 0, Math.PI * 2)
      ctx.fillStyle = 'rgba(255,255,255,1)'
      ctx.fill()
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      t += 1

      if (!overSkills && cursorX > -900) {
        const targetX = cursorX - Math.cos(lastAngle) * CURSOR_GAP
        const targetY = cursorY - Math.sin(lastAngle) * CURSOR_GAP

        if (starX < -900) {
          starX = targetX
          starY = targetY
        } else {
          starX += (targetX - starX) * STAR_LERP
          starY += (targetY - starY) * STAR_LERP
        }

        const pulse = Math.sin(t * 0.07) * 0.5 + 0.5
        drawGlowingStar(starX, starY, pulse)
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
