import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import Heart from '../heart';
import useMouseCursor from '@/lib/hooks/use-mouse-cursor';
import { useState } from 'react';

type MedillaProjectCardProps = {
  cardRef: React.RefObject<HTMLDivElement | null>;
};

const MedillaProjectCard = ({ cardRef }: MedillaProjectCardProps) => {
  const { ref, cursor, handleMouseMove } = useMouseCursor(cardRef);
  const [mouseOnCard, setMouseOnCard] = useState(false);

  const desc =
    'Designed and built an android application where users can book appointments with doctors and get prescriptions online. Users can also buy over-the-counter drugs and have them delivered to their homes.';

  function mouseLeaveHandler() {
    setMouseOnCard(false);
  }

  function mouseEnterHandler() {
    setMouseOnCard(true);
  }

  return (
    <Card
      ref={ref}
      className='bg-gray-900'
      onMouseMove={handleMouseMove}
      onMouseEnter={mouseEnterHandler}
      onMouseLeave={mouseLeaveHandler}
    >
      <CardHeader>
        <CardTitle className='text-center text-lg text-white'>Medillah</CardTitle>
      </CardHeader>
      <CardContent className='flex flex-col items-center justify-center gap-2 lg:flex-row lg:justify-between'>
        <div className='text-center leading-snug text-white lg:max-w-[60%]'>{desc}</div>
        <div className='flex w-2/5 flex-col place-items-center'>
          <Heart
            cursor={cursor}
            cardRef={ref}
            mouseOnCard={mouseOnCard}
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default MedillaProjectCard;
