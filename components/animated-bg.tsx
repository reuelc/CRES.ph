"use client"

import { useEffect, useRef } from "react"

type Particle = {
  x: number
  y: number
  vx: number
  vy: number
  r: number
  hue: number
}

type Ripple = {
  x: number
  y: number
  t: number // timestamp ms
}

export default function AnimatedBg() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const rafRef = useRef<number | null>(null)
  const ripplesRef = useRef<Ripple[]>([])

  useEffect(() => {
    const canvas = canvasRef.current!
    const ctx = canvas.getContext("2d", { alpha: true })!
    let w = (canvas.width = canvas.offsetWidth * devicePixelRatio)
    let h = (canvas.height = canvas.offsetHeight * devicePixelRatio)
    ctx.scale(devicePixelRatio, devicePixelRatio)

    const resize = () => {
      w = canvas.width = canvas.offsetWidth * devicePixelRatio
      h = canvas.height = canvas.offsetHeight * devicePixelRatio
      ctx.setTransform(1, 0, 0, 1, 0, 0)
      ctx.scale(devicePixelRatio, devicePixelRatio)
      initParticles()
    }

    const ro = new ResizeObserver(resize)
    ro.observe(canvas)

    // Particles
    let particles: Particle[] = []
    const initParticles = () => {
      const density = Math.min(140, Math.max(60, Math.floor((canvas.clientWidth * canvas.clientHeight) / 15000)))
      particles = Array.from({ length: density }, () => ({
        x: Math.random() * canvas.clientWidth,
        y: Math.random() * canvas.clientHeight,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        r: 1 + Math.random() * 1.8,
        hue: 210 + Math.random() * 40, // blue range
      }))
    }
    initParticles()

    // Mouse ripple
    const onMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      const x = (e.clientX - rect.left)
      const y = (e.clientY - rect.top)
      ripplesRef.current.push({ x, y, t: performance.now() })
      // Limit ripples
      if (ripplesRef.current.length > 8) ripplesRef.current.shift()
    }
    canvas.addEventListener("mousemove", onMove)
    canvas.addEventListener("mouseenter", onMove)

    const loop = () => {
      const now = performance.now()
      // clear with slight transparency for trails
      ctx.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight)

      // Draw subtle connecting lines
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]
        for (let j = i + 1; j < particles.length; j++) {
          const q = particles[j]
          const dx = p.x - q.x
          const dy = p.y - q.y
          const d2 = dx * dx + dy * dy
          if (d2 < 120 * 120) {
            ctx.strokeStyle = `hsla(214, 80%, 56%, ${0.05 * (1 - d2 / (120 * 120))})`
            ctx.beginPath()
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(q.x, q.y)
            ctx.stroke()
          }
        }
      }

      // update and draw particles
      for (const p of particles) {
        // ripple influence
        let ax = 0
        let ay = 0
        for (const r of ripplesRef.current) {
          const age = (now - r.t) / 1000 // s
          if (age > 1.2) continue
          const dx = p.x - r.x
          const dy = p.y - r.y
          const dist = Math.hypot(dx, dy)
          const wave = Math.sin((dist - age * 240) * 0.06)
          const influence = Math.max(0, 1 - age) * 0.12
          if (dist < 300) {
            ax += (dx / (dist + 0.001)) * wave * influence
            ay += (dy / (dist + 0.001)) * wave * influence
          }
        }

        p.vx += ax
        p.vy += ay

        // mild drift back to slow speed
        p.vx *= 0.985
        p.vy *= 0.985

        p.x += p.vx
        p.y += p.vy

        // bounds with wrap
        const W = canvas.clientWidth
        const H = canvas.clientHeight
        if (p.x < -10) p.x = W + 10
        if (p.x > W + 10) p.x = -10
        if (p.y < -10) p.y = H + 10
        if (p.y > H + 10) p.y = -10

        ctx.fillStyle = `hsla(${p.hue}, 80%, 60%, 0.9)`
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fill()
      }

      // purge old ripples
      ripplesRef.current = ripplesRef.current.filter(r => now - r.t < 1600)

      rafRef.current = requestAnimationFrame(loop)
    }
    rafRef.current = requestAnimationFrame(loop)

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
      canvas.removeEventListener("mousemove", onMove)
      canvas.removeEventListener("mouseenter", onMove)
      ro.disconnect()
    }
  }, [])

  return (
    <div className="absolute inset-0">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_10%_-10%,#bfdbfe_0%,transparent_60%),linear-gradient(to_bottom,#eff6ff,white)]" />
      {/* Animated particles */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 h-full w-full"
        aria-hidden="true"
      />
    </div>
  )
}
