import Link from 'next/link';
import SNSButtons from './sns-buttons';

export const LeftSection = () => {
  return (
    <section className='h-screen w-1/2 px-16 py-32'>
      <div className='flex h-full flex-col justify-between'>
        <div className='flex flex-col gap-16'>
          {/* <div>
            <h4 className='text-2xl font-normal tracking-widest'>I&apos;m</h4>
            <h1 className='font-[montserrat] text-7xl font-extrabold'>JISS</h1>
            <h1 className='font-[montserrat] text-7xl font-extrabold'>JØY</h1>
            </div> */}
          <div className='flex flex-col gap-2'>
            <div className='flex flex-row gap-4'>
              <h1 className='font-[montserrat] text-7xl font-extrabold'>JISS</h1>
              <h1 className='font-[montserrat] text-7xl font-extrabold'>JOY</h1>
            </div>
            <h4 className='text-2xl font-normal tracking-widest'>Frontend Engineer</h4>
          </div>

          <div className='flex w-min flex-col gap-4'>
            <div className='group flex flex-row items-center gap-4 text-sm font-semibold tracking-widest text-slate-400 hover:text-white'>
              <div className='h-[1px] w-8 bg-slate-400 transition-all duration-100 group-hover:w-16 group-hover:bg-white' />
              <Link href='/v2/#about'>ABOUT</Link>
            </div>
            <div className='group flex flex-row items-center gap-4 text-sm font-semibold tracking-widest text-slate-400 hover:text-white'>
              <div className='h-[1px] w-8 bg-slate-400 transition-all duration-100 group-hover:w-16 group-hover:bg-white' />
              <Link href='/v2/#experience'>EXPERIENCE</Link>
            </div>
            <div className='group flex flex-row items-center gap-4 text-sm font-semibold tracking-widest text-slate-400 hover:text-white'>
              <div className='h-[1px] w-8 bg-slate-400 transition-all duration-100 group-hover:w-16 group-hover:bg-white' />
              <Link href='/v2/#projects'>PROJECTS</Link>
            </div>
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
