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
      strokeLinecap='round'
      strokeLinejoin='round'
      className='h-36 w-36 transition-all duration-100'
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
      <path
        className='fill-none'
        stroke='url(#primaryGradient)'
        d='M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5'
      />
    </svg>
  );
};

export default Calendar;
