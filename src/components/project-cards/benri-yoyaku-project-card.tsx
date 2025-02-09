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

  const desc =
    "Led the development of a bio-mimicking, eight-legged spider robot for rough terrain navigation, focusing on the project's programming and control systems, with integrated surveillance capabilities.";

  return (
    <Card
      ref={ref}
      className='bg-gray-900'
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setMouseOnCard(true)}
      onMouseLeave={() => setMouseOnCard(false)}
    >
      <CardHeader>
        <CardTitle className='text-lg text-white'>便利予約 (Benri Yoyaku)</CardTitle>
      </CardHeader>
      <CardContent className='flex flex-row justify-between'>
        <div className='max-w-[60%] leading-snug text-white'>{desc}</div>
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
