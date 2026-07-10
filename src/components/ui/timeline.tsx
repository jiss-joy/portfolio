'use client'

import { useScroll, useTransform, motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { HiArrowUpRight } from 'react-icons/hi2'

export interface TimelineEntry {
  role: string
  organization: string
  url?: string
  date: string
  description?: string
  technologies?: string[]
}

function OrganizationName({
  name,
  url,
}: {
  name: string
  url?: string
}) {
  if (!url) {
    return <span className='font-medium text-primary'>{name}</span>
  }

  return (
    <a
      href={url}
      target='_blank'
      rel='noopener noreferrer'
      className='group/org inline-flex items-center gap-1 font-medium text-primary transition-colors hover:text-accent-hover'
    >
      {name}
      <HiArrowUpRight className='size-3.5 opacity-50 transition-opacity group-hover/org:opacity-100' />
    </a>
  )
}

function TimelineItem({ item }: { item: TimelineEntry }) {
  return (
    <div className='flex flex-col gap-2'>
      <div>
        <h3 className='text-lg font-semibold leading-snug tracking-tight text-secondary dark:text-background xl:text-xl'>
          {item.role}
        </h3>
        <p className='mt-1 text-base leading-snug'>
          <OrganizationName name={item.organization} url={item.url} />
        </p>
      </div>

      {item.description
        ? (
            <p className='text-sm leading-relaxed text-secondary/70 dark:text-background/70'>
              {item.description}
            </p>
          )
        : null}

      {item.technologies && item.technologies.length > 0
        ? (
            <ul className='mt-1 flex flex-wrap gap-2'>
              {item.technologies.map(technology => (
                <li
                  key={technology}
                  className='rounded-full bg-primary/90 px-2.5 py-1 text-[11px] font-medium tracking-wide text-background'
                >
                  {technology}
                </li>
              ))}
            </ul>
          )
        : null}
    </div>
  )
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [height, setHeight] = useState(0)

  useEffect(() => {
    if (!ref.current) return
    setHeight(ref.current.getBoundingClientRect().height)
  }, [])

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 20%', 'end 50%'],
  })

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height])
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1])

  return (
    <div className='w-full font-sans' ref={containerRef}>
      <div ref={ref} className='relative mx-auto max-w-7xl pb-10'>
        {data.map(item => (
          <div
            key={`${item.organization}-${item.date}`}
            className='flex justify-start pt-10 md:gap-10 md:pt-14'
          >
            <div className='sticky top-40 z-40 flex max-w-xs flex-col items-center self-start md:w-full md:flex-row lg:max-w-sm'>
              <div className='absolute left-5 flex size-6 items-center justify-center rounded-full bg-background dark:bg-background-dark md:left-5'>
                <div className='size-2.5 rounded-full bg-primary' />
              </div>
              <time className='hidden text-sm font-medium uppercase tracking-wider text-secondary/50 dark:text-background/50 md:block md:pl-20'>
                {item.date}
              </time>
            </div>

            <div className='relative w-full pl-20 pr-4 md:pl-4'>
              <time className='mb-2 block text-xs font-medium uppercase tracking-wider text-secondary/50 dark:text-background/50 md:hidden'>
                {item.date}
              </time>
              <TimelineItem item={item} />
            </div>
          </div>
        ))}

        <div
          key='timeline-progress'
          style={{ height: `${height}px` }}
          className='absolute left-8 top-0 w-[2px] overflow-hidden bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-secondary/20 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] dark:via-background/20 md:left-8'
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className='absolute inset-x-0 top-0 w-[2px] rounded-full bg-gradient-to-t from-primary from-[0%] via-primary/60 via-[40%] to-transparent'
          />
        </div>
      </div>
    </div>
  )
}
