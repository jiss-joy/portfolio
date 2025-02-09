'use client';

import { useEffect, useState } from 'react';

type CalendarProps = {
  cursor: { cx: number; cy: number };
  cardRef: React.RefObject<HTMLElement | null>;
  mouseOnCard: boolean;
};

const Calendar = ({ cursor, cardRef, mouseOnCard }: CalendarProps) => {
  const [gradientCenter, setGradientCenter] = useState({ cx: '50%', cy: '50%' });

  useEffect(() => {
    if (cardRef.current && cursor.cx !== null && cursor.cy !== null) {
      const cardRect = cardRef.current.getBoundingClientRect();
      const cxPercentage = (cursor.cx / cardRect.width) * 100 - 24;
      const cyPercentage = (cursor.cy / cardRect.height) * 100;
      setGradientCenter({ cx: `${cxPercentage}%`, cy: `${cyPercentage}%` });
    }
  }, [cursor, cardRef]);

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
      strokeWidth={1}
      strokeLinecap='round'
      strokeLinejoin='round'
      className='lucide lucide-calendar-range h-32 w-36 transition-all duration-100'
    >
      <defs>
        <radialGradient
          id='primaryGradient'
          gradientUnits='userSpaceOnUse'
          cx={gradientCenter.cx}
          cy={gradientCenter.cy}
          r='35%'
        >
          {mouseOnCard && <stop stopColor='#ED6A5A' />}
          <stop
            offset={1}
            stopColor='#202C39'
          />
        </radialGradient>
      </defs>
      <rect
        width='18'
        height='18'
        x='3'
        y='4'
        rx='2'
        stroke='url(#primaryGradient)'
        className='fill-none'
      />
      <path
        stroke='url(#primaryGradient)'
        d='M16 2v4'
      />
      <path
        stroke='url(#primaryGradient)'
        d='M3 10h18'
      />
      <path
        stroke='url(#primaryGradient)'
        d='M8 2v4'
      />
      <path
        stroke='url(#primaryGradient)'
        d='M17 14h-6'
      />
      <path
        stroke='url(#primaryGradient)'
        d='M13 18H7'
      />
      <path
        stroke='url(#primaryGradient)'
        d='M7 14h.01'
      />
      <path
        stroke='url(#primaryGradient)'
        d='M17 18h.01'
      />
    </svg>
  );
};

export default Calendar;
