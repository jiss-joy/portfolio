'use client';

import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import Robot from '../robot';
import useMouseCursor from '@/lib/hooks/use-mouse-cursor';
import { useState } from 'react';

type RobotSpiderProjectCardProps = {
  cardRef: React.RefObject<HTMLDivElement | null>;
};

const RobotSpiderProjectCard = ({ cardRef }: RobotSpiderProjectCardProps) => {
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
        <CardTitle className='text-lg text-white'>Bio-mimicking Spider Robot</CardTitle>
      </CardHeader>
      <CardContent className='flex flex-row justify-between'>
        <div className='max-w-[60%] leading-snug text-white'>{desc}</div>
        <div className='flex w-2/5 flex-col place-items-center'>
          <Robot
            cursor={cursor}
            cardRef={ref}
            mouseOnCard={mouseOnCard}
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default RobotSpiderProjectCard;
