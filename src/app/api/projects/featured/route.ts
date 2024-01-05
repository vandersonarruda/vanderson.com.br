import data from '../../data.json'

export async function GET() {
  const featuredProjects = data.projects.filter((project) => project.featured)

  return Response.json(featuredProjects)
}
