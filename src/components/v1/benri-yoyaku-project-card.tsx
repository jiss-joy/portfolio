'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import Calendar from '@/components/v1/calendar'
import useMouseCursor from '@/lib/hooks/use-mouse-cursor'

const BenriYoyakuProjectCard = () => {
  const { ref, cursor, handleMouseMove } = useMouseCursor()
  const [mouseOnCard, setMouseOnCard] = useState(false)

  function mouseLeaveHandler() {
    setMouseOnCard(false)
  }

  function mouseEnterHandler() {
    setMouseOnCard(true)
  }

  const desc
    = 'Developed a queue-based reservation management system to reduce wait times for customers at salons, clinics and restaurants using Next.js and other tools.'

  return (
    <Card
      ref={ref}
      className="bg-gray-900"
      onMouseMove={handleMouseMove}
      onMouseEnter={mouseEnterHandler}
      onMouseLeave={mouseLeaveHandler}
    >
      <CardHeader>
        <CardTitle className="text-center text-lg text-white md:text-start">
          便利予約 (Benri Yoyaku)
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col items-center justify-center gap-2 lg:flex-row lg:justify-between">
        <div className="text-center leading-snug text-white md:text-start lg:max-w-[60%]">
          {desc}
        </div>
        <div className="flex w-2/5 flex-col place-items-center">
          <Calendar
            cursor={cursor}
            cardRef={ref}
            mouseOnCard={mouseOnCard}
          />
        </div>
      </CardContent>
    </Card>
  )
}

export default BenriYoyakuProjectCard
