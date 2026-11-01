import type { LucideIcon } from 'lucide-react'
import { Gauge, Spade, Webhook } from 'lucide-react'
import Link from 'next/link'
import { HiArrowUpRight } from 'react-icons/hi2'
import { getProjects } from '@/lib/content'

interface Project {
  id: string
  title: string
  year: string
  description: string
  technologies: readonly string[]
  url?: string
  icon?: LucideIcon
}

// Keyed by the project's Keystatic slug. Projects without an entry render without an icon.
const icons: Partial<Record<string, LucideIcon>> = {
  'sector-one': Gauge,
  'aegis-flow': Webhook,
  'planning-ninja': Spade,
}

function ProjectBody({ project }: { project: Project }) {
  const Icon = project.icon

  return (
    <div className="flex w-full flex-col gap-3 sm:flex-row sm:gap-6">
      <div className="shrink-0 pt-0.5 text-xs font-medium uppercase tracking-wider text-secondary/45 sm:w-28">
        {project.year}
      </div>
      <div className="flex min-w-0 flex-1 flex-col gap-2">
        <div className="flex items-start justify-between gap-3">
          <h3 className="flex items-center gap-2 text-base font-semibold leading-snug tracking-tight text-secondary">
            {Icon
              ? (
                  <Icon
                    className="size-5 shrink-0 text-primary"
                    aria-hidden
                  />
                )
              : null}
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

export const Projects = async () => {
  const projects: Project[] = (await getProjects()).map(({ slug, entry }) => {
    const startYear = entry.startDate.slice(0, 4)

    return {
      id: slug,
      title: entry.title,
      year: entry.ongoing ? `${startYear} — Present` : startYear,
      description: entry.description,
      technologies: entry.technologies,
      url: entry.liveUrl ?? entry.githubUrl ?? undefined,
      icon: icons[slug],
    }
  })

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
                key={project.id}
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
              key={project.id}
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
