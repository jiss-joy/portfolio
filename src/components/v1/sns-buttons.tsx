import React from 'react';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import Link from 'next/link';

const sns = [
  {
    name: 'linkedin',
    url: 'https://linkedin.com/in/jiss-joy',
    icon: <FaLinkedinIn />,
  },
  { name: 'github', url: 'https://github.com/jiss-joy', icon: <FaGithub /> },
];

const SNSButtons = () => {
  return (
    <div className='flex gap-2'>
      {sns.map((e, index) => {
        return (
          <Link
            key={index}
            href={e.url}
            className='flex h-9 w-9 items-center justify-center rounded-full border border-accent text-base text-accent duration-500 hover:bg-accent  hover:text-white hover:transition-all'
          >
            {e.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default SNSButtons;
