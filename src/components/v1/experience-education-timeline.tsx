import type { TimelineEntry } from '../ui/timeline'
import { LiaToolsSolid } from 'react-icons/lia'
import { getEducation, getExperience } from '@/lib/content'
import { formatDateRange } from '@/lib/format-date-range'
import { Timeline } from '../ui/timeline'

const ExperienceEducationTimeline = async () => {
  const [experience, education] = await Promise.all([getExperience(), getEducation()])

  const jobs = experience.map(({ entry }) => ({
    startDate: entry.startDate,
    item: {
      role: entry.designation,
      organization: entry.organizationName,
      url: entry.organizationUrl ?? undefined,
      date: formatDateRange(entry.startDate, entry.endDate),
      description: entry.description || undefined,
      technologies: entry.technologies,
    } satisfies TimelineEntry,
  }))

  const schools = education.map(({ entry }) => ({
    startDate: entry.startDate,
    item: {
      role: entry.fieldOfStudy ? `${entry.degree} in ${entry.fieldOfStudy}` : entry.degree,
      organization: entry.institutionName,
      url: entry.institutionUrl ?? undefined,
      date: formatDateRange(entry.startDate, entry.endDate),
      description: entry.description || undefined,
    } satisfies TimelineEntry,
  }))

  // Jobs and education share one timeline, newest first
  const timelineData = [...jobs, ...schools]
    .sort((a, b) => b.startDate.localeCompare(a.startDate))
    .map(({ item }) => item)

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
