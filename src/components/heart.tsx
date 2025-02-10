'use client';

import { useEffect, useState } from 'react';

type HeartProps = {
  cursor: { cx: number; cy: number };
  cardRef: React.RefObject<HTMLElement | null>;
  mouseOnCard: boolean;
};

const Heart = ({ cursor, cardRef, mouseOnCard }: HeartProps) => {
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
      strokeWidth={1}
      strokeLinecap='round'
      strokeLinejoin='round'
      className='lucide lucide-heart-pulse h-36 w-36 transition-all duration-100'
    >
      <defs>
        <radialGradient
          id='heartPrimaryGradient'
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
        stroke='url(#heartPrimaryGradient)'
        d='M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z'
      />
      <path
        className='fill-transparent'
        stroke='url(#heartPrimaryGradient)'
        d='M3.22 12H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27'
      />
    </svg>
  );
};

export default Heart;
