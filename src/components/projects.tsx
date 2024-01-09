import { Suspense } from 'react'
import { LoadingIcon } from './loading'
import ProjectList from './project-list'
import { api } from '@/data/api'
import { Project } from '@/data/types/project'

async function getFeaturedProjects(): Promise<Project[]> {
  const response = await api('/projects', {
    next: {
      revalidate: 60 * 60, // 1 hour
    },
  })

  const projects = await response.json()

  return projects
}

export async function Projects() {
  const projects = await getFeaturedProjects()

  return (
    <>
      <h3 className="mb-8 whitespace-nowrap text-5xl font-bold tracking-tight md:mb-10 md:text-8xl lg:mb-12 lg:text-9xl">
        Selected Work
      </h3>

      <Suspense fallback={<LoadingIcon />}>
        <ProjectList data={projects} />
      </Suspense>
    </>
  )
}
