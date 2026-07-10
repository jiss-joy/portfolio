import Image from 'next/image';
import Link from 'next/link';
import SNSButtons from './sns-buttons';

export const PersonalCard = () => {
  return (
    <div className='mb-8 flex w-full flex-row items-center justify-between rounded-lg bg-pink-700/20 p-4'>
      <div className='flex w-full flex-col items-center gap-4'>
        <Image
          src='/photo-sakura.jpg'
          alt='Profile'
          quality={100}
          width={200}
          height={200}
          objectFit='fit'
          className='rounded-full'
        />
        <div className='text-md font-semibold leading-none tracking-tight'>Frontend Engineer</div>
        <div className='text-sm text-pink-600/70 text-slate-200 transition-all duration-100'>
          Based in Tokyo, Japan
        </div>
        <div className='text-sm text-pink-600/70 text-slate-200 transition-all duration-100'>
          jissjoy1@gmail.com
        </div>
      </div>
      <div>
        <div className='text-sm text-pink-600/70 text-slate-200 transition-all duration-100'>
          Love football and driving. Beach lover. Building stuff. Cooking. Drawing. Committed to
          building beautiful applications and writing clean, well-tested code focused on
          performance, scalability, and security.
        </div>
      </div>
    </div>
  );
};
