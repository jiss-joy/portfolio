'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import photo from '@public/photo.png';

const Photo = () => {
  return (
    <div className='relative h-full w-full'>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.5, delay: 1, ease: 'easeIn' } }}
        className='absolute left-0 top-0 flex h-full w-full items-center justify-center'
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.5, delay: 1, ease: 'easeIn' } }}
          className='h-[248px] w-[248px] lg:h-[428px] lg:w-[428px]'
        >
          <Image
            src={photo}
            alt='Me'
            priority
            className='object-contain'
            quality={100}
          />
        </motion.div>
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
          r='230'
          className='stroke-accent'
          strokeWidth='3'
          strokeLinecap='round'
          strokeLinejoin='round'
          initial={{ strokeDasharray: '50 10 0 0' }}
          animate={{
            rotate: [180, 360],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            velocity: 20,
            repeatDelay: 0,
            repeatType: 'loop',
            ease: 'linear',
          }}
        />
        <motion.circle
          cx='253'
          cy='253'
          r='223'
          className='stroke-accent'
          opacity={0.4}
          strokeWidth='3'
          strokeLinecap='round'
          strokeLinejoin='round'
          initial={{ strokeDasharray: ['30 10 0 0', '5 10 0 0'] }}
          animate={{
            rotate: [180, 360],
          }}
          transition={{
            duration: 24,
            repeat: Infinity,
            velocity: 20,
            repeatDelay: 0,
            repeatType: 'loop',
            ease: 'linear',
          }}
        />
      </motion.svg>
    </div>
  );
};

export default Photo;
