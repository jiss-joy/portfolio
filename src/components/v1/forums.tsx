'use client';

import { useEffect, useState } from 'react';

type ForumsProps = {
  cursor: { cx: number; cy: number };
  cardRef: React.RefObject<HTMLElement | null>;
  mouseOnCard: boolean;
};

const Forums = ({ cursor, cardRef, mouseOnCard }: ForumsProps) => {
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
      className='lucide lucide-messages-square h-36 w-36 transition-all duration-100'
    >
      <defs>
        <radialGradient
          id='forumsPrimaryGradient'
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
        stroke='url(#forumsPrimaryGradient)'
        className='fill-transparent'
        d='M14 9a2 2 0 0 1-2 2H6l-4 4V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2z'
      />
      <path
        stroke='url(#forumsPrimaryGradient)'
        className='fill-transparent'
        d='M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1'
      />
    </svg>
  );
};

export default Forums;
