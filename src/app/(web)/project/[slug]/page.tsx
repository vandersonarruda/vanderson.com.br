import { ProjectImage } from '@/components/project-image'
import VideoPlayer from '@/components/videoplayer'
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
    <>
      <div className="mx-8 md:mx-20 lg:mx-36">
        <h2 className="flex flex-col text-xl font-normal leading-normal md:text-2xl md:leading-normal lg:text-3xl lg:leading-tight">
          {project.client} ({project.year})
        </h2>

        <h1 className="text-2xl font-extrabold leading-tight md:text-4xl md:leading-tight lg:text-5xl lg:leading-tight">
          {project.title}
        </h1>
      </div>

      <div className="mt-8 md:mt-8 lg:mx-20 lg:mt-8">
        <VideoPlayer src={project.video[0]} />
      </div>

      <div className="mx-8 md:mx-20 lg:mx-36">
        <div className="mt-8 flex flex-col gap-8 text-base font-normal leading-relaxed md:mt-12 md:text-xl md:leading-relaxed lg:mt-14 lg:text-2xl lg:leading-relaxed">
          {project.description && <p>{project.description}</p>}
          {project.role && <p>{project.role}</p>}
        </div>

        <div className="mt-8 flex flex-col gap-5 md:mt-12 lg:mt-14">
          {project.video.map((video: string, index: number) => {
            if (index === 0) return null

            return <VideoPlayer key={index} src={video} />
          })}

          {project.images.map((image) => {
            return (
              <ProjectImage key={image} image={image} slug={project.slug} />
            )
          })}
        </div>
      </div>
    </>
  )
}
