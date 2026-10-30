import type { TimelineEntry } from '../ui/timeline'
import { LiaToolsSolid } from 'react-icons/lia'
import { Timeline } from '../ui/timeline'

const timelineData: TimelineEntry[] = [
  {
    role: 'Full-Stack Engineer',
    organization: 'Cybereason',
    url: 'https://www.cybereason.com/',
    date: 'Oct 2025 — Present',
    description:
      'Build and maintain features and components for the core Next.js web portal. Designed and built an interactive Attack Path Graph visualization that processes and renders complex security event data from ClickHouse, PostgreSQL, and Redpanda. Added unit and E2E tests and introduced ESLint configs with CI lint checks, reducing release overhead and production regressions.',
    technologies: ['TypeScript', 'Next.js', 'ClickHouse', 'PostgreSQL', 'Redpanda'],
  },
  {
    role: 'Full-Stack Engineer',
    organization: 'Canbright Co. Ltd.',
    url: 'https://canbright.co.jp',
    date: 'Nov 2021 — Oct 2025',
    description:
      'Re-engineered core components and optimized full-stack performance across React, GraphQL, and REST architectures, cutting response times by 40% and supporting 56% client growth. Built a custom e-commerce solution tailored to client requirements on Next.js and Ruby on Rails, and led multiple releases through CI/CD pipelines.',
    technologies: ['TypeScript', 'React', 'Next.js', 'Ruby on Rails', 'GraphQL', 'AWS'],
  },
  {
    role: 'Android Developer Intern',
    organization: 'Smartech Brain Technologies',
    date: 'Jul 2020 — Jan 2021',
    description:
      'Designed, built, and deployed 3 Android e-commerce applications, leveraging various Firebase products to enhance functionality and user experience.',
    technologies: ['Java', 'Firebase'],
  },
  {
    role: 'Undergraduate',
    organization: 'M.S. Ramaiah University of Applied Sciences',
    url: 'https://www.msruas.ac.in/',
    date: 'Aug 2017 — Aug 2021',
  },
  {
    role: 'School',
    organization: 'Devamatha CMI Public School',
    url: 'https://www.devamatha.com/',
    date: 'Aug 2015 — Aug 2017',
  },
]

const ExperienceEducationTimeline = () => {
  return (
    <section className="mt-16">
      <div className="flex w-fit flex-row items-center justify-center gap-2 rounded-full bg-primary px-4 py-1">
        <LiaToolsSolid />
        <h4 className="h4">Experience and Academic qualifications</h4>
      </div>
      <Timeline data={timelineData} />
    </section>
  )
}

export default ExperienceEducationTimeline
