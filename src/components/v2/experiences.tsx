import Link from 'next/link'
import { HiArrowUpRight } from 'react-icons/hi2'
import { getExperience } from '@/lib/content'
import { formatDateRange } from '@/lib/format-date-range'

interface Experience {
  id: string
  title: string
  company: string
  url?: string
  date: string
  description: string
  technologies: readonly string[]
}

function ExperienceBody({ experience }: { experience: Experience }) {
  return (
    <div className="flex w-full flex-col gap-3 sm:flex-row sm:gap-6">
      <div className="shrink-0 pt-0.5 text-xs font-medium uppercase tracking-wider text-secondary/45 sm:w-28">
        {experience.date}
      </div>
      <div className="flex min-w-0 flex-1 flex-col gap-2">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-base font-semibold leading-snug tracking-tight text-secondary">
            {experience.title}
            <span className="mx-2 font-normal text-secondary/35">•</span>
            <span className="font-medium text-primary">{experience.company}</span>
          </h3>
          {experience.url
            ? (
                <HiArrowUpRight className="invisible mt-0.5 size-4 shrink-0 text-secondary/30 transition-colors group-hover:visible group-hover:text-primary" />
              )
            : null}
        </div>
        {experience.description
          ? <p className="text-sm leading-relaxed text-secondary/65">{experience.description}</p>
          : null}
        <ul className="mt-1 flex flex-wrap gap-2">
          {experience.technologies.map(technology => (
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

export const Experiences = async () => {
  const experiences: Experience[] = (await getExperience()).map(({ slug, entry }) => ({
    id: slug,
    title: entry.designation,
    company: entry.organizationName,
    url: entry.organizationUrl ?? undefined,
    date: formatDateRange(entry.startDate, entry.endDate, 'year'),
    description: entry.description,
    technologies: entry.technologies,
  }))

  return (
    <section
      id="experience"
      className="flex w-full scroll-mt-8 flex-col gap-4"
    >
      <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary/40">
        Experience
      </h2>
      <div className="flex flex-col gap-2">
        {experiences.map((experience) => {
          const className
            = 'group rounded-xl p-4 transition-colors duration-200 hover:bg-primary/10'

          if (experience.url) {
            return (
              <Link
                key={experience.id}
                href={experience.url}
                target="_blank"
                rel="noopener noreferrer"
                className={className}
              >
                <ExperienceBody experience={experience} />
              </Link>
            )
          }

          return (
            <div
              key={experience.id}
              className={className}
            >
              <ExperienceBody experience={experience} />
            </div>
          )
        })}
      </div>
    </section>
  )
}
