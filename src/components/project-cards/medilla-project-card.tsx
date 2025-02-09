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
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam rutrum diam eu ultricies dictum. Maecenas leo est, scelerisque id eleifend vel, varius eget eros. Quisque congue finibus justo, a pharetra orci egestas ac. ';

  return (
    <Card
      ref={ref}
      className='bg-gray-900'
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setMouseOnCard(true)}
      onMouseLeave={() => setMouseOnCard(false)}
    >
      <CardHeader>
        <CardTitle className='text-lg text-white'>Medilla</CardTitle>
      </CardHeader>
      <CardContent className='flex flex-row justify-between'>
        <div className='max-w-[60%] leading-snug text-white'>{desc}</div>
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
