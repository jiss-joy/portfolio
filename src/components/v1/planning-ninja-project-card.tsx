'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import PokerCards from '@/components/v1/poker-cards'
import useMouseCursor from '@/lib/hooks/use-mouse-cursor'

const PlanningNinjaProjectCard = () => {
  const { ref, cursor, handleMouseMove } = useMouseCursor()
  const [mouseOnCard, setMouseOnCard] = useState(false)

  const desc
    = 'A real-time Scrum planning-poker app: teams estimate story points together live over WebSockets, backed by a NestJS API and PostgreSQL behind a Next.js frontend.'

  return (
    <Card
      ref={ref}
      className="bg-gray-900"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setMouseOnCard(true)}
      onMouseLeave={() => setMouseOnCard(false)}
    >
      <CardHeader className="relative">
        <span className="absolute right-6 top-6 text-sm text-white/45">2025</span>
        <CardTitle className="text-center text-lg text-white md:text-start">
          Planning Ninja
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col items-center justify-center gap-2 lg:flex-row lg:justify-between">
        <div className="text-center leading-snug text-white md:text-start lg:max-w-[60%]">
          {desc}
        </div>
        <div className="flex w-2/5 flex-col place-items-center">
          <PokerCards
            cursor={cursor}
            mouseOnCard={mouseOnCard}
          />
        </div>
      </CardContent>
    </Card>
  )
}

export default PlanningNinjaProjectCard
