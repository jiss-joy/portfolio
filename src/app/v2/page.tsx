import { LeftSection } from '@/components/v2/left-section';
import { RightSection } from '@/components/v2/right-section';
import { SakuraPetals } from '@/components/v2/sakura-petals';

export default function Home() {
  return (
    <div className='relative h-screen overflow-hidden bg-background'>
      <SakuraPetals />
      <main className='relative z-10 flex h-full w-full'>
        <div className='flex h-full min-w-0 flex-1 justify-end'>
          <LeftSection />
        </div>
        <div className='flex h-full min-w-0 flex-1'>
          <RightSection />
        </div>
      </main>
    </div>
  );
}
