import { LeftSection } from '@/components/v2/left-section';
import { RightSection } from '@/components/v2/right-section';

export default function Home() {
  return (
    <main className='flex h-screen px-24'>
      <LeftSection />
      <RightSection />
    </main>
  );
}
