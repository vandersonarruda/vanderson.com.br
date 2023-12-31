import { api } from '@/data/api'
import { Project } from '@/data/types/project'

interface ProjectProps {
  params: {
    slug: string
  }
}

async function getProject(slug: string): Promise<Project> {
  const response = await api(`/projects/${slug}`, {
    cache: 'no-store',
    // next: {
    //   revalidate: 60 * 60, // 1 hour
    // },
  })

  const project = await response.json()

  return project
}

export default async function ProjectPage({ params }: ProjectProps) {
  const project = await getProject(params.slug)

  return (
    <div>
      <div className="md:rounded-small overflow-hidden rounded-xl">video</div>
      <div className="mx-6 md:mx-20 lg:mx-36">
        <h1 className="mt-4 flex flex-col text-lg font-extrabold leading-normal md:text-3xl md:leading-normal">
          {project.title}
        </h1>
        <h2 className="flex flex-col text-lg font-normal leading-normal md:text-2xl md:leading-normal">
          {project.client} ({project.year})
        </h2>
      </div>

      <div className="mx-6 mt-16 flex flex-col gap-8 text-lg font-normal leading-relaxed md:mx-20 md:mt-24 md:text-2xl md:leading-relaxed lg:mx-36 lg:mt-28">
        <p>{project.description}</p>
      </div>
    </div>
  )
}
