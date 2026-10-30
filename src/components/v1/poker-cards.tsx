'use client'

import { useId } from 'react'

type PokerCardsProps = {
  cursor: { cx: number, cy: number, width: number, height: number }
  mouseOnCard: boolean
}

const PokerCards = ({ cursor, mouseOnCard }: PokerCardsProps) => {
  const gradientId = useId()

  // Card size arrives with each mouse move, so the gradient center is derived here instead of synced in an effect
  const gradientCenter = cursor.width && cursor.height
    ? {
        cx: `${(cursor.cx / cursor.width) * 100 - 24}%`,
        cy: `${(cursor.cy / cursor.height) * 100}%`,
      }
    : { cx: '50%', cy: '50%' }

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
      <rect
        stroke={stroke}
        x="3"
        y="4.5"
        width="10"
        height="14"
        rx="1.5"
        transform="rotate(-12 8 11.5)"
      />
      <rect
        stroke={stroke}
        className="fill-gray-900"
        x="9"
        y="5"
        width="10"
        height="14"
        rx="1.5"
      />
      <g transform="translate(10.6 7.6) scale(0.3)">
        <path
          stroke={stroke}
          vectorEffect="non-scaling-stroke"
          d="M5 9c-1.5 1.5-3 3.2-3 5.5A5.5 5.5 0 0 0 7.5 20c1.8 0 3-.5 4.5-2 1.5 1.5 2.7 2 4.5 2a5.5 5.5 0 0 0 5.5-5.5c0-2.3-1.5-4-3-5.5l-7-7-7 7Z"
        />
        <path
          stroke={stroke}
          vectorEffect="non-scaling-stroke"
          d="M12 18v4"
        />
      </g>
    </svg>
  )
}

export default PokerCards
