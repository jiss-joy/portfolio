import Link from 'next/link'
import { HiArrowUpRight } from 'react-icons/hi2'

interface Project {
  title: string
  year: string
  description: string
  technologies: string[]
  url?: string
}

const projects: Project[] = [
  {
    title: 'Benri Yoyaku',
    year: '2023',
    description: 'Project details coming soon.',
    technologies: ['Next.js', 'TypeScript'],
  },
  {
    title: 'Medilla',
    year: '2021',
    description: 'Project details coming soon.',
    technologies: ['Android', 'Firebase'],
  },
  {
    title: 'Bio-mimicking Spider Robot',
    year: '2021',
    description: 'Project details coming soon.',
    technologies: ['C++', 'Robotics'],
  },
  {
    title: 'Forums App',
    year: '2020',
    description: 'Project details coming soon.',
    technologies: ['Flutter', 'Firebase'],
  },
]

function ProjectBody({ project }: { project: Project }) {
  return (
    <div className="flex w-full flex-col gap-3 sm:flex-row sm:gap-6">
      <div className="shrink-0 pt-0.5 text-xs font-medium uppercase tracking-wider text-secondary/45 sm:w-28">
        {project.year}
      </div>
      <div className="flex min-w-0 flex-1 flex-col gap-2">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-base font-semibold leading-snug tracking-tight text-secondary">
            {project.title}
          </h3>
          {project.url
            ? (
                <HiArrowUpRight className="mt-0.5 size-4 shrink-0 text-secondary/30 transition-colors group-hover:text-primary" />
              )
            : null}
        </div>
        <p className="text-sm leading-relaxed text-secondary/65">{project.description}</p>
        <ul className="mt-1 flex flex-wrap gap-2">
          {project.technologies.map(technology => (
            <li
              key={technology}
              className="rounded-full bg-primary/90 px-2.5 py-1 text-[11px] font-medium tracking-wide text-background"
            >
              {technology}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export const Projects = () => {
  return (
    <section
      id="projects"
      className="flex w-full scroll-mt-8 flex-col gap-4"
    >
      <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary/40">
        Projects
      </h2>
      <div className="flex flex-col gap-2">
        {projects.map((project) => {
          const className
            = 'group rounded-xl p-4 transition-colors duration-200 hover:bg-primary/10'

          if (project.url) {
            return (
              <Link
                key={project.title}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className={className}
              >
                <ProjectBody project={project} />
              </Link>
            )
          }

          return (
            <div
              key={project.title}
              className={className}
            >
              <ProjectBody project={project} />
            </div>
          )
        })}
      </div>
    </section>
  )
}
