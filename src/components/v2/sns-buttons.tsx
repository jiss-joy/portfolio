import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa6';
import Link from 'next/link';

const sns = [
  {
    name: 'linkedin',
    url: 'https://linkedin.com/in/jiss-joy',
    icon: <FaLinkedin className='size-8 duration-500 hover:text-sky-700 hover:transition-all' />,
  },
  {
    name: 'github',
    url: 'https://github.com/jiss-joy',
    icon: <FaGithub className='size-8  duration-500 hover:text-black hover:transition-all' />,
  },
];

const SNSButtons = () => {
  return (
    <div className='flex gap-1'>
      {sns.map((e, index) => {
        return (
          <Link
            key={index}
            href={e.url}
            className='flex size-10 items-center justify-center border-accent p-2 text-base text-slate-400'
          >
            {e.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default SNSButtons;
