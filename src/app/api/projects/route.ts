import data from '../data.json'

export async function GET() {
  // TODO: Remover essa linha da promise
  // await new Promise((resolve) => setTimeout(resolve, 1000))

  return Response.json(data.projects)
}
