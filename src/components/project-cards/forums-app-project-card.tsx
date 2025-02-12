import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import useMouseCursor from '@/lib/hooks/use-mouse-cursor';
import { useState } from 'react';
import Forums from '../forums';

const ForumsAppProjectCard = () => {
  const { ref, cursor, handleMouseMove } = useMouseCursor();
  const [mouseOnCard, setMouseOnCard] = useState(false);

  const desc =
    'An intra-university forum and discussion platform for students to ask and answer questions, and engage in discussions across various categories and topics. Students can chat with each other and share resources';

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
        <CardTitle className='text-center text-lg text-white md:text-start'>BConnect</CardTitle>
      </CardHeader>
      <CardContent className='flex flex-col items-center justify-center gap-2 lg:flex-row lg:justify-between'>
        <div className='text-center leading-snug text-white md:text-start lg:max-w-[60%]'>
          {desc}
        </div>
        <div className='flex w-2/5 flex-col place-items-center'>
          <Forums
            cursor={cursor}
            cardRef={ref}
            mouseOnCard={mouseOnCard}
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default ForumsAppProjectCard;
