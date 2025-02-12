'use client';

import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import Robot from '../robot';
import useMouseCursor from '@/lib/hooks/use-mouse-cursor';
import { useState } from 'react';

const RobotSpiderProjectCard = () => {
  const { ref, cursor, handleMouseMove } = useMouseCursor();
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
        <CardTitle className='text-center text-lg text-white md:text-start'>
          Bio-mimicking Spider Robot
        </CardTitle>
      </CardHeader>
      <CardContent className='flex flex-col items-center justify-center gap-2 lg:flex-row lg:justify-between'>
        <div className='text-center leading-snug text-white md:text-start lg:max-w-[60%]'>
          {desc}
        </div>
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
