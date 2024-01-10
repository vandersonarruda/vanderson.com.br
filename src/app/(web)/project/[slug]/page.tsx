import VideoPlayer from '@/components/videoplayer'
import { api } from '@/data/api'
import { Project } from '@/data/types/project'
import { toBase64, shimmer } from '@/utils/placeholder-shimmer'
import Image from 'next/image'

interface ProjectProps {
  params: {
    slug: string
  }
}

async function getProject(slug: string): Promise<Project> {
  const response = await api(`/projects/${slug}`, {
    // cache: 'no-store',
    next: {
      revalidate: 60 * 60, // 1 hour
    },
  })

  const project = await response.json()

  return project
}

export async function generateMetadata({ params }: ProjectProps) {
  const project = await getProject(params.slug)

  return {
    title: project.title,
  }
}

export default async function ProjectPage({ params }: ProjectProps) {
  const project = await getProject(params.slug)

  return (
    <section className="mx-auto max-w-limit px-4 md:px-16 lg:px-16">
      <div className="mx-8 md:mx-20 lg:mx-36">
        <h2 className="flex flex-col text-xl font-normal leading-tight tracking-tight md:text-2xl md:leading-tight lg:text-3xl lg:leading-none">
          {project.client} ({project.year})
        </h2>

        <h1 className="text-2xl font-bold leading-tight tracking-tight md:text-4xl md:leading-tight lg:text-5xl lg:leading-tight">
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
              <Image
                key={image}
                src={`${process.env.NEXT_PUBLIC_S3_BASE_URL}/projects/${project.slug}/${image}`}
                alt={`Pictures about the project`}
                width={800}
                height={600}
                quality={75}
                style={{
                  objectFit: 'cover',
                }}
                placeholder={`data:image/svg+xml;base64,${toBase64(
                  shimmer(700, 475),
                )}`}
                className="h-auto max-h-[800px] w-full items-center rounded-xl object-cover"
              />
            )
          })}
        </div>
      </div>
    </section>
  )
}
