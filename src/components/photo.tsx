'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import notionFace from '@public/my-notion-face.png';

const Photo = () => {
  return (
    <div className='relative h-full w-full'>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.5, delay: 0.5, ease: 'easeIn' } }}
      >
        <div className='absolute h-[298px] w-[298px] lg:h-[498px] lg:w-[498px]'>
          <Image
            src={notionFace}
            alt='Me'
            priority
            className='object-contain'
            quality={100}
          />
        </div>
      </motion.div>
      <motion.svg
        className='h-[300px] w-[300px] lg:h-[506px] lg:w-[506px]'
        fill='transparent'
        viewBox='0 0 506 506'
        xmlns='http://www.w3.org/2000/svg'
      >
        <motion.circle
          cx='253'
          cy='253'
          r='180'
          stroke='#ED6A5A'
          strokeWidth='3'
          strokeLinecap='round'
          strokeLinejoin='round'
          initial={{ strokeDasharray: '24 10 0 0' }}
          animate={{
            rotate: [180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            velocity: 20,
            repeatDelay: 0,
            repeatType: 'reverse',
            ease: 'circInOut',
          }}
        />
      </motion.svg>
    </div>
  );
};

export default Photo;
