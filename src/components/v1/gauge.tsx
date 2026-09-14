'use client'

import { useEffect, useId, useState } from 'react'

type GaugeProps = {
  cursor: { cx: number, cy: number }
  cardRef: React.RefObject<HTMLElement | null>
  mouseOnCard: boolean
}

const Gauge = ({ cursor, cardRef, mouseOnCard }: GaugeProps) => {
  const gradientId = useId()
  const [gradientCenter, setGradientCenter] = useState({ cx: '50%', cy: '50%' })

  useEffect(() => {
    if (cardRef.current && cursor.cx !== null && cursor.cy !== null) {
      const cardRect = cardRef.current.getBoundingClientRect()
      const cxPercentage = (cursor.cx / cardRect.width) * 100 - 24
      const cyPercentage = (cursor.cy / cardRect.height) * 100
      setGradientCenter({ cx: `${cxPercentage}%`, cy: `${cyPercentage}%` })
    }
  }, [cursor, cardRef])

  const stroke = `url(#${gradientId})`

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth={1}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-36 w-36 transition-all duration-100"
    >
      <defs>
        <radialGradient
          id={gradientId}
          gradientUnits="userSpaceOnUse"
          cx={gradientCenter.cx}
          cy={gradientCenter.cy}
          r="35%"
        >
          {mouseOnCard && <stop stopColor="#ED6A5A" />}
          <stop
            offset={1}
            stopColor="#202C39"
          />
        </radialGradient>
      </defs>
      <path
        stroke={stroke}
        d="m12 14 4-4"
      />
      <path
        stroke={stroke}
        d="M3.34 19a10 10 0 1 1 17.32 0"
      />
    </svg>
  )
}

export default Gauge
