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
      'Add and maintain features and components to the core portal. Standout features include a tool that visualizes the attack path of a malware, using Next.js and Rust.',
    technologies: ['TypeScript', 'Rust', 'Next.js'],
  },
  {
    role: 'Software Engineer',
    organization: 'Canbright Co. Ltd.',
    url: 'https://canbright.co.jp',
    date: 'Nov 2021 — Oct 2025',
    description:
      'Designed and implemented multiple front-end features using Next.js, ensuring seamless integration with the backend. Designed and implemented key backend features using Ruby on Rails, while refactoring existing code to address database performance bottlenecks, resulting in a 40% decrease in application response time.',
    technologies: ['JavaScript', 'TypeScript', 'Ruby on Rails', 'Next.js', 'AWS'],
  },
  {
    role: 'Android Developer Intern',
    organization: 'Smartech Brain Technologies',
    date: 'Aug 2020 — Jan 2021',
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
