'use client'

import { useEffect, useState } from 'react'

type WebhookProps = {
  cursor: { cx: number, cy: number }
  cardRef: React.RefObject<HTMLElement | null>
  mouseOnCard: boolean
}

const Webhook = ({ cursor, cardRef, mouseOnCard }: WebhookProps) => {
  const [gradientCenter, setGradientCenter] = useState({ cx: '50%', cy: '50%' })

  useEffect(() => {
    if (cardRef.current && cursor.cx !== null && cursor.cy !== null) {
      const cardRect = cardRef.current.getBoundingClientRect()
      const cxPercentage = (cursor.cx / cardRect.width) * 100 - 24
      const cyPercentage = (cursor.cy / cardRect.height) * 100
      setGradientCenter({ cx: `${cxPercentage}%`, cy: `${cyPercentage}%` })
    }
  }, [cursor, cardRef])

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 28 28"
      strokeWidth={1}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-webhook h-36 w-36 transition-all duration-100"
    >
      <defs>
        <radialGradient
          id="webhookPrimaryGradient"
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
        stroke="url(#webhookPrimaryGradient)"
        className="fill-transparent"
        d="M18 16.98h-5.99c-1.1 0-1.95.94-2.48 1.9A4 4 0 0 1 2 17c.01-.7.2-1.4.57-2"
      />
      <path
        stroke="url(#webhookPrimaryGradient)"
        className="fill-transparent"
        d="m6 17 3.13-5.78c.53-.97.1-2.18-.5-3.1a4 4 0 1 1 6.89-4.06"
      />
      <path
        stroke="url(#webhookPrimaryGradient)"
        className="fill-transparent"
        d="m12 6 3.13 5.73C15.66 12.7 16.9 13 18 13a4 4 0 0 1 0 8"
      />
    </svg>
  )
}

export default Webhook
