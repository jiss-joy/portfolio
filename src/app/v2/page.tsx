import { LeftSection } from '@/components/v2/left-section';

export default function Home() {
  return (
    <main className='flex h-screen px-24'>
      <LeftSection />
      <section className='h-full w-1/2'></section>
    </main>
  );
}
