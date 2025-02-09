'use client';

import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import useMouseCursor from '@/lib/hooks/use-mouse-cursor';
import { useState } from 'react';
import Calendar from '../calendar';

type BenriYoyakuProjectCardProps = {
  cardRef: React.RefObject<HTMLDivElement | null>;
};

const BenriYoyakuProjectCard = ({ cardRef }: BenriYoyakuProjectCardProps) => {
  const { ref, cursor, handleMouseMove } = useMouseCursor(cardRef);
  const [mouseOnCard, setMouseOnCard] = useState(false);

  function mouseLeaveHandler() {
    setMouseOnCard(false);
  }

  function mouseEnterHandler() {
    setMouseOnCard(true);
  }

  const desc =
    'Developing a queue-based reservation management system to reduce wait times for customers at saloons, clinics and restaurants using Next.js and other tools.';

  return (
    <Card
      ref={ref}
      className='bg-gray-900'
      onMouseMove={handleMouseMove}
      onMouseEnter={mouseEnterHandler}
      onMouseLeave={mouseLeaveHandler}
    >
      <CardHeader>
        <CardTitle className='text-center text-lg text-white'>便利予約 (Benri Yoyaku)</CardTitle>
      </CardHeader>
      <CardContent className='flex flex-col items-center justify-center gap-2 lg:flex-row lg:justify-between'>
        <div className='text-center leading-snug text-white lg:max-w-[60%]'>{desc}</div>
        <div className='flex w-2/5 flex-col place-items-center'>
          <Calendar
            cursor={cursor}
            cardRef={ref}
            mouseOnCard={mouseOnCard}
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default BenriYoyakuProjectCard;
