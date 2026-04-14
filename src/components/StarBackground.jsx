import { useEffect, useRef } from 'react'

export default function StarBackground() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let animId
    let shootTimer

    const resize = () => {
      canvas.width  = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    // Twinkling stars
    const stars = Array.from({ length: 380 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.6 + 0.2,
      a: Math.random() * 0.6 + 0.3,
      da: (Math.random() * 0.006 + 0.002) * (Math.random() > 0.5 ? 1 : -1),
    }))

    // Shooting stars pool
    const shoots = []
    const spawnShoot = () => {
      if (shoots.length >= 2) return
      shoots.push({
        x:  Math.random() * canvas.width  * 0.75,
        y:  Math.random() * canvas.height * 0.45,
        vx: 5 + Math.random() * 5,
        vy: 2.5 + Math.random() * 3,
        len: 90 + Math.random() * 90,
        a: 1,
      })
    }
    shootTimer = setInterval(spawnShoot, 4500)

    const draw = () => {
      const W = canvas.width
      const H = canvas.height
      ctx.clearRect(0, 0, W, H)

      // Base background
      ctx.fillStyle = '#060612'
      ctx.fillRect(0, 0, W, H)

      // Purple nebula — left/centre
      const n1 = ctx.createRadialGradient(W * 0.22, H * 0.38, 0, W * 0.22, H * 0.38, W * 0.38)
      n1.addColorStop(0, 'rgba(90,30,170,0.09)')
      n1.addColorStop(1, 'rgba(0,0,0,0)')
      ctx.fillStyle = n1; ctx.fillRect(0, 0, W, H)

      // Cyan nebula — right
      const n2 = ctx.createRadialGradient(W * 0.78, H * 0.62, 0, W * 0.78, H * 0.62, W * 0.3)
      n2.addColorStop(0, 'rgba(6,182,212,0.06)')
      n2.addColorStop(1, 'rgba(0,0,0,0)')
      ctx.fillStyle = n2; ctx.fillRect(0, 0, W, H)

      // Stars
      for (const s of stars) {
        s.a += s.da
        if (s.a > 0.95 || s.a < 0.1) s.da *= -1
        ctx.beginPath()
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255,255,255,${s.a})`
        ctx.fill()
      }

      // Shooting stars
      for (let i = shoots.length - 1; i >= 0; i--) {
        const s = shoots[i]
        const tailX = s.x - s.vx * (s.len / 9)
        const tailY = s.y - s.vy * (s.len / 9)
        const g = ctx.createLinearGradient(s.x, s.y, tailX, tailY)
        g.addColorStop(0, `rgba(255,255,255,${s.a})`)
        g.addColorStop(1, 'rgba(255,255,255,0)')
        ctx.beginPath(); ctx.moveTo(s.x, s.y); ctx.lineTo(tailX, tailY)
        ctx.strokeStyle = g; ctx.lineWidth = 1.4; ctx.stroke()
        s.x += s.vx; s.y += s.vy; s.a -= 0.014
        if (s.a <= 0 || s.x > canvas.width || s.y > canvas.height) shoots.splice(i, 1)
      }

      animId = requestAnimationFrame(draw)
    }
    draw()

    return () => {
      cancelAnimationFrame(animId)
      clearInterval(shootTimer)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed', inset: 0,
        width: '100%', height: '100%',
        zIndex: -1, pointerEvents: 'none',
      }}
    />
  )
}
