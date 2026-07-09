import { LeftSection } from '@/components/left-section';

export default function Home() {
  return (
    <main className='flex h-screen px-24'>
      <LeftSection />
      <section className='h-full w-1/2 bg-blue-300'></section>
    </main>
  );
}
