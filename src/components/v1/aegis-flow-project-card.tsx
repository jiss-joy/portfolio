'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import Webhook from '@/components/v1/webhook'
import useMouseCursor from '@/lib/hooks/use-mouse-cursor'

const AegisFlowProjectCard = () => {
  const { ref, cursor, handleMouseMove } = useMouseCursor()
  const [mouseOnCard, setMouseOnCard] = useState(false)

  const desc
    = 'Built a multi-tenant webhook delivery engine that ingests events over an API, queues them in Redis, and delivers to registered endpoints with signing, retries, and a dashboard to inspect attempts — Go API workers plus a Next.js UI.'

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
          AegisFlow
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col items-center justify-center gap-2 lg:flex-row lg:justify-between">
        <div className="text-center leading-snug text-white md:text-start lg:max-w-[60%]">
          {desc}
        </div>
        <div className="flex w-2/5 flex-col place-items-center">
          <Webhook
            cursor={cursor}
            cardRef={ref}
            mouseOnCard={mouseOnCard}
          />
        </div>
      </CardContent>
    </Card>
  )
}

export default AegisFlowProjectCard
