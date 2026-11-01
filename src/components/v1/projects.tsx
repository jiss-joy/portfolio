import ProjectCard from '@/components/v1/project-card'
import { getProjects } from '@/lib/content'

const Projects = async () => {
  const projects = await getProjects()

  return (
    <div className="grid gap-4 px-4 lg:grid-cols-2">
      {projects.map(({ slug, entry }) => (
        <ProjectCard
          key={slug}
          slug={slug}
          title={entry.title}
          year={entry.startDate.slice(0, 4)}
          description={entry.description}
          technologies={entry.technologies}
        />
      ))}
    </div>
  )
}

export default Projects
