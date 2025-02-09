import React, { useRef, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import Heart from '../heart';

const MedillaProjectCard = () => {
  const cardsRef = useRef<HTMLDivElement>(null);
  const [cursor, setCursor] = useState({ cx: 0, cy: 0 });

  const handlerMouseMove = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    if (cardsRef.current !== null) {
      const rect = cardsRef.current.getBoundingClientRect();
      const cx = e.clientX - rect.left;
      const cy = e.clientY - rect.top;
      setCursor({ cx, cy });
    }
  };
  const desc =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam rutrum diam eu ultricies dictum. Maecenas leo est, scelerisque id eleifend vel, varius eget eros. Quisque congue finibus justo, a pharetra orci egestas ac. Fusce eget magna congue turpis lacinia iaculis cursus vitae neque. ';

  return (
    <Card
      // className='bg-gradient-to-tr from-transparent from-10% via-green-400/20 via-25% to-transparent to-30%'
      className='bg-radi'
      ref={cardsRef}
      onMouseMove={(e) => handlerMouseMove(e)}
    >
      <CardHeader>
        <CardTitle>Medilla</CardTitle>
      </CardHeader>
      <CardContent className='flex flex-row justify-between'>
        <div className='max-w-[50%] leading-snug'>{desc}</div>
        <div className='flex w-3/5 flex-col place-items-center'>
          <Heart
            cursor={cursor}
            cardRef={cardsRef}
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default MedillaProjectCard;
