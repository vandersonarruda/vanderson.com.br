import { z } from 'zod'
import data from '../../data.json'

export async function GET(
  _: Request,
  { params }: { params: { slug: string } },
) {
  // await new Promise((resolve) => setTimeout(resolve, 3000))

  const slug = z.string().parse(params.slug)

  const projects = data.projects.find((project) => project.slug === slug)

  if (!projects) {
    return Response.json({ message: 'Project not found' }, { status: 400 })
  }

  return Response.json(projects)
}
