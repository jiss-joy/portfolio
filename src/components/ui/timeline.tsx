'use client';
import { useScroll, useTransform, motion } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react';

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 20%', 'end 50%'],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className='font-sans w-full bg-background dark:bg-background-dark md:px-10'
      ref={containerRef}
    >
      <div
        ref={ref}
        className='relative mx-auto max-w-7xl pb-10'
      >
        {data.map((item, index) => (
          <div
            key={index}
            className='flex justify-start pt-10 md:gap-10 md:pt-16'
          >
            <div className='sticky top-40 z-40 flex max-w-xs flex-col items-center self-start md:w-full md:flex-row lg:max-w-sm'>
              <div className='absolute left-5 flex h-6 w-6 items-center justify-center rounded-full bg-white dark:bg-slate-400 md:left-5'>
                <div className='dark:border-primary-700 h-4 w-4 rounded-full border border-slate-300 bg-slate-700 p-2 dark:bg-neutral-800' />
              </div>
              {/* Title */}
              <h3 className='hidden text-xl font-bold md:block md:pl-20 lg:text-3xl'>
                {item.title}
              </h3>
            </div>
            {/* Content */}
            <div className='relative w-full pl-20 pr-4 md:pl-4'>
              <h3 className='mb-4 block text-left text-2xl font-bold text-neutral-500 dark:text-neutral-500 md:hidden'>
                {item.title}
              </h3>
              {item.content}
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + 'px',
          }}
          className='absolute left-8 top-0 w-[2px] overflow-hidden bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] dark:via-neutral-700  md:left-8 '
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className='absolute inset-x-0 top-0  w-[2px] rounded-full bg-gradient-to-t from-purple-500 from-[0%] via-blue-500 via-[10%] to-transparent'
          />
        </div>
      </div>
    </div>
  );
};
