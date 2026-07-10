import { LeftSection } from '@/components/v2/left-section';
import { RightSection } from '@/components/v2/right-section';
import { SakuraPetals } from '@/components/v2/sakura-petals';

export default function Home() {
  return (
    <div className='relative h-screen overflow-hidden'>
      <SakuraPetals />
      <main className='relative z-10 flex h-full'>
        <LeftSection />
        <RightSection />
      </main>
    </div>
  );
}
