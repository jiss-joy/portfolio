import Link from 'next/link';
import SNSButtons from './sns-buttons';

export const LeftSection = () => {
  return (
    <section className='h-screen w-1/2 px-16 py-32'>
      <div className='flex h-full flex-col justify-between'>
        <div>
          <h4 className='text-2xl font-normal tracking-widest'>I&apos;m</h4>
          <h1 className='font-[montserrat] text-7xl font-extrabold'>JISS</h1>
          <h1 className='font-[montserrat] text-7xl font-extrabold'>JØY</h1>

          <div className='flex flex-col gap-4'>
            <Link href='/v2/#about'>ABOUT</Link>
            <Link href='/v2/#experience'>EXPERIENCE</Link>
            <Link href='/v2/#projects'>PROJECTS</Link>
          </div>
        </div>
        <div className=''>
          <div>
            <SNSButtons />
          </div>
        </div>
      </div>
    </section>
  );
};
