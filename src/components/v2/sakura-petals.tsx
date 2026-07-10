'use client'

import type { CSSProperties } from 'react'
import { useEffect, useState } from 'react'

type Petal = {
  id: number
  left: number
  size: number
  duration: number
  delay: number
  sway: number
  opacity: number
  drift: number
}

const PETAL_COUNT = 10

function createPetals(): Petal[] {
  return Array.from({ length: PETAL_COUNT }, (_, id) => ({
    id,
    left: Math.random() * 100,
    size: 10 + Math.random() * 14,
    duration: 10 + Math.random() * 12,
    delay: Math.random() * -18,
    sway: 18 + Math.random() * 36,
    opacity: 0.45 + Math.random() * 0.45,
    drift: (Math.random() - 0.5) * 80,
  }))
}

export function SakuraPetals() {
  const [petals, setPetals] = useState<Petal[]>([])

  useEffect(() => {
    setPetals(createPetals())
  }, [])

  if (petals.length === 0) return null

  return (
    <div
      className="sakura-petals pointer-events-none absolute inset-0 z-0 overflow-hidden"
      aria-hidden
    >
      {petals.map(petal => (
        <span
          key={petal.id}
          className="sakura-petal absolute top-0"
          style={
            {
              'left': `${petal.left}%`,
              'width': petal.size,
              'height': petal.size,
              'opacity': petal.opacity,
              'animationDuration': `${petal.duration}s`,
              'animationDelay': `${petal.delay}s`,
              '--sakura-sway': `${petal.sway}px`,
              '--sakura-drift': `${petal.drift}px`,
            } as CSSProperties
          }
        />
      ))}
    </div>
  )
}
