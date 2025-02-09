'use client';

import { useEffect, useState } from 'react';

type RobotProps = {
  cursor: { cx: number; cy: number };
  cardRef: React.RefObject<HTMLElement | null>;
  mouseOnCard: boolean;
};

const Robot = ({ cursor, cardRef, mouseOnCard }: RobotProps) => {
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
      viewBox='0 0 28 28'
      strokeLinecap='round'
      strokeLinejoin='round'
      className='lucide lucide-bot h-36 w-36 transition-all duration-100'
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
        d='M12 8V4H8'
      />
      <rect
        width='16'
        height='12'
        x='4'
        y='8'
        rx='2'
        stroke='url(#primaryGradient)'
        className='fill-none'
      />
      <path
        className='fill-transparent'
        stroke='url(#primaryGradient)'
        d='M2 14h2'
      />
      <path
        className='fill-transparent'
        stroke='url(#primaryGradient)'
        d='M20 14h2'
      />
      <path
        className='fill-transparent'
        stroke='url(#primaryGradient)'
        d='M15 13v2'
      />
      <path
        className='fill-transparent'
        stroke='url(#primaryGradient)'
        d='M9 13v2'
      />
    </svg>
  );
};

export default Robot;
