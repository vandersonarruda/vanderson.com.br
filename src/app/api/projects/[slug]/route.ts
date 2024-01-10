import { z } from 'zod'
import data from '../../data.json'

export async function GET(
  _: Request,
  { params }: { params: { slug: string } },
) {
  try {
    const slug = z.string().parse(params.slug)

    const project = data.projects.find((p) => p.slug === slug)

    if (!project) {
      return new Response(JSON.stringify({ message: 'Project not found' }), {
        status: 400,
      })
    }

    return new Response(JSON.stringify(project))
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown error'
    return new Response(
      JSON.stringify({ message: 'Error processing request', error: message }),
      { status: 500 },
    )
  }
}
