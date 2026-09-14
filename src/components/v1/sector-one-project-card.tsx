'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import Gauge from '@/components/v1/gauge'
import useMouseCursor from '@/lib/hooks/use-mouse-cursor'

const SectorOneProjectCard = () => {
  const { ref, cursor, handleMouseMove } = useMouseCursor()
  const [mouseOnCard, setMouseOnCard] = useState(false)

  const desc
    = 'A local Assetto Corsa overlay: Go handles UDP ingest, record/replay, and SSE; an embedded Next.js dash paints RPM, tyres, and laps from a ring buffer — nothing leaves the machine.'

  return (
    <Card
      ref={ref}
      className="bg-gray-900"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setMouseOnCard(true)}
      onMouseLeave={() => setMouseOnCard(false)}
    >
      <CardHeader className="relative">
        <span className="absolute right-6 top-6 text-sm text-white/45">2026</span>
        <CardTitle className="text-center text-lg text-white md:text-start">
          Sector One
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col items-center justify-center gap-2 lg:flex-row lg:justify-between">
        <div className="text-center leading-snug text-white md:text-start lg:max-w-[60%]">
          {desc}
        </div>
        <div className="flex w-2/5 flex-col place-items-center">
          <Gauge
            cursor={cursor}
            cardRef={ref}
            mouseOnCard={mouseOnCard}
          />
        </div>
      </CardContent>
    </Card>
  )
}

export default SectorOneProjectCard
