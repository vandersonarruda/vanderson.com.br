import { api } from '@/data/api'
import { ProjectItem } from './project-item'
import { Project } from '@/data/types/project'

async function getFeaturedProjects(): Promise<Project[]> {
  const response = await api('/projects', {
    cache: 'no-store',
    // next: {
    //   revalidate: 60 * 60, // 1 hour
    // },
  })

  const projects = await response.json()

  return projects
}

export default async function ProjectList() {
  const projects = await getFeaturedProjects()

  return (
    <div className="mx-auto grid w-[100%] grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
      {projects.map((project) => (
        <ProjectItem key={project.id} data={project} />
      ))}
    </div>
  )
}
