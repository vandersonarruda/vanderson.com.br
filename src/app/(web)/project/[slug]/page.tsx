import VideoPlayer from '@/components/videoplayer'
import { api } from '@/data/api'
import { Project } from '@/data/types/project'
import Image from 'next/image'

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
        {/* <h1 className="mt-16 flex flex-col text-lg font-extrabold leading-normal md:text-3xl md:leading-normal"> */}
        <h2 className="flex flex-col text-xl font-normal leading-normal md:text-2xl md:leading-normal lg:text-3xl lg:leading-tight">
          {project.client} ({project.year})
        </h2>

        <h1 className="text-2xl font-extrabold leading-tight md:text-4xl md:leading-tight lg:text-5xl lg:leading-tight">
          {project.title}
        </h1>
      </div>

      <div className="mt-8 md:mt-8 lg:mx-20 lg:mt-8">
        <VideoPlayer src={project.video} />
      </div>

      <div className="mx-8 md:mx-20 lg:mx-36">
        <div className="mt-8 flex flex-col gap-8 text-base font-normal leading-relaxed md:mt-12 md:text-xl md:leading-relaxed lg:mt-14 lg:text-2xl lg:leading-relaxed">
          <p>{project.description}</p>
          <p>{project.role}</p>
        </div>

        <div className="mt-8 flex flex-col gap-5 md:mt-12 lg:mt-14">
          {project.images.map((image) => {
            return (
              <Image
                key={image}
                src={`${process.env.NEXT_PUBLIC_S3_BASE_URL}/projects${image}`}
                alt="test"
                width={800}
                height={600}
                quality={75}
                className="aspect-auto max-h-[800px] w-full items-center rounded-xl object-cover"
              />
            )
          })}
        </div>
      </div>
    </>
  )
}