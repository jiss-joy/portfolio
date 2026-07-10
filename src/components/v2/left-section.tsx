import Link from 'next/link';
import SNSButtons from './sns-buttons';

export const LeftSection = () => {
  return (
    <section className='h-full w-[45%] shrink-0 px-32 py-32'>
      <div className='flex h-full flex-col justify-between'>
        <div className='flex flex-col gap-16'>
          <div className='flex flex-col gap-2'>
            <div className='flex flex-row gap-4'>
              <h1 className='font-[montserrat] text-7xl font-extrabold text-background-dark'>
                JISS
              </h1>
              <h1 className='font-[montserrat] text-7xl font-extrabold text-background-dark'>
                JOY
              </h1>
            </div>
          </div>

          <div className='flex w-min flex-col gap-4'>
            <div className='group flex flex-row items-center gap-4 text-sm font-semibold tracking-widest text-pink-400 hover:text-pink-600'>
              <div className='h-[1px] w-8 bg-pink-400 transition-all duration-100 group-hover:w-16 group-hover:bg-pink-600' />
              <Link href='/v2/#about'>ABOUT</Link>
            </div>
            <div className='group flex flex-row items-center gap-4 text-sm font-semibold tracking-widest text-pink-400 hover:text-pink-600'>
              <div className='h-[1px] w-8 bg-pink-400 transition-all duration-100 group-hover:w-16 group-hover:bg-pink-600' />
              <Link href='/v2/#experience'>EXPERIENCE</Link>
            </div>
            <div className='group flex flex-row items-center gap-4 text-sm font-semibold tracking-widest text-pink-400 hover:text-pink-600'>
              <div className='h-[1px] w-8 bg-pink-400 transition-all duration-100 group-hover:w-16 group-hover:bg-pink-600' />
              <Link href='/v2/#projects'>PROJECTS</Link>
            </div>
            <div className='group flex flex-row items-center gap-4 text-sm font-semibold tracking-widest text-pink-400 hover:text-pink-600'>
              <div className='h-[1px] w-8 bg-pink-400 transition-all duration-100 group-hover:w-16 group-hover:bg-pink-600' />
              <Link href='/v2/#contact'>CONTACT</Link>
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
