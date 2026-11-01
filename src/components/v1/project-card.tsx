'use client'

import type { ComponentType, RefObject } from 'react'
import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import Calendar from '@/components/v1/calendar'
import Forums from '@/components/v1/forums'
import Gauge from '@/components/v1/gauge'
import Heart from '@/components/v1/heart'
import PokerCards from '@/components/v1/poker-cards'
import Robot from '@/components/v1/robot'
import Webhook from '@/components/v1/webhook'
import useMouseCursor from '@/lib/hooks/use-mouse-cursor'

type IllustrationProps = {
  cursor: { cx: number, cy: number, width: number, height: number }
  cardRef: RefObject<HTMLElement | null>
  mouseOnCard: boolean
}

// Keyed by the project's Keystatic slug. Projects without an entry render text-only.
const illustrations: Partial<Record<string, ComponentType<IllustrationProps>>> = {
  'sector-one': Gauge,
  'aegis-flow': Webhook,
  'planning-ninja': PokerCards,
  'benri-yoyaku': Calendar,
  'medillah': Heart,
  'bio-mimicking-spider-robot': Robot,
  'bconnect': Forums,
}

type ProjectCardProps = {
  slug: string
  title: string
  year: string
  description: string
}

const ProjectCard = ({ slug, title, year, description }: ProjectCardProps) => {
  const { ref, cursor, handleMouseMove } = useMouseCursor()
  const [mouseOnCard, setMouseOnCard] = useState(false)
  const Illustration = illustrations[slug]

  return (
    <Card
      ref={ref}
      className="bg-gray-900"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setMouseOnCard(true)}
      onMouseLeave={() => setMouseOnCard(false)}
    >
      <CardHeader className="relative">
        <span className="absolute right-6 top-6 text-sm text-white/45">{year}</span>
        <CardTitle className="text-center text-lg text-white md:text-start">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col items-center justify-center gap-2 lg:flex-row lg:justify-between">
        <div className={`text-center leading-snug text-white md:text-start ${Illustration ? 'lg:max-w-[60%]' : ''}`}>
          {description}
        </div>
        {Illustration
          ? (
              <div className="flex w-2/5 flex-col place-items-center">
                <Illustration
                  cursor={cursor}
                  cardRef={ref}
                  mouseOnCard={mouseOnCard}
                />
              </div>
            )
          : null}
      </CardContent>
    </Card>
  )
}

export default ProjectCard
