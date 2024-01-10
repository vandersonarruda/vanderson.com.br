import { api } from '@/data/api'
import { Project } from '@/data/types/project'
import { ProjectItem } from './project-item'

async function getFeaturedProjects(): Promise<Project[]> {
  const response = await api('/projects/featured', {
    next: {
      revalidate: 60 * 60, // 1 hour
    },
  })

  const projects = await response.json()

  return projects
}

export default async function Projects() {
  const projects = await getFeaturedProjects()

  return (
    <div className="mx-auto grid w-[100%] grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
      {projects.map((project) => {
        return <ProjectItem key={project.id} data={project} />
      })}
    </div>
  )
}
